import { LogoBar, LogoBarVertical, LogoMark } from "@/components/icons";

type LogoProps = {
  className?: string;
  /** Text size/tracking classes for the wordmark. */
  textClassName?: string;
  markClassName?: string;
  /** "bar" = flat 17x5 bar (header, menu); "slant" = parallelogram (desktop footer, with a narrow vertical bar below md). */
  mark?: "bar" | "slant";
};

export function Logo({
  className = "",
  textClassName = "text-[17px] tracking-[-0.425px]",
  markClassName,
  mark = "bar",
}: LogoProps) {
  const isBar = mark === "bar";
  const Mark = isBar ? LogoBar : LogoMark;
  return (
    <span
      className={`inline-flex items-center text-ink ${isBar ? "gap-1" : "gap-2"} ${className}`}
    >
      {isBar ? null : <LogoBarVertical className="h-[13px] w-[5px] md:hidden" />}
      <Mark
        className={`${markClassName ?? (isBar ? "relative top-px h-[5px] w-[17px]" : "h-[6.6px] w-[13px]")} ${isBar ? "" : "max-md:hidden"}`}
      />
      <span className={`font-bold leading-[1.5] ${textClassName}`}>
        FlowPilot
      </span>
    </span>
  );
}
