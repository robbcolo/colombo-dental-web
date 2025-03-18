
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-dental-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-in-left opacity-0">
            <span className="inline-block bg-dental/20 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
              Contattaci
            </span>
            <h2 className="heading-lg mb-6 text-white">Siamo qui per aiutarti</h2>
            <p className="text-white/80 mb-12 max-w-md">
              Hai domande sui nostri servizi o vuoi prenotare un appuntamento? Contattaci usando uno dei metodi qui sotto o compila il modulo.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <MapPin className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Indirizzo</h3>
                  <p className="text-white/80">Via Esempio 123, Milano, 20100</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Telefono</h3>
                  <p className="text-white/80">+39 02 1234567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Email</h3>
                  <p className="text-white/80">info@studiodentisticocolombo.it</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-dental" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Orari</h3>
                  <p className="text-white/80">Lun-Ven: 9:00-19:00</p>
                  <p className="text-white/80">Sab: 9:00-13:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right opacity-0">
            <form className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Inviaci un messaggio</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-2">
                    Servizio di interesse
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                  >
                    <option value="" disabled selected>Seleziona un servizio</option>
                    <option value="igiene">Igiene Dentale</option>
                    <option value="implantologia">Implantologia</option>
                    <option value="ortodonzia">Ortodonzia</option>
                    <option value="estetica">Estetica Dentale</option>
                    <option value="pediatrica">Odontoiatria Pediatrica</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                    placeholder="Descrivi la tua richiesta..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-dental border-border rounded focus:ring-dental"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-muted-foreground">
                    Acconsento al trattamento dei dati personali secondo la {' '}
                    <a href="/privacy" className="text-dental hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Invia messaggio
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
