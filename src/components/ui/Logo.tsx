import { LogoMark } from "@/components/icons";

type LogoProps = {
  className?: string;
  /** Text size/tracking classes for the wordmark. */
  textClassName?: string;
  markClassName?: string;
};

export function Logo({
  className = "",
  textClassName = "text-[17px] tracking-[-0.425px]",
  markClassName = "h-[6.6px] w-[13px]",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 text-ink ${className}`}>
      <LogoMark className={markClassName} />
      <span className={`font-bold leading-[1.5] ${textClassName}`}>
        FlowPilot
      </span>
    </span>
  );
}
