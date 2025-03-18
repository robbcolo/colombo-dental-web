
import React from 'react';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-dental to-dental-light rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prenota la tua visita oggi stesso</h2>
              <p className="text-white/90 mb-8 max-w-md">
                Fissa un appuntamento con uno dei nostri specialisti. La prevenzione è il primo passo verso un sorriso sano!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 text-white/90">
                  <Calendar className="w-6 h-6 text-white" />
                  <span>Appuntamenti disponibili anche in orari serali</span>
                </div>
                <div className="flex items-center space-x-4 text-white/90">
                  <Clock className="w-6 h-6 text-white" />
                  <span>Prima consultazione in 24-48 ore</span>
                </div>
                <div className="flex items-center space-x-4 text-white/90">
                  <User className="w-6 h-6 text-white" />
                  <span>Medici specialisti per ogni esigenza</span>
                </div>
              </div>
              
              <Link 
                to="/prenota" 
                className="inline-flex items-center bg-white text-dental px-6 py-3 rounded-lg hover:bg-dental-50 transition-colors duration-300 font-medium"
              >
                Prenota ora
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1629909614087-fd2453fc51d9?q=80&w=2062&auto=format&fit=crop" 
                alt="Dentista con paziente" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dental-light/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
