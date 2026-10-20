import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline";

type CommonProps = {
  variant?: Variant;
  /** Sizing (height, width, text size, padding) is supplied by the caller. */
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center rounded-btn font-semibold whitespace-nowrap transition motion-reduce:transition-none duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-btn hover:brightness-110 active:brightness-95",
  outline:
    "border border-line bg-white text-ink hover:border-brand/50 hover:text-brand hover:shadow-[0_2px_8px_rgba(29,42,87,0.12)] active:bg-surface-nav",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (rest.href !== undefined) {
    return <a className={classes} {...(rest as ButtonAsLink)} />;
  }
  const buttonProps = rest as ButtonAsButton;
  return (
    <button type="button" className={classes} {...buttonProps} />
  );
}
