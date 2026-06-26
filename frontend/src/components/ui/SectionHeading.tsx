interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {badge && (
        <span
          className="
          inline-block
          px-4
          py-2
          rounded-full
          bg-blue-100
          dark:bg-blue-900/30
          text-blue-600
          text-sm
          font-medium
          mb-4
          "
        >
          {badge}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p
          className="
          mt-5
          text-lg
          text-slate-600
          dark:text-slate-300
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}