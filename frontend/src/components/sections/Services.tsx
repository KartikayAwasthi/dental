"use client";

import { m } from "@/lib/motion";
import { ArrowUpRight } from "lucide-react";
import { referralCases } from "@/data/referralCases";
import { fadeUp, stagger, scaleIn, viewportOpts } from "@/lib/animations";

const tagStyle: Record<string, string> = {
  "Fixed Braces":   "bg-teal-50   text-teal-700   dark:bg-teal-400/10 dark:text-teal-300",
  "Clear Aligners": "bg-cyan-50   text-cyan-700   dark:bg-cyan-400/10 dark:text-cyan-300",
  "Endodontics":    "bg-blue-50   text-blue-700   dark:bg-blue-400/10 dark:text-blue-300",
  "Restorative":    "bg-amber-50  text-amber-700  dark:bg-amber-400/10 dark:text-amber-300",
  "Preventive":     "bg-green-50  text-green-700  dark:bg-green-400/10 dark:text-green-300",
  "Pediatric":      "bg-rose-50   text-rose-700   dark:bg-rose-400/10 dark:text-rose-300",
};

const caseEmoji: Record<string, string> = {
  "Fixed Braces":   "🦷",
  "Clear Aligners": "💎",
  "Endodontics":    "🩹",
  "Restorative":    "🦷",
  "Preventive":     "✨",
  "Pediatric":      "👶",
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50 dark:bg-[#0d1117]">
      <div className="container mx-auto px-6">

        <m.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <m.p variants={fadeUp} className="section-label">🦷 What We Treat</m.p>
            <m.h2 variants={fadeUp} className="section-heading mt-4">
              Services &<br/>Treatments
            </m.h2>
          </div>
          <m.p variants={fadeUp}
            className="text-[15px] text-slate-500 dark:text-white/45 max-w-sm leading-[1.7]">
            Comprehensive orthodontic and general dental care for patients of all ages.
          </m.p>
        </m.div>

        <m.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {referralCases.map((item) => (
            <m.a
              key={item.id}
              href="#referral"
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white dark:bg-white/[0.03]
                border border-slate-200 dark:border-white/8
                rounded-2xl p-6 flex flex-col
                hover:border-teal-400/50 dark:hover:border-teal-500/30
                hover:shadow-lg hover:shadow-teal-500/5
                transition-colors duration-300">

              <div className="flex items-center justify-between mb-5">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${tagStyle[item.tag] ?? "bg-slate-100 text-slate-600"}`}>
                  {item.tag}
                </span>
                <span className="text-xl">{caseEmoji[item.tag] ?? "🦷"}</span>
              </div>

              <h3 className="font-bold text-[15px] text-slate-900 dark:text-white leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-[13px] text-slate-500 dark:text-white/40 leading-[1.65] flex-1">
                {item.description}
              </p>

              <div className="flex items-center gap-1 mt-5 text-[12px] font-semibold text-teal-600 dark:text-teal-400
                opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                Book a consultation <ArrowUpRight size={12} />
              </div>
            </m.a>
          ))}
        </m.div>

        {/* Bottom strip */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-12 rounded-2xl bg-teal-600 dark:bg-teal-500/90 p-8
            flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-white text-lg">🤔 Not sure which treatment you need?</p>
            <p className="text-teal-100 text-sm mt-1">Contact Dr. Taruna to discuss your concern before booking.</p>
          </div>
          <a href="#referral"
            className="shrink-0 bg-white text-teal-700 font-bold text-sm px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors">
            Ask a Question
          </a>
        </m.div>

      </div>
    </section>
  );
}
