import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contatti = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo | Contatti";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-dental-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
              Contatti
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down opacity-0" style={{ animationDelay: '100ms' }}>
              Siamo qui per aiutarti
            </h1>
            <p className="text-muted-foreground text-lg animate-slide-down opacity-0" style={{ animationDelay: '200ms' }}>
              Contattaci per informazioni, appuntamenti o per qualsiasi domanda sui nostri servizi.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Indirizzo</h3>
              <a
                href="https://maps.app.goo.gl/JeyRSCc4687bBpMS8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-dental transition-colors"
              >
                <p>Via Fontanelle, SNC</p>
                <p>Patti (ME)</p>
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Telefono</h3>
              <a
                href="tel:094122749"
                className="text-muted-foreground hover:text-dental transition-colors block"
              >
                0941 22749
              </a>
              <p className="text-xl font-bold mt-2">Cellulare</p>
              <a
                href="tel:+393791523085"
                className="text-muted-foreground hover:text-dental transition-colors block"
              >
                379 1523085
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a
                href="mailto:colombostudiodentistico@gmail.com"
                className="text-muted-foreground hover:text-dental transition-colors break-words"
              >
                colombostudiodentistico@gmail.com
              </a>
              <p className="text-muted-foreground mt-2">Risposta entro 24 ore lavorative.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Orari</h3>
              <p className="text-muted-foreground">Lunedì - Giovedì</p>
              <p className="text-muted-foreground font-medium">8:30 - 12:30</p>
              <p className="text-muted-foreground font-medium">16:00 - 20:00</p>
              <p className="text-muted-foreground mt-2">Venerdì</p>
              <p className="text-muted-foreground font-medium">8:30 - 12:30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section - Spostato sopra */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
              Social Media
            </span>
            <h2 className="text-3xl font-bold mb-6">Seguici sui social</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Resta aggiornato sulle nostre attività, consigli per la salute orale e promozioni speciali.
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/people/Studio-Dentistico-Colombo/61567455836003/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-center justify-center group-hover:bg-dental/5 transition-colors">
                <Facebook className="w-10 h-10 text-dental" />
              </div>
              <p className="text-center mt-4 font-medium">Facebook</p>
            </a>

            <a
              href="https://www.instagram.com/studiodentisticocolombo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-center justify-center group-hover:bg-dental/5 transition-colors">
                <Instagram className="w-10 h-10 text-dental" />
              </div>
              <p className="text-center mt-4 font-medium">Instagram</p>
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.044415270208!2d14.968479299999998!3d38.1391602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13169c5bac9ea239%3A0xd3cf9836a4ca3755!2sStudio%20Dentistico%20Colombo!5e0!3m2!1sit!2sit!4v1742413070628!5m2!1sit!2sit"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Studio Dentistico Colombo"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Contatti;