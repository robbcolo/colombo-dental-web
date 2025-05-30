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
    description: "Restaurativa a Patti: niente più carie.",
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

const Restaurativa = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Restaurativa | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Otturazioni estetiche',
        'Intarsi in ceramica',
        'Ricostruzioni dirette',
        'Corone monolitiche'
    ];

    return (
        <>
            <Helmet>
                <title>Odontoiatria Restaurativa | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Otturazioni, intarsi e ricostruzioni estetiche per recuperare forma e funzione dei denti danneggiati."
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
                        Odontoiatria Restaurativa
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Ricostruiamo denti compromessi con materiali estetici di ultima generazione.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        L'odontoiatria conservativa è pensata per preservare la salute e la forza dei tuoi denti naturali. Quando una carie si presenta, interveniamo in modo mirato per bloccarla e ripristinare il dente alla sua forma e funzione, senza ricorrere a soluzioni drastiche. È un trattamento delicato che protegge il tuo sorriso, assicurandone la durata nel tempo.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Trattamenti Restaurativi
                    </h2>
                    <p className="text-muted-foreground mb-6 animate-slide-in-left">
                        Offriamo soluzioni su misura per ripristinare estetica e funzionalità.
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
                                <strong>Quanto dura il trattamento conservativo?</strong><br />
                                La durata dipende dall'estensione della carie, ma generalmente una seduta dura tra i 30 e i 60 minuti.
                            </p>
                            <p>
                                <strong>È doloroso?</strong><br />
                                No, il trattamento viene eseguito in anestesia locale e risulta indolore.

                            </p>
                            <p>
                                <strong>Quanto dura una ricostruzione dentale?</strong><br />
                                La durata dipende da diversi fattori, come la posizione del dente e l’igiene orale del paziente. Con una buona manutenzione, le ricostruzioni possono durare diversi anni.
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

export default Restaurativa;