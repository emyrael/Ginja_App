import React from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'todo', label: 'Todo' },
  { id: 'circle', label: 'Circle' },
  { id: 'progress', label: 'Progress' },
  { id: 'wellness', label: 'Wellness' },
];

/* SVG mini-icons matching the app bottom navigation */
function NavIcon({ id, active }) {
  const color = active ? '#E2561B' : '#6b7280';
  const size = 18;
  const icons = {
    home: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    todo: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
    ),
    circle: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    progress: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    ),
    wellness: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={active ? color : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    ),
  };
  return icons[id] || null;
}

export default function PhoneFrame({ children, activeTab = 'home' }) {
  return (
    <motion.div
      className="w-[260px] sm:w-[280px] flex-shrink-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Outer bezel */}
      <div className="rounded-[2.8rem] p-[2px] bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="bg-[#0f0f0f] rounded-[2.8rem] overflow-hidden">
          {/* Status bar with dynamic island */}
          <div className="relative flex justify-between items-center px-6 pt-3 pb-1">
            <span className="text-[10px] text-white/80 font-semibold tabular-nums">11:42</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[90px] h-[24px] bg-black rounded-b-[14px]" />
            <div className="flex items-center gap-1 text-[10px] text-white/70">
              <span className="font-medium">5G</span>
              {/* battery icon */}
              <svg width="18" height="10" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="2" stroke="white" strokeOpacity="0.35"/><rect x="2" y="2" width="14" height="8" rx="1" fill="white" fillOpacity="0.7"/><path d="M23 4v4a1.5 1.5 0 000-4z" fill="white" fillOpacity="0.35"/></svg>
            </div>
          </div>

          {/* Screen content */}
          <div className="min-h-[440px] max-h-[470px] overflow-hidden">
            {children}
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-around py-2 px-1 border-t border-white/[0.04] bg-[#0f0f0f]">
            {NAV_ITEMS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <div key={tab.id} className="flex flex-col items-center gap-[2px] w-12">
                  <NavIcon id={tab.id} active={isActive} />
                  <span className={`text-[8px] font-semibold ${isActive ? 'text-[#E2561B]' : 'text-gray-600'}`}>
                    {tab.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
