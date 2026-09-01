import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Wrench, 
  Zap, 
  Snowflake,
  Building2,
  HelpCircle
} from 'lucide-react';
import { companyData, cidadesAtendidas } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const ChopeirasPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageTitle = "Chopeiras | BC Refrigeração SC";
  const pageDescription = "Serviços de manutenção, conserto e assistência técnica para chopeiras comerciais e profissionais com a BC Refrigeração SC em Penha e região.";
  const canonicalUrl = "https://www.bcrefrigeracaosc.com.br/chopeiras/";

  const faqs = [
    {
      question: "Quais serviços a BC Refrigeração oferece para chopeiras?",
      answer: "A BC Refrigeração SC oferece exclusivamente serviços de manutenção preventiva, conserto e assistência técnica especializada para chopeiras comerciais, profissionais e de alta vazão. Não realizamos venda, fabricação ou aluguel de chopeiras."
    },
    {
      question: "Por que o chopp está saindo quente ou sem gelar adequadamente?",
      answer: "A falta de refrigeração no chopp pode ser causada por vazamento de fluido refrigerante, falha no compressor ou banco de gelo, sujeira no condensador a ar, ou desregulagem no termostato do equipamento."
    },
    {
      question: "Atendem estabelecimentos comerciais como bares, restaurantes e eventos?",
      answer: "Sim! Prestamos atendimento técnico especializado para chopeiras em bares, restaurantes, cervejarias, pubs e comércios em Penha e em todo o litoral norte catarinense."
    },
    {
      question: "Como solicitar atendimento técnico para minha chopeira?",
      answer: "Você pode falar diretamente com nossa equipe pelo WhatsApp (47) 3305-9452 ou ligar para nosso atendimento. Agendamos a visita técnica diretamente em seu estabelecimento."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.bcrefrigeracaosc.com.br/#service-chopeiras",
    "name": "Serviços de Manutenção e Conserto de Chopeiras",
    "serviceType": "Assistência Técnica e Conserto de Chopeiras",
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
        "name": "Chopeiras",
        "item": canonicalUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen text-slate-900 pb-16">
      <EnhancedSEO 
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        schemas={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Breadcrumbs */}
      <nav className="bg-[#051726] border-b border-slate-800 text-slate-300 py-3 px-4 sm:px-6 lg:px-8 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-slate-500" />
          <span className="text-[#22C7E5]">Refrigeração Comercial e Industrial</span>
          <ChevronRight size={12} className="text-slate-500" />
          <span className="text-white font-bold">Chopeiras</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#051726] via-[#0A2540] to-[#051726] text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#22C7E5]/10 border border-[#22C7E5]/30 text-[#22C7E5] px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
              <Building2 size={14} />
              <span>Manutenção e Conserto Especializado</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Serviços para Chopeiras
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
              Serviços focados em assistência técnica, manutenção preventiva e conserto de chopeiras comerciais e profissionais. Soluções de refrigeração para garantir que seu chopp seja servido na temperatura ideal em Penha e região.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={companyData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22C55E] hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-base transition-all active:scale-95"
              >
                <MessageCircle size={20} />
                <span>Solicitar Atendimento no WhatsApp</span>
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
              <span>Aviso de Serviço</span>
            </h3>

            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              * A BC Refrigeração SC atua exclusivamente com <strong>serviços de manutenção, conserto e assistência técnica</strong> em chopeiras comerciais e profissionais. Não realizamos venda ou locação do equipamento.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-200 font-semibold border-t border-slate-800 pt-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#22C55E]" />
                <span>Manutenção do circuito de gelo e refrigeração</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#22C55E]" />
                <span>Conserto de compressores e vazamentos de gás</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#22C55E]" />
                <span>Atendimento local em estabelecimentos comerciais</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-3">
            <Snowflake className="text-[#0E86D4]" />
            <span>Assistência Técnica e Manutenção de Chopeiras Profissionais</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                Manter o chopp na temperatura exata é indispensável para o sucesso de bares, restaurantes, pubs, cervejarias e locais de eventos. A BC Refrigeração SC oferece <strong>manutenção técnica e conserto especializado para chopeiras</strong> de bancada, embutidas, torre e sistemas com banco de gelo ou expansão direta.
              </p>
              <p>
                Quando uma chopeira comercial perde eficiência térmica, o chopp passa a sair espumando excessivamente ou quente, frustrando clientes e gerando desperdício do produto. Nossa equipe inspeciona o grupo condensador, termostatos, fluxo de gás e isolamento térmico das serpentinas.
              </p>
              <p>
                Trabalhamos com foco no correto diagnóstico do sistema frigorífico do equipamento para devolver a estabilidade térmica ao seu estabelecimento com agilidade.
              </p>
            </div>

            <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-100">
              <img 
                src="https://img.supremasite.com.br/bc/chopeiras-comerciais.jpg" 
                alt="Conserto e assistência técnica de chopeiras comerciais e profissionais - BC Refrigeração SC"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Features & Solved Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-950 uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
              <Wrench className="text-[#FF7A1A]" size={22} />
              <span>Serviços Prestados</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Manutenção de chopeiras comerciais e profissionais</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Conserto de sistema frigorífico e troca de compressores</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Eliminação de vazamentos de fluido refrigerante e recarga de gás</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Ajuste de termostatos e controladores de temperatura</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Limpeza e desobstrução de condensadores e ventilação</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-950 uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
              <Zap className="text-[#0E86D4]" size={22} />
              <span>Principais Problemas Resolvidos</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Chopp saindo quente ou sem atingir a temperatura ideal</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Banco de gelo da chopeira não formando corretamente</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Compressor fazendo ruídos estranhos ou desarmando disjuntor</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Vazamento de água ou perda de fluido refrigerante</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Superaquecimento do motor em ambientes fechados</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-2">
            <HelpCircle className="text-[#0E86D4]" />
            <span>Perguntas Frequentes - Chopeiras</span>
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex justify-between items-center font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={18} className={`transition-transform text-slate-500 ${openFaq === idx ? 'rotate-180 text-[#0E86D4]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cities Area */}
        <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
            Regiões Atendidas
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Atendimento para manutenção e conserto de chopeiras em Penha e cidades do litoral:
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
