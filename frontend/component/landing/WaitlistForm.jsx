import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client conditionally
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create client if we have valid credentials
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    instagramUsername: '',
    city: '',
    notes: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Demo mode if no Supabase credentials
      if (!supabase) {
        setTimeout(() => {
          setStatus('success');
          setMessage('Demo Mode: Form submitted successfully! 🎉 (Set up Supabase to save real data)');
          setFormData({ fullName: '', email: '', instagramUsername: '', city: '', notes: '' });
        }, 1500);
        return;
      }

      // Real Supabase submission
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            instagram_username: formData.instagramUsername || null,
            city: formData.city,
            notes: formData.notes
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setMessage('Welcome to the Ginja gang! 🎉 We\'ll keep you posted on our launch!');
      setFormData({ fullName: '', email: '', instagramUsername: '', city: '', notes: '' });
      
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="waitlist" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Join the{' '}
            <span className="text-[#E2561B]">
              Waitlist
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto px-4 sm:px-0">
            Be among the first to experience productivity,{' '}
            <span className="font-semibold text-[#E2561B]">Naija style</span>
          </p>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div 
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {status === 'success' ? (
            <motion.div 
              className="text-center py-8 sm:py-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">You're In! 🎉</h3>
              <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">{message}</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-[#E2561B] hover:text-[#E2561B]/80 font-medium text-sm sm:text-base"
              >
                Add another person →
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  What should we call you? 👋
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-gray-200 focus:border-[#E2561B] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  placeholder="you fit use nickname"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address 📧
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-gray-200 focus:border-[#E2561B] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Instagram Username */}
              <div>
                <label htmlFor="instagramUsername" className="block text-sm font-semibold text-gray-700 mb-2">
                  Instagram Username
                </label>
                <input
                  type="text"
                  id="instagramUsername"
                  name="instagramUsername"
                  value={formData.instagramUsername}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-gray-200 focus:border-[#E2561B] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  placeholder="@your_instagram (optional)"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  Where you dey? 🏠
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-gray-200 focus:border-[#E2561B] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  placeholder="e.g., Lagos, Abuja, Port Harcourt..."
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                  What excites you most about Ginja? ✨
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  required
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border-2 border-gray-200 focus:border-[#E2561B] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-500 resize-none text-sm sm:text-base"
                  placeholder="Tell us what made you want to join! The more you share, the better we can make Ginja for you 🚀"
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <p className="text-red-600 text-center text-sm sm:text-base">{message}</p>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-[#E2561B] to-[#C4C879] hover:from-[#E2561B]/90 hover:to-[#C4C879]/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    Adding you to the gang...
                  </>
                ) : (
                  <>
                    Stay Ginja'd 🚀
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                We respect your privacy. No spam, just pure Ginja goodness! 😊
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}