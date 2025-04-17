import React, { useState, useEffect } from 'react';
import { Shield, Award, Heart, ArrowRight, Users, Smile, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Controlla solo se il dispositivo è mobile
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 767); // Considera mobile fino a 767px
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Array di dati per le schede interattive
  const cards = [
    {
      id: 1,
      icon: <Shield className="w-6 h-6 text-dental" />,
      title: "Esperienza che si sente",
      content: "Trent'anni di attività clinica non sono solo un numero: sono pazienti curati e situazioni complesse gestite con attenzione. Ci teniamo aggiornati, ma sappiamo anche quando affidarci all'intuito che solo l'esperienza può dare.",
      stats: "+30 anni di pratica clinica"
    },
    {
      id: 2,
      icon: <Award className="w-6 h-6 text-dental" />,
      title: "Tecnologia all'avanguardia",
      content: "Preferiamo strumenti e tecniche moderne perché rendono i trattamenti più precisi, meno invasivi e più comodi. Non si tratta di 'avere l'ultimo macchinario', ma di usarlo per ottenere il miglior risultato.",
      stats: "Strumenti di ultima generazione"
    },
    {
      id: 3,
      icon: <Heart className="w-6 h-6 text-dental" />,
      title: "Cure su misura",
      content: "Ci prendiamo il tempo per conoscere chi sei e cosa ti serve davvero. Parliamo con te, spieghiamo ogni passaggio e costruiamo insieme un percorso adatto, clinicamente corretto e rispettoso della persona.",
      stats: "Approccio personalizzato"
    },
    {
      id: 4,
      icon: <Clock className="w-6 h-6 text-dental" />,
      title: "Tempi rapidi",
      content: "Sappiamo quanto sia prezioso il tuo tempo. Organizziamo le visite in modo efficiente, rispettiamo gli appuntamenti e minimizziamo le attese. Quando possibile, combiniamo più interventi in un'unica seduta.",
      stats: "Rispetto dei tuoi tempi"
    }
  ];

  // Gestisce il clic sulle card su mobile
  const handleCardClick = (id) => {
    if (isMobile) {
      setIsTransitioning(true);

      if (expandedCard === id) {
        // Chiudi la scheda
        setExpandedCard(null);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
      } else {
        // Chiudi la scheda precedente (se aperta) e apri la nuova
        setExpandedCard(null);

        setTimeout(() => {
          setExpandedCard(id);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
        }, 200);
      }
    }
  };

  return (
    <section className="py-16 px-6 bg-dental-50 overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleUp {
          from { 
            transform: scale(0.95); 
            opacity: 0.8;
          }
          to { 
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        
        .fade-up {
          animation: fadeUp 0.4s ease-out forwards;
        }
        
        .scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .card-active {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                     0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.02);
        }
        
        .icon-bg-active {
          background-color: var(--dental-color, #3b82f6);
          transform: scale(1.1);
        }
        
        .card-click-effect {
          position: relative;
          overflow: hidden;
        }
        
        .card-click-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.3);
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .card-click-effect:active::after {
          opacity: 1;
        }
      `}</style>

      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 relative text-center">
          <span className="inline-block bg-dental/15 text-dental py-2 px-4 rounded-full text-md font-medium mb-4 animate-fade-in">
            CHI SIAMO
          </span>

          <h2 className="heading-lg mb-6 animate-fade-in text-3xl md:text-4xl font-bold" style={{ animationDelay: '100ms' }}>
            Uno studio di famiglia, <span className="text-dental">per davvero</span>
          </h2>

          {/* Highlights con numeri e icone centrati */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center">
            <div className="flex items-center space-x-2 bg-white py-2 px-4 rounded-lg shadow-sm">
              <Users className="w-5 h-5 text-dental" />
              <span className="text-base font-medium">Studio a conduzione familiare</span>
            </div>
            <div className="flex items-center space-x-2 bg-white py-2 px-4 rounded-lg shadow-sm">
              <Smile className="w-5 h-5 text-dental" />
              <span className="text-base font-medium">Cure senza ansia</span>
            </div>
            <div className="flex items-center space-x-2 bg-white py-2 px-4 rounded-lg shadow-sm">
              <Zap className="w-5 h-5 text-dental" />
              <span className="text-base font-medium">Tecniche innovative</span>
            </div>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mx-auto max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Lo <span className="font-semibold">Studio Dentistico Colombo</span> nasce da una storia semplice e personale: Alfredo, dentista con oltre 30 anni di esperienza,
            ha trasmesso la sua passione ai figli, Roberto e Aurora, oggi anche loro odontoiatri.
            {(!isMobile || showFullText) && " Lavoriamo insieme perché crediamo in un'odontoiatria che mette le "}
            {isMobile && !showFullText && " Mettiamo le "}
            <span className="font-semibold">persone prima dei denti</span>.
          </p>
        </div>

        {/* Schede interattive - Layout diverso su mobile/desktop */}
        {!isMobile ? (
          // Layout desktop: 3 schede in riga
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {cards.slice(0, 3).map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md transform ${activeCard === card.id ? 'scale-105' : ''}`}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`bg-dental-100 rounded-lg p-3 inline-flex mb-4 transition-all duration-300 ${activeCard === card.id ? 'bg-dental' : ''}`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-base">{card.content}</p>
                <div className={`mt-4 pt-3 border-t border-gray-100 font-medium text-sm ${activeCard === card.id ? 'text-dental' : 'text-gray-500'}`}>
                  {card.stats}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Layout mobile: griglia 2x2 come i servizi
          <div className="grid grid-cols-2 gap-3 mb-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-lg p-4 shadow-sm border border-border card-click-effect
                  ${expandedCard === card.id ? 'col-span-2 card-active' : ''}
                  ${isTransitioning ? 'transition-all duration-300' : ''}`}
                onClick={() => !isTransitioning && handleCardClick(card.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`bg-dental-50 w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-all duration-300
                      ${expandedCard === card.id ? 'icon-bg-active' : ''}`}
                  >
                    {React.cloneElement(card.icon, {
                      className: `w-5 h-5 text-dental`
                    })}
                  </div>
                  <h3 className="text-base font-bold mb-2">{card.title}</h3>

                  {expandedCard === card.id && (
                    <div className="fade-up" style={{ animationDelay: '150ms' }}>
                      <p className="text-muted-foreground text-sm mb-4">
                        {card.content}
                      </p>
                      <div className="mt-2 pt-2 border-t border-gray-100 font-medium text-xs text-dental w-full fade-in" style={{ animationDelay: '300ms' }}>
                        {card.stats}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sezione "Vieni a conoscerci" con sfumatura che parte da blue-300 */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-300/50 to-dental-50 rounded-xl p-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mt-10 -mr-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-10 -ml-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Vieni a conoscerci</h3>
              {isMobile ? (
                <p
                  className={`text-base cursor-pointer card-click-effect ${showFullText ? 'scale-up' : ''}`}
                  onClick={() => setShowFullText(!showFullText)}
                >
                  {showFullText
                    ? "Che tu abbia bisogno di una visita di controllo o semplicemente voglia farti un'idea dello studio."
                    : ""}
                </p>
              ) : (
                <p className="text-base md:text-lg">
                  Che tu abbia bisogno di una visita di controllo o semplicemente voglia farti un'idea dello studio, ti aspettiamo per accoglierti con cura e professionalità.
                </p>
              )}
            </div>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center gap-2 bg-dental text-white px-8 py-4 rounded-xl font-medium hover:bg-dental-600 transition-all hover:scale-105 shadow-sm hover:shadow-md card-click-effect"
            >
              <span className="text-lg">Contattaci</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;