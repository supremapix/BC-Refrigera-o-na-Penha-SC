/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { LocationPage } from './pages/LocationPage';
import { ContatoPage } from './pages/ContatoPage';
import { NotFound } from './pages/NotFound';
import { ConsertoLavaESecaPage } from './pages/ConsertoLavaESecaPage';
import { LavaESecaLGPage } from './pages/LavaESecaLGPage';
import { LavaESecaSamsungPage } from './pages/LavaESecaSamsungPage';
import { BlogLavaESecaPage } from './pages/BlogLavaESecaPage';
import { FloatingUtilities } from './components/FloatingUtilities';

// Simple helper to scroll to top on every navigation transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-[#22C7E5] selection:text-[#051726]">
          {/* Main header block */}
          <Header />
          
          {/* Main viewport */}
          <main className="flex-grow">
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={<Home />} />
              
              {/* Contato Page Route */}
              <Route path="/contato" element={<ContatoPage />} />

              {/* Lava e Seca SEO & Landing Pages */}
              <Route path="/conserto-lava-e-seca-penha-sc" element={<ConsertoLavaESecaPage />} />
              <Route path="/assistencia-lava-e-seca-lg-penha" element={<LavaESecaLGPage />} />
              <Route path="/assistencia-lava-e-seca-samsung-penha" element={<LavaESecaSamsungPage />} />
              <Route path="/blog/lava-e-seca-penha-sc-guia-completo" element={<BlogLavaESecaPage />} />
              
              {/* Core 9 Service Pages Route */}
              <Route path="/servicos/:serviceSlug" element={<ServicePage />} />
              
              {/* Neighborhood Local SEO Pages Route */}
              <Route path="/refrigeracao/penha/:bairro" element={<LocationPage />} />
              
              {/* Surrounding Cities Local SEO Pages Route */}
              <Route path="/refrigeracao/:cidade" element={<LocationPage />} />
              
              {/* Catch-all 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          {/* Corporate Footer */}
          <Footer />
          
          {/* Back to top & Share Utilities */}
          <FloatingUtilities />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
