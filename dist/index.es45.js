import { jsx as o, jsxs as a } from "react/jsx-runtime";
import { Root as n, Trigger as d, Portal as l, Content as s, Arrow as f, Provider as m } from "./index.es100.js";
import { cn as p } from "./index.es48.js";
function c({
  delayDuration: t = 0,
  ...r
}) {
  return /* @__PURE__ */ o(
    m,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...r
    }
  );
}
function b({ ...t }) {
  return /* @__PURE__ */ o(c, { children: /* @__PURE__ */ o(n, { "data-slot": "tooltip", ...t }) });
}
function T({
  ...t
}) {
  return /* @__PURE__ */ o(d, { "data-slot": "tooltip-trigger", ...t });
}
function h({
  className: t,
  sideOffset: r = 0,
  children: e,
  ...i
}) {
  return /* @__PURE__ */ o(l, { children: /* @__PURE__ */ a(
    s,
    {
      "data-slot": "tooltip-content",
      sideOffset: r,
      className: p(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        t
      ),
      ...i,
      children: [
        e,
        /* @__PURE__ */ o(f, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
export {
  b as Tooltip,
  h as TooltipContent,
  c as TooltipProvider,
  T as TooltipTrigger
};
//# sourceMappingURL=index.es45.js.map
