import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "../ContactForm";

async function fillValidBase(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/full name/i), "Jane Doe");
  await user.type(screen.getByLabelText(/work email/i), "jane@acme.com");
  await user.type(screen.getByLabelText(/company name/i), "Acme");
  await user.type(
    screen.getByLabelText(/message/i),
    "We would like to learn more about FlowPilot.",
  );
  await user.click(screen.getByLabelText(/i agree to the terms/i));
}

describe("ContactForm", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("does not submit an invalid form and shows associated errors", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText("Full name is required.")).toBeInTheDocument();
    expect(screen.getByText("Work email is required.")).toBeInTheDocument();
    expect(screen.getByText("Company name is required.")).toBeInTheDocument();
    expect(screen.getByText("Select your team size.")).toBeInTheDocument();
    expect(screen.getByText("Message is required.")).toBeInTheDocument();
    expect(
      screen.getByText(/you must accept the terms of service/i),
    ).toBeInTheDocument();

    const name = screen.getByLabelText(/full name/i);
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(name).toHaveAccessibleDescription("Full name is required.");
    expect(
      screen.queryByText(/thanks! our team will contact you shortly/i),
    ).not.toBeInTheDocument();
  });

  it("validates minimum lengths and email format", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(/full name/i), "Jo");
    await user.type(screen.getByLabelText(/work email/i), "not-an-email");
    await user.type(screen.getByLabelText(/message/i), "too short");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText("Full name must be at least 3 characters."),
    ).toBeInTheDocument();
    expect(screen.getByText("Enter a valid email address.")).toBeInTheDocument();
    expect(
      screen.getByText("Message must be at least 20 characters."),
    ).toBeInTheDocument();
  });

  it("shows a live character counter", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    expect(screen.getByText("0 / 300")).toBeInTheDocument();
    await user.type(screen.getByLabelText(/message/i), "hello");
    expect(screen.getByText("5 / 300")).toBeInTheDocument();
  });

  it("shows and requires Preferred Demo Time only when team size is 200+", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    expect(screen.queryByText(/preferred demo time/i)).not.toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText(/team size/i), "200+");
    expect(screen.getByText(/preferred demo time/i)).toBeInTheDocument();
    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.getByRole("radio", { name: "Morning" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Afternoon" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Evening" })).toBeInTheDocument();

    await fillValidBase(user);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      await screen.findByText("Choose a preferred demo time."),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/thanks! our team will contact you shortly/i),
    ).not.toBeInTheDocument();

    // Changing away from 200+ removes the field and its error.
    await user.selectOptions(screen.getByLabelText(/team size/i), "11-50");
    expect(screen.queryByText(/preferred demo time/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText("Choose a preferred demo time."),
    ).not.toBeInTheDocument();
  });

  it("no longer blocks submission after switching away from 200+", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.selectOptions(screen.getByLabelText(/team size/i), "200+");
    await fillValidBase(user);
    await user.selectOptions(screen.getByLabelText(/team size/i), "51-200");

    await user.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      await screen.findByText(
        "Thanks! Our team will contact you shortly.",
        {},
        { timeout: 3000 },
      ),
    ).toBeInTheDocument();
  });

  it("disables the button while submitting, prevents repeats, then shows success", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.selectOptions(screen.getByLabelText(/team size/i), "11-50");
    await fillValidBase(user);

    vi.useFakeTimers({ shouldAdvanceTime: true });
    await user.click(screen.getByRole("button", { name: /send message/i }));

    const sending = await screen.findByRole("button", { name: /sending/i });
    expect(sending).toBeDisabled();
    await user.click(sending); // repeated click does nothing

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1100);
    });

    await waitFor(() =>
      expect(
        screen.getByText("Thanks! Our team will contact you shortly."),
      ).toBeInTheDocument(),
    );
    expect(screen.queryByRole("button", { name: /send message/i })).toBeNull();
  });
});
