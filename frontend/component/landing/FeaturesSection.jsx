import React from 'react';
import { Bell, Moon, CalendarCheck2, Users2, TrendingUp, Sparkles, Leaf } from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import {
  BrainDumpScreen,
  WellnessScreen,
  ProgressScreen,
  TodoSharedScreen,
  SettingsScreen,
} from './ui/ScreenMockups';

const adaptBullets = [
  'Choose your communication style',
  'Set quiet hours that respect your rhythm',
  'Get smarter reminders that match the moment',
  'Use Weekly Focus to stay aligned with what matters',
];

export default function FeaturesSection() {
  return (
    <>
      <section id="why-ginja" className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E5DED3] bg-white px-6 py-10 shadow-[0_16px_48px_rgba(33,29,23,0.08)] sm:px-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Why Ginja</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-[#1D1C18] sm:text-4xl">
            Most productivity apps help you do more. Ginja helps you stay clear.
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-[#5F5A51]">
            Too many apps feel noisy, rigid, and disconnected from real life. Ginja is a calmer space to unload your thoughts,
            focus on what matters, and stay aligned with your own rhythm.
          </p>

          <div className="mt-8 grid gap-3 text-sm font-medium text-[#47433C] sm:grid-cols-2">
            <div className="rounded-2xl bg-[#F8F4ED] px-4 py-3">Less mental clutter</div>
            <div className="rounded-2xl bg-[#F8F4ED] px-4 py-3">Less pressure</div>
            <div className="rounded-2xl bg-[#F8F4ED] px-4 py-3">More clarity</div>
            <div className="rounded-2xl bg-[#F8F4ED] px-4 py-3">More follow-through</div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Core Product Story</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#1D1C18] sm:text-4xl">
              From overwhelmed thoughts to clear momentum.
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 rounded-[2rem] border border-[#E6DED1] bg-[#FBF9F4] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="home">
                <BrainDumpScreen />
              </PhoneFrame>
            </div>
            <div>
              <p className="inline-flex rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-semibold text-[#B4581F]">Brain Dump</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#1E1B17] sm:text-3xl">
                Brain Dump your thoughts into clear next steps
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#5D584F] sm:text-lg">
                When your mind feels full, Ginja gives you a calm space to unload everything and turn messy thoughts into
                simple, actionable to-dos.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#4D483F]">
                <li>Type or speak what is on your mind</li>
                <li>Turn mental clutter into clarity</li>
                <li>Start with what feels real, not rigid</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-[#E5DED3] bg-white p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)]">
              <Bell className="h-5 w-5 text-[#E2561B]" />
              <h3 className="mt-4 text-xl font-semibold text-[#1E1B17]">Reminders that feel personal, not robotic</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5D584F]">
                Smart Notifications are shaped by your task context, communication style, and timing so nudges feel relevant,
                not generic.
              </p>
            </article>

            <article className="rounded-3xl border border-[#E5DED3] bg-white p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)]">
              <Moon className="h-5 w-5 text-[#4E8C06]" />
              <h3 className="mt-4 text-xl font-semibold text-[#1E1B17]">Set quiet hours that respect your rhythm</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5D584F]">
                Choose when Ginja should go quiet so reminders fit your life instead of interrupting it.
              </p>
            </article>

            <article className="rounded-3xl border border-[#E5DED3] bg-white p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)]">
              <CalendarCheck2 className="h-5 w-5 text-[#E2561B]" />
              <h3 className="mt-4 text-xl font-semibold text-[#1E1B17]">Stay aligned with what matters this week</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5D584F]">
                Weekly Focus keeps priorities grounded in your real life so you stay centered without feeling scattered.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="adapts" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#E7DFD3] bg-white p-6 shadow-[0_14px_40px_rgba(28,24,19,0.07)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34]">
              <Sparkles className="h-3.5 w-3.5" />
              Built to adapt to you
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#1D1C18] sm:text-4xl">
              Personal, calm, and context-aware by design.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5D584F] sm:text-lg">
              Ginja is designed to work with your personality, routine, and energy from how it reminds you to how it supports
              your focus.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {adaptBullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-[#F8F4ED] px-4 py-3 text-sm font-medium text-[#4D483F]">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="wellness">
              <SettingsScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section id="wellness" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#E7DFD3] bg-[#FAF8F3] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="wellness">
              <WellnessScreen />
            </PhoneFrame>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34]">
              <Leaf className="h-3.5 w-3.5" />
              Wellness
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#1D1C18] sm:text-4xl">
              Wellness support without pressure.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5D584F] sm:text-lg">
              Check in with your mood, align your Weekly Focus, and use quick resets that help your energy shift in real life,
              not just on a to-do list.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#4D483F]">
              <li>Mood check-ins that influence reminders</li>
              <li>Weekly Focus tied to your real priorities</li>
              <li>Micro-resets for calmer momentum</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="circle" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#E7DFD3] bg-[#FAF8F3] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="circle">
              <TodoSharedScreen />
            </PhoneFrame>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34]">
              <Users2 className="h-3.5 w-3.5" />
              Circle
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#1D1C18] sm:text-4xl">
              Plan together and stay accountable.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5D584F] sm:text-lg">
              Create shared plans with friends, assign actions, keep notes, and chat in one place without jumping between tools.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[#4D483F]">
              <li>Shared actions and clear ownership</li>
              <li>Notes and chat in the same workflow</li>
              <li>Built for real collaboration, not busywork</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="progress" className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[#E7DFD3] bg-white p-6 shadow-[0_14px_40px_rgba(28,24,19,0.07)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-semibold text-[#B4581F]">
              <TrendingUp className="h-3.5 w-3.5" />
              Progress
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[#1D1C18] sm:text-4xl">
              See your momentum, not just your tasks.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5D584F] sm:text-lg">
              Track active days, achievements, and progress over time so consistency feels visible and motivating.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#F8F4ED] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C8478]">Active Days</p>
                <p className="mt-1 text-xl font-semibold text-[#1F1B17]">Weekly view</p>
              </div>
              <div className="rounded-2xl bg-[#F8F4ED] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C8478]">Streaks</p>
                <p className="mt-1 text-xl font-semibold text-[#1F1B17]">Momentum</p>
              </div>
              <div className="rounded-2xl bg-[#EEF5E8] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6C7C5D]">Achievements</p>
                <p className="mt-1 text-xl font-semibold text-[#1F1B17]">Progress wins</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="progress">
              <ProgressScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>
    </>
  );
}
