import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, Smartphone } from 'lucide-react';
import { trackDownloadPageClick } from '../../lib/analytics';
import GinjaAssistanceChat from './GinjaAssistanceChat';
import { GINJA_ASSISTANCE_CONTENT as content } from './ginjaAssistanceContent';

export default function GinjaAssistanceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ginja-assistance"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="ginja-assistance-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-64 w-64 rounded-full bg-[#87B66A]/10 blur-3xl" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-[#ED8522]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-[#E4D8CB] bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(250,247,240,0.9))] px-5 py-8 shadow-[0_24px_70px_rgba(70,48,30,0.1)] backdrop-blur dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(61,47,38,0.92),rgba(40,29,23,0.96))] sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(330px,0.72fr)] lg:items-center lg:gap-16 lg:px-12 lg:py-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-[#ED8522]/25 bg-[#FFF1E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] shadow-[0_10px_28px_rgba(237,133,34,0.1)] dark:bg-[#4A3325] dark:text-[#F1BE90]">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            {content.eyebrow}
          </p>

          <h2 id="ginja-assistance-heading" className="mt-5 max-w-2xl text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
            {content.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {content.body}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2" aria-label={content.channelLine}>
            {content.channels.map((channel) => (
              <span
                key={channel}
                className="inline-flex items-center gap-2 rounded-full border border-[#DCCDBF] bg-[var(--surface-primary)] px-3.5 py-2 text-xs font-bold text-[var(--text-strong)] shadow-[0_8px_20px_rgba(55,42,30,0.06)]"
              >
                {channel === 'WhatsApp' ? (
                  <MessageCircle className="h-3.5 w-3.5 text-[#6F9C58]" aria-hidden="true" />
                ) : (
                  <Smartphone className="h-3.5 w-3.5 text-[#ED8522]" aria-hidden="true" />
                )}
                {channel}
              </span>
            ))}
            <span className="w-full pt-1 text-xs font-semibold text-[var(--text-muted)] sm:w-auto sm:pl-1 sm:pt-0">{content.channelLine}</span>
          </div>

          <ul className="mt-7 space-y-4">
            {content.benefits.map((benefit, index) => (
              <motion.li
                key={benefit.title}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: reduceMotion ? 0 : 0.08 + index * 0.08 }}
                className="flex gap-3"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#ED8522]/25 bg-[#FFF1E8] text-[#C46722] dark:bg-[#4A3325] dark:text-[#F1BE90]">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-[var(--text-strong)] sm:text-base">{benefit.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-[var(--text-secondary)]">{benefit.body}</span>
                </span>
              </motion.li>
            ))}
          </ul>

          <Link
            href="/download"
            onClick={() => trackDownloadPageClick('ginja_assistance')}
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#ED8522] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C94B16]"
          >
            {content.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <p className="mt-6 max-w-xl border-l-2 border-[#87B66A] pl-4 text-sm font-semibold leading-relaxed text-[var(--text-secondary)]">
            {content.closing}
          </p>
        </motion.div>

        <div className="min-w-0">
          <GinjaAssistanceChat conversation={content.conversation} phoneNote={content.phoneNote} />
        </div>
      </div>
    </section>
  );
}
