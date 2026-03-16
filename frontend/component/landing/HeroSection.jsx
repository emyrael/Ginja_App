import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import { HomeScreen } from './ui/ScreenMockups';

export default function HeroSection({ onJoinWaitlist, onSeeHowItWorks }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#ED8522]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#87B66A]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center rounded-full border border-[#EBDCCF] bg-[#FFF8F2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#A26335]">
            Early access opening soon
          </span>

          <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-tight text-[#1D1C18] sm:text-5xl lg:text-6xl">
            Too many thoughts in your head, nowhere to start.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#605B53] sm:text-xl">
            Unload your thoughts. Ginja learns about you and personalises your experience, then turns mental overload into clear
            next actions you can actually follow through on.
          </p>

          <div className="mt-8 grid max-w-lg gap-3 text-sm text-[#4E4A43] sm:grid-cols-2">
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Start with chaos, leave with clear priorities
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Reminders shaped to your tone and timing
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Weather-aware nudges that match the moment
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#ED8522]" />
              Personal goals and Circle plans in one flow
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onJoinWaitlist}
              className="inline-flex items-center justify-center rounded-full bg-[#ED8522] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.24)] transition-all duration-200 hover:bg-[#C94B16]"
            >
              Reserve my early access
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={onSeeHowItWorks}
              className="inline-flex items-center justify-center rounded-full border border-[#DED8CF] bg-white px-6 py-3 text-base font-medium text-[#3F3C35] transition-all duration-200 hover:border-[#CFC6BA] hover:bg-[#FCFAF6]"
            >
              See how it works
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="rounded-[2.25rem] border border-[#E5DED3] bg-white/70 p-3 shadow-[0_24px_64px_rgba(40,36,30,0.12)] backdrop-blur">
            <PhoneFrame className="w-[300px] sm:w-[340px]" activeTab="home">
              <HomeScreen />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
