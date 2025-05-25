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
    description: "Gnatologia a Patti: niente più dolori.",
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

const Gnatologia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Gnatologia | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Analisi occlusale',
        'Terapia ATM',
        'Bite personalizzati',
        'Gestione dolori facciali'
    ];

    return (
        <>
            <Helmet>
                <title>Gnatologia | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Studio e trattamento dei disturbi dell’articolazione temporo-mandibolare e dell’occlusione."
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
                        Gnatologia
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Valutazione e cura dei disturbi dell’articolazione temporo-mandibolare e dell’occlusione.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        La gnatologia si occupa dei disturbi dell’articolazione temporo-mandibolare (ATM) e delle disfunzioni legate alla masticazione, alla postura e al bruxismo. Se avverti dolori alla mandibola, mal di testa frequenti, tensioni muscolari o digrigni i denti durante il sonno, una valutazione gnatologica può aiutarti a individuare la causa e risolverla. Grazie a tecniche diagnostiche mirate e terapie personalizzate — come bite su misura o esercizi riabilitativi — ti accompagniamo nel recupero di un equilibrio funzionale e del benessere quotidiano.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Servizi Gnatologici
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
                                <strong>Quali sono i sintomi di un problema gnatologico?</strong><br />
                                I più comuni includono dolori alla mandibola, difficoltà a masticare, click o blocchi durante l’apertura della bocca, mal di testa, tensione cervicale e bruxismo (digrignamento dei denti).
                            </p>
                            <p>
                                <strong>In cosa consiste il trattamento gnatologico?</strong><br />
                                Dopo una visita accurata, il trattamento può prevedere l’uso di bite personalizzati, esercizi mirati o terapie posturali. L’obiettivo è ristabilire l’equilibrio tra articolazione, muscoli e denti.
                            </p>
                            <p>
                                <strong>Il bite si deve portare tutto il giorno?</strong><br />
                                Dipende dal tipo di disturbo: in molti casi è sufficiente indossarlo di notte. Saremo noi a indicarti tempi e modalità in base alle tue esigenze specifiche.
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

export default Gnatologia;
