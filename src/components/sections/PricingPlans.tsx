"use client";

import { useState } from "react";
import {
  billingSuffix,
  pricingPlans,
  type BillingPeriod,
  type PricingPlan,
} from "@/data/pricing";
import { Button } from "@/components/ui/Button";
import { CheckItem } from "@/components/ui/CheckItem";
import { PillTab } from "@/components/ui/PillTab";

function PricingCard({
  plan,
  billing,
}: {
  plan: PricingPlan;
  billing: BillingPeriod;
}) {
  const { featured } = plan;
  // Figma uses slightly different list spacing per card to land on the same 302px height.
  const listSpacing = featured
    ? "pt-3 gap-1.5"
    : plan.features.length > 3
      ? "pt-2 gap-1.5"
      : "pt-4 gap-2";

  const details = (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="text-card-title font-bold text-ink">{plan.name}</h3>
        <p className="flex items-baseline gap-1 pt-1">
          <span className="text-[34px]/[34px] font-bold text-ink">
            ${plan.price[billing]}
          </span>
          <span className="text-caption font-medium text-muted">
            {billingSuffix[billing]}
          </span>
        </p>
        <p className="text-caption text-muted">{plan.description}</p>
        <ul className={`flex flex-col ${listSpacing}`}>
          {plan.features.map((feature) => (
            <CheckItem key={feature} className="gap-2 text-caption">
              {feature}
            </CheckItem>
          ))}
        </ul>
      </div>
      <Button
        href="#contact"
        variant={featured ? "primary" : "outline"}
        aria-label={`Get started with ${plan.name}`}
        className="mt-6 h-10 w-full text-body-sm"
      >
        Get Started
      </Button>
    </>
  );

  if (featured) {
    return (
      <article className="flex min-h-[302px] w-[277px] shrink-0 snap-start flex-col justify-between overflow-clip rounded-card border-2 border-brand bg-white p-[2px] shadow-card-lg lg:w-auto">
        <div className="flex h-[30px] items-center justify-center bg-brand-gradient text-caption font-bold tracking-[0.3px] text-white">
          Most Popular
        </div>
        <div className="flex flex-1 flex-col justify-between px-6 pt-2 pb-6">
          {details}
        </div>
      </article>
    );
  }

  return (
    <article className="flex min-h-[302px] w-[277px] shrink-0 snap-start flex-col justify-between rounded-card border border-line bg-white p-[25px] lg:w-auto">
      {details}
    </article>
  );
}

/** Billing toggle + plan cards. Client component because of the billing state. */
export function PricingPlans() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <>
      <div
        role="group"
        aria-label="Billing period"
        className="mt-6 flex items-center gap-2"
      >
        <PillTab
          selected={billing === "monthly"}
          aria-pressed={billing === "monthly"}
          bordered
          onClick={() => setBilling("monthly")}
          className="h-9 w-[92px]"
        >
          Monthly
        </PillTab>
        <PillTab
          selected={billing === "yearly"}
          aria-pressed={billing === "yearly"}
          bordered
          onClick={() => setBilling("yearly")}
          className="h-9 w-[80px]"
        >
          Yearly
        </PillTab>
      </div>

      <div
        className="-mx-5 mt-10 flex w-[calc(100%+2.5rem)] snap-x gap-6 overflow-x-auto px-5 pt-2 pb-6 md:-mx-8 md:w-[calc(100%+4rem)] md:px-8 lg:mx-0 lg:mt-14 lg:grid lg:w-full lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-[42px]"
      >
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
    </>
  );
}
