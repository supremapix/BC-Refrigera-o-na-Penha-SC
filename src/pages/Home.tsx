import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '../components/Logo';
import { 
  Shield, 
  MessageCircle, 
  Phone, 
  ChevronRight, 
  Award, 
  MapPin, 
  Settings, 
  Container, 
  CheckCircle,
  Truck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Clock
} from 'lucide-react';
import { companyData, servicesData, cidadesAtendidas, bairrosPenha } from '../data/siteData';
import { InstagramFeed } from '../components/InstagramFeed';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { VideoSection } from '../components/VideoSection';
import { PagePromoImage } from '../components/PagePromoImage';
import { HeroBackgroundVideo } from '../components/HeroBackgroundVideo';
import { HeroTypewriter } from '../components/HeroTypewriter';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const addressQuery = encodeURIComponent(`${companyData.address}, ${companyData.city}, ${companyData.state}`);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

  // 10 Accordion FAQ items for homepage
  const homeFaqs = [
    { q: "Qual a área de cobertura de atendimento de vocês?", a: "Nossa sede fica em Penha/SC, mas atendemos clientes num raio de até 200 km, incluindo cidades-chaves como Navegantes, Itajaí, Balneário Camboriú, Brusque, Blumenau, Joinville e Florianópolis." },
    { q: "Vocês oferecem garantia nos consertos de refrigeração?", a: "Sim! Todos os nossos consertos mecânicos e elétricos contam com garantia legal de 90 dias assegurada por escrito e com relatórios técnicos detalhados por e-mail ou WhatsApp." },
    { q: "Como funciona o agendamento de consertos domiciliares?", a: "Basta agendar pelo telefone fixo (47) 3305-9452 ou clicando nos botões de WhatsApp de nosso site. Coordinamos a visita do técnico uniformizado no melhor dia e turno para você." },
    { q: "Vocês atendem chamados de emergência de Container Reefer nos finais de semana?", a: "Sim, absolutamente! Oferecemos escala de plantão técnico 24 horas por dia, 7 dias por semana, para pátios portuários, operadores logísticos e embarcadores do litoral de SC." },
    { q: "A loja física em Penha vende peças para qualquer refrigerador?", a: "Sim, nossa loja de balcão possui amplo estoque físico de compressores, controladores Full Gauge, ferramentas para refrigeristas e gases ecológicos para freezers, geladeiras, bebedouros e condicionadores de ar." },
    { q: "Vocês realizam a instalação de ar-condicionado de acordo com as diretrizes do fabricante?", a: "Sim, realizamos a instalação profissional preservando a garantia do aparelho. Usamos tubulações de cobre virgem de alta espessura e bomba de vácuo para garantir o rendimento ideal." },
    { q: "A BC Refrigeração emite PMOC para estabelecimentos comerciais?", a: "Sim, prestamos assessoria completa sob as normas de qualidade do ar e de manutenção exigidas pela Anvisa, com assinatura técnica e emissão de PMOC e ART de engenharia térmica." },
    { q: "Quanto tempo leva o atendimento em uma câmara fria que parou de gelar?", a: "Para comércios e indústrias, prestamos socorro rápido com deslocamento imediato de nossas equipes. Nosso tempo de chegada varia de 30 minutos a no máximo 2 horas nas cidades do litoral imediato." },
    { q: "Quais as formas de pagamento aceitas?", a: "Aceitamos Pix, cartões de débito e crédito de todas as principais bandeiras nacionais (com opção de parcelamento), além de faturamento para empresas parceiras mediante cadastro prévio." },
    { q: "A maioria dos reparos é resolvida na hora ou o aparelho precisa ser levado?", a: "Mais de 95% de nossas manutenções — incluindo câmaras frigoríficas, containers reefers, ar-condicionado e máquinas lava e seca — são finalizadas com perfeição no próprio local do cliente, evitando remoções desnecessárias." }
  ];

  // 6 Realistic local testimonials
  const testimonials = [
    { name: "Carlos Augusto Mendes", role: "Gerente de Logística Portuária", location: "Navegantes", text: "Empresa fantástica. Estávamos com 2 containers reefer de exportação de pescados acusando alarme de compressor no terminal. A equipe da BC Refrigeração chegou em menos de 1 hora, diagnosticou a placa eletrônica e resolveu tudo na hora. Evitou um prejuízo imenso!" },
    { name: "Maria Clara Albuquerque", role: "Dona de Pousada", location: "Penha (Praia Grande)", text: "Contratei para consertar 8 aparelhos de ar-condicionado split da pousada antes do início da alta temporada. Fizeram a limpeza química e consertaram um que estava pingando água. Atendimento educado, limpo e super profissional." },
    { name: "Robson J. de Souza", role: "Morador", location: "Balneário Piçarras", text: "Minha máquina lava e seca Samsung começou a fazer um barulho terrível de ferro batendo na centrifugação. O técnico veio em casa no mesmo dia, trocou os rolamentos na lavanderia e a máquina está silenciosa como nova. Recomendo muito!" },
    { name: "Amanda Becker", role: "Proprietária de Supermercado", location: "Itajaí", text: "Nossos expositores de laticínios e a câmara fria de congelados começaram a perder temperatura no sábado de manhã. A BC enviou a equipe de plantão super rápido. Descobriram um microvazamento de gás e consertaram. Indispensáveis para nosso comércio." },
    { name: "Eduardo Krause", role: "Mestre Cervejeiro", location: "Blumenau", text: "Eles projetaram e montaram a nossa Beer Cave panorâmica. O controle térmico de -3°C é impecável, os vidros nunca embaçam mesmo no calor extremo do Vale e a iluminação em LED ficou espetacular. Virou atração na nossa loja!" },
    { name: "Sandro Joinville Frotas", role: "Gerente de Retroporto", location: "Joinville", text: "Mantemos contrato de manutenção periódica para nossas câmaras e fazemos todas as inspeções PTI de container reefer com a BC Refrigeração. Mão de obra extremamente qualificada, preço justo e compromisso real com prazos." }
  ];

  // Grouped location mesh for Home section
  const regionsSummary = {
    litoral: cidadesAtendidas.filter(c => c.region === "Litoral Imediato").slice(0, 6),
    vale: cidadesAtendidas.filter(c => c.region === "Vale do Itajaí").slice(0, 4),
    norte: cidadesAtendidas.filter(c => c.region === "Norte").slice(0, 4)
  };

  // Structured schemas
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": companyData.name,
    "legalName": companyData.legalName,
    "image": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
    "logo": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
    "url": "https://www.bcrefrigeracaosc.com.br",
    "telephone": "+554733059452",
    "email": companyData.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.address,
      "addressLocality": companyData.city,
      "addressRegion": companyData.stateShort,
      "postalCode": companyData.zip,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": companyData.latitude,
      "longitude": companyData.longitude
    },
    "areaServed": cidadesAtendidas.map(c => ({
      "@type": "City",
      "name": c.name
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 pb-16">
      <EnhancedSEO
        title="Refrigeração Comercial, Container Reefer e Lava e Seca em Penha SC"
        description="BC Refrigeração: Especialista em Conserto de Container Reefer, Máquina Lava e Seca, Ar-Condicionado, Câmara Fria e Geladeiras em Penha e toda SC. Ligue (47) 3305-9452."
        canonicalPath="/"
        schema={[homeSchema, faqSchema]}
      />

      {/* 1. HERO SECTION WITH VIDEO BACKGROUND & LIVE TYPEWRITER */}
      <section className="relative bg-[#051726] text-white pt-16 pb-28 lg:pt-28 lg:pb-36 px-4 overflow-hidden border-b border-slate-900">
        
        {/* Dynamic Background Video Component */}
        <HeroBackgroundVideo />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          
          {/* Hero text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Centered Logo for Mobile/Tablet */}
            <div className="lg:hidden flex justify-center mb-6 select-none">
              <Logo size="lg" className="hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Advanced Typewriter component replacing static h1 and p */}
            <div className="w-full">
              <HeroTypewriter />
            </div>

          </div>

          {/* Large decorative Official Logo with premium animations on the right (5 cols) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative select-none">
            <Logo size="xl" />
          </div>
        </div>

        {/* Dynamic High-Speed Interactive Marquee (Letreiro Rodapé) */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#061B2E]/95 backdrop-blur-md border-t border-[#22C7E5]/25 py-4 overflow-hidden z-30 select-none shadow-[0_-4px_30px_rgba(5,23,38,0.9)]">
          <div className="animate-marquee-fast flex items-center gap-12 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-100">
            {/* Set 1 */}
            <a 
              href={companyData.phoneLink}
              className="inline-flex items-center gap-2 hover:text-[#22C7E5] transition-colors font-black shrink-0"
              title="Ligar Agora"
            >
              <Phone size={14} className="text-[#22C7E5] animate-bounce" />
              <span>LIGUE: {companyData.phone}</span>
            </a>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <a 
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#22C55E] transition-colors font-black shrink-0"
              title="Chamar no WhatsApp"
            >
              <MessageCircle size={14} className="text-[#22C55E] animate-pulse" />
              <span>WHATSAPP PLANTÃO: {companyData.phone}</span>
            </a>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#FF7A1A] transition-colors shrink-0"
              title="Como Chegar"
            >
              <MapPin size={14} className="text-[#FF7A1A]" />
              <span>ENDEREÇO: {companyData.address}, {companyData.neighborhood}, {companyData.city} - {companyData.stateShort}</span>
            </a>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Clock size={14} className="text-[#22C7E5]" />
              <span>PLANTÃO EMERGENCIAL REEFER 24H</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Shield size={14} className="text-[#22C55E]" />
              <span>GARANTIA DE 90 DIAS EM TODOS OS CONSERTOS</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Truck size={14} className="text-[#FF7A1A]" />
              <span>FROTA PRÓPRIA COM TÉCNICOS ESPECIALISTAS</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Sparkles size={14} className="text-yellow-400" />
              <span>MAIS DE 30 CIDADES ATENDIDAS EM SANTA CATARINA</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>

            {/* Set 2 (Identical duplicate for infinite seam-free loop) */}
            <a 
              href={companyData.phoneLink}
              className="inline-flex items-center gap-2 hover:text-[#22C7E5] transition-colors font-black shrink-0"
              title="Ligar Agora"
            >
              <Phone size={14} className="text-[#22C7E5] animate-bounce" />
              <span>LIGUE: {companyData.phone}</span>
            </a>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <a 
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#22C55E] transition-colors font-black shrink-0"
              title="Chamar no WhatsApp"
            >
              <MessageCircle size={14} className="text-[#22C55E] animate-pulse" />
              <span>WHATSAPP PLANTÃO: {companyData.phone}</span>
            </a>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#FF7A1A] transition-colors shrink-0"
              title="Como Chegar"
            >
              <MapPin size={14} className="text-[#FF7A1A]" />
              <span>ENDEREÇO: {companyData.address}, {companyData.neighborhood}, {companyData.city} - {companyData.stateShort}</span>
            </a>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Clock size={14} className="text-[#22C7E5]" />
              <span>PLANTÃO EMERGENCIAL REEFER 24H</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Shield size={14} className="text-[#22C55E]" />
              <span>GARANTIA DE 90 DIAS EM TODOS OS CONSERTOS</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Truck size={14} className="text-[#FF7A1A]" />
              <span>FROTA PRÓPRIA COM TÉCNICOS ESPECIALISTAS</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
            <span className="inline-flex items-center gap-2 text-slate-200 shrink-0">
              <Sparkles size={14} className="text-yellow-400" />
              <span>MAIS DE 30 CIDADES ATENDIDAS EM SANTA CATARINA</span>
            </span>
            <span className="text-[#22C7E5]/40 shrink-0">•</span>
          </div>
        </div>
      </section>

      {/* Video Demonstrativo (Apos Hero) */}
      <VideoSection 
        title="Nossa Operação e Tecnologia" 
        subtitle="Conheça a infraestrutura de atendimento que garante a conservação térmica de suas cargas perecíveis e o clima ideal do seu ambiente."
      />

      {/* 2. TRUST STRIP (Faixa de Confiança) */}
      <section id="trust-strip-stats" className="bg-[#051726] border-y border-slate-800/80 text-white py-8 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-black text-[#22C7E5] tracking-tight">+3.500</span>
            <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">Clientes Satisfeitos</span>
          </div>

          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-black text-[#22C55E] tracking-tight">+1.200</span>
            <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">Containers Reparados</span>
          </div>

          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-black text-[#FF7A1A] tracking-tight">+30 Cidades</span>
            <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">Cidades Atendidas em SC</span>
          </div>

          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-black text-[#FFFFFF] tracking-tight">24 Horas</span>
            <span className="block text-[11px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">Plantão Técnico Ativo</span>
          </div>

        </div>
      </section>

      {/* 3. GRID OF SERVICES (9 cards, hover with glow) */}
      <section id="services-grid-section" className="py-20 px-4 max-w-7xl mx-auto scroll-margin-top-24">
        <div className="text-center space-y-3 mb-16">
          <span className="inline-block text-xs uppercase tracking-widest text-[#0E86D4] font-black">Nosso Portfólio de Atendimento</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-950 tracking-tight">Especialidades em Refrigeração Comercial &amp; Climatização</h2>
          <p className="text-xs sm:text-base text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
            Nossos técnicos passam por treinamentos contínuos para oferecer a máxima eficiência técnica. Clique em qualquer especialidade abaixo para ler as diretrizes de conserto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((s, idx) => (
            <Link
              key={s.id}
              to={`/servicos/${s.slug}`}
              id={`service-card-${s.id}`}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-[0_15px_30px_rgba(34,199,229,0.1)] hover:border-[#22C7E5]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Dynamic Icon box with glowing indicator */}
                <div className="w-12 h-12 rounded-2xl bg-[#0E86D4]/5 text-[#0E86D4] group-hover:text-white group-hover:bg-[#0E86D4] flex items-center justify-center transition-all duration-300 shadow-inner mb-5 font-black text-xl">
                  <span>❄️</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-black text-slate-950 uppercase group-hover:text-[#0E86D4] transition-colors tracking-tight">
                  {s.title}
                </h3>
                
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                  {s.shortDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E86D4]">
                <span className="group-hover:underline">Diretrizes do Serviço</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-[#22C7E5]" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO CONTAINER REEFER EM DESTAQUE (Split Layout Image + Text) */}
      <section id="reefer-focus-section" className="bg-[#051726] text-white py-20 px-4 overflow-hidden border-y border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Custom vector illustrations representing container refrigeration mechanism (5 cols) */}
          <div className="lg:col-span-5 space-y-6 bg-[#0A2540] border border-slate-800 p-8 rounded-3xl relative shadow-inner overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#22C7E5]/10 rounded-full blur-2xl" />
            <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-widest uppercase text-[#22C7E5] mb-2 font-mono">
              <Container size={14} />
              <span>Container Reefer Engine</span>
            </span>
            <h3 className="text-xl font-black uppercase text-white tracking-tight">Diagnóstico Completo de Falhas</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Trabalhamos com os melhores analisadores de estanqueidade de nitrogênio, vácuo controlado por micron eletrônico e computadores de bordo oficiais para download de logs de cargas perecíveis.
            </p>
            
            <div className="space-y-3.5 pt-4 border-t border-slate-800/80">
              <div className="p-3 bg-[#051726] rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Carrier Transicold Link:</span>
                <span className="text-xs text-emerald-400 font-bold uppercase">Homologado</span>
              </div>
              <div className="p-3 bg-[#051726] rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Thermo King Controller:</span>
                <span className="text-xs text-emerald-400 font-bold uppercase">Homologado</span>
              </div>
              <div className="p-3 bg-[#051726] rounded-xl border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Daikin / Star Cool:</span>
                <span className="text-xs text-emerald-400 font-bold uppercase">Homologado</span>
              </div>
            </div>
          </div>

          {/* Texts and checklists (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#22C7E5] font-black font-mono">Nosso Principal Diferencial Técnico</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight">Conserto de Container Reefer de Alta Performance</h2>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
              A quebra de cadeia de frio em contêineres carregados pode custar dezenas de milhares de dólares em multas e perda de carga perecível. Na BC Refrigeração, oferecemos plantão móvel 24h com técnicos que dominam termodinâmica e eletrônica embarcada das principais marcas.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-black uppercase tracking-wider text-[#FF7A1A]">Problemas comuns que resolvemos no local:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium">
                <div className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-slate-300">O container não gela ou está perdendo frio</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-slate-300">Presença de códigos de alarmes de transdutor</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-slate-300">Vazamento interno de gás refrigerante</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-slate-300">Pane na placa controladora principal</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-slate-300">Queima do compressor Scroll ou de pistão</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="text-red-500 font-bold shrink-0">✕</span>
                  <span className="text-slate-300">Falha de degelo e bloqueio de evaporador</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/servicos/conserto-container-reefer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#FF7A1A] hover:bg-[#E5640A] text-white font-bold px-6 py-3.5 rounded-2xl text-sm shadow-md transition-all active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Ver Detalhes do Serviço Reefer</span>
                <ChevronRight size={16} />
              </Link>
              <a 
                href={companyData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 border border-slate-700 bg-[#051726] text-white font-bold px-6 py-3.5 rounded-2xl text-sm transition-all hover:bg-slate-800 active:scale-95 whitespace-nowrap"
              >
                <MessageCircle size={16} className="text-[#22C55E]" />
                <span>Acionar Plantão Emergencial 24h</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LOJA DE PEÇAS DE REFRIGERAÇÃO (Banner destacado) */}
      <section id="pecas-promo-banner" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0E86D4] to-[#22C7E5] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row gap-8 items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-white/20 text-white font-mono text-[10px] font-black uppercase tracking-widest shadow-inner">
              <ShoppingBag size={11} />
              <span>LOJA FÍSICA EM PENHA/SC</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
              Peças de Reposição a Pronta Entrega para Refrigeração
            </h2>
            <p className="text-xs sm:text-sm font-semibold opacity-95 max-w-xl">
              Nossa distribuidora física fornece suprimentos certificados das principais marcas globais como <span className="font-bold">Embraco, Tecumseh, Danfoss e Full Gauge Controls</span>. Gases refrigerantes lacrados, compressores, termostatos digitais e ferramentas para refrigeristas.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/servicos/loja-de-pecas"
              className="bg-[#FF7A1A] hover:bg-[#E5640A] text-white font-black px-8 py-4 rounded-2xl text-base text-center shadow-lg transition-all active:scale-95 inline-flex items-center justify-center gap-1"
            >
              <span>Visitar Loja de Peças</span>
              <ChevronRight size={18} />
            </Link>
            <a 
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl text-base text-center hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-1"
            >
              <MessageCircle size={18} className="text-[#22C55E]" />
              <span>Consultar Estoque</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6. ÁREAS ATENDIDAS (Mesh linking local SEO) */}
      <section id="served-areas-section" className="py-16 bg-slate-100 border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#0E86D4] font-black">Raio de Cobertura de 200 km</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-950 tracking-tight">Cidades Atendidas em Santa Catarina</h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed">
              Dispomos de veículos adaptados prontos para prestar serviços nas principais cidades portuárias, litorâneas e do Vale do Itajaí. Selecione a sua cidade para agendar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Litoral Imediato Grid */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-black text-[#0E86D4] border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
                <span>📍</span> Litoral Imediato
              </h3>
              <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                {regionsSummary.litoral.map(c => (
                  <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="text-slate-600 hover:text-[#0E86D4] font-bold py-1 flex items-center gap-1 hover:pl-1 transition-all">
                    <span>❄️</span>
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Vale do Itajaí Grid */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-black text-[#FF7A1A] border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
                <span>📍</span> Vale do Itajaí
              </h3>
              <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                {regionsSummary.vale.map(c => (
                  <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="text-slate-600 hover:text-[#FF7A1A] font-bold py-1 flex items-center gap-1 hover:pl-1 transition-all">
                    <span>❄️</span>
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bairros de Penha Grid */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
              <h3 className="text-xs uppercase tracking-widest font-black text-[#22C7E5] border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
                <span>🏠</span> Bairros de Penha
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {bairrosPenha.slice(0, 10).map(b => (
                  <Link key={b.slug} to={`/refrigeracao/penha/${b.slug}`} className="text-slate-600 hover:text-[#22C7E5] font-bold py-1 flex items-center gap-1 hover:pl-1 transition-all truncate">
                    <span>📍</span>
                    <span>{b.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS REALISTAS DE CLIENTES DE SC */}
      <section id="testimonials-carousel" className="py-20 px-4 max-w-7xl mx-auto font-sans">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#FF7A1A] font-black">Depoimentos Reais de Clientes</span>
          <h2 className="text-3xl font-black uppercase text-slate-950 tracking-tight">O que dizem sobre a BC Refrigeração</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mx-auto">
            Garantimos um serviço impecável para que sua empresa ou residência tenha a segurança térmica ideal. Veja as avaliações do Google:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-slate-150 text-5xl font-serif font-black select-none pointer-events-none">“</div>
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex gap-1 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold italic leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block font-black text-slate-900 text-sm leading-none">{t.name}</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider mt-1 font-bold">{t.role}</span>
                </div>
                <span className="bg-[#E8F6FB] text-[#0E86D4] px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  📍 {t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Imagem de Destaque Sede Física */}
      <PagePromoImage 
        title="Sede Própria e Estrutura de Refrigeração em Penha / SC"
        description="Nossa empresa possui base física centralizada em Penha com frota especializada de atendimento móvel e oficina avançada para reparos de refrigeração comercial e contêineres reefer. Garantia de seriedade, rapidez e as melhores peças originais do mercado."
        badge="Sede Própria & Logística"
      />

      {/* 8. INSTAGRAM FEED (Section 7 Component) */}
      <InstagramFeed />

      {/* 9. FAQ GENERAL WITH ACCORDION (10 items) */}
      <section id="faq-accordions-section" className="py-20 px-4 max-w-4xl mx-auto font-sans">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#0E86D4] font-black">Central de Dúvidas</span>
          <h2 className="text-3xl font-black uppercase text-slate-950 tracking-tight">Perguntas Frequentes sobre Refrigeração</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xl mx-auto">
            Tem alguma dúvida sobre vácuo, prazos de atendimento ou formas de pagamento? Veja as respostas diretas dos nossos especialistas:
          </p>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  id={`faq-accordion-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="font-black text-slate-900 text-sm sm:text-base pr-4 leading-tight">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-[#0E86D4] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 bg-[#E8F6FB]/30"
                    >
                      <div className="p-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. FINAL CTA WITH WARM ACCENTS */}
      <section id="final-cta-footer-strip" className="mx-4 max-w-7xl lg:mx-auto">
        <div className="bg-gradient-to-br from-[#051726] to-[#0A2540] text-white p-8 sm:p-16 rounded-3xl border border-slate-800 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C7E5]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FF7A1A]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block text-xs uppercase tracking-widest text-[#22C7E5] font-black font-mono">Cotação Sem Compromisso</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Fale Conosco Agora e Resolva Seu Problema</h2>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold leading-relaxed">
              Nossas oficinas móveis estão equipadas e prontas para atendimento residencial, predial ou industrial. Solicite seu orçamento gratuito hoje!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 relative z-10">
            <a 
              href={companyData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF7A1A] hover:bg-[#E5640A] text-white px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all shadow-[0_4px_25px_rgba(255,122,26,0.3)] hover:shadow-[0_4px_35px_rgba(255,122,26,0.5)] flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle size={22} className="animate-bounce" />
              <span>Solicitar via WhatsApp</span>
            </a>
            
            <a 
              href={companyData.phoneLink}
              className="border border-slate-700 bg-[#051726]/80 text-white hover:border-slate-500 px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95"
            >
              <Phone size={20} className="text-[#22C7E5]" />
              <span>Ligar: (47) 3305-9452</span>
            </a>
          </div>

          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider relative z-10 pt-2">
            📍 Atendimento rápido em Penha, Piçarras, Barra Velha, Navegantes, Itajaí e Região (raio de 200 km)
          </p>
        </div>
      </section>
    </div>
  );
};
