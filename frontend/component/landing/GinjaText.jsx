import React from 'react';

const GinjaText = ({ 
  size = 'lg', 
  className = '', 
  showDot = true,
  text = 'Ginja'
}) => {
  const sizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl md:text-5xl',
    lg: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
  };

  const dotSizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl md:text-5xl',
    lg: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
  };

  const dotPositionClasses = {
    sm: '-top-2 sm:-top-3',
    md: '-top-2 sm:-top-3 md:-top-4',
    lg: '-top-3 sm:-top-4 md:-top-6 lg:-top-8',
    xl: '-top-3 md:-top-4 lg:-top-6 xl:-top-8'
  };

  return (
    <span className={`${className}`}>
      <span className="text-[#E2561B]">Gin</span>
      <span className="text-[#4E8C06]">
        ja
      </span>
    </span>
  );
};

export default GinjaText;
