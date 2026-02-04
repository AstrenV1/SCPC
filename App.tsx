import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Plumbing from './pages/Plumbing';
import Heating from './pages/Heating';
import Renovation from './pages/Renovation';
import Contact from './pages/Contact';
import VoiceAssistant from './components/VoiceAssistant';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plomberie" element={<Plumbing />} />
            <Route path="/chauffage" element={<Heating />} />
            <Route path="/renovation" element={<Renovation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <VoiceAssistant />
      </div>
    </HashRouter>
  );
};

export default App;