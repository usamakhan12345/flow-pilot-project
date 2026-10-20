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
      className="py-12 md:py-16"
    >
      <Container className="flex flex-col items-center gap-8 md:gap-12">
        <SectionHeading
          id="features-title"
          className="max-w-[768px] gap-[11px]"
          title="Everything your team needs to move faster"
          subtitle="Powerful features to help you plan, automate and collaborate, all in one place."
          titleClassName="text-[26px]/[28px] md:text-[34px]/[51px] md:tracking-[-0.85px] text-balance"
          subtitleClassName="text-body/[21px] md:text-body-lg"
        />
        <div className="grid w-full gap-[14px] md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
