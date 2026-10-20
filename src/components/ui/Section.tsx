import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  bg?: "white" | "soft";
};

/** Anchor target; scroll offset for the sticky header comes from `scroll-padding-top` in globals.css. */
export function Section({
  bg = "white",
  className = "",
  ...props
}: SectionProps) {
  const background = bg === "soft" ? "bg-soft-gradient" : "bg-white";
  return <section className={`${background} ${className}`} {...props} />;
}
