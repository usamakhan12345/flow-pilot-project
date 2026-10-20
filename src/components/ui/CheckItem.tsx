import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons";

type CheckItemProps = {
  children: ReactNode;
  className?: string;
  iconClassName?: string;
};

export function CheckItem({
  children,
  className = "",
  iconClassName = "",
}: CheckItemProps) {
  return (
    <li className={`flex items-center text-muted ${className}`}>
      <CheckIcon className={`h-[9.4px] w-[9.1px] shrink-0 text-green ${iconClassName}`} />
      <span>{children}</span>
    </li>
  );
}
