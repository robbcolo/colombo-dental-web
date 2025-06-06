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
    description: "Odontoiatria pediatrica a Patti: dentista per i più piccoli.",
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

const Pedodonzia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Odontoiatria Pediatrica | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Visite di controllo bambino',
        'Sigillature dentali',
        'Educazione all’igiene',
        'Sedazione cosciente'
    ];

    return (
        <>
            <Helmet>
                <title>Odontoiatria Pediatrica | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Cure dentali dedicate ai bambini: visite di controllo, sigillature e approccio giocoso per un'esperienza serena."
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
                        Odontoiatria Pediatrica
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Trattamenti specializzati per i più piccoli, con un approccio delicato e rassicurante.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        La pedodonzia si occupa della salute dentale dei bambini, prevenendo e trattando eventuali problemi fin dalla prima infanzia. Con un trattamento delicato e rassicurante, aiutiamo i più piccoli a sviluppare una buona igiene orale e a mantenere denti sani nel tempo. Ogni visita è pensata per essere un'esperienza positiva, insegnando ai bambini come prendersi cura del loro sorriso in modo semplice e divertente.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Servizi Pediatrici
                    </h2>
                    <p className="text-muted-foreground mb-6 animate-slide-in-left">
                        Creiamo un ambiente giocoso per ridurre l'ansia e promuovere la prevenzione dentale.
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
                                <strong>A che età dovrei portare mio figlio dal dentista per la prima visita?</strong><br />
                                È consigliabile fare la prima visita intorno ai 3 anni, per una prima valutazione e per familiarizzare il bambino con l’ambiente odontoiatrico, così da rendere future visite più serene.
                            </p>
                            <p>
                                <strong>Come posso aiutare mio figlio a mantenere una buona igiene orale?</strong><br />
                                Insegna al bambino a spazzolare i denti almeno due volte al giorno e a usare il filo interdentale, e assicurati che faccia controlli regolari. La prevenzione in età infantile è fondamentale per la salute orale futura.

                            </p>
                            <p>
                                <strong>I trattamenti sono dolorosi per i bambini?</strong><br />
                                Assolutamente no! I trattamenti pediatrici sono pensati per essere delicati e poco invasivi. Noi facciamo del nostro meglio per far sentire a proprio agio i piccoli pazienti.
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

export default Pedodonzia;