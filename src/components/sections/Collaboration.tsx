import {
  Users,
  Globe,
  GraduationCap,
  Building2,
} from "lucide-react";

const collaborations = [
  {
    icon: <Users size={36} />,
    title: "Professional Associations",
    description:
      "Active participation in orthodontic and dental organizations.",
  },
  {
    icon: <Globe size={36} />,
    title: "International Conferences",
    description:
      "Regular speaker and attendee at global orthodontic events.",
  },
  {
    icon: <GraduationCap size={36} />,
    title: "Academic Collaboration",
    description:
      "Research and educational collaboration with universities.",
  },
  {
    icon: <Building2 size={36} />,
    title: "Clinical Partnerships",
    description:
      "Working alongside leading dental professionals and clinics.",
  },
];

export default function Collaboration() {
  return (
    <section
      className="
      py-24
      bg-slate-50
      dark:bg-slate-900
      "
    >
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Collaboration
          </h2>

          <p
            className="
            mt-5
            max-w-3xl
            mx-auto
            text-slate-600
            dark:text-slate-300
            "
          >
            Building stronger orthodontic outcomes
            through research, education, and professional networking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborations.map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              dark:bg-slate-950
              p-8
              rounded-3xl
              shadow-lg
              text-center
              "
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-lg mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}