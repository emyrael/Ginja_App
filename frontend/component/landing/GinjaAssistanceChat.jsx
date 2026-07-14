import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Send,
  Star,
} from 'lucide-react';

const FINAL_STAGE = 23;
const FADE_STAGE = 24;
const STAGE_DELAYS = [650, 950, 850, 550, 900, 750, 1050, 650, 800, 750, 850, 750, 600, 1600, 850, 1150, 1700, 1050, 1000, 900, 650, 1900, 900, 3500, 550];

function ChatBubble({ side = 'assistant', children, className = '' }) {
  const isUser = side === 'user';

  return (
    <motion.li
      initial={{ opacity: 0, y: 8, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      aria-label={`${isUser ? 'Alex' : 'Ginja'}: ${typeof children === 'string' ? children : 'Message with details'}`}
    >
      <div
        className={`max-w-[90%] rounded-[1.1rem] border px-3 py-2.5 text-[10.5px] leading-[1.45] shadow-[0_5px_16px_rgba(46,37,29,0.06)] ${
          isUser
            ? 'rounded-br-[0.35rem] border-[#ED8522]/22 bg-[#FFF1E8] text-[#5B321B]'
            : 'rounded-bl-[0.35rem] border-[#E9DED1] bg-white text-[#443A31]'
        } ${className}`}
      >
        {children}
      </div>
    </motion.li>
  );
}

function TypingIndicator({ label }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-[9px] font-semibold text-[#8B8176]"
    >
      <span className="flex gap-1 rounded-full border border-[#E9DED1] bg-white px-3 py-2 shadow-sm" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-1.5 w-1.5 rounded-full bg-[#ED8522]"
            animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: dot * 0.14 }}
          />
        ))}
      </span>
      <span>{label}</span>
    </motion.li>
  );
}

function PlanCard({ plan, added, onAdd }) {
  return (
    <div className="mt-2.5 overflow-hidden rounded-xl border border-[#E4D6C8] bg-[#FFFDF9]">
      <div className="border-b border-[#E9DED1] bg-[#FFF7ED] px-3 py-2">
        <p className="font-bold text-[#302820]">{plan.title}</p>
        <p className="mt-0.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#A26335]">Next Saturday · Dinner for two</p>
      </div>
      <ul className="space-y-1.5 px-3 py-2.5">
        {plan.tasks.map((task) => (
          <li key={task} className="flex items-start gap-2 text-[9.5px] leading-snug text-[#5D5147]">
            <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-[#ED8522]/45 text-[#ED8522]">
              <Check className="h-2 w-2" aria-hidden="true" />
            </span>
            {task}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onAdd}
        disabled={added}
        className={`m-2.5 mt-0 flex w-[calc(100%-1.25rem)] items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[9.5px] font-bold transition-colors ${
          added ? 'border border-[#BCD5AC] bg-[#EDF6E8] text-[#4F7040]' : 'bg-[#ED8522] text-white hover:bg-[#C94B16]'
        }`}
      >
        {added ? <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        {added ? plan.addedAction : plan.action}
      </button>
    </div>
  );
}

function ExploreCard({ recommendation }) {
  return (
    <div className="mt-2.5 overflow-hidden rounded-xl border border-[#D9CFC3] bg-[#FFFDF9] shadow-[0_8px_20px_rgba(52,42,33,0.06)]">
      <div className="h-12 bg-[radial-gradient(circle_at_75%_20%,rgba(237,133,34,0.28),transparent_26%),linear-gradient(135deg,#E9E2D8,#F8EBDD)] px-3 py-2">
        <span className="inline-flex rounded-full bg-white/85 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#A26335]">Explore nearby</span>
      </div>
      <div className="px-3 py-2.5">
        <p className="font-bold text-[#302820]">{recommendation.name}</p>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[8.5px] font-semibold text-[#74685D]">
          <span className="inline-flex items-center gap-1 text-[#A26335]"><Star className="h-2.5 w-2.5 fill-current" aria-hidden="true" />{recommendation.rating}</span>
          <span className="inline-flex items-center gap-1"><MapPin className="h-2.5 w-2.5" aria-hidden="true" />{recommendation.distance}</span>
        </div>
        <p className="mt-1.5 text-[9px] leading-snug text-[#665A50]">{recommendation.description}</p>
        <a
          href={recommendation.href}
          className="mt-2 flex items-center justify-between rounded-lg bg-[#ED8522] px-3 py-2 text-[9.5px] font-bold text-white transition-colors hover:bg-[#C94B16]"
          aria-label={`Open ${recommendation.name} in Ginja Explore`}
        >
          {recommendation.action}
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function TodayTasksCard({ conversation }) {
  return (
    <div className="mt-2.5 overflow-hidden rounded-xl border border-[#E4D6C8] bg-[#FFFDF9]">
      <div className="space-y-1.5 p-2.5">
        {conversation.todayTasks.map((task) => (
          <div key={task.number} className="flex items-center gap-2 rounded-lg border border-[#ECE3DA] bg-white px-2 py-1.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFF1E8] text-[8.5px] font-bold text-[#B65C1D]">{task.number}</span>
            <span className="min-w-0 flex-1 font-semibold text-[#443A31]">{task.title}</span>
            {task.status === 'overdue' ? (
              <span className="rounded-full bg-[#FFF0EC] px-1.5 py-0.5 text-[7.5px] font-bold uppercase text-[#C94B16]">Overdue</span>
            ) : null}
            {task.time ? <span className="inline-flex items-center gap-0.5 text-[8px] font-bold text-[#74685D]"><Clock3 className="h-2.5 w-2.5" aria-hidden="true" />{task.time}</span> : null}
          </div>
        ))}
      </div>
      <p className="border-t border-[#E9DED1] bg-[#FAF7F2] px-3 py-2 text-[8.5px] leading-snug text-[#6A5E53]">{conversation.taskInstructions}</p>
    </div>
  );
}

export default function GinjaAssistanceChat({ conversation, phoneNote }) {
  const reduceMotion = useReducedMotion();
  const phoneRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(phoneRef, { amount: 0.3 });
  const [stage, setStage] = useState(reduceMotion ? FINAL_STAGE : 0);
  const visibleStage = reduceMotion ? FINAL_STAGE : stage;

  useEffect(() => {
    if (reduceMotion) {
      setStage(FINAL_STAGE);
      return undefined;
    }

    if (!isInView) {
      setStage(0);
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setStage((current) => (current >= FADE_STAGE ? 0 : current + 1));
    }, STAGE_DELAYS[stage]);

    return () => window.clearTimeout(timeout);
  }, [isInView, reduceMotion, stage]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [reduceMotion, visibleStage]);

  const addPlan = () => setStage((current) => Math.max(current, 14));

  return (
    <div ref={phoneRef} className="relative mx-auto w-full max-w-[354px]" aria-label="Birthday planning example with Ginja Assistance">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.8rem] border border-[#D8CCBE] bg-[#F3EEE5] p-[5px] shadow-[0_30px_76px_rgba(57,43,31,0.2)]"
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#F8F5EF]">
          <div className="relative flex h-8 items-center justify-between px-6 pt-1 text-[9px] font-bold text-[#322A24]">
            <span>09:41</span>
            <span className="absolute left-1/2 top-0 h-[22px] w-[86px] -translate-x-1/2 rounded-b-[14px] bg-[#171411]" />
            <span className="tracking-[0.08em]">5G&nbsp; ●</span>
          </div>

          <header className="flex items-center gap-2.5 border-b border-[#E5DED3] bg-white/92 px-4 py-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ED8522] text-white shadow-[0_8px_18px_rgba(237,133,34,0.24)]">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[12px] font-bold text-[#2F2822]">Ginja Assistance</span>
              <span className="flex items-center gap-1 text-[9px] font-medium text-[#6F8064]"><span className="h-1.5 w-1.5 rounded-full bg-[#87B66A]" />Planning with Alex</span>
            </span>
            <MoreHorizontal className="h-4 w-4 text-[#8B8176]" aria-hidden="true" />
          </header>

          <div ref={scrollRef} className="h-[535px] overflow-y-auto bg-[radial-gradient(circle_at_20%_10%,rgba(237,133,34,0.07),transparent_28%),linear-gradient(180deg,#F8F5EF,#F3EEE6)] px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <p className="mb-3 text-center text-[8px] font-bold uppercase tracking-[0.14em] text-[#9B8F83]">Today</p>
            <motion.ol className="space-y-2.5" aria-live="off" animate={{ opacity: visibleStage === FADE_STAGE ? 0 : 1 }} transition={{ duration: 0.42, ease: 'easeInOut' }}>
              {visibleStage === 0 ? <TypingIndicator label="Ginja is typing…" /> : null}
              {visibleStage >= 1 ? <ChatBubble>{conversation.greeting}</ChatBubble> : null}
              {visibleStage >= 2 ? <ChatBubble side="user">{conversation.birthdayRequest}</ChatBubble> : null}
              {visibleStage === 3 ? <TypingIndicator label="Ginja is typing…" /> : null}
              {visibleStage >= 4 ? <ChatBubble>{conversation.birthdayQuestion}</ChatBubble> : null}
              {visibleStage >= 5 ? <ChatBubble side="user">{conversation.birthdayDate}</ChatBubble> : null}
              {visibleStage >= 6 ? <ChatBubble><p>{conversation.planTypeQuestion}</p><div className="mt-2 grid grid-cols-2 gap-1.5">{conversation.planOptions.map((option) => <span key={option.letter} className="rounded-lg border border-[#E9DED1] bg-[#FAF7F2] px-2 py-1.5"><strong className="mr-1 text-[#ED8522]">{option.letter}.</strong>{option.label}</span>)}</div></ChatBubble> : null}
              {visibleStage >= 7 ? <ChatBubble side="user">{conversation.planTypeReply}</ChatBubble> : null}
              {visibleStage >= 8 ? <ChatBubble>{conversation.peopleQuestion}</ChatBubble> : null}
              {visibleStage >= 9 ? <ChatBubble side="user">{conversation.peopleReply}</ChatBubble> : null}
              {visibleStage >= 10 ? <ChatBubble>{conversation.budgetQuestion}</ChatBubble> : null}
              {visibleStage >= 11 ? <ChatBubble side="user">{conversation.budgetReply}</ChatBubble> : null}
              {visibleStage === 12 ? <TypingIndicator label="Ginja is building your plan…" /> : null}
              {visibleStage >= 13 ? <ChatBubble className="w-[90%]"><p>{conversation.planIntro}</p><PlanCard plan={conversation.plan} added={visibleStage >= 14} onAdd={addPlan} /></ChatBubble> : null}
              {visibleStage >= 15 ? <ChatBubble>{conversation.planAdded}</ChatBubble> : null}
              {visibleStage >= 16 ? <ChatBubble className="w-[90%]"><p>{conversation.exploreIntro}</p><ExploreCard recommendation={conversation.explore} /></ChatBubble> : null}
              {visibleStage >= 17 ? <ChatBubble side="user">{conversation.reminderRequest}</ChatBubble> : null}
              {visibleStage >= 18 ? <ChatBubble>{conversation.reminderResponse}</ChatBubble> : null}
              {visibleStage >= 19 ? <ChatBubble side="user">{conversation.todayRequest}</ChatBubble> : null}
              {visibleStage === 20 ? <TypingIndicator label="Ginja is checking today…" /> : null}
              {visibleStage >= 21 ? <ChatBubble className="w-[90%]"><p>{conversation.todayIntro}</p><TodayTasksCard conversation={conversation} /></ChatBubble> : null}
              {visibleStage >= 22 ? <ChatBubble side="user">{conversation.completeRequest}</ChatBubble> : null}
              {visibleStage >= 23 ? <ChatBubble><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-[#6F9C58]" aria-hidden="true" />{conversation.completeResponse}</span></ChatBubble> : null}
            </motion.ol>
          </div>

          <div className="flex items-center gap-2 border-t border-[#E5DED3] bg-white px-3 py-2.5">
            <span className="flex-1 rounded-full border border-[#E2D9CF] bg-[#F8F5F0] px-3 py-2 text-[9px] text-[#9A9086]">Message Ginja…</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#87B66A] text-white"><Send className="h-3.5 w-3.5" aria-hidden="true" /></span>
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto -mt-3 flex w-[88%] items-center justify-center gap-2 rounded-full border border-[#E0D4C7] bg-[var(--surface-primary)] px-4 py-2.5 text-center text-[10px] font-semibold text-[var(--text-secondary)] shadow-[0_12px_28px_rgba(55,42,30,0.1)]">
        <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#87B66A]" aria-hidden="true" />
        {phoneNote}
      </div>
      <p className="sr-only">Alex plans a birthday dinner, adds the plan to Ginja, opens a nearby restaurant in Explore, creates a flower reminder, reviews today&apos;s tasks, and marks task two complete.</p>
    </div>
  );
}
