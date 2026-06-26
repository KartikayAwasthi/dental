"use client";

import { m } from "@/lib/motion";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";

const points = [
  {
    num: "01",
    emoji: "📋",
    title: "Written Case Reports for Every Referral",
    body: "After every consultation, Dr. Taruna prepares and shares a full written summary — diagnosis, proposed treatment plan, appliance rationale, and timeline — directly with the referring doctor. Your patient stays your patient.",
  },
  {
    num: "02",
    emoji: "🎓",
    title: "Specialist, Not a Generalist",
    body: "MDS in Orthodontics & Dentofacial Orthopaedics from King George Medical University. Not a general dentist offering orthodontic services — a formally trained postgraduate specialist accepting complex cases that need specialist attention.",
  },
  {
    num: "03",
    emoji: "⚡",
    title: "24-Hour Referral Response Guarantee",
    body: "Every referral submitted via the form or WhatsApp is reviewed and responded to within 24 hours. Patient appointments are confirmed within 3–7 working days. No referral is left unacknowledged.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-32 bg-white dark:bg-[#09090b]">
      <div className="container mx-auto px-6">

        <m.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="max-w-xl mb-20">
          <m.p variants={fadeUp} className="section-label">🩺 Why Refer</m.p>
          <m.h2 variants={fadeUp} className="section-heading mt-4">
            What sets this referral<br/>partnership apart
          </m.h2>
        </m.div>

        <m.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="space-y-0 divide-y divide-slate-100 dark:divide-white/5">
          {points.map(({ num, emoji, title, body }) => (
            <m.div key={num}
              variants={fadeUp}
              className="group grid md:grid-cols-[80px_1fr_1fr] gap-6 py-10
                hover:bg-slate-50 dark:hover:bg-white/[0.02]
                -mx-6 px-6 transition-colors rounded-xl cursor-default">

              <div className="flex flex-col gap-1">
                <span className="text-[44px] font-black text-slate-100 dark:text-white/8 leading-none
                  group-hover:text-teal-100 dark:group-hover:text-teal-500/15 transition-colors select-none">
                  {num}
                </span>
                <span className="text-2xl">{emoji}</span>
              </div>

              <h3 className="text-[20px] font-bold text-slate-900 dark:text-white leading-snug pt-1 self-start">
                {title}
              </h3>

              <p className="text-[15px] text-slate-500 dark:text-white/45 leading-[1.75] pt-1 self-start">
                {body}
              </p>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
}
