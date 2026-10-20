import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingPlans } from "./PricingPlans";

export function Pricing() {
  return (
    <Section
      id="pricing"
      aria-labelledby="pricing-title"
      className="py-12 md:py-20"
    >
      <Container className="flex flex-col items-center">
        <SectionHeading
          id="pricing-title"
          className="max-w-[672px] gap-2"
          title="Simple, transparent pricing"
          subtitle="Choose the plan that works best for your team."
          titleClassName="text-[26px]/[28px] md:text-[36px]/[54px]"
          subtitleClassName="text-caption md:text-body"
        />
        <PricingPlans />
      </Container>
    </Section>
  );
}
