import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const logoUrl = "https://img.novaspersianascuritiba.com.br/bc-logo.webp";

  // Responsive and exact size mappings
  const dimensions = {
    sm: { container: 'w-12 h-12', img: 'w-full h-full', border: 'p-[1.5px]' },
    md: { container: 'w-16 h-16', img: 'w-full h-full', border: 'p-[2px]' },
    lg: { container: 'w-36 h-36 sm:w-40 sm:h-40', img: 'w-full h-full', border: 'p-[2px]' },
    xl: { container: 'w-64 h-64 md:w-72 md:h-72', img: 'w-full h-full', border: 'p-[2.5px]' },
  }[size];

  // Adjust snowflake decoration offsets and sizes programmatically
  const starDimensions = {
    sm: { size1: 10, size2: 8, offset1: '-top-1 -right-1', offset2: '-bottom-0.5 -left-0.5' },
    md: { size1: 12, size2: 10, offset1: '-top-1.5 -right-1.5', offset2: '-bottom-1 -left-1' },
    lg: { size1: 22, size2: 18, offset1: '-top-2 -right-2', offset2: '-bottom-1.5 -left-1.5' },
    xl: { size1: 32, size2: 26, offset1: '-top-4 -right-4', offset2: '-bottom-3 -left-3' },
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* 1. Ice aura glowing halo (idle breathing aura, expands and shines brighter) */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#22C7E5]/50 via-[#0E86D4]/35 to-transparent blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.7, 1.0, 0.7],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 2. Rotating external ice-shards boundary ring */}
      <motion.div
        className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#22C7E5]/50 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 3. Second fast counter-rotating inner orbital border for premium visual weight */}
      <motion.div
        className="absolute inset-[-12px] rounded-full border border-dotted border-[#0E86D4]/40 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* 4. Outer Container with Frosted-Glass Border Gradient */}
      <motion.div
        className={`relative ${dimensions.container} rounded-full bg-gradient-to-br from-[#22C7E5] via-[#0E86D4] to-[#22C7E5] ${dimensions.border} shadow-[0_0_35px_rgba(34,199,229,0.55)] flex items-center justify-center overflow-hidden`}
        whileHover={{
          scale: 1.06,
          rotate: -1.5,
          boxShadow: "0 0 35px rgba(34, 199, 229, 0.75), inset 0 0 15px rgba(255,255,255,0.2)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 280, damping: 14 }}
      >
        {/* Soft frosted texture pattern */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px] pointer-events-none" />

        {/* Gloss glass curve reflections */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* Inner solid deep ice chamber */}
        <div className="w-full h-full rounded-full bg-[#051726] flex items-center justify-center overflow-hidden relative">
          
          {/* Logo WebP image */}
          <img
            src={logoUrl}
            alt="BC Refrigeração Logo Oficial"
            className={`${dimensions.img} object-contain z-10 transition-transform duration-500 scale-[1.32] hover:scale-[1.38]`}
            referrerPolicy="no-referrer"
          />

          {/* 5. Continuous Loop Ice Gleam Sweep (Reflexo de Brilho de Gelo) */}
          <motion.div
            className="absolute top-0 -inset-x-full h-full w-2/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
            animate={{
              left: ['-100%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut"
            }}
          />

          {/* Extra sweep triggered when parent is hovered/interacted */}
          <motion.div
            className="absolute top-0 -inset-x-full h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent skew-x-12 z-20 pointer-events-none"
            whileHover={{
              left: ['-100%', '200%'],
              transition: { duration: 0.8, ease: "easeOut" }
            }}
          />
        </div>

        {/* 6. Floating vector ice stars/sparkles around the rim */}
        <motion.div 
          className={`absolute ${starDimensions.offset1} text-[#22C7E5] z-30 pointer-events-none`}
          animate={{
            y: [0, -4, 0],
            rotate: [0, 45, 0],
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width={starDimensions.size1} height={starDimensions.size1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 2v20M17 5L7 19M19 17L5 7" />
          </svg>
        </motion.div>

        <motion.div 
          className={`absolute ${starDimensions.offset2} text-cyan-300 z-30 pointer-events-none`}
          animate={{
            y: [0, 3, 0],
            rotate: [0, -45, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        >
          <svg width={starDimensions.size2} height={starDimensions.size2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M12 2v20M17 5L7 19M19 17L5 7" />
          </svg>
         </motion.div>
      </motion.div>
    </div>
  );
};
