import React from 'react';
import { Bell, Moon, CalendarCheck2, Users2, TrendingUp, Sparkles, Leaf } from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import {
  BrainDumpScreen,
  TodoViewScreen,
  WellnessScreen,
  ProgressScreen,
  TodoSharedScreen,
  SettingsScreen,
} from './ui/ScreenMockups';

const adaptBullets = [
  'Learns your style: motivational, calm, or direct',
  'Protects quiet hours and respects your rhythm',
  'Uses mood check-ins and Weekly Focus to adjust nudges',
  'Checks live weather and location before reminding you',
];

export default function FeaturesSection() {
  return (
    <>
      <section id="why-ginja" className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 shadow-[0_16px_48px_rgba(33,29,23,0.08)] dark:shadow-[0_18px_50px_rgba(10,8,6,0.34)] sm:px-10 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Why Ginja</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            Most productivity apps ask for clarity before you have it.
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-[var(--text-secondary)]">
            Most tools start with a blank list while your head is still spinning. Ginja starts with unloading your thoughts. It
            builds clarity for you and keeps adapting as real life changes around you. Ginja learns about you and personalises your experience.
          </p>

          <div className="mt-8 grid gap-3 text-sm font-medium text-[var(--text-secondary)] sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">You bring the chaos, Ginja builds the structure</div>
            <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">Reminders that fit your rhythm, mood, and tone</div>
            <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">Weather-aware nudges, not blind scheduled pings</div>
            <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">Shared plans that keep ownership and context clear</div>
          </div>
        </div>
      </section>

      <section id="features" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Core Product Story</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              When your mind is overloaded, start with one move.
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="flex justify-center lg:justify-start">
              <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="home">
                <BrainDumpScreen />
              </PhoneFrame>
            </div>
            <div>
              <p className="inline-flex rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-semibold text-[#B4581F] dark:bg-[#4A3325] dark:text-[#F1BE90]">Brain Dump</p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">
                Unload your thoughts.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                When everything is competing for your attention, nothing gets done. Speak or type it all, Ginja unloads your
                intents and organises it into clear, actionable steps. No structure needed. Just start.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>Work, Health, Personal, Social, Study, and Others categories</li>
                <li>Low, Medium, High priority with due dates and scheduling</li>
                <li>One-time or recurring, personal or shared based on who owns it</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_16px_40px_rgba(30,26,20,0.08)] dark:shadow-[0_18px_48px_rgba(10,8,6,0.3)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="inline-flex rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-semibold text-[#B4581F] dark:bg-[#4A3325] dark:text-[#F1BE90]">To-Do View</p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">
                See your to-dos, not just a list.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                Ginja maps your to-dos onto a calendar so you can spot what is overdue, what is next, and what is done in one glance.
                Switch to list view when you want clean, focused detail.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
                <li>Calendar view to visualise to-dos across days and weeks</li>
                <li>Status tracking for overdue, upcoming, and done to-dos</li>
                <li>List view for a tidy breakdown and clearer planning</li>
                <li>Schedule ahead with calm, realistic timelines</li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="todo">
                <TodoViewScreen />
              </PhoneFrame>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)] dark:shadow-[0_12px_34px_rgba(10,8,6,0.3)]">
              <Bell className="h-5 w-5 text-[#ED8522]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">Not every reminder should sound the same</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Ginja learns how you respond best: motivational, calm, or direct and adjusts reminder tone to match your
                communication style.
              </p>
            </article>

            <article className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)] dark:shadow-[0_12px_34px_rgba(10,8,6,0.3)]">
              <Moon className="h-5 w-5 text-[#4E8C06]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">Weather and location change what is realistic</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                If it is raining, your outdoor run reminder does not fire; it shifts. If the morning is clear, your outdoor
                wellness nudge can arrive right on time.
              </p>
            </article>

            <article className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)] dark:shadow-[0_12px_34px_rgba(10,8,6,0.3)]">
              <CalendarCheck2 className="h-5 w-5 text-[#ED8522]" />
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">The right moment beats the scheduled moment</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Your reminders pay attention to mood, quiet hours, current context, and weekly priorities so they help you act
                instead of dismissing another ping.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="adapts" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_14px_40px_rgba(28,24,19,0.07)] dark:shadow-[0_18px_44px_rgba(8,6,4,0.3)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
              <Sparkles className="h-3.5 w-3.5" />
              Smart Notifications + Personalisation
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              Other apps track your to-dos. Ginja learns about you.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Ginja learns about you and personalises your experience. It learns your communication style, quiet hours, mood
              patterns, to-do categories, and activity rhythm so reminders arrive at the right moment, not just the scheduled
              one.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {adaptBullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3 text-sm font-medium text-[var(--text-secondary)]">
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="wellness">
              <WellnessScreen />
            </PhoneFrame>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
              <Leaf className="h-3.5 w-3.5" />
              Wellness
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              When your energy shifts, your plan should shift too.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Wellness is a calm checkpoint you can do in seconds. Log how you feel today Great, Good, Okay, Tired, Stressed,
              or Low so Ginja can ask the right amount from you, not too much. Ginja learns about you and personalises your experience.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Your mood check-in influences reminder tone and timing</li>
              <li>Weekly Focus keeps your real priorities visible every day</li>
              <li>Micro-resets: set a micro-goal, plan 20 minutes, celebrate a win, hydrate</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="circle" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="circle">
              <TodoSharedScreen />
            </PhoneFrame>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
              <Users2 className="h-3.5 w-3.5" />
              Circle
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              Shared goals die in group chats without structure.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Circle turns chat into action: create actions for people inside the conversation, keep shared notes in the same
              thread, and stay accountable together without losing context.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <strong>Create Actions in Chat:</strong> assign owners, set due dates, and set priority right where decisions happen.
              </li>
              <li>
                <strong>Keep Context:</strong> updates and plan history stay in one place so everyone sees the full picture.
              </li>
              <li>
                <strong>Take Notes Together:</strong> capture workout plans, meetings, or briefs in shared notes that stay linked
                to actions.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              Accountability here is not checking up on people, it is giving shared goals the same structure and seriousness as
              personal ones.
            </p>
          </div>
        </div>
      </section>

      <section id="progress" className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_14px_40px_rgba(28,24,19,0.07)] dark:shadow-[0_18px_44px_rgba(8,6,4,0.3)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-semibold text-[#B4581F] dark:bg-[#4A3325] dark:text-[#F1BE90]">
              <TrendingUp className="h-3.5 w-3.5" />
              Progress
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              If progress feels invisible, consistency is hard to trust.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Ginja tracks active days, streaks, and achievement tiers as a mirror of your follow-through. Starter, Rhythm,
              Circle, and Mastery are not random badges; they reflect who you are becoming: someone who shows up consistently.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Starter</p>
                <p className="mt-1 text-xl font-semibold text-[var(--text-strong)]">Foundations in place</p>
              </div>
              <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Rhythm</p>
                <p className="mt-1 text-xl font-semibold text-[var(--text-strong)]">Consistency in motion</p>
              </div>
              <div className="rounded-2xl bg-[#EEF5E8] px-4 py-3 dark:bg-[#33412B]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6C7C5D] dark:text-[#BBD89F]">Circle + Mastery</p>
                <p className="mt-1 text-xl font-semibold text-[var(--text-strong)]">Social and long-term growth</p>
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
