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
    ? "pt-4 gap-2.5 lg:pt-3 lg:gap-1.5"
    : plan.features.length > 3
      ? "pt-2 gap-1.5"
      : "pt-4 gap-2";

  const details = (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="text-card-title font-bold text-ink">{plan.name}</h3>
        <p className="-mb-0.5 flex items-baseline gap-1 lg:mb-0 lg:pt-1">
          <span
            key={billing}
            className="text-[34px]/[42.5px] font-bold text-ink motion-safe:animate-tab-in lg:leading-[34px]"
          >
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
        className={`h-10 w-full text-body-sm ${featured ? "mt-6 lg:mt-0" : "mt-[18px]"}`}
      >
        Get Started
      </Button>
    </>
  );

  if (featured) {
    return (
      <article className="flex min-h-[359px] w-[277px] shrink-0 snap-start flex-col justify-between overflow-clip lg:min-h-[302px] rounded-card border-2 border-brand bg-white shadow-card-lg transition duration-200 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-card-lg lg:w-auto">
        <div className="flex h-[30px] items-center justify-center bg-brand-gradient text-caption font-bold tracking-[0.3px] text-white">
          Most Popular
        </div>
        <div className="flex flex-1 flex-col justify-between px-6 pt-6 pb-6 lg:pt-2">
          {details}
        </div>
      </article>
    );
  }

  return (
    <article className="flex min-h-[359px] w-[277px] shrink-0 snap-start flex-col justify-between rounded-card border border-line lg:min-h-[302px] bg-white p-[25px] transition duration-200 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-card-lg hover:border-brand/40 lg:w-auto">
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
        className="mt-[19.5px] flex items-center gap-2 self-start md:mt-6 md:self-auto"
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
        className="-mx-5 mt-1 flex w-[calc(100%+2.5rem)] snap-x scroll-pl-5 gap-6 overflow-x-auto px-5 pt-2 pb-6 md:-mx-8 md:w-[calc(100%+4rem)] md:mt-10 md:scroll-pl-8 md:px-8 lg:mx-0 lg:scroll-pl-0 lg:mt-[78px] lg:grid lg:w-full lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-[14px] xl:gap-[42px]"
      >
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
    </>
  );
}
