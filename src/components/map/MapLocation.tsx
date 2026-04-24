import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MapLocationProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: { top: string; left: string };
  colorClass: string;
  glowClass: string;
  onClick: () => void;
}

export function MapLocation({ title, description, icon, position, colorClass, glowClass, onClick }: MapLocationProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2" 
      style={position}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group cursor-pointer text-center flex flex-col items-center" onClick={onClick}>
        {/* Glow effect */}
        <div className={`absolute top-0 w-32 h-32 md:w-40 md:h-40 ${glowClass} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-700 rounded-full`}></div>
        
        {/* Node */}
        <motion.div 
          className={`relative w-[110px] h-[110px] md:w-[140px] md:h-[140px] flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-105 mb-3 backdrop-blur-xl border border-white/10 ${colorClass}`}
        >
          {icon}
        </motion.div>
        
        {/* Text Label Below */}
        <div className="text-[0.85rem] md:text-[0.95rem] uppercase tracking-[2px] font-semibold text-white/80 group-hover:text-mind-amber transition-colors mt-2 text-shadow-md">
          {title}
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              className="absolute bg-black/80 px-4 py-2.5 rounded border border-white/10 text-[0.8rem] whitespace-nowrap top-full mt-6 pointer-events-none z-30"
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

