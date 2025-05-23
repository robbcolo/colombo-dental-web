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
    description: "Ortodonzia Invisalign® a Patti: allineatori trasparenti per un sorriso perfetto.",
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

const Ortodonzia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Ortodonzia e Invisalign® a Patti | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Apparecchi tradizionali',
        'Allineatori trasparenti',
        'Ortodonzia funzionale',
        'Contenzione'
    ];

    return (
        <>
            <Helmet>
                <title>Ortodonzia e Invisalign® a Patti | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Soluzioni ortodontiche per tutti, dagli apparecchi fissi agli aligner trasparenti con Invisalign® a Patti presso lo Studio Dentistico Colombo."
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
                        Ortodonzia
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Trattamenti su misura per allineare i denti e migliorare la funzionalità masticatoria.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Tipologie di Ortodonzia
                    </h2>
                    <p className="text-muted-foreground mb-6 animate-slide-in-left">
                        Dall'apparecchio fisso ai moderni aligner trasparenti Invisalign®, scegli la soluzione più adatta.
                    </p>
                    <ul className="list-disc pl-5">
                        {items.map((item, idx) => (
                            <li key={idx} className="mb-2 animate-slide-in-left">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <div className="container mx-auto px-6 mb-8">
                <Link
                    to="/servizi"
                    className="
      block sm:inline-flex items-center justify-center
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

export default Ortodonzia;
