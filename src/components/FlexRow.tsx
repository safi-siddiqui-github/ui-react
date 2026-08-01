import { ComponentProps } from "react";
import { cn } from "../utils";

export interface FlexRowProps extends ComponentProps<"section"> {}

export function FlexRow({ children, className, ...props }: FlexRowProps) {
  return (
    <section
      className={cn(
        "flex flex-row overflow-hidden flex-wrap items-center",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
