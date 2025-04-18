import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock } from 'lucide-react';

const Hero = () => {
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const duration = 30000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const xMove = Math.sin(progress * Math.PI * 2) * 5;
      setBackgroundPosition(xMove);
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between sm:justify-start overflow-hidden">
      {/* Background con movimento */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url("${import.meta.env.BASE_URL}images/about/studio2.jpg")`,
          backgroundSize: 'cover',
          filter: 'brightness(0.50)',
          transform: `scale(1.1) translate3d(${backgroundPosition}%, 0, 0)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-dental-900/90 via-dental-800/80 to-dental-700/70 z-1"></div>

      {/* Removed container class and adjusted padding for mobile */}
      <div className="w-full mx-auto sm:container sm:px-6 z-10 flex flex-col justify-between h-screen pt-[5vh] sm:py-0">
        {/* Header Content */}
        <div className="flex flex-col items-center text-center mt-[5vh] sm:mt-20">
          {/* Logo Section */}
          <div className="animate-slide-down opacity-0 mb-6 sm:mb-6" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col items-center">
              <img
                src={`${import.meta.env.BASE_URL}images/about/logo.png`}
                alt="Logo Studio Dentistico Colombo"
                className="h-20 sm:h-20 md:h-24 w-auto mb-3"
              />
              <div className="bg-white/15 backdrop-blur-sm px-4 sm:px-6 py-1.5 sm:py-2 rounded-md">
                <span className="text-white text-base sm:text-lg font-medium tracking-wider">
                  <span className="text-blue-300 mr-1">STUDIO DENTISTICO</span>
                  <span className="font-bold">COLOMBO</span>
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center mt-8 sm:mt-0 mb-8 sm:mb-6">
            <div className="sm:block my-auto">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-slide-down opacity-0 max-w-3xl px-4"
                style={{ animationDelay: '200ms' }}>
                La salute del tuo sorriso è la nostra priorità
              </h1>

              <p className="text-sm sm:text-lg text-white/80 mb-8 sm:mb-6 max-w-xl px-4 mx-auto animate-slide-down opacity-0"
                style={{ animationDelay: '300ms' }}>
                Da oltre 25 anni ci prendiamo cura della salute orale dei nostri pazienti con competenza, tecnologie all'avanguardia e un approccio umano e familiare.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section - Mobile Version */}
        <div className="mt-auto w-full sm:hidden">
          {/* Removed max-w-md and mx-auto to allow full width */}
          <div className="flex flex-col gap-3 mb-2 px-4">
            {/* Card Contattaci - Mobile */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
              <div
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                onMouseEnter={() => setActiveCard('contattaci-mobile')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-center">
                  <div className={`rounded-full bg-dental-light/20 p-3 mr-4 transition-all duration-300 ${activeCard === 'contattaci-mobile' ? 'bg-dental' : ''}`}>
                    <Phone size={20} className="text-blue-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Contattaci</h3>
                </div>
                <Link to="/contatti" className="bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors px-4 py-2 text-sm flex items-center">
                  Chiamaci
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card Servizi - Mobile */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                onMouseEnter={() => setActiveCard('servizi-mobile')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-center">
                  <div className={`rounded-full bg-dental-light/20 p-3 mr-4 transition-all duration-300 ${activeCard === 'servizi-mobile' ? 'bg-dental' : ''}`}>
                    <ArrowRight size={20} className="text-blue-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Servizi</h3>
                </div>
                <Link to="/servizi" className="bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors px-4 py-2 text-sm flex items-center">
                  Scopri
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card Prenota - Mobile */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
              <div
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                onMouseEnter={() => setActiveCard('prenota-mobile')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-center">
                  <div className={`rounded-full bg-dental-light/20 p-3 mr-4 transition-all duration-300 ${activeCard === 'prenota-mobile' ? 'bg-dental' : ''}`}>
                    <Clock size={20} className="text-blue-500" />
                  </div>
                  <h3 className="text-base font-semibold text-white">Prenota</h3>
                </div>
                <Link to="/prenota" className="bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors px-4 py-2 text-sm flex items-center">
                  Prenota
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section - Desktop Version */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 gap-6 md:gap-8 mb-8 px-4">
            {/* Card Contattaci - Desktop */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
              <div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-center items-center transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                onMouseEnter={() => setActiveCard('contattaci-desktop')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`rounded-full bg-dental-light/20 p-4 mb-4 transition-all duration-300 ${activeCard === 'contattaci-desktop' ? 'bg-dental' : ''}`}>
                  <Phone size={24} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Contattaci</h3>
                <p className="text-base text-white/80 text-center mb-4">
                  Siamo disponibili per ogni tua esigenza
                </p>
                <Link to="/contatti" className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                  Chiamaci <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card Servizi - Desktop */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-center items-center transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                onMouseEnter={() => setActiveCard('servizi-desktop')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`rounded-full bg-dental-light/20 p-4 mb-4 transition-all duration-300 ${activeCard === 'servizi-desktop' ? 'bg-dental' : ''}`}>
                  <ArrowRight size={24} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Servizi</h3>
                <p className="text-base text-white/80 text-center mb-4">
                  Scopri tutti i trattamenti disponibili
                </p>
                <Link to="/servizi" className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                  Scopri <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Card Prenota - Desktop */}
            <div className="animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
              <div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col justify-center items-center transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
                onMouseEnter={() => setActiveCard('prenota-desktop')}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`rounded-full bg-dental-light/20 p-4 mb-4 transition-all duration-300 ${activeCard === 'prenota-desktop' ? 'bg-dental' : ''}`}>
                  <Clock size={24} className="text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Prenota</h3>
                <p className="text-base text-white/80 text-center mb-4">
                  Fissa un appuntamento in pochi click
                </p>
                <Link to="/prenota" className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center">
                  Prenota <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mb-4 sm:mb-16 text-center animate-slide-up opacity-0" style={{ animationDelay: '700ms' }}>
          <Link
            to="/chi-siamo"
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            onMouseEnter={() => setActiveCard('storia')}
            onMouseLeave={() => setActiveCard(null)}
          >
            Scopri la nostra storia <ArrowRight size={14} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;