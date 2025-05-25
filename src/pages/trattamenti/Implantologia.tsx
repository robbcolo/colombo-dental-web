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
    description: "Implantologia a Patti: impianti per i tuoi nuovi denti.",
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

const Implantologia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Implantologia | Studio Dentistico Colombo a Patti';
    }, []);

    const items = [
        'Pianificazione computer-guidata',
        'Impianti singoli e multipli',
        'Carico immediato',
        'Rigenerazione ossea'
    ];

    return (
        <>
            <Helmet>
                <title>Implantologia | Studio Dentistico Colombo a Patti</title>
                <meta
                    name="description"
                    content="Sostituzione dei denti mancanti con impianti stabili e naturali. Implantologia moderna presso lo Studio Dentistico Colombo a Patti."
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
                        Implantologia Dentale
                    </h1>
                    <p className="text-white/90 text-lg animate-slide-down">
                        Tecnologie avanzate per impianti stabili e un risultato estetico naturale.
                    </p>
                </div>
            </section>

            <main className="pt-16 pb-16 px-6 overflow-hidden">
                <div className="container mx-auto max-w-3xl">
                    {/* Descrizione */}
                    <p className="text-lg text-muted-foreground mb-6">
                        Il trattamento di implantologia è una soluzione sicura e confortevole per riportare il sorriso e la funzionalità ai tuoi denti. Grazie agli impianti dentali, possiamo sostituire i denti mancanti con strutture stabili e resistenti, che si integrano perfettamente con il resto della tua bocca. Potrai masticare, parlare e sorridere senza pensieri, ritrovando la piena comodità e l’estetica di sempre.
                    </p>
                    <h2 className="text-3xl font-bold mb-4 text-dental animate-slide-in-left">
                        Soluzioni Implantari
                    </h2>
                    <p className="text-muted-foreground mb-6 animate-slide-in-left">
                        Dalla pianificazione digitale al carico immediato, ogni fase è curata nei minimi dettagli.
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
                                <strong>Cos'è un impianto dentale e come funziona?</strong><br />
                                Un impianto dentale è una “radice” artificiale in titanio che viene inserita nell’osso per sostituire un dente mancante. Una volta integrato, è possibile applicare una corona per restituire estetica e funzionalità.
                            </p>
                            <p>
                                <strong>Gli impianti dentali sono permanenti?</strong><br />
                                Con una corretta manutenzione e igiene orale, gli impianti dentali possono durare anche tutta la vita. È importante sottoporsi a visite regolari per mantenere gli impianti in condizioni ottimali.
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

export default Implantologia;
