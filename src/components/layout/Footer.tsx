import { legalLinks } from "@/data/footer";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-footer-line bg-white py-8 md:pt-[49px] md:pb-12">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
        <Logo
          textClassName="text-[13px] tracking-normal"
          markClassName="h-[6.6px] w-[13px]"
        />
        <p className="text-micro text-muted md:text-body-sm">
          &copy; 2025 FlowPilot, Inc. All rights reserved.
        </p>
        <nav aria-label="Legal" className="w-full md:w-auto">
          <ul className="flex items-center gap-6 text-body-sm text-muted">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="rounded-sm transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
