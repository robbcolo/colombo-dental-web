import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookAppointment from '../components/BookAppointment';
import {
  ArrowRight, BadgeCheck, ChevronDown,
  Smile, Stethoscope, Syringe, HeartPulse,
  UserCheck, Scissors, Scale,
  Microscope, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = [
  {
    id: "igiene-dentale",
    icon: <Smile className="w-8 h-8 text-dental" />,
    title: "Igiene Dentale Professionale",
    shortDescription: "Prevenzione e pulizia profonda per mantenere denti e gengive in salute.",
    description: "La prevenzione è la chiave per una buona salute orale a lungo termine. La nostra igiene dentale professionale include una detartrasi completa che rimuove placca e tartaro, seguita da una lucidatura accurata e consigli personalizzati per ottimizzare la tua igiene domiciliare.",
    benefits: [
      "Prevenzione di carie e malattie gengivali",
      "Rimozione efficace di macchie superficiali",
      "Alito più fresco e sorriso più luminoso",
      "Individuazione precoce di potenziali problemi"
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1936&auto=format&fit=crop",
    alt: "Strumenti per igiene dentale professionale"
  },
  {
    id: "conservativa",
    icon: <Scale className="w-8 h-8 text-dental" />,
    title: "Conservativa e Restaurativa",
    shortDescription: "Ripristino e preservazione della struttura dentale compromessa.",
    description: "I trattamenti conservativi e restaurativi mirano a ripristinare la funzione e l'estetica dei denti danneggiati da carie, fratture o usura. Utilizziamo materiali estetici di ultima generazione che garantiscono risultati naturali e duraturi, preservando il più possibile la struttura dentale sana.",
    benefits: [
      "Ripristino estetico e funzionale dei denti danneggiati",
      "Materiali biocompatibili e di alta qualità",
      "Tecniche mini-invasive che preservano il dente",
      "Risultati naturali e duraturi nel tempo"
    ],
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa8ed?q=80&w=2070&auto=format&fit=crop",
    alt: "Trattamento conservativo dentale"
  },
  {
    id: "endodonzia",
    icon: <Microscope className="w-8 h-8 text-dental" />,
    title: "Endodonzia",
    shortDescription: "Trattamento dei canali radicolari per salvare i denti compromessi.",
    description: "L'endodonzia si occupa del trattamento dei canali radicolari, salvando denti gravemente compromessi che altrimenti andrebbero estratti. Grazie alle tecniche moderne e alla strumentazione di precisione, interveniamo con efficacia e minimo disagio, preservando l'integrità dentale ed eliminando il dolore.",
    benefits: [
      "Eliminazione del dolore e dell'infezione",
      "Conservazione del dente naturale",
      "Procedure precise e confortevoli",
      "Prevenzione della perdita dentale"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    alt: "Procedura endodontica con microscopio"
  },
  {
    id: "implantologia",
    icon: <Syringe className="w-8 h-8 text-dental" />,
    title: "Implantologia Dentale",
    shortDescription: "Sostituzione permanente di denti mancanti con radici artificiali.",
    description: "Gli impianti dentali rappresentano la soluzione più avanzata per sostituire i denti mancanti. Realizziamo impianti di alta qualità utilizzando tecnologie all'avanguardia che garantiscono una perfetta integrazione con l'osso mandibolare, offrendo una soluzione permanente, stabile ed esteticamente naturale.",
    benefits: [
      "Aspetto e funzionalità identici ai denti naturali",
      "Soluzione duratura con percentuali di successo elevate",
      "Conservazione dell'osso mandibolare nel tempo",
      "Nessuna alterazione dei denti adiacenti sani"
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    alt: "Impianto dentale con corona"
  },
  {
    id: "ortodonzia",
    icon: <Activity className="w-8 h-8 text-dental" />,
    title: "Ortodonzia",
    shortDescription: "Allineamento dentale e correzione dei problemi di morso.",
    description: "Offriamo diverse soluzioni ortodontiche personalizzate per allineare i denti e correggere problemi di morso. Dalle apparecchiature tradizionali agli innovativi allineatori trasparenti removibili, adattiamo il trattamento alle esigenze estetiche e funzionali specifiche di ogni paziente, sia adulto che bambino.",
    benefits: [
      "Miglioramento estetico significativo del sorriso",
      "Correzione efficace di problemi di morso e occlusione",
      "Facilitazione dell'igiene orale quotidiana",
      "Prevenzione di problemi articolari e usura dentale"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    alt: "Trattamento ortodontico con allineatori trasparenti"
  },
  {
    id: "estetica-dentale",
    icon: <HeartPulse className="w-8 h-8 text-dental" />,
    title: "Estetica Dentale",
    shortDescription: "Miglioramento dell'aspetto del sorriso con tecniche avanzate.",
    description: "Trasformiamo il tuo sorriso con trattamenti estetici avanzati e personalizzati. Dallo sbiancamento dentale professionale alle faccette in ceramica e ai restauri metal-free, ogni intervento è progettato con precisione per migliorare l'aspetto dei tuoi denti mantenendo un risultato naturale e armonioso.",
    benefits: [
      "Sorriso più bianco, luminoso e armonioso",
      "Correzione di difetti estetici come macchie e discromie",
      "Risultati personalizzati e duraturi nel tempo",
      "Miglioramento significativo dell'autostima"
    ],
    image: "https://images.unsplash.com/photo-1581585529343-24d465588fc2?q=80&w=2070&auto=format&fit=crop",
    alt: "Prima e dopo trattamento di estetica dentale"
  },
  {
    id: "odontoiatria-pediatrica",
    icon: <UserCheck className="w-8 h-8 text-dental" />,
    title: "Odontoiatria Pediatrica",
    shortDescription: "Cure dentali specializzate per bambini in ambiente accogliente.",
    description: "I bambini hanno esigenze dentali specifiche che richiedono un approccio dedicato. Il nostro team è specializzato nel creare un'esperienza positiva per i più piccoli, con un ambiente accogliente e un approccio delicato e rassicurante che li aiuta a sviluppare un rapporto sereno con le cure dentali fin dalla giovane età.",
    benefits: [
      "Prevenzione efficace delle carie infantili",
      "Approccio psicologico delicato e paziente",
      "Educazione all'igiene orale adatta ai bambini",
      "Monitoraggio costante dello sviluppo dentale e facciale"
    ],
    image: "https://images.unsplash.com/photo-1630330432500-810349fb0a27?q=80&w=2070&auto=format&fit=crop",
    alt: "Bambino durante visita odontoiatrica"
  },
  {
    id: "chirurgia-orale",
    icon: <Scissors className="w-8 h-8 text-dental" />,
    title: "Chirurgia Orale",
    shortDescription: "Interventi chirurgici mirati con tecniche mini-invasive.",
    description: "Effettuiamo interventi di chirurgia orale con tecniche minimamente invasive, dall'estrazione di denti del giudizio inclusi agli interventi pre-protesici e sui tessuti molli. Utilizziamo protocolli avanzati per garantire la massima precisione e il minor disagio possibile, con un'attenzione particolare al comfort del paziente e al recupero post-operatorio.",
    benefits: [
      "Procedure minimamente invasive e precise",
      "Recupero post-operatorio più rapido",
      "Minore disagio durante e dopo l'intervento",
      "Tecniche all'avanguardia per risultati ottimali"
    ],
    image: "https://images.unsplash.com/photo-1579165466914-39adece5f2e4?q=80&w=2070&auto=format&fit=crop",
    alt: "Strumenti per chirurgia orale di precisione"
  },
  {
    id: "protesi-dentali",
    icon: <Stethoscope className="w-8 h-8 text-dental" />,
    title: "Protesi Dentali",
    shortDescription: "Soluzioni su misura per ripristinare denti mancanti.",
    description: "Realizziamo protesi fisse e mobili di alta qualità, personalizzate per adattarsi perfettamente all'anatomia del paziente. Dalle corone singole ai ponti, dalle protesi parziali a quelle totali, utilizziamo materiali biocompatibili di ultima generazione che garantiscono comfort, funzionalità ed estetica naturale per il massimo benessere.",
    benefits: [
      "Ripristino completo della funzionalità masticatoria",
      "Estetica naturale e personalizzata",
      "Comfort ottimale e facile adattamento",
      "Materiali innovativi di alta qualità e durabilità"
    ],
    image: "https://images.unsplash.com/photo-1629909615116-67aa4508435c?q=80&w=2069&auto=format&fit=crop",
    alt: "Protesi dentale di alta qualità"
  },
  {
    id: "gnatologia",
    icon: <Scale className="w-8 h-8 text-dental" />,
    title: "Gnatologia",
    shortDescription: "Diagnosi e trattamento dei disturbi dell'articolazione temporo-mandibolare.",
    description: "La gnatologia si occupa dei disturbi dell'articolazione temporo-mandibolare, del bruxismo e dei problemi occlusali. Attraverso una diagnosi accurata e strumenti specifici, offriamo soluzioni personalizzate che alleviano il dolore, migliorano la funzionalità dell'apparato masticatorio e prevengono l'usura dentale, restituendo comfort e benessere.",
    benefits: [
      "Riduzione significativa del dolore mandibolare e facciale",
      "Trattamento efficace del bruxismo e digrignamento",
      "Miglioramento dell'occlusione e della funzionalità",
      "Prevenzione dell'usura dentale e delle complicanze"
    ],
    image: "https://images.unsplash.com/photo-1523898052899-241108586cf8?q=80&w=2070&auto=format&fit=crop",
    alt: "Paziente durante valutazione gnatologica"
  },
  {
    id: "parodontologia",
    icon: <Scale className="w-8 h-8 text-dental" />,
    title: "Parodontologia",
    shortDescription: "Prevenzione e trattamento delle malattie gengivali e parodontali.",
    description: "La parodontologia si occupa della salute dei tessuti che supportano i denti: gengive, osso alveolare e legamento parodontale. Offriamo terapie mirate per il trattamento e la prevenzione della gengivite e della parodontite, dalla detartrasi profonda alla chirurgia parodontale rigenerativa, per preservare i denti e la salute orale a lungo termine.",
    benefits: [
      "Prevenzione della perdita dei denti causata da parodontite",
      "Riduzione dell'infiammazione e del sanguinamento gengivale",
      "Tecniche mini-invasive per risultati duraturi",
      "Miglioramento della salute orale complessiva"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661759557207-fd2ef5dd9ed8?q=80&w=2071&auto=format&fit=crop",
    alt: "Trattamento delle gengive con strumenti moderni"
  },
];

const Servizi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo Patti | I Nostri Servizi";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section Servizi con logo in trasparenza */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Logo di sfondo ridotto e centrato */}
        <img
          src="/images/about/logo.png"
          alt="Studio Dentistico Colombo"
          className="
      absolute left-1/2 top-1/2
    w-2/3 sm:w-1/3 md:w-1/3  /* 66% mobile → 33% small/superiore */
    h-auto object-contain opacity-90
    transform -translate-x-1/2 -translate-y-1/2
  "
        />

        {/* Gradient overlay per contrasto */}
        <div className="absolute inset-0 bg-gradient-to-r from-dental to-dental-light mix-blend-multiply"></div>

        {/* Contenuto in primo piano */}
        <div className="relative z-10 container mx-auto text-center">
          <span
            className="inline-block bg-white/10 text-white py-1 px-3 rounded-full text-sm font-medium mb-4
                 animate-fade-in opacity-0"
            style={{ animationDelay: '100ms' }}
          >
            I Nostri Servizi
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 animate-slide-down opacity-0"
            style={{ animationDelay: '200ms' }}
          >
            Cure dentali complete e personalizzate
          </h1>
          <p
            className="text-white/90 text-base sm:text-lg animate-slide-down opacity-0"
            style={{ animationDelay: '300ms' }}
          >
            Offriamo trattamenti odontoiatrici avanzati per ogni esigenza, combinando competenza, tecnologia e un approccio orientato al paziente.
          </p>
        </div>
      </section>

      {/* Filtro servizi - Scelta rapida su mobile */}
      <div className="bg-white sticky top-16 z-20 shadow-sm py-3 md:hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            <select
              className="w-full px-4 py-2 border border-gray-200 rounded-lg appearance-none bg-white pr-10 text-foreground focus:outline-none focus:border-dental"
              onChange={(e) => {
                const element = document.getElementById(e.target.value);
                if (element) {
                  const yOffset = -100;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              <option value="">Scegli un servizio</option>
              {serviceDetails.map(service => (
                <option key={service.id} value={service.id}>{service.title}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
          </div>
        </div>
      </div>

      {/* Services Overview - Layout migliorato */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">I nostri trattamenti</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Scopri tutti i servizi offerti dal nostro studio con tecnologie all'avanguardia e un team di professionisti qualificati.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceDetails.map((service, index) => (
              <Link
                to={`/trattamenti/${service.id}`}
                key={service.id}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-border hover:shadow-md transition-all duration-300 animate-fade-in opacity-0 group flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-dental transition-colors">{service.title}</h3>
                <p className="text-muted-foreground line-clamp-2 mb-5 flex-grow">{service.shortDescription}</p>
                <div className="inline-flex items-center text-dental font-medium group-hover:text-blue-600 transition-colors">
                  Scopri di più
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services - Rendendo ogni sezione più coinvolgente */}
      {serviceDetails.map((service, index) => (
        <section
          id={service.id}
          key={service.id}
          className={`py-16 sm:py-24 px-4 sm:px-6 scroll-mt-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
              <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''} animate-slide-in-right opacity-0`} style={{ animationDelay: '200ms' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-dental-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
                </div>

                <p className="text-muted-foreground text-lg mb-8">
                  {service.description}
                </p>

                <h3 className="text-lg font-semibold mb-4 text-dental">Benefici del trattamento:</h3>
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

              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''} animate-slide-in-left opacity-0`} style={{ animationDelay: '100ms' }}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-dental/10 rounded-2xl"></div>
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="relative z-10 rounded-2xl w-full h-auto object-cover shadow-lg aspect-[4/3]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm z-20 hidden lg:block">
                    <h4 className="font-medium text-dental">{service.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-1">{service.shortDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action prima del Book Appointment */}
      <section className="py-16 px-4 sm:px-6 bg-dental-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hai domande sui nostri trattamenti?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Il nostro team è a disposizione per una consulenza personalizzata.
            Contattaci per maggiori informazioni o per prenotare una prima visita senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contatti" className="py-3 px-6 rounded-lg border border-dental text-dental hover:bg-dental hover:text-white transition-colors font-medium">
              Contattaci
            </Link>
            <Link to="/prenota" className="py-3 px-6 rounded-lg bg-dental text-white hover:bg-dental-dark transition-colors font-medium inline-flex items-center justify-center">
              Prenota una visita
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <BookAppointment />
      <Footer />
    </div>
  );
};

export default Servizi;