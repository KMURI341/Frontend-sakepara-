'use client'

import React from 'react';

interface HistoryItem {
  type: 'gain' | 'use';
  title: string;
  date: string;
  points: number;
}

interface HistoryListProps {
  history: HistoryItem[];
}

const HistoryList = ({ history }: HistoryListProps) => {
  return (
    <div className="card">
      <div className="card-header">
        ポイント履歴
        <span style={{ fontSize: '14px' }}>🔍</span>
      </div>
      <div className="card-content">
        <ul className="history-list">
          {history.map((item, index) => (
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
          
          {history.length === 0 && (
            <li className="history-empty">
              <p>履歴はありません</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HistoryList;