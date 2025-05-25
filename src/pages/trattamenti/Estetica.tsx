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
    description: "Estetica dentale a Patti: miglioriamo il tuo sorriso con faccette e sbiancamento.",
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

const Estetica = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Estetica Dentale | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Sbiancamento professionale',
        'Facette estetiche',
        'Contouring gengivale',
        'Faccette composite'
    ];

    return (
        <>
            <Helmet>
                <title>Estetica Dentale | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Migliora il tuo sorriso con sbiancamenti, faccette e tecniche estetiche personalizzate."
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
                        Estetica Dentale
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Trattamenti estetici per un sorriso luminoso e armonioso.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        L'odontoiatria estetica è la soluzione ideale per migliorare l’aspetto del tuo sorriso in modo naturale e armonioso. Le faccette dentali sono sottili rivestimenti personalizzati che vengono applicati sui denti per correggere imperfezioni come scolorimenti, diastemi o forme irregolari. Lo sbiancamento dentale è il trattamento ideale per dare un tocco di freschezza al tuo sorriso. I tuoi denti acquisiranno un aspetto più luminoso e brillante, senza stress per la tua bocca. Può essere eseguito sia in studio che comodamente a domicilio, offrendo la massima flessibilità. È una soluzione rapida e confortevole per un sorriso più radioso e naturale, che ti farà sentire al meglio in ogni occasione.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Servizi Estetici
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
                                <strong>Cosa sono le faccette dentali e a cosa servono?</strong><br />
                                Le faccette sono sottili lamine di ceramica o composito applicate sulla superficie dei denti per migliorare l'estetica del sorriso. Sono ideali per correggere difetti di colore, forma o dimensioni.
                            </p>
                            <p>
                                <strong>Le faccette sono una soluzione permanente??</strong><br />
                                Le faccette hanno una lunga durata, ma richiedono manutenzione. Con una buona cura, possono durare molti anni; tuttavia, ogni caso è diverso e potremmo consigliarti opzioni adatte alla tua situazione.

                            </p>
                            <p>
                                <strong>Servono cure particolari per le faccette?</strong><br />
                                No, basta una normale igiene orale. E con qualche piccolo accorgimento, come evitare di mordere oggetti duri, resteranno a lungo.
                            </p><p>
                                <strong>Lo sbiancamento può danneggiare i miei denti?</strong><br />
                                No, il trattamento è sicuro se eseguito correttamente. Utilizziamo prodotti e tecniche approvate che non danneggiano lo smalto dentale e sono adatte a migliorare il sorriso senza rischi.
                            </p>
                            <p>
                                <strong>Quanto spesso posso fare il trattamento di sbiancamento?</strong><br />
                                Di solito si consiglia di non fare più di un trattamento all’anno per evitare sensibilità dentale e per mantenere i denti in salute.

                            </p>
                            <p>
                                <strong>Posso fare lo sbiancamento dentale sia a casa che in studio?</strong><br />
                                Certamente! Offriamo la possibilità di eseguire il trattamento sia in studio che comodamente a casa. Per lo sbiancamento a domicilio, creiamo delle mascherine personalizzate su misura per te, in modo che tu possa ottenere i migliori risultati con il massimo comfort.
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

export default Estetica;
