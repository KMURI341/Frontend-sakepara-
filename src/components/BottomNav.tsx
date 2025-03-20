'use client'

import React from 'react';

interface BottomNavProps {
  active: 'home' | 'points' | 'ranking' | 'profile';
}

const BottomNav = ({ active }: BottomNavProps) => {
  return (
    <div className="bottom-nav">
      <a href="#" className={`nav-item ${active === 'home' ? 'active' : ''}`}>
        <div className="nav-icon">🏠</div>
        <div className="nav-label">ホーム</div>
      </a>
      <a href="#" className={`nav-item ${active === 'points' ? 'active' : ''}`}>
        <div className="nav-icon">🎮</div>
        <div className="nav-label">ポイント</div>
      </a>
      <a href="#" className={`nav-item ${active === 'ranking' ? 'active' : ''}`}>
        <div className="nav-icon">📊</div>
        <div className="nav-label">ランキング</div>
      </a>
      <a href="#" className={`nav-item ${active === 'profile' ? 'active' : ''}`}>
        <div className="nav-icon">👤</div>
        <div className="nav-label">プロフィール</div>
      </a>
    </div>
  );
};

export default BottomNav;