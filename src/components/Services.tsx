import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const serviceItems = [
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/dentista.png`} className="w-10 h-10 md:w-12 md:h-12" alt="Odontoiatria Generale" />,
    title: "Igiene Dentale",
    description: "Check-up completi, pulizia dei denti, trattamenti canalari e otturazioni per mantenere la tua bocca sana.",
    link: "/trattamenti/igiene-dentale"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/impla.png`} className="w-10 h-10 md:w-12 md:h-12" alt="Implantologia" />,
    title: "Implantologia",
    description: "Soluzioni permanenti per denti mancanti con impianti di alta qualità e tecniche minimamente invasive.",
    link: "/trattamenti/implantologia"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/orto1.png`} className="w-10 h-10 md:w-12 md:h-12" alt="Ortodonzia" />,
    title: "Ortodonzia",
    description: "Apparecchi tradizionali e invisibili per correggere l'allineamento dei denti e migliorare il tuo sorriso.",
    link: "/trattamenti/ortodonzia"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/sbiancamento.png`} className="w-10 h-10 md:w-12 md:h-12" alt="Estetica Dentale" />,
    title: "Estetica Dentale",
    description: "Sbiancamento, faccette e trattamenti estetici per un sorriso perfetto e luminoso.",
    link: "/trattamenti/estetica-dentale"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/protesi.png`} className="w-10 h-10 md:w-12 md:h-12" alt="Protesi dentale" />,
    title: "Protesi dentale",
    description: "Cure speciali per i più piccoli in un ambiente accogliente che li mette a loro agio.",
    link: "/trattamenti/odontoiatria-pediatrica"
  }
];

const ServiceCard = ({ service, index, activeCard, setActiveCard }) => (
  <div
    className={`bg-white rounded-xl p-4 md:p-6 shadow-sm border border-border transition-all duration-300 animate-fade-in opacity-0 flex flex-col ${activeCard === index ? 'shadow-md transform scale-105' : 'hover:shadow-md'}`}
    style={{ animationDelay: `${index * 100}ms` }}
    onMouseEnter={() => setActiveCard(index)}
    onMouseLeave={() => setActiveCard(null)}
  >
    <div className="flex flex-col items-center text-center">
      <div className={`bg-dental-50 w-12 h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${activeCard === index ? 'bg-dental' : ''}`}>
        {service.icon}
      </div>
      <h3 className="text-base md:text-xl font-bold mb-2">{service.title}</h3>
      {/* Description hidden on mobile, visible from md breakpoint */}
      <p className="hidden md:block text-muted-foreground mb-4 line-clamp-3">
        {service.description}
      </p>
    </div>
    <Link
      to={service.link}
      className={`mt-auto inline-flex items-center justify-center font-medium transition-colors text-sm md:text-base ${activeCard === index ? 'text-dental' : 'text-dental hover:text-dental-dark'}`}
    >
      Scopri di più
      <ArrowRight size={14} className="ml-1 md:ml-2 md:w-4 md:h-4" />
    </Link>
  </div>
);

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="py-10 md:py-20 px-4 md:px-6" id="servizi">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <span className="inline-block bg-dental-50 text-dental py-1 px-3 rounded-full text-sm font-medium mb-3 md:mb-4">
            I NOSTRI SERVIZI
          </span>
          <h2 className="heading-lg mb-3 md:mb-6">Trattamenti specializzati per ogni esigenza</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto hidden md:block">
            Offriamo una gamma completa di servizi odontoiatrici per garantire la salute e la bellezza del tuo sorriso, utilizzando tecnologie all'avanguardia e approcci minimamente invasivi.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <Link
            to="/servizi"
            className="btn-primary inline-flex items-center text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
            onMouseEnter={() => setActiveCard('all-services')}
            onMouseLeave={() => setActiveCard(null)}
          >
            Vedi tutti i servizi
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;