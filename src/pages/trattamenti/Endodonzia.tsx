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
    description: "Endodonzia a Patti.",
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

const Endodonzia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Endodonzia | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Devitalizzazione',
        'Ritrattamento canalare',
        'Apicectomia',
        'Trattamenti di emergenza'
    ];

    return (
        <>
            <Helmet>
                <title>Endodonzia | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Trattamenti canalari e terapie endodontiche per salvare i denti naturali con tecniche precise e minimamente invasive."
                />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script> <script type="application/ld+json">
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
                        Endodonzia
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Salviamo i tuoi denti naturali con terapie canalari avanzate e trattamenti di ritrattamento endodontico.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        L’endodonzia è una soluzione per trattare un’infezione profonda all’interno del dente, eliminando il dolore e riportandolo a uno stato di salute. Questo trattamento permette di mantenere il dente e la sua funzionalità, preservando il tuo sorriso in modo sicuro e confortevole.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        I Nostri Servizi
                    </h2>
                    <p className="text-muted-foreground mb-6 animate-slide-in-left">
                        Utilizziamo strumenti rotanti e tecniche ultrasoniche per trattamenti canalari efficaci e confortevoli.
                    </p>
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
                                <strong>Cos'è un trattamento canalare (devitalizzazione)?</strong><br />
                                È una procedura che elimina l'infezione interna del dente e ne permette il recupero senza necessità di estrazione. Consiste nella rimozione del tessuto infetto e nella sigillatura del canale radicolare.
                            </p>
                            <p>
                                <strong>Il trattamento canalare è doloroso?</strong><br />
                                La devitalizzazione viene eseguita con anestesia locale, quindi il trattamento in sé non è doloroso.

                            </p>
                            <p>
                                <strong>Il dente devitalizzato va curato come gli altri?</strong><br />
                                Sì, anche i denti devitalizzati richiedono una buona igiene orale e controlli regolari. In alcuni casi può essere necessario un restauro con intarsio o corona per proteggerlo nel tempo.
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

export default Endodonzia;