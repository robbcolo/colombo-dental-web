import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const IgieneDentale = () => {
    return (
        <>
            <Helmet>
                <title>Igiene Dentale | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Sedute di igiene orale professionale a Patti. Rimozione tartaro, prevenzione carie e alito fresco presso lo Studio Dentistico Colombo." />
            </Helmet>

            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Igiene Dentale Professionale</h1>
                    <p className="text-muted-foreground mb-6">
                        La prevenzione è la chiave per una buona salute orale. La nostra igiene dentale professionale include una detartrasi completa che rimuove placca e tartaro...
                    </p>
                    {/* Puoi aggiungere foto, vantaggi, CTA */}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default IgieneDentale;
