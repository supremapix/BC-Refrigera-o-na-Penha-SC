import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  ShieldCheck, 
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { companyData } from '../data/siteData';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { PagePromoImage } from '../components/PagePromoImage';
import { VideoSection } from '../components/VideoSection';
import { HeroBackgroundVideo } from '../components/HeroBackgroundVideo';

export const ContatoPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Conserto de Container Reefer');
  const [message, setMessage] = useState('');

  // Form submission that crafts a WhatsApp link dynamically
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const baseText = `Olá BC Refrigeração! Me chamo *${name}*.\n` +
                     `📞 Telefone: *${phone}*\n` +
                     `🛠️ Serviço de interesse: *${service}*\n` +
                     `✉️ Mensagem: _${message}_`;
                     
    const waUrl = `https://wa.me/554733059452?text=${encodeURIComponent(baseText)}`;
    window.open(waUrl, '_blank');
  };

  const addressQuery = encodeURIComponent(`${companyData.address}, ${companyData.city}, ${companyData.state}`);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

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
        "name": "Contato",
        "item": "https://www.bcrefrigeracaosc.com.br/contato"
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 pb-16">
      <EnhancedSEO
        title="Fale Conosco | Contato e Orçamentos Rápidos"
        description="Fale com a BC Refrigeração. Ligue para (47) 3305-9452 ou mande um WhatsApp. Atendimento comercial e emergencial 24h em Penha e SC."
        canonicalPath="/contato"
        keywords={["contato bc refrigeração", "telefone bc refrigeração penha", "orçamento refrigeração sc", "whatsapp bc refrigeração"]}
        schema={breadcrumbSchema}
      />

      {/* Header Info */}
      <section className="relative bg-[#051726] text-white py-16 px-4 text-center border-b border-slate-900 overflow-hidden">
        <HeroBackgroundVideo />
        <div className="max-w-4xl mx-auto relative z-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[#22C7E5] font-mono text-xs uppercase tracking-widest font-black mb-4 z-20">
            <Sparkles size={12} className="animate-pulse" />
            <span>Contato Direto</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight z-20">Fale Conosco &amp; Peça Orçamento</h1>
          <p className="mt-4 text-slate-300 max-w-xl mx-auto text-xs sm:text-base font-semibold leading-relaxed z-20">
            Estamos prontos para atender seu chamado residencial, comercial, industrial ou emergencial reefer de forma ágil em toda Penha e cidades de SC.
          </p>
        </div>
      </section>

      {/* Grid of Contact Elements */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column (5 cols wide) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-md space-y-6">
              <h2 className="text-xl font-black uppercase text-slate-950 tracking-tight pb-3 border-b border-slate-100 flex items-center gap-2">
                <Award className="text-[#0E86D4]" />
                <span>Nossos Canais de Atendimento</span>
              </h2>

              <div className="space-y-5">
                {/* Tel card */}
                <a 
                  id="contato-phone-anchor"
                  href={companyData.phoneLink} 
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0E86D4]/10 text-[#0E86D4] flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-black tracking-wider text-[#0E86D4]">Telefone Fixo</span>
                    <span className="block text-lg font-black text-slate-950 group-hover:text-[#0E86D4] transition-colors mt-0.5">{companyData.phone}</span>
                    <span className="block text-[11px] text-slate-500 font-semibold mt-1">Ligue para agendar serviços ou tirar dúvidas rápidas</span>
                  </div>
                </a>

                {/* WhatsApp card */}
                <a 
                  id="contato-whatsapp-anchor"
                  href={companyData.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#22C55E]/10 text-[#22C55E] flex items-center justify-center shrink-0">
                    <MessageCircle size={26} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-black tracking-wider text-[#22C55E]">WhatsApp de Plantão</span>
                    <span className="block text-lg font-black text-slate-950 group-hover:text-emerald-500 transition-colors mt-0.5">(47) 3305-9452</span>
                    <span className="block text-[11px] text-slate-500 font-semibold mt-1">Envie fotos do equipamento ou problemas para orçamento rápido</span>
                  </div>
                </a>

                {/* E-mail card */}
                <a 
                  id="contato-email-anchor"
                  href={`mailto:${companyData.email}`} 
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#22C7E5]/10 text-[#22C7E5] flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-black tracking-wider text-[#22C7E5]">E-mail Corporativo</span>
                    <span className="block text-sm sm:text-base font-black text-slate-950 group-hover:text-[#22C7E5] transition-colors mt-0.5 truncate">{companyData.email}</span>
                    <span className="block text-[11px] text-slate-500 font-semibold mt-1">Para propostas, parcerias ou termos de fornecimento</span>
                  </div>
                </a>

                {/* Address Card */}
                <a 
                  id="contato-address-anchor"
                  href={mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-black tracking-wider text-[#FF7A1A]">Endereço Oficial (NAP)</span>
                    <span className="block text-sm sm:text-base font-black text-slate-950 group-hover:text-orange-500 transition-colors mt-0.5">
                      {companyData.address}
                    </span>
                    <span className="block text-xs text-slate-600 font-bold mt-1">
                      {companyData.neighborhood}, {companyData.city} - {companyData.stateShort}
                    </span>
                    <span className="block text-[11px] text-slate-500 font-semibold mt-1">CEP: {companyData.zip} (Toque para ver rota no Maps)</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="bg-[#051726] text-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-800 space-y-4">
              <h3 className="text-sm uppercase tracking-widest font-black text-[#22C7E5] flex items-center gap-1.5">
                <Clock size={16} />
                <span>Horários de Atendimento</span>
              </h3>
              <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Segunda a Sexta:</span>
                  <span className="text-white font-bold">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Sábado:</span>
                  <span className="text-white font-bold">08:00 às 12:00</span>
                </div>
                <div className="flex justify-between text-[#22C55E]">
                  <span>Domingo e Feriados:</span>
                  <span className="font-bold">Plantão 24h via WhatsApp</span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold italic mt-4">
                * Para frotistas de containers e cargas de câmaras congeladoras, nosso suporte técnico móvel possui escala de atendimento 24 horas.
              </p>
            </div>
          </div>

          {/* Form Column (7 cols wide) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 p-6 sm:p-10 rounded-3xl shadow-md space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-slate-950 tracking-tight flex items-center gap-2">
                <span>📝</span>
                <span>Formulário de Orçamento Rápido</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                Preencha os campos abaixo com os seus dados de contato e o problema do seu equipamento. Ao clicar em enviar, você será redirecionado para o nosso WhatsApp com a mensagem pré-preenchida para agilizarmos a sua cotação.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 font-sans" id="budget-contact-form">
              {/* Name */}
              <div>
                <label htmlFor="form-name" className="block text-xs uppercase font-black text-slate-700 mb-1.5">Seu Nome Completo</label>
                <input 
                  type="text" 
                  id="form-name"
                  required 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João da Silva" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#22C7E5] focus:bg-white rounded-xl p-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="form-phone" className="block text-xs uppercase font-black text-slate-700 mb-1.5">Seu Telefone ou WhatsApp</label>
                <input 
                  type="tel" 
                  id="form-phone"
                  required 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ex: (47) 99999-9999" 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#22C7E5] focus:bg-white rounded-xl p-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>

              {/* Service requested Dropdown */}
              <div>
                <label htmlFor="form-service" className="block text-xs uppercase font-black text-slate-700 mb-1.5">Serviço Desejado</label>
                <select 
                  id="form-service"
                  value={service} 
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#22C7E5] focus:bg-white rounded-xl p-3 text-sm font-semibold outline-none transition-colors appearance-none"
                >
                  <option value="Conserto de Container Reefer">❄️ Conserto de Container Reefer</option>
                  <option value="Loja de Peças para Refrigeração">❄️ Loja de Peças para Refrigeração</option>
                  <option value="Instalação / Manutenção de Ar-Condicionado">❄️ Ar-Condicionado</option>
                  <option value="Conserto de Máquinas Lava e Seca">❄️ Conserto de Lava e Seca</option>
                  <option value="Câmara Frigorífica Comercial">❄️ Câmara Frigorífica</option>
                  <option value="Walk in Cooler / Beer Cave">❄️ Walk-in Cooler ou Beer Cave</option>
                  <option value="Conserto de Geladeiras Domésticas">❄️ Conserto de Geladeiras</option>
                  <option value="Chiller / Refrigeração Industrial">❄️ Chiller Industrial</option>
                </select>
              </div>

              {/* Custom Message */}
              <div>
                <label htmlFor="form-message" className="block text-xs uppercase font-black text-slate-700 mb-1.5">Escreva detalhes do seu problema ou equipamento</label>
                <textarea 
                  id="form-message"
                  required 
                  rows={4}
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Minha câmara fria está congelando a serpentina e não atinge o setpoint térmico ou preciso de PTI para 3 containers no terminal de Navegantes..." 
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#22C7E5] focus:bg-white rounded-xl p-3 text-sm font-semibold outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit CTA button */}
              <div>
                <button
                  type="submit"
                  id="form-submit-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF7A1A] hover:bg-[#E5640A] text-white p-4 rounded-xl font-black text-base shadow-md shadow-orange-500/10 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send size={18} />
                  <span>ENVIAR SOLICITAÇÃO VIA WHATSAPP</span>
                </button>
              </div>
            </form>

            {/* Shield Seal */}
            <div className="flex items-center gap-2 pt-4 border-t border-slate-100 justify-center">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span className="font-mono text-[11px] font-bold text-slate-500 tracking-wide">
                Navegação segura • Canal oficial direto sem intermediários
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GOOGLE MAPS IFRAME SECTION (Lazy-loaded, compliant with specifications) */}
      <section className="mt-8 max-w-7xl mx-auto px-4" id="office-location-maps-section">
        <div className="bg-white border border-slate-200/80 p-4 rounded-3xl shadow-md">
          <div className="flex justify-between items-center mb-4 px-2">
            <div>
              <h3 className="font-black uppercase text-slate-950 text-base flex items-center gap-1">
                <MapPin size={16} className="text-[#FF7A1A]" />
                <span>Nossa Localização Oficial em Penha</span>
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">{companyData.address} - Centro, Penha/SC (Próximo aos comércios principais)</p>
            </div>
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-[#0E86D4] hover:underline font-bold flex items-center gap-1 whitespace-nowrap"
            >
              <span>Abrir rotas no Google Maps</span>
              <ChevronRight size={14} />
            </a>
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-slate-150 aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
            <iframe
              id="google-maps-embed-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.4230233480397!2d-48.648375!3d-26.7694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df2be9871167cf%3A0xe5a3630f576e27a6!2sAv.%20Ant%C3%B4nio%20J.%20Tavares%2C%2090%20-%20Centro%2C%20Penha%20-%20SC%2C%2088385-000!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps BC Refrigeração Penha SC"
            />
          </div>
        </div>
      </section>

      {/* Custom Promo Image Section */}
      <PagePromoImage 
        title="Estrutura e Confiança de Nossa Sede em Penha / SC"
        description="Venha nos visitar no Centro de Penha ou agende um diagnóstico no local com nossos técnicos. Dispomos de amplo estoque próprio de peças originais e laboratório de refrigeração avançado."
        badge="Nossa Base Operacional"
      />

      {/* Custom Video Section (before footer) */}
      <VideoSection 
        title="Conheça Nossos Equipamentos em Ação"
        subtitle="Assista ao nosso vídeo operacional e comprove a seriedade técnica, ferramentas avançadas e frota dedicada da BC Refrigeração."
      />
    </div>
  );
};
