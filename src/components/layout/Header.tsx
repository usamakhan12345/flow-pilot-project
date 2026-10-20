import { loginHref, navItems, startHref } from "@/data/nav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-footer-line bg-white">
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center lg:h-[75px] lg:grid-cols-[1fr_auto_1fr] lg:px-16 xl:grid-cols-[auto_auto_1fr]">
        <a href="#top" aria-label="FlowPilot home" className="justify-self-start rounded-sm">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block xl:ml-[209.8px]">
          <ul className="flex items-center gap-9">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-sm text-body-sm font-medium text-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <a
            href={loginHref}
            className="rounded-sm text-body-sm font-semibold text-ink transition-colors hover:text-brand"
          >
            Log In
          </a>
          <Button href={startHref} className="h-[42px] w-[150px] text-body-sm">
            Get Started
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
