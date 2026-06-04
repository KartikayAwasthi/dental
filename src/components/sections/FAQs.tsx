import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import { faqs } from "@/data/faq";

export default function FAQs() {
  return (
    <section
      id="faqs"
      className="py-24"
    >
      <div className="container mx-auto px-5">
        <SectionHeading
          badge="FAQs"
          title="Frequently Asked Questions"
          description="Answers to common orthodontic treatment questions."
        />

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}