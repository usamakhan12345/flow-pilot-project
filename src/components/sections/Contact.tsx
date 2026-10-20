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
      className="pt-4 pb-12 max-md:bg-none md:py-20"
    >
      <Container className="flex flex-col gap-6 md:gap-8 xl:flex-row xl:items-start xl:justify-between">
        <SectionHeading
          id="contact-title"
          align="left"
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s build the future <br />
              together
            </>
          }
          subtitle="Have questions? Want a demo? Send us a message and our team will get back to you."
          className="gap-1 md:gap-2 xl:w-[428.78px] xl:shrink-0 xl:pt-4"
          eyebrowClassName="hidden text-caption tracking-[0.6px] md:block"
          titleClassName="text-[24px]/[30px] md:text-[34px]/[37.4px]"
          subtitleClassName="max-w-[400px] text-caption font-medium md:pt-[7px] md:text-body-sm md:font-normal md:leading-[21.13px]"
        />

        <div className="w-full md:rounded-card md:border md:border-line md:bg-white md:p-[33px] md:shadow-card-md xl:w-[675.22px] xl:shrink-0">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
