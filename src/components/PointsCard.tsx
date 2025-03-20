'use client'

import React from 'react';

interface PointType {
  type: 'normal' | 'limited';
  name: string;
  amount: number;
  expires: string;
}

interface PointCardProps {
  points: PointType[];
  upcoming?: { type: string; amount: number; date: string }[];
  expiring?: { type: string; amount: number; date: string }[];
  onUsePoints: () => void;
  onViewHistory: () => void;
}

const PointsCard = ({ points, upcoming = [], expiring = [], onUsePoints, onViewHistory }: PointCardProps) => {
  // ポイント合計を計算
  const totalPoints = points.reduce((sum, point) => sum + point.amount, 0);
  
  return (
    <div className="card">
      <div className="card-header">
        ポイント残高
      </div>
      <div className="card-content">
        <div className="points-summary">
          {/* 通常ポイントと期間限定ポイント */}
          {points.map((point, index) => (
            <div key={index} className="point-type">
              <div className={`type-icon ${point.type === 'limited' ? 'limited-icon' : ''}`}>
                {point.type === 'normal' ? 'N' : 'L'}
              </div>
              <div className="type-details">
                <div className="type-name">{point.name}</div>
                <div className="type-expires">有効期限: {point.expires}</div>
              </div>
              <div className="type-value">{point.amount.toLocaleString()}</div>
            </div>
          ))}
          
          {/* 付与予定ポイント */}
          {upcoming.length > 0 && (
            <div className="point-type upcoming">
              <div className="type-icon upcoming-icon">↓</div>
              <div className="type-details">
                <div className="type-name">付与予定ポイント</div>
                <div className="type-expires">付与予定日: {upcoming[0].date}</div>
              </div>
              <div className="type-value upcoming-value">+{upcoming[0].amount.toLocaleString()}</div>
            </div>
          )}
          
          {/* 失効予定ポイント */}
          {expiring.length > 0 && (
            <div className="point-type expiring">
              <div className="type-icon expiring-icon">!</div>
              <div className="type-details">
                <div className="type-name">失効予定ポイント</div>
                <div className="type-expires expiring-text">失効日: {expiring[0].date}</div>
              </div>
              <div className="type-value expiring-value">{expiring[0].amount.toLocaleString()}</div>
            </div>
          )}
          
          {/* 合計ポイント */}
          <div className="point-type">
            <div className="type-icon total-icon">T</div>
            <div className="type-details">
              <div className="type-name">合計ポイント</div>
            </div>
            <div className="type-value total">{totalPoints.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="action-button" onClick={onUsePoints}>
            <span className="action-icon">🎁</span>
            ポイントを使う
          </button>
          <button className="action-button" onClick={onViewHistory}>
            <span className="action-icon">📋</span>
            ポイント履歴
          </button>
        </div>
      </div>
    </div>
  );
};

export default PointsCard;