import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";

const expertiseList = [
  "Metal & Ceramic Fixed Orthodontics",
  "Self-Ligating Bracket Systems",
  "Clear Aligner Therapy (Invisalign Certified)",
  "Lingual Orthodontics",
  "Functional & Orthopaedic Jaw Correction",
  "Surgical Orthodontic Planning",
  "Early Paediatric Intervention",
  "Adult Interdisciplinary Orthodontics",
];

export default function Expertise() {
  return (
    <section className="py-28 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/services/expertise.jpg"
              alt="Dr. Taruna — Orthodontic Expertise"
              width={620}
              height={680}
              className="rounded-[32px] shadow-xl object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Award size={20} className="text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">
                    AIIMS Delhi Certified
                  </p>
                  <p className="text-xs text-slate-500">Clear Aligner Specialist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-teal-700 dark:text-teal-400 font-semibold text-sm uppercase tracking-widest">
              Clinical Expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white leading-tight">
              Advanced Orthodontics
              Across All Age Groups
            </h2>

            <div className="section-divider mt-5 mb-7" />

            <p className="text-slate-600 dark:text-slate-300 leading-8">
              Dr. Taruna Pratap Singh specialises in the diagnosis, planning,
              and management of complex orthodontic presentations. Her practice
              combines evidence-based clinical protocols with modern digital
              orthodontic techniques to deliver predictable, high-quality
              outcomes for referred cases.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {expertiseList.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={16}
                    className="text-teal-600 mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#referral"
              className="inline-flex items-center gap-2 mt-10 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-md text-sm"
            >
              Refer a Complex Case
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
