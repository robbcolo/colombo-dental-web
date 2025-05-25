import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Studio Dentistico Colombo",
    description: "Igiene dentale a Patti: pulizia dei denti per tutti.",
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
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:30",
            closes: "20:00"
        }
    ]
};

const IgieneDentale = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Igiene Dentale | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Pulizia professionale',
        'Levigatura radicolare',
        'Trattamenti al fluoro',
        'Consulenza domiciliare'
    ];

    return (
        <>
            <Helmet>
                <title>Igiene Dentale | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Mantenimento della salute orale con pulizie professionali e protocolli di prevenzione personalizzati."
                />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL}images/about/logo.png`}
                    alt="Studio Dentistico Colombo"
                    className="absolute left-1/2 top-1/2 w-2/3 sm:w-1/3 md:w-1/3 h-auto object-contain opacity-90 transform -translate-x-1/2 -translate-y-1/2"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dental to-dental-light mix-blend-multiply"></div>
                <div className="relative z-10 container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down">
                        Igiene Dentale
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Mantenimento della salute orale con pulizie professionali e protocolli di prevenzione personalizzati.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        L'igiene dentale è una procedura di rimozione professionale di placca e tartaro, essenziale per mantenere i denti sani e il sorriso luminoso. Durante l'ablazione, trattamento semplice e rapido, rimuoviamo delicatamente i depositi che potrebbero causare gengiviti o altre problematiche dentali e parodontali, garantendo una pulizia profonda e accurata.
                    </p>

                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Servizi di Igiene
                    </h2>
                    <ul className="list-disc pl-5 mb-8">
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
                                <strong>Ogni quanto tempo dovrei fare la pulizia professionale?</strong><br />
                                In genere, consigliamo una pulizia dentale ogni 6 mesi per prevenire accumuli di placca e tartaro, anche se la frequenza può variare in base alle tue esigenze specifiche.
                            </p>
                            <p>
                                <strong>L’ablazione del tartaro può danneggiare i denti?</strong><br />
                                No, l’ablazione del tartaro è una procedura sicura e non danneggia i denti. Anzi, aiuta a mantenere le gengive e il tessuto circostante in salute.
                            </p>
                            <p>
                                <strong>La pulizia professionale è dolorosa?</strong><br />
                                Assolutamente no! La maggior parte delle persone la trova molto tollerabile e ne apprezza i benefici. Se hai qualche sensibilità, possiamo adottare accorgimenti per rendere l’esperienza piacevole.
                            </p>
                        </div>
                    </details>
                </div>
            </main>

            {/* Back to services */}
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

export default IgieneDentale;
