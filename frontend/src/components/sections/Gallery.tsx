"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { treatmentCases } from "@/data/cases";

export default function Gallery() {
  const [sel, setSel] = useState<{ image: string; title: string } | null>(null);

  return (
    <>
      <section id="gallery" className="py-32 bg-slate-50 dark:bg-[#0d1117]">
        <div className="container mx-auto px-6">

          <div className="mb-16">
            <p className="section-label">Clinical Outcomes</p>
            <h2 className="section-heading mt-4">Treatment Results</h2>
            <p className="mt-4 text-[15px] text-slate-500 dark:text-white/45 max-w-md leading-[1.7]">
              A look at orthodontic treatment and smile transformations.
            </p>
          </div>

          {/* Case list */}
          <div className="space-y-10">
            {treatmentCases.map((c, i) => (
              <div key={c.id}
                className="bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-3xl p-6 md:p-8">

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[12px] font-bold bg-teal-50 dark:bg-teal-400/10 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full whitespace-nowrap">
                    Case {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-[16px] text-slate-900 dark:text-white">
                    {c.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {([
                    { label: "Before", image: c.before },
                    { label: "After", image: c.after },
                  ] as const).map(({ label, image }) => (
                    <button key={label}
                      onClick={() => setSel({ image, title: `${c.title} — ${label}` })}
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 dark:bg-white/5">
                      <Image src={image} alt={`${c.title} ${label}`} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <ZoomIn size={15} className="text-white" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {sel && (
        <div className="fixed inset-0 z-[9999] bg-black/92 flex items-center justify-center p-6"
          onClick={() => setSel(null)}>
          <button onClick={() => setSel(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition">
            <X size={18} />
          </button>
          <div onClick={e => e.stopPropagation()} className="max-w-4xl w-full">
            <Image src={sel.image} alt={sel.title} width={1200} height={900}
              className="rounded-2xl object-contain max-h-[82vh] mx-auto" />
            <p className="text-white/60 text-sm text-center mt-4">{sel.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
