import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Plumbing: React.FC = () => {
  const services = [
    "Recherche et réparation de fuites d'eau",
    "Débouchage de canalisations (WC, évier, douche)",
    "Installation de robinetterie (mitigeurs, mélangeurs)",
    "Remplacement de chasse d'eau",
    "Installation et remplacement de chauffe-eau",
    "Raccordement lave-linge et lave-vaisselle",
    "Mise aux normes des installations"
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Plomberie Générale</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Des solutions fiables pour tous vos problèmes de plomberie sanitaire.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Nos Prestations</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Chez SCPC, nous comprenons qu'un problème de plomberie peut survenir à tout moment et causer des dégâts importants. C'est pourquoi Steve Chupe et son équipe mettent tout en œuvre pour vous dépanner rapidement et efficacement.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Demander une intervention
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <img src="https://picsum.photos/600/400?random=1" alt="Plomberie" className="rounded-lg shadow-md w-full object-cover h-64" />
            <img src="https://picsum.photos/600/400?random=2" alt="Installation robinet" className="rounded-lg shadow-md w-full object-cover h-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plumbing;