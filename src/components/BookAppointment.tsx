import React from 'react';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../utils/imageUtils';

const BookAppointment = () => {
  const features = [
    {
      icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-100" />,
      text: "Appuntamenti disponibili anche in orari serali"
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-100" />,
      text: "Prima consultazione in 24-48 ore"
    },
    {
      icon: <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-100" />,
      text: "Medici specialisti per ogni esigenza"
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-dental to-dental-light rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Immagine Mobile */}
            <div className="lg:hidden relative h-48 sm:h-64">
              <img
                src={IMAGES.bookAppointment.dentistWithPatient}
                alt="Dentista con paziente"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dental/90"></div>
            </div>

            {/* Contenuto */}
            <div className="p-8 sm:p-12 md:p-16 relative">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Prenota la tua visita oggi stesso
              </h2>
              <p className="text-white/90 text-sm sm:text-base mb-6 sm:mb-8 max-w-md leading-relaxed">
                Fissa un appuntamento con uno dei nostri specialisti. La prevenzione è il primo passo verso un sorriso sano!
              </p>

              <div className="space-y-4 sm:space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 text-white/90 text-sm sm:text-base"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/prenota"
                className="w-full sm:w-auto flex items-center justify-center bg-white text-dental px-6 py-3.5 rounded-xl hover:bg-dental-50 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Prenota ora
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Immagine Desktop */}
            <div className="hidden lg:block relative">
              <img
                src="https://thumbs.dreamstime.com/b/dentist-patient-girl-smiling-dentist-patient-girl-smiling-dentist-office-144919393.jpg"
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