import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Restaurativa = () => {
    return (
        <>
            <Helmet>
                <title>Odontoiatria Restaurativa | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Trattamenti conservativi e restaurativi per ripristinare denti danneggiati da carie o fratture. Materiali estetici e tecniche moderne." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Odontoiatria Restaurativa</h1>
                    <p className="text-muted-foreground mb-4">Ripristiniamo la forma, la funzione e l’estetica dei denti danneggiati con materiali biocompatibili e duraturi.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Restaurativa;