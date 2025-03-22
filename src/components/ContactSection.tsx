import React, { useState } from 'react';
import { MapPinned, Phone, Mail, Clock, Send, Smartphone } from 'lucide-react';
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

  // Gestione dell'invio del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Prepara i parametri per il template
        const templateParams = {
          to_email: "studio@dentisticolombo.it", // Inserisci qui l'email dello studio
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service || "Non specificato",
          message: formData.message,
          reply_to: formData.email,
        };

        // Invia l'email usando EmailJS
        const response = await emailjs.send(
          'service_5tqit2n', // Il tuo Service ID da EmailJS
          'template_g49zxtd', // Il tuo Template ID da EmailJS
          templateParams,
          'IJbOe1xJCjDRxdc-Y' // La tua Public Key da EmailJS
        );

        console.log("Form submitted:", formData);
        console.log("Email sent successfully:", response);

        // Reset del form e mostra messaggio di successo
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          privacy: false
        });

        setSubmitted(true);

        // Dopo 5 secondi, ripristina il form per consentire un nuovo invio
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
    <section className="py-20 px-6 bg-dental-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-in-left opacity-0">
            <span className="inline-block bg-dental/20 text-blue-500 py-1 px-3 rounded-full text-sm font-medium mb-4">
              Contattaci
            </span>
            <h2 className="heading-lg mb-6 text-white">Siamo qui per aiutarti</h2>
            <p className="text-white/80 mb-12 max-w-md">
              Hai domande sui nostri servizi o vuoi prenotare un appuntamento? Contattaci usando uno dei metodi qui sotto o compila il modulo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <MapPinned className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Indirizzo</h3>
                  <p className="text-white/80">
                    <a href="https://www.google.com/maps/place/Studio+Dentistico+Colombo/@38.1391643,14.9636084,17z/data=!3m1!4b1!4m6!3m5!1s0x13169c5bac9ea239:0xd3cf9836a4ca3755!8m2!3d38.1391602!4d14.9684793!16s%2Fg%2F1hc47jp95?entry=ttu&g_ep=EgoyMDI1MDMxNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Via Fontanelle, SNC, Patti (ME)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Telefono</h3>
                  <p className="text-white/80">
                    <a href="tel:094122749" className="hover:underline">
                      0941 22749
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Smartphone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Whatsapp</h3>
                  <p className="text-white/80">
                    <a href="https://wa.me/3791523085" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      379 1523085
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-white">Email</h3>
                  <p className="text-white/80">info@studiodentisticocolombo.it</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-dental/20 rounded-lg p-3">
                  <Clock className="w-6 h-6 text-blue-500" />
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
            {submitted ? (
              // Messaggio di successo quando il form è stato inviato
              <div className="bg-white rounded-2xl shadow-xl p-8">
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
              // Form normale quando non è stato ancora inviato
              <form className="bg-white rounded-2xl shadow-xl p-8" onSubmit={handleSubmit}>
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
                      Acconsento al trattamento dei dati personali secondo la {' '}
                      <a href="/privacy" className="text-dental hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  {formErrors.privacy && (
                    <p className="text-red-500 text-sm">{formErrors.privacy}</p>
                  )}

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
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;