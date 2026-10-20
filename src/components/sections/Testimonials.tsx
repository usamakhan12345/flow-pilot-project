"use client";

import { useState } from "react";
import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

type TestimonialsProps = {
  items?: Testimonial[];
};

function Stars({ rating }: { rating: number }) {
  return (
    <span
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-[1.4px] text-star"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          className={`size-[14px] ${i < rating ? "" : "opacity-25"}`}
        />
      ))}
    </span>
  );
}

function Dots({
  count,
  active,
  onSelect,
  className = "",
}: {
  count: number;
  active: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div className={`items-center justify-center gap-1 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Show testimonial ${i + 1} of ${count}`}
          aria-current={i === active ? "true" : undefined}
          onClick={() => onSelect(i)}
          className="group flex size-6 items-center justify-center rounded-full"
        >
          <span
            className={`h-2 rounded-full transition-all duration-200 motion-reduce:transition-none ${
              i === active
                ? "w-6 bg-brand-gradient"
                : "w-2 bg-line group-hover:bg-brand/50"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export function Testimonials({ items = defaultTestimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const current = items[index];

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <Section
      id="testimonials"
      aria-roledescription="carousel"
      aria-labelledby="testimonials-title"
      className="py-12 md:py-20"
    >
      <Container className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <SectionHeading
          id="testimonials-title"
          align="left"
          eyebrow="Testimonials"
          title="Loved by modern teams"
          subtitle="See how FlowPilot helps teams work smarter and save time."
          className="gap-2 xl:w-[468.27px] xl:shrink-0"
          eyebrowClassName="text-body-sm tracking-[0.325px]"
          titleClassName="text-[26px]/[32px] md:text-[36px]/[45px]"
          subtitleClassName="mt-[3px] text-body-lg"
        />

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-y-5 xl:flex xl:flex-1 xl:justify-end xl:gap-3.5">
          <IconButton aria-label="Previous testimonial" onClick={prev}>
            <ChevronLeftIcon className="size-[18px]" />
          </IconButton>

          <div className="relative order-first col-span-3 xl:order-none xl:col-span-1 xl:w-[557px] xl:shrink-0">
            <div
              key={current.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-live="polite"
              className="relative flex min-h-[220px] flex-col justify-between rounded-card-lg border border-line bg-soft-gradient p-5 motion-safe:animate-fade-in md:p-[33px] xl:bg-white xl:bg-none xl:shadow-card-md"
            >
              <span
                aria-hidden="true"
                className="absolute top-8 left-5 -translate-y-1/2 text-[44px]/[44px] font-bold text-brand-2 md:top-[43px] md:left-6 md:text-[54px]/[54px]"
              >
                &ldquo;
              </span>
              <blockquote className="pt-[7px] pb-6 pl-7 text-sm/[19px] font-medium text-ink md:text-lead/[24.3px]">
                {current.quote}
              </blockquote>
              <div className="flex items-center justify-between gap-4 pl-7">
                <div>
                  <p className="text-caption font-bold text-ink md:text-body-sm">
                    {current.name}
                  </p>
                  <p className="text-[10px]/[15px] text-muted md:text-micro">
                    {current.role}
                  </p>
                </div>
                <Stars rating={current.rating} />
              </div>
            </div>

            <Dots
              count={count}
              active={index}
              onSelect={setIndex}
              className="absolute top-full left-0 mt-4 hidden w-full xl:flex"
            />
          </div>

          <Dots
            count={count}
            active={index}
            onSelect={setIndex}
            className="flex xl:hidden"
          />

          <IconButton aria-label="Next testimonial" onClick={next}>
            <ChevronRightIcon className="size-[18px]" />
          </IconButton>
        </div>
      </Container>
    </Section>
  );
}
