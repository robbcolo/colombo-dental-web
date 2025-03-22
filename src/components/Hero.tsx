import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { IMAGES } from '../utils/imageUtils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start sm:items-center pt-8 sm:pt-20 overflow-hidden">
      {/* Background image and overlay rimangono uguali */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}images/about/studio2.jpg")`,
          backgroundSize: 'cover',
          filter: 'brightness(0.50)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dental-900/90 via-dental-800/80 to-dental-700/70 z-1"></div>

      <div className="container mx-auto px-3 sm:px-6 z-10">
        {/* Contenuto centrale - ridotto spacing e dimensioni testo */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
          {/* Logo più piccolo su mobile */}
          <div className="animate-slide-down opacity-0 mb-4 sm:mb-6" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}images/about/logo.png`}
                alt="Logo Studio Dentistico Colombo"
                className="h-24 sm:h-20 md:h-24 w-auto mb-3 sm:mb-3" // Aumentato h-24 su mobile
              />
              <div className="bg-white/15 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-md">
                <span className="text-white text-base sm:text-lg font-medium tracking-wider">
                  <span className="text-blue-300 mr-1">STUDIO DENTISTICO</span>
                  <span className="font-bold">COLOMBO</span>
                </span>
              </div>
            </div>
          </div>

          {/* Titolo principale - aumentato margin */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-slide-down opacity-0 max-w-3xl px-4"
            style={{ animationDelay: '200ms' }}>
            La salute del tuo sorriso è la nostra priorità
          </h1>

          {/* Sottotitolo - aumentato margin */}
          <p className="text-sm sm:text-lg text-white/80 mb-8 sm:mb-6 max-w-xl px-4 animate-slide-down opacity-0"
            style={{ animationDelay: '300ms' }}>
            Da oltre 25 anni ci prendiamo cura della salute orale dei nostri pazienti con competenza, tecnologie all'avanguardia e un approccio umano e familiare.
          </p>
        </div>

        {/* Card layout - modificato per visualizzazione orizzontale su mobile */}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-3 sm:gap-6 md:gap-8 mb-6 sm:mb-8 px-2 sm:px-4 mt-auto">
          {/* Card Contattaci */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-6 rounded-lg sm:rounded-2xl h-full flex flex-col justify-center items-center">
              <div className="rounded-full bg-dental-light/20 p-2 sm:p-4 mb-1 sm:mb-4">
                <Phone size={16} className="text-blue-500 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xs sm:text-xl font-semibold text-white mb-1 sm:mb-2">Contattaci</h3>
              <p className="text-[10px] sm:text-base text-white/80 text-center mb-1 sm:mb-4 hidden sm:block">Siamo disponibili per ogni tua esigenza</p>
              <Link to="/contatti" className="w-full px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm bg-blue-500/20 hover:bg-blue-600 text-white rounded-md sm:rounded-lg font-medium transition-colors flex items-center justify-center">
                Chiamaci <ArrowRight size={10} className="ml-1 hidden sm:inline" />
              </Link>
            </div>
          </div>

          {/* Card Servizi */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-6 rounded-lg sm:rounded-2xl h-full flex flex-col justify-center items-center">
              <div className="rounded-full bg-dental-light/20 p-2 sm:p-4 mb-1 sm:mb-4">
                <ArrowRight size={16} className="text-blue-500 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xs sm:text-xl font-semibold text-white mb-1 sm:mb-2">Servizi</h3>
              <p className="text-[10px] sm:text-base text-white/80 text-center mb-1 sm:mb-4 hidden sm:block">Scopri tutti i trattamenti disponibili</p>
              <Link to="/servizi" className="w-full px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm bg-blue-500/20 hover:bg-blue-600 text-white rounded-md sm:rounded-lg font-medium transition-colors flex items-center justify-center">
                Scopri <ArrowRight size={10} className="ml-1 hidden sm:inline" />
              </Link>
            </div>
          </div>

          {/* Card Prenota */}
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-6 rounded-lg sm:rounded-2xl h-full flex flex-col justify-center items-center">
              <div className="rounded-full bg-dental-light/20 p-2 sm:p-4 mb-1 sm:mb-4">
                <Clock size={16} className="text-blue-500 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xs sm:text-xl font-semibold text-white mb-1 sm:mb-2">Prenota</h3>
              <p className="text-[10px] sm:text-base text-white/80 text-center mb-1 sm:mb-4 hidden sm:block">Fissa un appuntamento in pochi click</p>
              <Link to="/prenota" className="w-full px-2 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm bg-blue-500/20 hover:bg-blue-600 text-white rounded-md sm:rounded-lg font-medium transition-colors flex items-center justify-center">
                Prenota <ArrowRight size={10} className="ml-1 hidden sm:inline" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mb-6 sm:mb-16 text-center animate-fade-in px-4" style={{ animationDelay: '700ms' }}>
          <Link to="/chi-siamo" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm sm:text-base font-medium transition-colors">
            Scopri la nostra storia <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;