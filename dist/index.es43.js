import { jsx as i } from "react/jsx-runtime";
import { Root as u, Item as m } from "./index.es98.js";
import * as s from "react";
import { toggleVariants as g } from "./index.es44.js";
import { cn as d } from "./index.es48.js";
const l = s.createContext({
  size: "default",
  variant: "default"
});
function x({
  className: r,
  variant: o,
  size: t,
  children: e,
  ...n
}) {
  return /* @__PURE__ */ i(
    u,
    {
      "data-slot": "toggle-group",
      "data-variant": o,
      "data-size": t,
      className: d(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        r
      ),
      ...n,
      children: /* @__PURE__ */ i(l.Provider, { value: { variant: o, size: t }, children: e })
    }
  );
}
function z({
  className: r,
  children: o,
  variant: t,
  size: e,
  ...n
}) {
  const a = s.useContext(l);
  return /* @__PURE__ */ i(
    m,
    {
      "data-slot": "toggle-group-item",
      "data-variant": a.variant || t,
      "data-size": a.size || e,
      className: d(
        g({
          variant: a.variant || t,
          size: a.size || e
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        r
      ),
      ...n,
      children: o
    }
  );
}
export {
  x as ToggleGroup,
  z as ToggleGroupItem
};
//# sourceMappingURL=index.es43.js.map
