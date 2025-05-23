import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Pedodonzia = () => {
    return (
        <>
            <Helmet>
                <title>Odontoiatria Pediatrica | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Cure dentali per bambini in un ambiente accogliente. Educazione, prevenzione e trattamenti su misura per i più piccoli." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Odontoiatria Pediatrica</h1>
                    <p className="text-muted-foreground mb-4">Accogliamo i più piccoli con attenzione e delicatezza, per costruire un rapporto sereno con le cure dentali.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Pedodonzia;