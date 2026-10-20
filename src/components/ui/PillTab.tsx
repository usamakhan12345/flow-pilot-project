import type { ComponentPropsWithRef } from "react";

type PillTabProps = ComponentPropsWithRef<"button"> & {
  selected: boolean;
  /** Inactive pricing toggle has a border, inactive feature tabs do not (per Figma). */
  bordered?: boolean;
};

/** Shared pill used by the feature tabs and the billing toggle. */
export function PillTab({
  selected,
  bordered = false,
  className = "",
  type = "button",
  ...props
}: PillTabProps) {
  const state = selected
    ? "bg-brand-gradient text-white"
    : `bg-white text-ink hover:bg-surface-chip ${bordered ? "border border-line" : ""}`;
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-btn text-caption font-semibold transition motion-reduce:transition-none duration-150 ${state} ${className}`}
      {...props}
    />
  );
}
