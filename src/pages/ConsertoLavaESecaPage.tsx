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
  Truck,
  Sparkles,
  Phone,
  Settings,
  AlertTriangle,
  ChevronDown,
  Building2
} from 'lucide-react';
import { companyData, cidadesAtendidas } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';

export const ConsertoLavaESecaPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const waMessage = encodeURIComponent(`Olá! Vim pelo site e preciso de um orçamento para consertar minha máquina Lava e Seca.`);
  const waUrl = `https://wa.me/554733059452?text=${waMessage}`;

  // Breadcrumb schema
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
        "name": "Conserto de Lava e Seca em Penha SC",
        "item": "https://www.bcrefrigeracaosc.com.br/conserto-lava-e-seca-penha-sc"
      }
    ]
  };

  // Service + LocalBusiness Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Conserto e assistência técnica de máquina lava e seca",
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
    },
    "areaServed": {
      "@type": "State",
      "name": "Santa Catarina"
    }
  };

  // FAQ List for the page
  const faqs = [
    {
      question: "Quanto custa uma visita de um técnico de máquina de lavar?",
      answer: "Em Penha e região, a visita técnica de diagnóstico costuma variar conforme a localização e o tipo de equipamento. Na BC Refrigeração, o valor da visita é abatido do serviço quando o conserto é aprovado. Entre em contato pelo (47) 3305-9452 para orçamento sem compromisso."
    },
    {
      question: "Qual a vida útil de uma lava e seca LG?",
      answer: "Em média 10 a 15 anos com manutenção adequada. O motor Direct Drive da LG tem garantia estendida de fábrica justamente pela durabilidade. Limpeza periódica do filtro, uso correto de sabão e manutenção preventiva prolongam significativamente a vida útil."
    },
    {
      question: "Qual a vida útil de uma lava e seca Samsung?",
      answer: "Entre 10 e 14 anos em média. Modelos com motor Digital Inverter tendem a durar mais. Defeitos em sensores e placas podem surgir antes disso, mas na maioria dos casos o reparo é mais vantajoso que a troca do equipamento."
    },
    {
      question: "Quando vale a pena consertar máquina de lavar?",
      answer: "Como regra geral, vale a pena quando o custo do reparo fica abaixo de 50% do valor de uma máquina nova e o equipamento tem menos de 8-10 anos. Lava e seca são equipamentos de alto valor, então o conserto quase sempre compensa. Nossos técnicos avaliam com transparência."
    },
    {
      question: "Qual é o tempo de vida útil de uma máquina de lavar?",
      answer: "Máquinas de lavar convencionais duram em média 8 a 12 anos; lava e seca de qualidade, 10 a 15 anos. Fatores como frequência de uso, excesso de sabão, sobrecarga de roupas e água dura influenciam diretamente."
    },
    {
      question: "Lava e seca gasta muita água e luz?",
      answer: "Não. Por usar tambor horizontal, a lava e seca consome bem menos água que máquinas de abertura superior. O maior consumo de energia está na função de secagem, mas modelos inverter são extremamente econômicos."
    },
    {
      question: "Quanto sabão devo usar na lava e seca?",
      answer: "O excesso de sabão e amaciante mancha as roupas, gera odor e pode danificar componentes internos como sensores e bomba. Use no máximo a quantidade indicada pelo fabricante — em geral, muito menos do que se imagina. Prefira sabão líquido de alta qualidade específico para máquinas de tambor horizontal."
    },
    {
      question: "Vocês atendem em domicílio em Penha e região?",
      answer: "Sim. A BC Refrigeração atende em domicílio em Penha, Balneário Piçarras, Barra Velha, Navegantes, Itajaí e toda a região. Agende uma visita técnica pelo telefone ou WhatsApp: (47) 3305-9452."
    }
  ];

  // FAQ Schema JSON-LD
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

  const commonFaults = [
    "Máquina não liga ou painel piscando",
    "Não centrifuga as roupas",
    "Não seca as roupas ou sai fria",
    "Vazamento de água por baixo",
    "Não drena a água ou erro de bomba",
    "Barulho excessivo na centrifugação",
    "Erro no painel (DE, OE, 4E, 5E, dE, tE)",
    "Porta travada ou não abre",
    "Não puxa sabão ou amaciante",
    "Roupas saindo molhadas ou com odor"
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      <EnhancedSEO 
        title="Conserto de Lava e Seca em Penha SC | Assistência LG, Samsung e mais"
        description="Assistência técnica especializada de máquina lava e seca em Penha SC. Conserto de marcas LG, Samsung, Electrolux, Brastemp com garantia. Ligue (47) 3305-9452."
        canonicalPath="/conserto-lava-e-seca-penha-sc"
        keywords={[
          "conserto de lava e seca", 
          "assistência técnica lava e seca", 
          "manutenção de lava e seca", 
          "conserto de lava e seca penha", 
          "assistência técnica lava e seca penha sc",
          "reparo de máquina de lavar e secar"
        ]}
        schema={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* Breadcrumb section */}
      <div className="bg-[#051726] border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-slate-300">Serviços</span>
          <ChevronRight size={12} />
          <span className="text-[#22C7E5] font-semibold">Lava e Seca</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative bg-[#051726] text-white py-16 lg:py-24 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#051726]/90 z-10" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#22C7E5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#FF7A1A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-20 text-center">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#22C7E5]/15 border border-[#22C7E5]/30 text-[#22C7E5] font-mono text-xs uppercase tracking-widest font-black mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={12} className="text-[#22C7E5] animate-pulse" />
            <span>Atendimento Rápido em Domicílio</span>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Conserto e Assistência Técnica <br className="hidden sm:inline" />
            <span className="text-[#22C7E5]">de Lava e Seca</span> em Penha SC
          </motion.h1>
          <motion.p 
            className="text-slate-300 font-semibold text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Sua lava e seca parou de funcionar, não seca ou apresenta código de erro no painel? 
            Nossos técnicos de plantão resolvem no mesmo dia com peças originais e garantia total.
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
              <span>Chamar no WhatsApp</span>
            </a>
            <a 
              href="tel:+554733059452"
              className="inline-flex items-center gap-2 bg-[#22C7E5] hover:bg-[#0E86D4] text-slate-950 hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Phone size={16} />
              <span>Ligar: (47) 3305-9452</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Internal Navigation Mesh / Quick links to child pages for great crawlability */}
      <div className="bg-slate-100 border-b border-slate-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center justify-center text-xs font-bold text-slate-600">
          <span className="text-slate-400">Páginas Especializadas:</span>
          <Link to="/assistencia-lava-e-seca-lg-penha" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#0E86D4] hover:bg-[#22C7E5]/10 hover:border-[#22C7E5] transition-all">
            Lava e Seca LG
          </Link>
          <Link to="/assistencia-lava-e-seca-samsung-penha" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#0E86D4] hover:bg-[#22C7E5]/10 hover:border-[#22C7E5] transition-all">
            Lava e Seca Samsung
          </Link>
          <Link to="/blog/lava-e-seca-penha-sc-guia-completo" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#0E86D4] hover:bg-[#22C7E5]/10 hover:border-[#22C7E5] transition-all">
            Guia Completo de Cuidados
          </Link>
        </div>
      </div>

      {/* Section 1 - Intro */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E86D4]/10 border border-[#0E86D4]/20 text-[#0E86D4] font-mono text-[10px] uppercase tracking-widest font-black">
              <Wrench size={12} />
              <span>Assistência Técnica Especializada</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              Assistência técnica especializada em máquinas lava e seca
            </h2>
            <p className="text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
              A BC Refrigeração se destaca como líder no diagnóstico e reparo de máquinas lava e seca em Penha, Balneário Piçarras e em todo o litoral norte catarinense. Nossos técnicos são altamente especializados no complexo funcionamento interno destes eletrodomésticos premium, dominando a eletrônica embarcada de placas lógicas, reparo em motores Direct Drive e Inverter, sensores de temperatura, bombas de drenagem de alta durabilidade e sistemas modernos de secagem por condensação.
            </p>
            <p className="text-slate-600 font-medium text-sm leading-relaxed">
              Realizamos todo o atendimento em domicílio para que você tenha total conforto e agilidade, sem necessidade de transportar seu equipamento pesado. Trabalhamos exclusivamente com peças genuínas, garantindo o correto restabelecimento do seu eletrodoméstico e oferecendo garantia formal de 90 dias sobre as peças substituídas e mão de obra executada.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+554733059452"
                className="inline-flex items-center justify-center gap-2 bg-[#051726] hover:bg-[#0E86D4] text-white font-black text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all"
              >
                <Phone size={14} className="text-[#22C7E5]" />
                <span>Ligar para Agendar: (47) 3305-9452</span>
              </a>
              <a 
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#22C55E]/10 hover:bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30 font-bold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl transition-all"
              >
                <MessageCircle size={14} />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#051726] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#22C7E5]/10 rounded-full blur-2xl" />
              <h3 className="text-lg font-black uppercase tracking-tight text-[#22C7E5] mb-4 flex items-center gap-2">
                <ShieldCheck size={20} />
                <span>Compromisso BC</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-100">Atendimento a Domicílio</h4>
                    <p className="text-xs text-slate-400 mt-1">Efetuamos a visita técnica diretamente em sua residência, comércio ou apartamento.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-100">Garantia Formal de 90 dias</h4>
                    <p className="text-xs text-slate-400 mt-1">Segurança completa para sua tranquilidade, cobrindo o serviço e as peças aplicadas.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-[#22C55E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-100">Técnicos Certificados</h4>
                    <p className="text-xs text-slate-400 mt-1">Equipe qualificada com treinamento contínuo nas principais marcas do mercado.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Marcas Atendidas */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              Conserto de lava e seca por marca
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm mt-2">
              Atendemos e consertamos as principais e mais complexas marcas do mercado nacional e importado com peças originais de reposição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LG Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between hover:border-[#22C7E5] transition-colors group">
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-1 bg-red-50 text-red-600 rounded-md border border-red-100">Premium LG</span>
                <h3 className="text-lg font-black text-slate-900 mt-3 mb-2 uppercase tracking-tight">Conserto de lava e seca LG em Penha</h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                  Especialistas em reparos da linha LG Inverter. Resolvemos falhas comuns de entrada e saída de água, erros de sensores e placas lógicas. Solucionamos problemas em sistemas de amortecimento e motores de alta performance.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-500 font-bold mb-4">
                  <span className="text-red-600 uppercase font-black block mb-1">Defeitos frequentes LG:</span>
                  Erro OE (problema de drenagem), Erro UE (desbalanceamento de carga), falha no motor Direct Drive e máquina que não realiza a secagem completa.
                </div>
              </div>
              <Link to="/assistencia-lava-e-seca-lg-penha" className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E86D4] group-hover:text-[#22C7E5] transition-colors mt-2">
                <span>Ver página dedicada LG</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Samsung Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between hover:border-[#22C7E5] transition-colors group">
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100">Premium Samsung</span>
                <h3 className="text-lg font-black text-slate-900 mt-3 mb-2 uppercase tracking-tight">Conserto de lava e seca Samsung em Penha</h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                  Assistência dedicada a modelos EcoBubble e Digital Inverter. Ajuste de rolamentos desgastados, troca de sensores e recondicionamento ou troca de placas principais e de potência.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-500 font-bold mb-4">
                  <span className="text-blue-600 uppercase font-black block mb-1">Defeitos frequentes Samsung:</span>
                  Erro 4E (entrada de água), Erro 5E (falha de drenagem), Erro UE (desbalanceamento), Erro DC (porta travada) e problemas na centrifugação.
                </div>
              </div>
              <Link to="/assistencia-lava-e-seca-samsung-penha" className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E86D4] group-hover:text-[#22C7E5] transition-colors mt-2">
                <span>Ver página dedicada Samsung</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Electrolux Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between hover:border-[#22C7E5] transition-colors">
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-1 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100">Electrolux</span>
                <h3 className="text-lg font-black text-slate-900 mt-3 mb-2 uppercase tracking-tight">Conserto de lava e seca Electrolux em Penha</h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                  Garantia de reparo ágil para lavadoras e secadoras Electrolux. Tratamos falhas no pressostato, placas eletrônicas de controle de ciclos, troca de borrachas de guarnição da porta, resistências e termostatos de secagem.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-500 font-bold mb-4">
                  <span className="text-indigo-600 uppercase font-black block mb-1">Problemas comuns:</span>
                  Acúmulo excessivo de fiapos que bloqueia o calor, vazamentos na porta, códigos de erro de aquecimento e sensores danificados por excesso de espuma.
                </div>
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E86D4] hover:text-[#22C7E5] transition-colors mt-2">
                <span>Orçamento via WhatsApp</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Brastemp & Consul Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between hover:border-[#22C7E5] transition-colors">
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-1 bg-green-50 text-green-600 rounded-md border border-green-100">Nacionais Clássicas</span>
                <h3 className="text-lg font-black text-slate-900 mt-3 mb-2 uppercase tracking-tight">Conserto de Brastemp e Consul em Penha</h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                  Atendimento especializado para as clássicas marcas brasileiras Brastemp e Consul. Grande disponibilidade de estoque imediato de peças originais, propiciando soluções muito rápidas em suspensões, bombas e atuadores de freio.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-500 font-bold mb-4">
                  <span className="text-green-600 uppercase font-black block mb-1">Problemas comuns:</span>
                  Vazamentos na caixa de transmissão, barulho forte na centrifugação devido a rolamento gasto, quebra de molas de suspensão e não drenagem da água.
                </div>
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E86D4] hover:text-[#22C7E5] transition-colors mt-2">
                <span>Orçamento via WhatsApp</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Midea & Panasonic Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between hover:border-[#22C7E5] transition-colors">
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-1 bg-amber-50 text-amber-600 rounded-md border border-amber-100">Tecnologia Asiática</span>
                <h3 className="text-lg font-black text-slate-900 mt-3 mb-2 uppercase tracking-tight">Conserto de Midea e Panasonic em Penha</h3>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                  Técnicos prontos para lidar com as eficientes tecnologias da Midea (Smart Inverter) e da Panasonic (Sistemas de sensores inteligentes de carga e dosagem). Recuperação de falhas eletrônicas complexas e bombas.
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] text-slate-500 font-bold mb-4">
                  <span className="text-amber-600 uppercase font-black block mb-1">Problemas comuns:</span>
                  Problemas no travamento eletromagnético da porta, entupimento de dutos coletores de calor, sensores de umidade danificados e erros de voltagem na placa.
                </div>
              </div>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E86D4] hover:text-[#22C7E5] transition-colors mt-2">
                <span>Orçamento via WhatsApp</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Outras marcas Card */}
            <div className="bg-[#051726] rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF7A1A]/10 rounded-full blur-xl" />
              <div>
                <span className="text-[10px] font-black tracking-wider uppercase px-2 py-1 bg-[#FF7A1A]/20 text-[#FF7A1A] rounded-md border border-[#FF7A1A]/30">Multimarcas</span>
                <h3 className="text-lg font-black mt-3 mb-2 uppercase tracking-tight text-white">Outras marcas de Máquinas de Lavar</h3>
                <p className="text-xs text-slate-300 font-semibold leading-relaxed mb-4">
                  Também atendemos marcas como Philco, Consul, Mueller, Fischer e máquinas industriais. Dispomos de um laboratório próprio altamente avançado para teste de placas eletrônicas lógicas e de potência.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Seja qual for a marca de sua lavadora convencional, secadora ou lava e seca, conte com nosso amplo conhecimento técnico e estoque de peças oficiais para um conserto definitivo.
                </p>
              </div>
              <a 
                href="tel:+554733059452"
                className="inline-flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#E5640A] text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all mt-4 w-full text-center"
              >
                <Phone size={14} />
                <span>Ligar Agora: (47) 3305-9452</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Principais Defeitos */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 text-xs font-black uppercase text-[#FF7A1A] bg-[#FF7A1A]/10 px-3 py-1 rounded-full border border-[#FF7A1A]/20 mb-3">
            <AlertTriangle size={12} />
            <span>Diagnóstico e Reparo Preciso</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
            Principais defeitos que consertamos
          </h2>
          <p className="text-slate-600 font-semibold text-xs sm:text-sm mt-2">
            Identificou algum destes sintomas em seu equipamento? Entre em contato agora. Prolongamos a vida útil da sua máquina com precisão cirúrgica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {commonFaults.map((fault, index) => (
            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-full bg-[#22C7E5]/10 text-[#0E86D4] flex items-center justify-center shrink-0">
                <CheckCircle2 size={16} className="text-[#22C55E]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">{fault}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 - FAQ Page (Perguntas Frequentes) */}
      <section className="bg-slate-100 border-y border-slate-200 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E86D4]/10 border border-[#0E86D4]/20 text-[#0E86D4] font-mono text-[10px] uppercase tracking-widest font-black mb-3">
              <HelpCircle size={12} />
              <span>Dúvidas Comuns Resolvidas</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
              Perguntas frequentes sobre conserto de lava e seca
            </h2>
            <p className="text-slate-600 font-semibold text-xs sm:text-sm mt-2">
              Selecione as perguntas abaixo para sanar suas dúvidas sobre manutenção de eletrodomésticos em Penha SC.
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

      {/* Section 5 - Área de Atendimento */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-[#051726] text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Visual Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#22C7E5]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7A1A]/5 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A1A]/20 border border-[#FF7A1A]/30 text-[#FF7A1A] font-mono text-[10px] uppercase tracking-widest font-black mx-auto lg:mx-0">
                <MapPin size={12} />
                <span>Geolocalização Ativa</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight">
                Onde atendemos
              </h2>
              <p className="text-slate-300 font-semibold text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                A BC Refrigeração atende com frota própria e técnicos experientes em toda a cidade de <strong>Penha SC</strong>, cobrindo os bairros: Centro, Armação, Gravatá, Praia Alegre, Praia de Armação do Itapocorói e a região no entorno do parque Beto Carrero. 
              </p>
              <p className="text-slate-300 font-semibold text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                Além de Penha, estendemos nosso atendimento ágil em domicílio para as cidades vizinhas de <strong>Balneário Piçarras, Barra Velha, Navegantes, Itajaí, Balneário Camboriú e região</strong>.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                {["Penha", "Balneário Piçarras", "Barra Velha", "Navegantes", "Itajaí", "Balneário Camboriú"].map((city, idx) => (
                  <span key={idx} className="bg-[#22C7E5]/15 border border-[#22C7E5]/20 text-[#22C7E5] text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-inner">
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-[#0A2540] border border-[#22C7E5]/20 p-6 rounded-2xl text-center space-y-4 shadow-xl">
                <Building2 size={36} className="text-[#22C7E5] mx-auto animate-pulse" />
                <h4 className="text-base font-black uppercase tracking-tight text-slate-100">Prontidão Emergencial</h4>
                <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                  Oferecemos atendimento rápido de segunda a sábado e mantemos plantão emergencial sob agendamento. Retornamos seu contato prontamente para solucionar o defeito em poucas horas.
                </p>
                <div className="p-3 bg-[#051726] rounded-xl border border-slate-800 text-xs text-[#22C55E] font-black uppercase tracking-wider flex items-center justify-center gap-2">
                  <Truck size={14} className="animate-bounce" />
                  <span>Técnicos a caminho hoje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA Final */}
      <section className="bg-gradient-to-r from-[#22C7E5] to-[#0E86D4] text-white py-14 px-4 shadow-[0_15px_40px_rgba(34,199,229,0.3)]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="bg-slate-950/20 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
            Orçamento Imediato Sem Compromisso
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none text-slate-950">
            Fale com a BC Refrigeração agora!
          </h2>
          <p className="text-slate-900 font-bold text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nossos técnicos de plantão estão prontos para diagnosticar e consertar sua máquina lava e seca de qualquer marca com a melhor garantia de Penha SC. 
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a 
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-[#051726] text-[#22C55E] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-full shadow-2xl transition-all cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Chamar no WhatsApp</span>
            </a>
            <a 
              href="tel:+554733059452"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-full shadow-2xl transition-all cursor-pointer"
            >
              <Phone size={18} className="text-[#0E86D4]" />
              <span>Ligar: (47) 3305-9452</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
