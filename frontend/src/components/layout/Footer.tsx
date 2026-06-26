"use client";

import Link from "next/link";
import { m } from "@/lib/motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { DOCTOR_PHONE, DOCTOR_PHONE_DISPLAY, DOCTOR_EMAIL, DOCTOR_WHATSAPP } from "@/lib/constants";
import { fadeUp, stagger, viewportOpts } from "@/lib/animations";

const navLinks = [
  ["🩺 About",            "#about"     ],
  ["🦷 Cases Accepted",   "#services"  ],
  ["✅ Why Refer",        "#why"       ],
  ["📋 Referral Process", "#process"   ],
  ["🔬 Research",         "#research"  ],
  ["📸 Outcomes",         "#gallery"   ],
  ["❓ FAQs",             "#faqs"      ],
  ["📤 Send Referral",    "#referral"  ],
];

const credentials = [
  "🎓 MDS — Orthodontics · KGMU",
  "🎓 BDS — KGMU, Lucknow",
  "🏥 AIIMS Delhi Certified",
  "📋 UP Dental Council Reg. A23844",
  "🏅 Indian Orthodontic Society",
  "🌍 World Federation of Orthodontists",
];

export default function Footer() {
  return (
    <footer className="bg-[#03080f] text-white">

      {/* CTA band */}
      <div className="border-b border-white/5">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOpts}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-bold">📋 Ready to refer a case?</p>
            <p className="text-white/40 text-sm mt-1">Submit online — response within 24 hours ⚡</p>
          </div>
          <a href="#referral"
            className="shrink-0 flex items-center gap-2
              bg-teal-500 hover:bg-teal-400
              text-[#03080f] font-bold text-sm px-6 py-3.5 rounded-xl
              transition-colors shadow-lg shadow-teal-500/20">
            Send a Referral <ArrowRight size={14} />
          </a>
        </m.div>
      </div>

      {/* Main */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-[2fr_1fr_1fr] gap-12">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🦷</span>
            <p className="text-[15px] font-bold">Dr. Taruna Pratap Singh</p>
          </div>
          <p className="text-[10px] font-semibold text-teal-400 uppercase tracking-widest mt-1">
            MDS · Consultant Orthodontist
          </p>
          <p className="mt-5 text-sm text-white/35 leading-[1.8] max-w-xs">
            Specialist Orthodontic Consultant accepting referrals from dentists, physicians, and
            specialists across Uttar Pradesh and Delhi NCR.
          </p>
          <div className="mt-6 space-y-3">
            {[
              { emoji: "📱", val: DOCTOR_PHONE_DISPLAY, href: `tel:${DOCTOR_PHONE}` },
              { emoji: "📧", val: DOCTOR_EMAIL,         href: `mailto:${DOCTOR_EMAIL}` },
              { emoji: "📍", val: "Mathura, Uttar Pradesh", href: null },
            ].map(({ emoji, val, href }) => (
              <div key={val} className="flex items-center gap-2.5 text-[13px] text-white/40">
                <span>{emoji}</span>
                {href
                  ? <a href={href} className="hover:text-teal-400 transition-colors">{val}</a>
                  : <span>{val}</span>}
              </div>
            ))}
          </div>
          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[
              { href: DOCTOR_WHATSAPP, label: "💬 WhatsApp" },
              { href: "#",             label: "📷 Instagram" },
              { href: "#",             label: "👍 Facebook" },
            ].map(({ href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-white/5 hover:bg-teal-500/20 text-white/40 hover:text-teal-400 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[11px] font-bold text-white/25 uppercase tracking-widest mb-5">Navigation</p>
          <ul className="space-y-3">
            {navLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-[13px] text-white/40 hover:text-teal-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials */}
        <div>
          <p className="text-[11px] font-bold text-white/25 uppercase tracking-widest mb-5">Credentials</p>
          <ul className="space-y-3">
            {credentials.map(c => (
              <li key={c} className="text-[13px] text-white/40 leading-snug">{c}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/25">
            © 2026 Dr. Taruna Pratap Singh. All rights reserved. 🦷
          </p>
          <p className="text-[12px] text-white/20">
            UP Dental Council Reg. A23844 · IOS Member · WFO Member
          </p>
        </div>
      </div>

    </footer>
  );
}
