import { jsx as e } from "react/jsx-runtime";
import { Checkbox as a, CheckboxIndicator as t } from "./index.es68.js";
import o from "./index.es69.js";
import { cn as d } from "./index.es48.js";
function l({
  className: r,
  ...i
}) {
  return /* @__PURE__ */ e(
    a,
    {
      "data-slot": "checkbox",
      className: d(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        r
      ),
      ...i,
      children: /* @__PURE__ */ e(
        t,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ e(o, { className: "size-3.5" })
        }
      )
    }
  );
}
export {
  l as Checkbox
};
//# sourceMappingURL=index.es14.js.map
