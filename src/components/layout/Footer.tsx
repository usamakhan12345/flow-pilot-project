import { legalLinks } from "@/data/footer";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-footer-line bg-white pt-6 pb-4 md:pt-[49px] md:pb-12">
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-[26px] md:gap-y-4">
        <a href="#top" aria-label="FlowPilot home" className="rounded-sm">
          <Logo
            mark="slant"
            textClassName="text-[13px] tracking-normal"
            markClassName="h-[6.6px] w-[13px]"
          />
        </a>
        <p className="text-micro text-muted md:text-body-sm">
          <span className="md:hidden">&copy; 2025 FlowPilot, Inc.</span>
          <span className="hidden md:inline">
            &copy; 2025 FlowPilot Inc. All rights reserved.
          </span>
        </p>
        <nav aria-label="Legal" className="w-full md:w-auto">
          <ul className="flex items-center text-body-sm text-muted md:gap-6">
            {legalLinks.map((link) => (
              <li
                key={link.label}
                className="max-md:first:ml-[1.5px] max-md:nth-2:ml-[91px] max-md:nth-3:ml-[69.7px]"
              >
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
