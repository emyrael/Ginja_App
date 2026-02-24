import React from 'react';
import { motion } from 'framer-motion';
import { pop } from '../animations';

export default function AppMockup({ variant = 'default', children }) {
  return (
    <motion.div
      className="w-64 sm:w-72 md:w-80 bg-gradient-to-br from-[#E2561B] via-[#C4C879] to-green-600 rounded-2xl p-1 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-full h-[480px] sm:h-[560px] bg-black rounded-xl overflow-hidden relative">
        <div className="absolute inset-2 bg-gradient-to-br from-[#C4C879]/20 to-green-50 rounded-lg p-3 overflow-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
