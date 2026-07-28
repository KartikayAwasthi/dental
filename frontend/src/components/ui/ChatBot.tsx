"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, RotateCcw, Stethoscope } from "lucide-react";
import { DOCTOR_NAME, DOCTOR_PHONE_DISPLAY, DOCTOR_EMAIL } from "@/lib/constants";

type Msg = { from: "bot" | "user"; text: string };

type Intent = { a: string; keywords: string[] };

const INTENTS: Intent[] = [
  {
    a: "I treat cases involving fixed braces (metal & ceramic), clear aligners, root canal treatment, crowns & restorations, scaling/preventive care, and extractions (including for children). What are you looking to get done?",
    keywords: ["treatment", "treatments", "service", "services", "offer", "procedure", "procedures"],
  },
  {
    a: "Both are offered — traditional metal/ceramic braces or clear aligner therapy, depending on what suits your case best.",
    keywords: ["aligner", "aligners", "invisalign", "clear", "braces", "metal", "ceramic"],
  },
  {
    a: "Root canal treatment, crown preparation, and restorative work are all offered as part of general dentistry.",
    keywords: ["root", "canal", "rct", "crown", "crowns", "restoration", "restorative", "filling"],
  },
  {
    a: "Yes — patients of all ages are seen, with general dental care and pediatric procedures offered alongside orthodontic treatment.",
    keywords: ["child", "children", "kid", "kids", "pediatric", "paediatric", "baby", "teen"],
  },
  {
    a: `Easiest way is a call or WhatsApp on ${DOCTOR_PHONE_DISPLAY}, or use the appointment form right on this page.`,
    keywords: ["book", "appointment", "booking", "schedule", "consult", "consultation"],
  },
  {
    a: "Saraswati Dental Care, Goverdhan, and Shree Siyaram Multispeciality Dental Care, Mathura.",
    keywords: ["where", "location", "address", "clinic", "clinics", "city", "mathura", "goverdhan", "near"],
  },
  {
    a: "A check-up, diagnosis, and a treatment plan tailored to you, plus guidance on oral hygiene and preventive care.",
    keywords: ["first", "visit", "expect", "new", "examination", "checkup", "check-up"],
  },
  {
    a: "An appointment's recommended so you're not kept waiting, but same-day slots can often be arranged — just call or WhatsApp.",
    keywords: ["walk", "walkin", "walk-in", "same-day", "sameday", "required", "need"],
  },
  {
    a: `${DOCTOR_NAME} holds an MDS in Orthodontics & Dentofacial Orthopaedics (Atal Bihari Vajpayee Medical University, Lucknow) and a BDS (KD Dental College, Mathura).`,
    keywords: ["who", "qualification", "qualifications", "degree", "degrees", "mds", "bds", "experience", "orthodontist", "credential", "credentials", "qualified"],
  },
  {
    a: `Call or WhatsApp ${DOCTOR_PHONE_DISPLAY}, or email ${DOCTOR_EMAIL}.`,
    keywords: ["contact", "phone", "number", "email", "call", "reach"],
  },
  {
    a: "Costs depend on the treatment and case complexity — best to ask directly over a call or WhatsApp for accurate pricing.",
    keywords: ["cost", "costs", "price", "pricing", "fee", "fees", "charge", "charges", "expensive", "cheap"],
  },
];

const GREETINGS = ["hi", "hii", "hiii", "hello", "hey", "helo", "namaste"];
const THANKS = ["thanks", "thank", "thx", "ty"];
const BYES = ["bye", "goodbye", "cya", "gtg"];

const SUGGESTIONS = [
  "What treatments do you offer?",
  "How do I book an appointment?",
  "Where are the clinics located?",
];

const INIT: Msg = { from: "bot", text: "Hi! I'm Dr. Taruna's assistant. Ask me about treatments, booking, or clinic locations — or type your own question below." };

function normalize(s: string) {
  return s.toLowerCase().replace(/[^\w\s-]/g, "").trim();
}

function matchIntent(input: string): string {
  const norm = normalize(input);
  const words = norm.split(/\s+/).filter(Boolean);

  if (words.some(w => BYES.includes(w))) {
    return "Take care! Reach out anytime you need us. 🦷";
  }
  if (words.some(w => THANKS.includes(w))) {
    return "You're welcome! Anything else I can help with?";
  }
  if (words.some(w => GREETINGS.includes(w))) {
    return "Hello! 👋 How can I help — treatments, booking, or clinic locations?";
  }

  let best: Intent | null = null;
  let bestScore = 0;
  for (const intent of INTENTS) {
    const score = intent.keywords.filter(k => norm.includes(k)).length;
    if (score > bestScore) {
      bestScore = score;
      best = intent;
    }
  }
  if (best) return best.a;

  return `I don't have an exact answer for that — you can ask Dr. Taruna directly on WhatsApp, or call ${DOCTOR_PHONE_DISPLAY}.`;
}

export default function ChatBot() {
  const [open, setOpen]     = useState(false);
  const [msgs, setMsgs]     = useState<Msg[]>([INIT]);
  const [input, setInput]   = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef           = useRef<HTMLDivElement>(null);
  const timerRef            = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const respond = (userText: string) => {
    setMsgs(p => [...p, { from: "user", text: userText }]);
    setTyping(true);
    timerRef.current = setTimeout(() => {
      setTyping(false);
      setMsgs(p => [...p, { from: "bot", text: matchIntent(userText) }]);
    }, 550 + Math.random() * 500);
  };

  const send = () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    respond(text);
  };

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setTyping(false);
    setInput("");
    setMsgs([INIT]);
  };

  return (
    <>
      {/* Trigger */}
      <button onClick={() => setOpen(!open)} aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-xl flex items-center justify-center transition-colors">
        {open ? <X size={20} /> : <Stethoscope size={20} />}
      </button>

      {/* Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[360px] max-w-[calc(100vw-24px)] h-[520px] bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-white/8 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center">
                <Stethoscope size={15} className="text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-[#0d1117]" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-slate-900 dark:text-white">Dr. Taruna's Assistant</p>
                <p className="text-[11px] text-slate-400 dark:text-white/35">{typing ? "Typing…" : "Online · Patient enquiries"}</p>
              </div>
            </div>
            <button onClick={reset} aria-label="Reset conversation" className="text-slate-300 dark:text-white/20 hover:text-teal-500 transition-colors">
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

            {typing && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-white/5 px-4 py-3 rounded-2xl flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/40 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/40 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-white/40 animate-bounce" />
                </div>
              </div>
            )}

            {/* Quick suggestions on first open / after reset */}
            {msgs.length === 1 && !typing && (
              <div className="space-y-1.5 pt-1">
                {SUGGESTIONS.map(q => (
                  <button key={q} onClick={() => respond(q)}
                    className="w-full text-left text-[12px] text-slate-500 dark:text-white/40 hover:text-teal-600 dark:hover:text-teal-400 bg-slate-50 dark:bg-white/[0.03] hover:bg-teal-50 dark:hover:bg-teal-500/5 border border-slate-100 dark:border-white/5 px-3 py-2.5 rounded-xl transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") send(); }}
              placeholder="Type your question…"
              className="flex-1 min-w-0 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-[13px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/30 outline-none focus:border-teal-500 transition-colors"
            />
            <button onClick={send} disabled={!input.trim() || typing} aria-label="Send message"
              className="shrink-0 w-9 h-9 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:opacity-40 disabled:hover:bg-teal-600 text-white flex items-center justify-center transition-colors">
              <Send size={14} />
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4">
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
