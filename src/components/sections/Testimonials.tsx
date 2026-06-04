
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id="testimonials"
      className="
      py-24
      overflow-hidden
      bg-slate-50
      dark:bg-slate-900
      "
    >
      <div className="container mx-auto px-5">
        <SectionHeading
          badge="Patient Stories"
          title="What Our Patients Say"
          description="Real experiences from patients who trusted Dr. Taruna Pratap Singh for their orthodontic treatment."
        />
      </div>

      <div className="relative mt-12">
        <div className="testimonial-slider flex gap-8">
          {duplicatedTestimonials.map(
            (testimonial, index) => (
              <div
                key={index}
                className="
                min-w-[400px]
                md:min-w-[350px]
                "
              >
                <TestimonialCard
                  {...testimonial}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

