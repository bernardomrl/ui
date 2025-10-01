import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { Root as u, Portal as s, Trigger as c, Content as l, Group as m, Label as p, Item as f, CheckboxItem as g, ItemIndicator as i, RadioGroup as v, RadioItem as b, Separator as x, Sub as w, SubTrigger as h, SubContent as z } from "./index.es78.js";
import D from "./index.es69.js";
import M from "./index.es74.js";
import N from "./index.es57.js";
import { cn as a } from "./index.es48.js";
function R({
  ...e
}) {
  return /* @__PURE__ */ t(u, { "data-slot": "dropdown-menu", ...e });
}
function G({
  ...e
}) {
  return /* @__PURE__ */ t(s, { "data-slot": "dropdown-menu-portal", ...e });
}
function T({
  ...e
}) {
  return /* @__PURE__ */ t(c, { "data-slot": "dropdown-menu-trigger", ...e });
}
function j({
  className: e,
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(
    l,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: a(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function L({
  ...e
}) {
  return /* @__PURE__ */ t(m, { "data-slot": "dropdown-menu-group", ...e });
}
function P({
  className: e,
  inset: o,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ t(
    f,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": o,
      "data-variant": n,
      className: a(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function q({
  className: e,
  children: o,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ d(
    g,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: a(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(i, { children: /* @__PURE__ */ t(D, { className: "size-4" }) }) }),
        o
      ]
    }
  );
}
function A({
  ...e
}) {
  return /* @__PURE__ */ t(v, { "data-slot": "dropdown-menu-radio-group", ...e });
}
function B({
  className: e,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    b,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: a(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(i, { children: /* @__PURE__ */ t(M, { className: "size-2 fill-current" }) }) }),
        o
      ]
    }
  );
}
function E({
  className: e,
  inset: o,
  ...n
}) {
  return /* @__PURE__ */ t(
    p,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": o,
      className: a("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function F({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    x,
    {
      "data-slot": "dropdown-menu-separator",
      className: a("bg-border -mx-1 my-1 h-px", e),
      ...o
    }
  );
}
function H({ className: e, ...o }) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: a("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...o
    }
  );
}
function J({
  ...e
}) {
  return /* @__PURE__ */ t(w, { "data-slot": "dropdown-menu-sub", ...e });
}
function K({
  className: e,
  inset: o,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ d(
    h,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": o,
      className: a(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ t(N, { className: "ml-auto size-4" })
      ]
    }
  );
}
function O({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    z,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: a(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...o
    }
  );
}
export {
  R as DropdownMenu,
  q as DropdownMenuCheckboxItem,
  j as DropdownMenuContent,
  L as DropdownMenuGroup,
  P as DropdownMenuItem,
  E as DropdownMenuLabel,
  G as DropdownMenuPortal,
  A as DropdownMenuRadioGroup,
  B as DropdownMenuRadioItem,
  F as DropdownMenuSeparator,
  H as DropdownMenuShortcut,
  J as DropdownMenuSub,
  O as DropdownMenuSubContent,
  K as DropdownMenuSubTrigger,
  T as DropdownMenuTrigger
};
//# sourceMappingURL=index.es20.js.map
