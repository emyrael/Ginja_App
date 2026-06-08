import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Brain,
  CalendarCheck2,
  Check,
  CheckCircle2,
  CircleUserRound,
  CloudRain,
  Compass,
  Crown,
  Dumbbell,
  Gift,
  Leaf,
  ListChecks,
  MapPin,
  MessageCircle,
  Moon,
  PlayCircle,
  Repeat2,
  Send,
  Sparkles,
  StickyNote,
  Target,
  UserCheck,
  Users2,
  Waypoints,
} from 'lucide-react';
import PhoneFrame from './ui/PhoneFrame';
import {
  ArcOverviewScreen,
  BrainDumpScreen,
  CalendarSyncScreen,
  HomeScreen,
  TodoSharedScreen,
  TodoViewScreen,
  YouScreen,
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
    navLabel: 'Brain Dump',
    icon: Brain,
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
    eyebrow: 'Circle',
    title: 'Bring shared plans out of the group chat.',
    body: 'Circle gives friends, classmates, family, or teammates one place for shared plans, actions, notes, and accountability.',
    bullets: ['Plan together with clear ownership', 'Assign actions inside the conversation', 'Keep notes and context beside the plan'],
    screen: 'circle',
    tab: 'circle',
    navLabel: 'Circle',
    icon: Users2,
  },
  {
    eyebrow: 'Explore',
    title: 'Discover something, then plan it together.',
    body: 'Explore helps you find events, places, and activities that match your interests, then connect them to the people and plans that make them happen.',
    bullets: ['Find experiences matched to your interests', 'Send ideas into Circle', 'Turn discovery into shared action'],
    screen: 'explore',
    tab: 'arc',
    navLabel: 'Explore',
    icon: Compass,
  },
  {
    eyebrow: 'Calendar Sync',
    title: 'Calendar Sync',
    body: 'Keep your plans, events, and to-dos connected in one place.',
    bullets: ['Connect Google Calendar', 'Import only the events you choose', 'Sync timed to-dos both ways'],
    screen: 'calendarSync',
    tab: 'todo',
    navLabel: 'Calendar',
    icon: CalendarCheck2,
  },
  {
    eyebrow: 'To-Do',
    title: 'Turn the day into something you can actually see.',
    body: 'Calendar and list views keep today, tomorrow, and the things you missed in one calm, legible place.',
    bullets: ['Switch between calendar and list', 'Track done, upcoming, and overdue', 'Schedule work, health, and personal tasks'],
    screen: 'todo',
    tab: 'todo',
    navLabel: 'To-Do',
    icon: ListChecks,
  },
  {
    eyebrow: 'You',
    title: 'Personalization that learns your rhythm.',
    body: 'You tunes how Ginja supports your day, from reminder tone to quiet hours, interests, and daily rhythm.',
    bullets: ['Set your tone and interests', 'Choose quiet hours', 'Tune reminders around your rhythm'],
    screen: 'you',
    tab: 'you',
    navLabel: 'You',
    icon: CircleUserRound,
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
    title: 'Professionals',
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

const connectedLifeSteps = [
  {
    outcome: 'Thought',
    feature: 'Brain Dump',
    body: 'Too many thoughts in your head? Brain Dump them into clear action.',
    icon: Brain,
  },
  {
    outcome: 'Goal',
    feature: 'Arc',
    body: 'Working toward a goal? Let Arc build the path and adapt it as life changes.',
    icon: ArcIcon,
  },
  {
    outcome: 'People',
    feature: 'Circle',
    body: 'Bring friends, classmates, family, or teammates into shared plans with notes, actions, and accountability.',
    icon: Users2,
  },
  {
    outcome: 'Experience',
    feature: 'Explore',
    body: 'Discover events, places, and activities that match your interests.',
    icon: Compass,
  },
  {
    outcome: 'Schedule',
    feature: 'Calendar Sync',
    body: 'Fit plans into your real schedule with two-way calendar sync.',
    icon: CalendarCheck2,
  },
  {
    outcome: 'Adaptation',
    feature: 'Personalization',
    body: 'Let Ginja learn your rhythm, preferences, and routines over time.',
    icon: CircleUserRound,
  },
];

const scatteredAppCards = [
  { label: 'Notes', icon: StickyNote, className: 'lg:left-6 lg:top-12' },
  { label: 'Tasks', icon: ListChecks, className: 'lg:left-32 lg:bottom-10' },
  { label: 'Goals', icon: Target, className: 'lg:left-[39%] lg:top-2' },
  { label: 'Group Chat', icon: MessageCircle, className: 'lg:right-32 lg:bottom-10' },
  { label: 'Events', icon: Compass, className: 'lg:right-8 lg:top-14' },
  { label: 'Calendar', icon: CalendarCheck2, className: 'lg:right-[34%] lg:top-28' },
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

const proofItems = ['Brain Dump', 'Smart Reminders', 'Arc', 'Circle', 'Strides'];

const chaosThoughts = [
  { text: 'Need to buy groceries', left: '8%', top: '118px', rotate: -4, drift: [0, -7, 4, 0] },
  { text: 'Finish assignment draft', left: '43%', top: '88px', rotate: 3, drift: [0, 6, -5, 0] },
  { text: 'Call mom back', left: '12%', top: '196px', rotate: 4, drift: [0, -5, 7, 0] },
  { text: 'Book dentist appointment', left: '42%', top: '182px', rotate: -3, drift: [0, 7, -4, 0] },
  { text: 'Gym today', left: '10%', top: '296px', rotate: -2, drift: [0, -6, 5, 0] },
  { text: 'Plan birthday dinner', left: '46%', top: '282px', rotate: 4, drift: [0, 5, -7, 0] },
  { text: 'Study Spanish verbs', left: '8%', top: '390px', rotate: 3, drift: [0, -5, 4, 0] },
  { text: 'Pay rent', left: '55%', top: '394px', rotate: -4, drift: [0, 5, -4, 0] },
];

const chaosTodos = [
  { day: 'Today', time: '9:00 AM', title: 'Finish assignment draft', priority: true },
  { day: 'Today', time: '11:30 AM', title: 'Study Spanish verbs', priority: false },
  { day: 'Today', time: '1:00 PM', title: 'Book dentist appointment', priority: false },
  { day: 'Today', time: '4:00 PM', title: 'Gym today', priority: true, tag: 'Shared plan' },
  { day: 'Today', time: '6:00 PM', title: 'Buy groceries', priority: false },
  { day: 'Today', time: '7:30 PM', title: 'Call mom back', priority: false },
  { day: 'Tomorrow', time: '10:00 AM', title: 'Pay rent', priority: true },
  { day: 'Friday', time: '6:30 PM', title: 'Plan birthday dinner', priority: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children, className = '', id, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      {...props}
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
      viewport={{ once: false, margin: '-70px' }}
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
    calendarSync: <CalendarSyncScreen />,
    todo: <TodoViewScreen />,
    circle: <TodoSharedScreen />,
    arc: <ArcOverviewScreen />,
    explore: <ArcExploreLightMockup />,
    you: <YouScreen />,
  };

  return (
    <PhoneFrame className={className || 'w-[286px] sm:w-[318px]'} activeTab={activeTab}>
      {screens[screen] || screens.home}
    </PhoneFrame>
  );
}

function CompactPhonePreview({ screen, activeTab }) {
  return (
    <div className="relative h-[372px] w-[164px] shrink-0 max-[374px]:h-[318px] max-[374px]:w-[140px] xs:h-[430px] xs:w-[194px] sm:h-[430px] sm:w-[194px]">
      <div className="absolute left-0 top-0 origin-top-left scale-[0.55] max-[374px]:scale-[0.47] xs:scale-[0.65] sm:scale-[0.65]">
        <PhoneMockup screen={screen} activeTab={activeTab} className="w-[290px]" />
      </div>
    </div>
  );
}

function CompactCustomPhonePreview({ activeTab, children }) {
  return (
    <div className="relative h-[372px] w-[164px] shrink-0 max-[374px]:h-[318px] max-[374px]:w-[140px] xs:h-[430px] xs:w-[194px]">
      <div className="absolute left-0 top-0 origin-top-left scale-[0.55] max-[374px]:scale-[0.47] xs:scale-[0.65]">
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

function PriorityAlertToggle({ on, reduceMotion, delay = 0 }) {
  return (
    <span className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full ${on ? 'bg-[#ED8522]/75' : 'bg-[#D8D0C5] dark:bg-white/18'}`}>
      <motion.span
        className="absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-[0_2px_6px_rgba(80,54,30,0.18)]"
        initial={reduceMotion ? false : { x: on ? 2 : 2 }}
        whileInView={{ x: on ? 18 : 2 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.38, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  );
}

function ChaosThoughtsScreen({ reduceMotion }) {
  return (
    <div className="relative min-h-[500px] overflow-hidden bg-[#EEEDE9] px-4 pb-4 pt-6 text-[#1F1D19] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(237,133,34,0.14),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(135,182,106,0.12),transparent_30%)]" />
      <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-[#A26335] dark:text-[#F1BE90]">Brain Dump</p>
      <h3 className="relative mt-2 text-[22px] font-bold leading-tight">Everything on your mind</h3>
      <p className="relative mt-2 max-w-[225px] text-[11px] leading-relaxed text-[#716A61] dark:text-[#A9A29D]">
        Start with the mess. No categories, no perfect plan, just what is already in your head.
      </p>

      {chaosThoughts.map((thought, index) => (
        <motion.div
          key={thought.text}
          className="absolute max-w-[132px] rounded-2xl border border-[#E8D3BF] bg-white/92 px-3 py-2 text-[10.5px] font-semibold leading-snug text-[#4D4035] shadow-[0_12px_26px_rgba(70,48,30,0.08)] backdrop-blur dark:border-white/10 dark:bg-[#3B2E26]/92 dark:text-[#F4E8DD]"
          style={{ left: thought.left, top: thought.top, rotate: `${thought.rotate}deg` }}
          initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: thought.drift,
                  y: thought.drift.slice().reverse(),
                }
          }
          viewport={{ once: true }}
          transition={{
            opacity: { delay: index * 0.07, duration: 0.42 },
            scale: { delay: index * 0.07, duration: 0.42 },
            x: { duration: 4.8 + index * 0.18, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 5.1 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {thought.text}
        </motion.div>
      ))}
    </div>
  );
}

function ChaosPlanScreen({ reduceMotion }) {
  let previousDay = '';

  return (
    <div className="min-h-[500px] bg-[#F8F1E8] px-4 pb-4 pt-6 text-[#241B15] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A26335] dark:text-[#F1BE90]">To-Do Plan</p>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[22px] font-bold leading-tight">Turned into a plan</h3>
          <p className="mt-1 max-w-[205px] text-[10px] leading-relaxed text-[#77675A] dark:text-[#A9A29D]">
            Tasks, timing, and priority alerts shaped into a day you can follow.
          </p>
        </div>
        <span className="rounded-full bg-[#EEF5E8] px-2.5 py-1 text-[9px] font-bold text-[#567B34] dark:bg-[#33412B] dark:text-[#BBD89F]">
          8 tasks
        </span>
      </div>

      <div className="mt-4 space-y-1.5">
        {chaosTodos.map((todo, index) => {
          const showDay = todo.day !== previousDay;
          previousDay = todo.day;

          return (
            <React.Fragment key={`${todo.day}-${todo.time}-${todo.title}`}>
              {showDay ? (
                <p className="pt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#A26335] dark:text-[#F1BE90]">{todo.day}</p>
              ) : null}
              <motion.div
                className="grid grid-cols-[58px_minmax(0,1fr)_40px] items-center gap-2 rounded-[15px] border border-[#EAD9C7] bg-[#FFFDF9] px-2.5 py-2 text-[#3C3128] shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#211B17] dark:text-[#F4E8DD]"
                initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.16 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="rounded-full bg-[#FFF1E8] px-1.5 py-1 text-center text-[8.5px] font-bold tabular-nums text-[#B65C1D] dark:bg-[#4A3325] dark:text-[#F1BE90]">
                  {todo.time}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[10.5px] font-bold leading-tight">{todo.title}</span>
                  <span className="mt-0.5 block text-[8.5px] font-semibold leading-tight text-[#81766B] dark:text-[#CBB8A6]">
                    {todo.tag || (todo.priority ? 'Priority alert ON' : 'Scheduled')}
                  </span>
                </span>
                <PriorityAlertToggle on={todo.priority} reduceMotion={reduceMotion} delay={0.5 + index * 0.07} />
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function ChaosToClaritySection() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="chaos-to-clarity" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Chaos to clarity</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            From scattered thoughts to a day you can actually follow.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Brain Dump everything on your mind. Ginja turns the noise into clear tasks, priorities, and time blocks that fit your day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)] items-center gap-2 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] lg:gap-10">
          <div className="flex justify-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[354px] w-[136px] max-[374px]:h-[320px] max-[374px]:w-[123px] sm:h-[442px] sm:w-[170px] lg:h-auto lg:w-auto">
                <div className="absolute left-0 top-0 origin-top-left scale-[0.47] max-[374px]:scale-[0.425] sm:scale-[0.59] lg:static lg:scale-100">
                  <PhoneFrame className="w-[286px] sm:w-[286px] lg:w-[318px]" activeTab="home">
                    <ChaosThoughtsScreen reduceMotion={reduceMotion} />
                  </PhoneFrame>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex h-[354px] items-center justify-center max-[374px]:h-[320px] sm:h-[442px] lg:h-[420px]">
            <div className="absolute h-px w-full bg-[#E7D2BD] dark:bg-white/12" />
            {!reduceMotion ? (
              <motion.span
                className="relative z-10 h-3 w-3 rounded-full bg-[#ED8522] shadow-[0_0_18px_rgba(237,133,34,0.45)] lg:h-4 lg:w-4"
                animate={{ x: [-8, 8, -8] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            ) : (
              <span className="relative z-10 h-3 w-3 rounded-full bg-[#ED8522] lg:h-4 lg:w-4" />
            )}
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[354px] w-[136px] max-[374px]:h-[320px] max-[374px]:w-[123px] sm:h-[442px] sm:w-[170px] lg:h-auto lg:w-auto">
                <div className="absolute left-0 top-0 origin-top-left scale-[0.47] max-[374px]:scale-[0.425] sm:scale-[0.59] lg:static lg:scale-100">
                  <PhoneFrame className="w-[286px] sm:w-[286px] lg:w-[318px]" activeTab="todo">
                    <ChaosPlanScreen reduceMotion={reduceMotion} />
                  </PhoneFrame>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-[var(--border-color)] bg-[linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] p-6 text-center shadow-[0_18px_48px_rgba(44,36,28,0.08)] dark:shadow-[0_18px_48px_rgba(10,8,6,0.28)] sm:p-8">
          <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Most apps ask you to organize yourself before you even know where to start.
          </p>
          <p className="mt-3 text-xl font-semibold text-[var(--text-strong)]">Ginja starts with the mess.</p>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            It helps you capture what is on your mind, turn it into action, and build a day that actually fits real life.
          </p>
        </div>
      </div>
    </AnimatedSection>
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
      <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_164px] items-center gap-3 py-6 max-[374px]:grid-cols-[minmax(0,1fr)_140px] xs:grid-cols-[minmax(0,1fr)_194px] xs:gap-4 sm:grid-cols-[minmax(0,1fr)_194px] sm:gap-6 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-8">
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

function FiveAppsProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="why-ginja" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Five apps problem</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            Why use five apps when one system can connect everything?
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            <p>Most of us organize life across too many places.</p>
            <p>
              One app for notes. One for tasks. One for goals. One for group chats. One for events. One for calendar.
            </p>
            <p>
              The result? Your thoughts, plans, people, and schedule live in separate places.
            </p>
            <p className="font-semibold text-[var(--text-strong)]">Ginja brings them together.</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#E4CDB8] bg-[radial-gradient(circle_at_50%_42%,rgba(237,133,34,0.14),transparent_32%),linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] p-5 shadow-[0_24px_70px_rgba(70,48,30,0.12)] dark:border-[#6B4A31] dark:bg-[radial-gradient(circle_at_50%_42%,rgba(237,133,34,0.18),transparent_32%),linear-gradient(135deg,#3A2A21,#211812)] sm:p-7 lg:min-h-[430px]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:absolute lg:inset-7 lg:block">
            {scatteredAppCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  className={`relative rounded-[1.25rem] border border-[var(--border-color)] bg-white/72 px-4 py-3 shadow-[0_14px_34px_rgba(70,48,30,0.08)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06] lg:absolute lg:w-36 ${item.className}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          x: [0, index % 2 === 0 ? 6 : -6, 0],
                          y: [0, index % 3 === 0 ? -5 : 5, 0],
                        }
                  }
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    opacity: { duration: 0.45, delay: index * 0.06 },
                    y: { duration: 4.5 + index * 0.25, repeat: Infinity, ease: 'easeInOut' },
                    x: { duration: 4.8 + index * 0.2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325] dark:text-[#F1BE90]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold text-[var(--text-strong)]">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-10 mx-auto mt-5 max-w-sm rounded-[1.75rem] border border-[#ED8522]/28 bg-[#FFF8EF]/92 p-5 text-center shadow-[0_24px_64px_rgba(80,54,30,0.15)] backdrop-blur dark:bg-[#2E2018]/92 sm:mt-7 lg:absolute lg:left-1/2 lg:top-1/2 lg:mt-0 lg:-translate-x-1/2 lg:-translate-y-1/2">
            <motion.div
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ED8522] text-white shadow-[0_18px_34px_rgba(237,133,34,0.25)]"
              animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Waypoints className="h-6 w-6" aria-hidden="true" />
            </motion.div>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-[var(--text-strong)]">One connected Ginja system</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Notes, tasks, goals, people, events, and calendar context finally speak to each other.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#A26335] dark:text-[#F1BE90]">
              <span>Thought</span>
              <span>→</span>
              <span>Plan</span>
              <span>→</span>
              <span>Life</span>
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
  const touchStartRef = useRef(null);
  const isStoryInView = useInView(sectionRef, { amount: 0.35 });
  const [mobileStepIndex, setMobileStepIndex] = useState(0);
  const [mobileDirection, setMobileDirection] = useState(1);
  const [mobileSwitchMode, setMobileSwitchMode] = useState('auto');
  const mobileStep = storySteps[mobileStepIndex];
  const MobileIcon = mobileStep.icon;
  const shouldAnimateMobileSwitch = !reduceMotion && mobileSwitchMode === 'auto';

  const setMobileStep = (index, mode = 'manual') => {
    if (index === mobileStepIndex) return;
    userPauseUntilRef.current = Date.now() + 9000;
    setMobileSwitchMode(mode);
    setMobileDirection(index > mobileStepIndex ? 1 : -1);
    setMobileStepIndex(index);
  };

  const setMobileStepFromSwipe = (direction) => {
    const nextIndex = direction > 0
      ? (mobileStepIndex + 1) % storySteps.length
      : (mobileStepIndex - 1 + storySteps.length) % storySteps.length;

    setMobileStep(nextIndex, 'manual');
  };

  const handleStoryTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleStoryTouchEnd = (event) => {
    if (!touchStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    setMobileStepFromSwipe(deltaX < 0 ? 1 : -1);
  };

  useEffect(() => {
    if (reduceMotion || !isStoryInView) return undefined;

    const baseDelay = mobileStep.screen === 'circle' ? 5400 : 4200;
    const delay = Math.max(baseDelay, userPauseUntilRef.current - Date.now());

    const timeout = window.setTimeout(() => {
      setMobileSwitchMode('auto');
      setMobileDirection(1);
      setMobileStepIndex((currentIndex) => (currentIndex + 1) % storySteps.length);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isStoryInView, mobileStep.screen, mobileStepIndex, reduceMotion]);

  return (
    <section ref={sectionRef} id="features" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Product story</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            From one messy thought to a plan that can keep up.
          </h2>
        </div>

        <div className="mt-12 hidden overflow-hidden rounded-[2rem] border border-[#E4CDB8] bg-[radial-gradient(circle_at_82%_18%,rgba(237,133,34,0.14),transparent_30%),linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] shadow-[0_28px_80px_rgba(70,48,30,0.13)] dark:border-[#6B4A31] dark:bg-[radial-gradient(circle_at_82%_18%,rgba(237,133,34,0.2),transparent_30%),linear-gradient(135deg,#3A2A21,#211812)] dark:shadow-[0_30px_90px_rgba(10,8,6,0.38)] lg:block">
          <div className="grid grid-cols-7 border-b border-[#E4CDB8]/80 bg-white/28 p-2 dark:border-white/10 dark:bg-black/10">
            {storySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === mobileStepIndex;

              return (
                <button
                  key={step.eyebrow}
                  type="button"
                  onClick={() => setMobileStep(index, 'manual')}
                  aria-label={`Show ${step.eyebrow}`}
                  aria-pressed={isActive}
                  className={`group relative mx-1 flex min-h-[5.25rem] min-w-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-[1.25rem] px-3 py-3 text-center transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#8A6B52] hover:bg-white/48 hover:text-[#A26335] dark:text-[#D7BDA4] dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="product-story-desktop-active"
                      className="absolute inset-0 rounded-[1.25rem] bg-[#ED8522] shadow-[0_16px_34px_rgba(237,133,34,0.24)]"
                      transition={{ type: 'spring', stiffness: 430, damping: 36 }}
                    />
                  )}
                  <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'border-white/28 bg-white/18'
                      : 'border-[#E6CBB3] bg-white/55 group-hover:border-[#ED8522]/35 dark:border-white/10 dark:bg-white/[0.05]'
                  }`}>
                    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </span>
                  <span className="relative z-10 w-full truncate text-xs font-bold uppercase tracking-[0.12em]">{step.navLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="relative grid min-h-[610px] grid-cols-[0.86fr_1.14fr] items-center gap-12 p-8 xl:p-10">
            <div className="pointer-events-none absolute inset-x-10 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(237,133,34,0.34),rgba(135,182,106,0.24),transparent)]" />
            <AnimatePresence mode="wait" custom={mobileDirection}>
              <motion.article
                key={mobileStep.eyebrow}
                custom={mobileDirection}
                initial={reduceMotion ? false : { opacity: 0, x: mobileDirection * 34, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={reduceMotion ? undefined : { opacity: 0, x: mobileDirection * -26, filter: 'blur(8px)' }}
                transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ED8522]/25 bg-[#FFF1E8] text-[#ED8522] shadow-[0_14px_30px_rgba(237,133,34,0.14)] dark:bg-[#4A3325]">
                    <MobileIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A26335] dark:text-[#F1BE90]">{mobileStep.eyebrow}</p>
                  </div>
                </div>
                <h3 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-tight text-[var(--text-strong)]">
                  {mobileStep.title}
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
                  {mobileStep.body}
                </p>
                <div className="mt-7 grid gap-3">
                  {mobileStep.bullets.map((bullet, index) => (
                    <motion.p
                      key={bullet}
                      className="flex items-start gap-3 rounded-2xl border border-[#E7D2BD] bg-white/52 px-4 py-3 text-sm font-medium leading-relaxed text-[#5F5146] shadow-[0_10px_24px_rgba(70,48,30,0.06)] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#D9C3AE]"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.34, delay: index * 0.06, ease: 'easeOut' }}
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ED8522]/12 text-[#ED8522]">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {bullet}
                    </motion.p>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-y-8 right-12 w-72 rounded-full bg-[#ED8522]/18 blur-3xl" />
              <div className="absolute bottom-16 left-10 h-36 w-36 rounded-full bg-[#87B66A]/14 blur-3xl" />
              <AnimatePresence mode="wait" custom={mobileDirection}>
                <motion.div
                  key={mobileStep.screen}
                  custom={mobileDirection}
                  initial={reduceMotion ? false : { opacity: 0, x: mobileDirection * 54, rotateY: mobileDirection * -10, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: mobileDirection * -42, rotateY: mobileDirection * 8, scale: 0.96 }}
                  transition={{ duration: reduceMotion ? 0 : 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[2rem] border border-white/48 bg-white/35 p-3 shadow-[0_30px_86px_rgba(58,42,28,0.18)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
                >
                  <PhoneMockup screen={mobileStep.screen} activeTab={mobileStep.tab} className="w-[318px]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="border-t border-[#E4CDB8]/80 bg-white/24 px-8 py-5 dark:border-white/10 dark:bg-black/10 xl:px-10">
            <div className="relative">
              <div className="absolute left-0 right-0 top-3 h-px bg-[#E2C8AF] dark:bg-white/12" />
              <motion.div
                className="absolute left-0 top-3 h-px bg-[linear-gradient(90deg,#ED8522,#87B66A)]"
                initial={false}
                animate={{ width: `${(mobileStepIndex / (storySteps.length - 1)) * 100}%` }}
                transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative grid grid-cols-7">
                {storySteps.map((step, index) => {
                  const isActive = index === mobileStepIndex;
                  const isPast = index < mobileStepIndex;

                  return (
                    <button
                      key={step.eyebrow}
                      type="button"
                      onClick={() => setMobileStep(index, 'manual')}
                      className="flex flex-col items-center gap-3 text-center"
                      aria-label={`Jump to ${step.eyebrow}`}
                    >
                      <span className={`h-6 w-6 rounded-full border-4 transition-colors duration-300 ${
                        isActive || isPast
                          ? 'border-[#ED8522] bg-[#ED8522]'
                          : 'border-[#E2C8AF] bg-[var(--surface-primary)] dark:border-white/18'
                      }`}>
                        <span className={`${isActive ? 'block' : 'hidden'} m-1 h-2 w-2 rounded-full bg-white`} />
                      </span>
                      <span className={`text-xs font-semibold transition-colors duration-300 ${isActive ? 'text-[#A26335] dark:text-[#F1BE90]' : 'text-[var(--text-muted)]'}`}>
                        {step.eyebrow}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <div
            className="overflow-hidden rounded-[1.75rem] border border-[var(--border-color)] bg-[radial-gradient(circle_at_84%_20%,rgba(237,133,34,0.12),transparent_28%),linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] p-3 shadow-[0_18px_48px_rgba(44,36,28,0.08)] dark:shadow-[0_20px_54px_rgba(10,8,6,0.3)] xs:p-4"
            onTouchStart={handleStoryTouchStart}
            onTouchEnd={handleStoryTouchEnd}
          >
            <div className="grid grid-cols-3 gap-2 pb-3">
              {storySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === mobileStepIndex;

                return (
                  <button
                    key={step.eyebrow}
                    type="button"
                    onClick={() => setMobileStep(index, 'manual')}
                    aria-label={`Show ${step.eyebrow}`}
                    aria-pressed={isActive}
                    className={`relative flex min-h-[58px] min-w-0 flex-col items-center justify-center gap-1.5 overflow-hidden rounded-2xl border px-2 py-2 text-center transition-colors duration-200 ${
                      isActive
                        ? 'border-[#ED8522]/40 text-white shadow-[0_10px_24px_rgba(237,133,34,0.2)]'
                        : 'border-[var(--border-color)] bg-[var(--surface-primary)] text-[#A26335] dark:text-[#F1BE90]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="product-story-active-category"
                        className="absolute inset-0 rounded-2xl bg-[#ED8522]"
                        transition={mobileSwitchMode === 'manual' ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <Icon className="relative z-10 h-4 w-4" aria-hidden="true" />
                    <span className="relative z-10 max-w-full truncate text-[9px] font-bold uppercase leading-none tracking-[0.08em]">
                      {step.navLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_164px] items-center gap-3 max-[374px]:grid-cols-[minmax(0,1fr)_140px] xs:grid-cols-[minmax(0,1fr)_194px] sm:grid-cols-[minmax(0,1fr)_194px] sm:gap-5">
              <AnimatePresence mode="wait" custom={mobileDirection}>
                <motion.article
                  key={mobileStep.eyebrow}
                  custom={mobileDirection}
                  initial={shouldAnimateMobileSwitch ? { opacity: 0, x: mobileDirection * 24 } : false}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldAnimateMobileSwitch ? { opacity: 0, x: mobileDirection * -18 } : undefined}
                  transition={{ duration: shouldAnimateMobileSwitch ? 0.28 : 0, ease: [0.22, 1, 0.36, 1] }}
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
                  initial={shouldAnimateMobileSwitch ? { opacity: 0, x: mobileDirection * 28, scale: 0.98 } : false}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={shouldAnimateMobileSwitch ? { opacity: 0, x: mobileDirection * -24, scale: 0.98 } : undefined}
                  transition={{ duration: shouldAnimateMobileSwitch ? 0.32 : 0, ease: [0.22, 1, 0.36, 1] }}
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

function ConnectedLifeSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.28 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || !isInView) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % connectedLifeSteps.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, [isInView, reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24" aria-labelledby="connected-system-heading">
      <div className="pointer-events-none absolute inset-x-0 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(237,133,34,0.35),rgba(135,182,106,0.28),transparent)]" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={isInView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#ED8522]/25 bg-[#FFF1E8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] shadow-[0_10px_28px_rgba(237,133,34,0.1)] dark:bg-[#4A3325] dark:text-[#F1BE90]">
            <Waypoints className="h-3.5 w-3.5" aria-hidden="true" />
            Connected system
          </p>
          <h2 id="connected-system-heading" className="mt-5 text-balance text-3xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
            A system designed to connect everything.
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            Ginja does not just manage tasks. It connects the way real life actually moves.
          </p>
        </motion.div>

        <div className="relative mt-12 hidden overflow-hidden rounded-[2rem] border border-[#E4CDB8] bg-[linear-gradient(135deg,var(--surface-soft),var(--surface-primary))] p-8 shadow-[0_26px_76px_rgba(70,48,30,0.12)] dark:border-[#6B4A31] dark:bg-[linear-gradient(135deg,#3A2A21,#211812)] lg:block">
          <svg className="pointer-events-none absolute inset-x-8 top-[8.4rem] h-24 w-[calc(100%-4rem)] overflow-visible" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
            <path d="M30 62 C130 8 210 112 310 62 S490 8 590 62 S770 112 870 62 S945 26 970 62" fill="none" stroke="rgba(226,200,175,0.8)" strokeWidth="3" strokeLinecap="round" />
            <motion.path
              d="M30 62 C130 8 210 112 310 62 S490 8 590 62 S770 112 870 62 S945 26 970 62"
              fill="none"
              stroke="url(#connected-flow-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0 }}
              animate={isInView || reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: reduceMotion ? 0 : 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
            <defs>
              <linearGradient id="connected-flow-gradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ED8522" />
                <stop offset="100%" stopColor="#87B66A" />
              </linearGradient>
            </defs>
            {!reduceMotion && isInView ? (
              <>
                <motion.circle
                  r="7"
                  fill="#ED8522"
                  filter="drop-shadow(0 0 10px rgba(237,133,34,0.45))"
                  animate={{ cx: [30, 190, 350, 510, 670, 830, 970], cy: [62, 38, 78, 42, 78, 42, 62] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle
                  r="4"
                  fill="#87B66A"
                  animate={{ cx: [30, 190, 350, 510, 670, 830, 970], cy: [62, 38, 78, 42, 78, 42, 62] }}
                  transition={{ duration: 5.4, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
                />
              </>
            ) : null}
          </svg>

          <div className="relative z-10 grid grid-cols-6 gap-4">
            {connectedLifeSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;

              return (
                <motion.article
                  key={step.feature}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative flex min-h-[275px] flex-col rounded-[1.5rem] border p-4 transition-colors duration-300 ${
                    isActive
                      ? 'border-[#ED8522]/45 bg-[#FFF8EF] shadow-[0_20px_46px_rgba(80,54,30,0.13)] dark:bg-[#3B2A20]'
                      : 'border-[var(--border-color)] bg-white/58 shadow-[0_14px_34px_rgba(44,36,28,0.07)] dark:bg-white/[0.05]'
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={isInView || reduceMotion ? { opacity: 1, y: isActive ? -4 : 0, scale: isActive ? 1.02 : 1 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.46, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ED8522]/24 bg-[#FFF1E8] text-[#ED8522] shadow-[0_10px_24px_rgba(237,133,34,0.12)] dark:bg-[#4A3325]">
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-[#A26335] dark:text-[#F1BE90]">{step.outcome}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-[var(--text-strong)]">{step.feature}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 lg:hidden">
          <div className="pointer-events-none absolute bottom-10 left-0 top-4 w-12 overflow-visible" aria-hidden="true">
            <svg className="h-full w-full overflow-visible" viewBox="0 0 48 1000" preserveAspectRatio="none">
              <path
                d="M24 28 C24 120 18 170 24 232 S30 345 24 410 S18 535 24 600 S30 720 24 785 S18 900 24 968"
                fill="none"
                stroke="rgba(226,200,175,0.82)"
                strokeLinecap="round"
                strokeWidth="3"
              />
              <motion.path
                d="M24 28 C24 120 18 170 24 232 S30 345 24 410 S18 535 24 600 S30 720 24 785 S18 900 24 968"
                fill="none"
                stroke="url(#connected-mobile-gradient)"
                strokeLinecap="round"
                strokeWidth="4"
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={isInView || reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: reduceMotion ? 0 : 8.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="connected-mobile-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ED8522" />
                  <stop offset="100%" stopColor="#87B66A" />
                </linearGradient>
              </defs>
              {!reduceMotion && isInView ? (
                <>
                  <motion.circle
                    r="7"
                    fill="#ED8522"
                    filter="drop-shadow(0 0 12px rgba(237,133,34,0.58))"
                    animate={{ cx: [24, 24, 24, 24, 24, 24], cy: [28, 232, 410, 600, 785, 968] }}
                    transition={{ duration: 10.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="3.5"
                    fill="#FFF8EF"
                    animate={{ cx: [24, 24, 24, 24, 24, 24], cy: [28, 232, 410, 600, 785, 968] }}
                    transition={{ duration: 10.8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </>
              ) : null}
            </svg>
          </div>
          <div className="relative z-10 space-y-4">
            {connectedLifeSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = !reduceMotion && index === activeIndex;

              return (
                <motion.article
                  key={step.feature}
                  className={`relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 rounded-[1.5rem] border p-4 transition-colors duration-300 ${
                    isActive
                      ? 'border-[#ED8522]/45 bg-[#FFF8EF] shadow-[0_18px_42px_rgba(80,54,30,0.14)] dark:bg-[#3B2A20]'
                      : 'border-[var(--border-color)] bg-[var(--surface-primary)] shadow-[0_14px_34px_rgba(44,36,28,0.07)] dark:bg-white/[0.05]'
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={isInView || reduceMotion ? { scale: isActive ? 1.015 : 1 } : undefined}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.span
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ED8522]/24 bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325]"
                    animate={
                      isActive
                        ? {
                            scale: 1.08,
                            boxShadow: '0 12px 28px rgba(237, 133, 34, 0.24)',
                          }
                        : {
                            scale: 1,
                            boxShadow: '0 0 0 rgba(237, 133, 34, 0)',
                          }
                    }
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Icon className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} aria-hidden="true" />
                  </motion.span>
                  <motion.div
                    className="min-w-0"
                    animate={{ opacity: reduceMotion || isActive ? 1 : 0.7 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">{step.outcome}</p>
                    <h3 className="mt-1 text-xl font-semibold leading-tight text-[var(--text-strong)]">{step.feature}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mt-12 border-t border-[var(--border-color)] pt-8"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Everything works together</p>
              <h3 className="mt-3 max-w-xl text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-3xl">
                Your thoughts, goals, people, experiences, and plans finally connect.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] leading-snug text-[var(--text-secondary)] sm:gap-3 sm:text-sm sm:leading-relaxed">
              {[
                'Feeling overwhelmed? Start with Brain Dump.',
                'Working toward a goal? Let Arc build the path.',
                'Planning a trip with friends? Create actions so everyone knows what they are responsible for.',
                'Find an event in Explore? Send it to your Circle.',
                'Need time for it? Ginja syncs it to your calendar.',
                'Everything works together.',
              ].map((item) => (
                <p key={item} className="rounded-[1rem] border border-[var(--border-color)] bg-[var(--surface-soft)] px-3 py-2.5 font-medium sm:rounded-[1.25rem] sm:px-4 sm:py-3">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
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
    lightSrc: '/images/arc/Arc_entry_light.png',
    darkSrc: '/images/arc/Arc_entry.png',
    alt: 'Ginja Arc entry screen for choosing a focus',
  },
  {
    label: 'Goal or Habit',
    lightSrc: '/images/arc/Arc_goal_habit_light.png',
    darkSrc: '/images/arc/Arc_goal_habit.png',
    alt: 'Ginja Arc screen for selecting Goal Arc or Habit Arc',
  },
  {
    label: 'Explore',
    lightSrc: '/images/arc/Arc_explore.png',
    darkSrc: '/images/arc/Arc_explore.png',
    alt: 'Ginja Explore screen showing Dallas recommendations',
    cityOverlay: true,
  },
];

const arcExplanationGroups = [
  {
    title: 'Build the arc',
    steps: ['Choose your focus', 'Select Goal or Habit', 'Ginja AI builds your adaptive plan'],
  },
  {
    title: 'Live with it',
    steps: ['Progress evolves weekly', 'Reflect and adapt', 'Explore places or events that match your interests'],
  },
];

const circleActions = [
  { owner: 'Sarah', task: 'Book train tickets', status: 'Done', done: true },
  { owner: 'James', task: 'Reserve restaurant', status: 'Done', done: true },
  { owner: 'Emma', task: 'Pick activities', status: 'Done', done: true },
  { owner: 'You', task: 'Confirm meeting point', status: 'Pending', done: false },
];

const circleNotes = [
  'Meeting point: Amsterdam Centraal',
  'Budget: €120 each',
  'Dinner: 7:30 PM',
];

const circleMessages = [
  { sender: 'Sarah', text: 'Train tickets booked.' },
  { sender: 'Emma', text: 'Added the canal walk.' },
  { sender: 'James', text: 'Restaurant is reserved.' },
  { sender: 'You', text: "I'll confirm the meeting point.", mine: true },
];

const circlePhoneSteps = [
  { id: 'chat', label: 'Chat' },
  { id: 'actions', label: 'Actions' },
  { id: 'notes', label: 'Notes' },
  { id: 'ready', label: 'Ready' },
];

const circlePhoneChatMessages = [
  { sender: 'Sarah', text: 'I can book the train tickets.' },
  { sender: 'James', text: "I'll reserve dinner for 7:30." },
  { sender: 'Emma', text: "I'll pick two activities." },
  { sender: 'You', text: "I'll confirm the meeting point.", mine: true },
];

const circleCopyBlocks = [
  {
    title: 'From "we should do that"',
    body: "to \"it's already happening.\"",
    icon: Sparkles,
  },
  {
    title: 'Clear responsibility',
    body: 'Assign actions so everyone knows what they are responsible for.',
    icon: UserCheck,
  },
  {
    title: 'Context in one place',
    body: 'Keep notes, chat, and progress together instead of scattered across messages.',
    icon: StickyNote,
  },
  {
    title: 'Explore becomes action',
    body: 'Find something in Explore, share it to your Circle, and turn it into a plan in seconds.',
    icon: Compass,
  },
];

const circleUseCases = [
  {
    title: 'Study Group',
    subtitle: 'Exam Prep',
    icon: BookOpen,
    stats: ['Chapter notes', 'Practice questions', 'Flashcards'],
    caption: 'Keep classmates aligned without chasing everyone in group chats.',
    accent: 'bg-[#FFF1E8] text-[#B65C1D] dark:bg-[#4A3325] dark:text-[#F1BE90]',
  },
  {
    title: 'Fitness Challenge',
    subtitle: '30 Day Running Challenge',
    icon: Dumbbell,
    stats: ['8 members', '112 actions completed', '5 active this week'],
    caption: 'Build accountability with people who keep you moving.',
    accent: 'bg-[#EEF5E8] text-[#4E8C06] dark:bg-[#33412B] dark:text-[#BBD89F]',
  },
  {
    title: 'Birthday Planning',
    subtitle: "James's Birthday Dinner",
    icon: Gift,
    stats: ['Venue booked', 'Cake pending', 'Guest list done', 'Playlist pending'],
    caption: 'Give every plan clear owners, notes, and next steps.',
    accent: 'bg-[#FFF6E5] text-[#A26335] dark:bg-[#4A3325] dark:text-[#F1BE90]',
  },
  {
    title: 'Startup Team',
    subtitle: 'Product Review Sprint',
    icon: Users2,
    stats: ['Pitch deck reviewed', 'Landing page feedback', 'Investor notes', 'Next demo assigned'],
    caption: 'Keep a small team aligned while feedback turns into clear next steps.',
    accent: 'bg-[#FFF6E5] text-[#A26335] dark:bg-[#4A3325] dark:text-[#F1BE90]',
  },
];

function ArcExploreLightMockup({ compact = false }) {
  const titleClass = compact ? 'text-[7px] xs:text-[8px] sm:text-[10px]' : 'text-[18px]';
  const sectionClass = compact ? 'text-[5px] xs:text-[6px] sm:text-[7px]' : 'text-[11px]';
  const cardTitleClass = compact ? 'text-[5.2px] xs:text-[6.2px] sm:text-[7.5px]' : 'text-[12px]';
  const cardMetaClass = compact ? 'text-[4.3px] xs:text-[5px] sm:text-[6px]' : 'text-[9px]';

  return (
    <div className="block h-full w-full bg-[#F8F1E8] px-[4%] pb-[4%] pt-[4%] text-[#241B15] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <div className="mb-[4%] flex items-center justify-end gap-[3%] text-[#8A7D70]">
        <span className={compact ? 'text-[7px] xs:text-[8px] sm:text-[10px]' : 'text-[16px]'}>◦</span>
        <span className={compact ? 'text-[7px] xs:text-[8px] sm:text-[10px]' : 'text-[16px]'}>⚙</span>
      </div>
      <div className="grid grid-cols-2 rounded-[6%] border border-[#D9C9B9] bg-white/72 p-[1.3%] text-center font-bold text-[#77675A] shadow-[0_10px_24px_rgba(80,54,30,0.08)]">
        <span className={`${sectionClass} py-[7%]`}>Arc</span>
        <span className={`${sectionClass} rounded-[12%] border border-[#ED8522] bg-white py-[7%] text-[#ED8522]`}>Explore</span>
      </div>
      <h3 className={`${titleClass} mt-[7%] font-bold leading-tight`}>Recommendations for Dallas</h3>
      <p className={`${sectionClass} mt-[5%] font-bold uppercase tracking-[0.18em] text-[#8A6B52]`}>Curated for you</p>
      <div className="mt-[4%] grid grid-cols-2 gap-[4%]">
        {[
          { title: 'Quiet Study Cafe', meta: 'Deep Ellum · 0.8 mi', image: 'bg-[linear-gradient(135deg,#F4C68E,#7A4B2B)]' },
          { title: 'Student Meetup', meta: 'Tonight · 18:30', image: 'bg-[linear-gradient(135deg,#C8DAA9,#355F43)]' },
        ].map((item) => (
          <div key={item.title} className="overflow-hidden rounded-[7%] border border-[#E3CBB5] bg-white shadow-[0_10px_24px_rgba(80,54,30,0.09)]">
            <div className={`${item.image} aspect-[1.18]`} />
            <div className="p-[6%]">
              <p className={`${cardTitleClass} font-bold leading-tight`}>{item.title}</p>
              <p className={`${cardMetaClass} mt-[4%] leading-tight text-[#77675A]`}>{item.meta}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={`${sectionClass} mt-[7%] font-bold uppercase tracking-[0.18em] text-[#8A6B52]`}>This week</p>
      <div className="mt-[4%] space-y-[3%]">
        {[
          { title: 'Tech Career Fair', meta: 'Thu · 11:00', tone: 'bg-[#FFF1E8]' },
          { title: 'University Startup Meetup', meta: 'Sat · 14:30', tone: 'bg-[#EFF6E8]' },
        ].map((item) => (
          <div key={item.title} className="flex items-center gap-[4%] rounded-[6%] border border-[#E3CBB5] bg-white/86 p-[4%] shadow-[0_8px_18px_rgba(80,54,30,0.07)]">
            <span className={`${item.tone} h-[13%] min-h-5 w-[16%] rounded-[28%] border border-[#EBD8C5]`} />
            <span>
              <span className={`${cardTitleClass} block font-bold leading-tight`}>{item.title}</span>
              <span className={`${cardMetaClass} mt-[2%] block text-[#77675A]`}>{item.meta}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArcFlowVisual({ reduceMotion, compact = false }) {
  const flowRef = useRef(null);
  const isFlowInView = useInView(flowRef, { amount: 0.35 });
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const screenWidthClass = compact ? 'w-[144px] xs:w-[168px] sm:w-[206px]' : 'w-[350px]';
  const screenRadiusClass = compact ? 'rounded-[1.35rem]' : 'rounded-[1.75rem]';
  const cityTitleClass = compact
    ? 'left-[3.9%] top-[17.85%] text-[6px] xs:text-[7.1px] sm:text-[8.7px]'
    : 'left-[3.9%] top-[17.85%] text-[14.7px]';
  const activeScreenLabel = arcFlowScreens[activeScreenIndex]?.label ?? arcFlowScreens[0].label;

  useEffect(() => {
    if (reduceMotion || !isFlowInView) return undefined;

    const interval = window.setInterval(() => {
      setActiveScreenIndex((currentIndex) => (currentIndex + 1) % arcFlowScreens.length);
    }, 3400);

    return () => window.clearInterval(interval);
  }, [isFlowInView, reduceMotion]);

  return (
    <div ref={flowRef} className={`relative flex flex-col items-center ${compact ? 'w-[150px] xs:w-[174px] sm:w-[216px]' : 'w-[460px]'}`}>
      <div className={`${compact ? 'absolute inset-y-8 right-3 w-24' : 'absolute inset-y-16 right-8 w-72'} rounded-full bg-[#ED8522]/18 blur-3xl`} />
      <div className={`relative overflow-hidden border border-white/15 bg-[#090909] p-1 shadow-[0_24px_58px_rgba(0,0,0,0.34)] ${compact ? 'rounded-[1.6rem]' : 'rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.42)]'}`}>
        <div className={`relative aspect-[1284/2778] overflow-hidden ${screenWidthClass} ${screenRadiusClass}`}>
          {arcFlowScreens.map((screen, index) => (
            <motion.div
              key={screen.label}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: activeScreenIndex === index ? 1 : 0,
                scale: activeScreenIndex === index ? 1 : 1.01,
              }}
              transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden={activeScreenIndex !== index}
            >
              {screen.cityOverlay ? (
                <ArcExploreLightMockup compact={compact} />
              ) : (
                <img
                  src={screen.lightSrc}
                  alt={screen.alt}
                  loading="eager"
                  decoding="async"
                  className={`block h-full w-full object-cover dark:hidden ${screenRadiusClass}`}
                />
              )}
              {!screen.cityOverlay ? (
                <img
                  src={screen.darkSrc}
                  alt={`${screen.alt} in dark mode`}
                  loading="eager"
                  decoding="async"
                  className={`hidden h-full w-full object-cover dark:block ${screenRadiusClass}`}
                />
              ) : null}
              {screen.cityOverlay ? (
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-[3.5%] top-[17.75%] hidden h-[3.4%] w-[68%] bg-[#111111] dark:block" />
                  <p className={`absolute hidden whitespace-nowrap font-bold leading-none text-[#F5F5F5] dark:block ${cityTitleClass}`}>
                    Recommendations for Dallas
                  </p>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
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
        {activeScreenIndex + 1}. {activeScreenLabel}
      </p>
    </div>
  );
}

function ArcShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection id="arc" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#E3CBB5] bg-[radial-gradient(circle_at_82%_18%,rgba(237,133,34,0.17),transparent_30%),linear-gradient(135deg,#FFF9F2,#F5E8DA_54%,#FBF6EF)] shadow-[0_26px_76px_rgba(80,54,30,0.14)] dark:border-[#6B4A31] dark:bg-[radial-gradient(circle_at_82%_18%,rgba(237,133,34,0.24),transparent_30%),linear-gradient(135deg,#11100F,#2B1D15_54%,#090807)]">
        <div className="grid grid-cols-[minmax(0,1fr)_150px] items-center gap-3 p-4 xs:grid-cols-[minmax(0,1fr)_174px] sm:grid-cols-[minmax(0,1fr)_216px] sm:p-6 lg:hidden">
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

        <div className="hidden gap-10 p-6 sm:p-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(410px,0.9fr)] lg:p-12">
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
          <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-[#3A2A20] dark:text-[#F4E9DD] lg:gap-4 lg:text-sm">
            {arcExplanationGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                className="rounded-2xl border border-[#E3CBB5] bg-white/45 p-3 dark:border-white/10 dark:bg-white/[0.05] lg:p-4"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 0.48, delay: groupIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90] lg:text-[11px]">
                  {group.title}
                </p>
                <div className="grid gap-2">
                  {group.steps.map((step, stepIndex) => {
                    const itemNumber = groupIndex * 3 + stepIndex + 1;

                    return (
                      <div key={step} className="rounded-xl border border-[#E7D2BD] bg-white/55 px-3 py-2.5 dark:border-white/[0.08] dark:bg-black/10">
                        <span className="mr-2 text-[#ED8522]">{itemNumber}.</span>
                        {step}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function CircleExploreCard({ reduceMotion, active }) {
  return (
    <motion.article
      className="relative overflow-hidden rounded-[1.5rem] border border-[#E3CBB5] bg-white/76 p-3 shadow-[0_22px_58px_rgba(80,54,30,0.13)] backdrop-blur dark:border-white/10 dark:bg-white/[0.06] sm:rounded-[1.75rem] sm:p-6"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(237,133,34,0.16),transparent_34%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ED8522]/24 bg-[#FFF1E8] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:bg-[#4A3325] dark:text-[#F1BE90]">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Explore
          </span>
          <span className="rounded-full border border-[#E7D2BD] bg-white/72 px-2.5 py-1 text-[10px] font-semibold text-[#7A6655] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#D9C3AE] sm:px-3 sm:text-[11px]">
            Matched to your interests
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-[#E9D5C0] bg-[#FFFDF8] shadow-[0_16px_34px_rgba(70,48,30,0.08)] dark:border-white/10 dark:bg-[#2B211B] sm:mt-6 sm:rounded-[1.35rem]">
          <div
            className="relative h-28 overflow-hidden border-b border-[#E9D5C0] bg-[linear-gradient(180deg,#F7D7A8_0%,#F4E2C8_48%,#9BB18F_49%,#5C7A72_100%)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#1B2630_0%,#392A24_48%,#233932_49%,#14241F_100%)] sm:h-40"
            role="img"
            aria-label="Amsterdam canal place preview"
          >
            <div className="absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_82%_24%,rgba(237,133,34,0.42),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent)] dark:bg-[radial-gradient(circle_at_82%_24%,rgba(241,190,144,0.18),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] sm:h-24" />
            <div className="absolute bottom-[38%] left-4 flex items-end gap-1.5 sm:left-7 sm:gap-2">
              {[
                ['h-12 w-8 bg-[#B97143] dark:bg-[#5A3424]', 'bg-[#7E4A2E] dark:bg-[#2E211C]'],
                ['h-16 w-9 bg-[#E1A66B] dark:bg-[#70412D]', 'bg-[#8F5B36] dark:bg-[#33231B]'],
                ['h-11 w-7 bg-[#C88551] dark:bg-[#5B3728]', 'bg-[#6F432C] dark:bg-[#2D211B]'],
                ['h-14 w-8 bg-[#F0C48C] dark:bg-[#7A4A31]', 'bg-[#9C6037] dark:bg-[#37261D]'],
              ].map(([buildingClass, roofClass], index) => (
                <span key={index} className="relative block">
                  <span className={`block rounded-t-[0.3rem] ${buildingClass}`} />
                  <span className={`absolute -top-2 left-1 right-1 h-3 rounded-t-full ${roofClass}`} />
                  <span className="absolute left-2 top-4 h-2 w-2 rounded-sm bg-white/58 dark:bg-[#F1BE90]/28" />
                  <span className="absolute bottom-3 right-2 h-2 w-2 rounded-sm bg-white/46 dark:bg-[#F1BE90]/22" />
                </span>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-[linear-gradient(165deg,#4B7770,#2F5F68_52%,#1F4854)] dark:bg-[linear-gradient(165deg,#1A413C,#15333A_52%,#0D242B)]">
              <div className="absolute inset-x-5 top-5 h-px bg-white/42 dark:bg-white/18" />
              <div className="absolute inset-x-10 top-10 h-px bg-white/26 dark:bg-white/12" />
              <div className="absolute bottom-3 right-6 h-5 w-16 rounded-full bg-white/24 blur-sm dark:bg-[#F1BE90]/12" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,rgba(17,16,15,0.28))]" />
            <span className="absolute bottom-3 left-3 rounded-full bg-white/88 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A26335] shadow-[0_8px_18px_rgba(20,16,12,0.18)] dark:bg-[#241B15]/88 dark:text-[#F1BE90]">
              Shareable discovery
            </span>
          </div>
          <div className="p-3 sm:p-4">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] sm:text-xl">Amsterdam Weekend</h3>
                <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-[#7A6655] dark:text-[#D9C3AE] sm:text-sm">
                  <MapPin className="h-3.5 w-3.5 text-[#ED8522]" aria-hidden="true" />
                  30.05.2026 · 2:00 PM
                </p>
              </div>
              <span className="rounded-full bg-[#EEF5E8] px-3 py-1 text-xs font-bold text-[#4E8C06] dark:bg-[#33412B] dark:text-[#BBD89F]">
                94% fit
              </span>
            </div>
            <p className="mt-3 text-xs font-medium leading-relaxed text-[#6A5544] dark:text-[#D9C3AE] sm:mt-4 sm:text-sm">
              Food market · Canal walk · Live music
            </p>
            <motion.div
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ED8522] px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(237,133,34,0.25)] sm:mt-5"
              animate={reduceMotion ? undefined : { boxShadow: ['0 14px 30px rgba(237,133,34,0.2)', '0 18px 42px rgba(237,133,34,0.34)', '0 14px 30px rgba(237,133,34,0.2)'] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Share to Circle
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CircleConnector({ reduceMotion, active }) {
  return (
    <div className="relative flex min-h-12 items-center justify-center sm:min-h-16 lg:min-h-[420px]">
      <div className="hidden h-px w-full bg-[linear-gradient(90deg,rgba(237,133,34,0.12),rgba(237,133,34,0.62),rgba(135,182,106,0.42))] lg:block" />
      <div className="h-12 w-px bg-[linear-gradient(180deg,rgba(237,133,34,0.12),rgba(237,133,34,0.62),rgba(135,182,106,0.42))] sm:h-16 lg:hidden" />
      <motion.span
        className="absolute hidden h-11 w-11 items-center justify-center rounded-2xl border border-[#ED8522]/30 bg-[#FFF1E8] text-[#ED8522] shadow-[0_0_34px_rgba(237,133,34,0.34)] dark:bg-[#4A3325] dark:text-[#F1BE90] lg:flex"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.82, x: -36 }}
        animate={
          active
            ? reduceMotion
              ? { opacity: 1 }
              : {
                  opacity: [0, 1, 1, 0.96],
                  scale: [0.82, 1, 1, 0.94],
                  x: [-36, 0, 36, 36],
                }
            : undefined
        }
        transition={{ duration: reduceMotion ? 0 : 1.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </motion.span>
      <motion.span
        className="absolute flex h-11 w-11 items-center justify-center rounded-2xl border border-[#ED8522]/30 bg-[#FFF1E8] text-[#ED8522] shadow-[0_0_34px_rgba(237,133,34,0.34)] dark:bg-[#4A3325] dark:text-[#F1BE90] lg:hidden"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: -22 }}
        animate={
          active
            ? reduceMotion
              ? { opacity: 1 }
              : {
                  opacity: [0, 1, 1, 0.96],
                  scale: [0.82, 1, 1, 0.94],
                  y: [-22, 8, 22, 22],
                }
            : undefined
        }
        transition={{ duration: reduceMotion ? 0 : 1.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        <ArrowRight className="h-5 w-5 rotate-90" aria-hidden="true" />
      </motion.span>
      {!reduceMotion && (
        <motion.span
          className="absolute hidden h-3 w-3 rounded-full bg-[#ED8522] shadow-[0_0_22px_rgba(237,133,34,0.52)] lg:block"
          initial={{ opacity: 0, x: -64 }}
          animate={active ? { opacity: [0, 1, 1, 0], x: [-64, 0, 64, 76] } : undefined}
          transition={{ duration: 1.8, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </div>
  );
}

function CirclePhoneScreen({ active, reduceMotion }) {
  const [stepIndex, setStepIndex] = useState(0);
  const activeStep = circlePhoneSteps[stepIndex] || circlePhoneSteps[0];

  useEffect(() => {
    if (!active) return undefined;

    setStepIndex(reduceMotion ? circlePhoneSteps.length - 1 : 0);
    if (reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setStepIndex((currentIndex) => (currentIndex + 1) % circlePhoneSteps.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [active, reduceMotion]);

  return (
    <div className="min-h-[500px] bg-[#F8F1E8] px-4 pb-4 pt-4 text-[#241B15] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[15px] text-[#5F5A51] dark:text-[#ADB0B6]">←</span>
        <div className="min-w-0">
          <h3 className="truncate text-[17px] font-bold leading-tight">Amsterdam Weekend</h3>
          <p className="mt-0.5 text-[9px] font-semibold text-[#7A6655] dark:text-[#A9A29D]">30.05.2026 · You, Sarah, James, Emma</p>
        </div>
      </div>

      <div className="mb-3 grid grid-cols-4 overflow-hidden rounded-[14px] border border-[#E2DCD1] bg-[#F6F3ED] p-1 text-center text-[9px] font-bold dark:border-white/10 dark:bg-[#332D36]">
        {circlePhoneSteps.map((step) => {
          const isActive = step.id === activeStep.id;

          return (
            <span key={step.id} className={`relative rounded-[10px] py-2 transition-colors duration-300 ${isActive ? 'text-[#D37B32]' : 'text-[#7E776E] dark:text-[#A9ACB2]'}`}>
              {isActive && (
                <motion.span
                  layoutId="circle-premium-phone-tab"
                  className="absolute inset-0 rounded-[10px] bg-white shadow-[0_6px_16px_rgba(80,54,30,0.08)] dark:bg-[#3A333C]"
                  transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{step.label}</span>
            </span>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[360px]"
        >
          {activeStep.id === 'chat' && (
            <div>
              <div className="space-y-2">
                {circlePhoneChatMessages.map((message, index) => (
                  <motion.div
                    key={`${message.sender}-${message.text}`}
                    className={`flex ${message.mine ? 'justify-end' : 'justify-start'}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.34, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={`max-w-[84%] rounded-2xl border px-3 py-2 ${message.mine ? 'border-[#E7E1D7] bg-white dark:border-white/10 dark:bg-[#3A333C]' : 'border-[#F0D8C0] bg-[#FFF7EE] dark:border-[#5A3A23] dark:bg-[#2A221B]'}`}>
                      {!message.mine && <p className="mb-0.5 text-[8px] font-bold text-[#7A736A] dark:text-[#ADB0B5]">{message.sender}</p>}
                      <p className="text-[10.5px] font-medium leading-snug">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-4 flex items-center gap-2 rounded-2xl border border-[#ED8522]/22 bg-[#FFF1E8] px-3 py-2.5 text-[10px] font-bold text-[#A26335] dark:border-[#F1BE90]/18 dark:bg-[#4A3325] dark:text-[#F1BE90]"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.34, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Ginja is creating actions...
              </motion.div>
            </div>
          )}

          {activeStep.id === 'actions' && (
            <div>
              <div className="rounded-2xl border border-[#EAD9C7] bg-white/76 p-3 dark:border-white/10 dark:bg-white/[0.05]">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-[#7A6655] dark:text-[#D9C3AE]">
                  <span>Actions assigned</span>
                  <span>3/4 complete</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EAD9C7] dark:bg-white/10">
                  <motion.span
                    className="block h-full rounded-full bg-[linear-gradient(90deg,#ED8522,#87B66A)]"
                    initial={{ width: '0%' }}
                    animate={{ width: '75%' }}
                    transition={{ duration: reduceMotion ? 0 : 0.86, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {circleActions.map((action, index) => (
                  <motion.div
                    key={`${action.owner}-${action.task}`}
                    className="grid grid-cols-[28px_minmax(0,1fr)_auto] items-center gap-2 rounded-2xl border border-[#EAD9C7] bg-white/82 px-3 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.05]"
                    initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.34, delay: 0.2 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border ${action.done ? 'border-[#87B66A] bg-[#87B66A] text-white' : 'border-[#ED8522]/35 bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325]'}`}
                      initial={reduceMotion ? false : { scale: 0.82 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: reduceMotion ? 0 : 0.28, delay: 0.34 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {action.done ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <span className="h-2 w-2 rounded-full bg-current" />}
                    </motion.span>
                    <span className="min-w-0">
                      <span className="block truncate text-[10.5px] font-bold text-[#2E241D] dark:text-[#FFF7EF]">{action.owner} — {action.task}</span>
                      <span className="mt-0.5 block text-[9px] font-semibold text-[#7A6655] dark:text-[#CBB8A6]">{action.status}</span>
                    </span>
                    <span className={`rounded-full px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] ${action.done ? 'bg-[#EEF5E8] text-[#4E8C06] dark:bg-[#33412B] dark:text-[#BBD89F]' : 'bg-[#FFF1E8] text-[#A26335] dark:bg-[#4A3325] dark:text-[#F1BE90]'}`}>
                      {action.done ? 'Done' : 'Next'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeStep.id === 'notes' && (
            <div>
              <div className="rounded-2xl border border-[#EAD9C7] bg-[#FFF8EF] p-3 dark:border-white/[0.08] dark:bg-[#2B211B]">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">Notes saved</p>
                <div className="mt-3 space-y-2">
                  {[...circleNotes, 'Activities: Canal walk + food market'].map((note, index) => (
                    <motion.p
                      key={note}
                      className="rounded-xl bg-white/72 px-3 py-2 text-[10.5px] font-semibold leading-snug text-[#5F5146] dark:bg-white/[0.06] dark:text-[#E8D8C9]"
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.32, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {note}
                    </motion.p>
                  ))}
                </div>
              </div>
              <p className="mt-3 rounded-2xl border border-[#EAD9C7] bg-white/72 px-3 py-2 text-[10px] font-semibold leading-snug text-[#7A6655] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#D9C3AE]">
                Chat, actions, and notes now live beside the plan.
              </p>
            </div>
          )}

          {activeStep.id === 'ready' && (
            <div className="space-y-3">
              <motion.div
                className="rounded-[1.35rem] border border-[#87B66A]/28 bg-[#F5FAF0] p-4 text-center shadow-[0_14px_30px_rgba(72,98,50,0.1)] dark:border-[#87B66A]/22 dark:bg-[#24301F]/70"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-[#87B66A] text-white shadow-[0_14px_30px_rgba(135,182,106,0.22)]">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-3 text-[19px] font-bold leading-tight text-[#24311E] dark:text-[#F4FFE9]">Amsterdam Weekend</h4>
                <motion.p
                  className="mx-auto mt-2 inline-flex rounded-full bg-white/82 px-3 py-1 text-[10px] font-bold text-[#4E8C06] dark:bg-white/[0.08] dark:text-[#BBD89F]"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reduceMotion ? 0 : 0.34, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  Plan is almost ready
                </motion.p>
              </motion.div>
              {['3/4 actions complete', 'Notes saved', 'Everyone knows what they are responsible for'].map((item, index) => (
                <motion.p
                  key={item}
                  className="rounded-2xl border border-[#EAD9C7] bg-white/78 px-3 py-2.5 text-[10.5px] font-bold leading-snug text-[#5F5146] dark:border-white/10 dark:bg-white/[0.05] dark:text-[#E8D8C9]"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.32, delay: 0.28 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function AnimatedCirclePlanMockup({ reduceMotion, active }) {
  return (
    <motion.article
      className="relative flex flex-col items-center"
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.58, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        <div className="absolute inset-y-10 right-0 w-40 rounded-full bg-[#ED8522]/18 blur-3xl" />
        <PhoneFrame activeTab="circle" className="relative z-10 w-[268px] xs:w-[286px] sm:w-[318px]">
          <CirclePhoneScreen active={active} reduceMotion={reduceMotion} />
        </PhoneFrame>
      </div>

      <div className="mt-4 w-full rounded-[1.35rem] border border-[#E3CBB5] bg-white/58 p-4 text-center shadow-[0_14px_34px_rgba(70,48,30,0.08)] dark:border-white/10 dark:bg-white/[0.05]">
        <p className="text-sm font-semibold leading-snug text-[#241B15] dark:text-[#FFF7EF]">
          From &ldquo;we should do that&rdquo; to &ldquo;everyone knows what to do next.&rdquo;
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#A26335] dark:text-[#F1BE90]">
          {['Find in Explore', 'Share to Circle', 'Turn into a plan'].map((item) => (
            <span key={item} className="rounded-2xl border border-[#E3CBB5] bg-white/52 px-2 py-2 dark:border-white/10 dark:bg-white/[0.05]">{item}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CirclePlanMockup({ reduceMotion, active }) {
  return (
    <motion.article
      className="relative overflow-hidden rounded-[1.5rem] border border-[#D8C3AF] bg-[#F8F1E8] p-1.5 shadow-[0_28px_78px_rgba(80,54,30,0.18)] dark:border-white/10 dark:bg-[#17120F] sm:rounded-[2rem] sm:p-2"
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.58, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden rounded-[1.25rem] border border-[#E7D2BD] bg-[#FFFDF8] dark:border-white/[0.08] dark:bg-[#211812] sm:rounded-[1.65rem]">
        <div className="border-b border-[#EAD9C7] bg-[#F8F1E8] px-3 py-3 dark:border-white/[0.08] dark:bg-[#15110F] sm:px-5 sm:py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A26335] dark:text-[#F1BE90]">Circle plan created</p>
              <h3 className="mt-2 text-xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] sm:text-2xl">Amsterdam Weekend</h3>
              <p className="mt-1 text-xs font-medium text-[#7A6655] dark:text-[#D9C3AE] sm:text-sm">30.05.2026 · You, Sarah, James, Emma</p>
            </div>
            <span className="rounded-full bg-[#EEF5E8] px-2.5 py-1 text-[10px] font-bold text-[#4E8C06] dark:bg-[#33412B] dark:text-[#BBD89F] sm:px-3 sm:py-1.5 sm:text-xs">
              Plan is almost ready
            </span>
          </div>

          <div className="mt-3 sm:mt-5">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.12em] text-[#7A6655] dark:text-[#D9C3AE] sm:text-xs">
              <span>Progress</span>
              <span>3/4 actions complete</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#EAD9C7] dark:bg-white/10">
              <motion.span
                className="block h-full rounded-full bg-[linear-gradient(90deg,#ED8522,#87B66A)]"
                initial={{ width: '0%' }}
                animate={active ? { width: '75%' } : undefined}
                transition={{ duration: reduceMotion ? 0 : 0.9, delay: 1.22, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-3 sm:p-4 lg:grid-cols-[1fr_0.88fr] lg:gap-4">
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-2.5">
            {circleActions.map((action, index) => (
              <motion.div
                key={`${action.owner}-${action.task}`}
                className="grid grid-cols-[24px_minmax(0,1fr)] items-center gap-2 rounded-2xl border border-[#EAD9C7] bg-white/82 px-2.5 py-2 shadow-[0_8px_20px_rgba(70,48,30,0.06)] dark:border-white/[0.08] dark:bg-white/[0.05] sm:grid-cols-[32px_minmax(0,1fr)_auto] sm:gap-3 sm:px-3 sm:py-3"
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                animate={active ? { opacity: 1, x: 0 } : undefined}
                transition={{ duration: reduceMotion ? 0 : 0.42, delay: 1.34 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border sm:h-8 sm:w-8 ${action.done ? 'border-[#87B66A] bg-[#87B66A] text-white' : 'border-[#ED8522]/35 bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325]'}`}
                  initial={reduceMotion ? false : { scale: 0.82 }}
                  animate={active ? { scale: 1 } : undefined}
                  transition={{ duration: reduceMotion ? 0 : 0.3, delay: 1.54 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {action.done ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" /> : <span className="h-2 w-2 rounded-full bg-current sm:h-2.5 sm:w-2.5" />}
                </motion.span>
                <span className="min-w-0">
                  <span className="block truncate text-[11px] font-bold text-[#2E241D] dark:text-[#FFF7EF] sm:text-sm">{action.owner} — {action.task}</span>
                  <span className="mt-0.5 block text-[10px] font-medium text-[#7A6655] dark:text-[#CBB8A6] sm:text-xs">{action.status}</span>
                </span>
                <span className={`hidden rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] sm:inline-flex ${action.done ? 'bg-[#EEF5E8] text-[#4E8C06] dark:bg-[#33412B] dark:text-[#BBD89F]' : 'bg-[#FFF1E8] text-[#A26335] dark:bg-[#4A3325] dark:text-[#F1BE90]'}`}>
                  {action.done ? 'Done' : 'Next'}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 lg:block lg:space-y-3">
            <motion.div
              className="rounded-2xl border border-[#EAD9C7] bg-[#FFF8EF] p-2.5 dark:border-white/[0.08] dark:bg-[#2B211B] sm:p-3"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: reduceMotion ? 0 : 0.42, delay: 1.86, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">Notes</p>
              <div className="mt-2 space-y-1.5">
                {circleNotes.map((note) => (
                  <p key={note} className="rounded-xl bg-white/72 px-2 py-1.5 text-[10px] font-semibold text-[#5F5146] dark:bg-white/[0.06] dark:text-[#E8D8C9] sm:px-3 sm:py-2 sm:text-xs">{note}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-[#EAD9C7] bg-white/78 p-2.5 dark:border-white/[0.08] dark:bg-white/[0.04] sm:p-3"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: reduceMotion ? 0 : 0.42, delay: 2.02, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">Chat</p>
              <div className="mt-2 space-y-1.5">
                {circleMessages.map((message, index) => (
                  <motion.div
                    key={`${message.sender}-${message.text}`}
                    className={`flex ${message.mine ? 'justify-end' : 'justify-start'}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={active ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: reduceMotion ? 0 : 0.34, delay: 2.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className={`max-w-[96%] rounded-2xl border px-2 py-1.5 text-[10px] font-medium leading-snug sm:max-w-[90%] sm:px-3 sm:py-2 sm:text-xs ${message.mine ? 'border-[#E7D2BD] bg-[#F8F1E8] text-[#4E4035] dark:border-white/10 dark:bg-[#352820] dark:text-[#F4E8DD]' : 'border-[#F0D8C0] bg-[#FFF7EE] text-[#4E4035] dark:border-[#5A3A23] dark:bg-[#2A221B] dark:text-[#F4E8DD]'}`}>
                      <span className="mr-1 font-bold">{message.sender}:</span>{message.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CircleCompletionCard({ reduceMotion, active }) {
  return (
    <motion.article
      className="rounded-[1.5rem] border border-[#87B66A]/28 bg-[#F5FAF0]/86 p-4 shadow-[0_18px_44px_rgba(72,98,50,0.12)] dark:border-[#87B66A]/22 dark:bg-[#24301F]/70 sm:p-5"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: 2.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4E8C06] dark:text-[#BBD89F]">Follow-through</p>
          <h3 className="mt-2 text-lg font-semibold leading-tight text-[#24311E] dark:text-[#F4FFE9] sm:text-xl">Amsterdam Weekend</h3>
          <p className="mt-1 text-sm font-bold text-[#4E8C06] dark:text-[#BBD89F]">Ready to go</p>
        </div>
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#87B66A] text-white shadow-[0_14px_30px_rgba(135,182,106,0.22)]">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-[#4E5A43] dark:text-[#DCEED0] sm:text-[11px]">
        {['3 friends aligned', '4 actions assigned', 'Notes saved'].map((item) => (
          <span key={item} className="rounded-2xl border border-[#C9DDBA] bg-white/62 px-2 py-2 dark:border-white/10 dark:bg-white/[0.05]">{item}</span>
        ))}
      </div>
    </motion.article>
  );
}

function CircleUseCaseCard({ item, index, reduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      className="group rounded-[1.35rem] border border-[var(--border-color)] bg-[linear-gradient(180deg,var(--surface-primary),var(--surface-soft))] p-3 shadow-[0_14px_34px_rgba(44,36,28,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ED8522]/35 hover:shadow-[0_22px_52px_rgba(80,54,30,0.12)] dark:shadow-[0_18px_42px_rgba(12,8,5,0.28)] sm:rounded-[1.5rem] sm:p-5"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: reduceMotion ? 0 : 0.48, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-9 w-9 items-center justify-center rounded-2xl sm:h-11 sm:w-11 ${item.accent}`}>
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </span>
        <span className="h-2 w-2 rounded-full bg-[#ED8522]/34 transition-transform duration-300 group-hover:scale-[1.8]" />
      </div>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90] sm:mt-5 sm:text-[11px]">{item.title}</p>
      <h3 className="mt-2 text-base font-semibold leading-tight text-[var(--text-strong)] sm:text-lg">{item.subtitle}</h3>
      <div className="mt-3 grid gap-1.5 sm:mt-4 sm:gap-2">
        {item.stats.map((stat) => (
          <p key={stat} className="rounded-xl border border-[var(--border-color)] bg-white/48 px-2 py-1.5 text-[10px] font-semibold text-[var(--text-secondary)] dark:bg-white/[0.04] sm:px-3 sm:py-2 sm:text-xs">{stat}</p>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-sm">{item.caption}</p>
    </motion.article>
  );
}

function CircleShowcase() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.22 });

  return (
    <AnimatedSection id="circle" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-24" aria-label="Ginja Circle shared planning section">
      <div ref={sectionRef} className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-[#E3CBB5] bg-[radial-gradient(circle_at_20%_18%,rgba(237,133,34,0.16),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(135,182,106,0.13),transparent_26%),linear-gradient(135deg,#FFF9F2,#F5E8DA_54%,#FBF6EF)] shadow-[0_26px_76px_rgba(80,54,30,0.14)] dark:border-[#6B4A31] dark:bg-[radial-gradient(circle_at_20%_18%,rgba(237,133,34,0.22),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(135,182,106,0.12),transparent_26%),linear-gradient(135deg,#11100F,#2B1D15_54%,#090807)]">
          <div className="grid gap-6 p-4 sm:gap-10 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#ED8522]/35 bg-[#ED8522]/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#A26335] dark:text-[#F1BE90]">
                <Users2 className="h-3.5 w-3.5" aria-hidden="true" />
                Shared momentum
              </p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] sm:mt-5 sm:text-5xl">
                Life happens with other people. Your plans should too.
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE] sm:mt-5 sm:text-lg">
                Most plans do not fail because people do not care.
              </p>
              <div className="mt-5 space-y-2 text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE] sm:mt-6 sm:text-base">
                <p>They fail because nobody knows who is doing what.</p>
                <p className="font-semibold text-[#241B15] dark:text-[#FFF7EF]">Circle gives every shared goal a home.</p>
                <p className="font-semibold text-[#A26335] dark:text-[#F1BE90]">Assign actions. Share notes. Follow through together.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {circleCopyBlocks.map((block, index) => {
                const Icon = block.icon;

                return (
                  <motion.article
                    key={block.title}
                    className="rounded-[1.15rem] border border-[#E3CBB5] bg-white/52 p-3 shadow-[0_12px_28px_rgba(70,48,30,0.07)] backdrop-blur dark:border-white/10 dark:bg-white/[0.05] sm:rounded-[1.35rem] sm:p-4"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FFF1E8] text-[#ED8522] dark:bg-[#4A3325] dark:text-[#F1BE90] sm:h-10 sm:w-10">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-sm font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] sm:mt-4 sm:text-lg">{block.title}</h3>
                    <p className="mt-2 text-xs font-medium leading-relaxed text-[#6A5544] dark:text-[#D9C3AE] sm:text-sm">{block.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div className="border-t border-[#E3CBB5] bg-white/24 p-4 dark:border-white/10 dark:bg-black/10 sm:p-8 lg:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#A26335] dark:text-[#F1BE90] sm:mb-7 sm:text-[11px]">
              {['Discover', 'Shared Plan', 'Responsibility', 'Follow-through', 'Experience'].map((step, index) => (
                <React.Fragment key={step}>
                  {index > 0 && <ArrowRight className="h-3.5 w-3.5 text-[#C59B76]" aria-hidden="true" />}
                  <span className="rounded-full border border-[#E3CBB5] bg-white/48 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.05]">{step}</span>
                </React.Fragment>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,0.78fr)_96px_minmax(0,1.22fr)] lg:items-center lg:gap-6">
              <CircleExploreCard reduceMotion={reduceMotion} active={isInView} />
              <CircleConnector reduceMotion={reduceMotion} active={isInView} />
              <div>
                <AnimatedCirclePlanMockup reduceMotion={reduceMotion} active={isInView} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
          {circleUseCases.map((item, index) => (
            <CircleUseCaseCard key={item.title} item={item} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function AudienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatedSection className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute inset-x-4 top-0 sm:inset-x-6">
        <motion.div
          className="mx-auto h-px max-w-5xl bg-[linear-gradient(90deg,transparent,rgba(237,133,34,0.55),rgba(135,182,106,0.4),transparent)]"
          initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Who Ginja is for</p>
          <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-4xl">
            A calm planning system for real, shifting lives.
          </h2>
        </motion.div>

        <div className="mt-7 grid grid-cols-3 gap-2 sm:hidden">
          {audiences.map((item, index) => (
            <motion.article
              key={item.title}
              className="min-w-0 rounded-[1.25rem] border border-[var(--border-color)] bg-[linear-gradient(180deg,var(--surface-primary),var(--surface-soft))] p-3 shadow-[0_12px_28px_rgba(44,36,28,0.07)]"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.44, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E8] text-xl shadow-[inset_0_0_0_1px_rgba(237,133,34,0.12)] dark:bg-[#4A3325]"
                animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.25, ease: 'easeInOut' }}
              >
                {item.emoji}
              </motion.span>
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
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-[minmax(0,1fr)_164px] items-center gap-3 rounded-[2rem] border border-[#E3CBB5] bg-[linear-gradient(135deg,#FFF9F2,#F4E8DA)] p-4 shadow-[0_26px_76px_rgba(80,54,30,0.14)] dark:border-[#6B4A31] dark:bg-[linear-gradient(135deg,#37251C,#211812)] max-[374px]:grid-cols-[minmax(0,1fr)_140px] xs:grid-cols-[minmax(0,1fr)_194px] xs:gap-4 sm:grid-cols-[minmax(0,1fr)_194px] sm:p-6 lg:grid-cols-[1fr_0.8fr] lg:gap-10 lg:p-10">
          <div className="min-w-0">
            <h2 className="max-w-2xl text-balance text-2xl font-semibold leading-tight text-[#241B15] dark:text-[#FFF7EF] xs:text-3xl sm:text-4xl lg:text-5xl">
              Start with one thought. Leave with a clear next step.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6A5544] dark:text-[#D9C3AE] sm:text-base lg:mt-5 lg:text-lg">
              Ginja helps you unload, organize, adapt, and follow through without making productivity feel heavy.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center lg:mt-8">
              <Link
                href="/download"
                onClick={() => trackDownloadPageClick('premium_final_cta')}
                className="inline-flex rounded-full bg-[#ED8522] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.25)] transition-all duration-200 hover:bg-[#C94B16] sm:px-6 sm:py-3 sm:text-base"
                aria-label="Download Ginja and start free"
              >
                Download Ginja
              </Link>
              <a
                href="#product-video"
                className="inline-flex items-center gap-2 rounded-full border border-[#E3CBB5] bg-white/55 px-4 py-2.5 text-sm font-semibold text-[#7A4D2A] transition-all duration-200 hover:border-[#ED8522]/55 hover:text-[#B65C1D] dark:border-white/12 dark:bg-white/[0.06] dark:text-[#F1BE90] sm:px-5 sm:py-3 sm:text-base"
              >
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                Watch product video
              </a>
            </div>
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

        <div id="product-video" className="scroll-mt-24 pt-8 sm:pt-10">
          <div className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-4 py-6 shadow-[0_16px_46px_rgba(30,26,20,0.08)] dark:shadow-[0_18px_52px_rgba(10,8,6,0.34)] sm:px-6 sm:py-8 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A26A3F]">Product video</p>
              <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight text-[var(--text-strong)] sm:text-3xl">
                Watch Ginja turn scattered thoughts into clear next steps.
              </h3>
            </div>
            <div className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[#14110e] shadow-[0_18px_42px_rgba(20,17,14,0.18)]">
              <video className="block h-auto w-full" controls preload="metadata" playsInline>
                <source src="/video/ginja-launch-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
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
      <ChaosToClaritySection />
      <FiveAppsProblemSection />
      <ConnectedLifeSection />
      <div ref={storyRef}>
        <StickyProductStory />
      </div>
      <ArcShowcase />
      <CircleShowcase />
      <AudienceSection />
      <IntelligenceSection />
      <FounderNoteSection />
      <FinalCTASection />
    </>
  );
}
