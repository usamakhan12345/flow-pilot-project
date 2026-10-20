import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeAll, describe, expect, it } from "vitest";
import { MobileMenu } from "../MobileMenu";

beforeAll(() => {
  // jsdom has no matchMedia.
  window.matchMedia ??= ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as typeof window.matchMedia;
});

describe("MobileMenu", () => {
  it("opens, locks scroll, closes on Escape and restores focus", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);
    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("dialog", { name: /main menu/i }),
    ).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");
    expect(screen.getByRole("button", { name: /close menu/i })).toHaveFocus();
    expect(
      screen.getByRole("link", { name: /faq & contact/i }),
    ).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).not.toBe("hidden");
    expect(toggle).toHaveFocus();
  });

  it("closes when a link is selected", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);
    const toggle = screen.getByRole("button", { name: /open menu/i });
    await user.click(toggle);
    await user.click(screen.getByRole("link", { name: "Pricing" }));
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
