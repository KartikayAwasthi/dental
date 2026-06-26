import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { end: 5000, suffix: "+", label: "Orthodontic Cases", sub: "Managed over 15 years" },
  { end: 15, suffix: "+", label: "Years of Practice", sub: "Specialist clinical experience" },
  { end: 4, suffix: "+", label: "Research Publications", sub: "Indexed journals" },
  { end: 98, suffix: "%", label: "Outcome Satisfaction", sub: "Reported by referring doctors" },
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
