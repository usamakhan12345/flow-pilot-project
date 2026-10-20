import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { testimonials } from "@/data/testimonials";
import { Testimonials } from "../Testimonials";

describe("Testimonials", () => {
  it("moves through testimonials with next/previous and wraps around", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);
    const next = screen.getByRole("button", { name: /next testimonial/i });
    const prev = screen.getByRole("button", { name: /previous testimonial/i });

    expect(screen.getByText(testimonials[0].name)).toBeInTheDocument();
    await user.click(next);
    expect(screen.getByText(testimonials[1].name)).toBeInTheDocument();
    await user.click(prev);
    await user.click(prev);
    expect(screen.getByText(testimonials[2].name)).toBeInTheDocument();
  });

  it("marks the active slide indicator", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);
    await user.click(screen.getByRole("button", { name: /next testimonial/i }));
    const current = screen
      .getAllByRole("button", { name: /show testimonial 2 of 3/i })
      .filter((b) => b.getAttribute("aria-current") === "true");
    expect(current.length).toBeGreaterThan(0);
  });
});
