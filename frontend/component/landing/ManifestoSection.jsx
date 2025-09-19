import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Zap, Target, Brain, Coffee } from 'lucide-react';
import GinjaText from './GinjaText';

export default function ManifestoSection() {
  const manifestoPoints = [
    {
      icon: Heart,
      title: "Life Can Be Wahala Sometimes",
      description: "Between work, school, hustle, family, and just trying to catch your breath, it's easy to feel stressed and overwhelmed. That's why we're building Ginja.",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-600",
      emoji: "💔"
    },
    {
      icon: Brain,
      title: "Your Personal Assistant That Never Gets Tired",
      description: "Think of Ginja like your personal assistant that never gets tired. A space where you feel safe, organized, and on top of your plans.",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      emoji: "🧠"
    },
    {
      icon: Zap,
      title: "Smart Suggestions That Actually Understand You",
      description: "With our intelligent Ginja assistant, you'll get smart suggestions, reminders, and tips that actually understand you not some generic planner vibe.",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      emoji: "⚡"
    },
    {
      icon: Users,
      title: "Do Tasks With Friends",
      description: "With Ginja, you can also do tasks with friends, keep streaks, celebrate wins together, and explore plenty more features that make planning feel less boring and more fun.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      emoji: "👥"
    },
    {
      icon: Target,
      title: "Keep Streaks & Celebrate Wins",
      description: "Build momentum with streaks that actually matter. Every small win deserves celebration because progress is progress, no matter how small!",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      emoji: "🎯"
    },
    {
      icon: Coffee,
      title: "Make Planning Less Boring",
      description: "At the end of the day, it's simple: Get Ginja'd, Get Organized. But we make it fun, engaging, and actually enjoyable to stay on top of your life.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      emoji: "☕"
    }
  ];

  return (
    <section id="manifesto" className="py-20 bg-gradient-to-br from-orange-50 via-[#C4C879]/20 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E2561B]/20 rounded-full opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#C4C879]/30 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#C4C879]/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Why We{' '}
            <span className="text-[#E2561B]">Built </span>
            <GinjaText size="xl" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our manifesto for creating a productivity app that actually{' '}
            <span className="font-semibold text-[#E2561B]">gets you</span> ✨
          </p>
        </motion.div>

        {/* Manifesto Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {manifestoPoints.map((point, index) => (
            <motion.div
              key={index}
              className={`${point.bgColor} ${point.borderColor} border-2 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Floating emoji */}
              <div className="absolute top-4 right-4 text-2xl opacity-20">
                {point.emoji}
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 ${point.bgColor} border-2 ${point.borderColor} rounded-2xl flex items-center justify-center mb-6`}>
                <point.icon className={`w-8 h-8 ${point.iconColor}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to Get Ginja'd?
          </h3>
          <p className="text-gray-600">
            Join thousands of Naija people already staying organized with purpose!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
