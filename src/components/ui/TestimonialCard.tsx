import { Star, Quote, BadgeCheck } from "lucide-react";

interface Props {
  name: string;
  treatment: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  treatment,
  review,
  rating,
}: Props) {
  return (
    <div
      className="
      group
      relative
      bg-white
      dark:bg-slate-900
      rounded-3xl
      p-6
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
      border
      border-slate-200
      dark:border-slate-800
      w-full
      h-[260px]
      flex
      flex-col
      justify-between
      "
    >
      {/* Quote */}
      <Quote
        size={48}
        className="
        absolute
        top-5
        right-5
        opacity-10
        text-blue-600
        "
      />

      {/* Top */}
      <div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, index) => (
            <Star
              key={index}
              size={18}
              fill="currentColor"
              className="text-yellow-500"
            />
          ))}
        </div>

        <p
          className="
          text-slate-600
          dark:text-slate-300
          leading-7
          line-clamp-4
          "
        >
          "{review}"
        </p>
      </div>

      {/* Bottom */}
      <div>
        <div
          className="
          pt-4
          border-t
          border-slate-200
          dark:border-slate-800
          "
        >
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div
              className="
              h-12
              w-12
              rounded-full
              bg-blue-100
              dark:bg-blue-900/30
              flex
              items-center
              justify-center
              text-blue-600
              font-bold
              text-lg
              "
            >
              {name.charAt(0)}
            </div>

            <div className="flex-1">
              <h4 className="font-semibold flex items-center gap-2">
                {name}

                <BadgeCheck
                  size={16}
                  className="text-green-500"
                />
              </h4>

              <span
                className="
                text-xs
                text-blue-600
                font-medium
                "
              >
                {treatment}
              </span>
            </div>
          </div>

          <div className="mt-3">
            <span
              className="
              text-xs
              text-green-600
              dark:text-green-400
              font-medium
              "
            >
              ✓ Verified Patient Feedback
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}