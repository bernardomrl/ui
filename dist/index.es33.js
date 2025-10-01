import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { Root as i, Portal as d, Content as c, Viewport as u, Group as p, Item as m, ItemIndicator as f, ItemText as g, Label as v, ScrollDownButton as x, ScrollUpButton as h, Separator as b, Trigger as w, Icon as y, Value as S } from "./index.es91.js";
import z from "./index.es69.js";
import l from "./index.es51.js";
import N from "./index.es92.js";
import { cn as r } from "./index.es48.js";
function U({ ...e }) {
  return /* @__PURE__ */ t(i, { "data-slot": "select", ...e });
}
function V({ ...e }) {
  return /* @__PURE__ */ t(p, { "data-slot": "select-group", ...e });
}
function G({ ...e }) {
  return /* @__PURE__ */ t(S, { "data-slot": "select-value", ...e });
}
function L({
  className: e,
  size: a = "default",
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    w,
    {
      "data-slot": "select-trigger",
      "data-size": a,
      className: r(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...o,
      children: [
        s,
        /* @__PURE__ */ t(y, { asChild: !0, children: /* @__PURE__ */ t(l, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function R({
  className: e,
  children: a,
  position: s = "popper",
  ...o
}) {
  return /* @__PURE__ */ t(d, { children: /* @__PURE__ */ n(
    c,
    {
      "data-slot": "select-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: s,
      ...o,
      children: [
        /* @__PURE__ */ t(_, {}),
        /* @__PURE__ */ t(
          u,
          {
            className: r(
              "p-1",
              s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: a
          }
        ),
        /* @__PURE__ */ t(C, {})
      ]
    }
  ) });
}
function P({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    v,
    {
      "data-slot": "select-label",
      className: r("text-muted-foreground px-2 py-1.5 text-xs", e),
      ...a
    }
  );
}
function q({
  className: e,
  children: a,
  ...s
}) {
  return /* @__PURE__ */ n(
    m,
    {
      "data-slot": "select-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ t("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(f, { children: /* @__PURE__ */ t(z, { className: "size-4" }) }) }),
        /* @__PURE__ */ t(g, { children: a })
      ]
    }
  );
}
function A({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    b,
    {
      "data-slot": "select-separator",
      className: r("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...a
    }
  );
}
function _({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    h,
    {
      "data-slot": "select-scroll-up-button",
      className: r("flex cursor-default items-center justify-center py-1", e),
      ...a,
      children: /* @__PURE__ */ t(N, { className: "size-4" })
    }
  );
}
function C({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    x,
    {
      "data-slot": "select-scroll-down-button",
      className: r("flex cursor-default items-center justify-center py-1", e),
      ...a,
      children: /* @__PURE__ */ t(l, { className: "size-4" })
    }
  );
}
export {
  U as Select,
  R as SelectContent,
  V as SelectGroup,
  q as SelectItem,
  P as SelectLabel,
  C as SelectScrollDownButton,
  _ as SelectScrollUpButton,
  A as SelectSeparator,
  L as SelectTrigger,
  G as SelectValue
};
//# sourceMappingURL=index.es33.js.map
