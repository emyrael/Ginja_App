import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, MessageCircle, MoreHorizontal, Send } from 'lucide-react';

const STAGE_DELAYS = [1300, 950, 900, 1900, 1250, 900, 2600, 1250, 900, 4600, 650];

function ChatBubble({ side = 'assistant', children, className = '' }) {
  const isUser = side === 'user';

  return (
    <motion.li
      initial={{ opacity: 0, y: 8, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[88%] rounded-[1.1rem] px-3 py-2.5 text-[11px] leading-[1.45] shadow-[0_5px_16px_rgba(46,37,29,0.06)] ${
          isUser
            ? 'rounded-br-[0.35rem] bg-[#DCF2D3] text-[#263820]'
            : 'rounded-bl-[0.35rem] border border-[#E9DED1] bg-white text-[#443A31]'
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
      exit={{ opacity: 0, y: -4 }}
      className="flex items-center gap-2 text-[9px] font-semibold text-[#8B8176]"
    >
      <span className="flex gap-1 rounded-full border border-[#E9DED1] bg-white px-3 py-2 shadow-sm" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-1.5 w-1.5 rounded-full bg-[#87B66A]"
            animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: dot * 0.16 }}
          />
        ))}
      </span>
      <span>{label}</span>
    </motion.li>
  );
}

export default function GinjaAssistanceChat({ conversation, phoneNote }) {
  const reduceMotion = useReducedMotion();
  const phoneRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(phoneRef, { amount: 0.35 });
  const [stage, setStage] = useState(reduceMotion ? 9 : 0);
  const visibleStage = reduceMotion ? 9 : stage;

  useEffect(() => {
    if (reduceMotion) {
      setStage(9);
      return undefined;
    }

    if (!isInView) return undefined;

    const timeout = window.setTimeout(() => {
      setStage((current) => (current >= 10 ? 0 : current + 1));
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

  const showAssistantTyping = visibleStage === 2 || visibleStage === 5 || visibleStage === 8;

  return (
    <div ref={phoneRef} className="relative mx-auto w-full max-w-[354px]" aria-label="Example Ginja Assistance conversation">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.8rem] border border-[#D8CCBE] bg-[#F3EEE5] p-[5px] shadow-[0_30px_76px_rgba(57,43,31,0.2)] dark:border-[#58483C] dark:bg-[#251E19]"
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#F8F5EF] dark:border-white/10">
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
              <span className="flex items-center gap-1 text-[9px] font-medium text-[#6F8064]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#87B66A]" />
                Available
              </span>
            </span>
            <MoreHorizontal className="h-4 w-4 text-[#8B8176]" aria-hidden="true" />
          </header>

          <div
            ref={scrollRef}
            className="h-[510px] overflow-y-auto bg-[radial-gradient(circle_at_20%_10%,rgba(237,133,34,0.07),transparent_28%),linear-gradient(180deg,#F8F5EF,#F3EEE6)] px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <p className="mb-3 text-center text-[8px] font-bold uppercase tracking-[0.14em] text-[#9B8F83]">Today</p>
            <motion.ol
              className="space-y-2.5"
              aria-live="off"
              animate={{ opacity: visibleStage === 10 ? 0 : 1 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
            >
              {visibleStage === 0 ? <TypingIndicator label="Typing a message…" /> : null}

              {visibleStage >= 1 ? <ChatBubble side="user">{conversation.firstRequest}</ChatBubble> : null}
              {visibleStage === 2 ? <TypingIndicator label="Ginja is typing…" /> : null}
              {visibleStage >= 3 ? (
                <>
                  <ChatBubble>{conversation.firstResponse}</ChatBubble>
                  <motion.li
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.38 }}
                    className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-[#BFD5AF] bg-[#EEF7E8] px-3 py-1.5 text-[9px] font-bold text-[#527342]"
                  >
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                    {conversation.confirmation}
                  </motion.li>
                </>
              ) : null}

              {visibleStage >= 4 ? <ChatBubble side="user">{conversation.scheduleRequest}</ChatBubble> : null}
              {visibleStage === 5 ? <TypingIndicator label="Ginja is checking your day…" /> : null}
              {visibleStage >= 6 ? (
                <ChatBubble className="w-[88%]">
                  <p className="font-bold text-[#302820]">{conversation.scheduleTitle}</p>
                  <div className="mt-2 space-y-1.5">
                    {conversation.tasks.map((task) => (
                      <div
                        key={task.title}
                        className={`flex items-center gap-2 rounded-xl border px-2 py-1.5 ${
                          task.created ? 'border-[#ED8522]/30 bg-[#FFF4E8]' : 'border-[#ECE3DA] bg-[#FAF8F4]'
                        }`}
                      >
                        <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${task.created ? 'border-[#ED8522] text-[#ED8522]' : 'border-[#CFC5BA] text-transparent'}`}>
                          <Check className="h-2.5 w-2.5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1 font-semibold">{task.title}</span>
                        <span className="shrink-0 text-[9px] font-bold text-[#796E63]">{task.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2.5 rounded-xl border border-[#BCD5AC] bg-[#EDF6E8] px-2.5 py-2 font-semibold text-[#4F7040]">
                    {conversation.eveningInsight}
                  </p>
                </ChatBubble>
              ) : null}

              {visibleStage >= 7 ? <ChatBubble side="user">{conversation.exploreRequest}</ChatBubble> : null}
              {visibleStage === 8 ? <TypingIndicator label="Ginja is finding ideas…" /> : null}
              {visibleStage >= 9 ? (
                <ChatBubble className="w-[88%]">
                  <p>{conversation.exploreResponse}</p>
                  <motion.span
                    animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 0 rgba(237,133,34,0)', '0 0 0 5px rgba(237,133,34,0.12)', '0 0 0 0 rgba(237,133,34,0)'] }}
                    transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2 }}
                    className="mt-2.5 flex items-center justify-between rounded-xl bg-[#ED8522] px-3 py-2 font-bold text-white"
                  >
                    {conversation.exploreAction}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </motion.span>
                </ChatBubble>
              ) : null}
              {showAssistantTyping ? null : <li className="h-px" aria-hidden="true" />}
            </motion.ol>
          </div>

          <div className="flex items-center gap-2 border-t border-[#E5DED3] bg-white px-3 py-2.5">
            <span className="flex-1 rounded-full border border-[#E2D9CF] bg-[#F8F5F0] px-3 py-2 text-[9px] text-[#9A9086]">Message Ginja…</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#87B66A] text-white">
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto -mt-3 flex w-[88%] items-center justify-center gap-2 rounded-full border border-[#E0D4C7] bg-[var(--surface-primary)] px-4 py-2.5 text-center text-[10px] font-semibold text-[var(--text-secondary)] shadow-[0_12px_28px_rgba(55,42,30,0.1)]">
        <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#87B66A]" aria-hidden="true" />
        {phoneNote}
      </div>
      <p className="sr-only">
        The example shows a report reminder becoming a task, tomorrow&apos;s schedule including that task, a free-evening insight, and a handoff to Explore.
      </p>
    </div>
  );
}
