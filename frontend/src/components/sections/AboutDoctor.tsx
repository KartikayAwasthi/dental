"use client";

import Image from "next/image";
import { m } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { slideLeft, slideRight, fadeUp, stagger, viewportOpts } from "@/lib/animations";

const aboutStats = [
  { end: 3, suffix: "+", label: "Years in Practice" },
  { end: 6, suffix: "+", label: "Core Treatment Skills" },
];

const credentials = [
  { emoji: "🎓", degree: "MDS — Orthodontics & Dentofacial Orthopaedics", inst: "Atal Bihari Vajpayee Medical University, Lucknow" },
  { emoji: "🎓", degree: "BDS — Bachelor of Dental Surgery",              inst: "KD Dental College, Mathura" },
  { emoji: "🏥", degree: "Mastering Clear Aligners — Certified Course",   inst: "AIIMS Delhi" },
  { emoji: "💡", degree: "Clinical Application of Lasers in Dentistry",   inst: "Certificate Course" },
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
                src="/images/doctor/doctor-about.jpeg"
                alt="Dr. Taruna Pratap Singh"
                width={580}
                height={700}
                className="w-full h-full scale-110 object-cover object-[center_18%]"
              />
            </div>

            {/* Circular seal badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOpts}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 left-6 w-28 h-28 rounded-full
                bg-teal-600 text-white shadow-xl shadow-teal-200/50 dark:shadow-none
                ring-4 ring-white dark:ring-[#09090b]
                flex flex-col items-center justify-center text-center px-2">
              <span className="text-xl leading-none">🦷</span>
              <p className="text-[10px] font-bold uppercase tracking-wide mt-1 leading-tight">Practising<br/>Since</p>
              <p className="text-sm font-black leading-none mt-0.5">Nov 2022</p>
            </m.div>
          </m.div>

          {/* Content column */}
          <m.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}
            className="pt-4">

            <m.p variants={fadeUp} className="section-label">🩺 About the Doctor</m.p>

            <m.h2 variants={fadeUp} className="section-heading mt-4">
              Dr. Taruna Pratap Singh
            </m.h2>

            <m.p variants={fadeUp}
              className="mt-6 text-[16px] leading-[1.8] text-slate-500 dark:text-white/55">
              Dr. Taruna is a motivated and dedicated dental professional holding an MDS in
              Orthodontics and Dentofacial Orthopaedics from Atal Bihari Vajpayee Medical
              University, Lucknow, and a BDS from KD Dental College, Mathura. She practises at
              Saraswati Dental Care, Goverdhan, and Shree Siyaram Multispeciality Dental Care,
              Mathura.
            </m.p>
            <m.p variants={fadeUp}
              className="mt-4 text-[16px] leading-[1.8] text-slate-500 dark:text-white/55">
              Her practice combines comprehensive general dentistry — examinations, diagnosis,
              treatment planning, restorations, root canal treatment, extractions, and scaling —
              with orthodontic treatment, working alongside senior consultants to provide
              evidence-based, patient-centred care.
            </m.p>

            {/* Stat counters */}
            <m.div variants={fadeUp} className="mt-8 flex gap-10">
              {aboutStats.map(({ end, suffix, label }) => (
                <div key={label}>
                  <p className="text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                    <AnimatedCounter end={end} suffix={suffix} />
                  </p>
                  <p className="text-[12px] text-slate-500 dark:text-white/40 mt-1 font-medium">{label}</p>
                </div>
              ))}
            </m.div>

            {/* Credentials */}
            <m.div variants={stagger(0.08)} className="mt-10 space-y-4">
              {credentials.map(({ emoji, degree, inst }) => (
                <m.div key={degree} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="shrink-0 flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm">{emoji}</span>
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
                📅 Book an Appointment
                <ArrowRight size={14} />
              </a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
