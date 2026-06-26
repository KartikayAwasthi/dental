import Image from "next/image";

interface Props {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

export default function BeforeAfterCard({
  image,
  title,
  category,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="
      cursor-pointer
      group
      overflow-hidden
      rounded-3xl
      relative
      "
    >
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="
        h-[350px]
        w-full
        object-cover
        group-hover:scale-110
        transition
        duration-500
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-black/20
        to-transparent
        "
      />

      <div
        className="
        absolute
        bottom-5
        left-5
        text-white
        "
      >
        <span
          className="
          bg-blue-600
          px-3
          py-1
          rounded-full
          text-xs
          "
        >
          {category}
        </span>

        <h3 className="text-lg font-semibold mt-3">
          {title}
        </h3>
      </div>
    </div>
  );
}