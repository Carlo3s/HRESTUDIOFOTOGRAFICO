import React, { useState } from 'react';
import './CustomPriceModal.css';

const CustomPriceModal = ({ isOpen, onClose, onApply, currentPrice }) => {
  const [customPrice, setCustomPrice] = useState(currentPrice);

  const handleApply = () => {
    if (customPrice > 0) {
      onApply(customPrice);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Personaliza tu precio</h2>
        <p className="modal-desc">Define el presupuesto que se ajuste a tus necesidades.</p>

        <div className="price-input-group">
          <label htmlFor="price">Precio personalizado ($)</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              id="price"
              type="number"
              min="100"
              max="50000"
              value={customPrice}
              onChange={(e) => setCustomPrice(Number(e.target.value))}
              placeholder="Ingresa tu presupuesto"
            />
          </div>
          <div className="price-slider">
            <input
              type="range"
              min="100"
              max="50000"
              step="100"
              value={customPrice}
              onChange={(e) => setCustomPrice(Number(e.target.value))}
              className="slider"
            />
          </div>
          <div className="price-hint">Rango: $100 - $50,000</div>
        </div>

        <div className="modal-actions">
          <button className="btn btn-outline" onClick={onClose}>Cancelar</button>
          <button className="btn btn-solid btn-purple" onClick={handleApply}>Aplicar ${customPrice}</button>
        </div>
      </div>
    </div>
  );
};

export default CustomPriceModal;