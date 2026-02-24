import React from 'react';
import { motion } from 'framer-motion';

export default function GinjaLogo({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-6 h-6 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-12 sm:h-12',
    lg: 'w-12 h-12 sm:w-16 sm:h-16',
    xl: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  return (
    <motion.div 
      className={`${sizeClasses[size]} ${className} flex items-center justify-center`}
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Try to load the actual logo image first */}
      <img 
        src="/logo/icon.png" 
        alt="Ginja Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback to gradient logo if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback gradient logo - hidden by default */}
      <div className="w-full h-full bg-gradient-to-br from-[#E2561B] to-[#C4C879] rounded-lg flex items-center justify-center" style={{ display: 'none' }}>
        <span className="text-white font-bold text-lg sm:text-xl">G</span>
      </div>
    </motion.div>
  );
}
