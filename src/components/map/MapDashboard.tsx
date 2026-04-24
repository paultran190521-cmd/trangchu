import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapLocation } from './MapLocation';
import { LighthouseBooks } from './details/LighthouseBooks';
import { TempleTest } from './details/TempleTest';
import { SpringBreathing } from './details/SpringBreathing';
import { LibraryCards } from './details/LibraryCards';
import { MandalaBackground } from './MandalaBackground';
import { LighthouseIcon, TempleIcon, SpringIcon, LibraryIcon } from './Icons';

export type LocationId = 'lighthouse' | 'temple' | 'spring' | 'library' | null;

export function MapDashboard() {
  const [activeLocation, setActiveLocation] = useState<LocationId>(null);

  const locations = [
    {
      id: 'lighthouse',
      title: 'Hải Đăng Tri Thức',
      description: 'Soi rọi con đường qua trang sách & video',
      icon: <LighthouseIcon />,
      position: { top: '25%', left: '25%' },
      colorClass: 'bg-mind-base/80',
      glowClass: 'bg-mind-amber',
    },
    {
      id: 'temple',
      title: 'Ngôi Đền Thấu Hiểu',
      description: 'Mã hóa nội tâm qua bài trắc nghiệm tâm lý',
      icon: <TempleIcon />,
      position: { top: '20%', left: '70%' },
      colorClass: 'bg-[#0a323a]/90',
      glowClass: 'bg-mind-cyan',
    },
    {
      id: 'spring',
      title: 'Suối Nguồn Tỉnh Thức',
      description: 'Lắng nghe hơi thở, khơi nguồn bình an',
      icon: <SpringIcon />,
      position: { top: '65%', left: '25%' },
      colorClass: 'bg-mind-base/80',
      glowClass: 'bg-mind-cyan',
    },
    {
      id: 'library',
      title: 'Thư Viện Khoa Học',
      description: 'Hệ thống thẻ bài tri thức cốt lõi',
      icon: <LibraryIcon />,
      position: { top: '60%', left: '70%' },
      colorClass: 'bg-white/10',
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

      <MandalaBackground />

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
