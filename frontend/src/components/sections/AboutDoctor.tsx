"use client";

import Image from "next/image";
import { m } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { slideLeft, slideRight, fadeUp, stagger, viewportOpts } from "@/lib/animations";

const credentials = [
  { year: "2012", emoji: "🎓", degree: "MDS — Orthodontics & Dentofacial Orthopaedics", inst: "King George Medical University, Lucknow" },
  { year: "2008", emoji: "🎓", degree: "BDS — Bachelor of Dental Surgery",              inst: "King George Medical University, Lucknow" },
  { year: "2018", emoji: "🏥", degree: "Mastering Clear Aligners — Certified Course",   inst: "AIIMS Delhi" },
  { year: "2018", emoji: "✅", degree: "Certified Invisalign Provider",                 inst: "Align Technology" },
  { year: "2015", emoji: "🏅", degree: "Life Member",                                   inst: "Indian Orthodontic Society" },
  { year: "2016", emoji: "🌍", degree: "Member",                                        inst: "World Federation of Orthodontists" },
];

export default function AboutDoctor() {
  return (
    <section id="about" className="py-32 bg-white dark:bg-[#09090b]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Image column */}
          <m.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="relative">
            <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-white/5 ring-1 ring-slate-200 dark:ring-white/5 shadow-xl dark:shadow-none">
              <Image
                src="/images/doctor/doctor.jpeg"
                alt="Dr. Taruna Pratap Singh"
                width={580}
                height={700}
                className="w-full object-cover object-top"
              />
            </div>

            {/* Registration badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOpts}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 right-6 bg-teal-600 text-white rounded-2xl px-5 py-4 shadow-xl shadow-teal-200/50 dark:shadow-none">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal-100">🏥 UP Dental Council</p>
              <p className="text-xl font-black mt-0.5">Reg. A23844</p>
            </m.div>
          </m.div>

          {/* Content column */}
          <m.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="pt-4">

            <m.p variants={fadeUp} className="section-label">🩺 About the Consultant</m.p>

            <m.h2 variants={fadeUp} className="section-heading mt-4">
              Dr. Taruna Pratap Singh
            </m.h2>

            <m.p variants={fadeUp}
              className="mt-6 text-[16px] leading-[1.8] text-slate-500 dark:text-white/55">
              Dr. Taruna is a specialist Consultant Orthodontist and Dentofacial Orthopaedist
              with postgraduate training from King George Medical University, Lucknow. She
              practises in Mathura and accepts orthodontic referrals from across Uttar Pradesh
              and Delhi NCR.
            </m.p>
            <m.p variants={fadeUp}
              className="mt-4 text-[16px] leading-[1.8] text-slate-500 dark:text-white/55">
              Her referral practice focuses on complex and specialised cases — skeletal jaw
              discrepancies, lingual orthodontics, clear aligner cases beyond routine
              alignment, pre-surgical orthodontic planning, and early paediatric intervention.
              A comprehensive written case report is returned to the referring doctor after
              every consultation.
            </m.p>

            {/* Credentials */}
            <m.div variants={stagger(0.08)} className="mt-10 space-y-4">
              {credentials.map(({ year, emoji, degree, inst }) => (
                <m.div key={degree} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="shrink-0 flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm">{emoji}</span>
                    <span className="text-[11px] font-bold text-teal-600 bg-teal-50 dark:bg-teal-500/10 dark:text-teal-400 px-2 py-0.5 rounded-md">
                      {year}
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-slate-900 dark:text-white leading-snug">{degree}</p>
                    <p className="text-[13px] text-slate-400 dark:text-white/40 mt-0.5">{inst}</p>
                  </div>
                </m.div>
              ))}
            </m.div>

            <m.div variants={fadeUp}>
              <a href="#referral"
                className="inline-flex items-center gap-2 mt-10
                  bg-slate-900 dark:bg-white
                  text-white dark:text-slate-900
                  hover:bg-teal-600 dark:hover:bg-teal-400
                  font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200">
                📋 Send a Referral
                <ArrowRight size={14} />
              </a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
