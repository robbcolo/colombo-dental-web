import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Protesi = () => {
    return (
        <>
            <Helmet>
                <title>Protesi Dentali | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Soluzioni personalizzate per sostituire denti mancanti: protesi fisse e mobili per funzionalità ed estetica ottimali." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Protesi Dentali</h1>
                    <p className="text-muted-foreground mb-4">Restituiamo funzionalità e sorriso con protesi moderne e confortevoli, realizzate su misura.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Protesi;