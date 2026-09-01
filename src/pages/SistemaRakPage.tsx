import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Building2,
  AlertCircle
} from 'lucide-react';
import { companyData, cidadesAtendidas } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const SistemaRakPage: React.FC = () => {
  const pageTitle = "Sistema RAK | BC Refrigeração SC";
  const pageDescription = "Soluções e manutenção especializada para Sistema RAK em refrigeração comercial e industrial com a BC Refrigeração SC.";
  const canonicalUrl = "https://www.bcrefrigeracaosc.com.br/sistema-rak/";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.bcrefrigeracaosc.com.br/#service-sistema-rak",
    "name": "Serviços e Manutenção para Sistema RAK",
    "serviceType": "Refrigeração Comercial e Industrial - Sistema RAK",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.bcrefrigeracaosc.com.br/#organization",
      "name": "BC Refrigeração SC"
    },
    "areaServed": "Santa Catarina",
    "description": pageDescription,
    "url": canonicalUrl
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bcrefrigeracaosc.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serviços",
        "item": "https://www.bcrefrigeracaosc.com.br/#servicos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sistema RAK",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 pb-16">
      <EnhancedSEO 
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        schemas={[serviceSchema, breadcrumbSchema]}
      />

      {/* Breadcrumbs */}
      <nav className="bg-[#051726] border-b border-slate-800 text-slate-300 py-3 px-4 sm:px-6 lg:px-8 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-slate-500" />
          <span className="text-[#22C7E5]">Refrigeração Comercial e Industrial</span>
          <ChevronRight size={12} className="text-slate-500" />
          <span className="text-white font-bold">Sistema RAK</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#051726] via-[#0A2540] to-[#051726] text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#22C7E5]/10 border border-[#22C7E5]/30 text-[#22C7E5] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Building2 size={14} />
              <span>Refrigeração Comercial e Industrial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Sistema RAK
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
              A BC Refrigeração SC atua com soluções para sistemas de refrigeração comercial e industrial, incluindo o atendimento especializado para Sistema RAK. Entre em contato com nossos técnicos para agendamentos e orçamentos na região de Penha e Santa Catarina.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={companyData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22C55E] hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-base transition-all active:scale-95"
              >
                <MessageCircle size={20} />
                <span>Solicitar Informações via WhatsApp</span>
              </a>

              <a
                href={companyData.phoneLink}
                className="bg-[#0E86D4] hover:bg-[#0E4C7A] text-white font-black px-6 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-base transition-all active:scale-95"
              >
                <Phone size={20} />
                <span>Ligar: {companyData.phone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#0A2540] border border-slate-700/80 rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-wide flex items-center gap-2 border-b border-slate-800 pb-3">
              <ShieldCheck className="text-[#22C7E5]" size={20} />
              <span>Suporte Especializado</span>
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Atendimento comercial e industrial sob medida</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Análise técnica para equipamentos em operação</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Suporte prestado por equipe técnica qualificada</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Notice Card for Pending Technical Details */}
        <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm">
          <div className="flex items-center gap-3 font-bold text-amber-800 text-base sm:text-lg">
            <AlertCircle className="text-amber-600 shrink-0" size={24} />
            <span>Aviso de Especificação Técnica</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed font-medium">
            [CONTEÚDO TÉCNICO DO SISTEMA RAK PENDENTE DE CONFIRMAÇÃO DO CLIENTE]
          </p>
          <p className="text-xs text-amber-800 font-medium leading-relaxed">
            As especificações técnicas detalhadas e definições de aplicação do Sistema RAK da BC Refrigeração SC serão atualizadas após confirmação oficial do cliente. Para obter informações ou solicitar suporte técnico de refrigeração para este sistema, entre em contato diretamente com nossa equipe comercial.
          </p>
        </div>

        {/* General Service Information Container */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
            Atendimento para Sistemas de Refrigeração Comercial e Industrial
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                A BC Refrigeração SC atua no segmento de <strong>refrigeração comercial e industrial</strong> em Santa Catarina, prestando serviços de manutenção preventiva e corretiva para central de compressores, sistemas frigoríficos e soluções de climatização de grande porte.
              </p>
              <p>
                Se a sua empresa utiliza um Sistema RAK ou necessita de suporte técnico para centrais de refrigeração comercial, nossos profissionais estão à disposição para avaliar a estrutura frigorífica e propor os reparos necessários.
              </p>
            </div>

            <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-100">
              <img 
                src="https://img.supremasite.com.br/bc/sistema-rak-refrigeracao-comercial-industrial.jpg" 
                alt="Manutenção e assistência técnica em Sistema RAK - BC Refrigeração SC"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <a
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22C55E] hover:bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
            >
              <MessageCircle size={16} />
              <span>Falar com Técnico no WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Regional Linkage */}
        <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
            Atendimento Regional
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Prestação de serviços para refrigeração comercial e industrial em Penha e região:
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
            {cidadesAtendidas.slice(0, 12).map(city => (
              <Link 
                key={city.slug} 
                to={`/refrigeracao/${city.slug}`}
                className="bg-white border border-slate-300 hover:border-[#0E86D4] hover:text-[#0E86D4] px-3 py-1.5 rounded-xl transition-all"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
