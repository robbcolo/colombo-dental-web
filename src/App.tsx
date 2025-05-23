
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import Contatti from "./pages/Contatti";
import Prenota from "./pages/Prenota";
import NotFound from "./pages/NotFound";
import IgieneDentale from "./pages/trattamenti/IgieneDentale"
import Implantologia from "./pages/trattamenti/Implantologia"
import Chirurgia from "./pages/trattamenti/Chirurgia"
import Endodonzia from "./pages/trattamenti/Endodonzia"
import Estetica from "./pages/trattamenti/Estetica"
import Gnatologia from "./pages/trattamenti/Gnatologia"
import Ortodonzia from "./pages/trattamenti/Ortodonzia"
import Parodontologia from "./pages/trattamenti/Parodontologia"
import Protesi from "./pages/trattamenti/Protesi"
import Restaurativa from "./pages/trattamenti/Restaurativa"
import Pedodonzia from "./pages/trattamenti/Pedodonzia"
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

// Create a new query client
const queryClient = new QueryClient();

const basename = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? '/'
  : '/colombo-dental-web/';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/prenota" element={<Prenota />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/trattamenti/igiene-dentale" element={<IgieneDentale />} />
          <Route path="/trattamenti/implantologia" element={<Implantologia />} />
          <Route path="/trattamenti/chirurgia-orale" element={<Chirurgia />} />
          <Route path="/trattamenti/endodonzia" element={<Endodonzia />} />
          <Route path="/trattamenti/gnatologia" element={<Gnatologia />} />
          <Route path="/trattamenti/ortodonzia" element={<Ortodonzia />} />
          <Route path="/trattamenti/parodontologia" element={<Parodontologia />} />
          <Route path="/trattamenti/odontoiatria-pediatrica" element={<Pedodonzia />} />
          <Route path="/trattamenti/protesi-dentali" element={<Protesi />} />
          <Route path="/trattamenti/estetica-dentale" element={<Estetica />} />
          <Route path="/trattamenti/conservativa" element={<Restaurativa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
