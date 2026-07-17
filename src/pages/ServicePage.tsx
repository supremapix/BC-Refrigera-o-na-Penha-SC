import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  HelpCircle, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Info, 
  Wrench,
  MapPin,
  MessageCircle,
  Truck,
  Sparkles,
  Phone
} from 'lucide-react';
import { servicesData, companyData, cidadesAtendidas, bairrosPenha, getServiceText } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PagePromoImage } from '../components/PagePromoImage';
import { VideoSection } from '../components/VideoSection';

export const ServicePage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  // Find the exact service in our siteData
  const service = servicesData.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="py-24 px-4 text-center bg-[#051726] text-white font-sans min-h-screen flex flex-col justify-center items-center">
        <Info size={48} className="text-[#FF7A1A] mb-4 animate-bounce" />
        <h1 className="text-3xl font-black uppercase">Serviço não encontrado</h1>
        <p className="text-slate-400 mt-2">O serviço solicitado não está em nosso catálogo ativo.</p>
        <Link to="/" className="mt-6 bg-[#FF7A1A] text-white font-bold px-6 py-3 rounded-full hover:bg-[#E5640A] transition-colors">
          Voltar para Home
        </Link>
      </div>
    );
  }

  // Generate customized message for WhatsApp button
  const waMessage = encodeURIComponent(`Olá! Vim pelo site e preciso de um orçamento de ${service.title} para o meu equipamento.`);
  const waUrl = `https://wa.me/554733059452?text=${waMessage}`;

  // Local cities to link at the bottom (dynamic internal linking mesh)
  const nearbyCities = cidadesAtendidas.slice(0, 8);
  const localBairros = bairrosPenha.slice(0, 6);

  // Generate specialized schemas for SEO
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
        "name": "Serviços",
        "item": "https://www.bcrefrigeracaosc.com.br"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.bcrefrigeracaosc.com.br/servicos/${service.slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@type": "HVACBusiness",
      "name": companyData.name,
      "image": "https://www.bcrefrigeracaosc.com.br/bc-logo-refrigeracao%20copy%20copy.png",
      "telephone": "+554733059452",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyData.address,
        "addressLocality": companyData.city,
        "addressRegion": companyData.stateShort,
        "postalCode": companyData.zip,
        "addressCountry": "BR"
      }
    },
    "areaServed": cidadesAtendidas.map(c => ({
      "@type": "City",
      "name": c.name
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Refrigeração",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">
      <EnhancedSEO 
        title={`${service.title} em Penha e Região`}
        description={`${service.shortDesc} Atendimento urgente no litoral catarinense com técnicos especialistas. Telefone: (47) 3305-9452.`}
        canonicalPath={`/servicos/${service.slug}`}
        keywords={[service.title, `reparo de ${service.title}`, `assistência ${service.title}`, `conserto de ${service.title} penha sc`]}
        schema={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      {/* Breadcrumb section */}
      <div className="bg-[#051726] border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#22C7E5] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-slate-300">Serviços</span>
          <ChevronRight size={12} />
          <span className="text-[#22C7E5] font-semibold">{service.title}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative bg-gradient-to-b from-[#051726] to-[#0A2540] text-white py-16 lg:py-24 px-4 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C7E5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[#22C7E5] font-mono text-xs uppercase tracking-wider mb-4 font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={12} />
            <span>Plantão de Atendimento em Penha e SC</span>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {service.headline}
          </motion.h1>
          <motion.p 
            className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {service.shortDesc}
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FF7A1A] hover:bg-[#E5640A] text-white px-8 py-4 rounded-2xl font-black text-lg tracking-wide transition-all shadow-[0_4px_20px_rgba(255,122,26,0.4)] hover:shadow-[0_4px_25px_rgba(255,122,26,0.6)] flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} className="animate-bounce" />
              <span>Solicitar Orçamento Grátis</span>
            </a>
            <a 
              href={`tel:+554733059452`} 
              className="border border-slate-700 hover:border-slate-500 bg-[#051726]/50 text-white px-8 py-4 rounded-2xl font-bold text-lg tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} className="text-[#22C7E5]" />
              <span>Ligar: (47) 3305-9452</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive text content - 600+ words unique */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content col (2 cols wide) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-150/80 leading-relaxed text-slate-700 space-y-6 text-sm sm:text-base font-medium">
              <h2 className="text-2xl font-black uppercase text-slate-950 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-4">
                <Wrench className="text-[#0E86D4]" />
                <span>Análise Técnica Detalhada do Serviço</span>
              </h2>
              
              {/* Programmable 600+ unique SEO texts */}
              <p>{getServiceText(service.id, 1, "Penha")}</p>
              
              <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-[#0E86D4]/5 to-[#22C7E5]/5 border border-[#0E86D4]/10">
                <p className="font-bold text-slate-900 flex items-center gap-2 text-base uppercase">
                  <ShieldCheck className="text-emerald-500" />
                  <span>Diferencial BC Refrigeração</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-600">
                  Nossos reparos contam com rastreamento eletrônico, verificação de ciclos térmicos e carga de gás por peso utilizando ferramental manifold digital computadorizado de última geração. Garantia estendida de 90 dias por escrito.
                </p>
              </div>

              <p>{getServiceText(service.id, 2, "Penha")}</p>
              <p>{getServiceText(service.id, 3, "Penha")}</p>
            </div>

            {/* Problems and Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problems Solved */}
              <div className="bg-[#051726] text-white rounded-3xl p-6 sm:p-8 shadow-md">
                <h3 className="text-lg font-black uppercase text-[#22C7E5] tracking-wide mb-4 border-b border-slate-800 pb-3 flex items-center gap-2">
                  <span>⚠️</span> Sinais de Problemas comuns
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {service.problemsSolved.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-red-500 font-bold shrink-0">✕</span>
                      <span className="text-slate-300">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md">
                <h3 className="text-lg font-black uppercase text-slate-950 tracking-wide mb-4 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <CheckCircle className="text-emerald-500" /> Vantagens e Benefícios
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span className="text-slate-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service steps */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-md">
              <h3 className="text-xl font-black uppercase text-slate-950 tracking-tight mb-8 border-b border-slate-100 pb-4 flex items-center gap-2">
                <Truck className="text-[#0E86D4]" />
                <span>Como Funciona o Nosso Atendimento</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="w-10 h-10 rounded-full bg-[#0E86D4] text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                      {idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-slate-950 mb-2">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ section */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-md">
              <h3 className="text-xl font-black uppercase text-slate-950 tracking-tight mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
                <HelpCircle className="text-[#FF7A1A]" />
                <span>Dúvidas Frequentes sobre este Serviço</span>
              </h3>
              <div className="space-y-6">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0">
                    <h4 className="text-base font-bold text-slate-900 flex gap-2">
                      <span className="text-[#0E86D4]">Q:</span>
                      <span>{faq.question}</span>
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (1 col wide) */}
          <div className="space-y-6">
            {/* Quick contact card */}
            <div className="bg-gradient-to-br from-[#051726] to-[#0E4C7A] text-white rounded-3xl p-6 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C7E5]/15 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-black uppercase text-white tracking-wide">Orçamento Imediato</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">Precisa de um diagnóstico urgente de refrigeração no seu local? Fale conosco agora!</p>
              
              <div className="mt-6 space-y-4">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#22C55E] hover:bg-emerald-600 text-white p-3.5 rounded-xl font-black text-sm shadow-md transition-all active:scale-95">
                  <MessageCircle size={20} />
                  <span>CHAMAR NO WHATSAPP</span>
                </a>
                <a href={`tel:+554733059452`} className="flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 p-3.5 rounded-xl font-black text-sm shadow-md transition-all active:scale-95">
                  <Phone size={20} className="text-[#0E86D4]" />
                  <span>LIGAR: (47) 3305-9452</span>
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] text-slate-400 font-semibold space-y-1">
                <p>📍 Atendimento em Penha e raio de 200km</p>
                <p>⚡ Atendimento de emergência 24h</p>
              </div>
            </div>

            {/* Brands Served */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-md">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#22C7E5] mb-3">Marcas Atendidas</h4>
              <div className="flex flex-wrap gap-2">
                {service.brands.map((b, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl font-bold text-xs">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Cities linking sidebar widget */}
            <div className="bg-white border border-[#E8F6FB] rounded-3xl p-6 shadow-md">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#0E86D4] mb-3 flex items-center gap-1">
                <MapPin size={12} />
                <span>Cidades Atendidas</span>
              </h4>
              <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">Oferecemos suporte técnico de refrigeração neste serviço em mais de 30 cidades de Santa Catarina:</p>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {nearbyCities.map(c => (
                  <Link key={c.slug} to={`/refrigeracao/${c.slug}`} className="text-slate-600 hover:text-[#0E86D4] font-semibold flex items-center gap-1 py-1 truncate">
                    <span className="text-[#22C7E5]">📍</span>
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bairros de Penha widget */}
            <div className="bg-white border border-[#E8F6FB] rounded-3xl p-6 shadow-md">
              <h4 className="text-xs uppercase tracking-widest font-black text-[#FF7A1A] mb-3 flex items-center gap-1">
                <MapPin size={12} />
                <span>Bairros em Penha/SC</span>
              </h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {localBairros.map(b => (
                  <Link key={b.slug} to={`/refrigeracao/penha/${b.slug}`} className="text-slate-600 hover:text-[#FF7A1A] font-semibold flex items-center gap-1 py-1 truncate">
                    <span>🏠</span>
                    <span>{b.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Promo Image Section tailored to the current service */}
      <PagePromoImage 
        title={`Estrutura Especializada para Atendimento de ${service.title}`}
        description={`Dispomos de ferramental completo de ponta e equipe qualificada para realizar ${service.title} com o máximo padrão de qualidade, segurança e conformidade técnica no litoral catarinense.`}
        badge="Suporte Técnico Autorizado"
      />

      {/* Video section before the footer */}
      <VideoSection 
        title="Qualidade e Eficiência Técnica Comprovadas"
        subtitle="Confira em nosso vídeo institucional a estrutura física e a precisão técnica aplicadas em cada conserto de refrigeração."
      />
    </div>
  );
};
