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