export type BillingPeriod = "monthly" | "yearly";

export type PricingPlan = {
  id: "starter" | "pro" | "business";
  name: string;
  /** Price per billing period, in dollars */
  price: Record<BillingPeriod, number>;
  description: string;
  features: string[];
  featured?: boolean;
};

// Monthly prices/copy are from Figma. Yearly prices are placeholders (monthly x 12 less ~20%).
export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 0, yearly: 0 },
    description: "For individuals getting started",
    features: ["Up to 3 projects", "Basic AI suggestions", "Community support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 19, yearly: 182 },
    description: "For growing teams",
    features: [
      "Unlimited projects",
      "Advanced AI suggestions",
      "Team collaboration",
      "Priority support",
    ],
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    price: { monthly: 49, yearly: 470 },
    description: "For larger organizations",
    features: [
      "Everything in Pro",
      "Advanced automations",
      "Custom integrations",
      "Dedicated support",
    ],
  },
];

export const billingSuffix: Record<BillingPeriod, string> = {
  monthly: "/month",
  yearly: "/year",
};
