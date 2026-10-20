export type Testimonial = {
  id: string;
  /** May contain 
; line breaks are honoured from md up (Figma hard-wraps the desktop quote). */
  quote: string;
  /** Shorter copy shown on mobile (Figma 2:1068). */
  shortQuote?: string;
  name: string;
  role: string;
  rating: number;
};

// First testimonial is from Figma; the other two are placeholders.
export const testimonials: Testimonial[] = [
  {
    id: "jessica",
    quote:
      "FlowPilot has completely changed how our team works. We’re\nmore organized, more productive, and spend less time on\nrepetitive tasks.",
    shortQuote:
      "FlowPilot has completely changed how our team works. We’re more organized and spend less time on repetitive tasks.",
    name: "Jessica Lee",
    role: "Product Manager, Acme Inc.",
    rating: 5,
  },
  {
    id: "marcus",
    quote:
      "The AI suggestions surface blockers before they become problems. Our weekly planning meeting went from an hour to fifteen minutes.",
    name: "Marcus Reed",
    role: "Engineering Lead, Northwind",
    rating: 5,
  },
  {
    id: "priya",
    quote:
      "Onboarding took an afternoon. Automations now handle the busywork, so my team can focus on the work that actually matters.",
    name: "Priya Patel",
    role: "Operations Director, Globex",
    rating: 5,
  },
];
