import type { ComponentPropsWithoutRef } from "react";

/** 42x42 bordered square button (testimonial prev/next). */
export function IconButton({
  className = "",
  type = "button",
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type={type}
      className={`flex size-[42px] shrink-0 items-center justify-center rounded-btn border border-line bg-white text-ink transition motion-reduce:transition-none duration-150 hover:border-brand hover:text-brand active:bg-surface-chip ${className}`}
      {...props}
    />
  );
}
