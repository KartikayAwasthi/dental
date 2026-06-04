import { credentials } from "@/data/credentials";
import { Award } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-5">
        <SectionHeading
          badge="Credentials"
          title="Education & Certifications"
          description="Academic excellence and professional certifications ensuring the highest standards of orthodontic care."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((item) => (
            <div
              key={item.id}
              className="
              bg-white
              dark:bg-slate-950
              p-8
              rounded-3xl
              shadow-lg
              hover:-translate-y-2
              transition
              "
            >
              <Award
                size={40}
                className="text-blue-600 mb-5"
              />

              <h3 className="font-bold text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.institution}
              </p>

              <span
                className="
                inline-block
                mt-4
                px-3
                py-1
                bg-blue-100
                dark:bg-blue-900/20
                text-blue-600
                rounded-full
                text-sm
                "
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}