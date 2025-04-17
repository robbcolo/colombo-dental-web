import React, { useState, useEffect } from 'react';
import { Shield, Award, Heart, ArrowRight, Users, Smile, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Controlla solo se il dispositivo è mobile senza alterare il desktop
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      // iPhone 16 Pro: ~390px, iPhone 16 Pro Max: ~430px
      setIsMobile(width <= 430);
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
    }
  ];

  return (
    <section className={isMobile ? "py-8 px-4 bg-dental-50 overflow-hidden" : "py-16 px-6 bg-dental-50 overflow-hidden"}>
      <div className="container mx-auto max-w-5xl">
        <div className={isMobile ? "mb-8 relative text-center" : "mb-12 relative text-center"}>
          <span className="inline-block bg-dental/15 text-dental py-2 px-4 rounded-full text-md font-medium mb-4 animate-fade-in opacity-0">
            CHI SIAMO
          </span>

          <h2 className={`heading-lg ${isMobile ? "mb-4 text-2xl" : "mb-6 text-3xl md:text-4xl"} font-bold animate-fade-in opacity-0`} style={{ animationDelay: '100ms' }}>
            Uno studio di famiglia, <span className="text-dental">per davvero</span>
          </h2>

          {/* Highlights con numeri e icone centrati */}
          <div className={`flex flex-wrap gap-6 mb-8 justify-center ${isMobile ? "flex-col items-center gap-3" : ""}`}>
            <div className={`flex items-center space-x-2 bg-white py-2 px-4 rounded-lg shadow-sm ${isMobile ? "w-full" : ""}`}>
              <Users className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-dental`} />
              <span className={`${isMobile ? "text-sm" : "text-base"} font-medium`}>Studio a conduzione familiare</span>
            </div>
            <div className={`flex items-center space-x-2 bg-white py-2 px-4 rounded-lg shadow-sm ${isMobile ? "w-full" : ""}`}>
              <Smile className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-dental`} />
              <span className={`${isMobile ? "text-sm" : "text-base"} font-medium`}>Cure senza ansia</span>
            </div>
            <div className={`flex items-center space-x-2 bg-white py-2 px-4 rounded-lg shadow-sm ${isMobile ? "w-full" : ""}`}>
              <Zap className={`${isMobile ? "w-4 h-4" : "w-5 h-5"} text-dental`} />
              <span className={`${isMobile ? "text-sm" : "text-base"} font-medium`}>Tecniche innovative</span>
            </div>
          </div>

          <p className={`text-muted-foreground ${isMobile ? "text-sm" : "text-base md:text-lg"} leading-relaxed mx-auto max-w-3xl animate-fade-in opacity-0`} style={{ animationDelay: '200ms' }}>
            Lo <span className="font-semibold">Studio Dentistico Colombo</span> nasce da una storia semplice e personale: Alfredo, dentista con oltre 30 anni di esperienza,
            ha trasmesso la sua passione ai figli, Roberto e Aurora, oggi anche loro odontoiatri.
            {!isMobile && " Lavoriamo insieme perché crediamo in un'odontoiatria che mette le "}
            {isMobile && " Mettiamo le "}
            <span className="font-semibold">persone prima dei denti</span>.
          </p>
        </div>

        {/* Schede interattive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`bg-white rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md transform ${activeCard === card.id ? 'scale-105' : ''}`}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => isMobile && setActiveCard(activeCard === card.id ? null : card.id)} // Solo per mobile
            >
              <div className={`bg-dental-100 rounded-lg p-3 inline-flex mb-4 transition-all duration-300 ${activeCard === card.id ? 'bg-dental' : ''}`}>
                {React.cloneElement(card.icon, {
                  className: `w-6 h-6 text-dental ${activeCard === card.id ? 'text-dental' : ''}`
                })}
              </div>
              <h3 className={`${isMobile ? "text-lg" : "text-xl"} font-bold mb-3`}>{card.title}</h3>
              <p className={`text-muted-foreground ${isMobile ? "text-sm line-clamp-3" : "text-base"}`}>
                {card.content}
              </p>
              <div className={`mt-4 pt-3 border-t border-gray-100 font-medium text-sm ${activeCard === card.id ? 'text-dental' : 'text-gray-500'}`}>
                {card.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Sezione "Vieni a conoscerci" con sfumatura che parte da blue-300 */}
        <div className={`relative overflow-hidden bg-gradient-to-r from-blue-300/50 to-dental-50 rounded-xl ${isMobile ? "p-5" : "p-8"}`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mt-10 -mr-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-10 -ml-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className={`${isMobile ? "text-xl mb-3" : "text-2xl mb-4"} font-bold`}>Vieni a conoscerci</h3>
              <p className={`${isMobile ? "text-sm" : "text-base md:text-lg"}`}>
                {isMobile
                  ? "Ti aspettiamo per accoglierti con cura e professionalità."
                  : "Che tu abbia bisogno di una visita di controllo o semplicemente voglia farti un'idea dello studio, ti aspettiamo per accoglierti con cura e professionalità."
                }
              </p>
            </div>
            <Link
              to="/contatti"
              className={`inline-flex items-center justify-center gap-2 bg-dental text-white px-8 py-4 rounded-xl font-medium hover:bg-dental-600 transition-all hover:scale-105 shadow-sm hover:shadow-md ${isMobile ? "w-full mt-4" : ""}`}
            >
              <span className={`${isMobile ? "text-base" : "text-lg"}`}>Contattaci</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;