'use client'

import React from 'react';

interface EventBannerProps {
  title: string;
  description: string;
  timeRemaining: string;
  icon: string;
}

const EventBanner = ({ title, description, timeRemaining, icon }: EventBannerProps) => {
  return (
    <div className="event-banner">
      <div className="event-icon">{icon}</div>
      <div className="event-details">
        <div className="event-title">{title}</div>
        <div className="event-description">{description}</div>
        <div className="event-timer">{timeRemaining}</div>
      </div>
    </div>
  );
};

export default EventBanner;