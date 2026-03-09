import React from 'react';

export default function GinjaLogo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-7 w-7 sm:h-8 sm:w-8',
    md: 'h-9 w-9 sm:h-10 sm:w-10',
    lg: 'h-12 w-12 sm:h-14 sm:w-14',
    xl: 'h-16 w-16 sm:h-20 sm:w-20',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <img src="/logo/flame-icon.png" alt="Ginja logo" className="h-full w-full object-contain" />
    </div>
  );
}
