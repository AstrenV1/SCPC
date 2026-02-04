import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Heating: React.FC = () => {
  const services = [
    "Installation de chaudières gaz et fioul",
    "Pose de pompes à chaleur",
    "Installation de radiateurs",
    "Plancher chauffant hydraulique",
    "Désembouage de circuit de chauffage",
    "Contrat d'entretien annuel",
    "Remplacement de thermostat"
  ];

  return (
    <div className="bg-white">
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Chauffage</h1>
          <p className="text-orange-100 max-w-2xl mx-auto">
            Confort thermique et économies d'énergie pour votre habitat.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="order-2 lg:order-1 space-y-6">
            <img src="https://picsum.photos/600/400?random=3" alt="Chaudière" className="rounded-lg shadow-md w-full object-cover h-64" />
            <img src="https://picsum.photos/600/400?random=4" alt="Radiateur" className="rounded-lg shadow-md w-full object-cover h-64" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Installation & Entretien</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Un système de chauffage performant est essentiel pour votre confort et pour réduire vos factures énergétiques. SCPC vous conseille sur le choix du meilleur équipement adapté à votre logement.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
             <div className="mt-10 p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="text-sm text-orange-800 font-medium">
                    💡 Bon à savoir : L'entretien annuel de votre chaudière est une obligation légale. Pensez à prendre rendez-vous !
                </p>
            </div>
            <div className="mt-8">
              <Link to="/contact" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Obtenir un devis chauffage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heating;