import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const servicePhrases = [
  "Conserto de Container Reefer 24h",
  "Manutenção de Ar-Condicionado",
  "Reparo de Máquina Lava e Seca",
  "Instalação de Câmara Frigorífica",
  "Montagem de Walk-In Cooler",
  "Projetos de Beer Cave Sob Medida",
  "Conserto de Geladeiras Frost Free",
  "Manutenção de Chiller Industrial",
  "PMOC de Ar-Condicionado Anvisa",
  "Loja de Peças de Refrigeração",
  "Reposição de Peças Originais",
  "Atendimento Técnico em Penha",
  "Instalação Split, Cassete e VRF",
  "Plantão Reefer em Portos de SC",
  "Contratos de Manutenção Comercial"
];

const descriptions = [
  "Equipe técnica homologada com frota móvel ativa para prestar o socorro térmico mais rápido de Santa Catarina.",
  "Mais de 10 anos de experiência prestando serviços de altíssima performance para residências, comércios e indústrias.",
  "Atendimento técnico especializado em um raio de até 200km a partir de nossa sede própria e completa em Penha / SC.",
  "Garantia de 90 dias com laudos técnicos oficiais e estoque imediato das melhores peças originais do mercado.",
  "Plantão emergencial de final de semana ativo para garantir a preservação de suas mercadorias perecíveis."
];

export const HeroTypewriter: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  // Sync descriptions to transition gracefully
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  // Typewriter Core Logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = servicePhrases[currentPhraseIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(prev => fullText.substring(0, prev.length + 1));
        setTypingSpeed(70); // normal writing speed

        if (currentText === fullText) {
          // Pause at the end of the phrase
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2200);
          return;
        }
      } else {
        // Deleting
        setCurrentText(prev => fullText.substring(0, prev.length - 1));
        setTypingSpeed(35); // faster deleting speed

        if (currentText === '') {
          setIsDeleting(false);
          // Advance to next service phrase
          const nextIndex = (currentPhraseIndex + 1) % servicePhrases.length;
          setCurrentPhraseIndex(nextIndex);
          
          // Also cycle the description every 3 phrases to distribute the 5 descriptions evenly (15/3 = 5)
          if (nextIndex % 3 === 0) {
            setDescriptionIndex(prev => (prev + 1) % descriptions.length);
          }
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left font-sans select-none">
      
      {/* 15 Looping Typographies */}
      <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[200px] flex flex-col justify-center w-full">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-tight text-white select-text">
          Líder em Refrigeração <br />
          <span className="relative inline-block text-[#22C7E5] text-3xl sm:text-5xl lg:text-6xl xl:text-7xl min-h-[48px] sm:min-h-[72px] drop-shadow-[0_0_15px_rgba(34,199,229,0.3)]">
            {currentText}
            {/* Blinking Cursor */}
            <span className="inline-block w-1.5 h-7 sm:h-12 lg:h-14 ml-1 bg-orange-500 animate-pulse rounded-full align-middle relative -top-1" />
          </span>
        </h1>
      </div>

      {/* 5 Looping Descriptions Section with cross-fade animation */}
      <div className="mt-4 min-h-[80px] sm:min-h-[70px] lg:min-h-[84px] w-full max-w-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={descriptionIndex}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="text-slate-300 text-xs sm:text-sm lg:text-base font-semibold leading-relaxed select-text"
          >
            {descriptions[descriptionIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Quick Visual Live Sync Indicators for UX feedback */}
      <div className="mt-4 flex items-center justify-center lg:justify-start gap-1.5">
        {descriptions.map((_, idx) => (
          <div 
            key={idx}
            onClick={() => setDescriptionIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === descriptionIndex ? 'w-6 bg-[#22C7E5]' : 'w-1.5 bg-slate-700 hover:bg-slate-500'
            }`}
            title={`Destaque ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
