import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface WelcomePortalProps {
  key?: React.Key;
  onStart: () => void;
}

export function WelcomePortal({ onStart }: WelcomePortalProps) {
  const [text, setText] = useState('');
  const fullText = "Chào mừng bạn đến với vùng đất tâm thức, nơi bạn được trở về với tâm mình để lắng nghe, thấu hiểu và yêu thương mình hơn, và bạn sẽ bình an - hạnh phúc hơn.";
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 500);
      }
    }, 40); // Typewriter speed

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 bg-transparent"
    >
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Title Section */}
        <motion.div
           initial={{ opacity: 0, y: -20, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-mind-amber uppercase tracking-[6px] md:tracking-[10px] mb-4 drop-shadow-[0_0_20px_rgba(223,147,23,0.5)]">
            Thay Đổi Tâm Thức
          </h1>
          <p className="text-sm md:text-base font-light text-mind-light/70 uppercase tracking-[4px]">
            Bản Đồ Hành Trình Tương Tác
          </p>
        </motion.div>

        {/* Typewriter Text */}
        <div className="max-w-3xl text-center space-y-12">
          <motion.p 
            className="text-lg md:text-xl font-light tracking-[0.05em] leading-relaxed text-mind-light/90 min-h-[120px] max-w-2xl mx-auto"
          >
            {text}
            <span className="animate-pulse bg-mind-amber/70 inline-block w-[2px] h-5 ml-1 align-middle"></span>
          </motion.p>

          <AnimatePresence>
            {showButton && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                onClick={onStart}
                className="mt-8 px-10 py-4 border border-mind-amber text-mind-amber uppercase tracking-[2px] cursor-pointer transition-all duration-500 bg-black/20 hover:bg-mind-amber hover:text-mind-base hover:shadow-[0_0_30px_rgba(223,147,23,0.6)] backdrop-blur-sm"
              >
                Bắt đầu hành trình
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Decorative subtle glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
         <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-mind-cyan rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
         <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-mind-amber rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </motion.div>
  );
}
