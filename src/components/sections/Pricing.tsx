import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingPlans } from "./PricingPlans";

export function Pricing() {
  return (
    <Section
      id="pricing"
      aria-labelledby="pricing-title"
      className="pt-6 pb-2 md:py-20"
    >
      <Container className="flex flex-col items-start md:items-center">
        <SectionHeading
          id="pricing-title"
          align="left"
          className="gap-[18px] md:max-w-[672px] md:gap-2 md:items-center md:text-center"
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
