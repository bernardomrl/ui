import { jsx as r } from "react/jsx-runtime";
import { Root as a, Indicator as s } from "./index.es86.js";
import { cn as e } from "./index.es48.js";
function m({
  className: o,
  value: l,
  ...t
}) {
  return /* @__PURE__ */ r(
    a,
    {
      "data-slot": "progress",
      className: e(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        o
      ),
      ...t,
      children: /* @__PURE__ */ r(
        s,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (l || 0)}%)` }
        }
      )
    }
  );
}
export {
  m as Progress
};
//# sourceMappingURL=index.es29.js.map
