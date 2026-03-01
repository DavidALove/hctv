'use client';

import React, { useState } from 'react';

interface ComingSoonButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function ComingSoonButton({ children, className = '' }: ComingSoonButtonProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {showComingSoon ? 'Coming Soon' : children}
    </button>
  );
}
