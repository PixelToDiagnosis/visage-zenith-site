import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Tips from "./pages/Tips";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import AboutMe from "./pages/AboutMe";
import FreePage from "./pages/FreePage";
import Contact from "./pages/Contact";
import TreatmentRoute from "./pages/TreatmentRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const treatmentSlugs = [
  "botox", "acide-hyaluronique", "injection-levres", "jawline", "cernes",
  "skin-boosters", "microneedling", "peeling-visage", "prp-visage", "laser"
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/free" element={<FreePage />} />
              <Route path="/contact" element={<Contact />} />
              {treatmentSlugs.map(slug => (
                <Route key={slug} path={`/${slug}`} element={<TreatmentRoute slug={slug} />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
