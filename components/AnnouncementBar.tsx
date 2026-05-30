"use client";

import Marquee from "react-fast-marquee";

export default function AnnouncementBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-hotline text-white shadow-lg pb-[env(safe-area-inset-bottom,0px)]">
      <div className="py-2.5">
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
        <p className="text-sm sm:text-base font-medium font-mantou whitespace-nowrap mr-16">
          內場組需要你／妳！零經驗可，初心者の首選！
        </p>
        <p className="text-sm sm:text-base font-medium font-mantou whitespace-nowrap mr-16 opacity-80">
          Together Stronger · 2026 熱線募款感恩會
        </p>
        </Marquee>
      </div>
    </div>
  );
}
