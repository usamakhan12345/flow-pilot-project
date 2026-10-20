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

  // The tab row scrolls on mobile (Figma clips the third tab); bring the chosen tab fully into view.
  const reveal = (index: number) => {
    tabRefs.current[index]?.scrollIntoView?.({ block: "nearest", inline: "nearest" });
  };

  const select = (index: number) => {
    setActiveIndex(index);
    const tab = tabRefs.current[index];
    tab?.focus({ preventScroll: true });
    reveal(index);
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
      className="pb-[52px] md:py-14"
    >
      <Container>
        <div className="flex flex-col gap-[25.5px] -ml-[3px] -mr-[5px] rounded-banner bg-soft-gradient pl-[29px] pr-6 pt-[40.5px] pb-[57px] md:mx-0 md:gap-8 md:p-10 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
          <div className="min-w-0 xl:flex-1">
            <h2
              id="how-title"
              className="mt-[4.5px] mb-[5.5px] text-[30px]/[37.5px] font-extrabold text-ink md:mt-0 md:mb-2"
            >
              Plan, automate, collaborate
            </h2>
            <p className="mb-3.5 text-body text-muted md:mb-6">
              One workflow, three ways to move work forward.
            </p>

            <div
              role="tablist"
              aria-label="Workflow stages"
              onKeyDown={onKeyDown}
              className="-ml-1 -mr-6 -mt-1 mb-6 flex gap-3 overflow-x-auto p-1 pr-0 [scrollbar-width:none] md:m-0 md:mb-8 md:overflow-visible md:p-0 [&::-webkit-scrollbar]:hidden"
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
                    onClick={() => {
                      setActiveIndex(index);
                      reveal(index);
                    }}
                    className="h-10 min-w-[108px] shrink-0 px-[22px] md:w-[108px] md:px-0"
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
              className="grid min-h-[80px] rounded-[14px] border border-line bg-white pl-6 pr-[23px] py-2.5 md:py-[11px] md:px-[25px] xl:max-w-[560px]"
            >
              {/* All tab copies share one grid cell so the card keeps the height of the
                  tallest copy and the section never shifts when the tab changes. */}
              {tabs.map((tab) =>
                tab.id === active.id ? (
                  <div
                    key={tab.id}
                    className="col-start-1 row-start-1 flex flex-col justify-center"
                  >
                    <h3 className="text-card-title/[22px] font-bold text-ink">
                      {tab.title}
                    </h3>
                    <p className="text-caption text-muted">{tab.description}</p>
                  </div>
                ) : (
                  <div
                    key={tab.id}
                    aria-hidden="true"
                    className="invisible col-start-1 row-start-1 flex flex-col justify-center"
                  >
                    <p className="text-card-title/[22px] font-bold">{tab.title}</p>
                    <p className="text-caption">{tab.description}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center ml-[-18.5px] mr-[-12.5px] rounded-card border border-line bg-white px-8 pt-[52.25px] pb-9 md:mx-0 md:p-[33px] xl:min-h-[210px] xl:w-[487px] xl:shrink-0">
            <p className="mb-[3px] text-[40px]/[40px] font-extrabold text-ink md:mb-1">
              {active.stat}
            </p>
            <p className="mb-[10.25px] text-body-sm font-medium text-muted md:mb-6">
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
