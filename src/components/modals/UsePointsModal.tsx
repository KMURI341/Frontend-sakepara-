'use client'

import React, { useState } from 'react';

interface PointType {
  type: string;
  name: string;
  amount: number;
  expires: string;
}

interface ExchangeItem {
  id: number;
  image: string;
  title: string;
  cost: number;
  description: string;
}

interface UsePointsModalProps {
  title: string;
  points: PointType[];
  items: ExchangeItem[];
  totalPoints: number;
  company: string;
  userName: string;
  onClose: () => void;
  onExchange: (item: ExchangeItem) => void;
}

const UsePointsModal = ({ 
  title,
  points,
  items,
  totalPoints,
  company,
  userName,
  onClose,
  onExchange
}: UsePointsModalProps) => {
  const [selectedItem, setSelectedItem] = useState<ExchangeItem | null>(null);
  
  const handleExchange = (item: ExchangeItem) => {
    onExchange(item);
    setSelectedItem(null);
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        
        <div className="user-info-section">
          <div className="user-company">{company}</div>
          <div className="user-name">担当者: {userName}</div>
          <div className="available-points">
            現在のポイント: <span className="total-points">{totalPoints.toLocaleString()} pt</span>
          </div>
        </div>
        
        <div className="modal-content">
          {/* ポイント種類別残高 */}
          <div className="points-balance">
            {points.map((point, index) => (
              <div key={index} className={`point-item ${point.type}`}>
                <div className="point-icon">{point.type === 'normal' ? 'N' : 'L'}</div>
                <div className="point-details">
                  <div className="point-name">{point.name}</div>
                  <div className="point-expires">有効期限: {point.expires}</div>
                </div>
                <div className="point-amount">{point.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
          
          {/* ギフト一覧 */}
          <h3 className="section-title">交換可能なアイテム</h3>
          <div className="exchange-grid">
            {items.map((item) => (
              <div 
                key={item.id} 
                className={`exchange-item ${selectedItem === item ? 'selected' : ''} ${item.cost > totalPoints ? 'disabled' : ''}`}
                onClick={() => item.cost <= totalPoints && setSelectedItem(item)}
              >
                <div className="item-image-container">
                  <div className="item-image-placeholder">{item.title.charAt(0)}</div>
                </div>
                <div className="item-details">
                  <div className="item-title">{item.title}</div>
                  <div className="item-cost">{item.cost.toLocaleString()} pt</div>
                  <button 
                    className="exchange-button"
                    disabled={item.cost > totalPoints}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExchange(item);
                    }}
                  >
                    交換する
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="modal-actions">
          <button className="action-button secondary" onClick={onClose}>
            戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsePointsModal;