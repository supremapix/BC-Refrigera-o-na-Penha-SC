import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUp, 
  Share2, 
  X, 
  MessageCircle, 
  Linkedin, 
  Copy, 
  Check, 
  HelpCircle
} from 'lucide-react';

export const FloatingUtilities: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedTikTok, setCopiedTikTok] = useState(false);
  
  const location = useLocation();
  const currentUrl = window.location.href;

  // Detect scroll to show/hide "Back to Top"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset copy states when modal is opened/closed
  useEffect(() => {
    if (!isShareOpen) {
      setCopied(false);
      setCopiedTikTok(false);
    }
  }, [isShareOpen]);

  // Determine descriptive text depending on the active page
  const getPageDescription = () => {
    const path = location.pathname;
    const defaultImg = "https://img.novaspersianascuritiba.com.br/bc-refrigeracao-penha-sc.webp";

    if (path === '/') {
      return {
        title: "BC Refrigeração - Líder em Refrigeração em Penha / SC",
        desc: "Conserto de Container Reefer 24h, Ar-Condicionado, Máquinas Lava e Seca e Refrigeração Comercial com atendimento rápido e peças originais em SC.",
        img: defaultImg
      };
    } else if (path.startsWith('/servicos/')) {
      const slug = path.split('/').pop() || '';
      const formattedSlug = slug.replace(/-/g, ' ').toUpperCase();
      return {
        title: `BC Refrigeração - Serviço Especializado de ${formattedSlug}`,
        desc: `Veja como realizamos assistência de altíssima performance para ${formattedSlug}. Atendimento ágil e garantia de 90 dias!`,
        img: defaultImg
      };
    } else if (path.startsWith('/refrigeracao/')) {
      const parts = path.split('/');
      const place = parts[parts.length - 1].replace(/-/g, ' ');
      const capitalizedPlace = place.charAt(0).toUpperCase() + place.slice(1);
      return {
        title: `BC Refrigeração - Assistência Técnica em ${capitalizedPlace} / SC`,
        desc: `Atendimento de refrigeração comercial, residencial e industrial em ${capitalizedPlace} e região. Frota rápida de assistência técnica!`,
        img: defaultImg
      };
    } else if (path === '/contato') {
      return {
        title: "Fale com a BC Refrigeração - Penha / SC",
        desc: "Peça seu orçamento grátis agora mesmo! Fale com nossos técnicos especialistas via Telefone, WhatsApp ou formulário online.",
        img: defaultImg
      };
    }

    return {
      title: "BC Refrigeração Penha / SC",
      desc: "Serviços profissionais de Refrigeração Comercial, Residencial, Industrial e Plantão Reefer 24 horas.",
      img: defaultImg
    };
  };

  const pageInfo = getPageDescription();
  const shareText = `${pageInfo.title}\n\n${pageInfo.desc}\n\nAcesse: ${currentUrl}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(`${pageInfo.title} - ${pageInfo.desc}\n\n${currentUrl}`);
  const encodedImage = encodeURIComponent(pageInfo.img);

  // Social Share URLs
  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(pageInfo.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodeURIComponent(pageInfo.title + ' - ' + pageInfo.desc)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTikTokShare = () => {
    // Since TikTok doesn't have a direct URL redirect API for general website links,
    // we copy the fully formatted description & link and instruct the user to use it.
    navigator.clipboard.writeText(`${pageInfo.title} #bcrefrigeracao #reefer #penhasc\n${currentUrl}`);
    setCopiedTikTok(true);
    setTimeout(() => setCopiedTikTok(false), 5000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons Group - Bottom Left (to avoid overlapping with floating WhatsApp on the right) */}
      <div className="fixed bottom-20 lg:bottom-6 left-4 lg:left-6 z-50 flex flex-col gap-3">
        {/* Share Button (Always Visible) */}
        <motion.button
          onClick={() => setIsShareOpen(true)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-[#22C7E5] to-[#0E86D4] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(34,199,229,0.4)] hover:shadow-[0_4px_25px_rgba(34,199,229,0.6)] cursor-pointer focus:outline-none"
          whileHover={{ scale: 1.1, rotate: 12 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Compartilhar página"
        >
          <Share2 size={20} />
        </motion.button>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={handleScrollToTop}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-12 h-12 rounded-full bg-[#FF7A1A] hover:bg-[#E5640A] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(255,122,26,0.4)] hover:shadow-[0_4px_25px_rgba(255,122,26,0.6)] cursor-pointer focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={22} className="animate-bounce" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Share Modal Backdrop & Card */}
      <AnimatePresence>
        {isShareOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Modal Backdrop overlay with heavy professional blur */}
            <motion.div 
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareOpen(false)}
            />

            {/* Modal Box */}
            <motion.div 
              className="relative w-full max-w-md bg-[#0A2540] border border-[#22C7E5]/30 rounded-3xl p-6 shadow-[0_20px_50px_rgba(5,23,38,0.8)] overflow-hidden text-white font-sans"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              {/* Subtle visual brand highlights */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C7E5]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FF7A1A]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button 
                onClick={() => setIsShareOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#22C7E5]/15 flex items-center justify-center mb-3">
                  <Share2 className="text-[#22C7E5]" size={24} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">
                  Compartilhar Página
                </h3>
                <p className="text-xs text-slate-300 font-semibold max-w-sm mb-5 leading-relaxed">
                  Espalhe facilidade! Divulgue a excelência da BC Refrigeração com seus amigos, clientes e redes sociais.
                </p>
              </div>

              {/* Visual preview card representing how the shared element looks */}
              <div className="bg-[#051726]/80 rounded-2xl p-3 border border-slate-800 flex gap-3 items-center mb-6">
                <img 
                  src="https://img.novaspersianascuritiba.com.br/bc-refrigeracao-penha-sc.webp" 
                  alt="Pré-visualização"
                  className="w-16 h-16 object-cover rounded-xl border border-slate-800 shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-[#22C7E5] truncate mb-0.5">{pageInfo.title}</h4>
                  <p className="text-[10px] text-slate-300 line-clamp-2 leading-relaxed">{pageInfo.desc}</p>
                </div>
              </div>

              {/* Share networks grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                
                {/* WhatsApp */}
                <a 
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 hover:bg-[#25D366]/10 border border-slate-800 hover:border-[#25D366]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-wide mt-2 text-slate-300 group-hover:text-white">WhatsApp</span>
                </a>

                {/* Facebook */}
                <a 
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 hover:bg-[#1877F2]/10 border border-slate-800 hover:border-[#1877F2]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {/* Facebook custom SVG */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold tracking-wide mt-2 text-slate-300 group-hover:text-white">Facebook</span>
                </a>

                {/* Twitter / X */}
                <a 
                  href={shareLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 hover:bg-[#1DA1F2]/10 border border-slate-800 hover:border-[#1DA1F2]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    {/* Twitter/X Custom Minimalist SVG */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold tracking-wide mt-2 text-slate-300 group-hover:text-white">Twitter / X</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 hover:bg-[#0A66C2]/10 border border-slate-800 hover:border-[#0A66C2]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-[10px] font-bold tracking-wide mt-2 text-slate-300 group-hover:text-white">LinkedIn</span>
                </a>

                {/* Pinterest */}
                <a 
                  href={shareLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 hover:bg-[#BD081C]/10 border border-slate-800 hover:border-[#BD081C]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#BD081C]/10 text-[#BD081C] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {/* Pinterest Custom SVG */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.91 6.46 9.39-.09-.8-.17-2.03.03-2.9.19-.82 1.21-5.13 1.21-5.13s-.31-.62-.31-1.54c0-1.44.84-2.52 1.88-2.52.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.27-1.95 3.27-4.77 0-2.49-1.79-4.24-4.35-4.24-2.96 0-4.7 2.22-4.7 4.51 0 .89.34 1.85.77 2.37.09.1.1.17.07.28-.08.33-.26 1.05-.3 1.19-.05.19-.16.23-.37.13-1.39-.65-2.26-2.67-2.26-4.3 0-3.5 2.54-6.72 7.34-6.72 3.85 0 6.85 2.75 6.85 6.41 0 3.83-2.41 6.91-5.76 6.91-1.12 0-2.18-.58-2.54-1.27l-.69 2.63c-.25.96-.93 2.16-1.39 2.91C10.09 21.89 11.02 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold tracking-wide mt-2 text-slate-300 group-hover:text-white">Pinterest</span>
                </a>

                {/* TikTok (Copy tailored script) */}
                <button 
                  onClick={handleTikTokShare}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 hover:bg-[#00f2fe]/10 border border-slate-800 hover:border-[#fe0979]/40 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center group-hover:scale-110 transition-transform relative">
                    {/* TikTok Custom SVG */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.13.97 1.06 2.33 1.7 3.79 1.86v3.91c-1.74-.06-3.41-.75-4.66-1.95-.12-.11-.23-.23-.34-.35-.04 1.93-.01 3.86-.02 5.79-.02 2.11-.64 4.23-1.89 5.92-1.68 2.23-4.43 3.52-7.21 3.32-2.82-.19-5.46-1.94-6.61-4.52-1.28-2.87-.72-6.42 1.4-8.72 1.76-1.89 4.38-2.61 6.84-1.96V11.5c-1.3-.43-2.77-.14-3.79.77-.99.88-1.32 2.33-.84 3.57.44 1.13 1.62 1.89 2.83 1.89 1.48.04 2.81-.97 3.12-2.42.1-.47.11-.96.1-1.44V.02z"/>
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold tracking-wide mt-2 text-slate-300 group-hover:text-white">TikTok</span>
                </button>

              </div>

              {/* Copy URL Row */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <label className="text-[10px] font-black uppercase tracking-wider text-[#22C7E5]">Copiar Link do Site</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value={currentUrl} 
                    className="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-[#22C7E5]/50 overflow-ellipsis"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className="px-4 rounded-xl bg-[#22C7E5] hover:bg-[#0E86D4] text-slate-950 hover:text-white flex items-center justify-center gap-1.5 text-xs font-black transition-all active:scale-95 cursor-pointer shrink-0"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              {/* Live Status Toasts for Clipboard events inside the modal */}
              <AnimatePresence>
                {copiedTikTok && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="mt-4 p-3 bg-[#22C7E5]/10 border border-[#22C7E5]/30 rounded-2xl text-left"
                  >
                    <p className="text-[11px] text-white font-bold mb-1 leading-normal flex items-center gap-1.5">
                      <Check size={14} className="text-[#22C55E]" />
                      Link e Tags copiados para o TikTok!
                    </p>
                    <p className="text-[10px] text-slate-300 leading-normal font-medium">
                      Abra o aplicativo TikTok e cole na descrição do seu vídeo ou na bio do seu perfil para divulgar.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
