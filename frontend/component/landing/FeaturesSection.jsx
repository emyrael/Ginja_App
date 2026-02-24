import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ListChecks, Bell, Heart, TrendingUp, Users } from 'lucide-react';
import GinjaText from './GinjaText';
import PhoneFrame from './ui/PhoneFrame';
import {
  HomeScreen,
  BrainDumpScreen,
  WellnessScreen,
  ProgressScreen,
  TodoCompletedScreen,
  TodoSharedScreen,
  TodoUpcomingScreen,
} from './ui/ScreenMockups';

export default function FeaturesSection() {

  const features = [
    {
      icon: Zap,
      title: "Brain Dump",
      description: "Offload everything on your mind. Write or speak a stream of thoughts, and Ginja breaks it into actionable tasks — no filter needed.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      emoji: "⚡"
    },
    {
      icon: Heart,
      title: "Wellness",
      description: "A wellbeing hub with mood check-ins, quick resets (breathe, walk, stretch, hydrate) and a weekly planning tool so you can set intentions and look after yourself.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-500",
      emoji: "❤️"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Timely, context-aware reminders that respect your energy and schedule. No spam — just the right nudge at the right moment.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      emoji: "✨"
    },
    {
      icon: ListChecks,
      title: "Task Manager",
      description: "Organise tasks with categories (Personal, Work, Social), due dates, times, notes and even import events straight from your calendar.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      emoji: "📋"
    },
    {
      icon: TrendingUp,
      title: "Progress & Achievements",
      description: "View your streaks for the week, track active days, and celebrate milestones like \"Early Bird\" and \"First Week.\" Consistency never looked this good.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      emoji: "📈"
    },
    {
      icon: Users,
      title: "Shared, Upcoming & Completed",
      description: "Collaborate on shared plans with your squad, plan ahead in the upcoming view and celebrate recent wins in the completed tab. Stay ginja'd together! 💪",
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
          Finally, a productivity app that understands real life. No generic templates, no stiff routines just simple{' '}
            <span className="font-semibold text-[#E2561B]">home grown efficiency</span> ✨
          </p>
        </motion.div>


        {/* ═══ See Ginja in Action ═══ */}
        <motion.div
          className="mb-16 sm:mb-20 bg-gradient-to-br from-orange-50 via-[#C4C879]/15 to-green-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#E2561B]/10 rounded-full opacity-40 animate-pulse" />
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#C4C879]/20 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-400/10 rounded-full opacity-40 animate-pulse" style={{animationDelay: '2s'}} />
          </div>

          {/* Section heading */}
          <div className="text-center mb-12 sm:mb-16 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              See Ginja in Action 📱
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
              Explore every feature up close — from brain dumps to wellness check-ins, here&apos;s exactly what&apos;s inside the app.
            </p>
          </div>

          {/* 7 feature sections with phone mockups */}
          <div className="space-y-20 sm:space-y-28 relative z-10">

          {/* ── 1. Brain Dump ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="flex justify-center lg:justify-start" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="home">
                <HomeScreen />
              </PhoneFrame>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-[#E2561B] px-3 py-1 rounded-full text-xs font-semibold mb-4">⚡ Brain Dump</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Get it out of your head.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Write or speak everything on your mind and let Ginja break it into actionable tasks. No more mental clutter — just clarity.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[#E2561B] mt-0.5">✦</span> Free-form text or voice input</li>
                <li className="flex items-start gap-2"><span className="text-[#E2561B] mt-0.5">✦</span> AI-powered task breakdown</li>
                <li className="flex items-start gap-2"><span className="text-[#E2561B] mt-0.5">✦</span> Instantly creates categorised todos</li>
              </ul>
            </motion.div>
          </div>

          {/* ── 2. Voice to Text ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-green-100 text-[#4E8C06] px-3 py-1 rounded-full text-xs font-semibold mb-4">🎙️ Voice to Text</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Talk — we&apos;ll handle the rest.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Too tired to type? Tap the mic, speak your thoughts, and Ginja converts them into structured tasks instantly.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[#4E8C06] mt-0.5">✦</span> One-tap voice capture</li>
                <li className="flex items-start gap-2"><span className="text-[#4E8C06] mt-0.5">✦</span> Works inside Brain Dump &amp; Todo</li>
                <li className="flex items-start gap-2"><span className="text-[#4E8C06] mt-0.5">✦</span> Hands-free productivity</li>
              </ul>
            </motion.div>
            <motion.div className="flex justify-center lg:justify-end order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="home">
                <BrainDumpScreen />
              </PhoneFrame>
            </motion.div>
          </div>

          {/* ── 3. Calendar Integration ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="flex justify-center lg:justify-start" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="home">
                <HomeScreen />
              </PhoneFrame>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">📅 Calendar Integration</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Your calendar, your todos.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Import events straight from your calendar and turn them into actionable items. No more switching between apps to stay on track.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">✦</span> One-tap calendar import</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">✦</span> Events become smart todos</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-0.5">✦</span> Suggested priorities based on schedule</li>
              </ul>
            </motion.div>
          </div>

          {/* ── 4. Shared ToDos ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">👥 Shared ToDos</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Get things done together.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Create shared tasks with friends, family, or teammates. Track who&apos;s doing what, stay accountable, and celebrate wins as a squad.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">✦</span> Assign &amp; share with anyone</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">✦</span> Overdue &amp; completion badges</li>
                <li className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">✦</span> Notes &amp; due-time tracking</li>
              </ul>
            </motion.div>
            <motion.div className="flex justify-center lg:justify-end order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="todo">
                <TodoSharedScreen />
              </PhoneFrame>
            </motion.div>
          </div>

          {/* ── 5. Circle (Accountability) ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="flex justify-center lg:justify-start" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="todo">
                <TodoCompletedScreen />
              </PhoneFrame>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">🤝 Circle</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Real accountability — no cap.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Track completed tasks together, celebrate each other&apos;s wins, and keep the energy high. From personal goals to group projects — your circle keeps you going.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-purple-600 mt-0.5">✦</span> See completed wins at a glance</li>
                <li className="flex items-start gap-2"><span className="text-purple-600 mt-0.5">✦</span> Category tags (Personal, Work, Social)</li>
                <li className="flex items-start gap-2"><span className="text-purple-600 mt-0.5">✦</span> Notes &amp; timestamps for full context</li>
              </ul>
            </motion.div>
          </div>

          {/* ── 6. Progress Tracking ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="order-2 lg:order-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-[#E2561B] px-3 py-1 rounded-full text-xs font-semibold mb-4">📈 Progress</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Consistency over perfection.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Weekly activity dots, active streaks, and achievement badges — everything you need to stay motivated and see how far you&apos;ve come.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[#E2561B] mt-0.5">✦</span> Visual weekly calendar</li>
                <li className="flex items-start gap-2"><span className="text-[#E2561B] mt-0.5">✦</span> Streak counter &amp; milestones</li>
                <li className="flex items-start gap-2"><span className="text-[#E2561B] mt-0.5">✦</span> Achievement badges you can earn</li>
              </ul>
            </motion.div>
            <motion.div className="flex justify-center lg:justify-end order-1 lg:order-2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="progress">
                <ProgressScreen />
              </PhoneFrame>
            </motion.div>
          </div>

          {/* ── 7. Wellness Tracking ── */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div className="flex justify-center lg:justify-start" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <PhoneFrame activeTab="wellness">
                <WellnessScreen />
              </PhoneFrame>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold mb-4">❤️ Wellness</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Check in with yourself.</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">Quick mood check-ins, weekly planning, and micro-resets — breathe, walk, stretch, hydrate. Small actions that shift your energy when you need it most.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✦</span> 6-mood check-in (no judgment)</li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✦</span> Plan your week in one tap</li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-0.5">✦</span> Quick resets: Breathe, Walk, Stretch, Hydrate</li>
              </ul>
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
            Join thousands of people already staying ginja'd with purpose!
          </p>
        </motion.div>
      </div>
    </section>
  );
}