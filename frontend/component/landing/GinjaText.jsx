import React from 'react';

const GinjaText = ({ 
  className = '',
}) => {
  return (
    <span className={`${className}`}>
      <span className="text-[#FF5A00]">Gin</span>
      <span className="text-[#4B8E1C]">ja</span>
    </span>
  );
};

export default GinjaText;
