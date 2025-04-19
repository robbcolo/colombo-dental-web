import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ChevronDown, ChevronUp, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Footer = () => {
  // Stato per i menu accordion su mobile
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Funzione per gestire l'apertura/chiusura dei menu accordion
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-r from-dental to-dental-light text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Logo e social per mobile - sempre visibili */}
        <div className="md:hidden flex flex-col items-center mb-8">
          <h3 className="text-xl font-bold mb-3">Studio Dentistico Colombo</h3>
          <div className="flex space-x-6 mt-2">
            <a href="https://www.facebook.com/people/Studio-Dentistico-Colombo/61567455836003/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="https://www.instagram.com/studiodentisticocolombo/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>

        {/* Info Cards per mobile - sempre visibili */}
        <div className="md:hidden grid grid-cols-3 gap-3 mb-8">
          <a href="tel:094122749" className="bg-white/10 flex flex-col items-center justify-center p-3 rounded-lg">
            <Phone size={18} className="mb-1 text-dental-100" />
            <span className="text-xs font-medium">Telefono</span>
          </a>
          <a href="tel:+393791523085" className="bg-white/10 flex flex-col items-center justify-center p-3 rounded-lg">
            <Smartphone size={18} className="mb-1 text-dental-100" />
            <span className="text-xs font-medium">Cellulare</span>
          </a>
          <a href="mailto:colombostudiodentistico@gmail.com" className="bg-white/10 flex flex-col items-center justify-center p-3 rounded-lg">
            <Mail size={18} className="mb-1 text-dental-100" />
            <span className="text-xs font-medium">Email</span>
          </a>
        </div>

        {/* Accordion Sections per Mobile */}
        <div className="md:hidden space-y-2 mb-8">
          {/* Accordion: Dove Siamo e Orari */}
          <div className="border-b border-white/10">
            <button
              className="w-full flex justify-between items-center py-3"
              onClick={() => toggleSection('info')}
            >
              <span className="font-semibold">Dove Siamo e Orari</span>
              {openSection === 'info' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div className={cn(
              "overflow-hidden transition-all duration-300",
              openSection === 'info' ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"
            )}>
              <div className="flex items-start space-x-2 mb-3">
                <MapPin size={16} className="text-dental-100 mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/JeyRSCc4687bBpMS8" target="_blank" rel="noopener noreferrer" className="text-sm text-dental-100">
                  Via Fontanelle, SNC, Patti (ME), 98066
                </a>
              </div>
              <div className="flex space-x-2">
                <Clock size={16} className="text-dental-100 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white/80">Lun-Giov: 8:30-12:30 ; 16:00-20:00</p>
                  <p className="text-white/80">Ven: 8:30-12:30</p>
                  <p className="text-white/80">Sab-Dom: Chiuso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accordion: Link Rapidi */}
          <div className="border-b border-white/10">
            <button
              className="w-full flex justify-between items-center py-3"
              onClick={() => toggleSection('link-rapidi')}
            >
              <span className="font-semibold">Link Rapidi</span>
              {openSection === 'link-rapidi' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div className={cn(
              "grid grid-cols-2 gap-y-1 overflow-hidden transition-all duration-300",
              openSection === 'link-rapidi' ? "max-h-56 opacity-100 pb-3" : "max-h-0 opacity-0"
            )}>
              <Link to="/" className="text-sm text-dental-100">Home</Link>
              <Link to="/chi-siamo" className="text-sm text-dental-100">Chi Siamo</Link>
              <Link to="/servizi" className="text-sm text-dental-100">Servizi</Link>
              <Link to="/prenota" className="text-sm text-dental-100">Prenota Visita</Link>
            </div>
          </div>

          {/* Accordion: Servizi */}
          <div className="border-b border-white/10">
            <button
              className="w-full flex justify-between items-center py-3"
              onClick={() => toggleSection('servizi')}
            >
              <span className="font-semibold">Servizi</span>
              {openSection === 'servizi' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            <div className={cn(
              "grid grid-cols-1 gap-y-1 overflow-hidden transition-all duration-300",
              openSection === 'servizi' ? "max-h-56 opacity-100 pb-3" : "max-h-0 opacity-0"
            )}>
              <Link to="/servizi/igiene-dentale" className="text-sm text-dental-100">Igiene Dentale</Link>
              <Link to="/servizi/implantologia" className="text-sm text-dental-100">Implantologia</Link>
              <Link to="/servizi/ortodonzia" className="text-sm text-dental-100">Ortodonzia</Link>
              <Link to="/servizi/estetica-dentale" className="text-sm text-dental-100">Estetica Dentale</Link>
              <Link to="/servizi/odontoiatria-pediatrica" className="text-sm text-dental-100">Odontoiatria Pediatrica</Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Riorganizzato in 3 colonne */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-16">
          {/* Column 1 - Info e Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Studio Dentistico Colombo</h3>

            <div className="space-y-2.5 mb-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-dental-100 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/JeyRSCc4687bBpMS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dental-100 hover:text-blue-300 transition-colors"
                >
                  Via Fontanelle, SNC, Patti (ME), 98066
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-dental-100 flex-shrink-0" />
                <a
                  href="tel:094122749"
                  className="text-sm text-dental-100 hover:text-blue-300 transition-colors"
                >
                  0941 22749
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone size={18} className="text-dental-100 flex-shrink-0" />
                <a
                  href="tel:+393791523085"
                  className="text-sm text-dental-100 hover:text-blue-300 transition-colors"
                >
                  379 1523085
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-dental-100 flex-shrink-0" />
                <a
                  href="mailto:colombostudiodentistico@gmail.com"
                  className="text-sm text-dental-100 hover:text-blue-300 transition-colors break-all"
                >
                  colombostudiodentistico@gmail.com
                </a>
              </div>
            </div>

            <div className="flex space-x-3 mt-5">
              <a
                href="https://www.facebook.com/people/Studio-Dentistico-Colombo/61567455836003/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/studiodentisticocolombo/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Column 2 - Link Rapidi */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Link Rapidi</h3>
            <div className="grid grid-cols-1 gap-y-1.5">
              <Link to="/" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Home</Link>
              <Link to="/chi-siamo" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Chi Siamo</Link>
              <Link to="/servizi" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Servizi</Link>
              <Link to="/prenota" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Prenota Visita</Link>
            </div>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Servizi</h3>
            <div className="grid grid-cols-1 gap-y-1.5">
              <Link to="/servizi/igiene-dentale" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Igiene Dentale</Link>
              <Link to="/servizi/implantologia" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Implantologia</Link>
              <Link to="/servizi/ortodonzia" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Ortodonzia</Link>
              <Link to="/servizi/estetica-dentale" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Estetica Dentale</Link>
              <Link to="/servizi/odontoiatria-pediatrica" className="text-sm text-dental-100 hover:text-blue-300 transition-colors">Odontoiatria Pediatrica</Link>
            </div>
          </div>
        </div>

        {/* Orari per desktop */}
        <div className="hidden md:block border-t border-white/10 mt-8 pt-6 pb-2">
          <div className="flex items-center space-x-3 justify-center">
            <Clock size={18} className="text-dental-100 flex-shrink-0" />
            <span className="text-sm font-medium text-dental-100">Orari:</span>
            <span className="text-sm text-dental-100">Lun-Giov: 8:30-12:30, 16:00-20:00</span>
            <span className="mx-2">|</span>
            <span className="text-sm text-dental-100">Ven: 8:30-12:30</span>
            <span className="mx-2">|</span>
            <span className="text-sm text-dental-100">Sab-Dom: Chiuso</span>
          </div>
        </div>

        {/* Copyright and Policy Section - Desktop & Mobile */}
        <div className="border-t border-white/10 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-dental-100 text-xs text-center md:text-left">
              © {new Date().getFullYear()} Studio Dentistico Colombo. Tutti i diritti riservati.
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 md:mt-0">
              <Link to="/privacy" className="text-dental-100 hover:text-blue-300 transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link to="/termini" className="text-dental-100 hover:text-blue-300 transition-colors text-xs">
                Termini e Condizioni
              </Link>
              <Link to="/cookie" className="text-dental-100 hover:text-blue-300 transition-colors text-xs">
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