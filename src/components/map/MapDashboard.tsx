import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapLocation } from './MapLocation';
import { LighthouseBooks } from './details/LighthouseBooks';
import { TempleTest } from './details/TempleTest';
import { SpringBreathing } from './details/SpringBreathing';
import { LibraryCards } from './details/LibraryCards';

export type LocationId = 'lighthouse' | 'temple' | 'spring' | 'library' | null;

export function MapDashboard() {
  const [activeLocation, setActiveLocation] = useState<LocationId>(null);

  const locations = [
    {
      id: 'lighthouse',
      title: 'Hải Đăng Tri Thức',
      description: 'Soi rọi con đường qua trang sách & video',
      imageUrl: 'https://images.unsplash.com/photo-1510255375376-b63adcdcbb5a?q=80&w=400&h=400&auto=format&fit=crop',
      position: { top: '25%', left: '25%' },
      colorClass: 'border-mind-amber/60 shadow-[0_0_40px_rgba(223,147,23,0.5)]',
      glowClass: 'bg-mind-amber',
    },
    {
      id: 'temple',
      title: 'Ngôi Đền Thấu Hiểu',
      description: 'Mã hóa nội tâm qua bài trắc nghiệm tâm lý',
      imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&h=400&auto=format&fit=crop',
      position: { top: '20%', left: '70%' },
      colorClass: 'border-mind-cyan/60 shadow-[0_0_30px_rgba(25,146,176,0.3)]',
      glowClass: 'bg-mind-cyan',
    },
    {
      id: 'spring',
      title: 'Suối Nguồn Tỉnh Thức',
      description: 'Lắng nghe hơi thở, khơi nguồn bình an',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=400&auto=format&fit=crop',
      position: { top: '65%', left: '25%' },
      colorClass: 'border-mind-cyan shadow-[0_0_30px_rgba(25,146,176,0.5)] animate-breathe',
      glowClass: 'bg-mind-cyan',
    },
    {
      id: 'library',
      title: 'Thư Viện Khoa Học',
      description: 'Hệ thống thẻ bài tri thức cốt lõi',
      imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&h=400&auto=format&fit=crop',
      position: { top: '60%', left: '70%' },
      colorClass: 'border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)]',
      glowClass: 'bg-white',
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative w-full h-full overflow-hidden"
    >
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <h1 className="m-0 text-2xl md:text-3xl tracking-[4px] text-mind-amber uppercase font-serif drop-shadow-md">Thay Đổi Tâm Thức</h1>
        <p className="m-0 text-[0.7rem] md:text-xs opacity-80 uppercase tracking-wider text-mind-light drop-shadow">Bản đồ hành trình tương tác</p>
      </div>

      {/* Deep Mandala Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-color-dodge opacity-40"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1610287103859-994c979d460e?q=80&w=1600&auto=format&fit=crop')",
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)'
        }}
      ></div>

      {/* Abstract Animated Path Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
          <path d="M240 190 Q 500 150 700 140 T 790 400 T 290 490 T 240 190" stroke="#1992b0" strokeWidth="2" strokeDasharray="10 10" fill="none" />
        </svg>
      </div>

      {/* Map Nodes */}
      <div className="relative w-full h-full z-10">
        {locations.map((loc) => (
          <MapLocation 
            key={loc.id}
            {...loc}
            onClick={() => setActiveLocation(loc.id as LocationId)}
          />
        ))}
      </div>

      {/* Modal Overlay for Details */}
      <AnimatePresence>
        {activeLocation && (
          <Modal onClose={() => setActiveLocation(null)}>
            {activeLocation === 'lighthouse' && <LighthouseBooks />}
            {activeLocation === 'temple' && <TempleTest />}
            {activeLocation === 'spring' && <SpringBreathing />}
            {activeLocation === 'library' && <LibraryCards />}
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mind-dark/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-mind-base border border-mind-cyan/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] relative custom-scrollbar p-6 md:p-10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full p-2 transition-colors z-10"
        >
          ✕
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
