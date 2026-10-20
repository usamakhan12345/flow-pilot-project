export type FeatureIconName = "planning" | "ai" | "collaboration" | "automation";

export type Feature = {
  id: string;
  icon: FeatureIconName;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    id: "planning",
    icon: "planning",
    title: "Smart Task Planning",
    description: "Automatically break down goals into actionable tasks with AI.",
  },
  {
    id: "ai",
    icon: "ai",
    title: "AI Suggestions",
    description: "Get intelligent suggestions to improve your workflow.",
  },
  {
    id: "collaboration",
    icon: "collaboration",
    title: "Team Collaboration",
    description: "Keep everyone aligned with real-time updates.",
  },
  {
    id: "automation",
    icon: "automation",
    title: "Automated Workflows",
    description: "Save time by automating repetitive tasks.",
  },
];
