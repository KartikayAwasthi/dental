import {
  Award,
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Expert Care",
    icon: <Award size={30} />,
  },
  {
    title: "Advanced Technology",
    icon: <ShieldCheck size={30} />,
  },
  {
    title: "Personalized Treatment",
    icon: <Users size={30} />,
  },
  {
    title: "Flexible Scheduling",
    icon: <Clock3 size={30} />,
  },
];

export default function WhyChooseUs() {
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
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              dark:bg-slate-950
              rounded-3xl
              p-8
              text-center
              shadow-lg
              "
            >
              <div className="text-blue-600 mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}