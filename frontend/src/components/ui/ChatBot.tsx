"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, RotateCcw, Stethoscope, ArrowRight } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const FAQS = [
  { q: "What cases can I refer?",        a: "Crowding, spacing, skeletal jaw discrepancies, lingual orthodontics, complex aligners, surgical planning, and early paediatric cases." },
  { q: "How do I submit a referral?",    a: "Use the referral form on this page — under 3 minutes. Or call/WhatsApp +91 82184 66101 for urgent cases." },
  { q: "Will I receive a case report?",  a: "Yes — written diagnosis, treatment plan, and timeline shared with you after every consultation." },
  { q: "How fast is the response?",      a: "All referrals are responded to within 24 hours. Patient appointments within 3–7 working days." },
  { q: "Do you accept surgical cases?",  a: "Yes. Pre- and post-surgical orthodontic planning for orthognathic surgery is accepted." },
  { q: "Which cities are covered?",      a: "Mathura, Agra, Noida, Delhi, Gurgaon, and Etawah." },
];

const INIT: Msg = { from: "bot", text: "Hello Doctor. How can I help with a referral today?" };

export default function ChatBot() {
  const [open, setOpen]   = useState(false);
  const [msgs, setMsgs]   = useState<Msg[]>([INIT]);
  const bottomRef         = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const ask = (q: string, a: string) =>
    setMsgs(p => [...p, { from: "user", text: q }, { from: "bot", text: a }]);

  const reset = () => setMsgs([INIT]);

  return (
    <>
      {/* Trigger */}
      <button onClick={() => setOpen(!open)} aria-label="Open referral assistant"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-xl flex items-center justify-center transition-colors">
        {open ? <X size={20} /> : <Stethoscope size={20} />}
      </button>

      {/* Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[360px] max-w-[calc(100vw-24px)] h-[520px] bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-white/8 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                <Stethoscope size={15} className="text-white" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-900 dark:text-white">Dr. Taruna's Assistant</p>
                <p className="text-[11px] text-slate-400 dark:text-white/35">Referral enquiries</p>
              </div>
            </div>
            <button onClick={reset} aria-label="Reset" className="text-slate-300 dark:text-white/20 hover:text-teal-500 transition-colors">
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-[1.6] ${
                  m.from === "user"
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white/70"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick questions always after last bot message */}
            {msgs[msgs.length - 1]?.from === "bot" && (
              <div className="space-y-1.5 pt-1">
                {FAQS.map(({ q, a }) => (
                  <button key={q} onClick={() => ask(q, a)}
                    className="w-full text-left text-[12px] text-slate-500 dark:text-white/40 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-50 dark:bg-white/[0.03] hover:bg-teal-50 dark:hover:bg-teal-500/5 border border-slate-100 dark:border-white/5 px-3 py-2.5 rounded-xl transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-100 dark:border-white/5">
            <a href="https://wa.me/918218466101" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white text-[13px] font-semibold py-2.5 rounded-xl transition-colors">
              <Send size={13}/> WhatsApp Dr. Taruna
            </a>
          </div>
        </div>
      )}
    </>
  );
}
