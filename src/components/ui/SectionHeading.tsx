import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow ? (
        <p className={`font-bold text-brand uppercase ${eyebrowClassName}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className={`font-extrabold text-ink ${titleClassName}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`text-muted ${subtitleClassName}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
