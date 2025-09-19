import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Target, Mic, Heart, Brain, Users, Home, CheckSquare, Flame, Trophy, Zap } from 'lucide-react';
import GinjaText from './GinjaText';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);

  // App preview tabs data
  const appTabs = [
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      color: '#22c55e',
      preview: {
        title: 'Today\'s Progress',
        content: [
          { type: 'progress', label: 'Daily Tasks', value: '3/5', color: '#22c55e' },
          { type: 'streak', label: 'Current Streak', value: '12 days', color: '#f59e0b' },
          { type: 'badge', label: 'Weekly Goal', value: '85%', color: '#8b5cf6' }
        ]
      }
    },
    {
      id: 'tasks',
      name: 'Tasks',
      icon: CheckSquare,
      color: '#3b82f6',
      preview: {
        title: 'Task Manager',
        content: [
          { type: 'task', label: 'Complete daily workout', done: true },
          { type: 'task', label: 'Read 30 minutes', done: false },
          { type: 'task', label: 'Call family', done: false }
        ]
      }
    },
    {
      id: 'streaks',
      name: 'Streaks',
      icon: Flame,
      color: '#ef4444',
      preview: {
        title: 'Achievement Badges',
        content: [
          { type: 'badge', label: 'Task Master', days: '15', color: '#22c55e' },
          { type: 'badge', label: 'Fitness Warrior', days: '8', color: '#f59e0b' },
          { type: 'badge', label: 'Knowledge Seeker', days: '22', color: '#8b5cf6' }
        ]
      }
    },
    {
      id: 'social',
      name: 'Shared Tasks',
      icon: Users,
      color: '#10b981',
      preview: {
        title: 'Ginja Friends and Gist',
        content: [
          { type: 'leaderboard', name: 'Grace N.', tasks: '32', streak: '20' },
          { type: 'leaderboard', name: 'Kemi A.', tasks: '24', streak: '12' },
          { type: 'leaderboard', name: 'David O.', tasks: '18', streak: '8' }
        ]
      }
    },
    {
      id: 'ginja',
      name: 'Ginja',
      icon: Heart,
      color: '#f97316',
      preview: {
        title: 'Talk to Ginja',
        content: [
          { type: 'mood', label: 'How are you feeling?', options: ['😤', '😰', '😢', '😴', '😕', '😊'] },
          { type: 'relief', label: 'Need immediate relief?', actions: ['Take a break', 'Get suggestions'] }
        ]
      }
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: Zap,
      color: '#8b5cf6',
      preview: {
        title: 'Smart Notifications',
        content: [
          { type: 'notification', name: 'Caulyns', message: 'It\'s time to hit the gym 🏋🏽', time: '2 min ago', color: '#22c55e' },
          { type: 'notification', name: 'Femi', message: 'Time no dey, start that TikTok content 🎬', time: '5 min ago', color: '#f59e0b' },
          { type: 'notification', name: 'Nneka', message: 'Your friend Bisola just completed the jogging routine 🏃🏽‍♀️', time: '10 min ago', color: '#8b5cf6' }
        ]
      }
    }
  ];

  // Auto-rotate tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % appTabs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: MessageCircle,
      title: "Naija Conversational Tone",
      description: "No boring corporate talk here! We speak your language - from pidgin to proper English, however you vibe.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      emoji: "💬"
    },
    {
      icon: Target,
      title: "Habit & Task Tracking",
      description: "Build streaks that would make your Xbox achievements jealous. Get badges that actually matter to your life goals!",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200", 
      iconColor: "text-pink-600",
      emoji: "🎯"
    },
    {
      icon: Mic,
      title: "Voice Messages for Tasks",
      description: "Too tired to type? Just talk am! Record voice notes for your tasks and let Ginja handle the rest. Lazy level: Expert 😴",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      emoji: "🎤"
    },
    {
      icon: Heart,
      title: "Rant Space",
      description: "Bad day? Traffic wahala? Boss stress? Drop your rants in a safe space and feel that weight lift off your chest.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      emoji: "💚"
    },
    {
      icon: Brain,
      title: "Smart Ginja Assistance",
      description: "Stuck in Lagos traffic? Moving house? Tight schedule? Our Ginja AI suggests realistic tweaks to keep you on track.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      emoji: "🧠"
    },
    {
      icon: Users,
      title: "Ginja Eachother and Gist",
      description: "Real accountability with your day ones! Create shared tasks, celebrate wins together, drag each other when slacking, and keep the squad motivated. From gym sessions to study groups - tackle goals as a team and stay ginja'd together! 💪",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      emoji: "👥"
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Why{' '}
            <GinjaText size="lg" />
            {' '}Hits{' '}
            <span className="text-[#E2561B]">
              Different
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Finally, a productivity app that gets the Naija hustle. No generic templates, no 
            foreign vibes just pure{' '}
            <span className="font-semibold text-[#E2561B]">home grown efficiency</span> ✨
          </p>
        </motion.div>


        {/* App Preview Animation */}
        <motion.div 
          className="mb-16 sm:mb-20 bg-gradient-to-br from-orange-50 via-[#C4C879]/30 to-green-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#E2561B]/10 rounded-full opacity-40 animate-pulse" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#C4C879]/20 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400/10 rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}} />
          </div>
          <div className="text-center mb-8 sm:mb-12 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              See Ginja in Action 📱
            </h3>
            <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
              Get a sneak peek of what makes productivity fun and effective
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
            
            {/* Phone Mockup */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="w-64 sm:w-72 md:w-80 h-[520px] sm:h-[580px] md:h-[640px] bg-gradient-to-br from-[#E2561B] via-[#C4C879] to-green-600 rounded-[2.5rem] sm:rounded-[3rem] p-1 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[2.3rem] sm:rounded-[2.8rem] relative overflow-hidden">
                    
                    {/* Phone Screen */}
                    <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-[#C4C879]/20 to-green-50 rounded-[1.8rem] sm:rounded-[2.3rem] overflow-hidden">
                      <div className="h-full flex flex-col">
                        
                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-50/50 to-green-50/50">
                          <span className="text-xs sm:text-sm font-medium text-gray-900">9:41 AM</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="flex-1 p-4 sm:p-6">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeTab}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.5 }}
                              className="h-full"
                            >
                              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                                {appTabs[activeTab].preview.title}
                              </h3>
                              
                              <div className="space-y-3 sm:space-y-4">
                                {appTabs[activeTab].preview.content.map((item, index) => (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-white to-orange-50/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-orange-100/50"
                                  >
                                    {item.type === 'progress' && (
                                      <div>
                                        <div className="flex justify-between items-center mb-2">
                                          <span className="text-xs sm:text-sm font-medium text-gray-700">{item.label}</span>
                                          <span className="text-xs sm:text-sm font-bold" style={{ color: item.color }}>{item.value}</span>
                                        </div>
                                        <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full">
                                          <div className="h-1.5 sm:h-2 rounded-full" style={{ backgroundColor: item.color, width: '60%' }}></div>
                                        </div>
                                      </div>
                                    )}
                                    
                                    {item.type === 'task' && (
                                      <div className="flex items-center gap-2 sm:gap-3">
                                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${item.done ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                                          {item.done && <span className="text-white text-xs">✓</span>}
                                        </div>
                                        <span className={`text-xs sm:text-sm ${item.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                          {item.label}
                                        </span>
                                      </div>
                                    )}
                                    
                                    {item.type === 'badge' && (
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                                            <span className="text-sm sm:text-lg">🏆</span>
                                          </div>
                                          <div>
                                            <div className="text-xs sm:text-sm font-medium text-gray-900">{item.label}</div>
                                            {item.days && <div className="text-xs text-gray-500">{item.days} days</div>}
                                          </div>
                                        </div>
                                        {item.value && (
                                          <div className="text-sm sm:text-lg font-bold" style={{ color: item.color }}>
                                            {item.value}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                    
                                    {item.type === 'leaderboard' && (
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">{item.name.split(' ')[0][0]}</span>
                                          </div>
                                          <div>
                                            <div className="text-xs sm:text-sm font-medium text-gray-900">{item.name}</div>
                                            <div className="text-xs text-gray-500">{item.tasks} tasks completed</div>
                                          </div>
                                        </div>
                                        <div className="text-xs sm:text-sm font-bold text-orange-500">
                                          {item.streak} streak
                                        </div>
                                      </div>
                                    )}
                                    
                                    {item.type === 'mood' && (
                                      <div>
                                        <div className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">{item.label}</div>
                                        <div className="flex gap-1 sm:gap-2 justify-between">
                                          {item.options.map((emoji, i) => (
                                            <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                              <span className="text-sm sm:text-lg">{emoji}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                    
                                    {item.type === 'relief' && (
                                      <div>
                                        <div className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">{item.label}</div>
                                        <div className="grid grid-cols-2 gap-1 sm:gap-2">
                                          {item.actions.map((action, i) => (
                                            <div key={i} className="bg-orange-100 text-orange-700 text-xs font-medium py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-center">
                                              {action}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                    
                                    {item.type === 'notification' && (
                                      <div className="bg-gradient-to-r rounded-lg p-2 shadow-sm" style={{ background: `linear-gradient(to right, ${item.color}20, ${item.color}40)` }}>
                                        <div className="flex items-start gap-2">
                                          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                                            <span className="text-xs" style={{ color: item.color }}>
                                              {item.name === 'Caulyns' ? '🏋🏽' : item.name === 'Femi' ? '🎬' : '🏃🏽‍♀️'}
                                            </span>
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="text-xs font-bold text-gray-900 mb-0.5">{item.name}</div>
                                            <div className="text-xs text-gray-700 mb-0.5 leading-tight break-words">{item.message}</div>
                                            <div className="text-xs text-gray-500">{item.time}</div>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        {/* Bottom Navigation */}
                        <div className="bg-white border-t border-gray-100 px-3 sm:px-4 py-1.5 sm:py-2">
                          <div className="flex items-center justify-around">
                            {appTabs.map((tab, index) => (
                              <motion.div
                                key={tab.id}
                                className="flex flex-col items-center py-1 sm:py-2 px-2 sm:px-3 cursor-pointer"
                                onClick={() => setActiveTab(index)}
                                whileTap={{ scale: 0.95 }}
                              >
                                <div 
                                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center mb-1 transition-all duration-200 ${
                                    index === activeTab 
                                      ? 'shadow-sm' 
                                      : 'bg-gray-200'
                                  }`}
                                  style={{ 
                                    backgroundColor: index === activeTab ? tab.color : undefined 
                                  }}
                                >
                                  <tab.icon 
                                    className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                      index === activeTab ? 'text-white' : 'text-gray-500'
                                    }`} 
                                  />
                                </div>
                                <span className={`text-xs font-medium ${
                                  index === activeTab ? 'text-gray-900' : 'text-gray-500'
                                }`}>
                                  {tab.name}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Feature Highlights */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {appTabs[activeTab].preview.title}
                </h4>
                
                <div className="space-y-3 sm:space-y-4">
                  {activeTab === 0 && (
                    <>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <CheckSquare className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Daily Progress Tracking</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">See your daily wins at a glance. No more wondering what you accomplished today!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                          <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Weekly Goals</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Set weekly targets and watch your progress grow. Small steps lead to big wins!</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 1 && (
                    <>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                          <CheckSquare className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Smart Task Management</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Break down your hustle into manageable tasks. From "call mama" to "finish project" - we got you!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <Target className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Priority Focus</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Know what matters most. Ginja helps you focus on tasks that actually move the needle.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 2 && (
                    <>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                          <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Keep Your Streaks Alive</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Build momentum with streaks that actually matter. From gym sessions to reading habits - consistency is key!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                          <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Achievement Badges</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Earn badges that celebrate your wins. "Task Master", "Fitness Warrior", "Knowledge Seeker" - wear them proud!</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 3 && ( // Shared Tasks Tab
                    <>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Start Shared Tasks with Friends</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Create group tasks with your day ones! From gym sessions to study groups - tackle goals together and stay motivated as a squad.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                          <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Take Accountability & Celebrate Wins</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Real accountability with your crew! Celebrate each other's wins, drag each other when slacking, and keep the energy high. No cap, just pure motivation!</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 4 && ( // Ginja Tab
                    <>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-full flex items-center justify-center mt-1">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Mental Check-ins</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">How are you really feeling? Take a moment to check in with yourself and acknowledge your emotions.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                          <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Relief Tools</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">When life gets overwhelming, get instant relief suggestions. Take a break, breathe, and come back stronger.</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 5 && ( // Notifications Tab
                    <>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Your Buddy with Smart Reminders</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">Ginja serves like your buddy with nice and interesting reminders and notifications so you can have stuff done and be productive!</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Playful Naija Style</h5>
                          <p className="text-gray-600 text-xs sm:text-sm">No boring corporate notifications here! Get motivated with messages that actually make you smile and want to take action.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Floating emoji */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-lg sm:text-2xl opacity-20">
                {feature.emoji}
              </div>
              
              {/* Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.bgColor} border-2 ${feature.borderColor} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <span className="text-3xl sm:text-4xl">🚀</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Ready to level up your productivity game?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Join thousands of Naija people already staying ginja'd with purpose!
          </p>
        </motion.div>
      </div>
    </section>
  );
}