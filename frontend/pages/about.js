import Head from 'next/head';
import Link from 'next/link';
import GinjaLogo from '../component/landing/GinjaLogo';
import GinjaText from '../component/landing/GinjaText';

const principles = [
  {
    title: 'Calm over chaos',
    body: 'Ginja is intentionally quiet. The interface gives you space to think, decide, and move without unnecessary visual noise.',
  },
  {
    title: 'Adaptation over rigidity',
    body: 'From communication style to quiet hours, reminders and focus support adapt to your rhythm instead of forcing a fixed template.',
  },
  {
    title: 'Momentum over pressure',
    body: 'Progress is designed to feel visible and encouraging. The goal is consistent follow-through, not perfection.',
  },
];

const flow = [
  'Unload thoughts quickly with Brain Dump.',
  'Turn messy input into clear next steps.',
  'Set Weekly Focus to center your priorities.',
  'Receive reminders that match your timing and style.',
  'Track momentum and celebrate consistency.',
  'Collaborate in Circle for shared accountability.',
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Ginja</title>
        <meta
          name="description"
          content="Learn what Ginja is, why it is different, and how it helps people stay clear, consistent, and supported without overwhelm."
        />
        <link rel="canonical" href="https://ginja.io/about/" />
        <meta property="og:url" content="https://ginja.io/about/" />
      </Head>

      <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <header className="sticky top-0 z-40 border-b border-[var(--border-color)] bg-[var(--surface-soft)]/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2">
              <GinjaLogo size="sm" />
              <span className="text-sm font-semibold">
                <GinjaText />
              </span>
            </Link>
            <Link href="/" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              ← Back to Home
            </Link>
          </div>
        </header>

        <section className="px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 shadow-[0_16px_44px_rgba(34,30,24,0.08)] sm:px-10 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A66A3D]">About Ginja</p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              A calmer productivity space that adapts to real life.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Ginja is a productivity app for people who feel mentally overloaded by traditional to-do tools. It helps you clear
              mental clutter, organize what matters, and stay consistent without overwhelm.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3 text-sm font-medium">Brain Dump to clear next steps</div>
              <div className="rounded-2xl bg-[var(--surface-muted)] px-4 py-3 text-sm font-medium">Smart reminders with better timing</div>
              <div className="rounded-2xl bg-[#EEF5E8] px-4 py-3 text-sm font-medium dark:bg-[#33412B] dark:text-[#DBEED0]">Weekly Focus for intentional planning</div>
              <div className="rounded-2xl bg-[#EEF5E8] px-4 py-3 text-sm font-medium dark:bg-[#33412B] dark:text-[#DBEED0]">Circle for shared accountability</div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">Why Ginja exists</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Ginja started from a very familiar pattern: too many open tabs, too many reminders, and still ending the day
              feeling behind. The problem was never effort. The problem was trying to force clarity before there was any.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Instead of adding more pressure, Ginja was designed to meet people where they actually are in the moment:
              mentally full, juggling priorities, and unsure what to do first.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              The goal became simple and human. Create a calmer system that helps people start, stay clear, and keep moving
              without burnout.
            </p>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">What Ginja became</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Ginja became a system that does not expect clarity from you first. It starts with your thoughts as they are
              — messy, unfinished, and real — and helps turn them into clear next steps.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              Instead of adding more pressure, Ginja creates structure gently. Features like Brain Dump, shared plans through
              Circle, smart nudges, the to-do calendar view, and Strides all work together to help you stay clear, consistent,
              and supported in everyday life.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              For anyone who has ever felt mentally overloaded, behind, or unsure where to begin, Ginja was built to make
              starting feel lighter.
            </p>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6">
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-primary)] p-6 shadow-[0_10px_24px_rgba(36,31,24,0.06)]">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">How Ginja works</h2>
            <ol className="mt-6 space-y-3 text-sm sm:text-base">
              {flow.map((item, index) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ED8522] text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#DCE8D5] bg-[#F1F8EC] px-6 py-10 dark:border-[#4C6040] dark:bg-[#2E3E25] sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#4D7A47] dark:text-[#BBD89F]">Founder</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Built by Manuel</h2>
            <p className="mt-4 text-base leading-relaxed text-[#486047] dark:text-[#D0E3C1] sm:text-lg">
              Manuel created Ginja to solve a personal frustration: productivity tools that looked efficient on paper but felt
              overwhelming in real life.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#486047] dark:text-[#D0E3C1] sm:text-lg">
              The mission stayed clear from day one: build a calmer system people can trust, return to daily, and genuinely feel
              supported by.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#CFE0C5] bg-[var(--surface-primary)] px-4 py-3 dark:border-[#4C6040] dark:bg-[#36492B]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6A7E64] dark:text-[#BCD6AA]">Interests</p>
                <p className="mt-1 text-sm text-[#456043] dark:text-[#E1F0D6]">Human-centered product design</p>
              </div>
              <div className="rounded-2xl border border-[#CFE0C5] bg-[var(--surface-primary)] px-4 py-3 dark:border-[#4C6040] dark:bg-[#36492B]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6A7E64] dark:text-[#BCD6AA]">Interests</p>
                <p className="mt-1 text-sm text-[#456043] dark:text-[#E1F0D6]">Mental clarity and wellbeing routines</p>
              </div>
              <div className="rounded-2xl border border-[#CFE0C5] bg-[var(--surface-primary)] px-4 py-3 dark:border-[#4C6040] dark:bg-[#36492B]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6A7E64] dark:text-[#BCD6AA]">Interests</p>
                <p className="mt-1 text-sm text-[#456043] dark:text-[#E1F0D6]">AI and adaptive product experiences</p>
              </div>
              <div className="rounded-2xl border border-[#CFE0C5] bg-[var(--surface-primary)] px-4 py-3 dark:border-[#4C6040] dark:bg-[#36492B]">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6A7E64] dark:text-[#BCD6AA]">Interests</p>
                <p className="mt-1 text-sm text-[#456043] dark:text-[#E1F0D6]">Building tools people feel good using daily</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/Emmanuel-Onwubuya"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#C8DABA] bg-[var(--surface-primary)] px-5 py-2.5 text-sm font-semibold text-[#3E5B34] hover:border-[#A8C399] dark:border-[#4C6040] dark:bg-[#36492B] dark:text-[#E1F0D6]"
              >
                LinkedIn: Emmanuel Onwubuya
              </a>
              <a
                href="https://aixelar.io"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#C8DABA] bg-[var(--surface-primary)] px-5 py-2.5 text-sm font-semibold text-[#3E5B34] hover:border-[#A8C399] dark:border-[#4C6040] dark:bg-[#36492B] dark:text-[#E1F0D6]"
              >
                Reach out via AIXelar.io
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/support/"
                className="rounded-full border border-[#C8DABA] bg-[var(--surface-primary)] px-5 py-2.5 text-sm font-semibold text-[#3E5B34] dark:border-[#4C6040] dark:bg-[#36492B] dark:text-[#E1F0D6]"
              >
                Contact support
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface-primary)] px-6 py-10 text-center shadow-[0_14px_36px_rgba(30,26,20,0.08)] sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to try Ginja?</h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              See how Ginja helps turn mental overload into clear, actionable steps.
            </p>
            <div className="mt-6">
              <Link
                href="/download/"
                className="inline-flex rounded-full bg-[#ED8522] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_34px_rgba(237,133,34,0.24)] transition-colors duration-200 hover:bg-[#C94B16]"
              >
                Download Ginja
              </Link>
            </div>
            <p className="mt-3 text-sm font-medium text-[var(--text-muted)]">Free to start</p>
          </div>
        </section>
      </main>
    </>
  );
}
