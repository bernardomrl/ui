import { jsx as e } from "react/jsx-runtime";
import { Root as n, Thumb as o } from "./index.es97.js";
import { cn as t } from "./index.es48.js";
function c({
  className: a,
  ...r
}) {
  return /* @__PURE__ */ e(
    n,
    {
      "data-slot": "switch",
      className: t(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ...r,
      children: /* @__PURE__ */ e(
        o,
        {
          "data-slot": "switch-thumb",
          className: t(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
export {
  c as Switch
};
//# sourceMappingURL=index.es40.js.map
