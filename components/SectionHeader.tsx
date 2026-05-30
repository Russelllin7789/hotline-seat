interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-12 sm:mb-16`}>
      <span className={`section-label ${light ? "text-sky-200" : ""}`}>{label}</span>
      <h2
        className={`section-title ${light ? "text-white" : ""} ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`section-desc ${align === "center" ? "mx-auto" : ""} ${
            light ? "text-white/80" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
