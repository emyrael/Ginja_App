import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import GinjaLogo from './GinjaLogo';
import GinjaText from './GinjaText';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, handle: '@ginja_app', url: 'https://instagram.com/ginja_app', color: 'hover:text-[#E2561B]' },
    { icon: Mail, handle: 'info@ginjaapp.com', url: 'mailto:info@ginjaapp.com', color: 'hover:text-[#96B56C]' }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          
          {/* Brand Section */}
          <motion.div 
            className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <GinjaLogo size="sm" />
              <h3 className="text-xl sm:text-2xl font-black">
                <GinjaText size="md" />
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md text-sm sm:text-base">
              The productivity app built for everyone. 
              Stay Ginja'd, stay Organized, stay Winning! 🚀
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl"></span>
              <span className="text-xs sm:text-sm font-medium text-gray-300"></span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="#features" 
                className="block text-gray-400 hover:text-[#E2561B] transition-colors duration-200 text-sm sm:text-base"
              >
                Features
              </a>
              <a 
                href="#waitlist" 
                className="block text-gray-400 hover:text-[#E2561B] transition-colors duration-200 text-sm sm:text-base"
              >
                Join Waitlist
              </a>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('https://ginjaapp.com');
                  // You could add a toast notification here if you have one
                }}
                className="flex items-center gap-2 text-gray-400 hover:text-[#E2561B] transition-colors duration-200 text-sm sm:text-base cursor-pointer"
              >
                Share Ginja
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold">Connect With Us</h4>
            <div className="space-y-3 sm:space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`flex items-center gap-2 sm:gap-3 text-gray-400 ${social.color} transition-all duration-300 group`}
                  whileHover={{ x: 5 }}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">{social.handle}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2025 Ginja App. All rights reserved. 
            <span className="ml-1 sm:ml-2">Built with 💜 for getting things done</span>
          </p>
          
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
            <a href="#" className="hover:text-[#E2561B] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E2561B] transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#E2561B] transition-colors duration-200">
              Support
            </a>
          </div>
        </motion.div>

        {/* Fun floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-2 h-2 bg-[#E2561B] rounded-full opacity-60"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-40 left-16 w-1 h-1 bg-[#96B56C] rounded-full opacity-40"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </footer>
  );
}