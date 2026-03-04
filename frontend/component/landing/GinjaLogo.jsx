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
      <img 
        src="/logo/flame-icon.png" 
        alt="Ginja Logo" 
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
