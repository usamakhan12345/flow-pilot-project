import { features } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <Section
      id="features"
      aria-labelledby="features-title"
      className="pt-[31px] pb-6 md:py-16"
    >
      <Container className="flex flex-col items-stretch gap-5 md:items-center md:gap-12">
        <SectionHeading
          id="features-title"
          align="left"
          className="gap-[11px] md:max-w-[768px] md:items-center md:text-center"
          title="Everything your team needs to move faster"
          subtitle="Powerful features to help you plan, automate and collaborate, all in one place."
          titleClassName="text-[26px]/[28px] md:text-[34px]/[51px] md:tracking-[-0.85px] text-balance"
          subtitleClassName="hidden text-body/[21px] md:block md:text-body-lg"
        />
        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
