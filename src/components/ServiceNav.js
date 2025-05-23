import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { name: 'Chirurgia Orale', path: '/trattamenti/chirurgia-orale' },
    { name: 'Endodonzia', path: '/trattamenti/endodonzia' },
    { name: 'Restaurativa', path: '/trattamenti/restaurativa' },
    { name: 'Implantologia', path: '/trattamenti/implantologia' },
    { name: 'Ortodonzia', path: '/trattamenti/ortodonzia' },
    { name: 'Odontoiatria Pediatrica', path: '/trattamenti/odontoiatria-pediatrica' },
    { name: 'Protesi', path: '/trattamenti/protesi-dentali' },
    { name: 'Estetica Dentale', path: '/trattamenti/estetica-dentale' },
    { name: 'Gnatologia', path: '/trattamenti/gnatologia' },
    { name: 'Parodontologia', path: '/trattamenti/parodontologia' },
    { name: 'Igiene Dentale', path: '/trattamenti/igiene-dentale' }
];

export default function ServiceNav() {
    return (
        <nav className="bg-white/90 backdrop-blur-md sticky top-[64px] z-30 py-2">
            <div className="container mx-auto flex space-x-4 overflow-x-auto px-4 sm:px-6">
                {services.map((s) => (
                    <Link
                        key={s.path}
                        to={s.path}
                        className="whitespace-nowrap text-gray-700 hover:text-dental font-medium transition-colors"
                    >
                        {s.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}