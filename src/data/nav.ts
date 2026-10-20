export type NavItem = {
  href: string;
  label: string;
  /** Label used in the mobile menu when it differs from desktop (Figma 16:584). */
  mobileLabel?: string;
};

export const navItems: NavItem[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "FAQ", mobileLabel: "FAQ & Contact" },
];

export const loginHref = "#contact";
export const startHref = "#pricing";
