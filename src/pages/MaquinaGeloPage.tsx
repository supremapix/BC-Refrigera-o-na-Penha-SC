import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Zap, 
  Snowflake,
  Building2,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { companyData, cidadesAtendidas } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const MaquinaGeloPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageTitle = "Máquina de Gelo Comercial e Industrial | BC Refrigeração SC";
  const pageDescription = "Serviços para máquinas de gelo comerciais e industriais com a BC Refrigeração SC. Atendimento especializado para equipamentos de refrigeração comercial e industrial.";
  const canonicalUrl = "https://www.bcrefrigeracaosc.com.br/maquina-de-gelo-comercial-industrial/";

  const faqs = [
    {
      question: "Vocês atendem máquinas de gelo comerciais e industriais em Penha e região?",
      answer: "Sim! A BC Refrigeração SC oferece assistência técnica, manutenção preventiva e conserto para máquinas de gelo comerciais e industriais em Penha, Balneário Piçarras, Navegantes, Itajaí, Balneário Camboriú e demais cidades da região."
    },
    {
      question: "Quais são os problemas mais comuns em máquinas de gelo?",
      answer: "Os problemas mais frequentes incluem baixo rendimento ou atraso na produção de cubos/escamas, falha no sistema de água ou bomba de circulação, acúmulo de calcário e sujeira no condensador, e falhas no ciclo de degelo ou no compressor."
    },
    {
      question: "Com que frequência deve ser realizada a manutenção preventiva?",
      answer: "Para estabelecimentos comerciais como bares, restaurantes, hotéis e peixarias, a higienização técnica e manutenção preventiva devem ser feitas periodicamente (a cada 3 a 6 meses) para manter a qualidade higiênico-sanitária do gelo e evitar paradas do equipamento."
    },
    {
      question: "Como solicitar orçamento para conserto de máquina de gelo?",
      answer: "Basta entrar em contato pelo WhatsApp (47) 3305-9452 ou pelo telefone comercial. Nossa equipe agendará o atendimento em seu estabelecimento com rapidez."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.bcrefrigeracaosc.com.br/#service-maquina-de-gelo",
    "name": "Serviços para Máquina de Gelo Comercial e Industrial",
    "serviceType": "Assistência e Manutenção de Máquina de Gelo Comercial e Industrial",
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
        "name": "Máquina de Gelo Comercial e Industrial",
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

      {/* Breadcrumbs Navigation */}
      <nav className="bg-[#051726] border-b border-slate-800 text-slate-300 py-3 px-4 sm:px-6 lg:px-8 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} className="text-slate-500" />
          <span className="text-[#22C7E5]">Refrigeração Comercial e Industrial</span>
          <ChevronRight size={12} className="text-slate-500" />
          <span className="text-white font-bold">Máquina de Gelo</span>
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
              Máquina de Gelo Comercial e Industrial
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
              Serviços especializados de assistência técnica, manutenção preventiva e conserto de máquinas de gelo comerciais e industriais. Soluções ágeis para peixarias, restaurantes, hotéis, supermercados e indústrias em Penha e toda a região.
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
              <span>Destaques do Atendimento</span>
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Técnicos especializados em refrigeração comercial e industrial</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Atendimento rápido em domicílio e em estabelecimentos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Manutenção técnica, limpeza higiênica e reparos elétricos/térmicos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Peças e diagnósticos com garantia técnica formal</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Detailed Explanation */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-3">
            <Snowflake className="text-[#0E86D4]" />
            <span>Assistência Técnica e Manutenção de Máquina de Gelo</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
              <p>
                As <strong>máquinas de gelo comerciais e industriais</strong> são fundamentais no dia a dia de estabelecimentos alimentícios, pousadas, hotéis, restaurantes, peixarias e unidades industriais. A BC Refrigeração SC disponibiliza atendimento qualificado em refrigeração comercial para manter seus equipamentos de produção de gelo em cubos, escama ou blocos funcionando sem interrupções.
              </p>
              <p>
                A manutenção e a assistência técnica de máquina de gelo exigem conhecimento especializado em circuitos frigoríficos, bombas hidráulicas de circulação, sensores de nível, válvulas solenoides e compressores. Um equipamento sem a devida conservação reduz a produção horária de gelo, eleva o consumo de energia elétrica e pode comprometer a higiene sanitária do gelo produzido.
              </p>
              <p>
                Se a sua máquina de gelo parou de produzir gelo, está demorando excessivamente para completar o ciclo, apresentando vazamentos de água ou ruidos anormais, nossa equipe realiza diagnósticos precisos e reparos com peças adequadas.
              </p>
            </div>

            <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-100">
              <img 
                src="https://img.supremasite.com.br/bc/maquina-de-gelo-comercial-industrial.jpg" 
                alt="Manutenção e conserto de máquina de gelo comercial e industrial em Penha e região - BC Refrigeração SC"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Services & Problems Solved Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-950 uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
              <Wrench className="text-[#FF7A1A]" size={22} />
              <span>Serviços Realizados</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Manutenção preventiva e corretiva para máquina de gelo comercial</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Assistência técnica para máquinas de gelo industriais de grande porte</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Higienização técnica profunda do reservatório e circuito de água</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Substituição e reparo de bombas, válvulas e compressores</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                <span>Carga de gás refrigerante e eliminação de vazamentos</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-black text-slate-950 uppercase flex items-center gap-2 border-b border-slate-100 pb-3">
              <Zap className="text-[#0E86D4]" size={22} />
              <span>Principais Sintomas Atendidos</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Máquina de gelo ligada mas sem formação de cubos ou escamas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Produção fraca ou blocos finos e quebradiços</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Falhas no ciclo automático de soltar o gelo (degelo)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Vazamento constante de água na base do equipamento</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#FF7A1A] shrink-0 mt-0.5" />
                <span>Alarme sonoro ativado ou desarmamento elétrico</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-[#051726] text-white rounded-3xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl font-black uppercase text-center tracking-tight">
            Etapas do Atendimento BC Refrigeração SC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A2540] p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#22C7E5]">01.</span>
              <h3 className="text-base font-bold text-white">Contato e Agendamento</h3>
              <p className="text-xs text-slate-300">Entre em contato via WhatsApp ou ligação e agende a visita no seu estabelecimento.</p>
            </div>
            <div className="bg-[#0A2540] p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#22C7E5]">02.</span>
              <h3 className="text-base font-bold text-white">Diagnóstico Técnico</h3>
              <p className="text-xs text-slate-300">Inspecionamos o sistema elétrico, hidráulico e frigorífico para localizar a causa raiz do problema.</p>
            </div>
            <div className="bg-[#0A2540] p-5 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-2xl font-black text-[#22C7E5]">03.</span>
              <h3 className="text-base font-bold text-white">Reparo e Garantia</h3>
              <p className="text-xs text-slate-300">Executamos o conserto com peças de qualidade e fornecemos a garantia dos serviços prestados.</p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight flex items-center gap-2">
            <HelpCircle className="text-[#0E86D4]" />
            <span>Perguntas Frequentes - Máquina de Gelo</span>
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

        {/* Regional Internal Linking Grid */}
        <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
            Regiões Atendidas para Refrigeração Comercial e Industrial
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Oferecemos assistência técnica para máquinas de gelo e refrigeração comercial em Penha e municípios vizinhos:
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
