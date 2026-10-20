import type { ComponentType, SVGProps } from "react";
import {
  AiIcon,
  AutomationIcon,
  CollaborationIcon,
  PlanningBarIcon,
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
  const isPlanning = feature.icon === "planning";
  return (
    <article className="flex min-h-[76px] items-center gap-[14px] rounded-[14px] border border-line bg-white px-[14px] py-0.5 transition duration-200 hover:border-brand/40 hover:shadow-card-md motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none md:block md:min-h-[200px] md:rounded-card md:p-6">
      {isPlanning ? (
        <>
          <PlanningBarIcon className="size-11 shrink-0 md:hidden" />
          <Icon className="hidden size-11 shrink-0 md:mb-5 md:block" />
        </>
      ) : (
        <Icon className="size-11 shrink-0 md:mb-5" />
      )}
      <div className="max-md:w-fit">
        <h3 className="text-sm/[17.5px] font-bold text-ink md:mb-1.5 md:text-card-title">
          {feature.title}
        </h3>
        <p className="text-micro text-muted max-md:mt-0.5 max-md:w-0 max-md:min-w-full md:text-body-sm/[16.9px]">
          <span className="md:hidden">{feature.mobileDescription}</span>
          <span className="hidden md:inline">{feature.description}</span>
        </p>
      </div>
    </article>
  );
}
