"use client";

import { m } from "@/lib/motion";
import { ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";

export default function Research() {
  return (
    <section id="research" className="py-32 bg-white dark:bg-[#09090b]">
      <div className="container mx-auto px-6">

        <m.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <m.p variants={fadeUp} className="section-label">🔬 Academic Work</m.p>
            <m.h2 variants={fadeUp} className="section-heading mt-4">
              Research &<br/>Publications
            </m.h2>
          </div>
          <m.p variants={fadeUp}
            className="text-[15px] text-slate-500 dark:text-white/45 max-w-sm leading-[1.7]">
            Published research and conference contributions in orthodontic science.
          </m.p>
        </m.div>

        <m.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="space-y-px">
          {publications.map((paper, i) => (
            <m.div key={paper.id}
              variants={fadeUp}
              className="group grid sm:grid-cols-[60px_1fr_auto] gap-x-6 items-center py-7
                border-b border-slate-100 dark:border-white/5
                hover:bg-slate-50 dark:hover:bg-white/[0.02]
                -mx-4 px-4 rounded-xl transition-colors">

              <span className="text-[36px] font-black text-slate-100 dark:text-white/6 leading-none select-none
                group-hover:text-teal-100 dark:group-hover:text-teal-500/10 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-semibold text-[16px] text-slate-900 dark:text-white leading-snug">
                  {paper.title}
                </h3>
                <p className="text-[13px] text-slate-400 dark:text-white/35 mt-1">
                  📖 {paper.journal}
                </p>
              </div>

              <div className="flex items-center gap-4 justify-end">
                <span className="text-[12px] font-bold bg-teal-50 dark:bg-teal-400/10 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full whitespace-nowrap">
                  {paper.type}
                </span>
                <m.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                  <ExternalLink size={14} className="text-slate-300 dark:text-white/20 group-hover:text-teal-500 transition-colors shrink-0" />
                </m.div>
              </div>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
}
