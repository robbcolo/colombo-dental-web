
import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

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
  return (
    <section className="py-20 px-6" id="team">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-dental-50 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
            Il Nostro Team
          </span>
          <h2 className="heading-lg mb-6">Professionisti al tuo servizio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Il nostro team di specialisti lavora in sinergia per offrire le migliori cure odontoiatriche in un ambiente familiare e accogliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <a href={`mailto:${member.email}`} className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                      <a href={`tel:${member.phone}`} className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Phone className="w-5 h-5 text-white" />
                      </a>
                      <a href={member.instagram} className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Instagram className="w-5 h-5 text-white" />
                      </a>
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
