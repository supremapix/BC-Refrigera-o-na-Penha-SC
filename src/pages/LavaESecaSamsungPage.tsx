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

export const LavaESecaSamsungPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const waMessage = encodeURIComponent(`Olá! Vim pelo site e preciso de assistência para minha máquina Lava e Seca Samsung.`);
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
        "name": "Assistência Samsung",
        "item": "https://www.bcrefrigeracaosc.com.br/assistencia-lava-e-seca-samsung-penha"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Assistência técnica e conserto de lava e seca Samsung",
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
      question: "O que causa o Erro 5E ou 5C na lava e seca Samsung?",
      answer: "O erro 5E (ou 5C em modelos mais novos) indica falha de drenagem de água. Costuma ser causado por fiapos acumulados que entopem o filtro frontal localizado no rodapé da máquina, dobras ou torções na mangueira de drenagem traseira, ou queima física da bomba elétrica de escoamento. Recomendamos realizar a limpeza preventiva do filtro frontal a cada 15 dias para evitar este bloqueio."
    },
    {
      question: "Como resolver o Erro 4E ou 4C na lava e seca Samsung?",
      answer: "Os códigos 4E ou 4C apontam para falha na entrada de água (a máquina não está enchendo). A causa primária costuma ser a torneira de entrada de água fechada, a mangueira dobrada ou obstruída por sedimentos da rede de água, ou queima da válvula solenoide de entrada de água. A limpeza da redinha de filtro da mangueira resolve em muitos casos simples; para substituição da válvula, conte com nossa equipe técnica rápida."
    },
    {
      question: "Qual é a vantagem do motor Digital Inverter Samsung e sua garantia?",
      answer: "O motor Digital Inverter da Samsung utiliza imãs robustos para um desempenho mais silencioso e eficiente energeticamente, reduzindo o atrito físico de polias e escovas. Essa tecnologia possui garantia estendida de 10 a 20 anos oferecida pela fabricante diretamente. Ele aumenta o tempo de vida útil global da lava e seca Samsung para além de 10 a 14 anos de uso ativo."
    },
    {
      question: "Por que a função EcoBubble é tão importante e como mantê-la?",
      answer: "A tecnologia EcoBubble da Samsung dissolve o sabão com ar e água antes do ciclo começar, gerando bolhas de limpeza ativa que penetram nos tecidos 40 vezes mais rápido, lavando com eficácia mesmo em água fria e economizando energia. Para manter o sistema funcionando corretamente, evite o uso de excesso de sabão ou amaciante convencional, pois a espuma excessiva pode travar o sensor e a bomba de injeção de bolhas."
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

  const faultsSamsung = [
    {
      code: "Erro 5E / 5C",
      desc: "Falha de drenagem d'água por duto bloqueado ou bomba queimada"
    },
    {
      code: "Erro 4E / 4C",
      desc: "Falha de entrada d'água devido à válvula solenoide com bobina em curto"
    },
    {
      code: "Erro UE / UB",
      desc: "Desbalanceamento do tambor que impossibilita a centrifugação adequada"
    },
    {
      code: "Erro DC / dC",
      desc: "Erro de porta aberta causado por trava eletromagnética ou sensor danificado"
    },
    {
      code: "EcoBubble falhando",
      desc: "Bomba geradora de bolhas travada por excesso de sabão seco ou fiapos"
    },
    {
      code: "Erro de Secagem (tE / HC)",
      desc: "Falha de aquecimento por sensor de temperatura ou resistência aberta"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      <EnhancedSEO 
        title="Assistência Técnica Lava e Seca Samsung em Penha SC | BC Refrigeração"
        description="Conserto especializado de lava e seca Samsung em Penha SC. Solução rápida para Erros 5E, 4E, UE, DC, motor Digital Inverter e EcoBubble. Ligue (47) 3305-9452."
        canonicalPath="/assistencia-lava-e-seca-samsung-penha"
        keywords={[
          "conserto de lava e seca samsung penha", 
          "assistência técnica lava e seca samsung", 
          "manutenção lava e seca samsung penha sc", 
          "conserto erro 5e samsung", 
          "reparo ecobubble samsung"
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
          <span className="text-[#22C7E5] font-semibold">Assistência Samsung</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="relative bg-[#051726] text-white py-16 lg:py-24 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#051726]/90 z-10" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-20 text-center">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 font-mono text-xs uppercase tracking-widest font-black mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={12} className="text-blue-400" />
            <span>Peças Genuínas Samsung</span>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Assistência Técnica <br className="hidden sm:inline" />
            de Lava e Seca <span className="text-[#22C7E5]">Samsung</span> em Penha
          </motion.h1>
          <motion.p 
            className="text-slate-300 font-semibold text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Diagnóstico preciso para toda a linha Samsung EcoBubble, QDrive e WD Series. Sanamos falhas eletrônicas complexas, troca de sensores e recondicionamento de motores em tempo recorde.
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
              <span>Chamar Plantão Samsung</span>
            </a>
            <a 
              href="tel:+554733059452"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
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
          <Link to="/assistencia-lava-e-seca-lg-penha" className="text-[#0E86D4] hover:underline">
            Assistência LG →
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
              Especialistas em tecnologia EcoBubble e Motores Digital Inverter
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
              As lavadoras e secadoras Samsung destacam-se mundialmente por recursos que facilitam o dia a dia, como o gerador de microbolhas <strong>EcoBubble</strong> (que injeta bolhas de ar na água para penetrar e limpar os tecidos com eficiência em água fria) e o motor <strong>Digital Inverter</strong> de baixíssima vibração. Entretanto, por serem aparelhos extremamente eletrônicos, qualquer oscilação de rede ou falta de limpeza pode desarmar seus sistemas, exigindo intervenção técnica especializada.
            </p>
            <p className="text-slate-600 font-semibold text-sm leading-relaxed">
              A BC Refrigeração atua há anos no conserto de todos os modelos de lava e seca Samsung (WD10M, WD11M, WD11T, WD85, WD10, entre outras). Contamos com bancadas eletrônicas exclusivas para simular e corrigir falhas nas placas controladoras da Samsung, reduzindo drasticamente o preço do reparo em comparação com a troca integral da placa autorizada.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Consertos efetuados em sua própria residência",
                "Peças genuínas Samsung em estoque",
                "Rápida chegada em Penha, Piçarras e Navegantes",
                "Tratamento com garantia de 3 meses por escrito",
                "Técnicos especialistas com alto conhecimento",
                "Pós-atendimento prestativo e transparente"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 font-bold text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#22C55E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#051726] text-white rounded-3xl p-6 sm:p-8 border border-blue-600/20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
              <h3 className="text-lg font-black uppercase tracking-tight text-[#22C7E5] mb-4 flex items-center gap-2">
                <Wrench size={20} />
                <span>Soluções Samsung Oferecidas</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-bold">
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Troca de resistência e dutos de ar de secagem</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Substituição da bomba EcoBubble e de escoamento</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Conserto em placa de circuito principal ou de filtro</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Troca de suspensões, molas e amortecedores de cuba</li>
                <li className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">✓ Troca de trava elétrica de porta (micro-retardo)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Defeitos comuns Samsung */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-xs font-black uppercase tracking-wider bg-blue-100/50 px-3 py-1 rounded-full">Códigos de Falha</span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-2">
              Defeitos e Códigos de Erros Comuns Samsung
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm max-w-2xl mx-auto mt-2">
              Sua lavadora Samsung travou com água dentro ou parou no meio do ciclo? Identifique a sigla exibida no painel:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faultsSamsung.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-600/40 transition-colors">
                <div>
                  <div className="flex items-center gap-2 text-[#0E86D4] font-black text-sm uppercase">
                    <AlertTriangle size={16} />
                    <span>{item.code}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 mt-4 pt-2 border-t border-slate-100 uppercase font-black">
                  Assistência em domicílio Penha SC
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - FAQ Samsung */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              Perguntas frequentes sobre conserto de lava e seca Samsung
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm mt-2">
              Entenda como prolongar o desempenho do seu equipamento Samsung e quando acionar nossa equipe de atendimento.
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
                      className={`text-[#0E86D4] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
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
            Atendimento Samsung em Penha SC e Municípios Vizinhos
          </h2>
          <p className="text-slate-300 font-semibold text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Nossos veículos móveis de atendimento técnico rodam diariamente de ponta a ponta na cidade de Penha SC (Centro, Armação, Gravatá, Praia de Armação do Itapocorói, Beto Carrero, Praia Alegre) e vizinhanças. Levamos as peças oficiais mais demandadas da Samsung para efetuar o reparo sem demora!
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
              className="inline-flex items-center gap-2 bg-[#22C7E5] hover:bg-[#0E86D4] text-slate-950 hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
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
