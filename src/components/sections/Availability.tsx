import {
  Clock,
  CalendarDays,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function Availability() {
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
          <span className="text-blue-600 font-medium">
            Consultation Availability
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Specialist Orthodontic Consultations
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            Dr. Taruna Pratap Singh is available for
            orthodontic consultations, treatment planning,
            clear aligner cases, braces treatment,
            jaw correction therapies, and specialist referrals
            by prior appointment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Availability */}
          <div
            className="
            bg-white
            dark:bg-slate-950
            p-8
            rounded-3xl
            shadow-lg
            "
          >
            <Clock
              size={40}
              className="text-blue-600 mb-5"
            />

            <h3 className="font-bold text-xl mb-3">
              Appointment Based
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              Consultations are available
              by prior appointment and
              patient scheduling.
            </p>
          </div>

          {/* Service Areas */}
          <div
            className="
            bg-white
            dark:bg-slate-950
            p-8
            rounded-3xl
            shadow-lg
            "
          >
            <MapPin
              size={40}
              className="text-blue-600 mb-5"
            />

            <h3 className="font-bold text-xl mb-3">
              Service Areas
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              Mathura, Agra, Noida,
              Delhi, Gurgaon &
              Etawah.
            </p>
          </div>

          {/* Referrals */}
          <div
            className="
            bg-white
            dark:bg-slate-950
            p-8
            rounded-3xl
            shadow-lg
            "
          >
            <CalendarDays
              size={40}
              className="text-blue-600 mb-5"
            />

            <h3 className="font-bold text-xl mb-3">
              Specialist Referrals
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              Accepting orthodontic referrals
              for braces, aligners and
              jaw correction cases.
            </p>
          </div>

          {/* Registration */}
          <div
            className="
            bg-white
            dark:bg-slate-950
            p-8
            rounded-3xl
            shadow-lg
            "
          >
            <ShieldCheck
              size={40}
              className="text-blue-600 mb-5"
            />

            <h3 className="font-bold text-xl mb-3">
              Registered Specialist
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              UP Dental Council
              Registration No.
              A23844.
            </p>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div
          className="
          mt-16
          bg-blue-600
          text-white
          rounded-[32px]
          p-10
          text-center
          "
        >
          <h3 className="text-3xl font-bold">
            Need Orthodontic Guidance?
          </h3>

          <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
            Whether you're considering braces,
            clear aligners, lingual orthodontics,
            or jaw correction treatment,
            expert consultation can help you
            choose the most effective treatment plan.
          </p>
        </div>
      </div>
    </section>
  );
}

