
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Giacomo",
    text: "Condivido con orgoglio e realtà uno studio professionale che dedica il suo lavoro nel benessere dei pazienti. Sono precisi, perfetti, con una grande voglia di altruismo. Naturalmente chi ne abbia bisogno contattateli, sono dei veri PROFESSIONISTI.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXfMYQN8gTja34xEyWhQHt4nrekpnMUpZ8pUNymNt_i4AeFRpxc=w144-h144-p-rp-mo-ba4-br100"
  },
  {
    id: 2,
    name: "Francesco",
    text: "I dottori Colombo sono i miei dentisti di fiducia. Lo studio è moderno e accogliente. Sono sempre cortesi e disponibili, facendo sentire tutti a proprio agio. La loro professionalità è indiscutibile. Consiglio vivamente questo studio a chi cerca un dentista di qualità.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXDELdyuDneCYBk0ug45GAGFmrezynJYnKptwbhhQDxYZDIMaXM=w144-h144-p-rp-mo-ba2-br100"
  },
  {
    id: 3,
    name: "Cristina",
    text: "Super professionali! L'ambiente è  accogliente e curato. Le cure ricevute sono state eseguite con precisione e  con ottimi risultati. Mettono a proprio agio il pz fin dall'inizio  ascoltando i relativi bisogni e illustrando l'iter terapeutico. Assolutamente consigliato!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a/ACg8ocKJQ9YLgfubFGnGy80XcKmTrnS33U-vnaq3QqOc3kaOnyKVlQ=w144-h144-p-rp-mo-br100"
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
        <div className="text-center mt-6">
          <a
            href="https://g.page/r/CVU3yqQ2mM_TEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dental font-medium underline hover:text-dental-700 transition-colors"
          >
            Leggi tutte le recensioni o lasciane una su Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
