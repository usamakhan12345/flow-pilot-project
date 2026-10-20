import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { "aria-hidden": true, focusable: false } as const;

/** Green check used in hero trust notes and pricing lists (Figma Container/Icon). */
export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 9.099 9.42" fill="none" {...base} {...props}>
      <path
        d="M9.099.28C6.87 3.461 4.58 6.405 2.229 9.112c-.178.205-.333.308-.465.308-.15 0-.422-.397-.814-1.19C.317 6.95 0 6.184 0 5.934c0-.092.062-.199.185-.322.264-.278.451-.417.56-.417.1 0 .208.16.322.479.3.811.617 1.533.95 2.167C4.323 5.507 6.604 2.894 8.859 0l.24.28Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 21 21" fill="none" {...base} {...props}>
      <path
        d="M6.3 8.4 10.5 12.6 14.7 8.4"
        stroke="currentColor"
        strokeWidth="1.575"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...base} {...props}>
      <path
        d="m6 3.5 4.5 4.5L6 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" {...base} {...props}>
      <path
        d="M10 3.5 5.5 8l4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 18 17" fill="none" {...base} {...props}>
      <path d="M0 1.5h18M0 8h18M0 14.5h18" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...base} {...props}>
      <path
        d="m5 5 10 10m0-10L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Checkbox tick (white on brand). */
export function TickIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" {...base} {...props}>
      <path
        d="m3.8 7.2 2.1 2.1 4.4-4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...base} {...props}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  );
}

/** Small parallelogram bar mark that replaces the "▰" glyph in the Figma logo. */
export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 4 13.02 6.6" fill="currentColor" {...base} {...props}>
      <path d="M2.457 4.096H13l-2.457 6.5H0l2.457-6.5Z" />
    </svg>
  );
}

/** Narrow outlined vertical bar used by the mobile footer logo (Figma 2:1075). */
export function LogoBarVertical(props: IconProps) {
  return (
    <svg viewBox="0 0 5 13" fill="none" {...base} {...props}>
      <rect x="0.5" y="0.5" width="4" height="12" stroke="currentColor" />
      <path d="M1.5 3h2M1.5 5h2M1.5 7h2M1.5 9h2" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

/** Flat 17x5 bar used by the header and mobile-menu logos (Figma glyph). */
export function LogoBar(props: IconProps) {
  return (
    <svg viewBox="0 0 17 5" fill="currentColor" {...base} {...props}>
      <rect width="17" height="5" />
    </svg>
  );
}

/** Bold carousel arrows (Figma glyphs, about 7x10 with a 2.3px stroke). */
export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" {...base} {...props}>
      <path
        d="M10.6 5.2 6.7 9l3.9 3.8"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" fill="none" {...base} {...props}>
      <path
        d="m7.4 5.2 3.9 3.8-3.9 3.8"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- Feature icons (coloured 44x44 tiles, white glyph) ---- */

export function PlanningIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...base} {...props}>
      <rect width="44" height="44" rx="12" fill="#4F6BFF" />
      <path
        d="M28.798 28.057H15.202V14.443h13.596v13.614Zm-.68-.681V15.124H15.882v12.252h12.236Zm-1.694-1.644h-8.848v-8.915h8.848v8.915Z"
        fill="#fff"
      />
    </svg>
  );
}

/** Mobile variant of the planning tile: narrow vertical bar glyph (Figma 2:1027). */
export function PlanningBarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...base} {...props}>
      <rect width="44" height="44" rx="12" fill="#4F6BFF" />
      <path
        d="M24.8555 30.6797H19.1445V11.8203H24.8555V30.6797M20.6719 28.8203V29.3516H23.3281V28.8203H21.5435L23.3281 27.7661V27.2266H20.6719V27.7578H22.4648L20.6719 28.8203M20.6719 24.5703V26.6953H23.3281V24.5703H20.6719M22.7969 26.1641H21.2031V25.1016H22.7969V26.1641M20.6719 21.3828V23.5078H23.3281V21.3828H21.7344V22.4453H22.2656V21.9141H22.7969V22.9766H21.2031V21.3828H20.6719M20.6719 20.3203V20.8516H23.3281V18.9922H22.7969V20.3203H20.6719M20.6719 19.2578V19.7891H22.2656V18.4609H23.3281V17.9297H20.6719V18.4609H21.7344V19.2578H20.6719M21.7344 16.8672H21.2031V16.0703H21.7344V16.8672M20.6719 15.5391V17.3984H23.3281V16.8672H22.2656V15.5391H20.6719M20.6719 14.4766V15.0078H23.3281V14.4766H22.1328V13.6797H23.3281V13.1484H20.6719V13.6797H21.6016V14.4766H20.6719"
        fill="#fff"
      />
    </svg>
  );
}

export function AiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...base} {...props}>
      <rect width="44" height="44" rx="12" fill="#8A5CFF" />
      <text
        x="22"
        y="28"
        textAnchor="middle"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="#fff"
      >
        AI
      </text>
    </svg>
  );
}

export function CollaborationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...base} {...props}>
      <rect width="44" height="44" rx="12" fill="#2EBF8B" />
      <path
        d="M29.628 16.914h-6.458v-2.672h6.458v2.672Zm-8.682.006-6.574-.006v-2.672l6.574.011v2.661Zm8.682 5.672h-6.458v-2.673h6.458v2.673Zm-8.682.005-6.574-.005v-2.673l6.574.011v2.667Zm8.682 5.656h-6.458v-2.673h6.458v2.673Zm-8.682.006-6.574-.006v-2.673l6.574.011v2.668Z"
        fill="#fff"
      />
    </svg>
  );
}

export function AutomationIcon(props: IconProps) {
  const teeth = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg viewBox="0 0 44 44" fill="none" {...base} {...props}>
      <rect width="44" height="44" rx="12" fill="#FF9F43" />
      <g transform="translate(12 12)" fill="#fff">
        {teeth.map((deg) => (
          <rect
            key={deg}
            x="8.6"
            y="0.6"
            width="2.8"
            height="4"
            rx="0.7"
            transform={`rotate(${deg} 10 10)`}
          />
        ))}
        <path
          fillRule="evenodd"
          d="M10 4.2a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6Zm0 3.2a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2Z"
        />
      </g>
    </svg>
  );
}
