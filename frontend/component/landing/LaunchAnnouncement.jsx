import React from 'react';
import { motion } from 'framer-motion';

export default function LaunchAnnouncement() {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#E2561B]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#4E8C06]/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8">
            Ginja Is Launching Soon{' '}
            <span className="inline-block animate-bounce">🚀</span>
          </h2>

          <div className="space-y-5 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            <motion.p
              className="text-gray-900 dark:text-white text-lg sm:text-xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              We&apos;re almost ready.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              Ginja will be live and available very soon —<br />
              and we genuinely cannot wait to show you what we&apos;ve built.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
            >
              What started as a simple idea has evolved into a powerful space<br />
              for clarity, focus, and intentional action.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: true }}
            >
              This is more than another productivity app.<br />
              <span className="text-gray-900 dark:text-white font-semibold">It&apos;s a new way to think, plan, and move.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: true }}
            >
              We&apos;re putting the final touches on something special.
            </motion.p>

            <motion.p
              className="text-gray-900 dark:text-white text-lg sm:text-xl font-bold pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              viewport={{ once: true }}
            >
              Be among the first to experience it.
            </motion.p>
          </div>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E2561B]/40" />
            <span className="text-[#E2561B] text-xs">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#4E8C06]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
