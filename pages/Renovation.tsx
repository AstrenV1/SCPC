import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Renovation: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="bg-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Rénovation Salle de Bain</h1>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Transformez votre salle de bain en un espace de bien-être moderne.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-16">
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Votre projet clé en main</h2>
                <p className="text-slate-600">
                    De la conception à la réalisation, SCPC prend en charge l'intégralité de vos travaux de rénovation. Nous coordonnons plomberie, carrelage et installation sanitaire pour un résultat impeccable.
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <img src="https://picsum.photos/400/300?random=5" alt="Douche italienne" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-bold text-lg mb-2">Douches à l'italienne</h3>
                    <p className="text-sm text-slate-600">Installation de receveurs extra-plats, parois vitrées sur mesure et colonnes de douche modernes.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <img src="https://picsum.photos/400/300?random=6" alt="Meuble vasque" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-bold text-lg mb-2">Ameublement</h3>
                    <p className="text-sm text-slate-600">Pose de meubles vasques, armoires de toilette et miroirs éclairés.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                    <img src="https://picsum.photos/400/300?random=7" alt="Carrelage" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-bold text-lg mb-2">PMR & Accessibilité</h3>
                    <p className="text-sm text-slate-600">Aménagement de salles de bain adaptées aux personnes à mobilité réduite.</p>
                </div>
            </div>

             <div className="bg-teal-50 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Prêt à lancer votre projet ?</h3>
                    <p className="text-slate-600">Contactez Steve Chupe pour une étude personnalisée de votre rénovation.</p>
                </div>
                <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg whitespace-nowrap">
                    Demander un devis gratuit
                </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Renovation;