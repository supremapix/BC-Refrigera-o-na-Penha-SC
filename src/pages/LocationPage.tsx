import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MapPin, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Clock, 
  Container,
  HelpCircle
} from 'lucide-react';
import { allLocations, companyData, servicesData, LocationItem } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PagePromoImage } from '../components/PagePromoImage';
import { VideoSection } from '../components/VideoSection';

export const LocationPage: React.FC = () => {
  const { cidade, bairro } = useParams<{ cidade?: string; bairro?: string }>();
  
  // Identify the target location
  let locationItem: LocationItem | undefined;

  if (bairro) {
    locationItem = allLocations.find(l => l.slug === bairro && l.type === 'bairro');
  } else if (cidade) {
    locationItem = allLocations.find(l => l.slug === cidade && l.type === 'cidade');
  }

  // Fallback to Penha Centro if not found
  if (!locationItem) {
    locationItem = {
      name: "Penha (Centro)",
      slug: "centro",
      type: "bairro",
      latitude: -26.7694,
      longitude: -48.6458,
      highlightText: "Atendimento imediato na sede da BC Refrigeração em Penha."
    };
  }

  const isBairro = locationItem.type === 'bairro';
  const name = locationItem.name;
  const distance = locationItem.distanceKm || 0;
  const timeMins = isBairro ? 15 : Math.ceil(distance * 1.1 + 12);
  const region = locationItem.region || "Litoral Catarinense";

  // Generate unique SEO text variants programmatically (minimum 500 words per page)
  const paragraph1 = isBairro
    ? `A BC Refrigeração é a principal referência em soluções térmicas no bairro ${name} em Penha/SC. Nossa equipe de técnicos altamente treinados realiza atendimentos domiciliares e corporativos com extrema rapidez. Seja para efetuar o conserto urgente de sua máquina Lava e Seca, realizar a higienização química periódica de um ar-condicionado Split ou prestar assessoria técnica na nossa loja física de peças de reposição, moradores e comerciantes do bairro ${name} contam com uma assistência confiável, transparente e com garantia certificada por escrito.`
    : `Buscando soluções profissionais de refrigeração comercial e conserto de Container Reefer em ${name}/SC? A BC Refrigeração atende integralmente a cidade de ${name} com visitas técnicas de prontidão para diagnósticos rápidos de compressores, chillers de processo, câmaras frias industriais e aparelhos de climatização de grande porte. Nossa sede em Penha localiza-se a aproximadamente ${distance} km de ${name}, permitindo que nossas equipes móveis equipadas cheguem ao seu endereço em cerca de ${timeMins} minutos para restabelecer a segurança térmica da sua carga ou comércio.`;

  const paragraph2 = isBairro
    ? `No bairro ${name}, entendemos que a proximidade de nossa sede no Centro facilita a logística de atendimento de emergência. Muitas famílias e proprietários de pousadas ou restaurantes tradicionais de Penha dependem de eletrodomésticos e refrigeradores operando em alta capacidade. Realizamos a troca de borrachas magnéticas de geladeiras, reparos mecânicos de centrifugação em lava e seca e carga de gás ecologicamente correto de forma ágil. Escolher a BC Refrigeração para o bairro ${name} é optar por atendimento humanizado e preço justo.`
    : `O polo comercial e logístico de ${name}/SC necessita de sistemas térmicos impecáveis para evitar prejuízos operacionais. Por estar inserida na macrorregião atendida pela nossa empresa num raio de 200 km, a cidade de ${name} usufrui de contratos de manutenção preventiva (PMOC) para ar-condicionado comercial e câmaras frigoríficas de congelados de pescados e alimentos. Atuamos com as marcas mais renomadas do mercado e oferecemos plantão aos sábados para garantir que seu estoque ou container reefer opere perfeitamente.`;

  const paragraph3 = `Adicionalmente aos atendimentos corretivos comuns, a BC Refrigeração especializa-se no fornecimento de projetos avançados sob medida de engenharia de frio, incluindo a montagem de Walk-in Coolers panorâmicos, adegas elegantes do tipo Beer Cave, e assistência preventiva profunda em sistemas de Chillers industriais de processos fabris. Unindo técnicos certificados, agilidade no deslocamento a partir de Penha e peças originais a pronta entrega em nosso balcão, garantimos a máxima eficiência térmica do litoral de Santa Catarina ao Vale do Itajaí.`;

  // Get 6 neighbor locations to build the link grid (linking mesh)
  const neighbors = allLocations
    .filter(l => l.slug !== locationItem?.slug)
    .slice(0, 6);

  const waMessage = encodeURIComponent(`Olá! Preciso de um orçamento de refrigeração para a região de ${name}.`);
  const waUrl = `https://wa.me/554733059452?text=${waMessage}`;

  // Schemas
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
        "name": "Áreas Atendidas",
        "item": "https://www.bcrefrigeracaosc.com.br"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": name,
        "item": isBairro 
          ? `https://www.bcrefrigeracaosc.com.br/refrigeracao/penha/${locationItem.slug}`
          : `https://www.bcrefrigeracaosc.com.br/refrigeracao/${locationItem.slug}`
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": `BC Refrigeração - Assistência em ${name}`,
    "image": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
    "telephone": "+554733059452",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": isBairro ? "Penha" : name,
      "addressRegion": "SC",
      "postalCode": isBairro ? companyData.zip : "",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": locationItem.latitude,
      "longitude": locationItem.longitude
    },
    "areaServed": {
      "@type": "Place",
      "name": name,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": locationItem.latitude,
        "longitude": locationItem.longitude
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      <EnhancedSEO
        title={`Refrigeração em ${name} SC | Assistência Técnica de Containers e Climatização`}
        description={`Assistência técnica de refrigeração e container reefer em ${name}/SC. Reparo de lava e seca, ar-condicionado e câmaras frias. Atendimento ágil.`}
        canonicalPath={isBairro ? `/refrigeracao/penha/${locationItem.slug}` : `/refrigeracao/${locationItem.slug}`}
        keywords={[`refrigeração em ${name}`, `conserto de reefer em ${name}`, `ar condicionado ${name} sc`, `conserto de geladeira ${name}`, `assistência técnica ${name}`]}
        schema={[breadcrumbSchema, localBusinessSchema]}
        geoPosition={{ lat: locationItem.latitude, lng: locationItem.longitude }}
        geoPlacename={`${name}, Santa Catarina, Brasil`}
      />

      {/* Breadcrumb section */}
      <div className="bg-[#051726] border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span>Áreas Atendidas</span>
          <ChevronRight size={12} />
          {isBairro && (
            <>
              <span className="text-slate-300">Penha</span>
              <ChevronRight size={12} />
            </>
          )}
          <span className="text-[#22C7E5] font-semibold">{name}</span>
        </div>
      </div>

      {/* Hero Banner Area */}
      <section className="relative bg-gradient-to-b from-[#051726] to-[#0A2540] text-white py-16 lg:py-20 px-4 border-b border-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/70 border border-slate-700 text-[#22C7E5] font-mono text-xs uppercase tracking-widest font-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <MapPin size={12} />
            <span>Região Atendida: {region}</span>
          </motion.div>
          <motion.h1 
            className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Refrigeração em {name} | Conserto de Container Reefer, Ar-Condicionado e Lava e Seca
          </motion.h1>
          <motion.p 
            className="mt-4 text-slate-300 max-w-3xl mx-auto text-xs sm:text-base font-semibold leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Atendimento técnico ágil, preventivo e emergencial para residências, condomínios, comércios e portos em {name}. {locationItem.highlightText}
          </motion.p>
          {!isBairro && (
            <motion.p 
              className="mt-2 text-xs text-[#22C7E5] font-mono font-bold uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ⚡ Distância de Penha: {distance} km • Deslocamento em ~{timeMins} minutos • Suporte 24h
            </motion.p>
          )}
        </div>
      </section>

      {/* Programmatic Unique Content Section (500+ words) */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main program text */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200/60 leading-relaxed text-slate-700 space-y-6 text-sm sm:text-base font-medium">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-950 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
                <ShieldCheck className="text-[#0E86D4]" />
                <span>Atendimento de Refrigeração em {name}</span>
              </h2>
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
              <p>{paragraph3}</p>
              <div className="p-5 rounded-2xl bg-[#E8F6FB] border border-[#22C7E5]/20 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <h4 className="font-black uppercase text-slate-900 text-sm">Precisa de orçamento imediato?</h4>
                  <p className="text-xs text-slate-600 mt-1">Converse com nosso plantão de atendimento agora.</p>
                </div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="bg-[#FF7A1A] hover:bg-[#E5640A] text-white font-black px-6 py-3 rounded-xl text-sm flex items-center gap-2 transition-all active:scale-95 whitespace-nowrap shadow-md shadow-orange-500/15">
                  <MessageCircle size={18} />
                  <span>Enviar WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Grid of the 9 services */}
            <div>
              <h3 className="text-xl font-black uppercase text-slate-950 tracking-tight mb-6 flex items-center gap-2">
                <Container className="text-[#FF7A1A]" />
                <span>Nossos Serviços Disponíveis em {name}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {servicesData.map((s, idx) => (
                  <Link 
                    key={s.id}
                    to={`/servicos/${s.slug}`}
                    className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#22C7E5]/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[#22C7E5] font-black block mb-2 text-xl">❄️</span>
                      <h4 className="font-black text-slate-900 group-hover:text-[#0E86D4] transition-colors uppercase text-sm tracking-tight">{s.title}</h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{s.shortDesc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#0E86D4] mt-4 inline-flex items-center gap-1 group-hover:underline">
                      <span>Ver detalhes</span>
                      <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Por que a BC em Local */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-black uppercase text-slate-950 tracking-tight mb-6 border-b border-slate-100 pb-3">
                Por que escolher a BC Refrigeração em {name}?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle className="text-emerald-500 shrink-0 w-5 h-5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Plantão Ágil de Deslocamento</h4>
                    <p className="text-xs text-slate-600 mt-1">Nossos carros de oficina móvel estão sempre prontos com manifold digitais e soldas.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="text-[#0E86D4] shrink-0 w-5 h-5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Garantia por Escrito</h4>
                    <p className="text-xs text-slate-600 mt-1">Todos os nossos serviços de refrigeração industrial e comercial possuem garantia de 90 dias.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-[#FF7A1A] shrink-0 w-5 h-5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Suporte Emergencial 24h</h4>
                    <p className="text-xs text-slate-600 mt-1">Ideal para frotas de container reefer e câmaras de resfriados que não podem parar.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="text-[#22C7E5] shrink-0 w-5 h-5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Peças Originais Próprias</h4>
                    <p className="text-xs text-slate-600 mt-1">Nossa própria loja de peças em Penha garante componentes imediatos e homologados.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local FAQs */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-black uppercase text-slate-950 tracking-tight mb-6 flex items-center gap-1.5">
                <HelpCircle className="text-[#FF7A1A]" />
                <span>Perguntas Frequentes — {name}</span>
              </h3>
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-slate-900 text-sm">A BC Refrigeração atende residências e comércios em {name}?</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Sim! Atendemos tanto clientes residenciais (conserto de geladeiras, máquinas lava e seca e ar-condicionado) quanto grandes estabelecimentos comerciais, adegas, supermercados, postos de combustíveis e portos na cidade de {name}.</p>
                </div>
                <div className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-slate-900 text-sm">Qual o valor da taxa de visita técnica para {name}?</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">O valor da taxa de deslocamento e avaliação técnica para a região de {name} é bastante competitivo e costuma ser abatido integralmente do orçamento caso o conserto seja aprovado e executado por nossas equipes.</p>
                </div>
                <div className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-slate-900 text-sm">Como funciona o agendamento em {name}?</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Você pode agendar pelo telefone fixo (47) 3305-9452 ou pelo WhatsApp. Nossa equipe comercial coordena a vinda da equipe técnica no melhor dia e horário para você, enviando relatórios após o diagnóstico.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - internal mesh mapping */}
          <div className="space-y-6">
            {/* CTA panel */}
            <div className="bg-gradient-to-br from-[#051726] to-[#0A2540] text-white p-6 rounded-3xl shadow-lg border border-slate-800">
              <h3 className="text-lg font-black uppercase tracking-wide">Atendimento Comercial</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">Ligue ou envie uma mensagem para obter cotações para {name}. Oferecemos suporte rápido.</p>
              
              <div className="mt-5 space-y-3">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-emerald-600 text-white p-3 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95">
                  <MessageCircle size={18} />
                  <span>Atendimento WhatsApp</span>
                </a>
                <a href={`tel:+554733059452`} className="flex items-center justify-center gap-2 bg-[#0E86D4] hover:bg-[#0E4C7A] text-white p-3 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95">
                  <Phone size={18} />
                  <span>Ligar: (47) 3305-9452</span>
                </a>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 text-center font-semibold">📍 Atendimento de Segunda a Sábado</p>
            </div>

            {/* Mesh Link list of neighboring locations */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-md">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#0E86D4] mb-3 flex items-center gap-1">
                <MapPin size={12} />
                <span>Outros Locais Atendidos</span>
              </h4>
              <p className="text-[10px] text-slate-500 mb-3 leading-relaxed">Também possuímos equipes prestando assistência em refrigeração comercial e reefer nas seguintes localidades próximas:</p>
              <div className="flex flex-col gap-1.5 text-xs">
                {neighbors.map(n => (
                  <Link 
                    key={n.slug} 
                    to={n.type === 'bairro' ? `/refrigeracao/penha/${n.slug}` : `/refrigeracao/${n.slug}`}
                    className="text-slate-600 hover:text-[#0E86D4] font-semibold flex items-center gap-1.5 py-1 transition-colors hover:bg-slate-50 px-2 rounded-lg"
                  >
                    <span>📍</span>
                    <span>{n.name} {n.type === 'bairro' ? '(Penha)' : ''}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Distance summary if city */}
            {!isBairro && (
              <div className="bg-[#E8F6FB] p-5 rounded-3xl border border-[#22C7E5]/15 text-xs space-y-2">
                <p className="font-bold text-slate-900">⚡ Informações de Rota:</p>
                <p className="text-slate-600 leading-relaxed">As saídas das equipes de Penha/SC em direção a {name} utilizam as rodovias principais catarinenses (como BR-101 e acessos secundários), garantindo tempos mínimos de trânsito em chamados urgentes.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Promo Image Section tailored to the current location */}
      <PagePromoImage 
        title={`Atendimento Logístico de Refrigeração para ${name} / SC`}
        description={`Nossas viaturas de suporte móvel partem diretamente de nossa sede própria e centralizada em Penha para prestar atendimento técnico de alta confiabilidade em ${name}. Garantia de peças originais e agilidade no diagnóstico.`}
        badge="Sede Própria & Frota Local"
      />

      {/* Video section before the footer */}
      <VideoSection 
        title="Infraestrutura de Alto Padrão"
        subtitle="Veja como nossa sede física e equipes móveis atendem com excelência todas as demandas térmicas comerciais e industriais em Santa Catarina."
      />
    </div>
  );
};
