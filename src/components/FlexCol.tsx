import { ComponentProps } from "react";
import { cn } from "../utils";

export interface FlexColProps extends ComponentProps<"section"> {}

export function FlexCol({ children, className, ...props }: FlexColProps) {
  return (
    <section
      className={cn("flex flex-col overflow-hidden", className)}
      {...props}
    >
      {children}
    </section>
  );
}
