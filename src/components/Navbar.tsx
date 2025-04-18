import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, BookOpen, Mail, Calendar } from 'lucide-react';
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
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Chi Siamo', path: '/chi-siamo', icon: <Users size={20} /> },
    { name: 'Servizi', path: '/servizi', icon: <BookOpen size={20} /> },
    { name: 'Contatti', path: '/contatti', icon: <Mail size={20} /> },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
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

          {/* Contact Button (Desktop) */}
          <Link to="/prenota" className="hidden md:block btn-primary">
            Prenota Visita
          </Link>
        </div>
      </nav>

      {/* Overlay - separato dalla navbar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar mobile in stile Reddit - separata dalla navbar */}
      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[335px] md:hidden bg-white",
          "flex flex-col shadow-xl max-h-screen overflow-y-auto",
          "transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header della sidebar */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}images/about/logo.png`}
              alt="Logo"
              className="h-8 w-auto mr-2"
            />
            <span className="text-lg font-bold text-dental">Studio Dentistico Colombo</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-dental p-1 rounded-full hover:bg-gray-100"
            aria-label="Chiudi menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigazione principale */}
        <div className="flex-1 px-2 py-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-base rounded-lg",
                  "transition-colors duration-200",
                  location.pathname === item.path
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-3 text-blue-500">{item.icon}</span>
                {item.name}
                {location.pathname === item.path && (
                  <span className="ml-auto w-1.5 h-8 bg-blue-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Sezione prenotazione */}
        <div className="mx-2 my-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-dental">Prenota una visita</h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Fissa un appuntamento con uno dei nostri specialisti
            </p>
            <Link
              to="/prenota"
              className="flex items-center justify-center w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Calendar size={18} className="mr-2" />
              Prenota Ora
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-center items-center text-sm text-gray-500">
            <span>© 2025 Studio Dentistico Colombo</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;