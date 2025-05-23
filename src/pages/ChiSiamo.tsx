
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { MapPin, Phone, Mail, Clock, Award, Heart, Shield, Smartphone } from 'lucide-react';

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo Patti | Chi Siamo";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Logo di sfondo ridotto e centrato */}
        <img
          src={`${import.meta.env.BASE_URL}images/about/logo.png`}
          alt="Logo Studio Dentistico Colombo"
          className="
       absolute left-1/2 top-1/2
    w-2/3 sm:w-1/3 md:w-1/3  /* 66% mobile → 33% small/superiore */
    h-auto object-contain opacity-90
    transform -translate-x-1/2 -translate-y-1/2
  "
    />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dental to-dental-light mix-blend-multiply"></div>

        {/* Contenuto in primo piano */}
        <div className="relative z-10 container mx-auto text-center">
          <span className="inline-block bg-white/20 text-white py-1 px-3 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Chi Siamo
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down"
          >
            La nostra storia e i nostri valori
          </h1>
          <p
            className="text-white/90 text-lg animate-slide-down"
          >
            Conoscici meglio e scopri perché mettiamo al centro il paziente in ogni trattamento.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left opacity-0">
              <h2 className="heading-lg mb-6">La nostra storia</h2>
              <p className="text-muted-foreground mb-6">
                Era il 1993 quando il Dott. Alfredo Colombo, dopo diverse esperienze professionali, ha deciso di aprire il suo studio a Patti. Fin dal primo giorno, il suo desiderio è stato creare un ambiente dove il paziente fosse sempre al centro, accolto e curato con professionalità e calore umano.
              </p>
              <p className="text-muted-foreground mb-6">
                Nel tempo, lo studio è diventato un riferimento per tante famiglie della zona, che continuano a sceglierci di generazione in generazione. Negli ultimi anni si sono aggiunti anche i figli Roberto e Aurora, che dopo gli studi universitari presso gli atenei di Messina e Torino hanno portato freschezza, modernità e nuove tecnologie.
              </p>
              <p className="text-muted-foreground mb-6">
                A completare questa piccola realtà familiare ci sono Daniela e Tonina, le nostre storiche ASO. Da oltre vent'anni, con la loro gentilezza e simpatia, fanno sentire ogni paziente davvero speciale.
              </p>
              <p className="text-muted-foreground">
                Oggi, come ieri, ciò che più ci sta a cuore è far star bene le persone, restituendo sorrisi con competenza, attenzione e affetto. Per noi ogni paziente è prima di tutto una persona, parte integrante della grande famiglia dello Studio Dentistico Colombo.
              </p>
            </div>
            
            <div className="animate-slide-in-right opacity-0">
              <div className="relative">
                <img
                  src="/images/about/famiglia.jpg"
                  alt="Studio dentistico"
                  className="rounded-2xl w-full h-auto shadow-lg transition-transform duration-500 hover:scale-105"
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
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0">
              <div className="bg-dental-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cura e Compassione</h3>
              <p className="text-muted-foreground">
                Mettiamo il paziente al centro di ogni trattamento, ascoltando attentamente le sue esigenze e preoccupazioni per creare un'esperienza il più possibile serena e confortevole.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0">
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
      
      {/* Location & Contact Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center mb-12">
          <span className="inline-block bg-dental/10 text-dental py-1 px-4 rounded-full text-sm font-medium mb-4">
            Dove Siamo
          </span>
          <h2 className="heading-lg mb-4">Vieni a trovarci</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lo studio è facilmente raggiungibile con mezzi pubblici
          </p>
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          {/* mappa */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.044415270208!2d14.968479299999998!3d38.1391602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13169c5bac9ea239%3A0xd3cf9836a4ca3755!2sStudio%20Dentistico%20Colombo!5e0!3m2!1sit!2sit!4v1742413070628!5m2!1sit!2sit"
              width="100%" height="400"
              className="border-0"
              allowFullScreen loading="lazy" title="Mappa"
            />
          </div>
          {/* contatti */}
          <div className="space-y-6">
            {[
              { Icon: MapPin, label: "Via Fontanelle, SNC, Patti (ME)", href: "https://maps.app.goo.gl/JeyRSCc4687bBpMS8" },
              { Icon: Phone, label: "0941 22749", href: "tel:094122749" },
              { Icon: Smartphone, label: "379 1523085", href: "https://wa.me/3791523085" },
              { Icon: Mail, label: "colombostudiodentistico@gmail.com", href: "mailto:colombostudiodentistico@gmail.com" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-border
                           hover:shadow-lg hover:scale-105 transform transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="bg-dental-50 p-3 rounded-lg group-hover:bg-dental/10 transition-colors duration-300">
                  <c.Icon className="w-5 h-5 text-dental group-hover:text-dental-dark transition-colors duration-300" />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                  {c.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ChiSiamo;
