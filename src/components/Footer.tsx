import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { 
  Heart, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram,
  Sparkles
} from 'lucide-react';
import { companyData, servicesData, cidadesAtendidas } from '../data/siteData';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-slate-800/50 flex justify-center items-center">
      <div className="bg-slate-950/70 border border-slate-800/80 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]">
        <p className="text-slate-200 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span>
          <Heart
            size={14}
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]"
          />
          <span className="opacity-90">por</span>
          <a
            id="developer-suprema-link"
            href="https://supremasite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            <img
              src="https://img.supremamidia.com/suprema-img.png"
              alt="Suprema"
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export const Footer: React.FC = () => {
  const addressQuery = encodeURIComponent(`${companyData.address}, ${companyData.city}, ${companyData.state}`);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

  return (
    <footer id="app-footer" className="bg-[#051726] text-white pt-16 pb-24 lg:pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: Logo + Description + Social networks */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <Logo size="sm" />
            <div>
              <span className="block font-black uppercase text-base tracking-widest text-white leading-none">BC Refrigeração</span>
              <span className="block text-[9px] uppercase tracking-widest text-[#22C7E5] font-bold mt-1 leading-none">Comercial &amp; Container Reefer</span>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            Referência absoluta em consertos mecânicos, elétricos e térmicos no litoral e região de Santa Catarina. Plantão emergencial e peças originais.
          </p>
          
          <div className="flex items-center gap-3 pt-2">
            <a 
              href={companyData.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0E86D4] hover:scale-110 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Facebook da BC Refrigeração"
            >
              <Facebook size={18} />
            </a>
            <a 
              href={companyData.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-tr hover:from-pink-600 hover:to-indigo-600 hover:scale-110 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              aria-label="Instagram da BC Refrigeração"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Col 2: Quick links */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest font-black text-[#22C7E5] border-b border-slate-800 pb-2">Links Rápidos</h3>
          <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-300">
            <li><Link to="/" className="hover:text-[#22C7E5] transition-colors py-1 block">🏠 Home / Início</Link></li>
            <li><Link to="/servicos/loja-de-pecas" className="hover:text-[#22C7E5] transition-colors py-1 block">🛒 Loja física de Peças</Link></li>
            <li><Link to="/contato" className="hover:text-[#22C7E5] transition-colors py-1 block">📞 Orçamento e Contato</Link></li>
            <li><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#22C7E5] transition-colors py-1 block">📍 Ver no Google Maps</a></li>
          </ul>
        </div>

        {/* Col 3: Services (9 Pages) */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest font-black text-[#FF7A1A] border-b border-slate-800 pb-2">Nossas Especialidades</h3>
          <ul className="space-y-1.5 text-xs font-semibold text-slate-300">
            {servicesData.map(s => (
              <li key={s.id}>
                <Link to={`/servicos/${s.slug}`} className="hover:text-[#22C7E5] transition-colors py-0.5 block truncate">
                  ❄️ {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact details (NAP compliant with big clickable fonts) */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest font-black text-[#22C55E] border-b border-slate-800 pb-2">Fale Conosco de Plantão</h3>
          <div className="space-y-3.5">
            <a 
              href={companyData.phoneLink} 
              className="flex items-center gap-3 p-2 bg-slate-900/50 rounded-xl hover:bg-slate-800 border border-slate-800/80 group transition-all"
            >
              <Phone size={18} className="text-[#0E86D4]" />
              <div>
                <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">TELEFONE FIXO</span>
                <span className="block text-base sm:text-lg font-black text-white group-hover:text-[#0E86D4] transition-colors">{companyData.phone}</span>
              </div>
            </a>

            <a 
              href={companyData.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-2 bg-slate-900/50 rounded-xl hover:bg-slate-800 border border-slate-800/80 group transition-all"
            >
              <MessageCircle size={18} className="text-[#22C55E]" />
              <div>
                <span className="block text-[10px] uppercase font-black tracking-wider text-slate-400">WHATSAPP PLANTAO</span>
                <span className="block text-base sm:text-lg font-black text-white group-hover:text-emerald-400 transition-colors">(47) 3305-9452</span>
              </div>
            </a>

            <div className="text-xs space-y-1.5 text-slate-300 font-semibold pl-2">
              <p className="flex gap-2 items-start">
                <MapPin size={14} className="text-slate-500 shrink-0 mt-0.5" />
                <span>{companyData.address} - Centro, Penha - SC</span>
              </p>
              <p className="flex gap-2 items-center">
                <Mail size={14} className="text-slate-500 shrink-0" />
                <span>{companyData.email}</span>
              </p>
              <p className="flex gap-2 items-center text-slate-400">
                <Clock size={14} className="text-slate-500 shrink-0" />
                <span>{companyData.hours}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Discrete bottom cities list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800/80 text-[11px] font-bold text-slate-500 text-center space-y-3">
        <p className="uppercase tracking-widest text-[#22C7E5]">Rede de Atendimento Regional (Mesh de Linkagem SEO):</p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
          {cidadesAtendidas.map((c, idx) => (
            <React.Fragment key={c.slug}>
              <Link to={`/refrigeracao/${c.slug}`} className="hover:text-slate-300 transition-colors">
                {c.name}
              </Link>
              {idx < cidadesAtendidas.length - 1 && <span className="opacity-40">•</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Suprema Sites Express credit */}
      <SupremaCredit />
    </footer>
  );
};
