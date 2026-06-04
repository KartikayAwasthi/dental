"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  image: string;
  title: string;
  onClose: () => void;
}

export default function ImageViewer({
  image,
  title,
  onClose,
}: Props) {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/90
      z-[100]
      flex
      items-center
      justify-center
      p-5
      "
    >
      <button
        onClick={onClose}
        className="
        absolute
        top-6
        right-6
        text-white
        "
      >
        <X size={32} />
      </button>

      <div className="max-w-5xl w-full">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="
          rounded-3xl
          w-full
          h-auto
          object-cover
          "
        />

        <h3
          className="
          text-white
          text-center
          mt-5
          text-xl
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}