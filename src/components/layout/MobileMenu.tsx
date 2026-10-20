"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loginHref, navItems, startHref } from "@/data/nav";
import { ChevronRightIcon, CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/ui/Logo";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Hamburger + full-height slide-in panel (Figma 16:584). Visible below `lg`. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      // Focus trap: keep Tab inside the open panel.
      const items = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // The panel is for small screens only: close it if the viewport grows to desktop.
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="-mr-1 flex size-10 items-center justify-center justify-self-end rounded-btn text-ink transition-colors hover:bg-surface-side lg:hidden"
      >
        <MenuIcon className="h-6 w-[26px]" />
      </button>

      <div
        className={`fixed inset-0 z-50 transition-[visibility] duration-300 motion-reduce:transition-none lg:hidden ${
          open ? "visible" : "invisible"
        }`}
        inert={!open}
      >
        <div
          aria-hidden="true"
          onClick={() => close(true)}
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className={`absolute inset-y-0 right-0 flex w-[min(100%,375px)] flex-col bg-white font-jakarta shadow-menu transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-7 pb-[21px]">
            <a
              href="#top"
              aria-label="FlowPilot home"
              onClick={() => close(false)}
              className="rounded-sm"
            >
              <Logo textClassName="font-sans text-[17px] tracking-[-0.425px]" />
            </a>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => close(true)}
              className="flex size-10 items-center justify-center rounded-full text-menu-ink transition-colors hover:bg-surface-side"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="px-5 pt-3">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => close(false)}
                    className="flex items-center justify-between rounded-xl p-[14px] text-[16.8px]/[25.2px] font-semibold text-menu-ink transition-colors hover:bg-surface-side"
                  >
                    {item.mobileLabel ?? item.label}
                    <ChevronRightIcon className="size-4 text-menu-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-3 px-6 pt-4 pb-9">
            <a
              href={loginHref}
              onClick={() => close(false)}
              className="rounded-xl border border-menu-line bg-white py-[15px] text-center text-[15.7px] font-semibold text-menu-ink transition-colors hover:bg-surface-side"
            >
              Log In
            </a>
            <a
              href={startHref}
              onClick={() => close(false)}
              className="rounded-xl bg-[linear-gradient(to_right,#5b47fb,#4f46e5)] py-[14px] text-center text-[15.7px] font-semibold text-white shadow-[0_1px_1px_#c7d2fd] transition hover:brightness-110"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
