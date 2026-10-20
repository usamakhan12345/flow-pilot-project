import { Button } from "@/components/ui/Button";
import { CheckItem } from "@/components/ui/CheckItem";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { DashboardMockup } from "./DashboardMockup";

const trustNotes = [
  "No credit card required",
  "Set up in minutes",
  "Trusted by 10,000+ teams",
];

export function Hero() {
  return (
    <Section
      bg="soft"
      aria-labelledby="hero-title"
      className="pt-8 pb-10 md:py-16 xl:flex xl:h-[600px] xl:items-center xl:py-0"
    >
      <Container className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between xl:gap-8">
        <div className="xl:w-[491.2px] xl:shrink-0">
          <p className="mb-5 inline-flex h-[26px] items-center gap-2 rounded-badge bg-surface-blue px-3 text-[10px] md:mb-7 md:h-7 md:px-3.5 md:text-micro">
            <span className="font-bold text-brand">New</span>
            <span className="font-medium text-muted">
              AI-powered workflow for modern teams ›
            </span>
          </p>

          <h1
            id="hero-title"
            className="mb-4 text-[36px]/[36px] font-extrabold tracking-[-0.9px] text-ink md:mb-5 md:text-[48px]/[52px] md:tracking-[-1.2px] xl:text-[58px]/[62.64px] xl:tracking-[-1.45px]"
          >
            Work smarter.
            <br />
            Let AI handle{" "}
            <br className="md:hidden" />
            the{" "}
            <br className="hidden md:block" />
            repetitive work.
          </h1>

          <p className="mb-6 max-w-[500px] text-body-sm/5 text-muted md:mb-8 md:text-lead">
            FlowPilot helps modern teams plan work, automate repetitive tasks,
            and keep everyone aligned.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-[14px] md:mb-9 md:gap-4">
            <Button
              href="#pricing"
              className="h-11 px-6 text-body-sm md:h-12 md:w-[150px] md:px-0 md:text-body"
            >
              Start Free
            </Button>
            <Button
              href="#how-it-works"
              variant="outline"
              className="h-11 px-5 text-caption md:h-12 md:w-[170px] md:px-0 md:text-body"
            >
              See How It Works
            </Button>
          </div>

          <ul className="flex flex-col gap-2.5 md:max-w-[340px] md:flex-row md:flex-wrap md:gap-x-8 md:gap-y-2">
            {trustNotes.map((note) => (
              <CheckItem
                key={note}
                className="gap-2 text-caption md:min-h-[22.5px] md:text-body-sm"
                iconClassName="md:mx-[3px]"
              >
                {note}
              </CheckItem>
            ))}
          </ul>
        </div>

        <DashboardMockup />
      </Container>
    </Section>
  );
}
