import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      // Start muted to comply with browser autoplay policies
      audioRef.current.muted = true;
      audioRef.current.play().catch(e => console.log("Audio autoplay prevented", e));
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const nextMuteState = !isMuted;
      audioRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      if (!nextMuteState) {
        audioRef.current.play().catch(e => console.log("Audio play error", e));
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 left-8 z-40 flex items-center gap-2.5 text-white/50 text-[0.75rem]"
    >
      <span>🔈 Nhạc thiền: {isMuted ? 'Đang tắt' : 'Đang bật'}</span>
      <button 
        onClick={toggleMute}
        className="relative w-[30px] h-[14px] bg-[#333] rounded-[7px] cursor-pointer"
        title={isMuted ? "Bật âm thanh thiền định" : "Tắt âm thanh"}
      >
        <div className={`absolute w-[10px] h-[10px] ${isMuted ? 'bg-[#666] left-[2px]' : 'bg-mind-amber right-[2px]'} rounded-full top-[2px] transition-all duration-300`}></div>
      </button>
      
      {/* Fallback to an ambient track. In a real app this would be a local asset or stable public URL */}
      <audio 
        ref={audioRef}
        loop 
        src="https://cdn.pixabay.com/download/audio/2022/02/07/audio_677eb931e8.mp3?filename=meditation-101188.mp3"
      />
    </motion.div>
  );
}
