import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { testimonials } from "@/data/testimonials";
import { Testimonials } from "../Testimonials";

describe("Testimonials", () => {
  it("moves through testimonials with next/previous arrows and wraps around", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);
    const next = screen.getByRole("button", { name: /next testimonial/i });
    const prev = screen.getByRole("button", { name: /previous testimonial/i });
    const status = screen.getByRole("status");

    expect(status).toHaveTextContent("Slide 1 of 3");
    await user.click(next);
    expect(status).toHaveTextContent("Slide 2 of 3");
    await user.click(prev);
    await user.click(prev);
    expect(status).toHaveTextContent("Slide 3 of 3");
    await user.click(next);
    expect(status).toHaveTextContent("Slide 1 of 3");
  });

  it("renders no dot indicators and only the two desktop arrow buttons", () => {
    render(<Testimonials />);
    expect(screen.queryByRole("button", { name: /show testimonial/i })).toBeNull();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("renders every slide in the swipe container, labelled n of N", () => {
    render(<Testimonials />);
    const swipe = screen.getByTestId("testimonials-swipe");
    const slides = within(swipe).getAllByRole("group");
    expect(slides).toHaveLength(testimonials.length);
    slides.forEach((slide, i) => {
      expect(slide).toHaveAttribute("aria-label", `${i + 1} of ${testimonials.length}`);
      expect(within(slide).getByText(testimonials[i].name)).toBeInTheDocument();
    });
  });

  it("updates the live slide text when the swipe container scrolls", () => {
    render(<Testimonials />);
    const swipe = screen.getByTestId("testimonials-swipe");
    Object.defineProperty(swipe, "scrollWidth", { configurable: true, value: 1000 });
    Object.defineProperty(swipe, "clientWidth", { configurable: true, value: 400 });
    const status = screen.getByRole("status");

    fireEvent.scroll(swipe, { target: { scrollLeft: 300 } });
    expect(status).toHaveTextContent("Slide 2 of 3");
    fireEvent.scroll(swipe, { target: { scrollLeft: 600 } });
    expect(status).toHaveTextContent("Slide 3 of 3");
    fireEvent.scroll(swipe, { target: { scrollLeft: 0 } });
    expect(status).toHaveTextContent("Slide 1 of 3");
  });
});
