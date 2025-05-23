import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, Users, BookOpen, Mail, Calendar, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle sidebar menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  // Prevent scroll when sidebar open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Close desktop dropdown clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Chi Siamo', path: '/chi-siamo', icon: <Users size={20} /> },
    { name: 'Servizi', path: '/servizi', icon: <BookOpen size={20} /> },
    { name: 'Contatti', path: '/contatti', icon: <Mail size={20} /> },
  ];

  const servicesList = [
    { name: 'Tutti i trattamenti', path: '/servizi' },
    { name: 'Chirurgia Orale', path: '/trattamenti/chirurgia-orale' },
    { name: 'Endodonzia', path: '/trattamenti/endodonzia' },
    { name: 'Estetica Dentale', path: '/trattamenti/estetica-dentale' },
    { name: 'Gnatologia', path: '/trattamenti/gnatologia' },
    { name: 'Igiene Dentale', path: '/trattamenti/igiene-dentale' },
    { name: 'Implantologia', path: '/trattamenti/implantologia' },
    { name: 'Ortodonzia', path: '/trattamenti/ortodonzia' },
    { name: 'Parodontologia', path: '/trattamenti/parodontologia' },
    { name: 'Pedodonzia', path: '/trattamenti/odontoiatria-pediatrica' },
    { name: 'Protesi', path: '/trattamenti/protesi-dentali' },
    { name: 'Restaurativa', path: '/trattamenti/conservativa' },
  ];

  return (
    <>
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        'bg-white/90 backdrop-blur-md shadow-sm py-3'
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="relative flex items-center z-10">
            <img
              src={`${import.meta.env.BASE_URL}images/about/logo.png`}
              alt="Logo Studio Dentistico Colombo"
              className="h-10 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-dental">Studio Dentistico</span>
            <span className="text-2xl font-bold ml-2 text-blue-500">Colombo</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.filter(i => i.name !== 'Servizi').map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'nav-item text-blue-900 hover:text-blue-500',
                  location.pathname === item.path && 'active text-blue-500'
                )}
              >{item.name}</Link>
            ))}

            {/* Desktop Servizi Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="nav-item text-blue-900 flex items-center hover:text-blue-500"
                onClick={() => setServicesOpen(prev => !prev)}
              >
                Servizi
                <ChevronDown
                  size={16}
                  className={cn('ml-1 transition-transform', servicesOpen && 'rotate-180')}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[220px] z-10">
                  {servicesList.map(s => (
                    <Link
                      key={s.path}
                      to={s.path}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-dental/10 hover:text-dental transition-colors"
                    >{s.name}</Link>
                  ))}
                </div>
              )}

            </div>

            {/* Prenota Desktop */}
            <Link to="/prenota" className="btn-primary ml-4">Prenota Visita</Link>
          </div>

          {/* Mobile Burger Button */}
          <button
            className="md:hidden z-50 text-foreground hover:text-dental transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside className={cn(
        'fixed inset-y-0 right-0 z-50 w-[335px] md:hidden bg-white',
        'flex flex-col shadow-xl max-h-screen overflow-y-auto',
        'transform transition-transform duration-300 ease-out',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>

        {/* Sidebar Header */}
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

        {/* Sidebar Links */}
        <div className="flex-1 px-2 py-4">
          <nav className="space-y-1">
            {navItems.map(item => (
              item.name === 'Servizi' ? (
                <div key="mobile-servizi" className="space-y-1">
                  <button
                    onClick={() => setMobileServicesOpen(prev => !prev)}
                    className="flex items-center w-full px-4 py-3 text-base rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <BookOpen size={20} className="mr-3 text-blue-500" />
                    Servizi
                    <ChevronDown
                      size={18}
                      className={cn('ml-auto transition-transform', mobileServicesOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="space-y-1 pl-12">
                      {servicesList.map(s => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >{s.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center px-4 py-3 text-base rounded-lg transition-colors duration-200',
                    location.pathname === item.path
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  <span className="mr-3 text-blue-500">{item.icon}</span>
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="ml-auto w-1.5 h-8 bg-blue-500 rounded-full" />
                  )}
                </Link>
              )
            ))}
          </nav>
        </div>

        {/* Prenota Section */}
        <div className="mx-2 my-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-dental">Prenota una visita</h3>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Fissa un appuntamento con uno dei nostri specialisti
            </p>
            <Link
              to="/prenota"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300"
            >
              <Calendar size={18} className="mr-2" />
              Prenota Ora
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2025 Studio Dentistico Colombo
        </div>
      </aside>
    </>
  );
};

export default Navbar;
