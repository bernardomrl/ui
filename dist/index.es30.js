import { jsx as r } from "react/jsx-runtime";
import { Root as t, Item as e, Indicator as s } from "./index.es87.js";
import d from "./index.es74.js";
import { cn as o } from "./index.es48.js";
function m({
  className: i,
  ...a
}) {
  return /* @__PURE__ */ r(
    t,
    {
      "data-slot": "radio-group",
      className: o("grid gap-3", i),
      ...a
    }
  );
}
function p({
  className: i,
  ...a
}) {
  return /* @__PURE__ */ r(
    e,
    {
      "data-slot": "radio-group-item",
      className: o(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i
      ),
      ...a,
      children: /* @__PURE__ */ r(
        s,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ r(d, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
export {
  m as RadioGroup,
  p as RadioGroupItem
};
//# sourceMappingURL=index.es30.js.map
