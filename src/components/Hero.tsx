import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { IMAGES } from '../utils/imageUtils';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Full-width background image with overlay */}
      <div
  className="absolute inset-0 bg-cover bg-center z-0"
  style={{
    backgroundImage: `url("${import.meta.env.BASE_URL}images/about/studio2.jpg")`,
    backgroundSize: 'cover',
    filter: 'brightness(0.50)'
  }}
/>

      {/* Gradient overlay on top of the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-dental-900/90 via-dental-800/80 to-dental-700/70 z-1"></div>

      <div className="container mx-auto px-6 z-10 pt-10 md:pt-0">
        {/* Centered content approach - ridotto il margin-bottom */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Logo e nome studio - logo ingrandito */}
          <div className="animate-slide-down opacity-0 mb-6" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}images/about/logo.png`}
                alt="Logo Studio Dentistico Colombo"
                className="h-24 w-auto mb-3"
              />
              <div className="bg-white/15 backdrop-blur-sm px-6 py-2 rounded-md">
                <span className="text-white text-lg font-medium tracking-wider">
                  <span className="text-blue-300 mr-1">STUDIO DENTISTICO</span>
                  <span className="font-bold">COLOMBO</span>
                </span>
              </div>
            </div>
          </div>

          {/* Titolo principale */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-down opacity-0 max-w-3xl"
            style={{ animationDelay: '200ms' }}>
            La salute del tuo sorriso è la nostra priorità
          </h1>

          {/* Sottotitolo - ridotto il margin-bottom */}
          <p className="text-lg text-white/80 mb-6 max-w-xl animate-slide-down opacity-0"
            style={{ animationDelay: '300ms' }}>
            Da oltre 25 anni ci prendiamo cura della salute orale dei nostri pazienti con competenza, tecnologie all'avanguardia e un approccio umano e familiare.
          </p>
        </div>

        {/* Three column layout with info cards - dimensioni originali ripristinate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left card */}
          <div className="md:col-span-1 animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-center items-center">
              <div className="rounded-full bg-dental-light/20 p-4 mb-4">
                <Phone size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Contattaci</h3>
              <p className="text-white/80 text-center mb-4">Siamo disponibili per ogni tua esigenza</p>
              <Link to="/contatti" className="px-4 py-2 text-sm bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center">
                Chiamaci ora <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Central card */}
          <div className="md:col-span-1 animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-center items-center">
              <div className="rounded-full bg-dental-light/20 p-4 mb-4">
                <ArrowRight size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">I nostri servizi</h3>
              <p className="text-white/80 text-center mb-4">Scopri tutti i trattamenti disponibili</p>
              <Link to="/servizi" className="px-4 py-2 text-sm bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center">
                Scopri di più <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div className="md:col-span-1 animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-center items-center">
              <div className="rounded-full bg-dental-light/20 p-4 mb-4">
                <Clock size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Prenota ora</h3>
              <p className="text-white/80 text-center mb-4">Fissa un appuntamento in pochi click</p>
              <Link to="/prenota" className="px-4 py-2 text-sm bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center">
                Prenota visita <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA - spostato più in alto con spazio sotto */}
        <div className="mb-16 text-center animate-fade-in" style={{ animationDelay: '700ms' }}>
          <Link to="/chi-siamo" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors">
            Scopri la nostra storia <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;