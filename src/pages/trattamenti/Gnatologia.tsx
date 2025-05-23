import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Gnatologia = () => {
    return (
        <>
            <Helmet>
                <title>Gnatologia | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Trattamento di disturbi dell’articolazione temporo-mandibolare e bruxismo. Soluzioni per dolore mandibolare e usura dentale." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Gnatologia</h1>
                    <p className="text-muted-foreground mb-4">Diagnostichiamo e trattiamo disfunzioni dell’ATM e problemi di occlusione per migliorare benessere e funzionalità.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Gnatologia;