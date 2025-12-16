import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ButtonDocs from "./pages/docs/ButtonDocs";
import CardDocs from "./pages/docs/CardDocs";
import InputDocs from "./pages/docs/InputDocs";
import AlertDocs from "./pages/docs/AlertDocs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/docs/button" element={<ButtonDocs />} />
          <Route path="/docs/card" element={<CardDocs />} />
          <Route path="/docs/input" element={<InputDocs />} />
          <Route path="/docs/alert" element={<AlertDocs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
