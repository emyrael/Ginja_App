import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, pop } from '../animations';

export default function FeatureCard({ title, description, children, accent = 'bg-[#ED8522]' }) {
  return (
    <motion.div
      className="bg-gray-800 text-white rounded-2xl p-4 sm:p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${accent}`}
          variants={pop}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.45 }}
        >
          {/* placeholder icon */}
          <span className="font-bold text-white">•</span>
        </motion.div>
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-1">{title}</h4>
          <p className="text-sm text-gray-300 mb-3">{description}</p>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
