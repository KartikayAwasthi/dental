"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function Accordion({
  question,
  answer,
}: Props) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="
      border
      dark:border-slate-800
      rounded-2xl
      overflow-hidden
      "
    >
      <button
        onClick={() =>
          setOpen(!open)
        }
        className="
        w-full
        flex
        justify-between
        items-center
        p-5
        font-semibold
        text-left
        "
      >
        {question}

        <ChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
          px-5
          pb-5
          text-slate-600
          dark:text-slate-300
          "
        >
          {answer}
        </div>
      )}
    </div>
  );
}