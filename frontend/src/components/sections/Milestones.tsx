"use client";

import { m } from "@/lib/motion";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";

const milestones = [
  {
    label: "Education",
    title: "BDS — Bachelor of Dental Surgery",
    body: "KD Dental College, Mathura",
  },
  {
    label: "Education",
    title: "MDS — Orthodontics & Dentofacial Orthopaedics",
    body: "Atal Bihari Vajpayee Medical University, Lucknow",
  },
  {
    label: "Training",
    title: "Mastering Clear Aligners",
    body: "Advanced Orthodontic Practice course, AIIMS Delhi",
  },
  {
    label: "Training",
    title: "Clinical Application of Lasers in Dentistry",
    body: "Certificate course",
  },
  {
    label: "Training",
    title: "Max Emergency Life Support Course",
    body: "Certificate course",
  },
  {
    label: "Recognition",
    title: "National Conference Presentation",
    body: "\"Evaluation of Enamel Surface Roughness\" — Rajahmundry, Andhra Pradesh",
  },
  {
    label: "Recognition",
    title: "Published Research",
    body: "Asian Journal of Dental Sciences",
  },
  {
    label: "Nov 2022",
    title: "Joined Clinical Practice",
    body: "Saraswati Dental Care, Goverdhan & Shree Siyaram Multispeciality Dental Care, Mathura",
  },
];

export default function Milestones() {
  return (
    <section className="py-32 bg-slate-900 dark:bg-[#06111f]">
      <div className="container mx-auto px-6">

        <m.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="text-center mb-16">
          <m.p variants={fadeUp} className="section-label justify-center" style={{ color: "#5eead4" }}>
            The Journey So Far
          </m.p>
          <m.h2 variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Milestones
          </m.h2>
        </m.div>

        <m.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {milestones.map((m_, i) => (
            <m.div key={i}
              variants={fadeUp}
              className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-teal-500/30 transition-colors">
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-widest">
                {m_.label}
              </span>
              <h3 className="mt-3 text-[15px] font-bold text-white leading-snug">
                {m_.title}
              </h3>
              <p className="mt-2 text-[13px] text-white/45 leading-[1.65]">
                {m_.body}
              </p>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
}
