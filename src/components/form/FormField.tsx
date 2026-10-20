import type { ReactNode } from "react";

export type FieldAria = {
  id: string;
  "aria-invalid": boolean;
  "aria-required": boolean;
  "aria-describedby": string | undefined;
};

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  /** Id of extra descriptive text (e.g. the character counter) to include in aria-describedby. */
  describedBy?: string;
  className?: string;
  children: (aria: FieldAria) => ReactNode;
};

export const labelClass = "text-caption font-medium text-ink md:text-body-sm md:font-semibold";

/** Shared control look: 40px (mobile) / 46px (desktop) tall, 8px radius, 1px #DCE3F0 border. */
export const controlClass =
  "w-full rounded-input border border-line bg-surface-side px-[15px] text-body-sm transition-colors md:bg-white md:text-body aria-[invalid=true]:border-danger focus-visible:border-brand";

export const inputClass = `${controlClass} text-ink placeholder:text-muted`;

export function ErrorMessage({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} role="alert" className="text-caption text-danger">
      {error}
    </p>
  );
}

export function FormField({
  id,
  label,
  required = false,
  error,
  describedBy,
  className = "",
  children,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const describedByIds = [error ? errorId : null, describedBy]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={`flex flex-col gap-1 md:gap-1.5 ${className}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-required": required,
        "aria-describedby": describedByIds || undefined,
      })}
      <ErrorMessage id={errorId} error={error} />
    </div>
  );
}
