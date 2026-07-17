import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface PagePromoImageProps {
  title: string;
  description: string;
  badge?: string;
  highlights?: string[];
}

export const PagePromoImage: React.FC<PagePromoImageProps> = ({
  title,
  description,
  badge = "Sede Própria & Frota",
  highlights = [
    "Oficina Completa e Moderna em Penha",
    "Estoque Imediato de Peças Originais",
    "Suporte Técnico Móvel e Emergencial"
  ]
}) => {
  const imageUrl = "https://img.novaspersianascuritiba.com.br/bc-refrigeracao-penha-sc.webp";

  return (
    <section className="relative bg-[#051726] text-white py-16 lg:py-24 px-4 overflow-hidden font-sans border-t border-b border-slate-900">
      {/* Soft warm/cool background glows behind text & image */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0E86D4]/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text details column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div 
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#22C7E5]/10 border border-[#22C7E5]/20 text-[#22C7E5] font-mono text-xs uppercase tracking-widest font-black"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Building2 size={13} className="text-[#22C7E5]" />
              <span>{badge}</span>
            </motion.div>

            <motion.h3 
              className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h3>

            <motion.p 
              className="text-slate-300 font-semibold text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Checklist highlights */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-md sm:max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-200 font-bold text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#22C55E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Showcase column (5 cols on desktop) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md bg-[#0A2540]/60 rounded-3xl p-1.5 shadow-[0_15px_40px_rgba(5,23,38,0.4)] border border-[#22C7E5]/20 hover:border-[#22C7E5]/40 hover:scale-[1.02] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#22C7E5]/5 to-transparent rounded-[22px] pointer-events-none" />
              
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto object-contain rounded-[20px] shadow-inner"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Verified technical team tag */}
              <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5">
                <Sparkles size={10} className="text-[#22C7E5] animate-pulse" />
                <span>Equipe Técnica BC Penha</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
