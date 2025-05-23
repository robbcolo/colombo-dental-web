import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Estetica = () => {
    return (
        <>
            <Helmet>
                <title>Estetica Dentale | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Faccette, sbiancamenti e ricostruzioni estetiche per un sorriso più luminoso e armonioso. Trattamenti personalizzati." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Estetica Dentale</h1>
                    <p className="text-muted-foreground mb-4">Miglioriamo il tuo sorriso con trattamenti estetici minimamente invasivi e su misura.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Estetica;