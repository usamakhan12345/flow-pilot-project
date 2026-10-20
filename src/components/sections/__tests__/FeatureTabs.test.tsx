import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { featureTabs } from "@/data/tabs";
import { FeatureTabs } from "../FeatureTabs";

describe("FeatureTabs", () => {
  it("shows one active tab and changes content when another tab is selected", async () => {
    const user = userEvent.setup();
    render(<FeatureTabs />);

    const plan = screen.getByRole("tab", { name: "Plan" });
    const automate = screen.getByRole("tab", { name: "Automate" });
    expect(plan).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(featureTabs[0].title);

    await user.click(automate);

    expect(automate).toHaveAttribute("aria-selected", "true");
    expect(plan).toHaveAttribute("aria-selected", "false");
    expect(
      screen
        .getAllByRole("tab")
        .filter((t) => t.getAttribute("aria-selected") === "true"),
    ).toHaveLength(1);
    expect(screen.getByRole("tabpanel")).toHaveTextContent(featureTabs[1].title);
    expect(screen.getByText(featureTabs[1].stat)).toBeInTheDocument();
  });

  it("supports arrow-key navigation", async () => {
    const user = userEvent.setup();
    render(<FeatureTabs />);
    screen.getByRole("tab", { name: "Plan" }).focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Automate" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "Collaborate" })).toHaveFocus();
  });
});
