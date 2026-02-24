import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneFrame from './PhoneFrame';
import {
  HomeScreen,
  TodoCompletedScreen,
  TodoSharedScreen,
  ProgressScreen,
  WellnessScreen,
} from './ScreenMockups';

const SCREENS = [
  { key: 'home', component: HomeScreen, tab: 'home' },
  { key: 'todo', component: TodoCompletedScreen, tab: 'todo' },
  { key: 'circle', component: TodoSharedScreen, tab: 'circle' },
  { key: 'progress', component: ProgressScreen, tab: 'progress' },
  { key: 'wellness', component: WellnessScreen, tab: 'wellness' },
];

const INTERVAL = 2500; // ms per screen

export default function AnimatedPhonePreview() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SCREENS.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const current = SCREENS[index];
  const ScreenComponent = current.component;

  return (
    <div className="relative">
      {/* Subtle glow behind phone */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[240px] h-[360px] sm:w-[280px] sm:h-[420px] rounded-[3rem] blur-[80px] opacity-30"
          animate={{
            background: [
              'radial-gradient(circle, rgba(226,86,27,0.35) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(78,140,6,0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(196,200,121,0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(226,86,27,0.35) 0%, transparent 70%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Phone with animated screens */}
      <PhoneFrame activeTab={current.tab}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <ScreenComponent />
          </motion.div>
        </AnimatePresence>
      </PhoneFrame>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {SCREENS.map((s, i) => (
          <motion.div
            key={s.key}
            className="w-1.5 h-1.5 rounded-full"
            animate={{
              backgroundColor: i === index ? '#E2561B' : 'rgba(255,255,255,0.2)',
              scale: i === index ? 1.3 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
