import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Chirurgia = () => {
    return (
        <>
            <Helmet>
                <title>Chirurgia Orale | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Interventi chirurgici orali con tecniche moderne e mini-invasive. Estrazioni, chirurgia pre-implantare e tessuti molli." />
            </Helmet>
            <Navbar />
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
                {/* Logo di sfondo ridotto e centrato */}
                <img
                    src="/images/about/logo.png"
                    alt="Studio Dentistico Colombo"
                    className="
      absolute left-1/2 top-1/2
      w-2/3 sm:w-1/3 md:w-1/3
      h-auto object-contain opacity-90
      transform -translate-x-1/2 -translate-y-1/2
    "
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-dental to-dental-light mix-blend-multiply"></div>

                {/* Contenuto in primo piano */}
                <div className="relative z-10 container mx-auto text-center">
                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-down"
                        style={{ animationDelay: '100ms' }}
                    >
                        Chirurgia Orale
                    </h1>
                    <p
                        className="text-white/90 text-lg animate-slide-down"
                        style={{ animationDelay: '200ms' }}
                    >
                        Una descrizione introduttiva personalizzabile per spiegare i benefici e il valore del trattamento offerto.
                    </p>
                </div>
            </section>

            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Chirurgia Orale</h1>
                    <p className="text-muted-foreground mb-4">Eseguiamo interventi chirurgici orali con tecniche moderne, massima precisione e attenzione al comfort post-operatorio.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Chirurgia;