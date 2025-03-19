
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
              <p className="text-muted-foreground">Via Esempio 123</p>
              <p className="text-muted-foreground">Milano, 20100</p>
              <p className="text-muted-foreground mt-2">A 5 minuti dalla fermata della metropolitana Centrale.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Telefono</h3>
              <p className="text-muted-foreground">+39 02 1234567</p>
              <p className="text-muted-foreground mt-2">Lun-Ven: 9:00-19:00</p>
              <p className="text-muted-foreground">Sab: 9:00-13:00</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-muted-foreground">info@studiodentisticocolombo.it</p>
              <p className="text-muted-foreground mt-2">Risposta entro 24 ore lavorative.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="bg-dental-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-dental" />
              </div>
              <h3 className="text-xl font-bold mb-3">Orari</h3>
              <p className="text-muted-foreground">Lunedì - Venerdì</p>
              <p className="text-muted-foreground font-medium">9:00 - 19:00</p>
              <p className="text-muted-foreground mt-2">Sabato</p>
              <p className="text-muted-foreground font-medium">9:00 - 13:00</p>
            </div>
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
      
      {/* Social Media Section */}
      <section className="py-20 px-6 bg-dental-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
              Social Media
            </span>
            <h2 className="heading-lg mb-6">Seguici sui social</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Resta aggiornato sulle nostre attività, consigli per la salute orale e promozioni speciali.
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="#" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-center justify-center group-hover:bg-dental/5 transition-colors">
                <Facebook className="w-10 h-10 text-dental" />
              </div>
              <p className="text-center mt-4 font-medium">Facebook</p>
            </a>
            
            <a href="#" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-center justify-center group-hover:bg-dental/5 transition-colors">
                <Instagram className="w-10 h-10 text-dental" />
              </div>
              <p className="text-center mt-4 font-medium">Instagram</p>
            </a>
            
            <a href="#" className="group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border flex items-center justify-center group-hover:bg-dental/5 transition-colors">
                <Linkedin className="w-10 h-10 text-dental" />
              </div>
              <p className="text-center mt-4 font-medium">LinkedIn</p>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contatti;
