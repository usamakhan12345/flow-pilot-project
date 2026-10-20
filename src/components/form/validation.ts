export const TEAM_SIZES = ["1-10", "11-50", "51-200", "200+"] as const;
export const DEMO_TIMES = ["Morning", "Afternoon", "Evening"] as const;

export type TeamSize = (typeof TEAM_SIZES)[number];
export type DemoTime = (typeof DEMO_TIMES)[number];

export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 300;
export const DEMO_TRIGGER: TeamSize = "200+";

export type ContactFormValues = {
  fullName: string;
  email: string;
  company: string;
  teamSize: TeamSize | "";
  demoTime?: DemoTime;
  message: string;
  terms: boolean;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Rules are applied to the trimmed value so whitespace-only input counts as empty. */
export const rules = {
  fullName: {
    validate: (value: string) => {
      const v = value.trim();
      if (!v) return "Full name is required.";
      if (v.length < 3) return "Full name must be at least 3 characters.";
      return true;
    },
  },
  email: {
    validate: (value: string) => {
      const v = value.trim();
      if (!v) return "Work email is required.";
      if (!EMAIL_PATTERN.test(v)) return "Enter a valid email address.";
      return true;
    },
  },
  company: {
    validate: (value: string) =>
      value.trim() ? true : "Company name is required.",
  },
  teamSize: {
    validate: (value: string) => (value ? true : "Select your team size."),
  },
  demoTime: {
    validate: (value: string | undefined) =>
      value ? true : "Choose a preferred demo time.",
  },
  message: {
    validate: (value: string) => {
      const v = value.trim();
      if (!v) return "Message is required.";
      if (v.length < MESSAGE_MIN)
        return `Message must be at least ${MESSAGE_MIN} characters.`;
      if (value.length > MESSAGE_MAX)
        return `Message must be ${MESSAGE_MAX} characters or fewer.`;
      return true;
    },
  },
  terms: {
    validate: (value: boolean) =>
      value ? true : "You must accept the Terms of Service and Privacy Policy.",
  },
};
