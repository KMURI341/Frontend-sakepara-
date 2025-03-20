'use client'

import React, { useState } from 'react';

interface HistoryItem {
  type: 'gain' | 'use';
  title: string;
  date: string;
  points: number;
}

interface HistoryModalProps {
  title: string;
  history: HistoryItem[];
  onClose: () => void;
}

const HistoryModal = ({ title, history, onClose }: HistoryModalProps) => {
  const [filter, setFilter] = useState<'all' | 'gain' | 'use'>('all');
  
  // 履歴フィルタリング
  const filteredHistory = history.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'gain') return item.type === 'gain';
    if (filter === 'use') return item.type === 'use';
    return true;
  });
  
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            すべて
          </button>
          <button 
            className={`filter-tab ${filter === 'gain' ? 'active' : ''}`}
            onClick={() => setFilter('gain')}
          >
            獲得
          </button>
          <button 
            className={`filter-tab ${filter === 'use' ? 'active' : ''}`}
            onClick={() => setFilter('use')}
          >
            使用
          </button>
        </div>
        
        <div className="modal-content">
          <div className="history-description">
            <p>ポイントの獲得や使用の履歴</p>
          </div>
          
          <ul className="history-list">
            {filteredHistory.map((item, index) => (
              <li key={index} className="history-item">
                <div className={`history-icon ${item.type === 'use' ? 'history-minus' : ''}`}>
                  {item.type === 'gain' ? '+' : '-'}
                </div>
                <div className="history-details">
                  <div className="history-title">{item.title}</div>
                  <div className="history-date">{item.date}</div>
                </div>
                <div className={`history-points ${item.type === 'gain' ? 'points-plus' : 'points-minus'}`}>
                  {item.type === 'gain' ? '+' : '-'}{item.points}
                </div>
              </li>
            ))}
            
            {filteredHistory.length === 0 && (
              <li className="history-empty">
                <p>履歴がありません</p>
              </li>
            )}
          </ul>
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

export default HistoryModal;