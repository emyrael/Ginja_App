import React from 'react';
import { Bell, Moon, CalendarCheck2, Users2, Sparkles, Leaf, Crown, Route, Target, Repeat2 } from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import {
  BrainDumpScreen,
  TodoViewScreen,
  YouScreen,
  TodoSharedScreen,
} from './ui/ScreenMockups';

const adaptBullets = [
  'Learns your style: motivational, calm, or direct',
  'Protects quiet hours and respects your rhythm',
  'Uses mood check-ins and Weekly Focus to adjust nudges',
  'Checks live weather and location before reminding you',
];

const arcFlow = [
  'Choose your focus',
  'Select Goal Arc or Habit Arc',
  'Ginja AI builds your adaptive plan',
  'Progress evolves weekly',
  'Reflect and adapt over time',
];

function ArcProductShot({ src, alt, className = '' }) {
  return (
    <div className={`relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909] p-1 shadow-[0_30px_80px_rgba(0,0,0,0.52)] ${className}`}>
      <div className="overflow-hidden rounded-[1.75rem] bg-black">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="block h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

function ArcResponsiveVisual({ lightSrc, darkSrc, alt, className = '' }) {
  return (
    <>
      <ArcProductShot src={lightSrc} alt={alt} className={`block dark:hidden ${className}`} />
      <ArcProductShot src={darkSrc} alt={alt} className={`hidden dark:block ${className}`} />
    </>
  );
}

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
                Unload the mental clutter.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                Tell Ginja what is on your mind and let AI organize it into actionable next steps. It is built for relief first:
                low friction, clear structure, and no pressure to know the plan before you start.
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
                See what matters right now.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                Manage your day with calm, flexible planning that keeps everything in sync. Recurring tasks, calendar awareness,
                adaptive reminders, and overdue intelligence help the day stay legible.
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

      <section id="you" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="you">
              <YouScreen />
            </PhoneFrame>
          </div>

          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
              <Leaf className="h-3.5 w-3.5" />
              You
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              Built around how you feel.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Ginja adapts nudges, planning, and recommendations based on your mood, focus, and rhythm. It is personalization
              for real life, not clinical wellness or another dashboard to maintain.
            </p>
            <div className="mt-6 rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-5 shadow-[0_12px_30px_rgba(32,28,22,0.06)] dark:shadow-[0_12px_34px_rgba(10,8,6,0.24)]">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-semibold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
                <Sparkles className="h-3.5 w-3.5" />
                Smart Notifications + Personalisation
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">
                Other apps track your to-dos. Ginja learns about you.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Ginja learns your communication style, quiet hours, mood patterns, to-do categories, and activity rhythm so
                reminders arrive at the right moment, not just the scheduled one.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-[var(--text-secondary)]">
              {adaptBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="circle" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
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

          <div className="flex justify-center lg:justify-end">
            <PhoneFrame className="w-[290px] sm:w-[320px]" activeTab="circle">
              <TodoSharedScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section id="arc" className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#E3CBB5] bg-[radial-gradient(circle_at_78%_12%,rgba(237,133,34,0.16),transparent_32%),linear-gradient(135deg,#FFF9F2,#F4E8DA_48%,#FBF6EF)] shadow-[0_26px_76px_rgba(80,54,30,0.14)] dark:border-[#6B4A31] dark:bg-[radial-gradient(circle_at_78%_12%,rgba(237,133,34,0.26),transparent_32%),linear-gradient(135deg,#11100F,#2B1D15_48%,#090807)] dark:shadow-[0_30px_90px_rgba(18,12,8,0.42)]">
          <div className="grid items-center gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#ED8522]/35 bg-[#ED8522]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">
                <Crown className="h-3.5 w-3.5" />
                Premium Feature · Coming Soon
              </p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] sm:text-5xl">
                Meet Ginja Arc
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[#6A5544] dark:text-[#D9C3AE]">
                The adaptive planning system built for real life. Arc is designed for people who want more than a task list:
                structured journeys that balance ambition with realism and evolve week by week.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-[#ED8522]/25 bg-white/55 p-5 shadow-[0_12px_32px_rgba(80,54,30,0.08)] dark:bg-white/[0.06] dark:shadow-none">
                  <Target className="h-5 w-5 text-[#ED8522]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#241B15] dark:text-white">Goal Arc</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE]">
                    Reach something meaningful with milestones, timelines, and adaptive planning.
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#A26335] dark:text-[#F1BE90]">Outcome-focused · Time-bound</p>
                </article>
                <article className="rounded-2xl border border-[#87B66A]/30 bg-white/55 p-5 shadow-[0_12px_32px_rgba(80,54,30,0.08)] dark:bg-white/[0.06] dark:shadow-none">
                  <Repeat2 className="h-5 w-5 text-[#87B66A]" />
                  <h3 className="mt-4 text-xl font-semibold text-[#241B15] dark:text-white">Habit Arc</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE]">
                    Build something that lasts through rhythm, consistency, and identity-based growth.
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E8C06] dark:text-[#BBD89F]">Sustainable · Rhythm-based</p>
                </article>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-y-10 right-8 w-48 rounded-full bg-[#ED8522]/20 blur-3xl" />
              <ArcResponsiveVisual
                lightSrc="/images/arc/Arc_overview_light.png"
                darkSrc="/images/arc/Arc_overview.png"
                alt="Ginja Arc premium overview showing active adaptive plans"
                className="relative w-[255px] sm:w-[300px]"
              />
            </div>
          </div>

          <div className="border-t border-[#E3CBB5] bg-white/24 px-6 py-10 dark:border-white/10 dark:bg-black/10 sm:px-8 lg:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[#ED8522]/12 px-3 py-1 text-xs font-semibold text-[#A26335] dark:text-[#F1BE90]">
                  <Route className="h-3.5 w-3.5" />
                  Adaptive AI Planning
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#241B15] dark:text-white sm:text-4xl">
                  Your journey, organized week by week.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[#6A5544] dark:text-[#D9C3AE]">
                  Track progress, build momentum, and let Ginja adjust your path as your life changes. Arc creates structure,
                  keeps pacing flexible, and helps consistency survive real-life interruptions.
                </p>
                <ol className="mt-6 grid gap-3 text-sm text-[#3A2A20] dark:text-[#F4E9DD] sm:grid-cols-2">
                  {arcFlow.map((step, index) => (
                    <li key={step} className="rounded-2xl border border-[#E3CBB5] bg-white/45 px-4 py-3 dark:border-white/10 dark:bg-white/[0.05]">
                      <span className="mr-2 text-[#ED8522]">{index + 1}.</span>{step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <ArcResponsiveVisual
                  lightSrc="/images/arc/Arc_entry_light.png"
                  darkSrc="/images/arc/Arc_entry.png"
                  alt="Ginja Arc focus selection screen"
                  className="w-[230px] sm:w-[255px]"
                />
                <ArcResponsiveVisual
                  lightSrc="/images/arc/Arc_goal_habit_light.png"
                  darkSrc="/images/arc/Arc_goal_habit.png"
                  alt="Ginja Arc choice between Goal Arc and Habit Arc"
                  className="w-[230px] sm:w-[255px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
