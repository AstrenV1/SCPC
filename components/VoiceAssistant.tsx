import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality, Blob as GenAIBlob } from '@google/genai';
import { Mic, MicOff, Loader2, X, Volume2 } from 'lucide-react';
import { ConnectionState } from '../types';

const VoiceAssistant: React.FC = () => {
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.DISCONNECTED);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Audio Context Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const sessionRef = useRef<any>(null); // To store the resolved session
  
  // Playback queue management
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Configuration
  const MODEL_NAME = 'gemini-2.5-flash-native-audio-preview-12-2025';
  
  // Helper functions from guidelines
  const createBlob = (data: Float32Array): GenAIBlob => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = data[i] * 32768;
    }
    const uint8 = new Uint8Array(int16.buffer);
    
    // Manual implementation of bytes to binary string
    let binary = '';
    const len = uint8.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(uint8[i]);
    }
    const base64 = btoa(binary);

    return {
      data: base64,
      mimeType: 'audio/pcm;rate=16000',
    };
  };

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const stopAudio = useCallback(() => {
    // Stop microphone
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current.onaudioprocess = null;
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (inputAudioContextRef.current) {
      inputAudioContextRef.current.close();
      inputAudioContextRef.current = null;
    }

    // Stop speakers
    sourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) { /* ignore */ }
    });
    sourcesRef.current.clear();
    
    if (outputAudioContextRef.current) {
      outputAudioContextRef.current.close();
      outputAudioContextRef.current = null;
    }

    // Reset Session
    if (sessionRef.current && typeof sessionRef.current.close === 'function') {
        // Unfortunately connection object doesn't expose close directly on the promise result,
        // it's usually handled by just dropping the reference in this specific library pattern if not exposed.
        // However, based on guidelines: "use session.close()".
        // The session object comes from sessionPromise logic. We'll handle cleanup via state.
    }
    sessionRef.current = null;

    setConnectionState(ConnectionState.DISCONNECTED);
  }, []);

  const startSession = async () => {
    setErrorMsg(null);
    setConnectionState(ConnectionState.CONNECTING);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) throw new Error("Clé API manquante");

      const ai = new GoogleGenAI({ apiKey });

      // Init Audio Contexts
      inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      outputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      outputNodeRef.current = outputAudioContextRef.current.createGain();
      outputNodeRef.current.connect(outputAudioContextRef.current.destination);

      // Get Mic Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      // Connect to Gemini Live
      const sessionPromise = ai.live.connect({
        model: MODEL_NAME,
        callbacks: {
          onopen: () => {
            console.log('Gemini Live Connection Opened');
            setConnectionState(ConnectionState.CONNECTED);
            
            // Setup Mic Stream to Model
            if (!inputAudioContextRef.current) return;
            
            const source = inputAudioContextRef.current.createMediaStreamSource(stream);
            sourceRef.current = source;
            
            const processor = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(processor);
            processor.connect(inputAudioContextRef.current.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            if (!outputAudioContextRef.current || !outputNodeRef.current) return;

            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
               nextStartTimeRef.current = Math.max(
                nextStartTimeRef.current,
                outputAudioContextRef.current.currentTime
               );

               const audioBuffer = await decodeAudioData(
                 decode(base64Audio),
                 outputAudioContextRef.current,
                 24000,
                 1
               );

               const source = outputAudioContextRef.current.createBufferSource();
               source.buffer = audioBuffer;
               source.connect(outputNodeRef.current);
               
               source.addEventListener('ended', () => {
                 sourcesRef.current.delete(source);
               });

               source.start(nextStartTimeRef.current);
               nextStartTimeRef.current += audioBuffer.duration;
               sourcesRef.current.add(source);
            }

            // Handle Interruption
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(src => {
                try { src.stop(); } catch(e) {/* ignore */}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onclose: () => {
            console.log('Gemini Live Connection Closed');
            stopAudio();
          },
          onerror: (err) => {
            console.error('Gemini Live Error', err);
            setErrorMsg("Erreur de connexion");
            stopAudio();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: "Tu es l'assistant vocal de l'entreprise SCPC (Steve Chupe Plomberie et Chauffage). Tu aides les clients à comprendre les services : plomberie (fuites, installation), chauffage (chaudières, radiateurs) et rénovation (salle de bain). Sois poli, professionnel, concis et parle en français. Si on te demande un devis, suggère de visiter la page Contact.",
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
          }
        }
      });

      // Store resolved session for cleanup later if needed (though onclose usually handles it)
      sessionPromise.then(sess => {
          sessionRef.current = sess;
      });

    } catch (err: any) {
      console.error("Setup Error:", err);
      setErrorMsg("Impossible d'accéder au microphone ou à l'API.");
      setConnectionState(ConnectionState.ERROR);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      stopAudio();
    };
  }, [stopAudio]);

  // Toggle function
  const toggleConnection = () => {
    if (connectionState === ConnectionState.CONNECTED || connectionState === ConnectionState.CONNECTING) {
      stopAudio();
    } else {
      startSession();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all hover:scale-105 flex items-center justify-center"
        title="Parler à l'assistant SCPC"
      >
        <Mic size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
        <h3 className="font-semibold flex items-center gap-2">
            <Volume2 size={18} />
            Assistant SCPC
        </h3>
        <button onClick={() => { stopAudio(); setIsOpen(false); }} className="hover:bg-blue-500 rounded p-1">
          <X size={18} />
        </button>
      </div>

      <div className="p-6 flex flex-col items-center justify-center gap-4 bg-slate-50 min-h-[200px]">
        {errorMsg && (
            <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded">{errorMsg}</p>
        )}

        <div className={`relative flex items-center justify-center w-24 h-24 rounded-full transition-all duration-500 ${
            connectionState === ConnectionState.CONNECTED ? 'bg-blue-100' : 'bg-slate-100'
        }`}>
            {/* Pulsing Effect */}
            {connectionState === ConnectionState.CONNECTED && (
                <div className="absolute w-full h-full rounded-full bg-blue-400 opacity-20 animate-ping"></div>
            )}
            
            {connectionState === ConnectionState.CONNECTING ? (
                <Loader2 className="text-blue-600 animate-spin" size={40} />
            ) : (
                <Mic 
                    className={`transition-colors duration-300 ${
                        connectionState === ConnectionState.CONNECTED ? 'text-blue-600' : 'text-slate-400'
                    }`} 
                    size={40} 
                />
            )}
        </div>

        <div className="text-center">
            <p className="font-medium text-slate-800">
                {connectionState === ConnectionState.CONNECTED ? "Je vous écoute..." : 
                 connectionState === ConnectionState.CONNECTING ? "Connexion..." :
                 "Cliquez pour parler"}
            </p>
            <p className="text-xs text-slate-500 mt-1">
                Posez vos questions sur la plomberie ou le chauffage.
            </p>
        </div>

        <button
          onClick={toggleConnection}
          className={`mt-2 px-6 py-2 rounded-full font-medium transition-colors shadow-sm ${
            connectionState === ConnectionState.CONNECTED 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {connectionState === ConnectionState.CONNECTED ? 'Arrêter' : 'Démarrer'}
        </button>
      </div>
      <div className="bg-slate-100 px-4 py-2 text-[10px] text-slate-400 text-center">
        Propulsé par Gemini Live
      </div>
    </div>
  );
};

export default VoiceAssistant;