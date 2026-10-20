// Desktop order from Figma (Google, slack, Notion, Spotify, zoom, shopify).
// Mobile (Figma 2:1005) shows five logos in the order Notion, Google, slack, Spotify, zoom,
// so each entry carries its mobile-only utility classes. Rendered as text wordmarks
// (no raster assets in the design).
export const trustedCompanies = [
  { name: "Google", mobileClass: "max-md:order-2 max-md:w-[77px]" },
  { name: "slack", mobileClass: "max-md:order-3 max-md:w-[67px]" },
  { name: "Notion", mobileClass: "max-md:order-1 max-md:w-[77px]" },
  { name: "Spotify", mobileClass: "max-md:order-4 max-md:w-[61px]" },
  { name: "zoom", mobileClass: "max-md:order-5 max-md:w-[52px]" },
  { name: "shopify", mobileClass: "max-md:hidden" },
] as const;
