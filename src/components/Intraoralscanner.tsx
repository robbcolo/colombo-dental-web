import React from 'react';
import { CheckCircle } from 'lucide-react';

const vantaggi = [
    "Nessuna impronta tradizionale: addio al fastidioso materiale in bocca",
    "Scansione rapida e precisa in pochi minuti",
    "Visualizzazione immediata della tua bocca in 3D",
    "Maggiore comfort, soprattutto per chi ha il riflesso del vomito",
    "Risultati più accurati per protesi, allineatori e impianti",
];

const Intraoralscanner = () => {
    return (
        <section className="py-10 md:py-20 px-4 md:px-6 bg-dental-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Testo */}
                    <div className="flex-1">
                        <span className="inline-block bg-white text-dental py-1 px-3 rounded-full text-sm font-medium mb-3 md:mb-4">
                            TECNOLOGIA DIGITALE
                        </span>
                        <h2 className="heading-lg mb-4 md:mb-6">Scanner Intraorale Medit i600</h2>
                        <p className="text-sm md:text-base text-muted-foreground mb-6">
                            Nel nostro studio utilizziamo il <strong>Medit i600</strong>, uno degli scanner intraorali più avanzati disponibili oggi.
                            Grazie a questa tecnologia possiamo acquisire un'impronta digitale precisa della tua bocca in pochi minuti,
                            senza materiali scomodi e con risultati di altissima qualità.
                        </p>
                        <ul className="space-y-3">
                            {vantaggi.map((v, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                                    <CheckCircle className="text-dental mt-0.5 shrink-0" size={20} />
                                    <span>{v}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Immagine */}
                    <div className="flex-1 w-full">
                        <img
                            src="https://images.unsplash.com/photo-1598531228433-d9f0cb960816?w=800&q=80"
                            alt="Scanner intraorale Medit i600"
                            className="rounded-2xl shadow-lg w-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = `${import.meta.env.BASE_URL}images/scanner.png`;
                            }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Intraoralscanner;