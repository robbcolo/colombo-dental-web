import React, { useState } from 'react';
import { MapPinned, Phone, Mail, Clock, Send, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Definizione delle interfacce per i tipi
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection = () => {
  // Stato per il form
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacy: false
  });

  // Stato per gli errori
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Stato per gestire la sottomissione
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Stato per le sezioni collassabili su mobile
  const [activeSection, setActiveSection] = useState<'form' | 'info' | null>(null);

  // Gestione del cambiamento degli input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Rimuove l'errore quando l'utente digita
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Gestione del cambiamento dei checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));

    // Rimuove l'errore quando l'utente seleziona
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validazione del form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) errors.name = "Il nome è obbligatorio";
    if (!formData.email.trim()) errors.email = "L'email è obbligatoria";
    if (!formData.phone.trim()) errors.phone = "Il telefono è obbligatorio";
    if (!formData.message.trim()) errors.message = "Il messaggio è obbligatorio";
    if (!formData.privacy) errors.privacy = "Devi accettare la Privacy Policy";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Toggle per le sezioni collassabili
  const toggleSection = (section: 'form' | 'info') => {
    setActiveSection(prev => prev === section ? null : section);
  };

  // Gestione dell'invio del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Prepara i parametri per il template
        const templateParams = {
          to_email: "studio@dentisticolombo.it",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service || "Non specificato",
          message: formData.message,
          reply_to: formData.email,
        };

        // Invia l'email usando EmailJS
        const response = await emailjs.send(
          'service_5tqit2n',
          'template_g49zxtd',
          templateParams,
          'IJbOe1xJCjDRxdc-Y'
        );

        console.log("Form submitted:", formData);
        console.log("Email sent successfully:", response);

        // Reset del form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          privacy: false
        });

        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);

      } catch (error) {
        console.error('Errore durante l\'invio del messaggio:', error);
        alert('Si è verificato un errore durante l\'invio del messaggio. Per favore, riprova più tardi o contattaci direttamente per telefono.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-dental to-dental-light text-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block bg-white/10 text-white py-1 px-3 rounded-full text-sm font-medium mb-4">
            Contattaci
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Siamo qui per aiutarti</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Hai domande sui nostri servizi o vuoi prenotare un appuntamento?
          </p>
        </div>

        {/* Quick Contact Cards - Always visible */}
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
          {/* Telefono */}
          <a
            href="tel:094122749"
            className="flex flex-col items-center justify-center p-4 bg-dental/10 rounded-xl hover:bg-dental/20 transition-colors text-center h-24"
          >
            <Phone className="w-5 h-5 text-blue-500 mb-2" />
            <div className="text-sm font-medium">Chiamaci</div>
            <div className="text-base font-bold">0941 22749</div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/3791523085"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-dental/10 rounded-xl hover:bg-dental/20 transition-colors text-center h-24"
          >
            <Smartphone className="w-5 h-5 text-blue-500 mb-2" />
            <div className="text-sm font-medium">WhatsApp</div>
            <div className="text-base font-bold">379 1523085</div>
          </a>
        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden space-y-4">
          {/* Form Accordion */}
          <div className="bg-white/10 rounded-xl overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleSection('form')}
            >
              <span className="font-bold text-lg">Inviaci un messaggio</span>
              {activeSection === 'form' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {activeSection === 'form' && (
              <div className="p-4 pt-0">
                {submitted ? (
                  <div className="bg-white rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Messaggio inviato!</h3>
                    <p className="text-muted-foreground">
                      Grazie per averci contattato. Ti risponderemo al più presto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-white/20'} bg-white/10 focus:bg-white/20 focus:outline-none text-white placeholder-white/60`}
                        placeholder="Nome completo *"
                      />
                      {formErrors.name && (
                        <p className="text-red-300 text-xs mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-white/20'} bg-white/10 focus:bg-white/20 focus:outline-none text-white placeholder-white/60`}
                        placeholder="Email *"
                      />
                      {formErrors.email && (
                        <p className="text-red-300 text-xs mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-white/20'} bg-white/10 focus:bg-white/20 focus:outline-none text-white placeholder-white/60`}
                        placeholder="Telefono *"
                      />
                      {formErrors.phone && (
                        <p className="text-red-300 text-xs mt-1">{formErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 focus:bg-white/20 focus:outline-none text-white"
                      >
                        <option value="" disabled className="text-gray-800">Seleziona un servizio</option>
                        <option value="igiene" className="text-gray-800">Igiene Dentale</option>
                        <option value="implantologia" className="text-gray-800">Implantologia</option>
                        <option value="ortodonzia" className="text-gray-800">Ortodonzia</option>
                        <option value="estetica" className="text-gray-800">Estetica Dentale</option>
                        <option value="pediatrica" className="text-gray-800">Odontoiatria Pediatrica</option>
                        <option value="altro" className="text-gray-800">Altro</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-white/20'} bg-white/10 focus:bg-white/20 focus:outline-none text-white placeholder-white/60`}
                        placeholder="Il tuo messaggio *"
                      ></textarea>
                      {formErrors.message && (
                        <p className="text-red-300 text-xs mt-1">{formErrors.message}</p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleCheckboxChange}
                          className={`h-4 w-4 text-dental border-white/20 rounded focus:ring-dental ${formErrors.privacy ? 'border-red-500' : ''}`}
                        />
                        <label htmlFor="privacy" className="ml-2 block text-xs text-white/80">
                          Acconsento al trattamento dei dati personali secondo la{' '}
                          <a href="/privacy" className="text-blue-300 hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      {formErrors.privacy && (
                        <p className="text-red-300 text-xs mt-1">{formErrors.privacy}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-dental py-3 px-6 rounded-lg font-medium transition-all hover:bg-blue-50 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span>Invio in corso...</span>
                          <div className="ml-2 w-4 h-4 rounded-full border-2 border-dental border-t-transparent animate-spin"></div>
                        </>
                      ) : (
                        <>
                          Invia messaggio
                          <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Info Accordion */}
          <div className="bg-white/10 rounded-xl overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleSection('info')}
            >
              <span className="font-bold text-lg">Informazioni di contatto</span>
              {activeSection === 'info' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {activeSection === 'info' && (
              <div className="p-4 pt-0 space-y-4">
                {/* Indirizzo */}
                <div className="flex items-center space-x-3">
                  <MapPinned className="w-5 h-5 text-blue-300 shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/Studio+Dentistico+Colombo/@38.1391643,14.9636084,17z/data=!3m1!4b1!4m6!3m5!1s0x13169c5bac9ea239:0xd3cf9836a4ca3755!8m2!3d38.1391602!4d14.9684793!16s%2Fg%2F1hc47jp95?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 hover:text-blue-300"
                  >
                    Via Fontanelle, SNC, Patti (ME)
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-300 shrink-0" />
                  <a
                    href="mailto:colombostudiodentistico@gmail.com"
                    className="text-sm text-white/90 hover:text-blue-300 break-words"
                  >
                    colombostudiodentistico@gmail.com
                  </a>
                </div>

                {/* Orari */}
                <div className="pt-2 border-t border-white/20">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="w-5 h-5 text-blue-300 shrink-0" />
                    <span className="text-sm font-medium">Orari di apertura</span>
                  </div>

                  <div className="ml-8 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/80">Lun - Gio:</span>
                      <span>8:30-12:30, 16:00-20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Venerdì:</span>
                      <span>8:30-12:30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Sab - Dom:</span>
                      <span>Chiuso</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 lg:gap-16 mt-12">
          {/* Form Section */}
          <div className="animate-slide-in-right opacity-0">
            {submitted ? (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Messaggio inviato!</h3>
                  <p className="text-muted-foreground mb-4">
                    Grazie per averci contattato. Ti risponderemo al più presto.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-foreground">
                  Inviaci un messaggio
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition text-foreground`}
                        placeholder="Il tuo nome"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition text-foreground`}
                        placeholder="La tua email"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition text-foreground`}
                      placeholder="Il tuo numero di telefono"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-2">
                      Servizio di interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition text-foreground"
                    >
                      <option value="" disabled>Seleziona un servizio</option>
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition text-foreground`}
                      placeholder="Descrivi la tua richiesta..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleCheckboxChange}
                        className={`h-4 w-4 text-dental border-border rounded focus:ring-dental ${formErrors.privacy ? 'border-red-500' : ''}`}
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-muted-foreground">
                        Acconsento al trattamento dei dati personali secondo la{' '}
                        <a href="/privacy" className="text-dental hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                    {formErrors.privacy && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.privacy}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Invio in corso...</span>
                        <div className="ml-2 w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      </>
                    ) : (
                      <>
                        Invia messaggio
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Info Section - Solo desktop */}
          <div className="animate-slide-in-left opacity-0">
            <div className="space-y-4">
              {/* Indirizzo */}
              <div className="p-4 bg-dental/10 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental/20 rounded-lg p-2.5 shrink-0">
                    <MapPinned className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">Dove siamo</h3>
                    <a
                      href="https://www.google.com/maps/place/Studio+Dentistico+Colombo/@38.1391643,14.9636084,17z/data=!3m1!4b1!4m6!3m5!1s0x13169c5bac9ea239:0xd3cf9836a4ca3755!8m2!3d38.1391602!4d14.9684793!16s%2Fg%2F1hc47jp95?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-blue-300"
                    >
                      Via Fontanelle, SNC, Patti (ME)
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-dental/10 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental/20 rounded-lg p-2.5 shrink-0">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold mb-1">Email</h3>
                    <a
                      href="mailto:colombostudiodentistico@gmail.com"
                      className="text-sm text-white/80 hover:text-blue-300 break-words"
                    >
                      colombostudiodentistico@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Orari */}
              <div className="p-4 bg-dental/10 rounded-xl">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-dental/20 rounded-lg p-2.5 shrink-0">
                    <Clock className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-base font-bold">Orari di apertura</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Lun - Gio</span>
                    <div className="text-right">
                      <div>8:30 - 12:30</div>
                      <div>16:00 - 20:00</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-white/80">Venerdì</span>
                    <span>8:30 - 12:30</span>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-white/80">Sab - Dom</span>
                    <span>Chiuso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-dental-900"></div>
    </section>
  );
};

export default ContactSection;