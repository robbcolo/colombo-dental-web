import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, MapPin, Smartphone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const initialFormState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
  privacy: false
};

const Prenota = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  
  const availableDates = [
    "2023-06-01", "2023-06-02", "2023-06-05", "2023-06-06", 
    "2023-06-07", "2023-06-08", "2023-06-09", "2023-06-12"
  ];
  
  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo | Prenota";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
    
    // Clear error for this checkbox when user checks it
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const errors: {[key: string]: string} = {};
    
    if (currentStep === 1) {
      // Validate Step 1 fields
      if (!formData.name.trim()) errors.name = "Il nome è obbligatorio";
      if (!formData.surname.trim()) errors.surname = "Il cognome è obbligatorio";
      if (!formData.phone.trim()) errors.phone = "Il numero di telefono è obbligatorio";
    } 
    else if (currentStep === 2) {
      // Validate Step 2 fields
      if (!formData.service) errors.service = "Seleziona un servizio";
      if (!formData.date) errors.date = "Seleziona una data";
      if (!formData.time) errors.time = "Seleziona un orario";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate final step
    const errors: { [key: string]: string } = {};
    if (!formData.privacy) errors.privacy = "Devi accettare la Privacy Policy";

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true); // Attiva l'indicatore di caricamento

      try {
        // Prepara i parametri per il template
        const templateParams = {
          to_email: "studio@dentisticolombo.it", // Inserisci qui l'email dello studio
          from_name: `${formData.name} ${formData.surname}`,
          from_email: formData.email || "noemail@provided.com",
          phone: formData.phone,
          service: formData.service.replace('-', ' '),
          appointment_date: formData.date,
          appointment_time: formData.time,
          message: formData.message || "Nessuna nota aggiuntiva",
          reply_to: formData.email || formData.phone,
        };

        // Invia l'email usando EmailJS
        const response = await emailjs.send(
          'service_5tqit2n', // Sostituisci con il tuo Service ID da EmailJS
          'template_g49zxtd', // Sostituisci con il tuo Template ID da EmailJS
          templateParams,
          'IJbOe1xJCjDRxdc-Y' // Sostituisci con la tua Public Key da EmailJS
        );

        console.log("Form submitted:", formData);
        console.log("Email sent successfully:", response);
        setSubmitted(true);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Errore durante l\'invio della prenotazione:', error);
        alert('Si è verificato un errore durante l\'invio della prenotazione. Per favore, riprova più tardi o contattaci direttamente per telefono.');
      } finally {
        setIsSubmitting(false); // Disattiva l'indicatore di caricamento
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-dental-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-dental/10 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4 animate-fade-in opacity-0">
              Prenotazione
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-down opacity-0" style={{ animationDelay: '100ms' }}>
              Prenota la tua visita
            </h1>
            <p className="text-muted-foreground text-lg animate-slide-down opacity-0" style={{ animationDelay: '200ms' }}>
              Compila il form per prenotare un appuntamento con uno dei nostri specialisti.
            </p>
          </div>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          {!submitted ? (
            <>
              
              {/* Two-column layout with contact info and form */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Column */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-8 h-full animate-fade-in opacity-0">
              <h2 className="text-2xl font-bold mb-6">Contatti Studio</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-medium text-lg mb-3">Numeri di telefono</h3>
                        
                        <div className="space-y-4">
                          <a href="tel:094122749" className="flex items-center group">
                            <div className="bg-dental/10 rounded-full p-3 mr-4 group-hover:bg-dental group-hover:text-white transition-colors">
                              <Phone size={20} className="text-dental group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Telefono fisso</p>
                              <p className="font-medium">0941 22749</p>
                            </div>
                          </a>
                          
                          <a href="tel:3791523085" className="flex items-center group">
                            <div className="bg-dental/10 rounded-full p-3 mr-4 group-hover:bg-dental group-hover:text-white transition-colors">
                              <Smartphone size={20} className="text-dental group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Cellulare</p>
                              <p className="font-medium">379 1523085</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-3">Orari di apertura</h3>
                        <ul className="space-y-4">
                          <li>
                            <div className="text-center text-muted-foreground mb-1">Lunedì - Giovedì</div>
                            <div className="flex justify-center space-x-4">
                              <div className="text-center">8:30 - 12:30</div>
                              <div className="text-center">16:00 - 20:00</div>
                            </div>
                          </li>
                          <li>
                            <div className="text-center text-muted-foreground mb-1">Venerdì</div>
                            <div className="text-center">8:30 - 12:30</div>
                          </li>
                          <li>
                            <div className="text-center text-muted-foreground mb-1">Sabato - Domenica</div>
                            <div className="text-center">Chiuso</div>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-lg mb-3">Indirizzo</h3>
                        <div className="flex items-start">
                          <MapPin size={20} className="text-dental mr-2 mt-1 flex-shrink-0" />
                          <p>Via Roma 123<br />98123 Sant'Agata di Militello (ME)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Form Column */}
                <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-8 animate-fade-in opacity-0">
              {/* Steps Indicator - SPOSTATO QUI */}
              <div className="flex justify-between mb-8">
                <div className="flex flex-col items-center w-1/3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-dental text-white' : 'bg-dental-100 text-dental-500'}`}>
                    1
                  </div>
                  <p className={`text-sm ${step >= 1 ? 'text-dental font-medium' : 'text-muted-foreground'}`}>Informazioni personali</p>
                </div>
                
                <div className="flex flex-col items-center w-1/3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-dental text-white' : 'bg-dental-100 text-dental-500'}`}>
                    2
                  </div>
                  <p className={`text-sm ${step >= 2 ? 'text-dental font-medium' : 'text-muted-foreground'}`}>Servizio e data</p>
                </div>
                
                <div className="flex flex-col items-center w-1/3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-dental text-white' : 'bg-dental-100 text-dental-500'}`}>
                    3
                  </div>
                  <p className={`text-sm ${step >= 3 ? 'text-dental font-medium' : 'text-muted-foreground'}`}>Conferma</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                      {/* Step 1: Personal Information */}
                      {step === 1 && (
                        <div className="animate-fade-in">
                          <h2 className="text-2xl font-bold mb-6">Informazioni personali</h2>
                          
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Nome*
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition`}
                                  placeholder="Inserisci il tuo nome"
                                />
                                {formErrors.name && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                                )}
                              </div>
                              
                              <div>
                                <label htmlFor="surname" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Cognome*
                                </label>
                                <input
                                  type="text"
                                  id="surname"
                                  name="surname"
                                  value={formData.surname}
                                  onChange={handleChange}
                                  required
                                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.surname ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition`}
                                  placeholder="Inserisci il tuo cognome"
                                />
                                {formErrors.surname && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.surname}</p>
                                )}
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                  required
                                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition`}
                                  placeholder="Inserisci la tua email"
                                />
                                {formErrors.email && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                )}
                              </div>
                              
                              <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Telefono*
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                  className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition`}
                                  placeholder="Inserisci il tuo numero di telefono"
                                />
                                {formErrors.phone && (
                                  <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-end mt-10">
                            <button 
                              type="button" 
                              onClick={nextStep}
                              className="btn-primary flex items-center"
                            >
                              <span>Continua</span>
                              <ArrowRight size={18} className="ml-2" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 2: Service and Date */}
                      {step === 2 && (
                        <div className="animate-fade-in">
                          <h2 className="text-2xl font-bold mb-6">Servizio e data</h2>
                          
                          <div className="space-y-6">
                            <div>
                              <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-2">
                                Servizio richiesto*
                              </label>
                              <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-3 rounded-lg border ${formErrors.service ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition`}
                              >
                                <option value="" disabled>Seleziona un servizio</option>
                                <option value="igiene-dentale">Igiene Dentale Professionale</option>
                                <option value="implantologia">Implantologia Dentale</option>
                                <option value="ortodonzia">Ortodonzia</option>
                                <option value="estetica-dentale">Estetica Dentale</option>
                                <option value="odontoiatria-pediatrica">Odontoiatria Pediatrica</option>
                                <option value="chirurgia-orale">Chirurgia Orale</option>
                                <option value="protesi-dentali">Protesi Dentali</option>
                                <option value="gnatologia">Gnatologia</option>
                                <option value="prima-visita">Prima Visita</option>
                                <option value="altro">Altro</option>
                              </select>
                              {formErrors.service && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.service}</p>
                              )}
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Data preferita*
                                </label>
                                <div className="relative">
                                  <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.date ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition pl-10`}
                                  />
                                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental" size={18} />
                                  {formErrors.date && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.date}</p>
                                  )}
                                </div>
                              </div>
                              
                              <div>
                                <label htmlFor="time" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Orario preferito*
                                </label>
                                <div className="relative">
                                  <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg border ${formErrors.time ? 'border-red-500' : 'border-border'} focus:border-dental focus:ring-1 focus:ring-dental outline-none transition pl-10`}
                                  >
                                    <option value="" disabled>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seleziona un orario</option>
                                    {availableTimes.map(time => (
                                      <option key={time} value={time}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{time}</option>
                                    ))}
                                  </select>
                                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental" size={18} />
                                  {formErrors.time && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.time}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                                Note aggiuntive (opzionale)
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                                placeholder="Descrivi eventuali esigenze particolari o fornisci informazioni aggiuntive..."
                              ></textarea>
                            </div>
                          </div>
                          
                          <div className="flex justify-between mt-10">
                            <button 
                              type="button" 
                              onClick={prevStep}
                              className="btn-secondary"
                            >
                              Indietro
                            </button>
                            
                            <button 
                              type="button" 
                              onClick={nextStep}
                              className="btn-primary flex items-center"
                            >
                              <span>Continua</span>
                              <ArrowRight size={18} className="ml-2" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Step 3: Confirmation */}
                      {step === 3 && (
                        <div className="animate-fade-in">
                          <h2 className="text-2xl font-bold mb-6">Conferma prenotazione</h2>
                          
                          <div className="bg-dental-50 p-6 rounded-lg mb-8">
                            <h3 className="font-bold text-lg mb-4">Riepilogo dati</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-muted-foreground">Nome e cognome</p>
                                <p className="font-medium">{formData.name} {formData.surname}</p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Contatti</p>
                                <p className="font-medium">{formData.email}</p>
                                <p className="font-medium">{formData.phone}</p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Servizio richiesto</p>
                                <p className="font-medium">{formData.service.replace('-', ' ')}</p>
                              </div>
                              
                              <div>
                                <p className="text-sm text-muted-foreground">Data e ora</p>
                                <p className="font-medium">{formData.date}, {formData.time}</p>
                              </div>
                            </div>
                            
                            {formData.message && (
                              <div className="mt-4">
                                <p className="text-sm text-muted-foreground">Note aggiuntive</p>
                                <p className="font-medium">{formData.message}</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-start mb-8">
                            <input
                              type="checkbox"
                              id="privacy"
                              name="privacy"
                              checked={formData.privacy}
                              onChange={handleCheckboxChange}
                              required
                              className={`h-5 w-5 text-dental ${formErrors.privacy ? 'border-red-500' : 'border-border'} rounded focus:ring-dental mt-1`}
                            />
                            <label htmlFor="privacy" className="ml-3 block text-muted-foreground">
                              Acconsento al trattamento dei dati personali secondo la {' '}
                              <a href="/privacy" className="text-dental hover:underline">
                                Privacy Policy
                              </a>
                              . *
                            </label>
                            {formErrors.privacy && (
                              <p className="text-red-500 text-sm mt-1">{formErrors.privacy}</p>
                            )}
                          </div>
                          
                          <div className="flex justify-between mt-10">
                            <button 
                              type="button" 
                              onClick={prevStep}
                              className="btn-secondary"
                            >
                              Indietro
                            </button>
                            
                            <button
                              type="submit"
                              className="btn-primary flex items-center"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? (
                                <>
                                  <span>Invio in corso...</span>
                                  <div className="ml-2 w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                                </>
                              ) : (
                                <span>Conferma prenotazione</span>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // Success Message
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-10 text-center animate-fade-in opacity-0">
                <div className="flex justify-center mb-6">
                  <div className="bg-dental/10 rounded-full p-4">
                    <CheckCircle className="w-16 h-16 text-dental" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">Prenotazione inviata con successo!</h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Grazie per aver prenotato un appuntamento con noi. Ti confermeremo la disponibilità entro 24 ore lavorative via email o telefono.
                </p>
                
                <div className="bg-dental-50 p-6 rounded-lg mb-8 max-w-md mx-auto">
                  <h3 className="font-bold text-lg mb-4">Dettagli prenotazione</h3>
                  <p><span className="text-muted-foreground">Nome:</span> {formData.name} {formData.surname}</p>
                  <p><span className="text-muted-foreground">Data richiesta:</span> {formData.date}, {formData.time}</p>
                  <p><span className="text-muted-foreground">Servizio:</span> {formData.service.replace('-', ' ')}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Prenota;
