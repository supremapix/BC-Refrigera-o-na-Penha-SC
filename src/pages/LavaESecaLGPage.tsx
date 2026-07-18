import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  ShieldCheck, 
  Wrench,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { companyData } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const LavaESecaLGPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const waMessage = encodeURIComponent(`Olá! Vim pelo site e preciso de assistência para minha máquina Lava e Seca LG.`);
  const waUrl = `https://wa.me/554733059452?text=${waMessage}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.bcrefrigeracaosc.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Conserto de Lava e Seca",
        "item": "https://www.bcrefrigeracaosc.com.br/conserto-lava-e-seca-penha-sc"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Assistência LG",
        "item": "https://www.bcrefrigeracaosc.com.br/assistencia-lava-e-seca-lg-penha"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Assistência técnica e conserto de lava e seca LG",
    "provider": {
      "@type": "LocalBusiness",
      "name": "BC Refrigeração",
      "telephone": "+554733059452",
      "url": "https://www.bcrefrigeracaosc.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.7694,
        "longitude": -48.6458
      },
      "areaServed": ["Penha", "Balneário Piçarras", "Barra Velha", "Navegantes", "Itajaí", "Balneário Camboriú"]
    }
  };

  const faqs = [
    {
      question: "O que significa o Erro OE na lava e seca LG?",
      answer: "O erro OE nas lavadoras e lava e seca LG indica falha na drenagem da água. Isso normalmente ocorre devido a um filtro de drenagem entupido por fiapos ou objetos (moedas, grampos), dobras na mangueira de saída de água, ou queima da eletrobomba de drenagem. A limpeza periódica do filtro previne este problema, mas se persistir, nossa equipe realiza a troca da bomba no mesmo dia."
    },
    {
      question: "Como resolver o Erro UE na máquina LG?",
      answer: "O código UE significa desbalanceamento da carga dentro do tambor. Ocorre quando há pouca roupa ou itens muito pesados (como edredons ou tapetes) acumulados de um lado só. Para corrigir, distribua o peso uniformemente ou acrescente mais peças. Se o erro ocorrer constantemente mesmo com carga normal, pode ser desgaste nos amortecedores de suspensão da máquina, necessitando manutenção técnica."
    },
    {
      question: "Qual a duração média do motor Direct Drive da LG?",
      answer: "O motor Inverter Direct Drive da LG é famoso por sua durabilidade excepcional, sendo projetado para durar de 10 a 15 anos de uso intenso, e conta com 10 anos de garantia de fábrica oferecidos pela LG. Por ser conectado diretamente ao tambor sem correias ou polias, ele reduz o ruído e o desgaste de peças móveis."
    },
    {
      question: "Por que minha lava e seca LG não está secando as roupas?",
      answer: "Se a máquina realiza todos os ciclos de lavagem e centrifugação, mas as roupas saem molhadas após a secagem, as causas mais comuns são acúmulo de fiapos no duto de secagem, termostato de segurança desarmado ou queimado, ou falha na resistência de aquecimento de ar. Nossos técnicos realizam a desobstrução e substituição desses componentes em domicílio."
    }
  ];

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

  const faultsLg = [
    {
      code: "Erro OE",
      desc: "Falha na drenagem da água por entupimento ou pane na eletrobomba"
    },
    {
      code: "Erro UE",
      desc: "Desbalanceamento físico no cesto de lavagem por desgaste nos amortecedores"
    },
    {
      code: "Erro IE",
      desc: "Falha no abastecimento de água causada por válvula de entrada obstruída"
    },
    {
      code: "Não seca as roupas",
      desc: "Problema no duto de ventilação, termostato ou queima da resistência de secagem"
    },
    {
      code: "Barulho ao centrifugar",
      desc: "Indício grave de desgaste nos rolamentos traseiros e retentor de água"
    },
    {
      code: "Erro dE ou dE1",
      desc: "Sensor de porta aberta ou trava de segurança eletromagnética danificada"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      <EnhancedSEO 
        title="Assistência Técnica Lava e Seca LG em Penha SC | BC Refrigeração"
        description="Conserto especializado de lava e seca LG em Penha SC. Solução rápida para Erros OE, UE, IE, Motor Direct Drive e sistema de secagem. Ligue (47) 3305-9452."
        canonicalPath="/assistencia-lava-e-seca-lg-penha"
        keywords={[
          "conserto de lava e seca lg penha", 
          "assistência técnica lava e seca lg", 
          "manutenção lava e seca lg penha sc", 
          "conserto erro oe lg", 
          "reparo motor direct drive lg"
        ]}
        schema={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* Breadcrumb */}
      <div className="bg-[#051726] border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/conserto-lava-e-seca-penha-sc" className="hover:text-[#22C7E5] transition-colors">Lava e Seca</Link>
          <ChevronRight size={12} />
          <span className="text-[#22C7E5] font-semibold">Assistência LG</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-[#051726] text-white py-16 lg:py-24 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#051726]/90 z-10" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-20 text-center">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 font-mono text-xs uppercase tracking-widest font-black mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={12} className="text-red-500" />
            <span>Peças Originais LG</span>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Assistência Técnica <br className="hidden sm:inline" />
            de Lava e Seca <span className="text-red-600">LG</span> em Penha
          </motion.h1>
          <motion.p 
            className="text-slate-300 font-semibold text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Somos especialistas na linha de lavadoras e secadoras LG Inverter Direct Drive. Resolvemos problemas de placas eletrônicas, dutos de calor entupidos e trocas de bombas no mesmo dia.
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#1eb051] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Chamar Plantão LG</span>
            </a>
            <a 
              href="tel:+554733059452"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Phone size={16} />
              <span>Ligar: (47) 3305-9452</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Link Mesh */}
      <div className="bg-slate-100 border-b border-slate-200 py-3.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-3 justify-center items-center text-xs font-bold text-slate-500">
          <span>Veja também:</span>
          <Link to="/conserto-lava-e-seca-penha-sc" className="text-[#0E86D4] hover:underline">
            ← Página Principal Lava e Seca
          </Link>
          <span className="text-slate-300">|</span>
          <Link to="/assistencia-lava-e-seca-samsung-penha" className="text-[#0E86D4] hover:underline">
            Assistência Samsung →
          </Link>
          <span className="text-slate-300">|</span>
          <Link to="/blog/lava-e-seca-penha-sc-guia-completo" className="text-[#0E86D4] hover:underline">
            Guia Completo de Cuidados
          </Link>
        </div>
      </div>

      {/* Section 1 - Brand Info */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-none">
              Excelência em tecnologia Inverter Direct Drive e TurboWash
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
              As máquinas lava e seca LG representam o que há de mais moderno em engenharia de lavanderia residencial. Seus diferenciais, como o motor <strong>Inverter Direct Drive</strong> (que dispensa correias e polias, girando silenciosamente acoplado ao tambor) e os jatos inteligentes do sistema <strong>TurboWash</strong>, exigem profundo conhecimento técnico e instrumental adequado para diagnóstico e manutenção corretiva.
            </p>
            <p className="text-slate-600 font-semibold text-sm leading-relaxed">
              Na BC Refrigeração, oferecemos assistência técnica especializada para todos os modelos LG (Smart Care, Prime, Titan, Vivace, entre outras). Seus sensores inteligentes e placas eletrônicas de controle de frequência do motor são avaliados em nosso laboratório próprio avançado, o que acelera a identificação da peça exata a ser consertada ou substituída.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Atendimento exclusivo em domicílio",
                "Peças originais direto de distribuidor",
                "Atendimento veloz em Penha e Piçarras",
                "Garantia certificada de 3 meses",
                "Técnicos com capacitação de fábrica",
                "Suporte prioritário pós-reparo"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 font-bold text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#051726] text-white rounded-3xl p-6 sm:p-8 border border-red-600/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl" />
              <h3 className="text-lg font-black uppercase tracking-tight text-red-500 mb-4 flex items-center gap-2">
                <Wrench size={20} />
                <span>Serviços LG Oferecidos</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-bold">
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Troca de resistência e sensores de secagem</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Substituição de eletrobomba de água</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Reparo ou troca de placa eletrônica principal</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Alinhamento e substituição de amortecedores</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Troca de borracha de vedação (guarnição)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Defeitos comuns LG */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-red-600 text-xs font-black uppercase tracking-wider bg-red-100/50 px-3 py-1 rounded-full">Códigos de Falha</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-2">
              Defeitos e Códigos de Erros Comuns LG
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm max-w-2xl mx-auto mt-2">
              Sua máquina LG está apitando e mostrando letras no display? Confira abaixo as principais causas técnicas que resolvemos no local:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faultsLg.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-red-600/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2 text-red-600 font-black text-sm uppercase">
                    <AlertTriangle size={16} />
                    <span>{item.code}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 mt-4 pt-2 border-t border-slate-100 uppercase font-black">
                  Resolução rápida em Penha SC
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - FAQ LG */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              Perguntas frequentes sobre conserto de lava e seca LG
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm mt-2">
              Tudo o que você precisa saber sobre a manutenção preventiva e corretiva de seu aparelho LG.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">
                      {index + 1}. {faq.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`text-red-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'}`}
                  >
                    <div className="px-6 py-5 text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Area Map Pin Section */}
      <section className="bg-[#051726] text-white py-14 px-4 border-t border-b border-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <MapPin size={32} className="text-[#22C7E5] mx-auto animate-bounce" />
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Atendimento LG no litoral de Santa Catarina
          </h2>
          <p className="text-slate-300 font-semibold text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Atendemos de ponta a ponta na cidade de Penha SC (Centro, Gravatá, Beto Carrero, Praia Alegre, Armação) e arredores incluindo Piçarras, Barra Velha, Navegantes e Itajaí. Nossa van de serviços possui as ferramentas mais comuns de conserto LG para solucionar na primeira visita!
          </p>
          <div className="pt-4 flex flex-wrap gap-4 justify-center">
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#1eb051] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Orçamento via WhatsApp</span>
            </a>
            <a 
              href="tel:+554733059452"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
            >
              <Phone size={16} />
              <span>Ligar: (47) 3305-9452</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
