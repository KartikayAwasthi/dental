"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const whatsappMessage = `
*New Appointment Request*

👤 Name: ${form.name}
🎂 Age: ${form.age}
📞 Phone: ${form.phone}

🦷 Treatment:
${form.treatment}

📅 Preferred Date:
${form.date}

⏰ Preferred Time:
${form.time}

📝 Message:
${form.message}
`;

    const whatsappUrl =
      `https://wa.me/918218466101?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank"
    );

    setForm({
      name: "",
      age: "",
      phone: "",
      treatment: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-white
      dark:bg-slate-950
      rounded-3xl
      p-8
      shadow-xl
      "
    >
      <h3 className="text-3xl font-bold mb-2">
        Book Consultation
      </h3>

      <p className="text-slate-500 mb-8">
        Schedule an appointment with
        Dr. Taruna Pratap Singh
      </p>

      <div className="space-y-5">
        {/* Name */}
        <div className="relative">
          <User
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-400
            "
          />

          <input
            type="text"
            required
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="
            w-full
            pl-11
            p-4
            border
            rounded-xl
            dark:bg-slate-900
            "
          />
        </div>

        {/* Age */}
        <input
          type="number"
          placeholder="Age"
          required
          value={form.age}
          onChange={(e) =>
            setForm({
              ...form,
              age: e.target.value,
            })
          }
          className="
          w-full
          p-4
          border
          rounded-xl
          dark:bg-slate-900
          "
        />

        {/* Phone */}
        <div className="relative">
          <Phone
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-400
            "
          />

          <input
            type="tel"
            required
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="
            w-full
            pl-11
            p-4
            border
            rounded-xl
            dark:bg-slate-900
            "
          />
        </div>

        {/* Treatment */}
        <select
          required
          value={form.treatment}
          onChange={(e) =>
            setForm({
              ...form,
              treatment: e.target.value,
            })
          }
          className="
          w-full
          p-4
          border
          rounded-xl
          dark:bg-slate-900
          "
        >
          <option value="">
            Select Treatment
          </option>

          <option>
            Fixed Orthodontic Treatment (Metal & Ceramic Braces)
          </option>

          <option>
            Clear Aligner Therapy
          </option>

          <option>
            Root Canal Treatment
          </option>

          <option>
            Restorative Dentistry & Crown Preparation
          </option>

          <option>
            Scaling, Polishing & Preventive Care
          </option>

          <option>
            Extraction / Pediatric Dental Care
          </option>

          <option>
            General Consultation
          </option>
        </select>

        {/* Date */}
        <div className="relative">
          <Calendar
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-400
            "
          />

          <input
            type="date"
            required
            value={form.date}
            onChange={(e) =>
              setForm({
                ...form,
                date: e.target.value,
              })
            }
            className="
            w-full
            pl-11
            p-4
            border
            rounded-xl
            dark:bg-slate-900
            "
          />
        </div>

        {/* Time */}
        <div className="relative">
          <Clock
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-400
            "
          />

          <input
            type="time"
            required
            value={form.time}
            onChange={(e) =>
              setForm({
                ...form,
                time: e.target.value,
              })
            }
            className="
            w-full
            pl-11
            p-4
            border
            rounded-xl
            dark:bg-slate-900
            "
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare
            size={18}
            className="
            absolute
            left-4
            top-4
            text-slate-400
            "
          />

          <textarea
            rows={4}
            placeholder="Tell us about your concern..."
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="
            w-full
            pl-11
            p-4
            border
            rounded-xl
            dark:bg-slate-900
            "
          />
        </div>

        <button
          type="submit"
          className="
          w-full
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-4
          rounded-xl
          font-semibold
          transition
          "
        >
          Book Appointment via WhatsApp
        </button>
      </div>
    </form>
  );
}

