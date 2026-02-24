import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

export default function About() {
  return (
    <>
      <Head>
        <title>About — Ginja</title>
        <meta name="description" content="Meet the founder of Ginja. Learn about our mission and vision." />
        <link rel="icon" href="/logo/icon.png" />
      </Head>

      <main className="min-h-screen bg-gray-950 text-white">
        {/* Nav Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <GinjaText size="sm" />
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#E2561B]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-20 w-56 h-56 bg-[#4E8C06]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              About Emmanuel Onwubuya
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              AI Software &amp; Data Engineer &middot; Founder of <GinjaText size="sm" /> &middot; Founder of AIXelar
            </motion.p>
          </div>
        </section>

        {/* Bio */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

            {/* Intro */}
            <motion.div
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Emmanuel Onwubuya is an AI Software and Data Engineer with experience building scalable
                  systems across healthcare, logistics, aviation, finance, and artificial intelligence infrastructure.
                </p>

                <p>Throughout his career, he has designed and implemented:</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Large-scale data pipelines processing millions of records</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Cloud-based ETL and analytics systems</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Automation workflows across business operations</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> AI-powered tools that improve decision-making</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Scalable data platforms used by enterprise teams</li>
                </ul>

                <p>
                  He has worked with modern data stacks including distributed processing systems, cloud infrastructure,
                  automation frameworks, and AI-driven architectures — always focused on building systems that simplify complexity.
                </p>

                <p>But beyond technical systems, Emmanuel became deeply interested in a different problem:</p>

                <p className="text-white text-xl sm:text-2xl font-bold text-center py-2">Human overwhelm.</p>

                <p>
                  Businesses struggle with operational chaos.<br />
                  Individuals struggle with mental overload.
                </p>

                <p className="text-white font-semibold">That insight led to two parallel missions.</p>
              </div>
            </motion.div>

            {/* AIXelar */}
            <motion.div
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">AIXelar</h2>
              <p className="text-[#E2561B] font-medium text-sm sm:text-base mb-6">AI Automation &amp; Intelligent Systems</p>

              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Emmanuel is the founder of <strong className="text-white">AIXelar</strong>, an AI automation agency helping
                  businesses eliminate operational bottlenecks through intelligent automation and system design.
                </p>

                <p>
                  Through{' '}
                  <a href="https://aixelar.io" target="_blank" rel="noopener noreferrer" className="text-[#E2561B] hover:underline font-medium">
                    AIXelar
                  </a>
                  , he works with growing companies to:
                </p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Connect fragmented internal systems</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Automate repetitive workflows</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Build AI-powered assistants</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Improve operational visibility</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Design scalable data and analytics architectures</li>
                </ul>

                <div className="border-l-4 border-[#E2561B] pl-4 sm:pl-6">
                  <p className="text-white font-medium">
                    Where Ginja focuses on <span className="text-[#4E8C06]">personal clarity</span>,<br />
                    AIXelar focuses on <span className="text-[#E2561B]">operational clarity</span>.
                  </p>
                </div>

                <p className="text-white font-semibold text-center">
                  Both are built on the same philosophy:<br />
                  Reduce friction. Increase intentional action.
                </p>
              </div>
            </motion.div>

            {/* Why Ginja Exists */}
            <motion.div
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why Ginja Exists</h2>

              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>While building complex AI and data systems, Emmanuel realized something powerful:</p>

                <div className="border-l-4 border-[#4E8C06] pl-4 sm:pl-6">
                  <p className="text-white font-medium">
                    If businesses need automation to function clearly,<br />
                    humans need mental clarity to function intentionally.
                  </p>
                </div>

                <p>
                  Most productivity apps optimize output.<br />
                  Very few optimize <span className="text-white font-semibold">mental space</span>.
                </p>

                <p className="text-white font-semibold">Ginja was built as a human-first productivity system.</p>

                <p>A place where you can:</p>
                <ul className="space-y-2 ml-2">
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Offload mental clutter (Brain Dump)</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Break thoughts into clear action</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Track progress without pressure</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Check in with your energy (Wellness)</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Collaborate intentionally (Shared tasks)</li>
                  <li className="flex items-start gap-3"><span className="text-[#E2561B] mt-0.5">✦</span> Build consistency through visible progress</li>
                </ul>

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <p className="text-white font-semibold text-lg mb-1">
                    Technology should not increase overwhelm.
                  </p>
                  <p className="text-gray-300 text-lg">
                    It should create <span className="text-[#E2561B] font-semibold">clarity</span>.
                  </p>
                  <p className="text-gray-400 text-sm mt-3">
                    That&apos;s the philosophy behind both Ginja and AIXelar.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Connect With Emmanuel</h2>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/Emmanuel-Onwubuya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://instagram.com/emy_rael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
                  </div>
                  <span className="font-medium">Instagram</span>
                </a>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href="https://aixelar.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E2561B] to-[#C4C879] text-white font-bold px-5 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Visit AIXelar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/Emmanuel-Onwubuya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 text-white font-bold px-5 py-3 rounded-full hover:border-[#E2561B]/60 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://instagram.com/emy_rael"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 text-white font-bold px-5 py-3 rounded-full hover:border-[#E2561B]/60 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                Follow on Instagram
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-gray-700 text-white font-bold px-5 py-3 rounded-full hover:border-[#E2561B]/60 hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                Back to Home
              </Link>
            </motion.div>

          </div>
        </section>

        {/* Simple Footer */}
        <footer className="border-t border-gray-800/50 py-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ginja. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
