export type FeatureIconName = "planning" | "ai" | "collaboration" | "automation";

export type Feature = {
  id: string;
  icon: FeatureIconName;
  title: string;
  description: string;
  /** Shorter copy used by the compact mobile cards (Figma 2:1005). */
  mobileDescription: string;
};

export const features: Feature[] = [
  {
    id: "planning",
    icon: "planning",
    title: "Smart Task Planning",
    description: "Automatically break down goals into actionable tasks with AI.",
    mobileDescription: "Break goals into actionable tasks.",
  },
  {
    id: "ai",
    icon: "ai",
    title: "AI Suggestions",
    description: "Get intelligent suggestions to improve your workflow.",
    mobileDescription: "Get intelligent workflow suggestions.",
  },
  {
    id: "collaboration",
    icon: "collaboration",
    title: "Team Collaboration",
    description: "Keep everyone aligned with real-time updates.",
    mobileDescription: "Keep everyone aligned in real time.",
  },
  {
    id: "automation",
    icon: "automation",
    title: "Automated Workflows",
    description: "Save time by automating repetitive tasks.",
    mobileDescription: "Automate repetitive work.",
  },
];
