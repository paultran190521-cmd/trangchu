import React from 'react';

export function MandalaBackground() {
  const petals = 24;
  return (
    <div 
      className="absolute inset-0 z-0 flex items-center justify-center opacity-40 md:opacity-50 pointer-events-none overflow-hidden mix-blend-color-dodge"
      style={{
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)'
      }}
    >
      <svg viewBox="0 0 1000 1000" className="w-[150vw] h-[150vw] md:w-[1200px] md:h-[1200px] animate-[spin_180s_linear_infinite] text-mind-amber">
        <defs>
          <radialGradient id="mandala-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
            <stop offset="60%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Core */}
        <circle cx="500" cy="500" r="150" fill="url(#mandala-glow)" />
        
        {/* Concentric rings */}
        <circle cx="500" cy="500" r="220" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" strokeDasharray="4 12"/>
        <circle cx="500" cy="500" r="320" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeDasharray="1 4" />
        <circle cx="500" cy="500" r="420" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        
        {/* Layer 1 Petals */}
        {Array.from({ length: petals }).map((_, i) => (
          <g key={`petal1-${i}`} transform={`rotate(${i * (360 / petals)} 500 500)`}>
            <path d="M 500 280 C 530 180, 560 130, 500 30 C 440 130, 470 180, 500 280" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
            <path d="M 500 230 C 515 160, 530 100, 500 60 C 470 100, 485 160, 500 230" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="500" cy="30" r="6" fill="currentColor" opacity="0.7" />
          </g>
        ))}
        
        {/* Layer 2 Geometric */}
        {Array.from({ length: petals / 2 }).map((_, i) => (
          <g key={`petal2-${i}`} transform={`rotate(${i * (360 / (petals / 2))} 500 500)`}>
            <path d="M 500 400 L 580 300 L 500 80 L 420 300 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
            <circle cx="500" cy="80" r="4" fill="currentColor" opacity="0.8" />
          </g>
        ))}
        
        {/* Layer 3 Inner star */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`star-${i}`} transform={`rotate(${i * (360 / 8)} 500 500)`}>
            <path d="M 500 500 L 530 400 L 500 200 L 470 400 Z" fill="currentColor" opacity="0.1"/>
            <path d="M 500 500 L 530 400 L 500 200 L 470 400 Z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          </g>
        ))}
      </svg>
    </div>
  );
}
