"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { BACKEND_URL } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

const caseTypes = [
  "Severe Crowding & Spacing",
  "Skeletal Jaw Discrepancy",
  "Lingual Orthodontics",
  "Complex Clear Aligner Case",
  "Surgical Orthodontic Planning",
  "Early Intervention (Paediatric)",
  "Functional Appliance Therapy",
  "Adult Comprehensive Orthodontics",
  "General Orthodontic Assessment",
];

const EMPTY = {
  referringDoctorName: "", qualification: "", clinicName: "",
  contactNumber: "", patientName: "", patientAge: "",
  caseType: "", caseDescription: "", preferredDate: "", city: "",
};

export default function ReferralForm() {
  const [form, setForm]     = useState(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg]       = useState("");

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(p => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res  = await fetch(`${BACKEND_URL}/api/referrals`, {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) { setStatus("success"); setMsg(data.message); setForm(EMPTY); }
      else                        { setStatus("error");   setMsg(data.message || "Something went wrong."); }
    } catch {
      setStatus("error");
      setMsg("Cannot reach the server. Please call +91 82184 66101 directly.");
    }
  };

  const cls = "form-input";

  return (
    <form onSubmit={submit} className="space-y-4">

      {/* Section: Doctor */}
      <p className="text-[11px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-widest">Referring Doctor</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <input required type="text" placeholder="Full Name *"
          value={form.referringDoctorName} onChange={set("referringDoctorName")} className={cls} />
        <input required type="text" placeholder="Qualification (e.g. BDS, MBBS) *"
          value={form.qualification} onChange={set("qualification")} className={cls} />
        <input required type="text" placeholder="Clinic / Hospital *"
          value={form.clinicName} onChange={set("clinicName")} className={cls} />
        <input required type="tel" placeholder="Contact Number *"
          value={form.contactNumber} onChange={set("contactNumber")} className={cls} />
      </div>

      {/* Section: Patient */}
      <p className="text-[11px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-widest pt-2">Patient (Optional)</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <input type="text" placeholder="Patient Name"
          value={form.patientName} onChange={set("patientName")} className={cls} />
        <input type="text" placeholder="Age"
          value={form.patientAge} onChange={set("patientAge")} className={cls} />
      </div>

      {/* Section: Case */}
      <p className="text-[11px] font-bold text-slate-400 dark:text-white/30 uppercase tracking-widest pt-2">Case Details</p>
      <select required value={form.caseType} onChange={set("caseType")} className={cls}>
        <option value="">Select Case Type *</option>
        {caseTypes.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <textarea required rows={3} placeholder="Chief complaint, clinical findings, previous treatment *"
        value={form.caseDescription} onChange={set("caseDescription")} className={cls} />
      <div className="grid sm:grid-cols-2 gap-3">
        <input type="date" placeholder="Preferred Date"
          value={form.preferredDate} onChange={set("preferredDate")} className={cls} />
        <select value={form.city} onChange={set("city")} className={cls}>
          <option value="">Patient City</option>
          {["Mathura","Agra","Noida","Delhi","Gurgaon","Etawah","Other"].map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Feedback */}
      {status === "success" && (
        <div className="flex gap-3 bg-teal-50 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 rounded-xl p-4">
          <CheckCircle2 size={16} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
          <p className="text-[13px] text-teal-800 dark:text-teal-300">{msg}</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex gap-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl p-4">
          <AlertCircle size={16} className="text-red-600 shrink-0 mt-0.5" />
          <p className="text-[13px] text-red-700 dark:text-red-300">{msg}</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-bold py-4 rounded-xl text-sm transition-colors">
        {status === "loading" ? (
          <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>Submitting…</>
        ) : (
          <><Send size={14}/>Submit Referral</>
        )}
      </button>

    </form>
  );
}
