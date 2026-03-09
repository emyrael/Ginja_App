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

function Toggle({ on = true }) {
  return (
    <div className={`relative h-5 w-10 rounded-full ${on ? 'bg-[#F0C9AA]' : 'bg-[#D8D8D8] dark:bg-[#3A3F46]'}`}>
      <span className={`absolute top-0.5 h-4 w-4 rounded-full ${on ? 'right-0.5 bg-[#EE8423]' : 'left-0.5 bg-white dark:bg-[#D2D3D5]'}`} />
    </div>
  );
}

export function HomeScreen() {
  return (
    <div className={shell}>
      <TopBar />

      <h2 className="text-[18px] font-bold leading-tight">Good night, User! 🌙</h2>
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
          ⚠ What to Avoid: Overthinking
        </p>
      </div>
    </div>
  );
}

export function BrainDumpScreen() {
  return (
    <div className={shell}>
      <TopBar />
      <div className="mb-2 rounded-[20px] bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.03)] dark:bg-[#1E2228]">
        <p className="text-[10px] font-semibold">Brain Dump</p>
        <p className="mt-0.5 text-[9px] text-[#6E685F] dark:text-[#A5A6AA]">Write or speak everything on your mind.</p>
        <div className="mt-2 min-h-[72px] rounded-xl border border-[#E6DFD3] bg-[#FFFEFD] p-2 text-[9px] text-[#91887D] dark:border-white/10 dark:bg-[#14171C] dark:text-[#8F929A]">
          e.g. finish report, call dentist, buy groceries...
        </div>
        <button className="mt-2 w-full rounded-xl bg-[#E8E8E8] py-2 text-[10px] font-semibold text-[#A9A19A] dark:bg-[#31363E] dark:text-[#C6C8CC]">
          Break It Down
        </button>
      </div>
      <div className="rounded-[20px] border border-[#DDEBD5] bg-[#F4FAEE] p-2.5 dark:border-[#2D4A35] dark:bg-[#1B2920]">
        <p className="text-[9px] font-semibold text-[#4E8C06]">Tip</p>
        <p className="text-[9px] text-[#4F5B47] dark:text-[#A0B398]">Start messy. Ginja will organize it with you.</p>
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
    { d: 'M', n: 2 },
    { d: 'T', n: 3 },
    { d: 'W', n: 4 },
    { d: 'T', n: 5 },
    { d: 'F', n: 6 },
    { d: 'S', n: 7 },
    { d: 'S', n: 8 },
  ];

  return (
    <div className={shell}>
      <TopBar />
      <h2 className="text-[18px] font-bold">Progress</h2>
      <p className="mb-2 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Consistency over perfection</p>

      <div className="mb-2 inline-flex items-center gap-1 text-[10px] font-medium">
        Week <span className="text-[#847D73] dark:text-[#ABADB1]">▾</span>
      </div>

      <div className={`${card} mb-2.5`}>
        <p className="mb-1 text-[16px] font-semibold">This Week</p>
        <div className="grid grid-cols-7 gap-1 text-center">
          {days.map((day) => (
            <div key={day.n} className="flex flex-col items-center gap-0.5">
              <span className="text-[8px] text-[#7A746B] dark:text-[#A7A8AB]">{day.d}</span>
              <span className="text-[8px] text-[#7A746B] dark:text-[#A7A8AB]">{day.n}</span>
              <div className="h-5 w-5 rounded-full bg-[#41B982]" />
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center justify-between rounded-full border border-[#E4DED4] px-2 py-1 text-[8px] text-[#6C675F] dark:border-white/10 dark:text-[#A4A6AB]">
          <span>🟢 Active Days</span>
          <span>🟠 Today</span>
          <span>🔴 Inactive</span>
        </div>
      </div>

      <p className="mb-1 text-[16px] font-semibold">Active Streak</p>
      <div className={`${card} mb-2`}>
        <p className="text-[18px] font-bold">12-day streak</p>
        <p className="text-[9px] text-[#6F685F] dark:text-[#A4A6AB]">You&apos;ve been active 12 days in a row.</p>
      </div>
      <p className="mb-2 text-[9px] text-[#706A60] dark:text-[#A4A6AB]">Active 7 days this week</p>

      <p className="mb-1 text-[16px] font-semibold">Achievements</p>
      <div className="grid grid-cols-2 gap-1.5">
        <div className={card}>
          <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF8F1] text-[16px]">⭐</div>
          <p className="text-center text-[10px] font-semibold">First Week</p>
          <p className="text-center text-[8px] text-[#6F685F] dark:text-[#A4A6AB]">Active 7 consecutive days</p>
          <p className="mt-1 text-center text-[8px] font-semibold text-[#35A775]">✓ Earned</p>
        </div>
        <div className={card}>
          <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAF8F1] text-[16px]">⚡</div>
          <p className="text-center text-[10px] font-semibold">Early Bird</p>
          <p className="text-center text-[8px] text-[#6F685F] dark:text-[#A4A6AB]">Open before 8:00 AM</p>
          <p className="mt-1 text-center text-[8px] font-semibold text-[#35A775]">✓ Earned</p>
        </div>
      </div>
    </div>
  );
}

export function SettingsScreen() {
  return (
    <div className={shell}>
      <p className="mb-2 text-[14px] font-semibold">How should Ginja talk to you?</p>
      <div className={`${card} mb-2`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] font-semibold">🔥 Motivational</p>
            <p className={tiny}>High-energy push when you need momentum</p>
          </div>
          <span className="text-[12px] text-[#8D857C] dark:text-[#ACAFB3]">▾</span>
        </div>
      </div>

      <p className="mb-1 text-[14px] font-semibold">What matters to you right now?</p>
      <p className="mb-1 text-[9px] text-[#6D675E] dark:text-[#A3A5A9]">These help Ginja personalize reminders and suggestions.</p>
      <div className={`${card} mb-2`}>
        <div className="flex flex-wrap gap-1">
          <span className="rounded-full border border-[#E8D0B8] px-2 py-1 text-[9px]">💪 Fitness</span>
          <span className="rounded-full border border-[#E8D0B8] px-2 py-1 text-[9px]">💼 Work</span>
          <span className="rounded-full border border-[#E8D0B8] px-2 py-1 text-[9px]">📚 Learning</span>
        </div>
      </div>

      <p className="mb-1 text-[14px] font-semibold">Quiet hours</p>
      <p className="mb-1 text-[9px] text-[#6D675E] dark:text-[#A3A5A9]">Reduce non-urgent nudges during your quiet time.</p>
      <div className={`${card} mb-2`}>
        <div className="mb-2 flex items-center justify-between">
          <div>
            <p className="text-[12px] font-semibold">Enable Quiet Hours</p>
            <p className={tiny}>Applies to smart wellness nudges.</p>
          </div>
          <Toggle on />
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="rounded-xl bg-[#FFF5EE] px-2 py-1 text-[10px] dark:bg-[#2A211A]">🌙 11:30 PM</div>
          <div className="rounded-xl bg-[#FFF5EE] px-2 py-1 text-[10px] dark:bg-[#2A211A]">🌤️ 9:00 AM</div>
        </div>
      </div>

      <p className="mb-1 text-[10px] font-semibold tracking-[0.16em] text-[#8B857B] dark:text-[#A5A7AC]">PREFERENCES</p>
      <div className={card}>
        <div className="space-y-2 text-[10px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Daily motivational message</p>
              <p className={tiny}>Start your day with encouragement</p>
            </div>
            <Toggle on />
          </div>
          <div className="h-px bg-[#E7E0D5] dark:bg-white/10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Enable Smart Notifications</p>
              <p className={tiny}>Personalized reminders based on your style and mood</p>
            </div>
            <Toggle on />
          </div>
          <div className="h-px bg-[#E7E0D5] dark:bg-white/10" />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">Calendar Import</p>
              <p className={tiny}>Import this month&apos;s events as todos</p>
            </div>
            <Toggle on />
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
  const pending = ['John', 'Ian'];
  const circleMembers = ['Jane', 'Rodrigo', 'John', 'Ian'];
  return (
    <div className={shell}>
      <TopBar />
      <h2 className="mb-1 text-[16px] font-bold">Circle</h2>
      <p className="mb-2 text-[9px] text-[#6C675F] dark:text-[#A2A3A6]">Stay accountable together</p>

      <div className={`${card} mb-2 border-[#ECD4BE] dark:border-[#5A3A23]`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold">Invite friends</p>
            <p className={tiny}>Beta invite, share a link with anyone.</p>
          </div>
          <span className="text-[11px] text-[#938D84] dark:text-[#A6A8AD]">›</span>
        </div>
      </div>

      <div className="mb-2 flex items-center justify-between">
        <p className="text-[10px] font-semibold">Pending Requests</p>
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3DBB83] text-[8px] font-semibold text-white">2</span>
      </div>

      <div className="space-y-1.5 mb-2">
        {pending.map((member) => (
          <div key={member} className={card}>
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold">{member}</p>
                <p className={tiny}>Request sent, waiting for response</p>
              </div>
              <span className="rounded-full bg-[#ECEAE4] px-2 py-1 text-[8px] text-[#7B746A] dark:bg-[#2D3138] dark:text-[#B3B6BC]">
                Withdraw
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={`${card} mb-2`}>
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold">Shared Plans</p>
          <span className="text-[14px] text-[#E2561B]">+</span>
        </div>
      </div>

      <p className="mb-1 text-[10px] font-semibold text-[#766F65] dark:text-[#A9AAB0]">Your Circle</p>
      <div className="mb-2 rounded-xl border border-[#E1DBCF] bg-[#FFFEFC] px-3 py-2 text-[10px] text-[#928A80] dark:border-white/10 dark:bg-[#181C22] dark:text-[#8F929A]">
        Search your circle
      </div>

      <div className="space-y-1.5">
        {circleMembers.map((member) => (
          <div key={member} className={card}>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E8] text-[10px] font-semibold text-[#E57F2C]">
                  {member[0]}
                </div>
                <div>
                  <p className="text-[10px] font-semibold">{member}</p>
                  <p className={tiny}>Offline</p>
                </div>
              </div>
              <span className="text-[9px] font-medium text-[#4FA45A]">View ›</span>
            </div>
          </div>
        ))}
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
