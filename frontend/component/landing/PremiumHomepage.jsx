import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Bell,
  Brain,
  CalendarCheck2,
  CheckCircle2,
  CloudRain,
  Crown,
  Flame,
  Leaf,
  MessageCircle,
  Moon,
  Repeat2,
  Sparkles,
  Target,
  Users2,
} from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import FounderIntroVideoSection from './FounderIntroVideoSection';
import {
  ArcOverviewScreen,
  BrainDumpScreen,
  HomeScreen,
  ProgressScreen,
  TodoSharedScreen,
  TodoViewScreen,
} from './ui/ScreenMockups';
import { trackDownloadPageClick } from '../../lib/analytics';

function ArcIcon({ className = '' }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l1.7 5.1L19 9l-5.3 1.9L12 16l-1.7-5.1L5 9l5.3-1.9L12 2z" />
      <path d="M19 15l.8 2.4L22 18l-2.2.6L19 21l-.8-2.4L16 18l2.2-.6L19 15z" />
    </svg>
  );
}

const storySteps = [
  {
    eyebrow: 'Brain Dump',
    title: 'Unload the mental clutter.',
    body: 'Tell Ginja what is on your mind. AI turns it into clear next steps without forcing you to know the plan first.',
    bullets: ['Start with messy thoughts', 'Generate actionable to-dos', 'Add due dates, priority, and categories'],
    screen: 'brainDump',
    tab: 'home',
    navLabel: 'Brain',
    icon: Brain,
  },
  {
    eyebrow: 'To-Do View',
    title: 'Turn the day into something you can actually see.',
    body: 'Calendar and list views keep today, tomorrow, and the things you missed in one calm, legible place.',
    bullets: ['Switch between calendar and list', 'Track done, upcoming, and overdue', 'Schedule work, health, and personal tasks'],
    screen: 'todo',
    tab: 'todo',
    navLabel: 'To-Do',
    icon: CalendarCheck2,
  },
  {
    eyebrow: 'Circle',
    title: 'Make shared plans accountable.',
    body: 'Circle turns group conversations into shared actions with owners, notes, due dates, and context.',
    bullets: ['Create actions in chat', 'Assign ownership clearly', 'Keep shared notes beside the plan'],
    screen: 'circle',
    tab: 'circle',
    navLabel: 'Circle',
    icon: Users2,
  },
  {
    eyebrow: 'Arc',
    title: 'Build an adaptive journey, not another list.',
    body: 'Arc turns goals and habits into weekly plans that adjust as life changes, so consistency has room to breathe.',
    bullets: ['Goal Arc or Habit Arc', 'Week-by-week structure', 'Reflect and adapt as you go'],
    screen: 'arc',
    tab: 'arc',
    navLabel: 'Arc',
    icon: ArcIcon,
  },
  {
    eyebrow: 'Strides',
    title: 'Let small progress count.',
    body: 'Strides helps you notice momentum, completed days, and the patterns that keep you moving.',
    bullets: ['Progress rings and active days', 'Stride count', 'A calmer way to stay consistent'],
    screen: 'strides',
    tab: 'you',
    navLabel: 'Strides',
    icon: Flame,
  },
  {
    eyebrow: 'Personal Nudges',
    title: 'Support that changes with the moment.',
    body: 'Ginja adapts reminders to your tone, mood, quiet hours, and real-world context like weather.',
    bullets: ['Motivational, calm, or direct tone', 'Mood-aware check-ins', 'Weather-aware planning nudges'],
    screen: 'nudges',
    tab: 'you',
    navLabel: 'Nudges',
    icon: Bell,
  },
];

const audiences = [
  {
    title: 'Students',
    body: 'Plan study weeks, manage deadlines, and stay consistent without building complicated systems.',
    shortBody: 'Study weeks, deadlines, and calm consistency.',
    emoji: '🎓',
    icon: Brain,
  },
  {
    title: 'Early professionals',
    body: 'Balance work, health, admin, and personal goals in one calm place.',
    shortBody: 'Work, health, admin, and personal goals together.',
    emoji: '💼',
    icon: Target,
  },
  {
    title: 'Small teams and friend groups',
    body: 'Use Circle to turn conversations into shared actions with owners, notes, and context.',
    shortBody: 'Shared plans with owners, notes, and context.',
    emoji: '🤝',
    icon: Users2,
  },
];

const intelligenceCards = [
  {
    title: 'Communication style',
    body: 'Motivational, calm, or direct reminders.',
    icon: MessageCircle,
  },
  {
    title: 'Mood and rhythm',
    body: 'Mood check-ins and weekly focus shape nudges.',
    icon: Leaf,
  },
  {
    title: 'Weather-aware planning',
    body: 'Outdoor plans shift when the weather changes.',
    icon: CloudRain,
  },
  {
    title: 'Quiet hours',
    body: 'Reminders respect when you do not want to be disturbed.',
    icon: Moon,
  },
];

const testimonials = [
  {
    name: 'Jessica Miller',
    country: 'United States',
    text: 'Brain Dump helps me get everything out of my head without overthinking, and it turns it into clear steps instantly.',
  },
  {
    name: 'Lukas Schneider',
    country: 'Germany',
    text: 'I can write freely in Brain Dump, then see my week clearly. Strides keeps me consistent even on quieter days.',
  },
  {
    name: 'Sophie Tremblay',
    country: 'Canada',
    text: 'Circle makes it easy to plan things with friends and actually follow through. The reminders feel tailored to me.',
  },
  {
    name: 'Chinedu Okafor',
    country: 'Nigeria',
    text: 'Ginja turns my scattered thoughts into a clear plan for the day. Even small progress counts with Strides.',
  },
  {
    name: 'Emily Carter',
    country: 'United Kingdom',
    text: 'The to-do calendar view helps me see what is coming up, what I missed, and stay in sync without feeling pressured.',
  },
];

const proofItems = ['Brain Dump', 'Smart Nudges', 'Arc', 'Circle', 'Strides'];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children, className = '', id }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

function FeatureCard({ icon: Icon, emoji, title, body, children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_14px_34px_rgba(44,36,28,0.07)] dark:shadow-[0_18px_42px_rgba(12,8,5,0.28)]"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ED8522]/20 bg-[#FFF1E8] text-[#B65C1D] dark:bg-[#4A3325] dark:text-[#F1BE90]">
        {emoji ? <span className="text-2xl leading-none">{emoji}</span> : <Icon className="h-5 w-5" aria-hidden="true" />}
      </span>
      <h3 className="mt-5 text-xl font-semibold leading-tight text-[var(--text-strong)]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{body}</p>
      {children}
    </motion.article>
  );
}

function PhoneMockup({ screen = 'home', activeTab = 'home', className = '' }) {
  const screens = {
    home: <HomeScreen />,
    brainDump: <BrainDumpScreen />,
    todo: <TodoViewScreen />,
    nudges: <PersonalNudgesScreen />,
    circle: <TodoSharedScreen />,
    arc: <ArcOverviewScreen />,
    strides: <ProgressScreen />,
  };

  return (
    <PhoneFrame className={className || 'w-[286px] sm:w-[318px]'} activeTab={activeTab}>
      {screens[screen] || screens.home}
    </PhoneFrame>
  );
}

function CompactPhonePreview({ screen, activeTab }) {
  return (
    <div className="relative h-[318px] w-[140px] shrink-0 xs:h-[370px] xs:w-[166px] sm:h-[430px] sm:w-[194px]">
      <div className="absolute left-0 top-0 origin-top-left scale-[0.47] xs:scale-[0.56] sm:scale-[0.65]">
        <PhoneMockup screen={screen} activeTab={activeTab} className="w-[290px]" />
      </div>
    </div>
  );
}

function CompactCustomPhonePreview({ activeTab, children }) {
  return (
    <div className="relative h-[318px] w-[140px] shrink-0 xs:h-[370px] xs:w-[166px]">
      <div className="absolute left-0 top-0 origin-top-left scale-[0.47] xs:scale-[0.56]">
        <PhoneFrame className="w-[290px]" activeTab={activeTab}>
          {children}
        </PhoneFrame>
      </div>
    </div>
  );
}

function BrainDumpScatteredScreen({ before, reduceMotion }) {
  return (
    <div className="relative min-h-[500px] overflow-hidden bg-[#EEEDE9] px-4 pb-4 pt-6 text-[#1F1D19] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(237,133,34,0.13),transparent_30%),radial-gradient(circle_at_76%_66%,rgba(135,182,106,0.13),transparent_28%)]" />
      <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-[#A26335] dark:text-[#F1BE90]">Brain Dump</p>
      <h3 className="relative mt-2 text-[23px] font-bold leading-tight">Scattered thoughts</h3>
      <p className="relative mt-2 max-w-[220px] text-[11px] leading-relaxed text-[#716A61] dark:text-[#A9A29D]">
        Everything is in your head, but nothing has shape yet.
      </p>

      {before.map((note, index) => (
        <motion.div
          key={note.text}
          className="absolute max-w-[142px] rounded-2xl border border-[#E8D3BF] bg-white/92 px-3 py-2.5 text-[11px] font-semibold leading-snug text-[#4D4035] shadow-[0_12px_26px_rgba(70,48,30,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#3B2E26]/92 dark:text-[#F4E8DD]"
          style={{
            left: note.left,
            top: note.top,
          }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: note.drift,
                  y: note.drift.slice().reverse(),
                  rotate: [note.rotate, note.rotate + 3, note.rotate - 2, note.rotate],
                }
          }
          viewport={{ once: true }}
          transition={{
            opacity: { delay: index * 0.08, duration: 0.45 },
            scale: { delay: index * 0.08, duration: 0.45 },
            x: { duration: 4.8 + index * 0.35, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 5.2 + index * 0.28, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5.5 + index * 0.25, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {note.text}
        </motion.div>
      ))}
    </div>
  );
}

function StructuredTodosScreen({ after, reduceMotion }) {
  return (
    <div className="min-h-[500px] bg-[#F8F1E8] px-4 pb-4 pt-6 text-[#241B15] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A26335] dark:text-[#F1BE90]">Today&apos;s focus</p>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-[22px] font-bold leading-tight">Structured to-dos</h3>
        <span className="rounded-full bg-[#EEF5E8] px-2.5 py-1 text-[9px] font-bold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
          5 steps
        </span>
      </div>
      <div className="mt-5 space-y-2.5">
        {after.map((task, index) => (
          <motion.div
            key={task.title}
            className="grid grid-cols-[48px_1fr] items-start gap-2 rounded-[16px] border border-[#EAD9C7] bg-[#FFFDF9] px-3 py-2.5 text-[#3C3128] shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#211B17] dark:text-[#F4E8DD]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 + index * 0.1, duration: 0.45 }}
          >
            <span className="rounded-full bg-[#FFF1E8] px-2 py-1 text-center text-[10px] font-bold tabular-nums text-[#B65C1D] dark:bg-[#4A3325] dark:text-[#F1BE90]">
              {task.time}
            </span>
            <span>
              <span className="block text-[11px] font-bold leading-snug">
                <CheckCircle2 className="mr-1 inline h-3.5 w-3.5 text-[#87B66A]" aria-hidden="true" />
                {task.title}
              </span>
              <span className="mt-1 block text-[9px] font-medium leading-snug text-[#81766B] dark:text-[#CBB8A6]">{task.meta}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PersonalNudgesScreen() {
  return (
    <div className="min-h-[500px] bg-[#EEEDE9] px-3 pb-4 pt-3 text-[#1F1D19] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#C06F2B]">Smart nudges</p>
          <h2 className="mt-1 text-[21px] font-bold leading-tight">Today can flex.</h2>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E8] text-[#ED8522] dark:bg-[#34261D]">
          <Bell className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>

      <div className="rounded-[20px] border border-[#E4DED4] bg-white/95 p-3 shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#1E1E1D]">
        <p className="text-[14px] font-semibold">How are you feeling?</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[9px]">
          {['Calm', 'Focused', 'Tired', 'Stressed', 'Social', 'Low'].map((mood, index) => (
            <span
              key={mood}
              className={`rounded-xl border px-1.5 py-2 ${
                index === 2
                  ? 'border-[#ED8522] bg-[#FFF4E8] text-[#BF6324] dark:bg-[#3B2A20] dark:text-[#F1BE90]'
                  : 'border-[#E8E1D7] bg-[#FBFAF8] text-[#746C62] dark:border-white/10 dark:bg-[#151514] dark:text-[#A9A29D]'
              }`}
            >
              {mood}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-[20px] border border-[#F0D6BE] bg-[#FFFAF5] p-3 dark:border-[#5A3A23] dark:bg-[#2A221B]">
        <div className="flex items-start gap-2">
          <CloudRain className="mt-0.5 h-4 w-4 text-[#ED8522]" aria-hidden="true" />
          <div>
            <p className="text-[12px] font-bold">Rain later</p>
            <p className="mt-1 text-[10px] leading-relaxed text-[#746C62] dark:text-[#CDBBAC]">
              Move your outdoor run to 18:30? You still have a clear window.
            </p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[10px] font-semibold">
          <span className="rounded-full bg-[#ED8522] px-3 py-2 text-white">Adjust plan</span>
          <span className="rounded-full border border-[#E4D6C8] px-3 py-2 text-[#746C62] dark:border-white/10 dark:text-[#CDBBAC]">Keep time</span>
        </div>
      </div>

      <div className="mt-3 rounded-[20px] border border-[#E4DED4] bg-white/95 p-3 dark:border-white/10 dark:bg-[#1E1E1D]">
        <p className="text-[13px] font-bold">Reminder tone</p>
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[8px] font-semibold">
          <span className="rounded-full border border-[#E9C8A9] bg-[#FFF4E8] px-2 py-1.5 text-[#C06F2B]">Calm</span>
          <span className="rounded-full border border-[#E4DED4] px-2 py-1.5 text-[#746C62] dark:border-white/10 dark:text-[#A9A29D]">Direct</span>
          <span className="rounded-full border border-[#E4DED4] px-2 py-1.5 text-[#746C62] dark:border-white/10 dark:text-[#A9A29D]">Motivate</span>
        </div>
      </div>

      <div className="mt-3 rounded-[20px] border border-[#E4DED4] bg-white/95 p-3 dark:border-white/10 dark:bg-[#1E1E1D]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] font-bold">Quiet hours</p>
            <p className="mt-1 text-[9px] text-[#746C62] dark:text-[#A9A29D]">11:00 PM to 7:00 AM</p>
          </div>
          <span className="relative h-6 w-11 rounded-full bg-[#F0C9AA]">
            <span className="absolute right-0.5 top-0.5 h-5 w-5 rounded-full bg-[#ED8522]" />
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ onSeeHowItWorks }) {
  const reduceMotion = useReducedMotion();
  const cards = [
    { text: 'Finish report', className: '-left-8 top-20 rotate-[-3deg]' },
    { text: 'Plan trip', className: '-right-7 top-44 rotate-[4deg]' },
    { text: 'Workout again', className: 'left-1 bottom-20 rotate-[2deg]' },
  ];

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(237,133,34,0.16),transparent_30%),radial-gradient(circle_at_84%_26%,rgba(135,182,106,0.16),transparent_26%),linear-gradient(180deg,#FBF7EF_0%,var(--bg-primary)_76%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(237,133,34,0.2),transparent_30%),radial-gradient(circle_at_84%_26%,rgba(135,182,106,0.13),transparent_26%),linear-gradient(180deg,#35251C_0%,var(--bg-primary)_82%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_140px] items-center gap-3 py-6 xs:grid-cols-[minmax(0,1fr)_166px] xs:gap-4 sm:grid-cols-[minmax(0,1fr)_194px] sm:gap-6 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-8">
        <motion.div
          className="min-w-0"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#ED8522]/25 bg-[#FFF1E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] shadow-[0_10px_28px_rgba(237,133,34,0.14)] dark:bg-[#4A3325] dark:text-[#F1BE90]"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Free to start
          </motion.span>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.04] text-[var(--text-strong)] xs:text-4xl sm:text-5xl lg:mt-6 lg:text-6xl"
          >
            Productivity that adapts to real life.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--text-secondary)] xs:text-base sm:text-lg lg:mt-6 lg:text-xl"
          >
            Unload your thoughts, turn them into clear next steps, build adaptive goals, and stay consistent with planning that changes when life changes.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mt-6 flex flex-wrap items-center gap-2 lg:mt-9 lg:gap-3">
            <Link
              href="/download"
              onClick={() => trackDownloadPageClick('premium_hero_start_free')}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#ED8522] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.25)] transition-all duration-200 hover:bg-[#C94B16] sm:px-6 sm:py-3 sm:text-base"
              aria-label="Start free by downloading Ginja"
            >
              Start Free
            </Link>
            <button
              type="button"
              onClick={onSeeHowItWorks}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface-primary)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] shadow-[0_10px_24px_rgba(44,36,28,0.05)] transition-all duration-200 hover:brightness-105 sm:px-6 sm:py-3 sm:text-base"
            >
              See how it works
            </button>
          </motion.div>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="mt-4 hidden max-w-xl text-sm leading-relaxed text-[var(--text-muted)] sm:block sm:text-base lg:mt-6">
            Built for people with busy minds, changing schedules, and goals that need more than a task list.
          </motion.p>
        </motion.div>

        <div className="relative flex justify-end lg:justify-end">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative hidden rounded-[2rem] border border-white/50 bg-white/35 p-3 shadow-[0_28px_80px_rgba(68,48,30,0.16)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04] lg:block"
          >
            <PhoneMockup screen="home" activeTab="home" className="w-[286px] sm:w-[335px]" />
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative lg:hidden"
          >
            <div className="absolute inset-y-8 right-2 w-20 rounded-full bg-[#ED8522]/16 blur-2xl" />
            <CompactPhonePreview screen="home" activeTab="home" />
          </motion.div>
          {!reduceMotion &&
            cards.map((card, index) => (
              <motion.div
                key={card.text}
                className={`absolute hidden rounded-2xl border border-[#E8D3BF] bg-white/90 px-4 py-3 text-sm font-semibold text-[#4B3A2D] shadow-[0_16px_36px_rgba(70,48,30,0.13)] backdrop-blur dark:border-white/10 dark:bg-[#2B201A]/90 dark:text-[#F5E6D8] lg:block ${card.className}`}
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.55 + index * 0.18, duration: 0.55 }}
              >
                <span className="mr-2 text-[#ED8522]">+</span>
                {card.text}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

function TransformationSection() {
  const before = [
    { text: 'I need to work out again', left: '8%', top: '68px', rotate: -5, drift: [0, -10, 8, 0] },
    { text: 'Finish report', left: '50%', top: '96px', rotate: 4, drift: [0, 8, -8, 0] },
    { text: 'Plan trip', left: '18%', top: '164px', rotate: 5, drift: [0, -8, 9, 0] },
    { text: 'Text the group', left: '48%', top: '214px', rotate: -4, drift: [0, 10, -6, 0] },
    { text: 'Study this week', left: '14%', top: '274px', rotate: -2, drift: [0, -6, 8, 0] },
  ];
  const after = [
    { time: '09:00', title: 'Morning strength session', meta: 'From: I need to work out again' },
    { time: '11:30', title: 'Finish report draft', meta: 'From: Finish report' },
    { time: '15:00', title: 'Compare trip options', meta: 'From: Plan trip' },
    { time: '18:15', title: 'Text the group with the plan', meta: 'From: Text the group' },
    { time: '20:00', title: 'Study block for this week', meta: 'From: Study this week' },
  ];
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="why-ginja" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Why Ginja exists</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            Most productivity apps ask for clarity before you have it.
          </h2>
          <p className="mt-5 max-w-3xl text-pretty text-lg leading-relaxed text-[var(--text-secondary)]">
            Ginja starts where real life starts: with scattered thoughts, changing moods, missed plans, shared responsibilities, and goals that need flexible structure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <div className="min-w-0 rounded-[1.75rem] border border-[var(--border-color)] bg-[var(--surface-soft)] p-3 sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Before</p>
            <div className="mt-4 flex justify-center sm:hidden">
              <CompactCustomPhonePreview activeTab="home">
                <BrainDumpScatteredScreen before={before} reduceMotion={reduceMotion} />
              </CompactCustomPhonePreview>
            </div>
            <div className="mt-6 hidden justify-center sm:flex">
              <PhoneFrame className="w-[282px] sm:w-[300px]" activeTab="home">
                <BrainDumpScatteredScreen before={before} reduceMotion={reduceMotion} />
              </PhoneFrame>
            </div>
          </div>

          <div className="min-w-0 rounded-[1.75rem] border border-[#E6CBB3] bg-[linear-gradient(180deg,#FFF9F2,#F6EADF)] p-3 shadow-[0_18px_44px_rgba(70,48,30,0.1)] dark:border-[#6B4A31] dark:bg-[linear-gradient(180deg,#3A2A21,#2A1F19)] sm:p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">After</p>
            <div className="mt-4 flex justify-center sm:hidden">
              <CompactCustomPhonePreview activeTab="todo">
                <StructuredTodosScreen after={after} reduceMotion={reduceMotion} />
              </CompactCustomPhonePreview>
            </div>
            <div className="mt-6 hidden justify-center sm:flex">
              <PhoneFrame className="w-[282px] sm:w-[300px]" activeTab="todo">
                <StructuredTodosScreen after={after} reduceMotion={reduceMotion} />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function StickyProductStory() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const userPauseUntilRef = useRef(0);
  const isStoryInView = useInView(sectionRef, { amount: 0.35 });
  const [mobileStepIndex, setMobileStepIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(1);
  const mobileStep = storySteps[mobileStepIndex];
  const MobileIcon = mobileStep.icon;

  const setMobileStep = (index) => {
    if (index === mobileStepIndex) return;
    userPauseUntilRef.current = Date.now() + 9000;
    setMobileDirection(index > mobileStepIndex ? 1 : -1);
    setMobileStepIndex(index);
  };

  useEffect(() => {
    if (reduceMotion || !isStoryInView) return undefined;

    const interval = window.setInterval(() => {
      if (Date.now() < userPauseUntilRef.current) return;

      setMobileDirection(1);
      setMobileStepIndex((currentIndex) => (currentIndex + 1) % storySteps.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isStoryInView, reduceMotion]);

  return (
    <section ref={sectionRef} id="features" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Product story</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            From one messy thought to a plan that can keep up.
          </h2>
        </div>

        <div className="mt-12 hidden space-y-16 lg:block">
          {storySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.eyebrow}
                className="grid min-h-[650px] items-center gap-14 rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)]/65 p-8 xl:grid-cols-[0.92fr_1.08fr]"
                initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -42 : 42, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.34 }}
                transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.article
                  className="rounded-[1.5rem] border border-[#ED8522]/32 bg-[#FFF8EF] p-7 shadow-[0_18px_46px_rgba(80,54,30,0.1)] dark:bg-[#3B2A20]"
                  initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.48 }}
                  transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">{step.eyebrow}</p>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-[var(--text-strong)]">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
                  <ul className="mt-5 space-y-2 text-sm text-[var(--text-secondary)]">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ED8522]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.article>

                <motion.div
                  className="relative flex justify-center"
                  initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? 34 : -34, y: 26, scale: 0.97 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.46 }}
                  transition={{ duration: 0.66, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-8 rounded-full bg-[#ED8522]/12 blur-3xl" />
                  <div className="relative rounded-[2rem] border border-white/40 bg-white/30 p-3 shadow-[0_26px_80px_rgba(58,42,28,0.16)] backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
                    <PhoneMockup screen={step.screen} activeTab={step.tab} className="w-[318px]" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 lg:hidden">
          <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border-color)] bg-[radial-gradient(circle_at_84%_20%,rgba(237,133,34,0.12),transparent_28%),linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] p-3 shadow-[0_18px_48px_rgba(44,36,28,0.08)] dark:shadow-[0_20px_54px_rgba(10,8,6,0.3)] xs:p-4">
            <div className="flex gap-2 overflow-x-auto pb-3">
              {storySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === mobileStepIndex;

                return (
                  <button
                    key={step.eyebrow}
                    type="button"
                    onClick={() => setMobileStep(index)}
                    aria-label={`Show ${step.eyebrow}`}
                    aria-pressed={isActive}
                    className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border transition-colors duration-200 ${
                      isActive
                        ? 'border-[#ED8522]/40 text-white shadow-[0_10px_24px_rgba(237,133,34,0.2)]'
                        : 'border-[var(--border-color)] bg-[var(--surface-primary)] text-[#A26335] dark:text-[#F1BE90]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="product-story-active-category"
                        className="absolute inset-0 rounded-2xl bg-[#ED8522]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <Icon className="relative z-10 h-4 w-4" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_140px] items-center gap-3 xs:grid-cols-[minmax(0,1fr)_166px] sm:grid-cols-[minmax(0,1fr)_194px] sm:gap-5">
              <AnimatePresence mode="wait" custom={mobileDirection}>
                <motion.article
                  key={mobileStep.eyebrow}
                  custom={mobileDirection}
                  initial={reduceMotion ? false : { opacity: 0, x: mobileDirection * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: mobileDirection * -18 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="min-w-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325]">
                      <MobileIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A26335] dark:text-[#F1BE90]">{mobileStep.eyebrow}</p>
                  </div>
                  <h3 className="mt-4 text-balance text-xl font-semibold leading-tight text-[var(--text-strong)] xs:text-2xl">
                    {mobileStep.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {mobileStep.body}
                  </p>
                  <div className="mt-4 space-y-2">
                    {mobileStep.bullets.slice(0, 2).map((bullet) => (
                      <p key={bullet} className="flex items-start gap-2 text-xs font-medium leading-relaxed text-[var(--text-secondary)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED8522]" />
                        {bullet}
                      </p>
                    ))}
                  </div>
                </motion.article>
              </AnimatePresence>

              <AnimatePresence mode="wait" custom={mobileDirection}>
                <motion.div
                  key={mobileStep.screen}
                  custom={mobileDirection}
                  initial={reduceMotion ? false : { opacity: 0, x: mobileDirection * 28, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: mobileDirection * -24, scale: 0.98 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex justify-end"
                >
                  <div className="absolute inset-y-10 right-4 w-20 rounded-full bg-[#ED8522]/16 blur-2xl" />
                  <CompactPhonePreview screen={mobileStep.screen} activeTab={mobileStep.tab} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const arcFlowScreens = [
  {
    label: 'Overview',
    lightSrc: '/images/arc/Arc_overview_light.png',
    darkSrc: '/images/arc/Arc_overview.png',
    alt: 'Ginja Arc overview showing active adaptive journeys',
  },
  {
    label: 'Choose focus',
    lightSrc: '/images/arc/Arc_entry_uploaded_light.png',
    darkSrc: '/images/arc/Arc_entry.png',
    alt: 'Ginja Arc entry screen for choosing a focus',
  },
  {
    label: 'Goal or Habit',
    lightSrc: '/images/arc/Arc_goal_habit_light.png',
    darkSrc: '/images/arc/Arc_goal_habit.png',
    alt: 'Ginja Arc screen for selecting Goal Arc or Habit Arc',
  },
];

function ArcFlowVisual({ reduceMotion, compact = false }) {
  const flowRef = useRef(null);
  const isFlowInView = useInView(flowRef, { amount: 0.35 });
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = arcFlowScreens[activeScreenIndex];

  useEffect(() => {
    if (reduceMotion || !isFlowInView) return undefined;

    const interval = window.setInterval(() => {
      setActiveScreenIndex((currentIndex) => (currentIndex + 1) % arcFlowScreens.length);
    }, 3400);

    return () => window.clearInterval(interval);
  }, [isFlowInView, reduceMotion]);

  return (
    <div ref={flowRef} className={`relative flex flex-col items-center ${compact ? 'w-[132px] xs:w-[156px] sm:w-[190px]' : 'w-[420px]'}`}>
      <div className={`${compact ? 'absolute inset-y-8 right-3 w-24' : 'absolute inset-y-16 right-8 w-72'} rounded-full bg-[#ED8522]/18 blur-3xl`} />
      <div className={`relative overflow-hidden border border-white/15 bg-[#090909] p-1 shadow-[0_24px_58px_rgba(0,0,0,0.34)] ${compact ? 'rounded-[1.6rem]' : 'rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.42)]'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen.label}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={activeScreen.lightSrc}
              alt={activeScreen.alt}
              loading="lazy"
              className={`block object-cover dark:hidden ${compact ? 'w-[126px] rounded-[1.35rem] xs:w-[150px] sm:w-[180px]' : 'w-[310px] rounded-[1.75rem]'}`}
            />
            <img
              src={activeScreen.darkSrc}
              alt={`${activeScreen.alt} in dark mode`}
              loading="lazy"
              className={`hidden object-cover dark:block ${compact ? 'w-[126px] rounded-[1.35rem] xs:w-[150px] sm:w-[180px]' : 'w-[310px] rounded-[1.75rem]'}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={`relative z-10 mt-4 flex items-center justify-center gap-2 ${compact ? '' : 'mt-5'}`}>
        {arcFlowScreens.map((screen, index) => (
          <span
            key={screen.label}
            className={`${activeScreenIndex === index ? 'bg-[#ED8522]' : 'bg-[#E4CDB8] dark:bg-white/18'} h-1.5 rounded-full transition-all duration-500 ${activeScreenIndex === index ? (compact ? 'w-6' : 'w-8') : 'w-1.5'}`}
            aria-label={screen.label}
          />
        ))}
      </div>

      <p className={`relative z-10 mt-2 text-center font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90] ${compact ? 'text-[9px]' : 'text-[11px]'}`}>
        {activeScreenIndex + 1}. {activeScreen.label}
      </p>
    </div>
  );
}

function ArcShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="arc" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#E3CBB5] bg-[radial-gradient(circle_at_82%_18%,rgba(237,133,34,0.17),transparent_30%),linear-gradient(135deg,#FFF9F2,#F5E8DA_54%,#FBF6EF)] shadow-[0_26px_76px_rgba(80,54,30,0.14)] dark:border-[#6B4A31] dark:bg-[radial-gradient(circle_at_82%_18%,rgba(237,133,34,0.24),transparent_30%),linear-gradient(135deg,#11100F,#2B1D15_54%,#090807)]">
        <div className="grid grid-cols-[minmax(0,1fr)_132px] items-center gap-4 p-4 xs:grid-cols-[minmax(0,1fr)_156px] sm:grid-cols-[minmax(0,1fr)_190px] sm:p-6 lg:hidden">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-[#ED8522]/35 bg-[#ED8522]/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#A26335] dark:text-[#F1BE90]">
              <Crown className="h-3 w-3" aria-hidden="true" />
              Premium
            </p>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] xs:text-3xl">
              Meet Ginja Arc.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE]">
              Adaptive weekly journeys for goals and habits that change with real life.
            </p>
            <div className="mt-4 grid gap-2">
              <div className="rounded-2xl border border-[#ED8522]/25 bg-white/55 p-3 dark:bg-white/[0.06]">
                <p className="text-sm font-semibold text-[#241B15] dark:text-white">Goal Arc</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A26335] dark:text-[#F1BE90]">Outcome-focused</p>
              </div>
              <div className="rounded-2xl border border-[#87B66A]/30 bg-white/55 p-3 dark:bg-white/[0.06]">
                <p className="text-sm font-semibold text-[#241B15] dark:text-white">Habit Arc</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#4E8C06] dark:text-[#BBD89F]">Sustainable</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-end">
            <ArcFlowVisual reduceMotion={reduceMotion} compact />
          </div>
        </div>

        <div className="hidden gap-10 p-6 sm:p-8 lg:grid lg:grid-cols-[1fr_0.95fr] lg:p-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ED8522]/35 bg-[#ED8522]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">
              <Crown className="h-3.5 w-3.5" aria-hidden="true" />
              Premium Feature
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] sm:text-5xl">
              Meet Ginja Arc.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[#6A5544] dark:text-[#D9C3AE]">
              Arc turns a goal or habit into an adaptive weekly journey. Choose your focus, set your rhythm, and let Ginja build a realistic plan that evolves as your life changes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={Target} title="Goal Arc" body="Reach something meaningful with milestones, timelines, and weekly adaptation.">
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#A26335] dark:text-[#F1BE90]">Outcome-focused · Time-bound</p>
              </FeatureCard>
              <FeatureCard icon={Repeat2} title="Habit Arc" body="Build something sustainable through rhythm, identity, and consistency." delay={0.08}>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#4E8C06] dark:text-[#BBD89F]">Repeatable · Sustainable</p>
              </FeatureCard>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <ArcFlowVisual reduceMotion={reduceMotion} />
          </div>
        </div>

        <div className="border-t border-[#E3CBB5] bg-white/24 px-4 py-5 dark:border-white/10 dark:bg-black/10 sm:px-8 lg:px-12 lg:py-8">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#3A2A20] dark:text-[#F4E9DD] sm:grid-cols-5 lg:gap-3 lg:text-sm">
            {['Choose your focus', 'Select Goal or Habit', 'Ginja AI builds your adaptive plan', 'Progress evolves weekly', 'Reflect and adapt'].map((step, index) => (
              <div key={step} className={`${index === 2 ? 'col-span-2 sm:col-span-1' : ''} rounded-2xl border border-[#E3CBB5] bg-white/45 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.05] lg:px-4 lg:py-3`}>
                <span className="mr-2 text-[#ED8522]">{index + 1}.</span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function AudienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection className="px-4 py-12 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Who Ginja is for</p>
          <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            A calm planning system for real, shifting lives.
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-2 sm:hidden">
          {audiences.map((item, index) => (
            <motion.article
              key={item.title}
              className="min-w-0 rounded-[1.25rem] border border-[var(--border-color)] bg-[linear-gradient(180deg,var(--surface-primary),var(--surface-soft))] p-3 shadow-[0_12px_28px_rgba(44,36,28,0.07)]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: index * 0.05, ease: 'easeOut' }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E8] text-xl shadow-[inset_0_0_0_1px_rgba(237,133,34,0.12)] dark:bg-[#4A3325]">
                {item.emoji}
              </span>
              <h3 className="mt-3 text-[13px] font-semibold leading-tight text-[var(--text-strong)]">{item.title}</h3>
              <p className="mt-2 text-[10px] font-medium leading-relaxed text-[var(--text-secondary)]">{item.shortBody}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 hidden gap-5 sm:grid md:grid-cols-3">
          {audiences.map((item, index) => (
            <FeatureCard key={item.title} {...item} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function IntelligenceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="adapts" className="px-4 py-12 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Adaptive intelligence</p>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
              Other apps track your to-dos. Ginja learns how to support you.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:hidden">
            {intelligenceCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  className="rounded-[1.25rem] border border-[var(--border-color)] bg-[var(--surface-primary)] p-3 shadow-[0_10px_24px_rgba(44,36,28,0.06)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold leading-tight text-[var(--text-strong)]">{item.title}</h3>
                  <p className="mt-2 text-[11px] font-medium leading-relaxed text-[var(--text-secondary)]">{item.body}</p>
                </motion.article>
              );
            })}
          </div>
          <div className="hidden gap-4 sm:grid sm:grid-cols-2">
            {intelligenceCards.map((item, index) => (
              <FeatureCard key={item.title} {...item} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="h-full rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_12px_30px_rgba(32,28,22,0.06)] dark:shadow-[0_12px_34px_rgba(10,8,6,0.3)]">
      <p className="text-sm font-medium leading-relaxed text-[var(--text-secondary)] sm:text-base">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="mt-5">
        <p className="text-sm font-semibold text-[var(--text-strong)] sm:text-base">{testimonial.name}</p>
        <p className="text-xs text-[var(--text-muted)] sm:text-sm">{testimonial.country}</p>
      </div>
    </article>
  );
}

function SocialProofSection() {
  return (
    <AnimatedSection id="testimonials" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            Loved by people building clarity in their lives.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {proofItems.map((item) => (
              <span key={item} className="rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-secondary)]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function FounderNoteSection() {
  return (
    <AnimatedSection className="px-4 py-12 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] px-5 py-8 shadow-[0_20px_54px_rgba(44,36,28,0.08)] sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Founder note</p>
        <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-3xl">
          I built Ginja after feeling behind in every app.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          I had notes open, reminders open, and to-do lists open and still ended most days feeling scattered. The problem was not a lack of tools. The tools wanted structure before I had clarity. Ginja starts where real life starts: unload your plan, get a clear path, and keep moving with support that adapts as your days change.
        </p>
        <Link
          href="/about"
          className="mt-7 inline-flex rounded-full border border-[var(--border-color)] bg-[var(--surface-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-colors duration-200 hover:brightness-105"
        >
          Read why I built Ginja
        </Link>
      </div>
    </AnimatedSection>
  );
}

function FinalCTASection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(237,133,34,0.16),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_140px] items-center gap-3 rounded-[2rem] border border-[#E3CBB5] bg-[linear-gradient(135deg,#FFF9F2,#F4E8DA)] p-4 shadow-[0_26px_76px_rgba(80,54,30,0.14)] dark:border-[#6B4A31] dark:bg-[linear-gradient(135deg,#37251C,#211812)] xs:grid-cols-[minmax(0,1fr)_166px] xs:gap-4 sm:grid-cols-[minmax(0,1fr)_194px] sm:p-6 lg:grid-cols-[1fr_0.8fr] lg:gap-10 lg:p-10">
        <div className="min-w-0">
          <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] xs:text-3xl sm:text-4xl lg:text-5xl">
            Start with one thought. Leave with a clear next step.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE] sm:text-base lg:mt-5 lg:text-lg">
            Ginja helps you unload, organize, adapt, and follow through without making productivity feel heavy.
          </p>
          <Link
            href="/download"
            onClick={() => trackDownloadPageClick('premium_final_cta')}
            className="mt-6 inline-flex rounded-full bg-[#ED8522] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.25)] transition-all duration-200 hover:bg-[#C94B16] sm:px-6 sm:py-3 sm:text-base lg:mt-8"
            aria-label="Download Ginja and start free"
          >
            Download Ginja
          </Link>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden lg:block"
          >
            <PhoneMockup screen="brainDump" activeTab="home" className="w-[280px] sm:w-[318px]" />
          </motion.div>
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative lg:hidden"
          >
            <div className="absolute inset-y-8 right-2 w-20 rounded-full bg-[#ED8522]/16 blur-2xl" />
            <CompactPhonePreview screen="brainDump" activeTab="home" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function PremiumHomepage({ onSeeHowItWorks }) {
  const storyRef = useRef(null);

  const scrollToStory = () => {
    if (storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (onSeeHowItWorks) {
      onSeeHowItWorks();
    }
  };

  return (
    <>
      <HeroSection onSeeHowItWorks={scrollToStory} />
      <TransformationSection />
      <div ref={storyRef}>
        <StickyProductStory />
      </div>
      <FounderIntroVideoSection />
      <ArcShowcase />
      <AudienceSection />
      <IntelligenceSection />
      <FounderNoteSection />
      <FinalCTASection />
    </>
  );
}
