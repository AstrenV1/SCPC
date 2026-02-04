import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">SCPC</h3>
            <p className="text-sm text-slate-400 mb-4">
              Steve Chupe Plomberie et Chauffage. Votre expert confiance pour tous vos travaux d'installation, dépannage et rénovation.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/plomberie" className="hover:text-blue-400 transition-colors">Plomberie Générale</Link></li>
              <li><Link to="/chauffage" className="hover:text-blue-400 transition-colors">Installation Chauffage</Link></li>
              <li><Link to="/renovation" className="hover:text-blue-400 transition-colors">Rénovation Salle de Bain</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Demander un Devis</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span>123 Rue de la République<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <span>contact@scpc-plomberie.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SCPC - Steve Chupe Plomberie et Chauffage. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;