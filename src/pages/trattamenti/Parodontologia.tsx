import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Parodontologia = () => {
    return (
        <>
            <Helmet>
                <title>Parodontologia | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Cura delle gengive e prevenzione della parodontite. Trattamenti personalizzati per mantenere il supporto dei denti in salute." />
            </Helmet>
            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Parodontologia</h1>
                    <p className="text-muted-foreground mb-4">Ci prendiamo cura delle gengive e del parodonto per prevenire o arrestare la perdita di supporto dentale.</p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Parodontologia;
