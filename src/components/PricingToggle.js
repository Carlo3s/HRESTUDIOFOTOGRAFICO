import React, { useState } from 'react';
import './PricingToggle.css';

const PricingToggle = ({ onPeriodChange, basePrice = 1600 }) => {
  const [period, setPeriod] = useState('quincenal');

  const periods = {
    semanal: { label: 'Semanal', multiplier: 0.3, badge: 'Flexible' },
    quincenal: { label: 'Quincenal', multiplier: 1, badge: 'Popular' },
    mensual: { label: 'Mensual', multiplier: 1.8, badge: 'Ahorra 10%' }
  };

  const handleChange = (newPeriod) => {
    setPeriod(newPeriod);
    onPeriodChange(newPeriod, Math.round(basePrice * periods[newPeriod].multiplier));
  };

  return (
    <div className="pricing-toggle">
      <div className="toggle-header">
        <h3>Elige tu período</h3>
      </div>
      <div className="toggle-buttons">
        {Object.entries(periods).map(([key, val]) => (
          <button
            key={key}
            className={`toggle-btn ${period === key ? 'active' : ''}`}
            onClick={() => handleChange(key)}
          >
            <div className="btn-label">{val.label}</div>
            <div className="btn-price">${Math.round(basePrice * val.multiplier)}</div>
            <div className="btn-badge">{val.badge}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PricingToggle;