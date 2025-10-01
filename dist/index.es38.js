import { jsxs as c, jsx as i } from "react/jsx-runtime";
import { Root as h, Track as m, Range as b, Thumb as f } from "./index.es95.js";
import * as u from "react";
import { cn as e } from "./index.es48.js";
function y({
  className: n,
  defaultValue: r,
  value: t,
  min: a = 0,
  max: o = 100,
  ...l
}) {
  const s = u.useMemo(
    () => Array.isArray(t) ? t : Array.isArray(r) ? r : [a, o],
    [t, r, a, o]
  );
  return /* @__PURE__ */ c(
    h,
    {
      "data-slot": "slider",
      defaultValue: r,
      value: t,
      min: a,
      max: o,
      className: e(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        n
      ),
      ...l,
      children: [
        /* @__PURE__ */ i(
          m,
          {
            "data-slot": "slider-track",
            className: e(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            children: /* @__PURE__ */ i(
              b,
              {
                "data-slot": "slider-range",
                className: e(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                )
              }
            )
          }
        ),
        Array.from({ length: s.length }, (g, d) => /* @__PURE__ */ i(
          f,
          {
            "data-slot": "slider-thumb",
            className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          },
          d
        ))
      ]
    }
  );
}
export {
  y as Slider
};
//# sourceMappingURL=index.es38.js.map
