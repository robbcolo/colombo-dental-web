import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Dott. Alfredo Colombo",
    role: "Fondatore e Medico-Odontoiatra",
    bio: "Fondatore dello studio, il Dott. Alfredo esercita da oltre 30 anni, costruendo un rapporto di fiducia con intere famiglie di pazienti. Ama il suo lavoro, soprattutto quando può risolvere situazioni complesse con semplicità e chiarezza.",
    image: "",
    email: "alfredocolombo62@gmail.com",
    phone: "+393319258030",
    instagram: "https://www.instagram.com/alfredocolombo62/"
  },
  {
    id: 2,
    name: "Dott. Roberto Colombo",
    role: "Odontoiatra",
    bio: "Il Dott. Roberto, laureato presso l'Università degli Studi di Messina con il massimo dei voti, lavora con un approccio preciso e attento al dettaglio, cercando sempre soluzioni efficaci e sostenibili per il paziente, mettendo al primo posto ascolto e trasparenza.",
    image: "",
    email: "ybor69@ymail.com",
    phone: "+393291592938",
    instagram: "https://www.instagram.com/robcolo_/"
  },
  {
    id: 3,
    name: "Dott.ssa Aurora Colombo",
    role: "Odontoiatra",
    bio: "La Dott.ssa Aurora ha scelto questa professione con passione e si occupa dei pazienti con empatia e cura. È molto attenta al lato umano del lavoro, soprattutto con i pazienti più ansiosi o i bambini.",
    image: "",
    email: "auroracolombo@gmail.com",
    phone: "+393271967666",
    instagram: "https://www.instagram.com/aury__colombo/"
  }
];

const Team = () => {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Verifica se è mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Monitora lo scroll per aggiornare gli indicatori
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current || !isMobile) return;

      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Calcola quale card è più visibile basandosi sulla posizione di scroll
      const cardWidth = clientWidth * 0.75 + 16; // 75% larghezza + margine
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, teamMembers.length - 1));
    };

    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container && isMobile) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);

  // Navigazione con i pallini
  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;

    const cardWidth = scrollContainerRef.current.clientWidth * 0.75 + 16; // 75% larghezza + margine
    const newScrollLeft = cardWidth * index;

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-20 pb-36 px-0 bg-gray-50 w-full max-w-[100vw] overflow-hidden" id="team">
      <div className="md:container md:mx-auto">
        <div className="text-center mb-12 px-6">
          <span className="inline-block bg-dental-50 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
            IL NOSTRO TEAM
          </span>
          <h2 className="heading-lg mb-6">Professionisti al tuo servizio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Il nostro team di specialisti lavora in sinergia per offrire le migliori cure odontoiatriche in un ambiente familiare e accogliente.
          </p>
        </div>

        {/* Layout Mobile: Scrollabile orizzontalmente in stile Apple */}
        <div className="md:hidden w-full px-5">
          <div
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 w-full scroll-smooth"
            ref={scrollContainerRef}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: '20px',
              paddingRight: '20px'
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`team-card flex-shrink-0 w-[75%] snap-center bg-white rounded-2xl overflow-hidden shadow-md border-0 transition-all duration-300 animate-fade-in opacity-0 ${index < teamMembers.length - 1 ? 'mr-4' : ''
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Foto in primo piano */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[5/6] object-cover object-center"
                    draggable="false"
                  />
                </div>

                {/* Contenuto testuale sotto - RIMOSSA LA BIO */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-dental text-lg">{member.role}</p>

                  {/* Icone social solo se presenti */}
                  {(member.email || member.phone || member.instagram) && (
                    <div className="flex justify-center space-x-4 mt-6">
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                          <Mail className="w-5 h-5 text-dental" />
                        </a>
                      )}
                      {member.phone && (
                        <a href={`tel:${member.phone}`} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                          <Phone className="w-5 h-5 text-dental" />
                        </a>
                      )}
                      {member.instagram && (
                        <a href={member.instagram} className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                          <Instagram className="w-5 h-5 text-dental" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Indicatori di scorrimento in stile Apple solo su mobile */}
          <div className="flex justify-center mt-4">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-1.5 mx-1 rounded transition-all duration-300 ${activeIndex === index ? 'w-6 bg-dental' : 'w-1.5 bg-gray-300'
                  }`}
                aria-label={`Vai al profilo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Layout Desktop: Griglia standard (con bio) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow duration-300 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-[450px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-center space-x-4">
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                          <Mail className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.phone && (
                        <a href={`tel:${member.phone}`} className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                          <Phone className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.instagram && (
                        <a href={member.instagram} className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                          <Instagram className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-dental mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;