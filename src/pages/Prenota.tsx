import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, CheckCircle, ArrowRight, Phone, MapPin, Smartphone } from 'lucide-react';

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
  
  const availableDates = [
    "2023-06-01", "2023-06-02", "2023-06-05", "2023-06-06", 
    "2023-06-07", "2023-06-08", "2023-06-09", "2023-06-12"
  ];
  
  const availableTimes = [
    "09:00", "10:00", "11:00", "12:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo | Prenota";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    window.scrollTo(0, 0);
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
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Lunedì - Venerdì</span>
                            <span>9:00 - 19:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Sabato</span>
                            <span>9:00 - 13:00</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Domenica</span>
                            <span>Chiuso</span>
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
                                  Nome *
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                                  placeholder="Inserisci il tuo nome"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="surname" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Cognome *
                                </label>
                                <input
                                  type="text"
                                  id="surname"
                                  name="surname"
                                  value={formData.surname}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                                  placeholder="Inserisci il tuo cognome"
                                />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Email *
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                                  placeholder="Inserisci la tua email"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Telefono *
                                </label>
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
                                  placeholder="Inserisci il tuo numero di telefono"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-end mt-10">
                            <button 
                              type="button" 
                              onClick={nextStep}
                              className="btn-primary"
                            >
                              Continua
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
                                Servizio richiesto *
                              </label>
                              <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition"
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
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="date" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Data preferita *
                                </label>
                                <div className="relative">
                                  <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition pl-10"
                                  />
                                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental" size={18} />
                                </div>
                              </div>
                              
                              <div>
                                <label htmlFor="time" className="block text-sm font-medium text-muted-foreground mb-2">
                                  Orario preferito *
                                </label>
                                <div className="relative">
                                  <select
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-dental focus:ring-1 focus:ring-dental outline-none transition pl-10"
                                  >
                                    <option value="" disabled>Seleziona un orario</option>
                                    {availableTimes.map(time => (
                                      <option key={time} value={time}>{time}</option>
                                    ))}
                                  </select>
                                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dental" size={18} />
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
                              className="btn-primary"
                            >
                              Continua
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
                              className="h-5 w-5 text-dental border-border rounded focus:ring-dental mt-1"
                            />
                            <label htmlFor="privacy" className="ml-3 block text-muted-foreground">
                              Acconsento al trattamento dei dati personali secondo la {' '}
                              <a href="/privacy" className="text-dental hover:underline">
                                Privacy Policy
                              </a>
                              . *
                            </label>
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
                              className="btn-primary"
                              disabled={!formData.privacy}
                            >
                              Conferma prenotazione
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
