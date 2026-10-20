import {
  dashboardNav,
  dashboardStats,
  dashboardTasks,
  taskStatusColor,
} from "@/data/dashboard";
import { Logo } from "@/components/ui/Logo";

/** Decorative, coded product visual for the hero (Figma 1:619). Hidden from assistive tech. */
export function DashboardMockup() {
  return (
    <div
      aria-hidden="true"
      className="flex w-full max-w-[628.8px] items-start gap-3 overflow-hidden rounded-card-lg border border-line bg-white p-[15px] shadow-card-lg md:h-[430px] md:gap-4 md:p-[17px]"
    >
      <div className="w-[110px] shrink-0 rounded-[14px] bg-surface-side p-3 md:h-[398px] md:w-[150px] md:p-4">
        <Logo
          className="mb-3 md:mb-4"
          textClassName="text-[13px] md:text-[17px]"
          markClassName="hidden"
        />
        <ul className="flex flex-col gap-1">
          {dashboardNav.map((item, i) => (
            <li
              key={item}
              className={
                i === 0
                  ? "flex h-[26px] items-center rounded-lg bg-surface-nav px-2.5 text-[10px] font-semibold text-brand md:h-[30px] md:px-3 md:text-body-sm"
                  : "flex h-[26px] items-center px-2.5 text-[10px] font-medium text-muted md:h-8 md:px-3 md:text-body-sm"
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="min-w-0 flex-1 md:h-full md:py-2 md:pr-2">
        <h3 className="text-sm font-bold text-ink md:text-xl/[25px]">
          Good morning, Sarah!
        </h3>
        <p className="mt-1 text-[9.5px] text-muted md:text-micro">
          Here&apos;s what is happening with your team today.
        </p>

        <div className="flex gap-1.5 pt-3 md:gap-[10px]">
          {dashboardStats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-0 flex-1 flex-col justify-center rounded-xl border border-line bg-surface-stat px-2 py-2 md:h-[82px] md:px-[13px] md:py-0"
            >
              <span className="text-sm font-bold text-ink md:text-[21px]/[26.25px]">
                {stat.value}
              </span>
              <span className="pt-1 text-[8px] leading-tight font-medium text-muted md:text-micro">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 md:pt-5">
          <h4 className="pb-2 text-[11px] font-bold text-ink md:text-body">
            Today&apos;s Tasks
          </h4>
          <ul className="border-t border-line-soft">
            {dashboardTasks.map((task, i) => (
              <li
                key={task.title}
                className={`flex items-center justify-between gap-2 py-2 md:pb-[9px] ${
                  i < dashboardTasks.length - 1 ? "border-b border-line-soft" : ""
                }`}
              >
                <span className="flex min-w-0 items-center gap-2 md:gap-3">
                  <span className="size-3.5 shrink-0 rounded-[5px] bg-surface-chip md:size-[18px] md:rounded-md" />
                  <span className="truncate text-[9.5px] font-medium text-ink md:text-caption">
                    {task.title}
                  </span>
                </span>
                <span
                  className={`shrink-0 text-[8.5px] font-semibold md:text-micro ${taskStatusColor[task.status]}`}
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
