"use client";

import { m } from "@/lib/motion";
import { Send, Clock, CalendarCheck, FileText } from "lucide-react";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";

const steps = [
  {
    icon: Send,
    emoji: "💬",
    step: "Step 01",
    title: "Reach Out",
    body: "Call, WhatsApp, or fill in the appointment form with your name, concern, and preferred timing.",
    color: "teal",
  },
  {
    icon: Clock,
    emoji: "⏱️",
    step: "Step 02",
    title: "Confirm a Slot",
    body: "Dr. Taruna or the clinic team gets back to you to confirm a convenient appointment slot.",
    color: "cyan",
  },
  {
    icon: CalendarCheck,
    emoji: "🗓️",
    step: "Step 03",
    title: "Clinic Visit",
    body: "Attend your consultation at Saraswati Dental Care, Goverdhan, or Shree Siyaram Multispeciality Dental Care, Mathura.",
    color: "emerald",
  },
  {
    icon: FileText,
    emoji: "📄",
    step: "Step 04",
    title: "Diagnosis & Treatment Plan",
    body: "Receive a clear diagnosis and treatment plan, with guidance on oral hygiene and preventive care.",
    color: "teal",
  },
];

export default function Availability() {
  return (
    <section id="process"
      className="py-32 bg-slate-900 dark:bg-[#06111f]">
      <div className="container mx-auto px-6">

        <m.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="text-center mb-20">
          <m.p variants={fadeUp} className="section-label justify-center"
            style={{ color: "#5eead4" }}>
            How It Works
          </m.p>
          <m.h2 variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            How to Book an Appointment 📅
          </m.h2>
          <m.p variants={fadeUp}
            className="mt-4 text-white/45 text-[15px] max-w-lg mx-auto leading-[1.75]">
            Four simple steps from your first message to your treatment plan.
          </m.p>
        </m.div>

        <m.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOpts}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon: Icon, emoji, step, title, body }, i) => (
            <m.div
              key={step}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-white/[0.04] border border-white/8 rounded-2xl p-7
                hover:bg-white/[0.08] hover:border-teal-500/30 transition-colors group cursor-default">

              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-full w-full h-px
                  bg-gradient-to-r from-white/10 to-transparent z-10" />
              )}

              {/* Icon bubble */}
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/20
                flex items-center justify-center mb-5 group-hover:bg-teal-500/25 transition-colors">
                <span className="text-2xl">{emoji}</span>
              </div>

              <p className="text-[11px] font-bold text-teal-400 uppercase tracking-widest mb-2">{step}</p>
              <h3 className="font-bold text-[16px] text-white mb-3 leading-snug">{title}</h3>
              <p className="text-[13px] text-white/45 leading-[1.65]">{body}</p>
            </m.div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-14 text-center">
          <a href="#referral"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400
              text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors text-sm shadow-lg shadow-teal-500/20">
            Book Your Appointment
            <Send size={14} />
          </a>
        </m.div>

      </div>
    </section>
  );
}
