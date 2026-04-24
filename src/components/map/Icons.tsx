import React from 'react';

export const LighthouseIcon = () => (
  <svg viewBox="0 0 100 100" className="w-[55%] h-[55%] text-mind-amber drop-shadow-[0_0_15px_rgba(223,147,23,0.8)] fill-current stroke-current relative z-10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Base */}
    <path d="M 35 90 L 65 90 L 60 40 L 40 40 Z" fill="none"/>
    <path d="M 42 40 L 58 40 L 58 25 L 42 25 Z" fill="none"/>
    <path d="M 35 25 L 65 25 L 50 10 Z" fill="rgba(223,147,23,0.2)"/>
    
    {/* Light */}
    <circle cx="50" cy="32" r="3" fill="#fff" className="animate-pulse" />
    
    {/* Beams */}
    <path d="M 20 32 L 5 35 M 80 32 L 95 35 M 25 20 L 10 15 M 75 20 L 90 15" strokeDasharray="2, 4" strokeWidth="1.5" className="animate-pulse"/>
    
    {/* Windows */}
    <circle cx="50" cy="55" r="3" fill="none" />
    <circle cx="50" cy="75" r="3" fill="none" />
  </svg>
);

export const TempleIcon = () => (
  <svg viewBox="0 0 100 100" className="w-[55%] h-[55%] text-[#e5f4f7] drop-shadow-[0_0_15px_rgba(25,146,176,0.8)] fill-none stroke-current relative z-10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Base */ }
    <path d="M 15 85 L 85 85"/>
    <path d="M 25 85 L 25 45 M 50 85 L 50 45 M 75 85 L 75 45"/>
    <path d="M 20 45 L 80 45"/>
    <path d="M 10 45 L 90 45 L 50 15 Z" fill="rgba(25,146,176,0.1)"/>
    {/* Inner Eye */}
    <path d="M 35 65 C 35 55, 65 55, 65 65 C 65 75, 35 75, 35 65 Z" className="text-mind-cyan"/>
    <circle cx="50" cy="65" r="3" fill="currentColor" className="text-mind-cyan"/>
  </svg>
);

export const SpringIcon = () => (
  <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] text-mind-cyan drop-shadow-[0_0_20px_rgba(25,146,176,1)] fill-none stroke-current relative z-10" strokeWidth="2">
    {/* Center drop / lotus */}
    <path d="M 50 30 C 65 50, 75 60, 50 80 C 25 60, 35 50, 50 30 Z" fill="rgba(25,146,176,0.2)" stroke="currentColor"/>
    
    {/* Inner Ripple */}
    <circle cx="50" cy="55" r="8" fill="currentColor" className="animate-ping opacity-50"/>
    
    {/* Outer Ripples */}
    <circle cx="50" cy="55" r="28" strokeDasharray="3 5" className="animate-[spin_10s_linear_infinite] opacity-70"/>
    <circle cx="50" cy="55" r="42" strokeWidth="1" strokeDasharray="2 8" className="animate-[spin_15s_linear_infinite_reverse] opacity-50"/>
  </svg>
);

export const LibraryIcon = () => (
  <svg viewBox="0 0 100 100" className="w-[50%] h-[50%] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] fill-none stroke-current relative z-10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Book outline */}
    <path d="M 25 20 L 75 20 C 80 20, 85 25, 85 30 L 85 85 C 85 90, 80 95, 75 95 L 25 95 C 20 95, 15 90, 15 85 L 15 30 C 15 25, 20 20, 25 20 Z"/>
    
    {/* Binding */}
    <path d="M 35 20 L 35 95"/>
    <path d="M 20 35 L 35 35 M 20 80 L 35 80"/>
    
    {/* Pages details */}
    <path d="M 50 40 L 70 40 M 50 55 L 65 55 M 50 70 L 60 70"/>
    
    {/* Geometry overlay */}
    <polygon points="55,10 70,30 85,10" fill="rgba(255,255,255,0.1)"/>
  </svg>
);
