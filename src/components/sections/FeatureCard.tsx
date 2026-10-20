import type { ComponentType, SVGProps } from "react";
import {
  AiIcon,
  AutomationIcon,
  CollaborationIcon,
  PlanningIcon,
} from "@/components/icons";
import type { Feature, FeatureIconName } from "@/data/features";

const icons: Record<FeatureIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  planning: PlanningIcon,
  ai: AiIcon,
  collaboration: CollaborationIcon,
  automation: AutomationIcon,
};

/** Horizontal compact card on mobile (Figma 2:1005), vertical card from md (Figma 1:720). */
export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = icons[feature.icon];
  return (
    <article className="flex items-center gap-4 rounded-[14px] border border-line bg-white p-[15px] transition duration-200 hover:border-brand/40 hover:shadow-card-md motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none md:block md:min-h-[200px] md:rounded-card md:p-6">
      <Icon className="size-11 shrink-0 md:mb-5" />
      <div>
        <h3 className="text-sm/[21px] font-bold text-ink md:mb-1.5 md:text-card-title">
          {feature.title}
        </h3>
        <p className="text-micro text-muted md:text-body-sm/[16.9px]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
