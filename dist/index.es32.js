import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { Root as s, Viewport as c, Corner as n, ScrollAreaScrollbar as i, ScrollAreaThumb as u } from "./index.es90.js";
import { cn as a } from "./index.es48.js";
function p({
  className: o,
  children: r,
  ...e
}) {
  return /* @__PURE__ */ t(
    s,
    {
      "data-slot": "scroll-area",
      className: a("relative", o),
      ...e,
      children: [
        /* @__PURE__ */ l(
          c,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: r
          }
        ),
        /* @__PURE__ */ l(d, {}),
        /* @__PURE__ */ l(n, {})
      ]
    }
  );
}
function d({
  className: o,
  orientation: r = "vertical",
  ...e
}) {
  return /* @__PURE__ */ l(
    i,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: r,
      className: a(
        "flex touch-none p-px transition-colors select-none",
        r === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        r === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        o
      ),
      ...e,
      children: /* @__PURE__ */ l(
        u,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
export {
  p as ScrollArea,
  d as ScrollBar
};
//# sourceMappingURL=index.es32.js.map
