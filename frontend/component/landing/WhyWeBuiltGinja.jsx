import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GinjaText from './GinjaText';

export default function WhyWeBuiltGinja() {
  const ginjaForCards = [
    { emoji: '💼', title: 'The Overwhelmed Professional', desc: 'Juggling work, meetings, and life with no breathing room.' },
    { emoji: '🎨', title: 'The Creative', desc: '50 ideas in your head but no structure to act on them.' },
    { emoji: '📚', title: 'The Student', desc: 'Balancing deadlines, exams, and pressure every single day.' },
    { emoji: '🚀', title: 'The Founder', desc: 'Building something from nothing — with zero margin for chaos.' },
    { emoji: '🏠', title: 'The Remote Worker', desc: 'Fighting distraction while trying to stay focused and productive.' },
    { emoji: '🧠', title: 'Anyone Who Needs Clarity', desc: 'Mental clarity first, productivity second. Always.' },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* ── Why We Built Ginja ── */}
      <div className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-48 h-48 bg-[#E2561B]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#4E8C06]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Why We Built{' '}
              <GinjaText size="lg" />
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">The world is louder than ever.</p>

            <p>
              Notifications. Deadlines. Expectations. Group chats. Emails.<br />
              Everyone wants something. Everything feels urgent.
            </p>

            <p>But productivity apps today are built to managae tasks not for humans.</p>

            <p className="border-l-4 border-[#E2561B] pl-4 sm:pl-6 text-gray-900 dark:text-white font-medium">
              People aren&apos;t just overwhelmed. They&apos;re mentally overloaded.
            </p>

            <p>
              You wake up already behind.<br />
              You carry thoughts all day.<br />
              You plan, but you&apos;re exhausted.<br />
              You want to move forward — but you need space first.
            </p>

            <p className="text-gray-900 dark:text-white font-semibold">Ginja was built as a response to that.</p>

            <div className="bg-gray-100 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-8">
              <p className="text-gray-900 dark:text-white font-semibold mb-3">A space to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Get everything out of your head</li>
                <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Break it down into simple action</li>
                <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Track progress without pressure</li>
                <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Check in with your energy</li>
                <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Reset without guilt</li>
              </ul>
            </div>

            <p className="text-center text-gray-900 dark:text-white text-lg sm:text-xl font-semibold pt-4">
              Because productivity isn&apos;t about doing more.<br />
              It&apos;s about doing what matters with clarity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Why the Name "Ginja"? ── */}
      <div className="py-16 sm:py-24 bg-gray-100/80 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-20 w-40 h-40 bg-[#C4C879]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Why the Name{' '}
              <span className="text-[#E2561B]">&ldquo;</span>
              <GinjaText size="lg" />
              <span className="text-[#4E8C06]">&rdquo;</span>
              ?
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              <span className="text-gray-900 dark:text-white font-semibold">&ldquo;Ginja&rdquo;</span> is a common Nigerian slang that means:<br />
              <span className="text-[#E2561B] font-bold text-lg sm:text-xl">Get motivated. Feel driven. Let&apos;s go.</span>
            </p>

            <p>
              It&apos;s the energy that pushes you to move.<br />
              The spark that makes you want to act.
            </p>

            <p>
              As the world becomes more overwhelming, people don&apos;t need another complicated system.<br />
              They need something that gives them that spark — calmly.
            </p>

            <p className="text-gray-900 dark:text-white font-semibold text-lg sm:text-xl">Ginja is that spark.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 text-gray-900 dark:text-white font-medium pt-2">
              <span>Motivation without pressure.</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">·</span>
              <span>Structure without stress.</span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">·</span>
              <span>Focus without burnout.</span>
            </div>

            <p className="text-2xl sm:text-3xl font-black pt-4">
              Stay <span className="text-[#E2561B]">Ginja&apos;d</span>. Stay <span className="text-[#4E8C06]">Organized</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Who Is Ginja For? ── */}
      <div className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-[#E2561B]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              Who Is <GinjaText size="lg" /> For?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ginjaForCards.map((card, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-[#E2561B]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="text-2xl sm:text-3xl mb-3 block">{card.emoji}</span>
                <h3 className="text-gray-900 dark:text-white font-bold text-base sm:text-lg mb-1">{card.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-8 sm:mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            It&apos;s not just a task manager.<br />
            <span className="text-gray-900 dark:text-white font-semibold">It&apos;s a thinking space.</span>
          </motion.p>
        </div>
      </div>

      <div className="py-16 sm:py-24 bg-gray-100/80 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-1/3 w-48 h-48 bg-[#4E8C06]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">Meet the Founder</h2>
          </motion.div>

          <motion.div
            className="bg-gray-100 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">Emmanuel Onwubuya</h3>
            <p className="text-[#E2561B] font-medium text-sm sm:text-base mb-6">AI Software &amp; Data Engineer</p>

            <div className="space-y-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Emmanuel is an AI and Data Engineer with experience across multiple industries including healthcare,
                logistics, aviation, finance, and artificial intelligence systems.
              </p>
              <p>
                Throughout his career, he built scalable data platforms, automation systems, analytics dashboards,
                and AI-driven solutions that processed millions of records and powered real business decisions.
              </p>
              <p className="border-l-4 border-[#E2561B] pl-4 sm:pl-6 text-gray-900 dark:text-white font-medium">
                But while solving complex technical problems, he noticed something simple:<br />
                People were overwhelmed.
              </p>
              <p>
                High-performing professionals were burning out.
                Smart people were struggling with clarity.
                Systems were optimized — but humans weren&apos;t.
              </p>
              <p className="text-gray-900 dark:text-white font-semibold">Ginja was born from that realization.</p>
              <p>
                Emmanuel built Ginja as a human-first productivity system — combining structured task management,
                emotional awareness, and intelligent breakdown tools to help people think clearly and move intentionally.
              </p>

              <div className="bg-gray-200/60 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-xl p-5 mt-4">
                <p className="text-gray-900 dark:text-white font-semibold mb-1">His mission:</p>
                <p className="text-gray-600 dark:text-gray-300">
                  To build tools that don&apos;t just increase output<br />
                  but improve how people <span className="text-[#E2561B] font-medium">feel</span> while working.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E2561B] to-[#C4C879] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Read Full Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
