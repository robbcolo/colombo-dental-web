import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Endodonzia = () => {
    return (
        <>
            <Helmet>
                <title>Endodonzia | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Trattamento dei canali radicolari per salvare denti compromessi da infezioni o traumi. Terapie sicure e indolori." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Endodonzia</h1>
                    <p className="text-muted-foreground mb-4">Trattiamo le infezioni interne al dente con precisione, evitando l’estrazione e preservando la funzionalità.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Endodonzia;