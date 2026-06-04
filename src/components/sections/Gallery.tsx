"use client";

import { useState } from "react";

import SectionHeading from "../ui/SectionHeading";
import BeforeAfterCard from "../ui/BeforeAfterCard";
import ImageViewer from "../ui/ImageViewer";

import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  const [selectedImage, setSelectedImage] =
    useState<{
      image: string;
      title: string;
    } | null>(null);

  return (
    <>
      <section
        id="gallery"
        className="py-24"
      >
        <div className="container mx-auto px-5">
          <SectionHeading
            badge="Gallery"
            title="Smile Transformations"
            description="Real orthodontic treatment outcomes and smile makeovers."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item) => (
              <BeforeAfterCard
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                onClick={() =>
                  setSelectedImage({
                    image: item.image,
                    title: item.title,
                  })
                }
              />
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageViewer
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() =>
            setSelectedImage(null)
          }
        />
      )}
    </>
  );
}