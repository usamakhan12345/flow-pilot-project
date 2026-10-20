export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
};

// First testimonial is from Figma; the other two are placeholders.
export const testimonials: Testimonial[] = [
  {
    id: "jessica",
    quote:
      "FlowPilot has completely changed how our team works. We’re more organized, more productive, and spend less time on repetitive tasks.",
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
