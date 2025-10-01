import { jsx as i } from "react/jsx-runtime";
import { Root as a } from "./index.es99.js";
import { cva as o } from "./index.es53.js";
import { cn as s } from "./index.es48.js";
const d = o(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function v({
  className: e,
  variant: t,
  size: r,
  ...n
}) {
  return /* @__PURE__ */ i(
    a,
    {
      "data-slot": "toggle",
      className: s(d({ variant: t, size: r, className: e })),
      ...n
    }
  );
}
export {
  v as Toggle,
  d as toggleVariants
};
//# sourceMappingURL=index.es44.js.map
