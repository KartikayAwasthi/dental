"use client";

import { useState, useRef, useEffect } from "react";

import {
  X,
  Send,
  Bot,
  RotateCcw,
  SmilePlus,
} from "lucide-react";

const faqData = [
  {
    question: "What are clear aligners?",
    answer:
      "Clear aligners are transparent removable trays used to straighten teeth without traditional braces.",
  },

  {
    question: "How long does braces treatment take?",
    answer:
      "Most orthodontic treatments take between 12 and 24 months depending on case complexity.",
  },

  {
    question: "Can adults get braces?",
    answer:
      "Yes. Orthodontic treatment can be successfully performed at any age.",
  },

  {
    question: "Do braces hurt?",
    answer:
      "You may experience mild pressure for a few days after adjustments, which is completely normal.",
  },

  {
    question: "What is lingual orthodontics?",
    answer:
      "Lingual braces are placed behind the teeth, making them virtually invisible during treatment.",
  },

  {
    question: "How can I book a consultation?",
    answer:
      "You can call or WhatsApp Dr. Taruna at +91 8218466101.",
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome! I'm Dr. Taruna's Orthodontic Assistant. How can I help you today?",
    },
  ]);

  const messagesRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const askQuestion = (
    question: string,
    answer: string
  ) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: question,
      },
      {
        type: "bot",
        text: answer,
      },
    ]);
  };

  const resetChat = () => {
    setMessages([
      {
        type: "bot",
        text: "👋 Welcome! I'm Dr. Taruna's Orthodontic Assistant. How can I help you today?",
      },
    ]);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
        fixed
        bottom-6
        right-6
        z-[9999]
        h-16
        w-16
        rounded-full
        bg-blue-600
        text-white
        shadow-2xl
        flex
        items-center
        justify-center
        hover:scale-110
        transition
        "
      >
        {open ? (
          <X size={28} />
        ) : (
          <SmilePlus size={30} />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
          fixed
          bottom-24
          right-6
          z-[9999]
          w-[380px]
          max-w-[95vw]
          h-[600px]
          bg-white
          dark:bg-slate-950
          rounded-3xl
          shadow-2xl
          border
          border-slate-200
          dark:border-slate-800
          overflow-hidden
          flex
          flex-col
          "
        >
          {/* Header */}
          <div
            className="
            bg-blue-600
            text-white
            p-5
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <SmilePlus size={28} />

                <div>
                  <h3 className="font-bold">
                    Dr. Taruna Assistant
                  </h3>

                  <p className="text-sm text-blue-100">
                    Orthodontic Consultation Assistant
                  </p>
                </div>
              </div>

              <button
                onClick={resetChat}
                className="hover:rotate-180 transition"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="
            flex-1
            overflow-y-auto
            p-4
            space-y-4
            "
          >
            {messages.map(
              (msg: any, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 dark:text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              )
            )}

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="space-y-2 mt-4">
                {faqData.map((faq) => (
                  <button
                    key={faq.question}
                    onClick={() =>
                      askQuestion(
                        faq.question,
                        faq.answer
                      )
                    }
                    className="
                    w-full
                    text-left
                    p-3
                    rounded-xl
                    bg-slate-100
                    dark:bg-slate-800
                    hover:bg-blue-50
                    dark:hover:bg-slate-700
                    transition
                    "
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className="
            p-4
            border-t
            dark:border-slate-800
            "
          >
            <a
              href="https://wa.me/918218466101"
              target="_blank"
              className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
              "
            >
              <Send size={16} />
              WhatsApp Dr. Taruna
            </a>
          </div>
        </div>
      )}
    </>
  );
}