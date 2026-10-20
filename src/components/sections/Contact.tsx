import { ContactForm } from "@/components/form/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <Section
      id="contact"
      bg="soft"
      aria-labelledby="contact-title"
      className="py-12 md:py-20"
    >
      <Container className="flex flex-col gap-8 xl:flex-row xl:items-start xl:justify-between">
        <SectionHeading
          id="contact-title"
          align="left"
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s build the future <br className="hidden md:block" />
              together
            </>
          }
          subtitle="Have questions? Want a demo? Send us a message and our team will get back to you."
          className="gap-2 xl:w-[428.78px] xl:shrink-0 xl:pt-4"
          eyebrowClassName="text-caption tracking-[0.6px]"
          titleClassName="text-[24px]/[30px] md:text-[34px]/[37.4px]"
          subtitleClassName="max-w-[400px] pt-[7px] text-body-sm md:leading-[21.13px]"
        />

        <div className="w-full rounded-card border border-line bg-white p-5 shadow-card-md sm:p-[33px] xl:w-[675.22px] xl:shrink-0">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
