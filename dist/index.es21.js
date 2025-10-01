import { jsx as o } from "react/jsx-runtime";
import { Root as d, Trigger as n, Portal as i, Content as s } from "./index.es79.js";
import { cn as m } from "./index.es48.js";
function p({ ...t }) {
  return /* @__PURE__ */ o(d, { "data-slot": "hover-card", ...t });
}
function g({
  ...t
}) {
  return /* @__PURE__ */ o(n, { "data-slot": "hover-card-trigger", ...t });
}
function u({
  className: t,
  align: e = "center",
  sideOffset: a = 4,
  ...r
}) {
  return /* @__PURE__ */ o(i, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ o(
    s,
    {
      "data-slot": "hover-card-content",
      align: e,
      sideOffset: a,
      className: m(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        t
      ),
      ...r
    }
  ) });
}
export {
  p as HoverCard,
  u as HoverCardContent,
  g as HoverCardTrigger
};
//# sourceMappingURL=index.es21.js.map
