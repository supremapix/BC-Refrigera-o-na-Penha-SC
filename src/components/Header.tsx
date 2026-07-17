import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';
import { 
  Phone, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  ChevronDown, 
  MessageCircle, 
  Navigation,
  Sparkles
} from 'lucide-react';
import { companyData, servicesData, cidadesAtendidas } from '../data/siteData';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll listener to shrink header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Group cities by region for Áreas Atendidas dropdown
  const regions = {
    "Litoral Imediato": cidadesAtendidas.filter(c => c.region === "Litoral Imediato").slice(0, 5),
    "Vale do Itajaí": cidadesAtendidas.filter(c => c.region === "Vale do Itajaí").slice(0, 5),
    "Norte": cidadesAtendidas.filter(c => c.region === "Norte").slice(0, 5),
    "Grande Florianópolis": cidadesAtendidas.filter(c => c.region === "Grande Florianópolis").slice(0, 5)
  };

  const addressQuery = encodeURIComponent(`${companyData.address}, ${companyData.city}, ${companyData.state}`);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

  return (
    <>
      {/* 1. TOPBAR (Desktop only) */}
      <div id="desktop-topbar" className="hidden lg:block bg-[#051726] text-white border-b border-slate-800 text-xs py-2 px-8 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={companyData.phoneLink} className="flex items-center gap-1.5 hover:text-[#22C7E5] transition-colors">
              <Phone size={13} className="text-[#22C7E5]" />
              <span>{companyData.phone}</span>
            </a>
            <a href={companyData.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#22C55E] transition-colors">
              <MessageCircle size={13} className="text-[#22C55E]" />
              <span>WhatsApp de Plantão</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-slate-400" />
              <span>{companyData.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#22C7E5] font-semibold flex items-center gap-1">
              <Sparkles size={12} className="animate-pulse" />
              <span>Emergência 24h</span>
            </span>
            <span className="text-slate-400">|</span>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#22C7E5] transition-colors text-slate-300">
              <MapPin size={12} />
              <span>Penha / SC</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (With glassmorphism and scroll-shrink effect) */}
      <header 
        id="main-app-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 font-sans ${
          scrolled 
            ? 'bg-[#051726]/95 backdrop-blur-md py-2 shadow-[0_10px_30px_rgba(5,23,38,0.5)] border-b border-slate-800' 
            : 'bg-[#051726]/85 backdrop-blur-md py-4 border-b border-slate-900/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo with spinning snowflake icon */}
          <Link to="/" className="flex items-center gap-2.5 group" id="logo-header-link">
            <Logo size="sm" />
            <div>
              <span className="block text-lg sm:text-xl font-black tracking-wider text-white uppercase group-hover:text-[#22C7E5] transition-colors leading-none">
                BC Refrigeração
              </span>
              <span className="block text-[10px] text-[#22C7E5] tracking-widest uppercase font-bold mt-0.5 leading-none">
                Comercial &amp; Container Reefer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-200">
            <Link to="/" className="hover:text-[#22C7E5] transition-colors py-2">Home</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                id="services-menu-dropdown-btn"
                className="flex items-center gap-1 hover:text-[#22C7E5] transition-colors py-2 cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Serviços</span>
                <ChevronDown size={14} className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-80 bg-[#0A2540] border border-slate-800 rounded-2xl shadow-2xl p-4 grid grid-cols-1 gap-2 z-50 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0E86D4] to-[#22C7E5]" />
                    <span className="text-xs uppercase tracking-wider font-bold text-[#22C7E5] mb-1 px-2 block">Soluções Especializadas</span>
                    {servicesData.map((s) => (
                      <Link 
                        key={s.id} 
                        to={`/servicos/${s.slug}`} 
                        className="p-2 rounded-xl hover:bg-[#051726] hover:text-[#22C7E5] text-slate-300 transition-all text-xs flex items-center gap-2.5"
                      >
                        <span className="text-[#22C7E5]">❄️</span>
                        <div className="font-semibold">{s.title}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/servicos/loja-de-pecas" className="hover:text-[#22C7E5] transition-colors py-2">Loja de Peças</Link>

            {/* Cities / Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button 
                id="areas-menu-dropdown-btn"
                className="flex items-center gap-1 hover:text-[#22C7E5] transition-colors py-2 cursor-pointer"
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
              >
                <span>Cidades Atendidas</span>
                <ChevronDown size={14} className={`transition-transform ${areasDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {areasDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-[#0A2540] border border-slate-800 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-4 z-50"
                  >
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#0E86D4] to-[#22C7E5]" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-black text-[#22C7E5] mb-2 px-2 block">Litoral e Vale</span>
                      <div className="flex flex-col gap-1">
                        {regions["Litoral Imediato"].map(c => (
                          <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="px-2 py-1 text-xs text-slate-300 hover:text-white rounded hover:bg-[#051726] transition-colors">{c.name}</Link>
                        ))}
                        {regions["Vale do Itajaí"].slice(0, 3).map(c => (
                          <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="px-2 py-1 text-xs text-slate-300 hover:text-white rounded hover:bg-[#051726] transition-colors">{c.name}</Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-black text-[#22C7E5] mb-2 px-2 block">Norte e Florianópolis</span>
                      <div className="flex flex-col gap-1">
                        {regions["Norte"].slice(0, 5).map(c => (
                          <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="px-2 py-1 text-xs text-slate-300 hover:text-white rounded hover:bg-[#051726] transition-colors">{c.name}</Link>
                        ))}
                        {regions["Grande Florianópolis"].slice(0, 3).map(c => (
                          <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="px-2 py-1 text-xs text-slate-300 hover:text-white rounded hover:bg-[#051726] transition-colors">{c.name}</Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-slate-800 text-center">
                      <Link to="/" className="text-xs text-[#22C7E5] hover:underline font-bold">Ver mapa de atuação (Raio 200 km) →</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contato" className="hover:text-[#22C7E5] transition-colors py-2">Contato</Link>
          </nav>

          {/* Desktop Orange CTA Button */}
          <div className="hidden lg:block">
            <a 
              id="cta-budget-header"
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-[#FF7A1A] hover:bg-[#E5640A] text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-[0_4px_15px_rgba(255,122,26,0.3)] hover:shadow-[0_4px_25px_rgba(255,122,26,0.5)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-white/15 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <MessageCircle size={16} className="animate-bounce" />
              <span>Orçamento Grátis</span>
            </a>
          </div>

          {/* Mobile Menu Trigger for Senior Accessibility */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-trigger-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-[#0A2540] border border-slate-800 text-white hover:text-[#22C7E5] focus:outline-none focus:ring-2 focus:ring-[#22C7E5] active:scale-95 transition-all cursor-pointer"
              aria-label="Abrir Menu Principal"
            >
              <Menu size={28} />
              <span className="text-[10px] uppercase font-black tracking-widest mt-0.5">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. SENIOR MOBILE MENU FULLSCREEN PANEL (Critical Accessibility Requirement) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-accessible-menu-panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#051726] text-white flex flex-col overflow-y-auto font-sans"
          >
            {/* Top Close Control with giant target */}
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-[#0A2540]">
              <span className="text-xs uppercase font-black tracking-widest text-[#22C7E5]">Navegação BC Refrigeração</span>
              <button
                id="mobile-menu-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1 bg-red-600/20 text-red-400 hover:text-white px-4 py-2.5 rounded-xl border border-red-500/30 font-bold text-sm cursor-pointer"
                aria-label="Fechar Menu"
              >
                <span className="text-base uppercase tracking-widest font-black">FECHAR</span>
                <X size={20} />
              </button>
            </div>

            {/* FIXED ACCESSIBILITY BLOCK AT THE TOP - 3 GIANT BUTTONS FOR ELDERLY */}
            <div className="p-4 bg-[#0A2540] border-b border-slate-800 grid grid-cols-1 gap-3 shadow-inner">
              <a
                id="senior-btn-whatsapp"
                href={companyData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#22C55E] hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl text-xl sm:text-2xl font-black shadow-[0_5px_15px_rgba(34,197,94,0.3)] text-center transition-all active:scale-95"
              >
                <MessageCircle size={28} />
                <span>🟢 CHAMAR NO WHATSAPP</span>
              </a>

              <a
                id="senior-btn-call"
                href={companyData.phoneLink}
                className="flex items-center justify-center gap-3 bg-[#0E86D4] hover:bg-[#0E4C7A] text-white py-4 px-6 rounded-2xl text-xl sm:text-2xl font-black shadow-[0_5px_15px_rgba(14,134,212,0.3)] text-center transition-all active:scale-95"
              >
                <Phone size={28} />
                <span>🔵 LIGAR AGORA: 3305-9452</span>
              </a>

              <a
                id="senior-btn-maps"
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#FF7A1A] hover:bg-[#E5640A] text-white py-4 px-6 rounded-2xl text-xl sm:text-2xl font-black shadow-[0_5px_15px_rgba(255,122,26,0.3)] text-center transition-all active:scale-95"
              >
                <Navigation size={28} />
                <span>🟠 VER COMO CHEGAR</span>
              </a>
            </div>

            {/* Giant Menu Links - Min 20px font, 56px height per item */}
            <div className="flex-grow p-6 flex flex-col gap-1 select-none">
              <Link 
                to="/" 
                className="flex items-center justify-between border-b border-slate-800/80 py-4 px-2 text-2xl font-black text-white hover:text-[#22C7E5] min-h-[56px] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🏠 Início / Home</span>
              </Link>
              
              <div className="py-2">
                <span className="block text-xs uppercase tracking-wider font-bold text-[#22C7E5] mb-2 px-2">Nossos Serviços (Toque para abrir)</span>
                <div className="grid grid-cols-1 gap-1">
                  {servicesData.map((s) => (
                    <Link
                      key={s.id}
                      to={`/servicos/${s.slug}`}
                      className="flex items-center gap-3 py-3 px-4 text-lg font-bold text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-xl min-h-[56px] transition-all border-l-4 border-[#0E86D4]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>❄️</span>
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/servicos/loja-de-pecas" 
                className="flex items-center justify-between border-b border-slate-800/80 py-4 px-2 text-2xl font-black text-white hover:text-[#22C7E5] min-h-[56px] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>🛒 Loja de Peças</span>
              </Link>

              <Link 
                to="/contato" 
                className="flex items-center justify-between border-b border-slate-800/80 py-4 px-2 text-2xl font-black text-white hover:text-[#22C7E5] min-h-[56px] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📞 Fale Conosco</span>
              </Link>
            </div>

            {/* Footer information inside mobile menu */}
            <div className="p-6 bg-[#0A2540] text-center text-xs text-slate-400 border-t border-slate-800">
              <p className="font-bold text-white mb-1">BC REFRIGERÇÃO</p>
              <p>{companyData.address} - Centro, Penha - SC</p>
              <p className="mt-2 text-[#22C7E5] font-semibold">Atendimento Técnico e Comercial de Segunda a Sábado</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. PERSISTENT MOBILE BOTTOM BAR (Critical elderly feature on every page, mobile only) */}
      <div 
        id="mobile-bottom-persistent-bar"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#051726]/95 backdrop-blur-md border-t border-slate-800 grid grid-cols-3 h-[72px] shadow-[0_-5px_20px_rgba(0,0,0,0.4)] px-1 font-sans"
      >
        <a 
          id="bottom-bar-call"
          href={companyData.phoneLink}
          className="flex flex-col items-center justify-center text-white hover:text-[#22C7E5] transition-colors border-r border-slate-800/60"
        >
          <div className="w-9 h-9 rounded-full bg-[#0E86D4] flex items-center justify-center text-white mb-1 shadow-md">
            <Phone size={18} />
          </div>
          <span className="text-[11px] font-black tracking-wide uppercase">LIGAR AGORA</span>
        </a>

        <a 
          id="bottom-bar-whatsapp"
          href={companyData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-white hover:text-[#22C55E] transition-colors border-r border-slate-800/60"
        >
          <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white mb-0.5 shadow-md animate-pulse">
            <MessageCircle size={22} />
          </div>
          <span className="text-[11px] font-black tracking-wide uppercase text-[#22C55E]">WHATSAPP</span>
        </a>

        <a 
          id="bottom-bar-address"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-white hover:text-[#FF7A1A] transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-[#FF7A1A] flex items-center justify-center text-white mb-1 shadow-md">
            <MapPin size={18} />
          </div>
          <span className="text-[11px] font-black tracking-wide uppercase">ENDEREÇO</span>
        </a>
      </div>

      {/* 5. FLOATING WHATSAPP BEACON (Desktop-positioned, mobile offset to clear bottom bar) */}
      <a 
        id="floating-whatsapp-anchor"
        href={companyData.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-20 lg:bottom-6 z-35 flex items-center gap-2 group cursor-pointer"
        aria-label="Fale conosco no WhatsApp de Plantão"
      >
        <div className="hidden md:flex bg-[#051726]/90 backdrop-blur-md border border-slate-800 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg items-center gap-1.5 group-hover:bg-[#0A2540] transition-all">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
          <span>Fale Conosco</span>
        </div>
        <div className="w-14 h-14 rounded-full bg-[#22C55E] flex items-center justify-center text-white shadow-[0_5px_20px_rgba(34,197,94,0.4)] hover:shadow-[0_5px_30px_rgba(34,197,94,0.6)] hover:scale-110 active:scale-95 transition-all duration-300">
          <MessageCircle size={30} className="animate-[pulse_2s_infinite]" />
        </div>
      </a>
    </>
  );
};
