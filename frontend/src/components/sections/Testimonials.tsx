import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

const avatarColors = [
  "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
  "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
  "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
];

function Card({ name, treatment, rating, review, colorClass }: typeof testimonials[0] & { colorClass: string }) {
  return (
    <div className="w-[340px] shrink-0 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 rounded-2xl p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${colorClass}`}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[14px] text-slate-900 dark:text-white leading-snug">{name}</p>
          <p className="text-[12px] text-teal-600 dark:text-teal-400">{treatment}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-[14px] text-slate-600 dark:text-white/55 leading-[1.75] flex-1">
        &ldquo;{review}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="py-32 bg-white dark:bg-[#09090b] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <p className="section-label">🌟 Patient Stories</p>
        <h2 className="section-heading mt-4">
          What patients<br/>say
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="testimonial-track px-6">
          {doubled.map((t, i) => <Card key={i} {...t} colorClass={avatarColors[i % testimonials.length]} />)}
        </div>
      </div>
    </section>
  );
}
