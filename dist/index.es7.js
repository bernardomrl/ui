import { jsx as a } from "react/jsx-runtime";
import { Root as o } from "./index.es56.js";
import { cva as n } from "./index.es53.js";
import { cn as s } from "./index.es48.js";
const d = n(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function b({
  className: r,
  variant: e,
  asChild: t = !1,
  ...i
}) {
  return /* @__PURE__ */ a(
    t ? o : "span",
    {
      "data-slot": "badge",
      className: s(d({ variant: e }), r),
      ...i
    }
  );
}
export {
  b as Badge,
  d as badgeVariants
};
//# sourceMappingURL=index.es7.js.map
