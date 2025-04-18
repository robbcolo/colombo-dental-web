import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Dott. Alfredo Colombo",
    role: "Fondatore e Medico-Odontoiatra",
    bio: "Fondatore dello studio, il Dott. Alfredo esercita da oltre 30 anni, costruendo un rapporto di fiducia con intere famiglie di pazienti. Ama il suo lavoro, soprattutto quando può risolvere situazioni complesse con semplicità e chiarezza.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dott. Roberto Colombo",
    role: "Odontoiatra",
    bio: "Il Dott. Roberto, laureato presso l'Università degli Studi di Messina con il massimo dei voti, lavora con un approccio preciso e attento al dettaglio, cercando sempre soluzioni efficaci e sostenibili per il paziente, mettendo al primo posto ascolto e trasparenza.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    email: "ybor69@ymail.com",
    phone: "+393291592938",
    instagram: "https://www.instagram.com/robcolo_/"
  },
  {
    id: 3,
    name: "Dott.ssa Aurora Colombo",
    role: "Odontoiatra",
    bio: "La Dott.ssa Aurora ha scelto questa professione con passione e si occupa dei pazienti con empatia e cura. È molto attenta al lato umano del lavoro, soprattutto con i pazienti più ansiosi o i bambini.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
  }
];

const Team = () => {
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
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
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Calcola quale card è più visibile basandosi sulla posizione di scroll
      const cardWidth = clientWidth * 0.75; // 75% della larghezza del viewport su mobile
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, teamMembers.length - 1));
    };

    const container = scrollContainerRef.current;
    if (container && isMobile) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container && isMobile) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);

  // Gestione drag
  const handleMouseDown = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !isMobile) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
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
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 w-full"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDragging}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Elemento invisibile per creare spazio a sinistra */}
            <div className="flex-shrink-0 w-[5px]" aria-hidden="true"></div>
            
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className={`team-card flex-shrink-0 w-[75%] snap-start bg-white rounded-2xl overflow-hidden shadow-md border-0 transition-all duration-300 animate-fade-in opacity-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
            
            {/* Elemento per creare l'effetto peek a destra con la giusta dimensione */}
            <div className="flex-shrink-0" aria-hidden="true"></div>
          </div>
          
          {/* Indicatori di scorrimento in stile Apple solo su mobile */}
          <div className="flex justify-center mt-4">
            {teamMembers.map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 mx-1 rounded transition-all duration-300 ${
                  activeIndex === index ? 'w-6 bg-dental' : 'w-1.5 bg-gray-300'
                }`}
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
              <div className="relative h-80">
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