import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowRight, ShieldCheck } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const profileUrl = "https://www.instagram.com/bc.refrigeracaosc/";
  const embedUrl = "https://www.instagram.com/bc.refrigeracaosc/embed";

  return (
    <section 
      id="instagram-feed-section" 
      className="relative bg-gray-50/50 border-y border-gray-200/80 py-12 px-4 overflow-hidden font-sans"
    >
      {/* Decorative blurry glowing circles for modern ambient look */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-pink-300/10 to-yellow-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Official Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8134AF] via-[#DD2A7B] to-[#F58529] text-white font-mono text-[10px] font-black tracking-widest uppercase mb-4 shadow-md">
            <Instagram size={12} className="animate-pulse" />
            <span>Social Real @bc.refrigeracaosc</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight">
            Siga-nos no Instagram • <span className="text-[#F58529]">@bc.refrigeracaosc</span>
          </h3>
          
          {/* Description */}
          <p className="mt-3 text-gray-600 font-medium max-w-xl text-xs sm:text-sm leading-relaxed">
            Acompanhe nossos stories diários, rotinas de manutenção de container reefer, dicas de lavadora e secadora de roupas e novidades em climatização!
          </p>
        </motion.div>

        {/* Embedded Feed Card */}
        <motion.div
          className="w-full max-w-xl bg-white border border-gray-200 rounded-3xl p-[5px] shadow-sm hover:scale-[1.01] transition-transform duration-300 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Iframe with responsive aspect ratio */}
          <div className="w-full aspect-[9/11] md:aspect-[4/5] rounded-[19px] overflow-hidden bg-gray-50 border border-gray-100 relative">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0 rounded-[19px]"
              allowFullScreen
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
              title="BC Refrigeração Instagram Feed"
            />
          </div>
        </motion.div>

        {/* Action Button & Trust Seal */}
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            id="instagram-follow-btn"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8134AF] via-[#DD2A7B] to-[#F58529] hover:brightness-110 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <Instagram size={18} />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>

          {/* Floating Trust Badge */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-5 py-3.5 rounded-2xl shrink-0">
            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
            <span className="font-mono text-xs font-bold text-gray-700 tracking-wide uppercase">
              Suporte Técnico Homologado • SC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
