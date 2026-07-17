import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

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
    <section className="relative bg-white border-y border-slate-100 py-16 px-4 overflow-hidden font-sans">
      {/* Soft warm/cool background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text details column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E86D4]/5 border border-[#0E86D4]/10 text-[#0E86D4] font-mono text-[10px] uppercase tracking-widest font-black"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Building2 size={12} />
              <span>{badge}</span>
            </motion.div>

            <motion.h3 
              className="text-2xl sm:text-4xl font-black uppercase text-slate-950 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h3>

            <motion.p 
              className="text-slate-600 font-semibold text-xs sm:text-sm leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Checklist highlights */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700 font-bold text-xs sm:text-sm">
                  <CheckCircle2 size={16} className="text-[#22C55E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Showcase column (5 cols on desktop) */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md bg-slate-100 rounded-3xl p-1.5 shadow-[0_15px_30px_rgba(5,23,38,0.08)] border border-slate-200 hover:scale-[1.01] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#22C7E5]/5 to-transparent rounded-[22px] pointer-events-none" />
              
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto object-cover rounded-[20px] aspect-[4/3] sm:aspect-[1.4]"
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
