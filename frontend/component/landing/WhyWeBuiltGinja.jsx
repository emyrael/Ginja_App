import React from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { trackFeedbackClick } from '../../lib/analytics';

const FEEDBACK_FORM_URL = 'https://docs.google.com/forms/d/1jTV1wg9RGzJ08H9UE0e_fSkbmdwC573FHgjST0WHiR4/edit';
const TESTIMONIALS = [
  {
    name: 'Jessica Miller 🇺🇸',
    country: 'United States',
    text: 'Ginja honestly changed how I handle my day. The Brain Dump feature helps me get everything out of my head without overthinking, and it turns it into clear steps instantly. The smart nudges and wind-down reminders feel like they actually understand my routine — it’s the first productivity app that feels personal, not stressful.',
  },
  {
    name: 'Lukas Schneider 🇩🇪',
    country: 'Germany',
    text: 'What I like most about Ginja is how structured everything becomes without effort. I can just write freely in Brain Dump, and it organizes it into actionable to-dos. The calendar view helps me see my week clearly, and the Strides feature keeps me consistent even on days I don’t do much. It’s simple but very effective.',
  },
  {
    name: 'Sophie Tremblay 🇨🇦',
    country: 'Canada',
    text: 'I’ve tried a lot of productivity apps, but Ginja feels different. The Circle feature makes it easy to plan things with friends and actually follow through. I also love how the app adapts — the reminders, the tone, everything feels tailored to me. It’s like having a system that keeps me clear and accountable at the same time.',
  },
  {
    name: 'Chinedu Okafor 🇳🇬',
    country: 'Nigeria',
    text: 'Ginja helps me stay on top of everything without feeling overwhelmed. I use Brain Dump every morning, and it turns my scattered thoughts into a clear plan for the day. The wind-up and wind-down notifications keep me grounded, and I like that even small progress counts with Strides. It keeps me consistent.',
  },
  {
    name: 'Emily Carter 🇬🇧',
    country: 'United Kingdom',
    text: 'The to-do calendar view alone makes Ginja worth it for me. I can see what’s coming up, what I missed, and stay in sync without feeling pressured. The smart nudges are subtle but effective, and the whole experience feels calm and personalised. It’s helped me stay focused without burnout.',
  },
];

export default function WhyWeBuiltGinja() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-10 sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Founder note</p>
        <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-3xl">
          I built Ginja after feeling behind in every app.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          I had notes open, reminders open, and to-do lists open and still ended most days feeling scattered. The problem was
          not a lack of tools. The tools wanted structure before I had clarity. Ginja starts where real life starts: Unload
          your plan. Get a clear path and keep moving with support that adapts as your days change.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
          <Link
            href="/about"
            className="rounded-full border border-[var(--border-color)] bg-[var(--surface-primary)] px-5 py-2.5 font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:brightness-105"
          >
            Read why I built Ginja
          </Link>
          <span className="text-[var(--text-muted)]">If this sounds familiar, you are exactly who Ginja is for.</span>
        </div>
      </div>

      <div id="testimonials" className="mx-auto mt-6 max-w-6xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-10 sm:px-10 sm:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-3xl">
            Loved by people building clarity in their lives
          </h3>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Real experiences from people using Ginja every day.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_10px_30px_rgba(30,26,20,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(30,26,20,0.12)]"
            >
              <p className="text-sm font-medium leading-relaxed text-[var(--text-secondary)] sm:text-base">
                “{testimonial.text}”
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-[var(--text-strong)] sm:text-base">{testimonial.name}</p>
                <p className="text-xs text-[var(--text-muted)] sm:text-sm">{testimonial.country}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-8 sm:px-10 sm:py-10">
        <h3 className="text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">We’d love your feedback</h3>
        <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          Tell us about your experience using Ginja so far.
        </p>
        <div className="mt-6">
          <Button
            type="button"
            onClick={() => {
              trackFeedbackClick('feedback_section');
              window.open(FEEDBACK_FORM_URL, '_blank', 'noopener,noreferrer');
            }}
            className="rounded-full bg-[#ED8522] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16]"
          >
            Give Feedback
          </Button>
        </div>
      </div>
    </section>
  );
}
