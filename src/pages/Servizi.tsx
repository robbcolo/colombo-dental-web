import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookAppointment from '../components/BookAppointment';
import { ArrowRight, Smile, Syringe, BadgeCheck, HeartPulse, UserCheck, Stethoscope, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = [
  {
    id: "igiene-dentale",
    icon: <Smile className="w-10 h-10 text-dental" />,
    title: "Igiene Dentale Professionale",
    description: "La prevenzione è la chiave per una buona salute orale. La nostra igiene dentale professionale include una pulizia approfondita che rimuove placca e tartaro, seguita da lucidatura e consigli personalizzati per la cura domiciliare.",
    benefits: [
      "Prevenzione di carie e malattie gengivali",
      "Rimozione di macchie superficiali",
      "Alito più fresco",
      "Individuazione precoce di problemi potenziali"
    ],
    image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "implantologia",
    icon: <img src={`${import.meta.env.BASE_URL}images/services/impla.png`} className="w-12 h-12"/>,
    title: "Implantologia Dentale",
    description: "Gli impianti dentali rappresentano la soluzione più avanzata per sostituire i denti mancanti. Realizziamo impianti di alta qualità che si integrano perfettamente con l'osso mandibolare, offrendo una soluzione permanente ed esteticamente naturale.",
    benefits: [
      "Aspetto e funzionalità simili ai denti naturali",
      "Soluzione duratura nel tempo",
      "Conservazione dell'osso mandibolare",
      "Nessun impatto sui denti adiacenti"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: "ortodonzia",
    icon: <img src={`${import.meta.env.BASE_URL}images/services/orto1.png`} className="w-12 h-12"/>,
    title: "Ortodonzia",
    description: "Offriamo diverse soluzioni ortodontiche per allineare i denti e correggere problemi di morso. Dalle tradizionali apparecchiature fisse agli allineatori trasparenti, personalizziamo il trattamento in base alle esigenze estetiche e funzionali di ogni paziente.",
    benefits: [
      "Miglioramento estetico del sorriso",
      "Correzione di problemi di morso",
      "Facilitazione dell'igiene orale",
      "Prevenzione di problemi articolari"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "estetica-dentale",
    icon: <HeartPulse className="w-10 h-10 text-dental" />,
    title: "Estetica Dentale",
    description: "Trasformiamo il tuo sorriso con trattamenti estetici avanzati. Dallo sbiancamento professionale alle faccette in ceramica, ogni intervento è progettato per migliorare l'aspetto dei tuoi denti mantenendo un aspetto naturale.",
    benefits: [
      "Sorriso più bianco e luminoso",
      "Correzione di difetti estetici",
      "Risultati duraturi nel tempo",
      "Miglioramento dell'autostima"
    ],
    image: "https://images.unsplash.com/photo-1581585529343-24d465588fc2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "odontoiatria-pediatrica",
    icon: <UserCheck className="w-10 h-10 text-dental" />,
    title: "Odontoiatria Pediatrica",
    description: "I bambini hanno esigenze dentali specifiche. Il nostro team è specializzato nel creare un'esperienza positiva per i più piccoli, con un approccio delicato e rassicurante che li aiuta a sviluppare abitudini corrette fin dalla giovane età.",
    benefits: [
      "Prevenzione delle carie infantili",
      "Approccio delicato e paziente",
      "Educazione all'igiene orale",
      "Monitoraggio dello sviluppo dentale"
    ],
    image: "https://images.unsplash.com/photo-1630330432500-810349fb0a27?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "chirurgia-orale",
    icon: <Stethoscope className="w-10 h-10 text-dental" />,
    title: "Chirurgia Orale",
    description: "Effettuiamo interventi di chirurgia orale con tecniche minimamente invasive, dall'estrazione di denti del giudizio inclusi a piccoli interventi sui tessuti molli, sempre con un'attenzione particolare al comfort del paziente.",
    benefits: [
      "Procedure minimamente invasive",
      "Recupero più rapido",
      "Minore disagio post-operatorio",
      "Alta precisione chirurgica"
    ],
    image: "https://images.unsplash.com/photo-1579165466914-39adece5f2e4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "protesi-dentali",
    icon: <Stethoscope className="w-10 h-10 text-dental" />,
    title: "Protesi Dentali",
    description: "Realizziamo protesi fisse e mobili di alta qualità, personalizzate per adattarsi perfettamente all'anatomia del paziente. Utilizziamo materiali biocompatibili che garantiscono comfort, funzionalità ed estetica naturale.",
    benefits: [
      "Ripristino della funzionalità masticatoria",
      "Aspetto naturale",
      "Comfort ottimale",
      "Materiali di alta qualità"
    ],
    image: "https://images.unsplash.com/photo-1629909615116-67aa4508435c?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: "gnatologia",
    icon: <X className="w-10 h-10 text-dental" />,
    title: "Gnatologia",
    description: "Trattiamo disturbi dell'articolazione temporo-mandibolare e problemi di bruxismo. Attraverso una diagnosi accurata, offriamo soluzioni personalizzate che alleviano il dolore e migliorano la funzionalità dell'apparato masticatorio.",
    benefits: [
      "Riduzione del dolore mandibolare",
      "Trattamento del bruxismo",
      "Miglioramento dell'occlusione dentale",
      "Prevenzione dell'usura dentale"
    ],
    image: "https://images.unsplash.com/photo-1523898052899-241108586cf8?q=80&w=2070&auto=format&fit=crop"
  },
];

const Servizi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo | Servizi";
    console.log("Servizi page loaded!"); // Aggiungiamo un log per il debug
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-dental to-dental-light">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white py-1 px-3 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
              I Nostri Servizi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down opacity-0" style={{ animationDelay: '100ms' }}>
              Cure dentali complete e personalizzate
            </h1>
            <p className="text-white/90 text-lg animate-slide-down opacity-0" style={{ animationDelay: '200ms' }}>
              Offriamo una gamma completa di trattamenti odontoiatrici avanzati per ogni esigenza, dall'estetica alla funzionalità.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300 animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground line-clamp-3 mb-6">{service.description}</p>
                <a 
                  href={`#${service.id}`} 
                  className="inline-flex items-center text-dental font-medium hover:text-blue-500 transition-colors"
                >
                  Scopri di più
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services */}
      {serviceDetails.map((service, index) => (
        <section 
          id={service.id} 
          key={service.id} 
          className={`py-20 px-6 ${index % 2 === 0 ? 'bg-white' : 'bg-dental-50'}`}
        >
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
                  Servizio
                </span>
                <h2 className="heading-lg mb-6">{service.title}</h2>
                <p className="text-muted-foreground mb-8">
                  {service.description}
                </p>
                
                <h3 className="text-lg font-bold mb-4">Benefici:</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="bg-dental-100 rounded-full p-1 mt-1">
                        <BadgeCheck className="w-4 h-4 text-dental" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/prenota" className="btn-primary inline-flex items-center">
                  Prenota una visita
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="absolute top-4 left-4 w-full h-full bg-dental/10 rounded-2xl"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative z-10 rounded-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Servizi;
