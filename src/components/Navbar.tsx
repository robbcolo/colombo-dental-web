import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
        "bg-white/90 backdrop-blur-md shadow-sm py-3"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative flex items-center z-10">
          <img
            src={`${import.meta.env.BASE_URL}images/about/logo.png`}
            alt="Logo Studio Dentistico Colombo"
            className="h-10 w-auto mr-2"
          />
          <span className="text-2xl font-bold text-dental">Studio Dentistico</span>
          <span className="text-2xl font-bold ml-2 text-blue-500">Colombo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "nav-item text-blue-900",
                location.pathname === item.path && "active text-blue-500"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-foreground hover:text-dental transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu con Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/0 z-40 md:hidden",
            "transition-opacity duration-500 ease-in-out",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        >
          {/* Menu Content */}
          <div
            className={cn(
              "absolute inset-x-0 top-[4.5rem] min-h-[calc(100vh-4.5rem)] flex flex-col items-center",
              "bg-gradient-to-b from-black/90 to-black/60",
              "transform transition-all duration-500 ease-in-out",
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-50"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center pt-16 pb-8 w-full px-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "w-full text-center py-4 text-2xl font-medium",
                    "text-white/90 hover:text-blue-300 transition-colors",
                    "border-b border-white/10",
                    location.pathname === item.path && "text-blue-300",
                    "transform transition-all duration-300",
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: `${150 + index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/prenota"
                className={cn(
                  "mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white",
                  "rounded-full font-medium text-lg transition-all duration-300",
                  "transform hover:scale-105 active:scale-95",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: `${150 + navItems.length * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                Prenota Visita
              </Link>
            </div>
          </div>
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