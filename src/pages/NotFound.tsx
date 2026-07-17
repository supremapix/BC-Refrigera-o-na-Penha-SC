import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { servicesData, companyData } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const NotFound: React.FC = () => {
  return (
    <div className="bg-[#051726] text-white min-h-screen font-sans flex flex-col justify-center items-center py-20 px-4">
      <EnhancedSEO
        title="Página Não Encontrada (404)"
        description="A página procurada não existe ou foi removida temporariamente. Conheça as soluções de refrigeração da BC Refrigeração."
        canonicalPath="/404"
      />

      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 mb-2">
          <Info size={40} className="animate-bounce" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight">Erro 404</h1>
        <h2 className="text-xl sm:text-2xl font-bold text-[#22C7E5] uppercase">Ops! Página Não Encontrada</h2>
        
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          O endereço digitado ou o link que você seguiu pode estar quebrado, desatualizado ou temporariamente indisponível. Utilize os links abaixo para encontrar o serviço de refrigeração que precisa:
        </p>

        <div className="flex justify-center gap-4 pt-2">
          <Link 
            to="/" 
            className="bg-[#FF7A1A] hover:bg-[#E5640A] text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-colors shadow-lg shadow-orange-500/15"
          >
            Ir para Página Inicial
          </Link>
          <a 
            href={companyData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-colors flex items-center gap-1.5"
          >
            <MessageCircle size={16} className="text-[#22C55E]" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Services List Grid */}
        <div className="pt-8 border-t border-slate-800 text-left space-y-4">
          <h3 className="text-xs uppercase tracking-widest font-black text-[#22C7E5]">Conheça os Nossos Serviços Principais</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
            {servicesData.map(s => (
              <Link 
                key={s.id} 
                to={`/servicos/${s.slug}`}
                className="flex items-center gap-1 hover:text-[#22C7E5] transition-colors py-1 hover:translate-x-0.5 transition-transform"
              >
                <ChevronRight size={14} className="text-[#FF7A1A]" />
                <span>{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
