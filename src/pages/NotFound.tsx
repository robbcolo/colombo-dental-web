
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Studio Dentistico Colombo | Pagina non trovata";
  }, [location.pathname]);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-xl">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="text-9xl font-bold text-dental-100">404</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-dental">404</div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Pagina non trovata</h1>
          <p className="text-xl text-muted-foreground mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
          
          <Link to="/" className="btn-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Torna alla home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
