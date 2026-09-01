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

export const MaquinaSorvetePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageTitle = "Máquina de Sorvete Comercial e Industrial | BC Refrigeração SC";
  const pageDescription = "Serviços para máquinas de sorvete comerciais e industriais com atendimento da BC Refrigeração SC para equipamentos de refrigeração profissional.";
  const canonicalUrl = "https://www.bcrefrigeracaosc.com.br/maquina-de-sorvete-comercial-industrial/";

  const faqs = [
    {
      question: "Quais tipos de máquinas de sorvete a BC Refrigeração atende?",
      answer: "Prestamos serviços de manutenção preventiva, corretiva e assistência técnica para máquinas de sorvete expresso (soft), sorvete de massa, açaí e equipamentos de refrigeração para sorveterias comerciais e industriais."
    },
    {
      question: "O que fazer se a máquina de sorvete não estiver congelando a calda adequadamente?",
      answer: "A falta de congelamento pode ser causada por vazamento de gás refrigerante, condensador obstruído por poeira, lâminas do batedor desgastadas ou falhas no compressor e termostato. Recomendamos agendar uma avaliação técnica."
    },
    {
      question: "Qual a importância da higienização e manutenção periódica em sorveterias?",
      answer: "A manutenção periódica garante o ponto exato de consistência e textura do sorvete/açaí, evita o consumo excessivo de energia e previne contaminações no sistema de caldas."
    },
    {
      question: "Vocês realizam atendimento no local da sorveteria ou comércio?",
      answer: "Sim, nossos técnicos realizam o atendimento diretamente no estabelecimento do cliente em Penha, Balneário Piçarras, Navegantes, Itajaí, Balneário Camboriú e região."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.bcrefrigeracaosc.com.br/#service-maquina-de-sorvete",
    "name": "Serviços para Máquina de Sorvete Comercial e Industrial",
    "serviceType": "Manutenção e Assistência Técnica de Máquina de Sorvete Comercial e Industrial",
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
        "name": "Máquina de Sorvete Comercial e Industrial",
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
          <span className="text-white font-bold">Máquina de Sorvete</span>
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
              Máquina de Sorvete Comercial e Industrial
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
              Soluções técnicas para máquinas de sorvete comerciais e industriais. Serviços de manutenção preventiva, conserto e assistência técnica especializada em equipamentos de refrigeração para sorveterias, lanchonetes e indústrias em Penha e SC.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={companyData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#22C55E] hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-2xl shadow-lg flex items-center gap-2 text-base transition-all active:scale-95"
              >
                <MessageCircle size={20} />
                <span>Solicitar Orçamento no WhatsApp</span>
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
              <span>Garantia de Qualidade</span>
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Atendimento especializado para equipamentos de sorveteria</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Ajuste preciso de consistência e ciclos de refrigeração</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Conserto no local para evitar parada no seu negócio</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Atendimento transparente e garantia nos serviços executados</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Description */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-3">
            <Snowflake className="text-[#0E86D4]" />
            <span>Assistência e Manutenção de Equipamentos para Sorveterias</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                Em sorveterias, quiosques de sorvete expresso, lanchonetes e indústrias alimentícias, a <strong>máquina de sorvete comercial e industrial</strong> é o coração da operação. A BC Refrigeração SC atua com manutenção preventiva e conserto técnico focado em restabelecer a capacidade térmica e a produção ideal dos seus equipamentos.
              </p>
              <p>
                O correto congelamento e batimento das caldas garante a cremosidade, sabor e padronização dos sorvetes e açaís oferecidos ao consumidor final. Falhas de refrigeração geram derretimento, textura cristalizada indesejada ou interrupção total das vendas no momento de pico do estabelecimento.
              </p>
              <p>
                Atendemos de forma ágil para diagnosticar vazamentos de gás, falhas em compressores e raspadores, bem como problemas elétricos no quadro de comando da máquina de sorvete.
              </p>
            </div>

            <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-100">
              <img 
                src="https://img.supremasite.com.br/bc/maquina-de-sorvete-comercial-industrial.jpg" 
                alt="Manutenção e assistência técnica em máquina de sorvete comercial e industrial - BC Refrigeração SC"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-950 uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
              <Wrench className="text-[#FF7A1A]" size={22} />
              <span>Nossos Serviços</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Manutenção de máquina de sorvete comercial e expresso</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Assistência técnica para máquinas de sorvete industrial</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Revisão do sistema frigorífico e recarga de gás</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Troca de vedações, correias, gaxetas e lâminas batedoras</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Ajuste de termostatos e comandos de densidade</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-950 uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
              <Zap className="text-[#0E86D4]" size={22} />
              <span>Sinais de Necessidade de Reparo</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Sorvete saindo mole ou demorando muito no cilindro</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Ruído excessivo na transmissão do motor batedor</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Congelamento anormal nas tubulações externas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Vazamento de calda ou água pelas vedações do cilindro</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Indicadores do painel piscando ou desarmamento elétrico</span>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-2">
            <HelpCircle className="text-[#0E86D4]" />
            <span>Perguntas Frequentes - Máquina de Sorvete</span>
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
            Atendimento para máquinas de sorvete comerciais e industriais em Penha e cidades do entorno:
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
