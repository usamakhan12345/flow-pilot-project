import type { ComponentPropsWithoutRef } from "react";

/** Page width wrapper: 1280px max, 64px side padding on desktop (Figma), 20px on mobile. */
export function Container({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-16 ${className}`}
      {...props}
    />
  );
}
