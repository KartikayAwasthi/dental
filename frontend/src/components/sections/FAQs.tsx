"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { Plus, Minus } from "lucide-react";

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-32 bg-slate-50 dark:bg-[#0d1117]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[380px_1fr] gap-20">

          {/* Left */}
          <div className="lg:sticky lg:top-28 self-start">
            <p className="section-label">FAQs</p>
            <h2 className="section-heading mt-4">Your questions, answered</h2>
            <p className="mt-5 text-[15px] text-slate-500 dark:text-white/45 leading-[1.75]">
              Common questions from patients about treatments and appointments with Dr. Taruna.
            </p>
            <a href="#referral"
              className="inline-flex items-center gap-2 mt-8 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors">
              Book an Appointment
            </a>
          </div>

          {/* Right — Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i}
                className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/8 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
                  <span className="font-semibold text-[15px] text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-slate-100 dark:bg-white/8 flex items-center justify-center">
                    {open === i
                      ? <Minus size={12} className="text-teal-600" />
                      : <Plus  size={12} className="text-slate-500 dark:text-white/50" />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96" : "max-h-0"}`}>
                  <p className="px-6 pb-6 text-[14px] text-slate-500 dark:text-white/45 leading-[1.75]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
