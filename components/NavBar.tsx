"use client";

import { scrollToSection } from "@/lib/scrollToSection";

const navLinks = [
  { label: "活動資訊", sectionId: "intro" },
  { label: "工作簡介", sectionId: "seat" },
  { label: "分類帽", sectionId: "question" },
];

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height)] bg-white border-b border-gray-100 sm:bg-white/95 sm:backdrop-blur-md">
      <div className="section-container h-full">
        <div className="flex items-center justify-between h-full">
          <button
            type="button"
            onClick={() => scrollToSection("intro")}
            className="flex flex-col items-start text-left group"
          >
            <span className="text-xs text-hotline font-semibold tracking-widest uppercase">
              Hotline 2026
            </span>
            <span className="font-mantou text-lg sm:text-xl text-gray-900 group-hover:text-hotline transition-colors">
              熱線募款感恩會
            </span>
          </button>

          <nav>
            <ul className="flex items-center gap-4 sm:gap-8">
              {navLinks.map(({ label, sectionId }) => (
                <li key={sectionId}>
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className="nav-link hidden sm:inline-block py-2 font-mantou"
                  >
                    {label}
                  </a>
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className="sm:hidden text-sm font-medium text-gray-700 hover:text-hotline py-2 font-mantou"
                  >
                    {label.slice(0, 2)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
