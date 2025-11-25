import React from 'react';

const GRADIENTS = {
  verde: ['#9fffa3', '#10b981'],
  blanco: ['#fff7f0', '#f3efe9'],
  rojo: ['#ff9b9b', '#ef4444'],
};

const ServicioImage = ({ variant = 'verde', label = 'Manglar', size = 220 }) => { // tamaño aumentado a 220
  const [c1, c2] = GRADIENTS[variant] || GRADIENTS.verde;
  const id = `grad-${variant}`.replace(/\s+/g, '');

  return (
    <div className="servicio-media">
      <svg
        className="servicio-svg"
        width={size}
        height={size}
        viewBox="0 0 160 160"
        role="img"
        aria-label={label}
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="#0b1220" floodOpacity="0.06"/>
          </filter>
        </defs>

        <g filter="url(#soft)">
          <circle cx="80" cy="80" r="70" fill={`url(#${id})`} />
        </g>

        <g transform="translate(32,26)" stroke="#063a2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M10 78 C30 50, 60 50, 78 78" />
          <path d="M0 62 C20 38, 60 38, 78 62" strokeOpacity="0.9" />
          <path d="M22 78 C34 64, 46 64, 58 78" strokeOpacity="0.9" />
          <path d="M39 18 C39 34, 39 44, 39 56" />
          <path d="M46 16 C36 22, 36 30, 46 36" strokeOpacity="0.9" />
          <g stroke="#063a2b" fill="#063a2b">
            <ellipse cx="46" cy="6" rx="6" ry="10" transform="rotate(-6 46 6)" />
            <ellipse cx="34" cy="12" rx="6" ry="10" transform="rotate(-20 34 12)" />
            <ellipse cx="58" cy="12" rx="6" ry="10" transform="rotate(20 58 12)" />
          </g>
        </g>

        <text x="50%" y="132" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="800" fill="#073227">
          {label}
        </text>
      </svg>
    </div>
  );
};

export default ServicioImage;