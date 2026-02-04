import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contactez SCPC</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Une urgence ? Un projet ? Nous sommes à votre écoute.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Téléphone</h3>
                        <p className="text-slate-600 text-sm mb-1">Du Lundi au Vendredi, 8h - 19h</p>
                        <p className="text-lg font-semibold text-blue-600">01 23 45 67 89</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Email</h3>
                        <p className="text-slate-600 text-sm mb-1">Réponse sous 24h</p>
                        <p className="font-medium text-slate-900">contact@scpc-plomberie.fr</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Adresse</h3>
                        <p className="text-slate-600 text-sm">
                            123 Rue de la République<br/>75001 Paris
                        </p>
                    </div>
                </div>

                 <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <Clock size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900">Horaires</h3>
                        <p className="text-slate-600 text-sm">Lun - Ven : 08:00 - 19:00</p>
                        <p className="text-slate-600 text-sm">Sam : 09:00 - 12:00</p>
                        <p className="text-slate-600 text-sm">Dim : Fermé</p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="06 00 00 00 00"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                placeholder="Décrivez votre projet ou votre problème..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;