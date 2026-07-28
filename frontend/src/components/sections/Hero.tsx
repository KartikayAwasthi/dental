"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { m } from "@/lib/motion";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";

const stats = [
  { end: 3, suffix: "+", label: "Years in Practice",     icon: "🏅" },
  { end: 2, suffix: "",  label: "Practice Locations",     icon: "🏥" },
  { end: 6, suffix: "+", label: "Core Treatment Skills",  icon: "🦷" },
  { end: 1, suffix: "",  label: "Published Research",     icon: "🔬" },
];

export default function Hero() {
  // Gate animations to client-only render.
  // SSR and initial client frame both use "hidden" → no attribute mismatch.
  // Framer Motion v12 uses CSS custom properties on client which differ from
  // server-rendered inline transform strings — this prevents that divergence.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden
        bg-slate-50 dark:bg-[#06111f]">

      {/* Light mode: subtle teal mesh */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-100/60 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-100/50 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ccfbf1_0%,_transparent_60%)] opacity-40" />
      </div>

      {/* Dark mode: teal glow */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-500/8 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-16 relative">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 items-center">

          {/* ── LEFT ── */}
          <m.div
            variants={stagger(0.12)}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {/* Badge */}
            <m.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                border border-teal-200 bg-teal-50/80 dark:border-teal-500/25 dark:bg-teal-500/8 mb-8">
                <span className="text-base">🩺</span>
                <span className="text-[12px] font-semibold text-teal-700 dark:text-teal-300 tracking-wide">
                  Orthodontics & General Dentistry
                </span>
              </div>
            </m.div>

            {/* Headline */}
            <m.h1 variants={fadeUp}
              className="text-5xl md:text-6xl xl:text-[68px] font-extrabold leading-[1.05] tracking-[-0.03em]
                text-slate-900 dark:text-white">
              Expert
              <br />
              <span className="teal-text">Dental & Orthodontic</span>
              <br />
              Care in Mathura
            </m.h1>

            <m.p variants={fadeUp}
              className="mt-6 text-[17px] leading-[1.8] text-slate-600 dark:text-white/55 max-w-lg">
              Dr. Taruna Pratap Singh <span className="font-semibold text-slate-800 dark:text-white/80">(MDS Orthodontics & Dentofacial Orthopaedics)</span> provides
              comprehensive dental and orthodontic care at Saraswati Dental Care, Goverdhan, and
              Shree Siyaram Multispeciality Dental Care, Mathura.
            </m.p>

            {/* CTAs */}
            <m.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
              <a href="#referral"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700
                  dark:bg-teal-500 dark:hover:bg-teal-400
                  text-white dark:text-[#06111f]
                  font-bold px-6 py-3.5 rounded-xl text-sm shadow-sm shadow-teal-200 dark:shadow-none
                  transition-colors duration-200">
                📅 Book an Appointment
                <ArrowRight size={15} />
              </a>
              <a href="tel:+918218466101"
                className="flex items-center gap-2
                  border border-slate-300 dark:border-white/15
                  hover:border-teal-400 dark:hover:border-white/30
                  text-slate-700 dark:text-white/80
                  hover:text-teal-700 dark:hover:text-white
                  bg-white dark:bg-transparent
                  px-6 py-3.5 rounded-xl text-sm font-medium transition-all duration-200">
                <Phone size={14} />
                +91 82184 66101
              </a>
            </m.div>

            {/* Stats */}
            <m.div variants={fadeUp}
              className="mt-14 pt-10 border-t border-slate-200 dark:border-white/8
                grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ end, suffix, label, icon }) => (
                <div key={label}>
                  <div className="flex items-baseline gap-1.5">
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                      <AnimatedCounter end={end} suffix={suffix} />
                    </p>
                    <span className="text-lg">{icon}</span>
                  </div>
                  <p className="text-[12px] text-slate-500 dark:text-white/40 mt-1 font-medium">{label}</p>
                </div>
              ))}
            </m.div>

            {/* Practice locations */}
            <m.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-medium px-3 py-1.5 rounded-full
                bg-teal-50 dark:bg-teal-400/10 text-teal-700 dark:text-teal-400
                border border-teal-100 dark:border-teal-400/20">
                🏥 Saraswati Dental Care, Goverdhan
              </span>
              <span className="text-[12px] font-medium px-3 py-1.5 rounded-full
                bg-teal-50 dark:bg-teal-400/10 text-teal-700 dark:text-teal-400
                border border-teal-100 dark:border-teal-400/20">
                🏥 Shree Siyaram Multispeciality Dental Care, Mathura
              </span>
            </m.div>
          </m.div>

          {/* ── RIGHT — Doctor photo ── */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={mounted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative hidden lg:block">

            {/* Photo frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-none
              ring-1 ring-slate-200 dark:ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-t
                from-slate-50 dark:from-[#06111f]
                via-transparent to-transparent z-10" />
              <Image
                src="/images/doctor/doctor.jpeg"
                alt="Dr. Taruna Pratap Singh — Consultant Orthodontist"
                width={480}
                height={620}
                priority
                className="w-full object-cover object-top"
              />
            </div>

            {/* Floating credential card */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-6 z-20
                bg-white dark:bg-white/[0.07]
                shadow-xl dark:shadow-none
                border border-slate-100 dark:border-white/10
                backdrop-blur-xl rounded-2xl p-5 max-w-[240px]">
              <p className="text-[11px] text-teal-600 dark:text-teal-400 font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                🎓 Qualifications
              </p>
              {[
                "MDS — Orthodontics, ABVMU Lucknow",
                "BDS · KD Dental College, Mathura",
                "AIIMS Delhi Certified",
              ].map(c => (
                <p key={c} className="text-[12px] text-slate-700 dark:text-white/70 leading-relaxed">{c}</p>
              ))}
            </m.div>

            {/* Specialty badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-6 -right-4 z-20 bg-teal-500 rounded-2xl px-4 py-3 shadow-xl shadow-teal-200/50 dark:shadow-none">
              <p className="text-[10px] text-teal-950 font-bold uppercase tracking-wider">Specialty</p>
              <p className="text-xl font-black text-teal-950 leading-none mt-0.5">Ortho 🦷</p>
            </m.div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
