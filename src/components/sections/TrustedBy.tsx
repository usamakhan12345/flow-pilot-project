import { trustedCompanies } from "@/data/logos";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function TrustedBy() {
  return (
    <Section
      aria-labelledby="trusted-title"
      className="pt-9 pb-2 md:pt-[55px] md:pb-14"
    >
      <Container className="flex flex-col items-center md:gap-8">
        {/* Figma mobile (2:1007) has no heading: keep it for assistive tech only. */}
        <p
          id="trusted-title"
          className="sr-only text-body-sm font-semibold text-muted md:not-sr-only"
        >
          Trusted by modern teams
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3 text-[13px]/[20px] font-semibold text-logo-gray max-md:*:text-center md:gap-x-10 md:text-[22px]/[33px] lg:gap-x-16 xl:gap-x-24">
          {trustedCompanies.map(({ name, mobileClass }) => (
            <li key={name} className={mobileClass}>
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
