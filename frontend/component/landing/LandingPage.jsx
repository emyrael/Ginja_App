import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ManifestoSection from './ManifestoSection';
import WaitlistForm from './WaitlistForm';
import Footer from './Footer';
import NavigationTabs from './NavigationTabs';

export default function LandingPage() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {activeTab === 'home' && <HeroSection onJoinWaitlist={handleJoinWaitlist} />}
        {activeTab === 'features' && <FeaturesSection />}
        {activeTab === 'manifesto' && <ManifestoSection />}
        <WaitlistForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[#E2561B] to-[#C4C879] text-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
