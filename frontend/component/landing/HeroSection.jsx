import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/button';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';

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
                <span className="text-[#E2561B] font-medium text-xs sm:text-sm">✨Smart Notifications</span>
              </div>
              <div className="bg-[#C4C879]/20 border border-[#4E8C06]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-[#4E8C06] font-medium text-xs sm:text-sm">📋 Task Manager</span>
              </div>
              <div className="bg-blue-100 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-blue-600 font-medium text-xs sm:text-sm">🎤 Voice Messages</span>
              </div>
              <div className="bg-[#E2561B]/10 border border-[#E2561B]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-[#E2561B] font-medium text-xs sm:text-sm">🔥 Streaks</span>
              </div>
              <div className="bg-purple-100 border border-purple-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-purple-600 font-medium text-xs sm:text-sm">🧠 Ginja Assistance</span>
              </div>
              <div className="bg-[#C4C879]/20 border border-[#4E8C06]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <span className="text-[#4E8C06] font-medium text-xs sm:text-sm">💔 Rant Space</span>
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

          {/* Right side - Phone mockup matching your actual app */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Phone with gradient border */}
              <div className="w-72 sm:w-80 h-[580px] sm:h-[640px] bg-gradient-to-br from-[#E2561B] via-[#C4C879] to-green-600 rounded-[2.5rem] sm:rounded-[3rem] p-1 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.3rem] sm:rounded-[2.8rem] relative overflow-hidden">
                  
                  {/* White screen inside matching your app */}
                  <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-[#C4C879]/20 to-green-50 rounded-[1.8rem] sm:rounded-[2.3rem] overflow-hidden">
                    <div className="h-full flex flex-col">
                      
                      {/* Top action buttons like in your app */}
                      <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 pt-4 sm:pt-6">
                        <div className="flex-1 bg-green-500 text-white rounded-xl sm:rounded-2xl py-2 sm:py-3 px-3 sm:px-4 text-center font-semibold text-xs sm:text-sm">
                          + Add Task
                        </div>
                        <div className="flex-1 bg-[#C4C879] text-gray-800 rounded-xl sm:rounded-2xl py-2 sm:py-3 px-3 sm:px-4 text-center font-semibold text-xs sm:text-sm">
                          🎤 Voice Note
                        </div>
                      </div>

                      {/* Today's Progress Section */}
                      <div className="mx-3 sm:mx-4 mb-3 sm:mb-4 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-xs sm:text-sm">🎯</span>
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Today's Progress</h3>
                        </div>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs sm:text-sm text-gray-600">Tasks completed</span>
                          <span className="text-xs sm:text-sm font-semibold">1/3</span>
                        </div>
                        
                        <div className="w-full h-1.5 sm:h-2 bg-yellow-200 rounded-full mb-3 sm:mb-4">
                          <div className="w-1/3 h-1.5 sm:h-2 bg-green-500 rounded-full" />
                        </div>

                        {/* Task list */}
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-600 line-through">Go to the gym</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-300 rounded-full" />
                            <span className="text-xs sm:text-sm text-gray-900">Create content for TikTok</span>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-gray-300 rounded-full" />
                            <span className="text-xs sm:text-sm text-gray-900">Buy data for mama</span>
                          </div>
                        </div>
                      </div>

                      {/* Current Streaks Section */}
                      <div className="mx-3 sm:mx-4 mb-3 sm:mb-4 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <span className="text-base sm:text-lg">⚡</span>
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base">Current Streaks</h3>
                        </div>
                        
                        <div className="flex gap-2 sm:gap-3">
                          <div className="flex-1 bg-orange-400 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                            <div className="text-white text-sm sm:text-lg mb-1">💪</div>
                            <div className="text-white text-xs font-medium">Daily Tasks</div>
                          </div>
                          <div className="flex-1 bg-orange-400 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                            <div className="text-white text-sm sm:text-lg mb-1">🏃</div>
                            <div className="text-white text-xs font-medium">Exercise</div>
                          </div>
                          <div className="flex-1 bg-orange-400 rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center">
                            <div className="text-white text-sm sm:text-lg mb-1">📚</div>
                            <div className="text-white text-xs font-medium">Reading</div>
                          </div>
                        </div>
                      </div>

                      {/* Ginja Wisdom Quote */}
                      <div className="mx-3 sm:mx-4 mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-center">
                        <p className="text-white text-xs sm:text-sm italic mb-1">
                          "Small progress na still progress! Keep pushing! 💪"
                        </p>
                        <p className="text-white text-xs opacity-80">- Ginja wisdom</p>
                      </div>

                      {/* Bottom Navigation matching your app */}
                      <div className="mt-auto bg-white border-t border-gray-100 px-3 sm:px-4 py-1.5 sm:py-2">
                        <div className="flex items-center justify-around">
                          <div className="flex flex-col items-center py-1 sm:py-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-white text-xs">🏠</span>
                            </div>
                            <span className="text-xs font-medium text-green-600">Home</span>
                          </div>
                          <div className="flex flex-col items-center py-1 sm:py-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-500 text-xs">📋</span>
                            </div>
                            <span className="text-xs text-gray-500">Tasks</span>
                          </div>
                          <div className="flex flex-col items-center py-1 sm:py-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-500 text-xs">🔥</span>
                            </div>
                            <span className="text-xs text-gray-500">Streaks</span>
                          </div>
                          <div className="flex flex-col items-center py-1 sm:py-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-500 text-xs">👥</span>
                            </div>
                            <span className="text-xs text-gray-500">Friends</span>
                          </div>
                          <div className="flex flex-col items-center py-1 sm:py-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-500 text-xs">💬</span>
                            </div>
                            <span className="text-xs text-gray-500">Chat</span>
                          </div>
                          <div className="flex flex-col items-center py-1 sm:py-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-lg flex items-center justify-center mb-1">
                              <span className="text-gray-500 text-xs">💔</span>
                            </div>
                            <span className="text-xs text-gray-500">Rant</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -right-2 sm:-right-4 top-16 sm:top-20 w-8 h-8 sm:w-12 sm:h-12 bg-[#E2561B] rounded-full flex items-center justify-center shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-white text-sm sm:text-lg">🎯</span>
                  </motion.div>

                  <motion.div
                    className="absolute -left-2 sm:-left-4 bottom-24 sm:bottom-32 w-6 h-6 sm:w-10 sm:h-10 bg-[#C4C879] rounded-full flex items-center justify-center shadow-lg"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <span className="text-white text-xs sm:text-sm">⚡</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}