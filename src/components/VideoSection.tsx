import React from 'react';
import { motion } from 'motion/react';
import { Play, ShieldCheck, Sparkles } from 'lucide-react';

interface VideoSectionProps {
  title?: string;
  subtitle?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ 
  title = "Estrutura e Qualidade em Movimento", 
  subtitle = "Veja em detalhes nosso laboratório, equipamentos avançados e frota de pronto atendimento em ação por toda Santa Catarina!" 
}) => {
  const videoUrl = "https://img.novaspersianascuritiba.com.br/bc-refrigeracao.mp4";

  return (
    <section className="relative bg-slate-900 border-y border-slate-800 py-16 px-4 overflow-hidden font-sans">
      {/* Cold cybernetic ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22C7E5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0E86D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header with visual accents */}
        <motion.div 
          className="text-center mb-10 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[#22C7E5] font-mono text-[10px] uppercase tracking-widest font-black">
            <Sparkles size={12} className="animate-pulse" />
            <span>Demonstração de Trabalho</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            {title}
          </h3>
          
          <p className="text-slate-400 font-medium max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Video Player Frame */}
        <motion.div 
          className="w-full relative bg-slate-950 rounded-3xl p-[1px] shadow-[0_15px_40px_rgba(34,199,229,0.15)] border border-slate-800 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Decorative subtle border light */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#22C7E5]/10 via-transparent to-[#0E86D4]/10 rounded-3xl pointer-events-none z-10" />

          {/* HTML5 Premium Video element */}
          <div className="w-full aspect-video rounded-[22px] overflow-hidden bg-slate-950 relative">
            <video 
              className="w-full h-full object-cover rounded-[22px]"
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              controls
              referrerPolicy="no-referrer"
              poster="https://img.novaspersianascuritiba.com.br/bc-refrigeracao-penha-sc.webp"
            />
          </div>
        </motion.div>

        {/* Value seals under the video */}
        <motion.div 
          className="mt-6 flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-mono font-bold uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="flex items-center gap-1.5 bg-slate-800/40 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
            <ShieldCheck size={14} className="text-emerald-400" />
            Tecnologia Inverter &amp; Reefer
          </span>
          <span className="flex items-center gap-1.5 bg-slate-800/40 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
            <Play size={12} className="text-[#22C7E5]" />
            Atendimento Móvel 100% Ativo
          </span>
        </motion.div>
      </div>
    </section>
  );
};
