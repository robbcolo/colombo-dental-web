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
    description: "Protesi dentale a Patti: ritornerai a sorridere.",
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

const Protesi = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Protesi Dentali | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Protesi fissa',
        'Protesi rimovibile',
        'Protesi su impianti',
        'Protesi parziali scheletrate'
    ];

    return (
        <>
            <Helmet>
                <title>Protesi Dentali | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Soluzioni protesiche fisse e rimovibili per ripristinare estetica e funzione, personalizzate per ogni caso."
                />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <Navbar />
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL}images/about/logo.png`}
                    alt="Studio Dentistico Colombo"
                    className="absolute left-1/2 top-1/2 w-2/3 sm:w-1/3 md:w-1/3 h-auto object-contain opacity-90 transform -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dental to-dental-light mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down">
                        Protesi Dentali
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Ripristiniamo estetica e funzione con protesi fisse o rimovibili su misura.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        Le protesi dentali sono una soluzione efficace per restituire funzionalità ed estetica al tuo sorriso. Che si tratti di una protesi fissa o mobile, lavoriamo per creare una soluzione personalizzata che si adatti perfettamente alla tua bocca, permettendoti di masticare, parlare e sorridere con naturalezza, migliorando la qualità della tua vita quotidiana.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Tipologie di Protesi
                    </h2>
                    <ul className="list-disc pl-5">
                        {items.map((item, idx) => (
                            <li key={idx} className="mb-2 animate-slide-in-left">
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
                                <strong>Quali tipi di protesi dentali sono disponibili?</strong><br />
                                Protesi fisse (come corone e ponti) e protesi mobili (parziali o totali), che vengono personalizzate per ogni paziente in base alle esigenze estetiche e funzionali.
                            </p>
                            <p>
                                <strong>È difficile adattarsi a una protesi dentale?</strong><br />
                                All’inizio può esserci un periodo di adattamento, ma la maggior parte dei pazienti si abitua rapidamente, già alla prova in studio. Siamo sempre a disposizione per consigli e aggiustamenti, per garantirti il massimo comfort.
                            </p>
                            <p>
                                <strong>Posso mangiare e parlare normalmente con la protesi?</strong><br />
                                Assolutamente sì! Una volta adattata, la protesi diventerà parte della tua routine, e non ti accorgerai nemmeno di averla.
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

export default Protesi;