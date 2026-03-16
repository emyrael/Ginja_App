import React from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'todo', label: 'Todo' },
  { id: 'circle', label: 'Circle' },
  { id: 'progress', label: 'Progress' },
  { id: 'wellness', label: 'Wellness' },
];

function NavIcon({ id, active }) {
  const size = 17;
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  const icons = {
    home: (
      <svg {...base}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    todo: (
      <svg {...base}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
    ),
    circle: (
      <svg {...base}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
    progress: (
      <svg {...base}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    ),
    wellness: (
      <svg {...base} fill={active ? 'currentColor' : 'none'}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    ),
  };

  return icons[id] || null;
}

export default function PhoneFrame({ children, activeTab = 'home', className = '' }) {
  return (
    <motion.div
      className={`flex-shrink-0 ${className || 'w-[290px] sm:w-[320px]'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="rounded-[2.8rem] border border-[#D6CCBE] bg-[#F3EEE5] p-[4px] shadow-[0_24px_60px_rgba(35,30,24,0.22)] dark:border-[#2D2F35] dark:bg-[#101217] dark:shadow-[0_22px_54px_rgba(0,0,0,0.55)]">
        <div className="overflow-hidden rounded-[2.6rem] border border-[#E4DBCF] bg-[#F1EEE8] dark:border-[#24262B] dark:bg-[#0E1014]">
          <div className="relative flex items-center justify-between px-6 pb-1 pt-3">
            <span className="text-[10px] font-semibold tabular-nums text-[#201E1A] dark:text-white/90">00:38</span>
            <div className="absolute left-1/2 top-0 h-[22px] w-[88px] -translate-x-1/2 rounded-b-[14px] bg-black" />
            <div className="flex items-center gap-1 text-[10px] text-[#3A3732] dark:text-white/80">
              <span className="font-medium">5G</span>
              <svg width="18" height="10" viewBox="0 0 25 12" fill="none">
                <rect x="0.5" y="0.5" width="21" height="11" rx="2" stroke="currentColor" strokeOpacity="0.45"/>
                <rect x="2" y="2" width="14" height="8" rx="1" fill="currentColor" fillOpacity="0.8"/>
                <path d="M23 4v4a1.5 1.5 0 000-4z" fill="currentColor" fillOpacity="0.45"/>
              </svg>
            </div>
          </div>

          <div className="min-h-[500px] max-h-[540px] overflow-hidden">{children}</div>

          <div className="flex items-center justify-around border-t border-[#E1DACC] bg-[#F8F5EF] px-1 py-2 dark:border-white/[0.06] dark:bg-[#0F1115]">
            {NAV_ITEMS.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <div key={tab.id} className="flex w-12 flex-col items-center gap-[2px]">
                  <span className={`${isActive ? 'text-[#ED8522]' : 'text-[#7B746A] dark:text-[#9699A0]'}`}>
                    <NavIcon id={tab.id} active={isActive} />
                  </span>
                  <span className={`text-[8px] font-semibold ${isActive ? 'text-[#ED8522]' : 'text-[#7B746A] dark:text-[#9699A0]'}`}>
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
