"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import {
  dashboardNav,
  dashboardViews,
  rowToneColor,
  type DashboardTab,
} from "@/data/dashboard";
import { Logo } from "@/components/ui/Logo";

const tabId = (tab: DashboardTab) => `dash-tab-${tab.toLowerCase()}`;
const PANEL_ID = "dash-panel";

/**
 * Coded product visual for the hero (Figma 1:619 desktop, 2:1114 mobile).
 * The sidebar items are tabs; Overview is the Figma design, the other views are
 * placeholder content in the same layout so the card never changes size.
 * Mobile uses compact copy (`shortLabel` / `shortTitle`).
 */
export function DashboardMockup() {
  const [active, setActive] = useState<DashboardTab>("Overview");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = dashboardViews[active];

  const select = (index: number) => {
    setActive(dashboardNav[index]);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const current = dashboardNav.indexOf(active);
    const last = dashboardNav.length - 1;
    let target: number | null = null;
    if (event.key === "ArrowDown") target = current === last ? 0 : current + 1;
    else if (event.key === "ArrowUp") target = current === 0 ? last : current - 1;
    else if (event.key === "Home") target = 0;
    else if (event.key === "End") target = last;
    if (target !== null) {
      event.preventDefault();
      select(target);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[628.8px] items-start xl:mx-0 gap-3 overflow-hidden rounded-card-lg border border-line bg-white p-[15px] shadow-card-lg md:h-[430px] md:gap-4 md:p-[17px]">
      <div className="h-[239px] w-[110px] shrink-0 rounded-[14px] bg-surface-side p-[11px] md:h-[398px] md:w-[150px] md:p-4">
        <Logo
          className="mb-1.5 h-8 px-1 md:mb-4 md:h-auto md:px-0"
          textClassName="text-[13px] md:text-[17px]"
          markClassName="hidden"
        />
        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Dashboard views"
          onKeyDown={onKeyDown}
          className="flex flex-col gap-1.5 md:gap-1"
        >
          {dashboardNav.map((item, i) => {
            const selected = item === active;
            return (
              <button
                key={item}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={tabId(item)}
                aria-selected={selected}
                aria-controls={PANEL_ID}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(item)}
                className={`flex w-full items-center rounded-lg px-2 text-left text-[11px]/[16.5px] transition-colors duration-150 motion-reduce:transition-none md:px-3 md:text-body-sm ${
                  selected
                    ? "h-[26px] bg-surface-nav font-semibold text-brand md:h-[30px]"
                    : "h-[25px] font-medium text-muted hover:bg-surface-nav/60 hover:text-ink md:h-8"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div
        role="tabpanel"
        id={PANEL_ID}
        aria-labelledby={tabId(active)}
        className="min-w-0 flex-1 md:h-full md:py-2 md:pr-2"
      >
        <div key={active} className="motion-safe:animate-tab-in">
          <h3 className="text-sm/[21px] font-bold text-ink md:text-xl/[25px]">
            {view.heading}
          </h3>
          <p className="text-[9.5px]/[11.88px] text-muted md:mt-1 md:text-micro">
            {view.subtitle}
          </p>

          <div className="flex gap-1.5 pt-[8.6px] md:gap-[10px] md:pt-[15.5px]">
            {view.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex h-[46px] min-w-0 flex-1 flex-col items-center justify-start rounded-lg border border-line bg-surface-stat p-[5px] text-center md:h-[82px] md:items-start md:justify-center md:rounded-xl md:px-[13px] md:py-0 md:text-left"
              >
                <span className="text-sm/[14px] font-bold text-ink md:text-[21px]/[26.25px]">
                  {stat.value}
                </span>
                <span className="pt-[2px] text-[8px]/[10px] font-medium text-muted md:pt-1 md:text-micro">
                  <span className="md:hidden">{stat.shortLabel}</span>
                  <span className="hidden md:inline">{stat.label}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="pt-[10.6px] md:pt-6">
            <h4 className="pb-[4.6px] text-[11px]/[16.5px] font-bold text-ink md:pb-2 md:text-body">
              {view.listTitle}
            </h4>
            <ul className="border-t border-line-soft">
              {view.rows.map((row, i) => (
                <li
                  key={row.title}
                  className={`flex items-center justify-between gap-2 pt-1 pb-1 md:py-2 ${
                    i < view.rows.length - 1 ? "border-b border-line-soft" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-1.5 md:gap-3">
                    <span className="size-3.5 shrink-0 rounded-[4px] bg-surface-chip md:size-[18px] md:rounded-md" />
                    <span className="truncate text-[9.5px]/[14.25px] font-medium text-ink md:text-caption">
                      <span className="md:hidden">{row.shortTitle}</span>
                      <span className="hidden md:inline">{row.title}</span>
                    </span>
                  </span>
                  <span
                    className={`shrink-0 text-[8.5px]/[12.75px] font-semibold md:text-micro ${rowToneColor[row.tone]}`}
                  >
                    {row.meta}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
