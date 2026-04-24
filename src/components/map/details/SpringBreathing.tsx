import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Edit3 } from 'lucide-react';

export function SpringBreathing() {
  const [phase, setPhase] = useState<'Hít vào' | 'Giữ' | 'Thở ra'>('Hít vào');
  
  useEffect(() => {
    let timeoutId: number;
    
    const cycle = () => {
      setPhase('Hít vào');
      timeoutId = window.setTimeout(() => {
        setPhase('Giữ');
        timeoutId = window.setTimeout(() => {
          setPhase('Thở ra');
          timeoutId = window.setTimeout(cycle, 4000);
        }, 2000);
      }, 4000);
    };
    
    cycle();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="space-y-12 flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif text-mind-cyan">Suối Nguồn Tỉnh Thức</h2>
          <p className="text-mind-light/70 max-w-sm mx-auto">Cuốn trôi đi những muộn phiền. Hãy nhịp thở cùng dòng chảy.</p>
        </div>

        <div className="relative w-48 h-48 flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: phase === 'Hít vào' ? 1.5 : phase === 'Giữ' ? 1.5 : 1,
              opacity: phase === 'Hít vào' ? 0.3 : phase === 'Giữ' ? 0.4 : 0.1
            }}
            transition={{ duration: phase === 'Giữ' ? 2 : 4, ease: "easeInOut" }}
            className="absolute inset-0 bg-mind-cyan rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: phase === 'Hít vào' ? 1.2 : phase === 'Giữ' ? 1.2 : 0.8,
              opacity: phase === 'Hít vào' ? 0.6 : phase === 'Giữ' ? 0.7 : 0.3
            }}
            transition={{ duration: phase === 'Giữ' ? 2 : 4, ease: "easeInOut" }}
            className="absolute inset-4 bg-mind-cyan rounded-full"
          />
          <div className="relative z-10 w-24 h-24 bg-mind-base border border-mind-cyan/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(25,146,176,0.3)]">
            <span className="text-mind-cyan font-medium tracking-wide uppercase text-sm">{phase}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md bg-black/20 p-6 rounded-2xl border border-white/5">
        <div className="flex items-center space-x-3 mb-6">
          <Edit3 className="w-5 h-5 text-mind-cyan" />
          <h3 className="font-serif text-xl text-white">Nhật ký biết ơn</h3>
        </div>
        <div className="space-y-4">
          <textarea 
            placeholder="Hôm nay, một điều nhỏ bé khiến bạn mỉm cười là gì?..."
            className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-mind-light placeholder:text-mind-light/30 focus:outline-none focus:border-mind-cyan/50 resize-none transition-colors"
          ></textarea>
          <button className="w-full py-3 bg-mind-cyan/20 text-mind-cyan hover:bg-mind-cyan hover:text-mind-dark text-sm font-medium rounded-xl transition-all">
            Gửi vào dòng suối
          </button>
        </div>
      </div>
    </div>
  );
}
