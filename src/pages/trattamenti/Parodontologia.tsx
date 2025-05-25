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
    description: "Parodontologia a Patti: curiamo le tue gengive.",
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

const Parodontologia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Parodontologia | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Detartrasi e igiene profonda',
        'Chirurgia parodontale',
        'Rigenerazione ossea',
        'Mantenimento parodontale'
    ];

    return (
        <>
            <Helmet>
                <title>Parodontologia | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Prevenzione e trattamento delle malattie parodontali con tecniche non chirurgiche e chirurgiche."
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
                        Parodontologia
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Cure e prevenzione delle malattie gengivali e del tessuto di supporto dei denti.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        La parodontologia si occupa della salute dei tessuti che sostengono i denti, prevenendo e trattando problematiche come gengiviti e parodontiti. Un trattamento mirato aiuta a mantenere le gengive sane, evitando infiammazioni e danni ai denti. Con un approccio professionale e delicato, possiamo intervenire tempestivamente per garantire una bocca sana e un sorriso duraturo.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Servizi Parodontali
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
                                <strong>Quali sono i sintomi della parodontite?</strong><br />
                                I sintomi includono sanguinamento gengivale, alitosi persistente, e mobilità dei denti. Se noti uno di questi segni, è importante intervenire per evitare la progressione della malattia.
                            </p>
                            <p>
                                <strong>Come posso prevenire la parodontite?</strong><br />
                                Una buona igiene orale quotidiana, un’alimentazione equilibrata, e visite regolari sono fondamentali per prevenire problemi parodontali. Durante la visita, ti forniremo consigli personalizzati per la cura delle gengive.

                            </p>
                            <p>
                                <strong>Quanto dura il trattamento per la parodontite?</strong><br />
                                Dipende dalla situazione individuale, ma in genere servono alcune sedute per migliorare la salute delle gengive. Il nostro obiettivo è rendere il percorso semplice e indolore.
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

export default Parodontologia;
