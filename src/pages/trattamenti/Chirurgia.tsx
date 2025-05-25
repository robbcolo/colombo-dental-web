import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Studio Dentistico Colombo",
    description: "Chirurgia orale a Patti: tecniche moderne e mini-invasive.",
    url: "https://studiodentisticocolombo.com",
    logo: "https://studiodentisticocolombo.com/images/about/logo.png",
    telephone: "+39094122749",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Via Fontanelle, SNC",
        addressLocality: "Patti",
        addressRegion: "ME",
        postalCode: "98066"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 38.1391602,
        longitude: 14.9684793
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
            ],
            opens: "08:30",
            closes: "20:00"
        }
    ]
};


const Chirurgia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Chirurgia Orale | Studio Dentistico Colombo a Patti';
    }, []);

    return (
        <>
            <Helmet>
                <title>Chirurgia Orale | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Interventi chirurgici orali con tecniche moderne e mini-invasive. Estrazioni, chirurgia pre-implantare e tessuti molli."
                />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero Section with animations */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
                {/* Logo background */}
                <img
                    src={`${import.meta.env.BASE_URL}images/about/logo.png`}
                    alt="Studio Dentistico Colombo"
                    className="
            absolute left-1/2 top-1/2
            w-2/3 sm:w-1/3 md:w-1/3
            h-auto object-contain opacity-90
            transform -translate-x-1/2 -translate-y-1/2
          "
                />

                <div className="absolute inset-0 bg-gradient-to-r from-dental to-dental-light mix-blend-multiply"></div>

                <div className="relative z-10 container mx-auto text-center">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down"
                        
                    >
                        Chirurgia Orale
                    </h1>
                    <p
                        className="text-white/90 text-lg animate-slide-down"
                        
                    >
                        Interventi chirurgici orali con tecniche mini-invasive e massima precisione.
                    </p>
                </div>
            </section>

            {/* Main Content with slide-in animations */}
            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        La chirurgia orale viene eseguita quando un dente non può essere salvato o presenta problematiche, come i denti del giudizio spesso fanno. Ogni procedura viene eseguita con grande attenzione e precisione per rendere l'esperienza il più serena e confortevole possibile.
                    </p>
                    <h2
                        className="text-3xl font-bold mb-4 text-dental animate-slide-in-left"  
                    >
                        Cosa Facciamo
                    </h2>
                    <p
                        className="text-muted-foreground mb-6 animate-slide-in-left"                
                    >
                        Eseguiamo interventi chirurgici orali di alta qualità, dalla semplice estrazione alla chirurgia pre-implantare.
                    </p>
                    <ul className="list-disc pl-5">
                        {['Estrazioni complesse', 'Chirurgia pre-implantare', 'Gestione tessuti molli', 'Mini-innesti gengivali'].map((item, idx) => (
                            <li
                                key={idx}
                                className="mb-2 animate-slide-in-left"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* FAQ con <details> */}
                    <details className="mt-8">
                        <summary
                            className="
                flex sm:inline-flex items-center justify-center
            w-full sm:w-auto
            bg-dental text-white
            px-5 py-2
            rounded-xl
            shadow-md
            hover:bg-dental-600
            focus:outline-none focus:ring-2 focus:ring-dental focus:ring-opacity-50
            transition-colors duration-200
              "
                        >
                            <span>FAQ</span>
                        </summary>
                        <div className="mt-4 bg-white p-6 rounded-lg shadow-sm text-muted-foreground space-y-4">
                            <p>
                                <strong>In quali casi è necessaria la chirurgia orale?</strong><br />
                                La chirurgia orale è necessaria per trattare casi complessi come estrazioni di denti del giudizio. Ogni procedura è personalizzata e preceduta da un’attenta valutazione da parte dello specialista.
                            </p>
                            <p>
                                <strong>Devo preoccuparmi per il dolore post-operatorio?</strong><br />
                                Dopo l’intervento, è normale avvertire un po' di fastidio, che può essere gestito con farmaci prescritti. Ti forniremo così tutte le indicazioni per un recupero sereno.

                            </p>
                            <p>
                                <strong>Quanto tempo serve per riprendersi completamente?</strong><br />
                                In genere, già in pochi giorni potrai tornare alla tua routine normale. Noi ti seguiremo per tutto il percorso di guarigione.
                            </p>
                        </div>
                    </details>
                </div>
            </main>

            

            <div className="container mx-auto px-6 mb-8">
                <Link
                    to="/servizi"
                    className="
      flex sm:inline-flex items-center justify-center
      w-full sm:w-auto
      bg-dental text-white
      px-5 py-3
      rounded-xl
      shadow-md
      hover:bg-dental-600
      focus:outline-none focus:ring-2 focus:ring-dental focus:ring-opacity-50
      transition-colors duration-200
    "
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Altri trattamenti
                </Link>
            </div>

            <Footer />
        </>
    );
};

export default Chirurgia;
