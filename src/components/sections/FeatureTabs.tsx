"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { featureTabs, type FeatureTab } from "@/data/tabs";
import { Container } from "@/components/ui/Container";
import { PillTab } from "@/components/ui/PillTab";
import { Section } from "@/components/ui/Section";

type FeatureTabsProps = {
  tabs?: FeatureTab[];
};

export function FeatureTabs({ tabs = featureTabs }: FeatureTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const uid = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = tabs[activeIndex];
  const tabId = (id: string) => `${uid}-tab-${id}`;
  const panelId = `${uid}-panel`;

  const select = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = tabs.length - 1;
    let target: number | null = null;
    if (event.key === "ArrowRight") target = activeIndex === last ? 0 : activeIndex + 1;
    else if (event.key === "ArrowLeft") target = activeIndex === 0 ? last : activeIndex - 1;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = last;
    if (target !== null) {
      event.preventDefault();
      select(target);
    }
  };

  return (
    <Section
      id="how-it-works"
      aria-labelledby="how-title"
      className="py-10 md:py-14"
    >
      <Container>
        <div className="flex flex-col gap-8 rounded-banner bg-soft-gradient p-5 md:p-10 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0 xl:flex-1">
            <h2
              id="how-title"
              className="mb-2 text-[30px]/[37.5px] font-extrabold text-ink"
            >
              Plan, automate, collaborate
            </h2>
            <p className="mb-6 text-body text-muted">
              One workflow, three ways to move work forward.
            </p>

            <div
              role="tablist"
              aria-label="Workflow stages"
              onKeyDown={onKeyDown}
              className="mb-8 flex gap-3"
            >
              {tabs.map((tab, index) => {
                const selected = index === activeIndex;
                return (
                  <PillTab
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={tabId(tab.id)}
                    aria-selected={selected}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    selected={selected}
                    onClick={() => setActiveIndex(index)}
                    className="h-10 min-w-0 flex-1 sm:w-[108px] sm:flex-none"
                  >
                    {tab.label}
                  </PillTab>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={panelId}
              aria-labelledby={tabId(active.id)}
              className="flex max-w-[560px] flex-col justify-center rounded-[14px] border border-line bg-white px-[25px] py-4 md:min-h-[80px]"
            >
              <h3 className="text-card-title/[22px] font-bold text-ink">
                {active.title}
              </h3>
              <p className="text-caption text-muted">{active.description}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-card border border-line bg-white p-6 md:p-[33px] xl:min-h-[210px] xl:w-[487px] xl:shrink-0">
            <p className="mb-1 text-[40px]/[40px] font-extrabold text-ink">
              {active.stat}
            </p>
            <p className="mb-6 text-body-sm font-medium text-muted">
              {active.statLabel}
            </p>
            <div
              role="progressbar"
              aria-label={active.statLabel}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(active.progress)}
              className="h-4 w-full max-w-[420px] overflow-hidden rounded-input bg-surface-track"
            >
              <div
                className="h-full rounded-input bg-brand-gradient transition-[width] duration-500 motion-reduce:transition-none"
                style={{ width: `${active.progress}%` }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
