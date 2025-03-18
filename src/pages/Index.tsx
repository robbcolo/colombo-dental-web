
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import BookAppointment from '../components/BookAppointment';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Studio Dentistico Colombo | Home";
    console.log("Index page loaded!"); // Aggiungiamo un log per il debug
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <BookAppointment />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
