"use client";

import { withBasePath } from "@/lib/basePath";
import { scrollToSection } from "@/lib/scrollToSection";

const highlights = [
  {
    title: "台北場",
    value: "2026 / 07 / 18",
    sub: "Sat. · ZEPP NEW TAIPEI",
  },
  {
    title: "高雄場",
    value: "2026 / 08 / 15",
    sub: "Sat. · 國立科學工藝博物館",
  },
  {
    title: "年度主題",
    value: "Together Stronger",
    sub: "#2026熱線募款",
  },
];

function ProtectedHeroImage({ className }: { className?: string }) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className ?? ""}`}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBasePath("/2026.jpg")}
        alt="2026 熱線募款感恩會主視覺"
        className="block w-full h-auto protected-image"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default function IntroSection() {
  return (
    <div className="lg:pt-[72px]">
      {/* Hero — mobile: full dvh block (image + copy); desktop: side-by-side */}
      <div className="relative bg-cream overflow-hidden min-h-[100dvh] lg:min-h-0 flex flex-col pt-16 pb-11 sm:pb-12 lg:pt-0 lg:pb-0">
        <div className="section-container flex-1 flex flex-col justify-center py-4 sm:py-6 lg:py-28 min-h-0">
          <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
            <div className="order-2 lg:order-1 shrink-0 lg:shrink">
              <p className="section-label text-xs sm:text-sm">Taiwan Tongzhi Hotline Association</p>
              <h1 className="font-mantou text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-3 sm:mb-6">
                Together
                <br />
                <span className="text-hotline">Stronger</span>
                <span className="text-lg sm:text-2xl lg:text-4xl block mt-1 sm:mt-2 text-gray-700 font-sans font-bold">
                  2026 熱線募款感恩會
                </span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-16 lg:mb-4 max-w-lg line-clamp-3 sm:line-clamp-none">
                一起加入這場年度最重要的募款盛會，用行動支持台灣同志諮詢熱線協會！
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  className="btn-primary text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3"
                  onClick={() => scrollToSection("seat")}
                >
                  了解內場組
                </button>
                <button
                  type="button"
                  className="btn-outline text-sm sm:text-base px-5 sm:px-8 py-2.5 sm:py-3"
                  onClick={() => scrollToSection("question")}
                >
                  分類帽測驗
                </button>
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full">
              <ProtectedHeroImage className="rounded-xl sm:rounded-2xl shadow-xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Three pillars */}
      <div className="bg-white py-16 sm:py-20">
        <div className="section-container">
          <SectionHeaderInline
            label="Event Info"
            title="活動資訊"
            description="歡迎加入內場組，零經驗可，初心者の首選！"
          />
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((item) => (
              <article key={item.title} className="card p-8 text-center group">
                <div className="w-12 h-1 bg-hotline mx-auto mb-6 rounded-full group-hover:w-16 transition-all duration-300" />
                <h3 className="text-sm font-semibold tracking-widest uppercase text-hotline mb-3">
                  {item.title}
                </h3>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeaderInline({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-desc mx-auto">{description}</p>
    </div>
  );
}
