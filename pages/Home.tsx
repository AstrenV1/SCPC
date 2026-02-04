import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Flame, Bath, Clock, CheckCircle, Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://picsum.photos/1600/900?grayscale" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Expertise Plomberie & Chauffage
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              SCPC (Steve Chupe Plomberie et Chauffage) vous accompagne dans tous vos projets : installation, dépannage d'urgence et rénovation complète.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Phone size={20} />
                Demander un devis
              </Link>
              <Link to="/plomberie" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm border border-white/20">
                Nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Domaines d'Intervention</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Des solutions adaptées à vos besoins, réalisées par des professionnels qualifiés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/plomberie" className="group bg-slate-50 rounded-2xl p-8 transition-all hover:shadow-xl hover:bg-white border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Wrench size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Plomberie Générale</h3>
              <p className="text-slate-600 mb-4">
                Recherche de fuites, débouchage, installation de robinetterie et tuyauterie. Intervention rapide.
              </p>
              <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-block">En savoir plus &rarr;</span>
            </Link>

            <Link to="/chauffage" className="group bg-slate-50 rounded-2xl p-8 transition-all hover:shadow-xl hover:bg-white border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Flame size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Chauffage</h3>
              <p className="text-slate-600 mb-4">
                Installation de chaudières, radiateurs, planchers chauffants. Entretien et mise en conformité.
              </p>
              <span className="text-orange-600 font-medium group-hover:translate-x-1 transition-transform inline-block">En savoir plus &rarr;</span>
            </Link>

            <Link to="/renovation" className="group bg-slate-50 rounded-2xl p-8 transition-all hover:shadow-xl hover:bg-white border border-slate-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                <Bath size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rénovation SDB</h3>
              <p className="text-slate-600 mb-4">
                Conception et réalisation de salles de bain clé en main. Douches italiennes, baignoires, carrelage.
              </p>
              <span className="text-teal-600 font-medium group-hover:translate-x-1 transition-transform inline-block">En savoir plus &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://picsum.photos/800/600" alt="Technicien au travail" className="rounded-2xl shadow-lg" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi choisir SCPC ?</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Intervention Rapide</h4>
                                <p className="text-slate-600 text-sm">Nous nous engageons à intervenir dans les plus brefs délais pour vos urgences.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Travail de Qualité</h4>
                                <p className="text-slate-600 text-sm">Nos artisans sont certifiés et utilisent des matériaux de haute qualité pour garantir la durabilité.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0">
                                <CheckCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Transparence</h4>
                                <p className="text-slate-600 text-sm">Devis clair et détaillé avant chaque intervention. Pas de surprise sur la facture.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;