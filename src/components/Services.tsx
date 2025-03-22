
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smile, Syringe, BadgeCheck, HeartPulse, UserCheck } from 'lucide-react';

const serviceItems = [
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/dentista.png`} className="w-12 h-12"/>,
    title: "Odontoiatria Generale",
    description: "Check-up completi, pulizia dei denti, trattamenti canalari e otturazioni per mantenere la tua bocca sana.",
    link: "/servizi/odontoiatria-generale"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/impla.png`} className="w-12 h-12"/>,
    title: "Implantologia",
    description: "Soluzioni permanenti per denti mancanti con impianti di alta qualità e tecniche minimamente invasive.",
    link: "/servizi/implantologia"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/orto1.png`} className="w-12 h-12"/>,
    title: "Ortodonzia",
    description: "Apparecchi tradizionali e invisibili per correggere l'allineamento dei denti e migliorare il tuo sorriso.",
    link: "/servizi/ortodonzia"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/sbiancamento.png`} className="w-12 h-12"/>,
    title: "Estetica Dentale",
    description: "Sbiancamento, faccette e trattamenti estetici per un sorriso perfetto e luminoso.",
    link: "/servizi/estetica-dentale"
  },
  {
    icon: <img src={`${import.meta.env.BASE_URL}images/services/protesi.png`} className="w-13 h-12.5"/>,
    title: "Protesi dentale",
    description: "Cure speciali per i più piccoli in un ambiente accogliente che li mette a loro agio.",
    link: "/servizi/odontoiatria-pediatrica"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6" id="servizi">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-dental-50 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
            I Nostri Servizi
          </span>
          <h2 className="heading-lg mb-6">Trattamenti specializzati per ogni esigenza</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi odontoiatrici per garantire la salute e la bellezza del tuo sorriso, utilizzando tecnologie all'avanguardia e approcci minimamente invasivi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-dental font-medium hover:text-dental-dark transition-colors"
              >
                Scopri di più
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/servizi" className="btn-primary inline-flex items-center">
            Vedi tutti i servizi
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
