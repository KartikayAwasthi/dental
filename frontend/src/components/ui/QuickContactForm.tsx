"use client";

import { Send } from "lucide-react";

export default function QuickContactForm() {
  const cls = "form-input";
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const fd  = new FormData(e.currentTarget);
        const txt = `*New Enquiry*\n\nFrom: ${fd.get("name")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone") || "—"}\n\n${fd.get("message")}`;
        window.open(`https://wa.me/918218466101?text=${encodeURIComponent(txt)}`, "_blank", "noopener,noreferrer");
      }}
      className="space-y-3"
    >
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name"  required type="text"  placeholder="Your Name *"    className={cls} />
        <input name="phone" type="tel"             placeholder="Phone Number"   className={cls} />
      </div>
      <input name="email" required type="email" placeholder="Email Address *" className={cls} />
      <textarea name="message" required rows={4}
        placeholder="Your question or message *" className={cls} />
      <button type="submit"
        className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-teal-600 dark:hover:bg-teal-400 font-semibold text-sm py-3.5 rounded-xl transition-colors">
        <Send size={13}/> Send via WhatsApp
      </button>
    </form>
  );
}
