export const dashboardNav = [
  "Overview",
  "Tasks",
  "Automations",
  "Team",
  "Analytics",
  "Settings",
] as const;

export type DashboardTab = (typeof dashboardNav)[number];

export type RowTone = "orange" | "green" | "subtle";

export const rowToneColor: Record<RowTone, string> = {
  orange: "text-orange",
  green: "text-green",
  subtle: "text-subtle",
};

export type DashboardView = {
  heading: string;
  subtitle: string;
  /** `shortLabel` is the compact copy used by the mobile mockup (Figma 2:1005). */
  stats: { value: string; label: string; shortLabel: string }[];
  listTitle: string;
  rows: { title: string; shortTitle: string; meta: string; tone: RowTone }[];
};

/**
 * Overview is the Figma design. The other views are placeholder content (not in Figma)
 * that reuse the same layout so the card never changes size.
 */
export const dashboardViews: Record<DashboardTab, DashboardView> = {
  Overview: {
    heading: "Good morning, Sarah!",
    subtitle: "Here's what is happening with your team today.",
    stats: [
      { value: "12", label: "Active Tasks", shortLabel: "Active Tasks" },
      { value: "4", label: "AI Suggestions", shortLabel: "AI Suggest." },
      { value: "85%", label: "Project Progress", shortLabel: "Progress" },
    ],
    listTitle: "Today's Tasks",
    rows: [
      { title: "Design landing page", shortTitle: "Design landing page", meta: "In Progress", tone: "orange" },
      { title: "Update documentation", shortTitle: "Update docs", meta: "Completed", tone: "green" },
      { title: "Team sync meeting", shortTitle: "Team sync", meta: "Upcoming", tone: "subtle" },
      { title: "Review pull requests", shortTitle: "Review PRs", meta: "Upcoming", tone: "subtle" },
    ],
  },
  Tasks: {
    heading: "Your tasks",
    subtitle: "Everything on your plate this week.",
    stats: [
      { value: "12", label: "Active Tasks", shortLabel: "Active Tasks" },
      { value: "5", label: "Due Today", shortLabel: "Due Today" },
      { value: "31", label: "Completed", shortLabel: "Completed" },
    ],
    listTitle: "Due this week",
    rows: [
      { title: "Design landing page", shortTitle: "Design landing page", meta: "In Progress", tone: "orange" },
      { title: "Update documentation", shortTitle: "Update docs", meta: "Completed", tone: "green" },
      { title: "Prepare sprint demo", shortTitle: "Sprint demo", meta: "Upcoming", tone: "subtle" },
      { title: "Review pull requests", shortTitle: "Review PRs", meta: "Upcoming", tone: "subtle" },
    ],
  },
  Automations: {
    heading: "Automations",
    subtitle: "Workflows running for your team.",
    stats: [
      { value: "8", label: "Active Flows", shortLabel: "Active Flows" },
      { value: "126", label: "Runs Today", shortLabel: "Runs Today" },
      { value: "99%", label: "Success Rate", shortLabel: "Success" },
    ],
    listTitle: "Recent runs",
    rows: [
      { title: "Weekly status digest", shortTitle: "Status digest", meta: "Completed", tone: "green" },
      { title: "Assign new bug reports", shortTitle: "Assign bugs", meta: "Completed", tone: "green" },
      { title: "Sync calendar events", shortTitle: "Sync calendar", meta: "In Progress", tone: "orange" },
      { title: "Archive stale tasks", shortTitle: "Archive tasks", meta: "Upcoming", tone: "subtle" },
    ],
  },
  Team: {
    heading: "Your team",
    subtitle: "Who is working on what.",
    stats: [
      { value: "9", label: "Members", shortLabel: "Members" },
      { value: "6", label: "Online Now", shortLabel: "Online" },
      { value: "3", label: "Squads", shortLabel: "Squads" },
    ],
    listTitle: "Active now",
    rows: [
      { title: "Sarah Connor", shortTitle: "Sarah Connor", meta: "Online", tone: "green" },
      { title: "Alex Kim", shortTitle: "Alex Kim", meta: "In a meeting", tone: "orange" },
      { title: "Priya Patel", shortTitle: "Priya Patel", meta: "Online", tone: "green" },
      { title: "Marcus Reed", shortTitle: "Marcus Reed", meta: "Away", tone: "subtle" },
    ],
  },
  Analytics: {
    heading: "Analytics",
    subtitle: "How the team is trending.",
    stats: [
      { value: "92%", label: "On-time Rate", shortLabel: "On-time" },
      { value: "18h", label: "Time Saved", shortLabel: "Saved" },
      { value: "+24%", label: "Velocity", shortLabel: "Velocity" },
    ],
    listTitle: "Top insights",
    rows: [
      { title: "Planning time", shortTitle: "Planning time", meta: "-35%", tone: "green" },
      { title: "Tasks completed", shortTitle: "Tasks done", meta: "+18%", tone: "green" },
      { title: "Blocked tasks", shortTitle: "Blocked", meta: "3 open", tone: "orange" },
      { title: "Meeting hours", shortTitle: "Meetings", meta: "Steady", tone: "subtle" },
    ],
  },
  Settings: {
    heading: "Settings",
    subtitle: "Manage your workspace.",
    stats: [
      { value: "3", label: "Workspaces", shortLabel: "Spaces" },
      { value: "9", label: "Seats Used", shortLabel: "Seats" },
      { value: "2", label: "Integrations", shortLabel: "Apps" },
    ],
    listTitle: "Preferences",
    rows: [
      { title: "Email notifications", shortTitle: "Notifications", meta: "On", tone: "green" },
      { title: "Weekly digest", shortTitle: "Weekly digest", meta: "On", tone: "green" },
      { title: "Two-factor sign-in", shortTitle: "Two-factor", meta: "Off", tone: "orange" },
      { title: "Dark mode", shortTitle: "Dark mode", meta: "Off", tone: "subtle" },
    ],
  },
};
