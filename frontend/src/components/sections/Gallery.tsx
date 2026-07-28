"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";

const layout = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

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

          {/* Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
            {galleryImages.slice(0, 5).map((item, i) => (
              <button key={item.id}
                onClick={() => setSel({ image: item.image, title: item.title })}
                className={`${layout[i]} relative group rounded-2xl overflow-hidden bg-slate-200 dark:bg-white/5`}>
                <Image src={item.image} alt={item.title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ZoomIn size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </button>
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
