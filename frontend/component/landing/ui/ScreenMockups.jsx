import React from 'react';

const shell = 'min-h-[500px] bg-[#EEEDE9] px-3 pb-4 pt-3 text-[#1F1D19] dark:bg-[#14171C] dark:text-[#F1F1EF]';
const card = 'rounded-[18px] border border-[#E2DDD3] bg-white/95 p-3 shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#1E2228]';
const tiny = 'text-[8px] leading-tight text-[#716A61] dark:text-[#A9A9AB]';

function TopBar() {
  return (
    <div className="mb-3 flex items-center justify-between">
      <img src="/logo/flame-icon.png" alt="Ginja" className="h-5 w-5 object-contain" />
      <div className="flex items-center gap-2 text-[12px] text-[#787169] dark:text-[#A6A6AA]">
        <span>🔔</span>
        <span>⚙️</span>
      </div>
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
    <div className={shell}>
      <TopBar />

      <h2 className="text-[18px] font-bold leading-tight">Good day, Nay! 🌙</h2>
      <p className="mb-3 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Stay Ginja&apos;d. Stay Organized.</p>

      <div className={`${card} mb-2.5 relative`}>
        <p className="text-[9px] text-[#767066] dark:text-[#B0B0B3]">Today&apos;s Progress</p>
        <div className="mb-1.5 flex items-baseline gap-1">
          <span className="text-[22px] font-bold leading-none">1/2</span>
          <span className="text-[9px] text-[#767066] dark:text-[#B0B0B3]">tasks done</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#EAE7E1] dark:bg-[#2D3239]">
          <div className="h-full w-[50%] rounded-full bg-[#ED8522]" />
        </div>
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF3E8] text-[12px]">
          🏆
        </div>
      </div>

      <div className={`${card} mb-2.5 border-[#ECD4BE] dark:border-[#5A3A23]`}>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E8] text-[12px]">🔥</div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold">Brain Dump</p>
            <p className={`${tiny}`}>Unload your thoughts. Ginja turns them into clear next actions.</p>
          </div>
          <button className="rounded-full bg-[#ED8522] px-2.5 py-1 text-[9px] font-semibold text-white">Start</button>
        </div>
      </div>

      <button className="mb-2.5 w-full rounded-[14px] bg-[#ED8522] py-2 text-[13px] font-semibold text-white">
        Add To-Do
      </button>

      <div className={`${card} mb-2.5`}>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E8] text-[12px]">🗓️</div>
          <div className="flex-1">
            <p className="text-[10px] font-semibold">Import from Calendar</p>
            <p className={tiny}>Turn this month&apos;s events into todos</p>
          </div>
          <span className="text-[11px] text-[#938D84] dark:text-[#A6A8AD]">›</span>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold">Today&apos;s focus (2)</p>
          <span className="text-[9px] text-[#D67B30]">See all</span>
        </div>
        <div className="my-1 h-px bg-[#DDD6CA] dark:bg-white/10" />
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold">Coming up (3)</p>
          <span className="text-[9px] text-[#D67B30]">See all</span>
        </div>
      </div>

      <div className={card}>
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E8] text-[12px]">🗓️</div>
          <p className="text-[11px] font-semibold">Weekly Focus</p>
        </div>
        <p className="text-[10px] text-[#2A2824] dark:text-[#E7E7E8]">Eating right · Going to the gym · Morning prayers</p>
        <p className="mt-1 rounded-full border border-[#F3C3C3] bg-[#FFF3F3] px-2 py-1 text-[9px] text-[#C14A4A] dark:border-[#633030] dark:bg-[#3A2323] dark:text-[#F3B6B6]">
          ⚠ What to Avoid: skipping workouts , late-night snacking
        </p>
      </div>
    </div>
  );
}

export function BrainDumpScreen() {
  const keyboardKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="relative min-h-[500px] overflow-hidden bg-[#A6A6A6] text-[#1F1D19]">
      <div className="px-3 pb-2 pt-3">
        <div className="mb-3 flex items-center justify-between">
          <img src="/logo/flame-icon.png" alt="Ginja" className="h-5 w-5 object-contain" />
          <div className="flex items-center gap-2 text-[12px] text-[#56524B]">
            <span>🔔</span>
            <span>⚙️</span>
          </div>
        </div>
        <p className="text-[7px] font-semibold text-[#14120E]">Good afternoon, Kavani!</p>
        <p className="mt-0.5 text-[6px] text-[#4C4943]">Stay Ginja&apos;d. Stay Organized.</p>

        <div className="mt-3 rounded-[14px] bg-[#C5C5C5] p-2.5">
          <p className="text-[7px] font-semibold text-[#4F4A44]">Today&apos;s Progress</p>
          <div className="mt-0.5 flex items-end gap-1">
            <span className="text-[13px] font-bold leading-none text-[#1E1C19]">0/5</span>
            <span className="text-[6px] text-[#57524C]">tasks done</span>
          </div>
          <div className="mt-1 h-1 w-full rounded-full bg-[#E8E4DE]" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[98px] rounded-t-[22px] bg-[#FBF9F6] px-3 pb-3 pt-2 shadow-[0_-10px_32px_rgba(0,0,0,0.15)]">
        <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-[#E4E0DB]" />
        <div className="mb-1 flex items-center justify-between text-[7px] text-[#767066]">
          <span>Clear</span>
          <span className="text-[10px]">✕</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-semibold">Brain Dump</p>
            <p className="mt-0.5 max-w-[180px] text-[6.5px] leading-relaxed text-[#70695F]">
              Tell Ginja what&apos;s on your mind. It will help you figure out the next step.
            </p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#41B982] text-[13px] text-[#41B982]">
            🎤
          </div>
        </div>
        <div className="mt-2 rounded-[10px] border border-[#E5DED3] bg-white px-2.5 py-2 text-[7px] leading-relaxed text-[#25221E]">
          I&apos;m trying to set my priorities today, I&apos;ve to finish my project, go to the gym and also see my friends.
        </div>
        <button className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-[12px] bg-[#ED8522] py-2 text-[7.5px] font-semibold text-white">
          <img src="/logo/flame-icon.png" alt="" className="h-3 w-3 object-contain brightness-0 invert" />
          Figure It Out
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[98px] bg-[#555555] px-2 pt-2">
        <div className="mb-1.5 grid grid-cols-3 gap-2 text-center text-[7px] text-[#D2D2D2]">
          <span>I</span>
          <span>I&apos;m</span>
          <span>I&apos;ll</span>
        </div>
        <div className="grid grid-cols-10 gap-1">
          {keyboardKeys.map((key) => (
            <div key={key} className="flex h-7 items-center justify-center rounded-md bg-[#8D8D8D] text-[8px] text-white">
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TodoViewScreen() {
  const days = [
    { d: 'M', n: 10, state: 'done' },
    { d: 'T', n: 11, state: 'done' },
    { d: 'W', n: 12, state: 'overdue' },
    { d: 'T', n: 13, state: 'upcoming' },
    { d: 'F', n: 14, state: 'upcoming' },
    { d: 'S', n: 15, state: 'selected' },
    { d: 'S', n: 16, state: 'idle' },
  ];

  const stateDot = {
    done: 'bg-[#41B982]',
    overdue: 'bg-[#E05A5A]',
    upcoming: 'bg-[#ED8522]',
    selected: 'border-2 border-[#ED8522] text-[#ED8522]',
    idle: 'text-[#8E877E] dark:text-[#A9ACB2]',
  };

  const todos = [
    { title: 'Plan launch content', time: '09:30', status: 'Done', tone: 'bg-[#EAF8F1] text-[#2D9466]' },
    { title: 'Review product roadmap', time: '12:00', status: 'Overdue', tone: 'bg-[#FFECEC] text-[#C44B4B]' },
    { title: 'Gym session', time: '18:30', status: 'Upcoming', tone: 'bg-[#FFF1E8] text-[#C26B2E]' },
  ];

  return (
    <div className={shell}>
      <TopBar />

      <div className="mb-2 grid grid-cols-2 overflow-hidden rounded-[14px] border border-[#E2DCD1] bg-[#F6F3ED] text-[10px] font-semibold dark:border-white/10 dark:bg-[#1E2228]">
        <button className="border-b-2 border-[#E0832A] py-2 text-[#D37B32]">🗓 Calendar</button>
        <button className="py-2 text-[#7E776E] dark:text-[#A9ACB2]">📋 List</button>
      </div>

      <div className={`${card} mb-2.5 p-3`}>
        <div className="mb-2 flex items-center justify-between rounded-full border border-[#E4DED4] bg-[#F7F4EE] px-2 py-1 text-[8px] text-[#6C675F] dark:border-white/10 dark:bg-[#1A1E24] dark:text-[#A4A6AB]">
          <span className="rounded-full bg-white px-2 py-1 text-[#D37B32] dark:bg-[#232830]">Week</span>
          <span>Month</span>
          <span className="ml-auto text-[9px] text-[#8C857C]">March 2026</span>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div key={`${day.d}-${day.n}`} className="flex flex-col items-center gap-0.5">
              <span className="text-[7px] text-[#7A746B] dark:text-[#A7A8AB]">{day.d}</span>
              {day.state === 'selected' ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#ED8522] text-[9px] font-semibold text-[#ED8522]">
                  {day.n}
                </div>
              ) : (
                <span className={`text-[9px] ${stateDot[day.state] || 'text-[#8E877E]'}`}>{day.n}</span>
              )}
              {day.state !== 'selected' && (
                <span className={`h-1.5 w-1.5 rounded-full ${stateDot[day.state] || 'bg-[#DDD6CB]'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between rounded-full border border-[#E4DED4] px-2 py-1 text-[7px] text-[#6C675F] dark:border-white/10 dark:text-[#A4A6AB]">
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#41B982]" />Done</span>
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#ED8522]" />Upcoming</span>
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#E05A5A]" />Overdue</span>
        </div>
      </div>

      <div className={`${card} mb-2.5`}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold">Today</p>
            <p className={tiny}>3 to-dos</p>
          </div>
          <div className="flex items-center gap-1 text-[8px] text-[#8C857C]">
            <span className="rounded-full border border-[#E6DED3] bg-[#FFF8F1] px-2 py-1 text-[#C26B2E]">Plan</span>
            <span className="rounded-full border border-[#E6DED3] bg-white px-2 py-1">+</span>
          </div>
        </div>

        <div className="space-y-1.5">
          {todos.map((todo) => (
            <div key={todo.title} className="rounded-[12px] border border-[#EFE7DC] bg-[#FFFEFD] px-2.5 py-2 dark:border-white/10 dark:bg-[#20242B]">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold">{todo.title}</p>
                <span className={`rounded-full px-2 py-0.5 text-[7px] font-semibold ${todo.tone}`}>{todo.status}</span>
              </div>
              <p className={tiny}>Scheduled · {todo.time}</p>
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

export function WellnessScreen() {
  const moods = ['😊 Great', '🙂 Good', '😐 Okay', '🥱 Tired', '😰 Stressed', '😔 Low'];

  return (
    <div className={shell}>
      <TopBar />
      <h2 className="text-[18px] font-bold">Wellness</h2>
      <p className="mb-3 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">A moment to check in with yourself.</p>

      <div className={`${card} mb-2.5`}>
        <p className="text-[13px] font-semibold">Just Checking in.</p>
        <p className="mb-2 text-[9px] text-[#706A60] dark:text-[#A4A6AB]">This helps us adjust reminders and suggestions for you.</p>
        <div className="grid grid-cols-3 gap-1.5">
          {moods.map((mood) => (
            <div key={mood} className="rounded-xl border border-[#E7E1D8] bg-[#FBFAF8] px-1 py-2 text-center text-[8px] dark:border-white/10 dark:bg-[#181C22]">
              {mood}
            </div>
          ))}
        </div>
      </div>

      <div className={`${card} mb-2.5`}>
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E8] text-[12px]">🗓️</div>
          <div className="flex-1">
            <p className="text-[11px] font-semibold">Weekly Focus</p>
            <p className={tiny}>Eating right · Going to the gym · Morning prayers</p>
          </div>
          <span className="text-[11px] text-[#938D84] dark:text-[#A6A8AD]">›</span>
        </div>
      </div>

      <div className="mb-1 flex items-center gap-1 text-[10px] font-semibold text-[#1F1D19] dark:text-[#F1F1EF]">
        <span className="text-[#4FA45A]">🍃</span>
        Quick resets
      </div>
      <p className="mb-2 text-[9px] text-[#706A60] dark:text-[#A4A6AB]">Small resets that can shift your energy.</p>

      <div className="grid grid-cols-2 gap-1.5">
        <div className={card}><p className="text-[10px] font-semibold">🎯 Set a micro-goal</p><p className={tiny}>One focus today</p></div>
        <div className={card}><p className="text-[10px] font-semibold">📋 Plan 20 mins focus</p><p className={tiny}>Block time</p></div>
        <div className={card}><p className="text-[10px] font-semibold">🎉 Celebrate a win</p><p className={tiny}>Acknowledge one win</p></div>
        <div className={card}><p className="text-[10px] font-semibold">💧 Hydrate</p><p className={tiny}>Small reset now</p></div>
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
      <div className="mb-2 grid grid-cols-3 overflow-hidden rounded-[16px] border border-[#DED8CD] bg-[#F5F3EE] p-1 dark:border-white/10 dark:bg-[#1E2228]">
        <button className="rounded-xl border border-[#F2D9C3] bg-white py-1.5 text-[10px] font-semibold text-[#D47A33] dark:border-[#5E3C24] dark:bg-[#232830]">
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
            <span className="rounded-full bg-[#F0EFEC] px-2 py-0.5 text-[8px] font-semibold text-[#817A70] dark:bg-[#2D3239] dark:text-[#A8ABB1]">Building</span>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-medium">✨ Mastery</span>
            <span className="rounded-full bg-[#F0EFEC] px-2 py-0.5 text-[8px] font-semibold text-[#817A70] dark:bg-[#2D3239] dark:text-[#A8ABB1]">Consistency first</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SettingsScreen() {
  return (
    <div className={`${shell} overflow-hidden`}>
      <p className="mb-2 text-[10px] font-semibold tracking-[0.14em] text-[#2E2B26]">✨ PERSONALIZATION</p>

      <div className="rounded-[20px] border border-[#E4DED4] bg-[#F8F8F6] p-3">
        <p className="text-[14px] font-semibold">How should Ginja talk to you?</p>
        <div className="mt-2 rounded-[14px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold">🔥 Motivational</p>
              <p className="mt-0.5 text-[8px] text-[#6D675E]">High-energy push when you need momentum</p>
            </div>
            <span className="text-[11px] text-[#7F786F]">▾</span>
          </div>
        </div>

        <p className="mt-3 text-[14px] font-semibold">What are your top Interests?</p>
        <p className="mt-1 text-[8px] leading-relaxed text-[#6D675E]">
          These help Ginja personalize reminders, motivation, and suggestions.
        </p>
        <div className="mt-2 rounded-[14px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5">
          <div className="flex flex-wrap gap-1">
            <span className="rounded-full border border-[#E9C8A9] px-2 py-1 text-[8px] font-semibold">🍽 Food</span>
            <span className="rounded-full border border-[#E9C8A9] px-2 py-1 text-[8px] font-semibold">🏕 Outdoor/Recreational</span>
            <span className="rounded-full border border-[#E9C8A9] px-2 py-1 text-[8px] font-semibold">🧘 Wellness</span>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <p className="text-[8px] text-[#706A60]">Food, Outdoor/Recreational, Wellness +1</p>
            <span className="text-[11px] text-[#7F786F]">▾</span>
          </div>
        </div>

        <p className="mt-3 text-[14px] font-semibold">Quiet hours</p>
        <p className="mt-1 text-[8px] text-[#6D675E]">Reduce non-urgent nudges during your quiet time.</p>
        <div className="mt-2 rounded-[14px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[13px] font-semibold">Enable Quiet Hours</p>
              <p className="text-[8px] text-[#6D675E]">Applies to smart wellness nudges.</p>
            </div>
            <Toggle on size="md" />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="rounded-[10px] border border-[#E3D8CD] bg-[#F2ECE5] px-2 py-1 text-[8px]">
              <span className="text-[#E08A2D]">🌙</span> From <span className="float-right font-semibold">11:00 PM</span>
            </div>
            <div className="rounded-[10px] border border-[#E3D8CD] bg-[#F2ECE5] px-2 py-1 text-[8px]">
              <span className="text-[#E08A2D]">☀️</span> Until <span className="float-right font-semibold">7:00 AM</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-2 mt-2 text-[10px] font-semibold tracking-[0.14em] text-[#7D766D]">NOTIFICATIONS</p>
      <div className="rounded-[14px] border border-[#DDD6CB] bg-[#F7F5F1] p-2.5 text-[8px] text-[#6B655C]">
        <p>ⓘ Push notifications are not supported in Expo Go. Use a development build or EAS build to test reminders.</p>
      </div>

      <div className="mt-2 rounded-[16px] border border-[#DED8CF] bg-[#F8F8F6] p-2.5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold">Daily motivational message</p>
              <p className="text-[8px] text-[#6D675E]">Start your day with encouragement</p>
            </div>
            <Toggle on size="md" />
          </div>
          <div className="h-px bg-[#E2DDD3]" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] font-semibold">Enable Smart Nudges</p>
              <p className="text-[8px] text-[#6D675E]">Personalized reminders based on your style.</p>
            </div>
            <Toggle on size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TodoCompletedScreen() {
  const tasks = ['Read a book', 'Project review', 'Plan next week'];
  return (
    <div className={shell}>
      <TopBar />
      <h2 className="mb-1 text-[16px] font-bold">Todo</h2>
      <p className="mb-2 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Completed this week</p>
      <div className="space-y-1.5">
        {tasks.map((task) => (
          <div key={task} className={card}>
            <div className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#41B982] text-[8px] text-white">✓</span>
              <p className="text-[10px] text-[#7B746B] line-through dark:text-[#A3A6AD]">{task}</p>
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

      <div className="mb-2 grid grid-cols-3 overflow-hidden rounded-[14px] border border-[#E2DCD1] bg-[#F6F3ED] text-[10px] font-semibold dark:border-white/10 dark:bg-[#1E2228]">
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
                  ? 'border-[#E7E1D7] bg-white dark:border-white/10 dark:bg-[#232830]'
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

      <div className="mt-2 flex items-center justify-between rounded-full border border-[#DDD6C9] bg-[#FFFEFC] px-3 py-2 text-[10px] text-[#9A9286] dark:border-white/10 dark:bg-[#181C22] dark:text-[#8F929A]">
        <span>type @ to mention</span>
        <span className="rounded-full bg-[#F0B97F] px-2 py-1 text-[9px] font-semibold text-white">➤</span>
      </div>
    </div>
  );
}

export function TodoUpcomingScreen() {
  const tasks = ['Interview prep', 'Gym session', 'Call family'];
  return (
    <div className={shell}>
      <TopBar />
      <h2 className="mb-1 text-[16px] font-bold">Todo</h2>
      <p className="mb-2 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Upcoming</p>
      <div className="space-y-1.5">
        {tasks.map((task) => (
          <div key={task} className={card}>
            <p className="text-[10px] font-semibold">{task}</p>
            <p className={tiny}>Planned for this week</p>
          </div>
        ))}
      </div>
    </div>
  );
}
