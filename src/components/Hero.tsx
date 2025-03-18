
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop")',
          backgroundSize: 'cover',
          filter: 'brightness(0.2)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-dental-900/90 to-dental-900/70 z-1"></div>
      
      <div className="container mx-auto px-6 z-10 pt-10 md:pt-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div
              className="animate-slide-down opacity-0"
              style={{ animationDelay: '100ms' }}
            >
              <span className="inline-block bg-dental/20 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
                Studio Dentistico Colombo
              </span>
            </div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-down opacity-0"
              style={{ animationDelay: '200ms' }}
            >
              Il sorriso della tua famiglia in mani sicure
            </h1>
            <p 
              className="text-lg text-white/80 mb-8 max-w-lg animate-slide-down opacity-0"
              style={{ animationDelay: '300ms' }}
            >
              Uno studio dentistico a conduzione familiare, dove professionalità e attenzione al paziente si fondono in un unico approccio per la salute del tuo sorriso.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 animate-slide-down opacity-0"
              style={{ animationDelay: '400ms' }}
            >
              <Link to="/prenota" className="btn-primary flex items-center justify-center">
                Prenota una visita
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/servizi" className="btn-secondary flex items-center justify-center">
                Scopri i nostri servizi
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden animate-slide-up opacity-0" style={{ animationDelay: '500ms' }}>
              <div className="glass absolute inset-0 rotate-3 transform-gpu rounded-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Team di dentisti" 
                className="w-full h-full object-cover rounded-2xl z-10 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
