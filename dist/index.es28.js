import { jsx as t } from "react/jsx-runtime";
import { Root as n, Trigger as d, Portal as i, Content as s, Anchor as p } from "./index.es85.js";
import { cn as m } from "./index.es48.js";
function u({ ...o }) {
  return /* @__PURE__ */ t(n, { "data-slot": "popover", ...o });
}
function g({
  ...o
}) {
  return /* @__PURE__ */ t(d, { "data-slot": "popover-trigger", ...o });
}
function v({
  className: o,
  align: e = "center",
  sideOffset: r = 4,
  ...a
}) {
  return /* @__PURE__ */ t(i, { children: /* @__PURE__ */ t(
    s,
    {
      "data-slot": "popover-content",
      align: e,
      sideOffset: r,
      className: m(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        o
      ),
      ...a
    }
  ) });
}
function h({
  ...o
}) {
  return /* @__PURE__ */ t(p, { "data-slot": "popover-anchor", ...o });
}
export {
  u as Popover,
  h as PopoverAnchor,
  v as PopoverContent,
  g as PopoverTrigger
};
//# sourceMappingURL=index.es28.js.map
