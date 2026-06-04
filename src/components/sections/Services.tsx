import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      <div className="container mx-auto px-5 relative z-10">
        <SectionHeading
          badge="Orthodontic Treatments"
          title="Advanced Orthodontic Solutions for Every Smile"
          description="Specialized orthodontic treatments designed to improve dental alignment, facial aesthetics, bite correction, and long-term oral health for children, adolescents, and adults."
        />

        {/* Treatment Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {[
            "Metal Braces",
            "Ceramic Braces",
            "Self-Ligating Braces",
            "Clear Aligners",
            "Jaw Correction",
            "Lingual Orthodontics",
          ].map((item) => (
            <span
              key={item}
              className="
                px-4
                py-2
                rounded-full
                bg-blue-100
                dark:bg-blue-900/30
                text-blue-700
                dark:text-blue-400
                text-sm
                font-medium
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Bottom Information */}
        <div
          className="
            mt-20
            bg-blue-600
            rounded-[32px]
            p-10
            text-white
            text-center
          "
        >
          <h3 className="text-3xl font-bold">
            Personalized Orthodontic Care
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-blue-100 leading-8">
            Every smile is unique. Dr. Taruna Pratap Singh
            develops individualized treatment plans using
            modern orthodontic techniques and advanced
            diagnostic tools to achieve optimal functional
            and aesthetic outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div>
              <h4 className="text-2xl font-bold">
                Children
              </h4>

              <p className="text-blue-100 mt-2">
                Early growth assessment and jaw correction.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold">
                Teenagers
              </h4>

              <p className="text-blue-100 mt-2">
                Comprehensive braces and aligner treatment.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold">
                Adults
              </h4>

              <p className="text-blue-100 mt-2">
                Aesthetic orthodontic solutions for modern lifestyles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

