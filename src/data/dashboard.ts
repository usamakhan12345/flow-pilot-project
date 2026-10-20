export const dashboardNav = [
  "Overview",
  "Tasks",
  "Automations",
  "Team",
  "Analytics",
  "Settings",
] as const;

/** `shortLabel` is the compact copy used by the mobile mockup (Figma 2:1005). */
export const dashboardStats = [
  { value: "12", label: "Active Tasks", shortLabel: "Active Tasks" },
  { value: "4", label: "AI Suggestions", shortLabel: "AI Suggest." },
  { value: "85%", label: "Project Progress", shortLabel: "Progress" },
] as const;

export type TaskStatus = "In Progress" | "Completed" | "Upcoming";

export const taskStatusColor: Record<TaskStatus, string> = {
  "In Progress": "text-orange",
  Completed: "text-green",
  Upcoming: "text-subtle",
};

export const dashboardTasks: {
  title: string;
  shortTitle: string;
  status: TaskStatus;
}[] = [
  { title: "Design landing page", shortTitle: "Design landing page", status: "In Progress" },
  { title: "Update documentation", shortTitle: "Update docs", status: "Completed" },
  { title: "Team sync meeting", shortTitle: "Team sync", status: "Upcoming" },
  { title: "Review pull requests", shortTitle: "Review PRs", status: "Upcoming" },
];
