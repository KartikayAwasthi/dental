import { publications } from "@/data/publications";
import { FileText } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function Research() {
  return (
    <section
      id="research"
      className="py-24"
    >
      <div className="container mx-auto px-5">
        <SectionHeading
          badge="Research"
          title="Publications & Research"
          description="Contributions to orthodontic science through research, publications, and academic participation."
        />

        <div className="space-y-6">
          {publications.map((paper) => (
            <div
              key={paper.id}
              className="
              border
              dark:border-slate-800
              rounded-3xl
              p-8
              flex
              gap-5
              hover:border-blue-500
              transition
              "
            >
              <FileText
                size={40}
                className="text-blue-600 shrink-0"
              />

              <div>
                <h3 className="font-bold text-xl">
                  {paper.title}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {paper.journal}
                </p>

                <span className="text-blue-600 text-sm">
                  Published {paper.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}