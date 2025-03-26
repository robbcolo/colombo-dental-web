
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dental to-dental-light text-white pt-16 pb-8"> {/* Stesso gradiente del BookAppointment */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Studio Dentistico Colombo</h3>
            <p className="text-white/90 max-w-xs text-center"> {/* Aggiunto text-center */}
              Specialisti in odontoiatria con approccio familiare, cura e professionalità per il sorriso di tutti.
            </p>
            <div className="flex justify-center space-x-4 pt-2"> {/* Aggiunto justify-center */}
              <a href="https://www.facebook.com/people/Studio-Dentistico-Colombo/61567455836003/" target="_blank" rel="noopener noreferrer" className="text-dental-100 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/studiodentisticocolombo/" target="_blank" rel="noopener noreferrer" className="text-dental-100 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-dental-100 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/JeyRSCc4687bBpMS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dental-100 hover:text-blue-500 transition-colors"
                >
                  Via Fontanelle, SNC, Patti (ME), 98066
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-dental-100 flex-shrink-0" />
                <a
                  href="tel:094122749"
                  className="text-dental-100 hover:text-blue-500 transition-colors"
                >
                  0941 22749
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone size={20} className="text-dental-100 flex-shrink-0" />
                <a
                  href="tel:+393791523085"
                  className="text-dental-100 hover:text-blue-500 transition-colors"
                >
                  379 1523085
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-dental-100 flex-shrink-0" />
                <a
                  href="mailto:colombostudiodentistico@gmail.com"
                  className="text-dental-100 hover:text-blue-500 transition-colors"
                >
                  colombostudiodentistico@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-dental-100 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-dental-100">Lun-Giov: 8:30-12:30 ; 16:00-20:00</p>
                  <p className="text-dental-100">Ven: 8:30-12:30</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-dental-100 hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/chi-siamo" className="text-dental-100 hover:text-blue-500 transition-colors">Chi Siamo</Link></li>
              <li><Link to="/servizi" className="text-dental-100 hover:text-blue-500 transition-colors">Servizi</Link></li>
              <li><Link to="/contatti" className="text-dental-100 hover:text-blue-500 transition-colors">Contatti</Link></li>
              <li><Link to="/prenota" className="text-dental-100 hover:text-blue-500 transition-colors">Prenota Visita</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li><Link to="/servizi/igiene-dentale" className="text-dental-100 hover:text-blue-500 transition-colors">Igiene Dentale</Link></li>
              <li><Link to="/servizi/implantologia" className="text-dental-100 hover:text-blue-500 transition-colors">Implantologia</Link></li>
              <li><Link to="/servizi/ortodonzia" className="text-dental-100 hover:text-blue-500 transition-colors">Ortodonzia</Link></li>
              <li><Link to="/servizi/estetica-dentale" className="text-dental-100 hover:text-blue-500 transition-colors">Estetica Dentale</Link></li>
              <li><Link to="/servizi/odontoiatria-pediatrica" className="text-dental-100 hover:text-blue-500 transition-colors">Odontoiatria Pediatrica</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dental-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dental-100 text-sm">
              © {new Date().getFullYear()} Studio Dentistico Colombo. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-dental-100 hover:text-blue-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/termini" className="text-dental-100 hover:text-blue-500 transition-colors text-sm">
                Termini e Condizioni
              </Link>
              <Link to="/cookie" className="text-dental-100 hover:text-blue-500 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
