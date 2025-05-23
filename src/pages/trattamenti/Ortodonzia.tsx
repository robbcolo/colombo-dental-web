import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Ortodonzia = () => {
    return (
        <>
            <Helmet>
                <title>Ortodonzia | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Apparecchi tradizionali e trasparenti per correggere disallineamenti e migliorare il sorriso. Trattamenti per adulti e bambini." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Ortodonzia</h1>
                    <p className="text-muted-foreground mb-4">Allineiamo il tuo sorriso con trattamenti ortodontici su misura, per estetica e salute della bocca.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Ortodonzia;