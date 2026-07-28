import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { end: 3, suffix: "+", label: "Years in Practice", sub: "Since November 2022" },
  { end: 2, suffix: "", label: "Clinics", sub: "Goverdhan & Mathura" },
  { end: 6, suffix: "+", label: "Core Treatment Skills", sub: "Orthodontic & general dentistry" },
  { end: 1, suffix: "", label: "Published Research Article", sub: "Asian Journal of Dental Sciences" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-teal-700 dark:bg-teal-800">
      <div className="container mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map(({ end, suffix, label, sub }) => (
            <div key={label}>
              <h3 className="text-5xl font-bold">
                <AnimatedCounter end={end} suffix={suffix} />
              </h3>
              <p className="mt-3 font-semibold">{label}</p>
              <p className="mt-1 text-teal-200 text-sm">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
