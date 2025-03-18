
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true); // Inizializzato a true per mostrare la navbar con sfondo fin dall'inizio
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    // Manteniamo comunque l'effetto di scroll per aggiornare lo stato durante lo scrolling
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled && !isScrolled) {
        // Aggiorniamo solo se stiamo tornando in cima alla pagina
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    // Close mobile menu when changing routes
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative flex items-center z-10">
          <span className="text-2xl font-bold text-dental">Studio Dentistico</span>
          <span className="text-2xl font-bold ml-2 text-foreground">Colombo</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "nav-item",
                location.pathname === item.path && "active"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-10 text-foreground hover:text-dental transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-xl font-medium hover:text-dental transition-colors",
                location.pathname === item.path ? "text-dental" : "text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/prenota" 
            className="btn-primary mt-6"
            onClick={() => setIsOpen(false)}
          >
            Prenota Visita
          </Link>
        </div>
        
        {/* Contact Button (Desktop) */}
        <Link to="/prenota" className="hidden md:block btn-primary">
          Prenota Visita
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
