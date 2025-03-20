'use client'

import React from 'react';

// props の型を定義
interface HeaderProps {
  title: string;  // title は string 型
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div style={{ fontSize: 20 }}>⚙️</div>
    </div>
  );
};

export default Header;