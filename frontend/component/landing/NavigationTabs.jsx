import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Target, Heart } from 'lucide-react';
import Link from 'next/link';
import GinjaLogo from './GinjaLogo';

export default function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      color: '#4E8C06',
      href: '#home'
    },
    {
      id: 'features',
      name: 'Features',
      icon: Target,
      color: '#E2561B',
      href: '#features'
    },
    {
      id: 'manifesto',
      name: 'Why Ginja',
      icon: Heart,
      color: '#4E8C06',
      href: '#manifesto'
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Always scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/90 via-green-50/30 to-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <GinjaLogo size="md" />
          </Link>

          {/* Navigation Tabs - Always visible but responsive */}
          <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-center">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`relative px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 relative z-10">
                  <tab.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4" />
                  <span className="text-xs sm:text-sm lg:text-base">{tab.name}</span>
                </div>
                
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#E2561B]"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* CTA Button - Always visible but responsive */}
          <motion.button
            className="bg-gradient-to-r from-[#E2561B] to-[#C4C879] hover:from-[#E2561B]/90 hover:to-[#C4C879]/90 text-white font-bold px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm lg:text-base"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const waitlistSection = document.getElementById('waitlist');
              if (waitlistSection) {
                waitlistSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>
    </div>
  );
}
