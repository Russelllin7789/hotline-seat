import Image from "next/image";
import type { ISeatIntro } from "@/types/ISeatIntro";

interface SeatDetailProps {
  intro: ISeatIntro;
}

export default function SeatDetail({ intro }: SeatDetailProps) {
  return (
    <article className="card p-6 sm:p-8 flex flex-col h-full">
      <div className="w-14 h-14 rounded-xl bg-hotline-light flex items-center justify-center mb-5">
        <Image
          src={intro.iconUrl}
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{intro.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        {intro.description}
      </p>
    </article>
  );
}
