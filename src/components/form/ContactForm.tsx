"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { ChevronDownIcon, TickIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import {
  controlClass,
  ErrorMessage,
  FormField,
  inputClass,
  labelClass,
} from "./FormField";
import {
  DEMO_TIMES,
  DEMO_TRIGGER,
  MESSAGE_MAX,
  TEAM_SIZES,
  rules,
  type ContactFormValues,
} from "./validation";

const SUBMIT_DELAY_MS = 1000;
const SUCCESS_MESSAGE = "Thanks! Our team will contact you shortly.";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "onTouched",
    reValidateMode: "onChange",
    // Unmounted fields (Preferred Demo Time) are dropped from values and errors,
    // so a hidden conditional field can never block submission.
    shouldUnregister: true,
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      teamSize: "",
      message: "",
      terms: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const inFlight = useRef(false);
  const successRef = useRef<HTMLDivElement>(null);

  const teamSize = useWatch({ control, name: "teamSize" });
  const message = useWatch({ control, name: "message" }) ?? "";
  const showDemoTime = teamSize === DEMO_TRIGGER;

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  const onSubmit = async () => {
    // Guard against repeated submits (double click / Enter) on top of `disabled`.
    if (inFlight.current) return;
    inFlight.current = true;
    try {
      await new Promise((resolve) => setTimeout(resolve, SUBMIT_DELAY_MS));
      reset();
      setSubmitted(true);
    } finally {
      inFlight.current = false;
    }
  };

  if (submitted) {
    return (
      <div
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-card text-center outline-none"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-brand-gradient text-white">
          <TickIcon className="size-7" />
        </span>
        <p className="text-card-title font-bold text-ink">{SUCCESS_MESSAGE}</p>
      </div>
    );
  }

  const messageLength = message.length;
  const overLimit = messageLength > MESSAGE_MAX;

  return (
    <form
      noValidate
      aria-busy={isSubmitting}
      onSubmit={(event) => handleSubmit(onSubmit)(event)}
      className="flex flex-col gap-[14px] md:gap-[19px]"
    >
      <div className="grid gap-[14px] sm:grid-cols-2 md:gap-5">
        <FormField
          id="contact-full-name"
          label="Full Name"
          required
          error={errors.fullName?.message}
        >
          {(aria) => (
            <input
              {...aria}
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              className={`${inputClass} h-10 md:h-[46px]`}
              {...register("fullName", rules.fullName)}
            />
          )}
        </FormField>

        <FormField
          id="contact-email"
          label="Work Email"
          required
          error={errors.email?.message}
        >
          {(aria) => (
            <input
              {...aria}
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={`${inputClass} h-10 md:h-[46px]`}
              {...register("email", rules.email)}
            />
          )}
        </FormField>

        <FormField
          id="contact-company"
          label="Company Name"
          required
          error={errors.company?.message}
        >
          {(aria) => (
            <input
              {...aria}
              type="text"
              autoComplete="organization"
              placeholder="Acme Inc."
              className={`${inputClass} h-10 md:h-[46px]`}
              {...register("company", rules.company)}
            />
          )}
        </FormField>

        <FormField
          id="contact-team-size"
          label="Team Size"
          required
          error={errors.teamSize?.message}
        >
          {(aria) => (
            <div className="relative">
              <select
                {...aria}
                className={`${controlClass} h-10 appearance-none pr-10 md:h-[46px] ${
                  teamSize ? "text-ink" : "text-muted"
                }`}
                {...register("teamSize", rules.teamSize)}
              >
                <option value="">Select team size</option>
                {TEAM_SIZES.map((size) => (
                  <option key={size} value={size} className="text-ink">
                    {size}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-[9px] size-[21px] -translate-y-1/2 text-placeholder" />
            </div>
          )}
        </FormField>
      </div>

      {showDemoTime ? (
        <fieldset
          role="radiogroup"
          aria-required="true"
          aria-invalid={Boolean(errors.demoTime)}
          aria-describedby={errors.demoTime ? "contact-demo-time-error" : undefined}
          className="flex flex-col gap-1.5"
        >
          <legend className={`${labelClass} mb-1.5`}>
            Preferred Demo Time<span aria-hidden="true"> *</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {DEMO_TIMES.map((time) => (
              <label
                key={time}
                className="flex cursor-pointer items-center gap-2 rounded-input border border-line bg-surface-side px-4 py-2.5 text-body-sm text-ink transition-colors hover:border-brand/50 has-checked:border-brand has-checked:bg-surface-nav md:bg-white"
              >
                <input
                  type="radio"
                  value={time}
                  className="size-4 accent-brand"
                  {...register("demoTime", rules.demoTime)}
                />
                {time}
              </label>
            ))}
          </div>
          <ErrorMessage
            id="contact-demo-time-error"
            error={errors.demoTime?.message}
          />
        </fieldset>
      ) : null}

      <FormField
        id="contact-message"
        label="Message"
        required
        error={errors.message?.message}
        describedBy="contact-message-count"
      >
        {(aria) => (
          <div className="relative pb-1.5">
            <textarea
              {...aria}
              rows={3}
              placeholder="Tell us about your needs…"
              className={`${controlClass} block h-[78px] resize-none px-[13px] py-[13px] leading-6 text-ink placeholder:text-placeholder`}
              {...register("message", rules.message)}
            />
            <span
              id="contact-message-count"
              className={`pointer-events-none absolute right-3 bottom-[10px] text-micro ${
                overLimit ? "font-semibold text-danger" : "text-muted"
              }`}
            >
              {messageLength} / {MESSAGE_MAX}
            </span>
          </div>
        )}
      </FormField>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-1.5">
          <span className="relative mt-[3px] flex size-3.5 shrink-0 md:size-4">
            <input
              id="contact-terms"
              type="checkbox"
              aria-required="true"
              aria-invalid={Boolean(errors.terms)}
              aria-describedby={errors.terms ? "contact-terms-error" : undefined}
              className="peer size-full appearance-none rounded-[3px] border border-line bg-white checked:border-brand checked:bg-brand aria-[invalid=true]:border-danger"
              {...register("terms", rules.terms)}
            />
            <TickIcon className="pointer-events-none absolute -inset-px hidden size-[calc(100%+2px)] text-white peer-checked:block" />
          </span>
          <label htmlFor="contact-terms" className="text-micro text-muted">
            I agree to the Terms of Service and Privacy Policy
            <span aria-hidden="true"> *</span>
          </label>
        </div>
        <ErrorMessage id="contact-terms-error" error={errors.terms?.message} />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className="h-[42px] w-full text-body-sm md:h-[43px]"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
