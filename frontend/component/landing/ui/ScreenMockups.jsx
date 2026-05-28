import React from 'react';

const shell = 'min-h-[500px] bg-[#EEEDE9] px-3 pb-4 pt-3 text-[#1F1D19] dark:bg-[#10100F] dark:text-[#F6F4F1]';
const card = 'rounded-[18px] border border-[#E2DDD3] bg-white/95 p-3 shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#1E1E1D]';
const tiny = 'text-[8px] leading-tight text-[#716A61] dark:text-[#A9A29D]';

function TopBar() {
  return (
    <div className="mb-3 flex items-center justify-end">
      <div className="flex items-center gap-2 text-[12px] text-[#787169] dark:text-[#A6A6AA]">
        <span>🔔</span>
        <span>⚙️</span>
      </div>
    </div>
  );
}

function Avatar({ size = 'md' }) {
  const className = size === 'sm' ? 'h-8 w-8 text-[10px]' : 'h-12 w-12 text-[15px]';
  return (
    <div className={`${className} flex shrink-0 items-center justify-center rounded-full border-2 border-[#ED8522] bg-[#33251D] font-bold text-[#F8EFE7]`}>
      AC
    </div>
  );
}

function Toggle({ on = true, size = 'sm' }) {
  const sizeClass = size === 'md' ? 'h-7 w-14' : 'h-5 w-10';
  const knobClass = size === 'md' ? 'h-6 w-6' : 'h-4 w-4';

  return (
    <div className={`relative ${sizeClass} rounded-full ${on ? 'bg-[#F0C9AA]' : 'bg-[#D8D8D8] dark:bg-[#3A3F46]'}`}>
      <span className={`absolute top-0.5 ${knobClass} rounded-full ${on ? 'right-0.5 bg-[#ED8522]' : 'left-0.5 bg-white dark:bg-[#D2D3D5]'}`} />
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className={`${shell} dark:bg-[#10100F]`}>
      <TopBar />

      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-[9px] text-[#6C675F] dark:text-[#A9A29D]">Thursday, 28. May</p>
          <h2 className="mt-1 text-[23px] font-bold leading-tight">Good afternoon,<br />Nay</h2>
          <p className="mt-2 text-[11px] text-[#6C675F] dark:text-[#A9A29D]">Austin · ☀ 19°C</p>
        </div>
        <div className="mt-5 flex flex-col items-center gap-1">
          <div className="relative h-12 w-12 rounded-full border-[5px] border-[#DDD8CF] dark:border-[#5C5958]">
            <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-[#ED8522]" />
          </div>
          <p className="text-[9px] text-[#716A61] dark:text-[#A9A29D]">0/4 done</p>
        </div>
      </div>

      <div className={`${card} mb-2.5 border-[#ECD4BE] dark:border-white/10`}>
        <div className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5A371F] text-[17px] text-[#ED8522]">♢</div>
          <div className="min-w-0 flex-1">
            <p className="text-[15px] font-bold">Brain Dump</p>
            <p className="text-[11px] text-[#706A60] dark:text-[#A9A29D]">What&apos;s on your mind right now?</p>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED8522] text-[18px] font-semibold text-white">→</button>
        </div>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2.5">
        <div className={card}>
          <p className="text-[17px] text-[#ED8522]">+</p>
          <p className="text-[13px] font-bold">Quick Add</p>
          <p className={tiny}>New to-do or plan</p>
        </div>
        <div className={card}>
          <p className="text-[17px] text-[#ED8522]">▦</p>
          <p className="text-[13px] font-bold">Calendar</p>
          <p className={tiny}>Sync your events</p>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <p className="text-[15px] font-bold">Today&apos;s focus <span className="text-[#8D8780]">(4)</span> ›</p>
        <span className="text-[12px] font-semibold text-[#ED8522]">See all</span>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[15px] font-bold">Coming up ›</p>
        <span className="text-[12px] font-semibold text-[#ED8522]">Open list</span>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-bold">Arc</p>
          <span className="text-[12px] font-semibold text-[#ED8522]">See all</span>
        </div>
        <div className={`${card} mt-1.5 border-[#E9D3BC] dark:border-white/10`}>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[13px] font-semibold">✦ My Fitness Journey</p>
            <span className="rounded-full bg-[#ED8522]/15 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#ED8522]">Coming soon</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#E9E3DA] dark:bg-[#2B2A29]">
            <div className="h-full w-1/2 rounded-full bg-[#ED8522]" />
          </div>
          <p className="mt-2 text-[10px] text-[#7D766D] dark:text-[#A9A29D]">Arc premium journeys are almost here</p>
        </div>
      </div>

      <div className={card}>
        <p className="text-[14px] font-bold">How are you feeling this afternoon?</p>
        <div className="mt-3 grid grid-cols-6 gap-1">
          {['😊', '🙂', '😐', '😴', '😰', '😔'].map((mood) => (
            <div key={mood} className="flex h-10 items-center justify-center rounded-2xl border border-[#E7E1D8] bg-[#FBFAF8] text-[15px] dark:border-white/10 dark:bg-[#151514]">
              {mood}
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-[#E7E1D8] pt-2 dark:border-white/10">
          <p className="text-[13px] font-bold">Suggested for you (3) ›</p>
        </div>
      </div>
    </div>
  );
}

export function BrainDumpScreen() {
  const keyboardRows = ['QWERTYUIOP'.split(''), 'ASDFGHJKL'.split(''), 'ZXCVBNM'.split('')];

  return (
    <div className="relative min-h-[500px] overflow-hidden bg-[#EEEDE9] text-[#1F1D19] dark:bg-[#11100F] dark:text-[#F6F4F1]">
      <div className="px-3 pb-2 pt-3 opacity-40 dark:opacity-30">
        <TopBar />
        <p className="text-[9px] text-[#6C675F] dark:text-[#A9A29D]">Thursday, 28. May</p>
        <h2 className="mt-1 text-[22px] font-bold leading-tight">Good afternoon,<br />Nay</h2>
        <p className="mt-2 text-[10px] text-[#6C675F] dark:text-[#A9A29D]">Austin · ☀ 19°C</p>
      </div>

      <div className="absolute inset-x-0 bottom-[142px] rounded-t-[28px] bg-[#FBF8F3] px-5 pb-5 pt-4 shadow-[0_-16px_40px_rgba(40,30,20,0.14)] dark:bg-[#131312] dark:shadow-[0_-16px_40px_rgba(0,0,0,0.35)]">
        <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-[#D9D1C6] dark:bg-[#4C4A48]" />
        <button className="absolute right-6 top-9 text-[24px] text-[#7C746A] dark:text-[#B8B3AF]">×</button>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[18px] font-bold">Brain Dump</p>
            <p className="mt-2 max-w-[220px] text-[12px] leading-relaxed text-[#706A60] dark:text-[#A9A29D]">
              Tell Ginja what&apos;s on your mind. It will help you figure out the next step.
            </p>
          </div>
          <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#41B982] text-[#41B982]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M19 11a7 7 0 01-14 0M12 18v4M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="mt-4 min-h-[88px] rounded-[14px] border border-[#E1D8CD] bg-white px-4 py-3 text-[12px] leading-relaxed text-[#7C746A] dark:border-white/15 dark:bg-[#151514] dark:text-[#A9A29D]">
          e.g. I need to finish my report, plan my trip, and start working out again...
        </div>
        <p className="mt-3 text-[11px] text-[#7C746A] dark:text-[#A9A29D]">0/100 words</p>
        <button className="mt-2 flex w-full items-center justify-center rounded-[14px] bg-[#D9D1C6] py-3 text-[15px] font-semibold text-[#665D54] dark:bg-[#4A4A49] dark:text-white">
          Figure It Out
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[142px] bg-[#D2D2D2] px-2 pt-2 dark:bg-[#2E2E2E]">
        <div className="mb-1.5 grid grid-cols-3 gap-2 text-center text-[12px] text-[#36322D] dark:text-[#F1F1EF]">
          <span>I</span>
          <span>The</span>
          <span>I&apos;m</span>
        </div>
        <div className="space-y-1">
          {keyboardRows.map((row, index) => (
            <div key={row.join('')} className={`grid gap-1 ${index === 1 ? 'grid-cols-9 px-4' : index === 2 ? 'grid-cols-7 px-8' : 'grid-cols-10'}`}>
              {row.map((key) => (
                <div key={key} className="flex h-8 items-center justify-center rounded-md bg-[#F7F7F7] text-[13px] text-[#2B2925] shadow-[0_1px_0_rgba(0,0,0,0.12)] dark:bg-[#737373] dark:text-white dark:shadow-none">
                  {key}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TodoViewScreen() {
  const days = [
    { d: 'Mon', n: 25, state: 'done' },
    { d: 'Tue', n: 26, state: 'done' },
    { d: 'Wed', n: 27, state: 'overdue' },
    { d: 'Thu', n: 28, state: 'selected' },
    { d: 'Fri', n: 29, state: 'upcoming' },
    { d: 'Sat', n: 30, state: 'upcoming' },
    { d: 'Sun', n: 31, state: 'upcoming' },
  ];

  const stateDot = {
    done: 'bg-[#41B982]',
    overdue: 'bg-[#E05A5A]',
    upcoming: 'bg-[#ED8522]',
    selected: 'border-2 border-[#ED8522] text-[#ED8522]',
    idle: 'text-[#8E877E] dark:text-[#A9ACB2]',
  };

  const todos = [
    { title: 'Morning strength session', time: '09:00', tag: 'Health', icon: '↻' },
    { title: 'Review launch checklist', time: '13:30', tag: 'Work', icon: '↻' },
    { title: 'Pick up groceries', time: '20:00', tag: 'Personal', icon: '' },
  ];

  return (
    <div className={shell}>
      <TopBar />

      <div className="mb-3 grid grid-cols-2 overflow-hidden rounded-[16px] border border-[#E2DCD1] bg-[#F6F3ED] p-1 text-[12px] font-semibold dark:border-white/10 dark:bg-[#1E1E1D]">
        <button className="rounded-[13px] border border-[#ED8522] py-2 text-[#D37B32]">▦ Calendar</button>
        <button className="py-2 text-[#7E776E] dark:text-[#A9A29D]">☷ List</button>
      </div>

      <div className={`${card} mb-3 border-[#ECD4BE] p-4 dark:border-[#5A371F]`}>
        <div className="mx-auto mb-4 grid w-[80%] grid-cols-2 overflow-hidden rounded-2xl border border-[#E4DED4] bg-[#F7F4EE] p-1 text-[11px] font-semibold dark:border-white/10 dark:bg-[#242322]">
          <span className="rounded-xl border border-[#ED8522] px-2 py-2 text-center text-[#D37B32]">▦ Week</span>
          <span>Month</span>
        </div>
        <p className="mb-4 text-center text-[15px] font-bold">May 2026</p>

        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div key={`${day.d}-${day.n}`} className="flex flex-col items-center gap-0.5">
              <span className="text-[8px] font-semibold text-[#7A746B] dark:text-[#A9A29D]">{day.d}</span>
              {day.state === 'selected' ? (
                <div className="mt-2 flex h-12 w-10 items-center justify-center rounded-2xl border-2 border-[#ED8522] text-[14px] font-semibold text-[#ED8522]">
                  {day.n}
                </div>
              ) : (
                <span className="mt-4 text-[13px] font-semibold">{day.n}</span>
              )}
              {day.state !== 'selected' && (
                <span className={`h-1.5 w-1.5 rounded-full ${stateDot[day.state] || 'bg-[#DDD6CB]'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between rounded-full border border-[#E4DED4] px-2 py-1 text-[9px] text-[#6C675F] dark:border-white/10 dark:text-[#A9A29D]">
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#41B982]" />Done</span>
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#ED8522]" />Upcoming</span>
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#E05A5A]" />Overdue</span>
        </div>
      </div>

      <div className={`${card} mb-2.5`}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[18px] font-semibold">2026-05-28</p>
            <p className="text-[10px] text-[#A9A29D]">4 items</p>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold text-[#ED8522]">
            <span className="rounded-full border border-[#ED8522] px-3 py-1.5">Brain Dump</span>
            <span className="rounded-xl border border-[#ED8522] px-2 py-1.5">+</span>
          </div>
        </div>

        <div className="space-y-1.5">
          {todos.map((todo) => (
            <div key={todo.title} className="rounded-[14px] border-l-4 border-[#ED8522] bg-[#F8F6F2] px-3 py-2.5 dark:bg-[#292827]">
              <p className="text-[12px] font-semibold">{todo.icon && <span className="mr-1 text-[#A7C8E8]">{todo.icon}</span>}{todo.title}</p>
              <p className="mt-1 text-[10px] text-[#A9A29D]">{todo.time} <span className="ml-1 rounded-full bg-[#183C2A] px-2 py-0.5 text-[8px] font-semibold text-[#41B982]">{todo.tag}</span></p>
            </div>
          ))}
        </div>
      </div>

      <div className={`${card}`}>
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold">List view for detail</p>
          <span className="text-[9px] text-[#D67B30]">Open ›</span>
        </div>
        <p className={tiny}>Sort by due date, status, or category.</p>
      </div>
    </div>
  );
}

export function YouScreen() {
  const moods = ['😊 Great', '🙂 Good', '😐 Okay', '🥱 Tired', '😰 Stressed', '😔 Low'];

  return (
    <div className={shell}>
      <div className={`${card} mb-3 border-[#E4C29E] p-4 dark:border-[#5A371F]`}>
        <div className="flex items-center gap-4">
          <Avatar />
          <div className="min-w-0">
            <p className="text-[18px] font-bold">Alex Carter</p>
            <p className="mt-1 text-[10px] text-[#706A60] dark:text-[#A9A29D]">✉ alex@ginja.app</p>
            <p className="mt-1 text-[10px] text-[#706A60] dark:text-[#A9A29D]">☎ +1 415 555 0192</p>
          </div>
        </div>
        <p className="mt-3 text-[11px] font-semibold text-[#ED8522]">Edit profile</p>
      </div>

      <div className={`${card} mb-3`}>
        <div className="grid grid-cols-3 divide-x divide-[#E2DDD3] text-center dark:divide-white/10">
          <div>
            <p className="text-[18px] font-bold">3</p>
            <p className={tiny}>Active Arcs</p>
          </div>
          <div>
            <p className="text-[18px] font-bold">125</p>
            <p className={tiny}>Stride</p>
          </div>
          <div>
            <p className="text-[18px] font-bold">21</p>
            <p className={tiny}>Achievements</p>
          </div>
        </div>
      </div>

      <div className={`${card} mb-2.5`}>
        <p className="text-[15px] font-semibold">How are you feeling?</p>
        <p className="mb-3 text-[10px] text-[#706A60] dark:text-[#A9A29D]">Ginja adjusts your nudges based on this.</p>
        <div className="grid grid-cols-3 gap-1.5">
          {moods.map((mood) => (
            <div key={mood} className="rounded-xl border border-[#E7E1D8] bg-[#FBFAF8] px-1 py-2 text-center text-[9px] dark:border-white/10 dark:bg-[#151514]">
              {mood}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-2 mt-8 flex items-center justify-between">
        <p className="text-[16px] font-bold">Your Focus This Week</p>
        <span className="text-[11px] font-semibold text-[#ED8522]">Edit</span>
      </div>
      <div className={`${card}`}>
        <div className="space-y-3 text-[12px]">
          <p><span className="mr-2 text-[#ED8522]">•</span>Build Better Routines</p>
          <div className="h-px bg-[#E2DDD3] dark:bg-white/10" />
          <p><span className="mr-2 text-[#ED8522]">•</span>AI Learning Habit</p>
        </div>
      </div>
    </div>
  );
}

export function WellnessScreen() {
  return <YouScreen />;
}

export function ArcEntryScreen() {
  const focuses = ['Fitness', 'Wellness', 'Study', 'Career', 'Creativity', 'Reset Routine'];

  return (
    <div className="min-h-[500px] bg-[radial-gradient(circle_at_50%_38%,rgba(237,133,34,0.14),transparent_34%),#F8F1E8] px-4 pb-4 pt-8 text-[#241B15] dark:bg-[radial-gradient(circle_at_50%_38%,rgba(237,133,34,0.22),transparent_34%),#10100F] dark:text-[#F6F4F1]">
      <h2 className="mt-8 text-[27px] font-bold leading-tight">What do you want to achieve next?</h2>
      <p className="mt-4 text-[13px] leading-relaxed text-[#77675A] dark:text-[#B0AAA5]">Plan with Ginja. Stay consistent. Make it real.</p>
      <div className="mt-8 grid grid-cols-2 gap-3">
        {focuses.map((focus) => (
          <div key={focus} className="rounded-2xl border border-[#D9C9B9] bg-white/70 px-3 py-4 shadow-[0_8px_22px_rgba(80,54,30,0.08)] dark:border-white/30 dark:bg-white/[0.07] dark:shadow-none">
            <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl border border-[#D9C9B9] bg-white/65 text-[15px] dark:border-white/10 dark:bg-white/10">
              {focus === 'Fitness' ? '▥' : focus === 'Wellness' ? '◜' : focus === 'Study' ? '□' : focus === 'Career' ? '▭' : focus === 'Creativity' ? '○' : '↻'}
            </span>
            <p className="text-[13px] font-semibold">{focus}</p>
          </div>
        ))}
      </div>
      <button className="mt-20 w-full rounded-2xl bg-[#ED8522] py-4 text-[17px] font-bold text-white">Start an Arc →</button>
      <button className="mx-auto mt-5 block rounded-2xl border border-[#D9C9B9] px-8 py-3 text-[13px] font-semibold text-[#77675A] dark:border-white/20 dark:text-[#A9A29D]">Import existing plan</button>
    </div>
  );
}

export function ArcGoalHabitScreen() {
  return (
    <div className="min-h-[500px] bg-[#F8F1E8] px-4 pb-4 pt-5 text-[#241B15] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <div className="mb-8 flex items-center gap-3">
        <span className="text-[22px]">‹</span>
        <div className="h-1.5 flex-1 rounded-full bg-[#ED8522]" />
        <div className="h-1.5 flex-1 rounded-full bg-[#ED8522]" />
        <div className="h-1.5 flex-1 rounded-full bg-[#D9C9B9] dark:bg-[#333230]" />
        <div className="h-1.5 flex-1 rounded-full bg-[#D9C9B9] dark:bg-[#333230]" />
      </div>
      <p className="text-[10px] font-bold tracking-[0.3em] text-[#ED8522]">STEP 2 OF 4</p>
      <h2 className="mt-4 text-[23px] font-bold leading-tight">What do you aim to achieve?</h2>
      <p className="mt-4 text-[13px] leading-relaxed text-[#77675A] dark:text-[#A9A29D]">Every Arc is a different kind of journey. Choose the one that matches how you want to grow.</p>

      <div className="mt-8 space-y-5">
        <div className="overflow-hidden rounded-[22px] border border-[#E3CBB5] bg-white/80 shadow-[0_12px_28px_rgba(80,54,30,0.09)] dark:border-white/15 dark:bg-[#1E1E1D] dark:shadow-none">
          <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.26),rgba(237,133,34,0.18))] p-6 dark:bg-[linear-gradient(180deg,rgba(99,61,31,0.28),rgba(237,133,34,0.28))]">
            <p className="text-[17px] font-bold">Reach something meaningful.</p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#77675A] dark:text-[#A9A29D]">Outcome-focused. Time-bound. Milestone-driven.</p>
            <span className="mt-5 inline-flex rounded-full bg-[#ED8522]/12 px-4 py-2 text-[9px] font-bold tracking-[0.22em] text-[#ED8522] dark:bg-black/20">• GOAL ARC</span>
          </div>
          <p className="px-6 py-4 text-[13px] text-[#ED8522]">Define your timeline</p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[#D3E0C9] bg-white/80 shadow-[0_12px_28px_rgba(80,54,30,0.09)] dark:border-white/15 dark:bg-[#1E1E1D] dark:shadow-none">
          <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.26),rgba(65,185,130,0.16))] p-6 dark:bg-[linear-gradient(180deg,rgba(21,59,43,0.2),rgba(65,185,130,0.24))]">
            <p className="text-[17px] font-bold">Build something that lasts.</p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#77675A] dark:text-[#A9A29D]">Rhythm-focused. Identity-driven. Sustainable.</p>
            <span className="mt-5 inline-flex rounded-full bg-[#41B982]/12 px-4 py-2 text-[9px] font-bold tracking-[0.22em] text-[#2F966A] dark:bg-black/20 dark:text-[#41B982]">• HABIT ARC</span>
          </div>
          <p className="px-6 py-4 text-[13px] text-[#2F966A] dark:text-[#41B982]">Shape your rhythm over time</p>
        </div>
      </div>
    </div>
  );
}

export function ArcOverviewScreen() {
  const arcs = [
    { title: 'My Fitness Arc', status: 'IN PROGRESS', meta: 'Started 22. May · Duration: 2 weeks', pct: '50%', tone: 'orange' },
    { title: 'Build Your AI Learning Habit', status: 'BUILDING', meta: 'Started 26. May · Daily rhythm', pct: '1 DAY', tone: 'green' },
  ];

  return (
    <div className="min-h-[500px] bg-[#F8F1E8] px-4 pb-4 pt-3 text-[#241B15] dark:bg-[#10100F] dark:text-[#F6F4F1]">
      <TopBar />
      <div className="mb-5 grid grid-cols-2 rounded-2xl border border-[#D9C9B9] bg-white/70 p-1 text-center text-[13px] font-bold dark:border-white/10 dark:bg-[#292827]">
        <span className="rounded-xl border border-[#ED8522] py-2 text-[#ED8522]">Arc</span>
        <span className="py-2 text-[#77675A] dark:text-[#A9A29D]">Explore</span>
      </div>
      <h2 className="text-[22px] font-bold">Your Arcs</h2>
      <p className="mt-4 text-[11px] font-bold tracking-[0.22em] text-[#77675A] dark:text-[#A9A29D]">ACTIVE ARCS</p>
      <div className="mt-4 space-y-5">
        {arcs.map((arc) => (
          <div key={arc.title} className={`overflow-hidden rounded-[22px] border ${arc.tone === 'orange' ? 'border-[#D9A36F] dark:border-[#8A511F]' : 'border-[#9FC893] dark:border-[#31674B]'} bg-white/82 shadow-[0_14px_30px_rgba(80,54,30,0.11)] dark:bg-[#1E1E1D] dark:shadow-none`}>
            <div className={`relative h-32 p-4 ${arc.tone === 'orange' ? 'bg-[linear-gradient(135deg,#D6B075,#2A1E16)]' : 'bg-[linear-gradient(135deg,#7B6B52,#11241B)]'}`}>
              <span className="rounded-full bg-black/45 px-3 py-1 text-[9px] font-bold tracking-[0.18em]">• {arc.status}</span>
              <span className="absolute right-4 top-5 flex h-14 w-14 items-center justify-center rounded-full border-[6px] border-[#ED8522] bg-black/35 text-[13px] font-bold">{arc.pct}</span>
              <p className="absolute bottom-5 left-4 right-4 text-[20px] font-bold">{arc.title}</p>
            </div>
            <div className="p-4">
              <p className="text-[11px] leading-relaxed text-[#77675A] dark:text-[#D8D0C8]">{arc.meta}</p>
              <p className="mt-3 text-[14px] font-bold">{arc.tone === 'orange' ? '🔥 Momentum Building' : '🍃 Consistency Building'} <span className="float-right text-[#77675A] dark:text-[#A9A29D]">›</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgressScreen() {
  const days = [
    { d: 'M', n: 9, state: 'active' },
    { d: 'T', n: 10, state: 'active' },
    { d: 'W', n: 11, state: 'active' },
    { d: 'T', n: 12, state: 'today' },
    { d: 'F', n: 13, state: 'inactive' },
    { d: 'S', n: 14, state: 'inactive' },
    { d: 'S', n: 15, state: 'inactive' },
  ];
  const stateClass = {
    active: 'bg-[#41B982]',
    today: 'bg-[#ED8B2A]',
    inactive: 'bg-[#E6E4DF] dark:bg-[#31353C]',
  };

  return (
    <div className={shell}>
      <TopBar />
      <div className="mb-2 grid grid-cols-3 overflow-hidden rounded-[16px] border border-[#DED8CD] bg-[#F5F3EE] p-1 dark:border-white/10 dark:bg-[#332D36]">
        <button className="rounded-xl border border-[#F2D9C3] bg-white py-1.5 text-[10px] font-semibold text-[#D47A33] dark:border-[#5E3C24] dark:bg-[#3A333C]">
          🗓 Week
        </button>
        <button className="py-1.5 text-[10px] font-semibold text-[#7D766D] dark:text-[#AAACB1]">🗓 Month</button>
        <button className="py-1.5 text-[10px] font-semibold text-[#7D766D] dark:text-[#AAACB1]">📊 Year</button>
      </div>

      <div className={`${card} mb-2.5 p-3.5`}>
        <p className="mb-2 text-[16px] font-semibold">This Week</p>
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div key={day.n} className="flex flex-col items-center gap-0.5">
              <span className="text-[8px] text-[#7A746B] dark:text-[#A7A8AB]">{day.d}</span>
              <span className="text-[8px] text-[#7A746B] dark:text-[#A7A8AB]">{day.n}</span>
              <div className={`h-8 w-8 rounded-full ${stateClass[day.state]}`} />
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-full border border-[#E4DED4] px-2 py-1 text-[8px] text-[#6C675F] dark:border-white/10 dark:text-[#A4A6AB]">
          <span>🟢 Active Days</span>
          <span>🟠 Today</span>
          <span>⚪ Inactive Days</span>
        </div>
      </div>

      <p className="mb-1 text-[16px] font-semibold">Active Stride</p>
      <div className={`${card} mb-2.5 p-3.5`}>
        <p className="text-[18px] font-bold">🔥 Stride: 15 Days</p>
        <p className="text-[9px] text-[#6F685F] dark:text-[#A4A6AB]">You&apos;re in stride for 15 days straight.</p>
        <p className="mt-1 text-[9px] text-[#6F685F] dark:text-[#A4A6AB]">🎟 1 streak restore token ready</p>
      </div>
      <p className="mb-2 text-[10px] text-[#706A60] dark:text-[#A4A6AB]">Active this week</p>

      <p className="mb-1 text-[16px] font-semibold">Achievements</p>
      <div className={card}>
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-semibold">Progress</p>
          <span className="text-[10px] font-semibold text-[#E07D2A]">View all ›</span>
        </div>
        <p className="mt-0.5 text-[9px] text-[#706A60] dark:text-[#A4A6AB]">Your growth stages, reflected as consistency.</p>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-medium">🏅 Starter</span>
            <span className="rounded-full bg-[#EAF8F1] px-2 py-0.5 text-[8px] font-semibold text-[#2D9466]">Unlocked</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-medium">🥈 Rhythm</span>
            <span className="rounded-full bg-[#FFF4E9] px-2 py-0.5 text-[8px] font-semibold text-[#C57A3A]">In motion</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-medium">⚪ Circle</span>
            <span className="rounded-full bg-[#F0EFEC] px-2 py-0.5 text-[8px] font-semibold text-[#817A70] dark:bg-[#433B45] dark:text-[#A8ABB1]">Building</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-medium">✨ Mastery</span>
            <span className="rounded-full bg-[#F0EFEC] px-2 py-0.5 text-[8px] font-semibold text-[#817A70] dark:bg-[#433B45] dark:text-[#A8ABB1]">Consistency first</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SettingsScreen() {
  return (
    <div className={`${shell} overflow-hidden`}>
      <p className="mb-2 text-[10px] font-semibold tracking-[0.14em] text-[#2E2B26] dark:text-[#CBCBD1]">✨ PERSONALIZATION</p>

      <div className="rounded-[20px] border border-[#E4DED4] bg-[#F8F8F6] p-3 dark:border-white/10 dark:bg-[#332D36]">
        <p className="text-[14px] font-semibold">How should Ginja talk to you?</p>
        <div className="mt-2 rounded-[14px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5 dark:border-white/10 dark:bg-[#3A333C]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold">🔥 Motivational</p>
              <p className="mt-0.5 text-[8px] text-[#6D675E] dark:text-[#A9ACB2]">High-energy push when you need momentum</p>
            </div>
            <span className="text-[11px] text-[#7F786F] dark:text-[#A9ACB2]">▾</span>
          </div>
        </div>

        <p className="mt-3 text-[14px] font-semibold">What are your top Interests?</p>
        <p className="mt-1 text-[8px] leading-relaxed text-[#6D675E] dark:text-[#A9ACB2]">
          These help Ginja personalize reminders, motivation, and suggestions.
        </p>
        <div className="mt-2 rounded-[14px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5 dark:border-white/10 dark:bg-[#3A333C]">
          <div className="flex flex-wrap gap-1">
            <span className="rounded-full border border-[#E9C8A9] px-2 py-1 text-[8px] font-semibold dark:border-[#6D4D36]">🍽 Food</span>
            <span className="rounded-full border border-[#E9C8A9] px-2 py-1 text-[8px] font-semibold dark:border-[#6D4D36]">🏕 Outdoor/Recreational</span>
            <span className="rounded-full border border-[#E9C8A9] px-2 py-1 text-[8px] font-semibold dark:border-[#6D4D36]">🧘 Wellness</span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[8px] text-[#706A60] dark:text-[#A9ACB2]">Food, Outdoor/Recreational, Wellness +1</p>
            <span className="text-[11px] text-[#7F786F] dark:text-[#A9ACB2]">▾</span>
          </div>
        </div>

        <p className="mt-3 text-[14px] font-semibold">Quiet hours</p>
        <p className="mt-1 text-[8px] text-[#6D675E] dark:text-[#A9ACB2]">Reduce non-urgent nudges during your quiet time.</p>
        <div className="mt-2 rounded-[14px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5 dark:border-white/10 dark:bg-[#3A333C]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold">Enable Quiet Hours</p>
              <p className="text-[8px] text-[#6D675E] dark:text-[#A9ACB2]">Applies to smart wellness nudges.</p>
            </div>
            <Toggle on size="md" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="rounded-[10px] border border-[#E3D8CD] bg-[#F2ECE5] px-2 py-1 text-[8px] dark:border-white/10 dark:bg-[#443C46]">
              <span className="text-[#E08A2D]">🌙</span> From <span className="float-right font-semibold">11:00 PM</span>
            </div>
            <div className="rounded-[10px] border border-[#E3D8CD] bg-[#F2ECE5] px-2 py-1 text-[8px] dark:border-white/10 dark:bg-[#443C46]">
              <span className="text-[#E08A2D]">☀️</span> Until <span className="float-right font-semibold">7:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-2 mt-2 text-[10px] font-semibold tracking-[0.14em] text-[#7D766D] dark:text-[#A9ACB2]">NOTIFICATIONS</p>
      <div className="rounded-[14px] border border-[#DDD6CB] bg-[#F7F5F1] p-2.5 text-[8px] text-[#6B655C] dark:border-white/10 dark:bg-[#332D36] dark:text-[#A9ACB2]">
        <p>ⓘ Push notifications are not supported in Expo Go. Use a development build or EAS build to test reminders.</p>
      </div>

      <div className="mt-2 rounded-[16px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5 dark:border-white/10 dark:bg-[#332D36]">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold">Daily motivational message</p>
              <p className="text-[8px] text-[#6D675E] dark:text-[#A9ACB2]">Start your day with encouragement</p>
            </div>
            <Toggle on size="md" />
          </div>
          <div className="h-px bg-[#E2DDD3] dark:bg-white/10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold">Enable Smart Nudges</p>
              <p className="text-[8px] text-[#6D675E] dark:text-[#A9ACB2]">Personalized reminders based on your style.</p>
            </div>
            <Toggle on size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TodoCompletedScreen() {
  const toDos = ['Read a book', 'Project review', 'Plan next week'];
  return (
    <div className={shell}>
      <TopBar />
      <h2 className="mb-1 text-[16px] font-bold">Todo</h2>
      <p className="mb-2 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Completed this week</p>
      <div className="space-y-1.5">
        {toDos.map((toDo) => (
          <div key={toDo} className={card}>
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#41B982] text-[8px] text-white">✓</span>
              <p className="text-[10px] text-[#7B746B] line-through dark:text-[#A3A6AD]">{toDo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TodoSharedScreen() {
  const messages = [
    { sender: 'Kaycee', text: 'I just created an action: Chest day today for @Jeffrey 💪', time: '18:23', mine: false },
    { sender: 'Jeffrey', text: 'Got it. I will handle bench + incline after work.', time: '18:24', mine: false },
    { sender: 'You', text: 'Perfect. I dropped the warm-up and set plan in Notes.', time: '18:25', mine: true },
    { sender: 'Kaycee', text: 'Love it. We can check it off tonight and keep our streak.', time: '18:26', mine: false },
  ];

  return (
    <div className={shell}>
      <div className="mb-2 flex items-center justify-between text-[10px] font-semibold text-[#1F1D19] dark:text-[#F1F1EF]">
        <span>19:54</span>
        <span>5G 80%</span>
      </div>

      <div className="mb-2 flex items-center gap-2">
        <span className="text-[15px] text-[#5F5A51] dark:text-[#ADB0B6]">←</span>
        <div>
          <h2 className="text-[16px] font-bold">Gym Bros</h2>
          <p className="text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">You, Kaycee, Jeffrey</p>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-3 overflow-hidden rounded-[14px] border border-[#E2DCD1] bg-[#F6F3ED] text-[10px] font-semibold dark:border-white/10 dark:bg-[#332D36]">
        <button className="py-2 text-[#7E776E] dark:text-[#A9ACB2]">⚡ Actions (2)</button>
        <button className="border-b-2 border-[#E0832A] py-2 text-[#D37B32]">💬 Chat</button>
        <button className="py-2 text-[#7E776E] dark:text-[#A9ACB2]">🗒 Notes (1)</button>
      </div>

      <div className={`${card} mb-2 border-[#F0D6BE] bg-[#FFFAF5] dark:border-[#5A3A23] dark:bg-[#2A221B]`}>
        <p className="text-[9px] font-semibold text-[#C77738]">Action created in chat</p>
        <p className="mt-0.5 text-[11px] font-semibold">Chest day today</p>
        <p className={tiny}>Created by Kaycee · Assigned to Jeffrey · Due today at 7:00 PM</p>
      </div>

      <div className="mb-2 space-y-1.5">
        {messages.map((message) => (
          <div key={`${message.sender}-${message.time}-${message.text}`} className={`flex ${message.mine ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[82%] rounded-2xl border px-2.5 py-1.5 ${
                message.mine
                  ? 'border-[#E7E1D7] bg-white dark:border-white/10 dark:bg-[#3A333C]'
                  : 'border-[#F0D8C0] bg-[#FFF7EE] dark:border-[#5A3A23] dark:bg-[#2A221B]'
              }`}
            >
              {!message.mine && <p className="mb-0.5 text-[8px] font-semibold text-[#7A736A] dark:text-[#ADB0B5]">{message.sender}</p>}
              <p className="text-[10px]">{message.text}</p>
              <p className="mt-0.5 text-[8px] text-[#7D766D] dark:text-[#A8ABB0]">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={`${card} mb-2`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold">Shared Notes: Chest Day Plan</p>
            <p className={tiny}>Warm-up, set targets, and form cues saved for everyone.</p>
          </div>
          <span className="text-[10px] font-semibold text-[#4FA45A]">Open ›</span>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between rounded-full border border-[#DDD6C9] bg-[#FFFEFC] px-3 py-2 text-[10px] text-[#9A9286] dark:border-white/10 dark:bg-[#302A34] dark:text-[#8F929A]">
        <span>type @ to mention</span>
        <span className="rounded-full bg-[#F0B97F] px-2 py-1 text-[9px] font-semibold text-white">➤</span>
      </div>
    </div>
  );
}

export function TodoUpcomingScreen() {
  const toDos = ['Interview prep', 'Gym session', 'Call family'];
  return (
    <div className={shell}>
      <TopBar />
      <h2 className="mb-1 text-[16px] font-bold">Todo</h2>
      <p className="mb-2 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Upcoming</p>
      <div className="space-y-1.5">
        {toDos.map((toDo) => (
          <div key={toDo} className={card}>
            <p className="text-[10px] font-semibold">{toDo}</p>
            <p className={tiny}>Planned for this week</p>
          </div>
        ))}
      </div>
    </div>
  );
}
