import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Implantologia = () => {
    return (
        <>
            <Helmet>
                <title>Implantologia | Studio Dentistico Colombo a Patti</title>
                <meta name="description" content="Sostituzione dei denti mancanti con impianti stabili e naturali. Implantologia moderna presso lo Studio Dentistico Colombo a Patti." />
            </Helmet>

            <Navbar />
            <main className="pt-32 pb-16 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="text-3xl font-bold mb-4 text-dental">Implantologia Dentale</h1>
                    <p className="text-muted-foreground mb-4">
                        Gli impianti dentali rappresentano la soluzione più moderna per sostituire uno o più denti mancanti. Offrono stabilità, estetica e funzionalità senza compromettere i denti naturali adiacenti.
                    </p>
                    <p className="text-muted-foreground mb-4">
                        Utilizziamo tecnologie all’avanguardia per garantire un’integrazione perfetta tra impianto e osso, riducendo al minimo i tempi di guarigione e massimizzando i risultati estetici e funzionali.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Implantologia;