export const dashboardNav = [
  "Overview",
  "Tasks",
  "Automations",
  "Team",
  "Analytics",
  "Settings",
] as const;

export const dashboardStats = [
  { value: "12", label: "Active Tasks" },
  { value: "4", label: "AI Suggestions" },
  { value: "85%", label: "Project Progress" },
] as const;

export type TaskStatus = "In Progress" | "Completed" | "Upcoming";

export const taskStatusColor: Record<TaskStatus, string> = {
  "In Progress": "text-orange",
  Completed: "text-green",
  Upcoming: "text-subtle",
};

export const dashboardTasks: { title: string; status: TaskStatus }[] = [
  { title: "Design landing page", status: "In Progress" },
  { title: "Update documentation", status: "Completed" },
  { title: "Team sync meeting", status: "Upcoming" },
  { title: "Review pull requests", status: "Upcoming" },
];
