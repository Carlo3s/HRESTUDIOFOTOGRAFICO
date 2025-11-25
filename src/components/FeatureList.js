import React from 'react';

const Icon = ({ name }) => {
  switch (name) {
    case 'camera':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="6" width="18" height="14" rx="2" stroke="#0f172a" strokeWidth="1.6" />
          <circle cx="12" cy="13" r="3" stroke="#0f172a" strokeWidth="1.6" />
        </svg>
      );
    case 'video':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="6" width="14" height="12" rx="2" stroke="#0f172a" strokeWidth="1.6" />
          <path d="M18 8l4-3v14l-4-3" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'stream':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 12c1.5-3 4.5-5 8-5s6.5 2 8 5" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M4 16c2-2.5 5-4 8-4s6 1.5 8 4" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case 'mention':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v4" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="7" stroke="#0f172a" strokeWidth="1.6"/>
          <path d="M16 12a4 4 0 1 1-4-4" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case 'advice':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2a7 7 0 0 0-7 7v4a7 7 0 0 0 4 6v3l3-1 3 1v-3a7 7 0 0 0 4-6v-4a7 7 0 0 0-7-7z" stroke="#0f172a" strokeWidth="1.4" fill="none"/>
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="#0f172a" strokeWidth="1.6"/>
        </svg>
      );
  }
};

const FeatureList = ({ features = [] }) => {
  return (
    <div className="feature-list card-accent">
      {features.map((f, i) => (
        <div className="feature-item" key={i}>
          <div className="feature-icon"><Icon name={f.icon} /></div>
          <div className="feature-body">
            <div className="feature-title">{f.title}</div>
            {f.desc && <div className="feature-desc">{f.desc}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;