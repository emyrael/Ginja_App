import React from 'react';
import { motion } from 'framer-motion';

/* ─── Home Screen ─── matches screenshot 1 (Home) */
export function HomeScreen() {
  return (
    <div className="px-3 pt-1 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold">Ginja</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-60">🔔</span>
          <span className="text-[11px] opacity-60">⚙️</span>
        </div>
      </div>

      {/* Greeting */}
      <h2 className="text-[15px] font-bold text-[#E2561B] leading-tight">Good morning, User! ☀️</h2>
      <p className="text-[9px] text-gray-400 mb-3">Stay Ginja&apos;d. Stay Organized.</p>

      {/* Today's Progress card */}
      <div className="bg-[#1c1c1e] rounded-xl p-3 mb-2.5 relative">
        <p className="text-[9px] text-gray-400">Today&apos;s Progress</p>
        <div className="flex items-baseline gap-1 mb-1.5">
          <span className="text-lg font-extrabold">1/3</span>
          <span className="text-[9px] text-gray-400">tasks done</span>
        </div>
        <div className="w-full h-[5px] bg-gray-700 rounded-full">
          <div className="h-full w-[38%] bg-[#E2561B] rounded-full" />
        </div>
        {/* Trophy */}
        <div className="absolute top-3 right-3 w-7 h-7 bg-[#78350f] rounded-full flex items-center justify-center">
          <span className="text-[11px]">🏆</span>
        </div>
      </div>

      {/* Brain Dump card (orange border) */}
      <div className="border border-[#E2561B]/50 rounded-xl px-3 py-2.5 mb-2.5 flex items-center gap-2">
        <span className="text-[11px] text-[#E2561B]">⚡</span>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold leading-tight">Brain Dump</p>
          <p className="text-[8px] text-gray-400 leading-tight">Get it out of your head. We&apos;ll make it actionable.</p>
        </div>
        <span className="text-[10px] text-gray-500">›</span>
      </div>

      {/* + ToDo button */}
      <button className="w-full bg-[#E2561B] text-white text-[10px] font-bold py-2 rounded-xl mb-2.5 flex items-center justify-center gap-1">
        <span>+</span> ToDo
      </button>

      {/* Import from Calendar card */}
      <div className="bg-[#1c1c1e] rounded-xl px-3 py-2.5 mb-2.5 flex items-center gap-2">
        <span className="text-[11px]">📅</span>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold leading-tight">Import from Calendar</p>
          <p className="text-[8px] text-gray-400 leading-tight">Turn this month&apos;s events into todos</p>
        </div>
        <span className="text-[10px] text-gray-500">›</span>
      </div>

      {/* Today's focus & Coming up */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold">Today&apos;s focus &gt;</span>
        <span className="text-[8px] text-[#E2561B] font-semibold">See all</span>
      </div>
      <div className="border-t border-white/[0.04] my-1" />
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold">Coming up (4) &gt;</span>
        <span className="text-[8px] text-[#E2561B] font-semibold">See all</span>
      </div>

      {/* Suggested for you */}
      <div className="bg-[#1c1c1e] rounded-xl p-2.5">
        <p className="text-[10px] font-bold mb-1.5">Suggested for you</p>
        <div className="space-y-1.5">
          <div className="flex items-start gap-2">
            <span className="text-[10px]">☕</span>
            <div>
              <p className="text-[9px] font-semibold leading-tight">Take a 5-minute break</p>
              <p className="text-[8px] text-gray-500 leading-tight">A short break can boost productivity.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[10px]">📅</span>
            <div>
              <p className="text-[9px] font-semibold leading-tight">Plan tomorrow&apos;s priorities</p>
              <p className="text-[8px] text-gray-500 leading-tight">Set your top 3 tasks for tomorrow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Brain Dump Screen ─── matches screenshot 2 */
export function BrainDumpScreen() {
  return (
    <div className="px-3 pt-1 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold">Ginja</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-60">🔔</span>
          <span className="text-[11px] opacity-60">⚙️</span>
        </div>
      </div>
      <h2 className="text-[15px] font-bold text-[#E2561B] leading-tight">Good morning, User! ☀️</h2>
      <p className="text-[9px] text-gray-400 mb-2">Stay Ginja&apos;d. Stay Organized.</p>

      {/* Progress card (dimmed behind sheet) */}
      <div className="bg-[#1c1c1e] rounded-xl p-3 mb-2 opacity-40 relative">
        <p className="text-[9px] text-gray-400">Today&apos;s Progress</p>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-extrabold">1/3</span>
          <span className="text-[9px] text-gray-400">tasks done</span>
        </div>
      </div>

      {/* Brain Dump bottom-sheet */}
      <motion.div
        className="bg-[#1c1c1e] rounded-t-2xl p-3 -mx-3 mt-1"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Handle bar */}
        <div className="flex justify-center mb-2">
          <div className="w-8 h-1 bg-gray-600 rounded-full" />
        </div>
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="text-[12px] font-bold">Brain Dump</h3>
            <p className="text-[8px] text-gray-400">Write or speak everything on your mind.</p>
          </div>
          {/* Mic button */}
          <div className="w-7 h-7 rounded-full border-2 border-[#22c55e] flex items-center justify-center flex-shrink-0">
            <span className="text-[11px]">🎙️</span>
          </div>
        </div>

        {/* Textarea */}
        <div className="bg-[#2a2a2d] rounded-lg p-2 mt-2 min-h-[60px]">
          <p className="text-[8px] text-gray-500 leading-relaxed">e.g. I need to finish the report, call the dentist, buy groceries...</p>
        </div>

        {/* Break It Down button */}
        <button className="w-full bg-[#3a3a3d] text-white text-[10px] font-bold py-2 rounded-xl mt-2.5 flex items-center justify-center gap-1">
          <span className="text-[#E2561B]">⚡</span> Break It Down
        </button>
      </motion.div>
    </div>
  );
}

/* ─── Wellness Screen ─── matches screenshot 3 */
export function WellnessScreen() {
  const moods = [
    { emoji: '😊', label: 'Great' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '🥱', label: 'Tired' },
    { emoji: '😰', label: 'Stressed' },
    { emoji: '😔', label: 'Low' },
  ];

  const resets = [
    { emoji: '🧘', title: 'Breathe', sub: '2-min calm breathing' },
    { emoji: '🚶', title: 'Walk', sub: '5 minutes outside' },
    { emoji: '🤸', title: 'Stretch', sub: 'Quick body reset' },
    { emoji: '💧', title: 'Hydrate', sub: 'Drink some water' },
  ];

  return (
    <div className="px-3 pt-1 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold">Ginja</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-60">🔔</span>
          <span className="text-[11px] opacity-60">⚙️</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="text-[13px]">❤️</span>
        <h2 className="text-[15px] font-bold">Wellness</h2>
      </div>
      <p className="text-[8px] text-gray-400 mb-3">A moment to check in with yourself.</p>

      {/* How are you feeling */}
      <div className="bg-[#1c1c1e] rounded-xl p-2.5 mb-2.5">
        <p className="text-[10px] font-bold mb-0.5">How are you feeling?</p>
        <p className="text-[7px] text-gray-500 mb-2">This helps us adjust suggestions for you. No judgment.</p>
        <div className="grid grid-cols-3 gap-1.5">
          {moods.map((m) => (
            <div key={m.label} className="border border-white/10 rounded-lg py-2 flex flex-col items-center gap-0.5">
              <span className="text-[14px]">{m.emoji}</span>
              <span className="text-[7px] text-gray-300">{m.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Plan your week */}
      <div className="bg-[#1c1c1e] rounded-xl px-3 py-2.5 mb-2.5 flex items-center gap-2">
        <span className="text-[12px]">📅</span>
        <div className="flex-1">
          <p className="text-[10px] font-bold leading-tight">Plan your week</p>
          <p className="text-[7px] text-gray-500 leading-tight">Clarify priorities, set intentions</p>
        </div>
        <span className="text-[10px] text-gray-500">›</span>
      </div>

      {/* Quick resets */}
      <p className="text-[10px] font-bold mb-0.5">🏷️ Quick resets</p>
      <p className="text-[7px] text-gray-500 mb-2">Small resets that can shift your energy.</p>
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {resets.map((r) => (
          <div key={r.title} className="bg-[#1c1c1e] border border-white/5 rounded-lg px-2 py-2 flex items-center gap-1.5">
            <span className="text-[11px]">{r.emoji}</span>
            <div>
              <p className="text-[9px] font-bold leading-tight">{r.title}</p>
              <p className="text-[7px] text-gray-500 leading-tight">{r.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <span className="text-[8px] text-gray-500">⚙️ Tune suggestions</span>
      </div>
    </div>
  );
}

/* ─── Progress Screen ─── matches screenshot 4 */
export function ProgressScreen() {
  const days = [
    { d: 'M', n: 23, color: 'bg-[#22c55e]' },
    { d: 'T', n: 24, color: 'bg-[#f97316]' },
    { d: 'W', n: 25, color: 'bg-gray-600' },
    { d: 'T', n: 26, color: 'bg-gray-600' },
    { d: 'F', n: 27, color: 'bg-gray-600' },
    { d: 'S', n: 28, color: 'bg-gray-600' },
    { d: 'S', n: 1, color: 'bg-gray-600' },
  ];

  const badges = [
    { icon: '⭐', title: 'First Week', sub: 'Active 7 consecutive days', earned: false },
    { icon: '⚡', title: 'Early Bird', sub: 'Open the app before 8:00 AM', earned: true },
    { icon: '🏆', title: 'Champion', sub: 'Active 30 days total', earned: false },
    { icon: '👥', title: 'Social Star', sub: 'Complete 10 Shared Plans', earned: false },
  ];

  return (
    <div className="px-3 pt-1 text-white">
      <h2 className="text-[16px] font-bold mb-0">Progress</h2>
      <p className="text-[8px] text-gray-400 mb-2">Consistency over perfection</p>

      {/* Week toggle */}
      <div className="inline-flex items-center gap-1 bg-[#1c1c1e] rounded-lg px-2 py-1 mb-2">
        <span className="text-[9px] font-medium">Week</span>
        <span className="text-[9px] text-gray-500">▾</span>
      </div>

      {/* This Week calendar */}
      <div className="bg-[#1c1c1e] rounded-xl p-2.5 mb-3">
        <p className="text-[10px] font-bold mb-2">This Week</p>
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[8px] text-gray-400">{d.d}</span>
              <span className="text-[8px] text-gray-300">{d.n}</span>
              <div className={`w-4 h-4 rounded-full ${d.color}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Active Streak */}
      <h3 className="text-[11px] font-bold mb-1.5">Active Streak</h3>
      <div className="bg-[#1c1c1e] rounded-xl p-2.5 mb-1.5">
        <p className="text-[11px] font-bold">3-day streak</p>
        <p className="text-[8px] text-gray-400">You&apos;ve been active 3 days in a row.</p>
      </div>
      <p className="text-[8px] text-gray-400 mb-2">Active 2 days this week</p>

      {/* Achievements */}
      <h3 className="text-[11px] font-bold mb-1.5">Achievements</h3>
      <div className="grid grid-cols-2 gap-1.5">
        {badges.map((b, i) => (
          <div key={i} className={`${b.earned ? 'bg-[#1a2e1a]' : 'bg-[#1c1c1e]'} rounded-xl p-2 text-center`}>
            <div className="w-6 h-6 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-1">
              <span className="text-[11px]">{b.icon}</span>
            </div>
            <p className="text-[9px] font-bold leading-tight">{b.title}</p>
            <p className="text-[7px] text-gray-500 leading-tight mt-0.5">{b.sub}</p>
            {b.earned && (
              <span className="inline-flex items-center gap-0.5 text-[7px] text-[#22c55e] font-semibold mt-1">✅ Earned</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Todo Completed Screen ─── matches screenshot 5 */
export function TodoCompletedScreen() {
  const tasks = [
    { text: 'Read a book', cat: 'Personal', catColor: 'bg-[#22c55e]', date: '2026-02-22', time: '23:51' },
    { text: 'Let\u2019s chat now', cat: 'Social', catColor: 'bg-[#a855f7]', date: '2026-02-22', time: '18:31' },
    { text: 'Complete reporting', cat: 'Work', catColor: 'bg-[#E2561B]', date: '2026-02-23', time: '15:00', note: 'Due at 3pm today' },
    { text: 'Set alarm for 6am', cat: 'Personal', catColor: 'bg-[#22c55e]', date: '2026-02-23', time: '06:00', note: 'To ensure I wake up on time.' },
  ];

  return (
    <div className="px-3 pt-1 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold">Ginja</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-60">🔔</span>
          <span className="text-[11px] opacity-60">⚙️</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[16px] font-bold">Todo</h2>
        <div className="w-6 h-6 bg-[#E2561B] rounded-full flex items-center justify-center">
          <span className="text-white text-[12px] font-bold">+</span>
        </div>
      </div>

      {/* Search */}
      <div className="bg-[#1c1c1e] rounded-lg px-2.5 py-1.5 mb-2 flex items-center gap-1.5">
        <span className="text-[10px] text-gray-500">🔍</span>
        <span className="text-[9px] text-gray-500">Search Todo</span>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 mb-2 overflow-x-auto">
        <span className="flex-shrink-0 text-[8px] bg-[#1c1c1e] rounded-full px-2 py-0.5 text-gray-300 flex items-center gap-0.5">⚠️ Overdue <span className="bg-[#E2561B] text-white text-[7px] rounded-full px-1">7</span></span>
        <span className="flex-shrink-0 text-[8px] bg-[#1c1c1e] rounded-full px-2 py-0.5 text-gray-300 flex items-center gap-0.5">👥 Shared <span className="bg-[#E2561B] text-white text-[7px] rounded-full px-1">3</span></span>
        <span className="flex-shrink-0 text-[8px] bg-[#E2561B] rounded-full px-2 py-0.5 text-white flex items-center gap-0.5">✅ Completed <span className="bg-white/20 text-white text-[7px] rounded-full px-1">7</span></span>
      </div>

      <h3 className="text-[11px] font-bold mb-0.5">Completed</h3>
      <p className="text-[8px] text-gray-500 mb-2">This week&apos;s wins</p>

      {/* Task list */}
      <div className="space-y-1.5">
        {tasks.map((t, i) => (
          <div key={i} className="bg-[#1c1c1e] rounded-xl p-2 flex items-start gap-2">
            <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-[8px]">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold line-through text-gray-400 leading-tight">{t.text}</p>
              <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                <span className={`${t.catColor} text-[6px] text-white px-1 py-[1px] rounded-full font-medium`}>{t.cat}</span>
                <span className="text-[7px] text-gray-500">📅 {t.date}</span>
                <span className="text-[7px] text-gray-500">⏰ {t.time}</span>
              </div>
              {t.note && <p className="text-[7px] text-[#E2561B] italic mt-0.5">{t.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Todo Shared Screen ─── matches screenshot 6 */
export function TodoSharedScreen() {
  const contacts = [
    { initial: 'H', name: 'Hypa', status: 'Offline' },
    { initial: 'N', name: 'Nuel', status: 'Offline' },
    { initial: 'S', name: 'Sharoncsimon', status: 'Offline' },
  ];

  return (
    <div className="px-3 pt-1 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold">Ginja</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-60">🔔</span>
          <span className="text-[11px] opacity-60">⚙️</span>
        </div>
      </div>

      {/* Circle title + action buttons */}
      <div className="flex justify-between items-center mb-0.5">
        <h2 className="text-[16px] font-bold">Circle</h2>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </div>
          <div className="w-6 h-6 bg-[#4E8C06] rounded-full flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          </div>
        </div>
      </div>
      <p className="text-[8px] text-gray-500 mb-2">Stay accountable together</p>

      {/* Invite friends card */}
      <div className="bg-[#1c1c1e] border border-[#E2561B]/30 rounded-xl px-2.5 py-2 mb-2 flex items-center gap-2">
        <div className="w-5 h-5 flex items-center justify-center text-[#E2561B]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[9px] font-bold leading-tight">Invite friends</p>
          <p className="text-[7px] text-gray-400 leading-tight">Beta invite — not on App Store yet. Send a link to anyone.</p>
        </div>
        <span className="text-gray-500 text-[10px]">›</span>
      </div>

      {/* Shared Plans */}
      <div className="bg-[#1c1c1e] rounded-xl px-2.5 py-1.5 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4E8C06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          <span className="text-[9px] font-bold">Shared Plans</span>
          <span className="text-[8px] text-gray-500">(4)</span>
        </div>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>

      {/* Your Circle */}
      <h3 className="text-[11px] font-bold mb-1.5 text-[#E2561B]">Your Circle</h3>

      {/* Search */}
      <div className="bg-[#1c1c1e] rounded-lg px-2.5 py-1.5 mb-2 flex items-center gap-1.5">
        <span className="text-[10px] text-gray-500">🔍</span>
        <span className="text-[9px] text-gray-500">Search your circle</span>
      </div>

      {/* Contact list */}
      <div className="space-y-1.5">
        {contacts.map((c, i) => (
          <div key={i} className="bg-[#1c1c1e] rounded-xl px-2.5 py-2 flex items-center gap-2">
            <div className="relative flex-shrink-0">
              <div className="w-7 h-7 bg-[#c4832d] rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">{c.initial}</span>
              </div>
              <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-gray-500 rounded-full border border-[#1c1c1e]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-bold leading-tight">{c.name}</p>
              <p className="text-[7px] text-gray-500">{c.status}</p>
            </div>
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4E8C06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              <span className="text-[8px] text-[#4E8C06] font-medium">View ›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Todo Upcoming Screen ─── matches screenshot 7 */
export function TodoUpcomingScreen() {
  const tasks = [
    { text: 'Link with Hypa', cat: 'Social', catColor: 'bg-[#a855f7]', date: '2026-02-25', time: '11:00', note: 'Meeting scheduled at 11am.' },
    { text: 'Interview prep', cat: 'Work', catColor: 'bg-[#E2561B]', date: '2026-03-02', note: 'for upcoming job' },
  ];

  return (
    <div className="px-3 pt-1 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-bold">Ginja</span>
        <div className="flex items-center gap-2">
          <span className="text-[11px] opacity-60">🔔</span>
          <span className="text-[11px] opacity-60">⚙️</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[16px] font-bold">Todo</h2>
        <div className="w-6 h-6 bg-[#E2561B] rounded-full flex items-center justify-center">
          <span className="text-white text-[12px] font-bold">+</span>
        </div>
      </div>

      {/* Search */}
      <div className="bg-[#1c1c1e] rounded-lg px-2.5 py-1.5 mb-2 flex items-center gap-1.5">
        <span className="text-[10px] text-gray-500">🔍</span>
        <span className="text-[9px] text-gray-500">Search Todo</span>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 mb-2 overflow-x-auto">
        <span className="flex-shrink-0 text-[8px] bg-[#1c1c1e] rounded-full px-2 py-0.5 text-gray-300">📅 Today <span className="bg-gray-600 text-white text-[7px] rounded-full px-1">1</span></span>
        <span className="flex-shrink-0 text-[8px] bg-[#E2561B] rounded-full px-2 py-0.5 text-white flex items-center gap-0.5">📅 Upcoming <span className="bg-white/20 text-white text-[7px] rounded-full px-1">2</span></span>
        <span className="flex-shrink-0 text-[8px] bg-[#1c1c1e] rounded-full px-2 py-0.5 text-gray-300">⚠️ Overdue <span className="bg-[#E2561B] text-white text-[7px] rounded-full px-1">7</span></span>
      </div>

      <h3 className="text-[11px] font-bold mb-0.5">Upcoming</h3>
      <p className="text-[8px] text-gray-500 mb-2">Plan ahead for tomorrow and beyond</p>

      {/* Task list */}
      <div className="space-y-1.5">
        {tasks.map((t, i) => (
          <div key={i} className="bg-[#1c1c1e] rounded-xl p-2 flex items-start gap-2">
            <div className="w-4 h-4 rounded-full border border-gray-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-[9px] font-semibold leading-tight">{t.text}</p>
              <div className="flex items-center gap-1 mt-0.5 flex-wrap">
                <span className={`${t.catColor} text-[6px] text-white px-1 py-[1px] rounded-full font-medium`}>{t.cat}</span>
                <span className="text-[7px] text-gray-500">📅 {t.date}</span>
                {t.time && <span className="text-[7px] text-gray-500">⏰ {t.time}</span>}
                <span className="text-[7px] text-gray-500">📄 Note</span>
              </div>
              {t.note && <p className="text-[7px] text-[#E2561B] italic mt-0.5">{t.note}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
