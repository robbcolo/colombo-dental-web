
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Giacomo",
    text: "Esperienza eccellente con tutto il team dello Studio Colombo. L'atmosfera familiare mi ha fatto sentire subito a mio agio, e il trattamento di implantologia è stato eseguito con grande professionalità. Ora posso sorridere con fiducia!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    text: "Ho portato mio figlio di 7 anni per la sua prima visita dal dentista e tutti sono stati fantastici con lui. Il Dott. Colombo junior ha una pazienza infinita con i bambini e ha trasformato quella che poteva essere un'esperienza traumatica in un momento di apprendimento divertente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    text: "Seguo i trattamenti di ortodonzia presso lo studio e sono rimasto colpito dalla competenza e dalla precisione di tutti i dottori. Apprezzo particolarmente la chiarezza nelle spiegazioni e nei preventivi. Nessuna sorpresa di costi aggiuntivi!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-dental-50 text-dental py-1 px-3 rounded-full text-sm font-medium mb-4">
            TESTIMONIANZE
          </span>
          <h2 className="heading-lg mb-6">Cosa dicono i nostri pazienti</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            La soddisfazione dei nostri pazienti è la nostra priorità. Ecco alcune delle loro esperienze con il nostro studio dentistico.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <div className="absolute -top-3 -left-3 bg-dental rounded-full p-2 z-10">
                            <Quote className="w-5 h-5 text-white" />
                          </div>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-24 h-24 object-cover rounded-full mx-auto md:mx-0"
                          />
                        </div>
                        <div className="text-center md:text-left mt-4">
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <div className="flex items-center justify-center md:justify-start mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-muted-foreground italic text-lg">"{testimonial.text}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md border border-border hover:bg-dental-50 transition-colors"
            aria-label="Precedente testimonianza"
          >
            <ChevronLeft className="w-5 h-5 text-dental" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md border border-border hover:bg-dental-50 transition-colors"
            aria-label="Prossima testimonianza"
          >
            <ChevronRight className="w-5 h-5 text-dental" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-dental' : 'bg-dental-200'
              }`}
              aria-label={`Vai alla testimonianza ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
