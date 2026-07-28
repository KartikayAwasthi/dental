"use client";

import { m } from "@/lib/motion";
import { Phone, Mail, MapPin } from "lucide-react";
import AppointmentForm from "@/components/ui/AppointmentForm";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";
import { DOCTOR_PHONE, DOCTOR_PHONE_DISPLAY, DOCTOR_EMAIL } from "@/lib/constants";

const features = [
  { icon: "📅", text: "Convenient appointment scheduling" },
  { icon: "🦷", text: "Comprehensive dental & orthodontic care" },
  { icon: "📝", text: "Clear diagnosis & treatment plan" },
  { icon: "💬", text: "Direct confirmation via WhatsApp" },
];

export default function ReferralSection() {
  return (
    <section id="referral" className="py-32 bg-slate-900 dark:bg-[#06111f]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_560px] gap-20 items-start">

          {/* Left */}
          <m.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}>

            <m.p variants={fadeUp} className="section-label" style={{ color: "#5eead4" }}>
              Book an Appointment
            </m.p>

            <m.h2 variants={fadeUp}
              className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Visit<br/>
              <span className="teal-text">Dr. Taruna 🦷</span>
            </m.h2>

            <m.p variants={fadeUp}
              className="mt-5 text-white/45 text-[15px] leading-[1.75] max-w-sm">
              Fill in the form to request an appointment at Saraswati Dental Care, Goverdhan,
              or Shree Siyaram Multispeciality Dental Care, Mathura.
            </m.p>

            <m.ul variants={stagger(0.08)} className="mt-8 space-y-3">
              {features.map(({ icon, text }) => (
                <m.li key={text} variants={fadeUp} className="flex items-center gap-3">
                  <span className="text-lg">{icon}</span>
                  <span className="text-[14px] text-white/55">{text}</span>
                </m.li>
              ))}
            </m.ul>

            <m.div variants={fadeUp} className="mt-12 pt-8 border-t border-white/8 space-y-4">
              <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest">Or contact directly</p>
              {[
                { icon: Phone, val: DOCTOR_PHONE_DISPLAY, href: `tel:${DOCTOR_PHONE}` },
                { icon: Mail,  val: DOCTOR_EMAIL,          href: `mailto:${DOCTOR_EMAIL}` },
                { icon: MapPin,val: "Mathura, Uttar Pradesh", href: null },
              ].map(({ icon: Icon, val, href }) => (
                <div key={val} className="flex items-center gap-3">
                  <Icon size={14} className="text-teal-400 shrink-0" />
                  {href
                    ? <a href={href} className="text-[14px] text-white/55 hover:text-teal-300 transition-colors">{val}</a>
                    : <span className="text-[14px] text-white/55">{val}</span>}
                </div>
              ))}
            </m.div>
          </m.div>

          {/* Right — Form */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
            <AppointmentForm />
          </m.div>

        </div>
      </div>
    </section>
  );
}
