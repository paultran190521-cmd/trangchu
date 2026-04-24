import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin } from 'lucide-react';

interface MapLocationProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  position: { top: string; left: string };
  colorClass: string;
  glowClass: string;
  onClick: () => void;
}

export function MapLocation({ title, description, imageUrl, icon, position, colorClass, glowClass, onClick }: MapLocationProps) {
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
        <div className={`absolute top-0 w-24 h-24 ${glowClass} opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 rounded-full`}></div>
        
        {/* Node */}
        <motion.div 
          className={`relative w-[90px] h-[90px] flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110 mb-2 overflow-hidden border-2 space-y-0 ${colorClass}`}
        >
          {imageUrl ? (
            <>
              <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-mind-base/20 group-hover:bg-transparent transition-colors"></div>
            </>
          ) : (
            icon || <MapPin className="w-8 h-8 opacity-80" />
          )}
        </motion.div>
        
        {/* Text Label Below */}
        <div className="text-[0.8rem] uppercase tracking-[1px] font-semibold text-white/70 group-hover:text-mind-amber transition-colors mt-2 text-shadow-sm">
          {title}
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bg-black/80 px-4 py-2.5 rounded border border-white/10 text-[0.75rem] whitespace-nowrap top-full mt-4 pointer-events-none z-30"
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

