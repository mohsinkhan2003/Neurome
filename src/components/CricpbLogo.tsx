import React from 'react';

const CricpbLogo: React.FC = () => {
  return (
    <div className="relative">
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        className="drop-shadow-xl"
      >
        {/* Outer Ring */}
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          fill="none"
          stroke="url(#outerRingGradient)"
          strokeWidth="2"
          className="animate-pulse"
        />
        
        {/* Main Shield Background */}
        <path 
          d="M24 4 L36 12 L36 28 Q36 36 24 44 Q12 36 12 28 L12 12 Z" 
          fill="url(#shieldGradient)"
          stroke="url(#shieldBorder)"
          strokeWidth="1.5"
        />
        
        {/* Cricket Stumps */}
        <g transform="translate(24, 24)">
          {/* Left Stump */}
          <rect x="-8" y="-6" width="2" height="12" fill="#8B4513" rx="1"/>
          {/* Middle Stump */}
          <rect x="-1" y="-6" width="2" height="12" fill="#8B4513" rx="1"/>
          {/* Right Stump */}
          <rect x="6" y="-6" width="2" height="12" fill="#8B4513" rx="1"/>
          
          {/* Bails */}
          <ellipse cx="-3.5" cy="-6" rx="2.5" ry="0.8" fill="#D2691E"/>
          <ellipse cx="3.5" cy="-6" rx="2.5" ry="0.8" fill="#D2691E"/>
        </g>
        
        {/* Cricket Ball */}
        <circle 
          cx="24" 
          cy="16" 
          r="4" 
          fill="url(#ballGradient)"
          stroke="#8B0000"
          strokeWidth="0.5"
        />
        
        {/* Ball Seam */}
        <path 
          d="M 21 16 Q 24 14 27 16 Q 24 18 21 16" 
          stroke="#8B0000" 
          strokeWidth="1" 
          fill="none"
        />
        
        {/* Brand Text - C */}
        <text 
          x="24" 
          y="38" 
          textAnchor="middle" 
          className="text-sm font-black fill-white"
          style={{ fontSize: '14px', fontFamily: 'Inter, sans-serif' }}
        >
          C
        </text>
        
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="30%" stopColor="#1e40af" />
            <stop offset="70%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          
          <linearGradient id="shieldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          
          <linearGradient id="ballGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          
          <linearGradient id="outerRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          
          <radialGradient id="glowEffect" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        
        {/* Shine Effect */}
        <ellipse 
          cx="24" 
          cy="18" 
          rx="12" 
          ry="8" 
          fill="url(#glowEffect)"
          opacity="0.6"
        />
      </svg>
      
      {/* Animated Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-yellow-400 opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
    </div>
  );
};

export default CricpbLogo;