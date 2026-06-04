import AnimatedCounter from "../ui/AnimatedCounter";

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-bold">
              <AnimatedCounter
                end={5000}
                suffix="+"
              />
            </h3>

            <p className="mt-3">
              Happy Patients
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <AnimatedCounter
                end={15}
                suffix="+"
              />
            </h3>

            <p className="mt-3">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <AnimatedCounter
                end={120}
                suffix="+"
              />
            </h3>

            <p className="mt-3">
              Research Papers
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <AnimatedCounter
                end={98}
                suffix="%"
              />
            </h3>

            <p className="mt-3">
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}