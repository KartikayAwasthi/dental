import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className="
      group
      bg-white
      dark:bg-slate-900
      rounded-3xl
      p-8
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      border
      border-slate-100
      dark:border-slate-800
      "
    >
      <div
        className="
        h-16
        w-16
        rounded-2xl
        bg-blue-100
        dark:bg-blue-900/30
        text-blue-600
        flex
        items-center
        justify-center
        mb-6
        "
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <button
        className="
        mt-6
        flex
        items-center
        gap-2
        text-blue-600
        font-medium
        "
      >
        Learn More
        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </button>
    </div>
  );
}