import {
  Phone,
  Calendar,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-5">
        <div
          className="
          bg-blue-600
          text-white
          rounded-[40px]
          p-12
          md:p-20
          text-center
          "
        >
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >
            Ready To Transform
            Your Smile?
          </h2>

          <p className="mt-5 text-lg">
            Schedule your consultation
            with Dr. Taruna today.
          </p>

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-5
            mt-10
            "
          >
            <button
              className="
              bg-white
              text-blue-600
              px-7
              py-4
              rounded-xl
              flex
              items-center
              gap-2
              "
            >
              <Calendar size={18} />
              Book Appointment
            </button>

            <button
              className="
              border
              border-white
              px-7
              py-4
              rounded-xl
              flex
              items-center
              gap-2
              "
            >
              <Phone size={18} />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}