import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { dashboardViews } from "@/data/dashboard";
import { DashboardMockup } from "../DashboardMockup";

describe("DashboardMockup", () => {
  it("starts on Overview and switches view when a sidebar tab is clicked", async () => {
    const user = userEvent.setup();
    render(<DashboardMockup />);

    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(dashboardViews.Overview.heading);

    await user.click(screen.getByRole("tab", { name: "Team" }));
    expect(screen.getByRole("tab", { name: "Team" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute("aria-selected", "false");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(dashboardViews.Team.heading);
  });

  it("supports arrow-key navigation between tabs", async () => {
    const user = userEvent.setup();
    render(<DashboardMockup />);

    screen.getByRole("tab", { name: "Overview" }).focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("tab", { name: "Tasks" })).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{ArrowUp}{ArrowUp}");
    expect(screen.getByRole("tab", { name: "Settings" })).toHaveAttribute("aria-selected", "true");
  });
});
