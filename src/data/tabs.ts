export type FeatureTab = {
  id: "plan" | "automate" | "collaborate";
  label: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  /** Progress bar fill, 0-100 */
  progress: number;
};

// "Plan" copy is from Figma. Automate/Collaborate are placeholders (not designed).
export const featureTabs: FeatureTab[] = [
  {
    id: "plan",
    label: "Plan",
    title: "Break goals into clear tasks",
    description: "AI-assisted planning keeps priorities visible and actionable.",
    stat: "40%",
    statLabel: "Less manual work",
    progress: 66.6,
  },
  {
    id: "automate",
    label: "Automate",
    title: "Let workflows run themselves",
    description: "Automations handle handoffs, reminders and status updates for you.",
    stat: "3x",
    statLabel: "Faster project handoffs",
    progress: 75,
  },
  {
    id: "collaborate",
    label: "Collaborate",
    title: "Keep everyone on the same page",
    description: "Shared boards and real-time updates keep your whole team aligned.",
    stat: "92%",
    statLabel: "Teams report better alignment",
    progress: 92,
  },
];
