import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

function Card({ name, treatment, rating, review }: typeof testimonials[0]) {
  return (
    <div className="w-[340px] shrink-0 bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 rounded-2xl p-6 flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-[14px] text-slate-600 dark:text-white/55 leading-[1.75] flex-1 italic">
        &ldquo;{review}&rdquo;
      </p>
      <div className="mt-5 pt-5 border-t border-slate-100 dark:border-white/5">
        <p className="font-bold text-[14px] text-slate-900 dark:text-white">{name}</p>
        <p className="text-[12px] text-teal-600 dark:text-teal-400 mt-0.5">{treatment}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];
  return (
    <section id="testimonials" className="py-32 bg-white dark:bg-[#09090b] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <p className="section-label">Peer Reviews</p>
        <h2 className="section-heading mt-4">
          What referring<br/>doctors say
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#09090b] to-transparent z-10 pointer-events-none" />

        <div className="testimonial-track px-6">
          {doubled.map((t, i) => <Card key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
}
