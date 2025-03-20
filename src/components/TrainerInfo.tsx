'use client'

import React from 'react';

interface TrainerInfoProps {
  name: string;
  level: number;
  progress: number;
}

const TrainerInfo = ({ name, level, progress }: TrainerInfoProps) => {
  return (
    <div className="trainer-info">
      <div className="trainer-avatar">T</div>
      <div className="trainer-details">
        <div className="trainer-name">{name}</div>
        <div className="trainer-level">レベル {level}</div>
        <div className="level-progress">
          <div className="level-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default TrainerInfo;