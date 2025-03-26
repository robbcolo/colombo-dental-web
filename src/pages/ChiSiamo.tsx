
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { MapPin, Phone, Mail, Clock, Award, Heart, Shield, Smartphone } from 'lucide-react';

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo | Chi Siamo";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-dental to-dental-light">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white py-1 px-3 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
              Chi Siamo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down opacity-0" style={{ animationDelay: '100ms' }}>
              La nostra storia e i nostri valori
            </h1>
            <p className="text-white/90 text-lg animate-slide-down opacity-0" style={{ animationDelay: '200ms' }}>
              Conoscici meglio e scopri perché mettiamo al centro il paziente in ogni trattamento.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left opacity-0">
              <h2 className="heading-lg mb-6">La nostra storia</h2>
              <p className="text-muted-foreground mb-6">
                Lo Studio Dentistico Colombo ha aperto le sue porte nel 1990, quando il Dott. Roberto Colombo decise di creare un ambiente dove ogni paziente potesse ricevere cure odontoiatriche di alta qualità in un'atmosfera familiare e accogliente.
              </p>
              <p className="text-muted-foreground mb-6">
                Nel corso degli anni, lo studio è cresciuto insieme ai pazienti, molti dei quali ci seguono da generazioni. L'arrivo dei figli Marco e Laura come membri del team medico ha portato nuove competenze e tecniche innovative, mantenendo intatta la filosofia di cura personalizzata che ha sempre contraddistinto il nostro approccio.
              </p>
              <p className="text-muted-foreground">
                Oggi, lo Studio Dentistico Colombo rappresenta un punto di riferimento per l'odontoiatria di qualità, dove tradizione familiare e innovazione tecnologica si fondono per offrire trattamenti all'avanguardia in un ambiente che fa sentire ogni paziente parte della famiglia.
              </p>
            </div>
            
            <div className="animate-slide-in-right opacity-0">
              <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full bg-dental/10 rounded-2xl"></div>
                <img 
                  src="/images/about/famiglia.jpg"
                  alt="Studio dentistico" 
                  className="relative z-10 rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 px-6 bg-dental-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
              I Nostri Valori
            </span>
            <h2 className="heading-lg mb-6">Cosa ci guida ogni giorno</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I principi fondamentali che ispirano il nostro lavoro e il rapporto con i pazienti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="bg-dental-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cura e Compassione</h3>
              <p className="text-muted-foreground">
                Mettiamo il paziente al centro di ogni trattamento, ascoltando attentamente le sue esigenze e preoccupazioni per creare un'esperienza il più possibile serena e confortevole.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="bg-dental-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eccellenza Clinica</h3>
              <p className="text-muted-foreground">
                Ci impegniamo a offrire trattamenti di altissima qualità, investendo costantemente in formazione continua e tecnologie all'avanguardia per garantire i migliori risultati.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="bg-dental-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrità e Trasparenza</h3>
              <p className="text-muted-foreground">
                Crediamo in una comunicazione chiara e onesta con i nostri pazienti, spiegando in dettaglio ogni piano di trattamento e i relativi costi senza sorprese.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <Team />
      
      {/* Location Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-dental-50 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
              Dove Siamo
            </span>
            <h2 className="heading-lg mb-6">Vieni a trovarci</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lo studio è situato in una posizione centrale facilmente raggiungibile con mezzi pubblici e con ampia disponibilità di parcheggio nelle vicinanze.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.044415270208!2d14.968479299999998!3d38.1391602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13169c5bac9ea239%3A0xd3cf9836a4ca3755!2sStudio%20Dentistico%20Colombo!5e0!3m2!1sit!2sit!4v1742413070628!5m2!1sit!2sit"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Studio Dentistico Colombo"
              ></iframe>
            </div>
            
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-50 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-dental" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Indirizzo</h3>
                    <a
                      href="https://maps.app.goo.gl/JeyRSCc4687bBpMS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      Via Fontanelle, SNC, Patti (ME)
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                <div className="bg-dental-50 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Telefono</h3>
                  <p className="text-muted-foreground">
                      <a href="tel:094122749" className="hover:text-blue-500">
                  0941 22749
                  </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
              <div className="bg-dental-50 rounded-lg p-3">
                  <Smartphone className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Whatsapp</h3>
                  <p className="text-muted-foreground">
                      <a href="https://wa.me/3791523085" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  379 1523085
                  </a>
                  </p>
                </div>
              </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-50 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-dental" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <a
                      href="mailto:colombostudiodentistico@gmail.com"
                      className="text-muted-foreground hover:text-blue-500 transition-colors break-words"
                    >
                      colombostudiodentistico@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-50 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-dental" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Orari</h3>
                    <p className="text-muted-foreground">Lunedì-Giovedì: 8:30-12:30; 16:00-20:00</p>
                    <p className="text-muted-foreground">Venerdì: 8:30-12:30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ChiSiamo;
