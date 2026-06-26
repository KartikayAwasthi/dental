"use client";

import { m } from "@/lib/motion";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import QuickContactForm from "@/components/ui/QuickContactForm";
import { DOCTOR_PHONE, DOCTOR_PHONE_DISPLAY, DOCTOR_EMAIL, DOCTOR_WHATSAPP, SERVICE_CITIES } from "@/lib/constants";
import { slideLeft, slideRight, fadeUp, stagger, viewportOpts } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white dark:bg-[#09090b]">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left */}
          <m.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOpts}>

            <m.p variants={fadeUp} className="section-label">📞 Professional Enquiries</m.p>
            <m.h2 variants={fadeUp} className="section-heading mt-4">Get in touch</m.h2>
            <m.p variants={fadeUp}
              className="mt-5 text-[15px] text-slate-500 dark:text-white/45 leading-[1.75] max-w-sm">
              For case discussions, informal referral conversations, or general professional
              enquiries — use any of the channels below.
            </m.p>

            <m.div variants={stagger(0.08)} className="mt-10 space-y-5">
              {[
                { icon: Phone, emoji: "📱", label: "Phone / WhatsApp", value: DOCTOR_PHONE_DISPLAY, href: `tel:${DOCTOR_PHONE}` },
                { icon: Mail,  emoji: "📧", label: "Email",            value: DOCTOR_EMAIL,         href: `mailto:${DOCTOR_EMAIL}` },
                { icon: MapPin,emoji: "📍", label: "Base Clinic",      value: "Mathura, Uttar Pradesh, India", href: null },
              ].map(({ icon: Icon, emoji, label, value, href }) => (
                <m.div key={label} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl
                    bg-slate-50 dark:bg-white/5
                    border border-slate-100 dark:border-white/8
                    flex items-center justify-center shrink-0 text-lg">
                    {emoji}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-400 dark:text-white/30 uppercase tracking-wider">{label}</p>
                    {href
                      ? <a href={href}
                          className="text-[15px] font-semibold text-slate-800 dark:text-white
                            hover:text-teal-600 dark:hover:text-teal-400 transition-colors mt-0.5 block">
                          {value}
                        </a>
                      : <p className="text-[15px] font-semibold text-slate-800 dark:text-white mt-0.5">{value}</p>}
                  </div>
                </m.div>
              ))}
            </m.div>

            {/* City pills */}
            <m.div variants={fadeUp} className="mt-10">
              <p className="text-[11px] font-semibold text-slate-400 dark:text-white/30 uppercase tracking-wider mb-3">
                📍 Serving
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_CITIES.map(c => (
                  <span key={c}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-full
                      bg-teal-50 dark:bg-teal-400/10
                      text-teal-700 dark:text-teal-400
                      border border-teal-100 dark:border-teal-400/20">
                    {c}
                  </span>
                ))}
              </div>
            </m.div>

            <m.div variants={fadeUp}>
              <a href={DOCTOR_WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8
                  bg-[#25D366] hover:bg-[#1ebe5a]
                  text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm shadow-green-200 dark:shadow-none">
                <span>💬</span>
                WhatsApp Dr. Taruna
              </a>
            </m.div>
          </m.div>

          {/* Right — Quick form */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOpts}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-slate-50 dark:bg-white/[0.03]
              border border-slate-100 dark:border-white/5 rounded-3xl p-8">
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-1">✉️ Quick Message</h3>
            <p className="text-[13px] text-slate-400 dark:text-white/35 mb-7">
              For informal case discussions. Use the{" "}
              <a href="#referral" className="text-teal-600 underline">Referral Form</a>{" "}
              for formal patient referrals.
            </p>
            <QuickContactForm />
          </m.div>

        </div>
      </div>
    </section>
  );
}
