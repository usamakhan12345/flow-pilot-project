import {
  dashboardNav,
  dashboardStats,
  dashboardTasks,
  taskStatusColor,
} from "@/data/dashboard";
import { Logo } from "@/components/ui/Logo";

/**
 * Decorative, coded product visual for the hero (Figma 1:619 desktop, 2:1114 mobile).
 * Hidden from assistive tech. Mobile uses compact copy (`shortLabel` / `shortTitle`).
 */
export function DashboardMockup() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex w-full max-w-[628.8px] items-start xl:mx-0 gap-3 overflow-hidden rounded-card-lg border border-line bg-white p-[15px] shadow-card-lg md:h-[430px] md:gap-4 md:p-[17px]"
    >
      <div className="h-[239px] w-[110px] shrink-0 rounded-[14px] bg-surface-side p-[11px] md:h-[398px] md:w-[150px] md:p-4">
        <Logo
          className="mb-1.5 h-8 px-1 md:mb-4 md:h-auto md:px-0"
          textClassName="text-[13px] md:text-[17px]"
          markClassName="hidden"
        />
        <ul className="flex flex-col gap-1.5 md:gap-1">
          {dashboardNav.map((item, i) => (
            <li
              key={item}
              className={
                i === 0
                  ? "flex h-[26px] items-center rounded-lg bg-surface-nav px-2 text-[11px]/[16.5px] font-semibold text-brand md:h-[30px] md:px-3 md:text-body-sm"
                  : "flex h-[25px] items-center px-2 text-[11px]/[16.5px] font-medium text-muted md:h-8 md:px-3 md:text-body-sm"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0 flex-1 md:h-full md:py-2 md:pr-2">
        <h3 className="text-sm/[21px] font-bold text-ink md:text-xl/[25px]">
          Good morning, Sarah!
        </h3>
        <p className="text-[9.5px]/[11.88px] text-muted md:mt-1 md:text-micro">
          Here&apos;s what is happening with your team today.
        </p>

        <div className="flex gap-1.5 pt-[8.6px] md:gap-[10px] md:pt-[15.5px]">
          {dashboardStats.map((stat) => (
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
            Today&apos;s Tasks
          </h4>
          <ul className="border-t border-line-soft">
            {dashboardTasks.map((task, i) => (
              <li
                key={task.title}
                className={`flex items-center justify-between gap-2 pt-1 pb-1 md:py-2 ${
                  i < dashboardTasks.length - 1 ? "border-b border-line-soft" : ""
                }`}
              >
                <span className="flex min-w-0 items-center gap-1.5 md:gap-3">
                  <span className="size-3.5 shrink-0 rounded-[4px] bg-surface-chip md:size-[18px] md:rounded-md" />
                  <span className="truncate text-[9.5px]/[14.25px] font-medium text-ink md:text-caption">
                    <span className="md:hidden">{task.shortTitle}</span>
                    <span className="hidden md:inline">{task.title}</span>
                  </span>
                </span>
                <span
                  className={`shrink-0 text-[8.5px]/[12.75px] font-semibold md:text-micro ${taskStatusColor[task.status]}`}
                >
                  {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
