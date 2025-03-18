
import React from 'react';
import { Shield, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-6 bg-dental-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
              Chi Siamo
            </span>
            <h2 className="heading-lg mb-6 animate-slide-in-left opacity-0" style={{ animationDelay: '100ms' }}>
              Uno studio di famiglia al servizio del tuo sorriso
            </h2>
            <p className="text-muted-foreground mb-8 animate-slide-in-left opacity-0" style={{ animationDelay: '200ms' }}>
              Lo Studio Dentistico Colombo nasce dalla passione per l'odontoiatria tramandata di generazione in generazione. Il fondatore, il Dott. Colombo padre, ha condiviso la sua esperienza e dedizione con i suoi due figli, creando uno studio dove competenza professionale e atmosfera familiare si fondono perfettamente.
            </p>
            
            <div className="space-y-6 animate-slide-in-left opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="flex items-start space-x-4">
                <div className="bg-dental-100 rounded-lg p-2">
                  <Shield className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Esperienza e professionalità</h3>
                  <p className="text-muted-foreground">Oltre 30 anni di esperienza combinata nel campo dell'odontoiatria e continui aggiornamenti professionali.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dental-100 rounded-lg p-2">
                  <Award className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Tecnologia all'avanguardia</h3>
                  <p className="text-muted-foreground">Utilizziamo strumenti e tecniche di ultima generazione per garantire trattamenti efficaci e minimamente invasivi.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dental-100 rounded-lg p-2">
                  <Heart className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Approccio centrato sul paziente</h3>
                  <p className="text-muted-foreground">Ascoltiamo attentamente le tue esigenze per offrirti un piano di trattamento personalizzato in un ambiente confortevole.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-right opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full bg-dental/10 rounded-2xl"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=2062&auto=format&fit=crop" 
                  alt="Team di dentisti" 
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-dental-50 p-3 rounded-lg">
                    <Award className="w-8 h-8 text-dental" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Esperienza</p>
                    <p className="text-xl font-bold">+30 anni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
