import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';
import AnimatedPhonePreview from './ui/AnimatedPhonePreview';

export default function HeroSection({ onJoinWaitlist }) {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-50 via-[#C4C879]/20 to-green-50 overflow-hidden flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E2561B]/20 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#C4C879]/30 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C4C879]/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left side - Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo and Brand Name */}
            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <GinjaLogo size="lg" />
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <GinjaText size="lg" />
              </motion.h1>
            </div>

            {/* Main Tagline - exactly like your image */}
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-2">
                Stay Ginja'd.
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="text-[#E2561B]">Stay</span> <span className="text-[#4E8C06]">Organized.</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              The Productivity app that actually gets your vibe.{' '}
              <span className="font-semibold text-[#E2561B]"></span> 
            </motion.p>

            {/* Feature badges - with more features */}
            <motion.div 
              className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="bg-[#E2561B]/10 border border-[#E2561B]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-[#E2561B] font-medium text-xs sm:text-sm">⚡ Brain Dump</span>
              </div>
              <div className="bg-red-50 border border-red-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-red-500 font-medium text-xs sm:text-sm">❤️ Wellness</span>
              </div>
              <div className="bg-[#C4C879]/20 border border-[#4E8C06]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-[#4E8C06] font-medium text-xs sm:text-sm">✨ Smart Notifications</span>
              </div>
              <div className="bg-blue-100 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-blue-600 font-medium text-xs sm:text-sm">📋 Task Manager</span>
              </div>
              <div className="bg-[#E2561B]/10 border border-[#E2561B]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-[#E2561B] font-medium text-xs sm:text-sm">📈 Progress & Achievements</span>
              </div>
              <div className="bg-purple-100 border border-purple-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-purple-600 font-medium text-xs sm:text-sm">👥 Shared & Upcoming Tasks</span>
              </div>
            </motion.div>

            {/* CTA Button - matching your image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Button
                onClick={onJoinWaitlist}
                className="bg-gradient-to-r from-[#E2561B] to-[#C4C879] hover:from-[#E2561B]/90 hover:to-[#C4C879]/90 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>

            <motion.p 
              className="text-sm text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Be the first to experience the future of productivity 🚀
            </motion.p>
          </motion.div>

          {/* Right side - Animated phone product preview */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              <AnimatedPhonePreview />

              {/* Floating accent elements */}
              <motion.div
                className="absolute -right-3 sm:-right-5 top-16 sm:top-20 w-8 h-8 sm:w-12 sm:h-12 bg-[#E2561B] rounded-full flex items-center justify-center shadow-lg z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-white text-sm sm:text-lg">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -left-3 sm:-left-5 bottom-24 sm:bottom-32 w-6 h-6 sm:w-10 sm:h-10 bg-[#C4C879] rounded-full flex items-center justify-center shadow-lg z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="text-white text-xs sm:text-sm">❤️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}