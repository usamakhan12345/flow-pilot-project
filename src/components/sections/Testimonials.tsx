"use client";

import { useState, type ComponentPropsWithoutRef, type UIEvent } from "react";
import { testimonials as defaultTestimonials, type Testimonial } from "@/data/testimonials";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@/components/icons";
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

function Slide({
  item,
  className = "",
  ...props
}: { item: Testimonial; className?: string } & Omit<
  ComponentPropsWithoutRef<"div">,
  "className"
>) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`relative flex min-h-[220px] flex-col justify-between rounded-card-lg bg-soft-gradient p-5 md:border md:border-line md:p-[33px] xl:bg-white xl:bg-none xl:shadow-card-md ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute top-[34px] left-5 -translate-y-1/2 text-[44px]/[44px] font-bold text-brand-2 md:top-[43px] md:left-6 md:text-[54px]/[54px]"
      >
        &ldquo;
      </span>
      <blockquote className="pt-10 pb-6 text-sm/[19px] font-medium text-ink md:pt-[7px] md:pl-7 md:text-lead/[24.3px]">
        {item.shortQuote ? (
          <>
            <span className="md:hidden">{item.shortQuote}</span>
            <span className="hidden md:inline">{item.quote}</span>
          </>
        ) : (
          item.quote
        )}
      </blockquote>
      <div className="flex items-center justify-between gap-4 md:pl-7">
        <div>
          <p className="text-caption font-bold text-ink md:text-body-sm">{item.name}</p>
          <p className="text-[10px]/[15px] text-muted md:text-micro">{item.role}</p>
        </div>
        <Stars rating={item.rating} />
      </div>
    </div>
  );
}

export function Testimonials({ items = defaultTestimonials }: TestimonialsProps) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const current = items[index];

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  // Mobile: slides sit at k * (scrollWidth - clientWidth) / (count - 1).
  const onSwipeScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const max = el.scrollWidth - el.clientWidth;
    if (count < 2 || max <= 0) return;
    const i = Math.round((el.scrollLeft / max) * (count - 1));
    setIndex(Math.min(count - 1, Math.max(0, i)));
  };

  return (
    <Section
      id="testimonials"
      aria-roledescription="carousel"
      aria-labelledby="testimonials-title"
      className="pb-[25px] md:py-20"
    >
      <Container className="flex flex-col gap-[19px] md:gap-8 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
        <SectionHeading
          id="testimonials-title"
          align="left"
          eyebrow="Testimonials"
          title="Loved by modern teams"
          subtitle="See how FlowPilot helps teams work smarter and save time."
          className="gap-2 xl:w-[468.27px] xl:shrink-0"
          eyebrowClassName="text-body-sm tracking-[0.325px]"
          titleClassName="text-[26px]/[45px] md:text-[36px]/[45px]"
          subtitleClassName="mt-[20.5px] text-body-lg md:mt-[3px]"
        />

        <p role="status" aria-live="polite" className="sr-only">
          Slide {index + 1} of {count}
        </p>

        {/* Mobile: touch-swipeable scroll-snap slider, one card per view. */}
        <div
          data-testid="testimonials-swipe"
          tabIndex={0}
          aria-label="Testimonials"
          onScroll={onSwipeScroll}
          className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-brand md:hidden [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, i) => (
            <Slide
              key={item.id}
              item={item}
              aria-label={`${i + 1} of ${count}`}
              className="w-full shrink-0 snap-start"
            />
          ))}
        </div>

        {/* md and up: prev/next arrows. */}
        <div className="hidden grid-cols-[auto_1fr_auto] items-center gap-y-5 md:grid xl:flex xl:flex-1 xl:justify-end xl:gap-3.5">
          <IconButton aria-label="Previous testimonial" onClick={prev}>
            <ArrowLeftIcon className="size-[18px]" />
          </IconButton>

          <div className="relative order-first col-span-3 xl:order-none xl:col-span-1 xl:w-[557px] xl:shrink-0">
            <Slide
              key={current.id}
              item={current}
              aria-label={`${index + 1} of ${count}`}
              className="motion-safe:animate-fade-in"
            />
          </div>

          <IconButton
            aria-label="Next testimonial"
            onClick={next}
            className="col-start-3 xl:col-start-auto"
          >
            <ArrowRightIcon className="size-[18px]" />
          </IconButton>
        </div>
      </Container>
    </Section>
  );
}
