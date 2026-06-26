import { credentials } from "@/data/credentials";
import { Award, GraduationCap } from "lucide-react";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="py-28 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <span className="text-teal-700 dark:text-teal-400 font-semibold text-sm uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Academic excellence and professional certifications ensuring the
            highest standards of specialist orthodontic care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl hover:border-teal-200 dark:hover:border-teal-800 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                <Award size={22} className="text-teal-700 dark:text-teal-400" />
              </div>

              <h3 className="font-bold text-lg text-slate-900 dark:text-white leading-snug">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm">
                {item.institution}
              </p>

              <span className="inline-block mt-5 px-3 py-1 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-full text-xs font-semibold">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
