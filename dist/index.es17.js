import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { Root as u, Trigger as c, Portal as i, Content as l, Item as m, CheckboxItem as f, ItemIndicator as d, RadioItem as x, Label as p, Separator as g, Group as v, Sub as b, SubContent as h, SubTrigger as C, RadioGroup as z } from "./index.es73.js";
import M from "./index.es69.js";
import N from "./index.es74.js";
import I from "./index.es57.js";
import { cn as a } from "./index.es48.js";
function G({
  ...t
}) {
  return /* @__PURE__ */ e(u, { "data-slot": "context-menu", ...t });
}
function T({
  ...t
}) {
  return /* @__PURE__ */ e(c, { "data-slot": "context-menu-trigger", ...t });
}
function j({
  ...t
}) {
  return /* @__PURE__ */ e(v, { "data-slot": "context-menu-group", ...t });
}
function L({
  ...t
}) {
  return /* @__PURE__ */ e(i, { "data-slot": "context-menu-portal", ...t });
}
function P({
  ...t
}) {
  return /* @__PURE__ */ e(b, { "data-slot": "context-menu-sub", ...t });
}
function q({
  ...t
}) {
  return /* @__PURE__ */ e(z, { "data-slot": "context-menu-radio-group", ...t });
}
function A({
  className: t,
  inset: n,
  children: o,
  ...s
}) {
  return /* @__PURE__ */ r(
    C,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": n,
      className: a(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...s,
      children: [
        o,
        /* @__PURE__ */ e(I, { className: "ml-auto" })
      ]
    }
  );
}
function B({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ e(
    h,
    {
      "data-slot": "context-menu-sub-content",
      className: a(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        t
      ),
      ...n
    }
  );
}
function D({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ e(i, { children: /* @__PURE__ */ e(
    l,
    {
      "data-slot": "context-menu-content",
      className: a(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        t
      ),
      ...n
    }
  ) });
}
function E({
  className: t,
  inset: n,
  variant: o = "default",
  ...s
}) {
  return /* @__PURE__ */ e(
    m,
    {
      "data-slot": "context-menu-item",
      "data-inset": n,
      "data-variant": o,
      className: a(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...s
    }
  );
}
function F({
  className: t,
  children: n,
  checked: o,
  ...s
}) {
  return /* @__PURE__ */ r(
    f,
    {
      "data-slot": "context-menu-checkbox-item",
      className: a(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      checked: o,
      ...s,
      children: [
        /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(M, { className: "size-4" }) }) }),
        n
      ]
    }
  );
}
function H({
  className: t,
  children: n,
  ...o
}) {
  return /* @__PURE__ */ r(
    x,
    {
      "data-slot": "context-menu-radio-item",
      className: a(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...o,
      children: [
        /* @__PURE__ */ e("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e(N, { className: "size-2 fill-current" }) }) }),
        n
      ]
    }
  );
}
function J({
  className: t,
  inset: n,
  ...o
}) {
  return /* @__PURE__ */ e(
    p,
    {
      "data-slot": "context-menu-label",
      "data-inset": n,
      className: a(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        t
      ),
      ...o
    }
  );
}
function K({
  className: t,
  ...n
}) {
  return /* @__PURE__ */ e(
    g,
    {
      "data-slot": "context-menu-separator",
      className: a("bg-border -mx-1 my-1 h-px", t),
      ...n
    }
  );
}
function O({ className: t, ...n }) {
  return /* @__PURE__ */ e(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: a("text-muted-foreground ml-auto text-xs tracking-widest", t),
      ...n
    }
  );
}
export {
  G as ContextMenu,
  F as ContextMenuCheckboxItem,
  D as ContextMenuContent,
  j as ContextMenuGroup,
  E as ContextMenuItem,
  J as ContextMenuLabel,
  L as ContextMenuPortal,
  q as ContextMenuRadioGroup,
  H as ContextMenuRadioItem,
  K as ContextMenuSeparator,
  O as ContextMenuShortcut,
  P as ContextMenuSub,
  B as ContextMenuSubContent,
  A as ContextMenuSubTrigger,
  T as ContextMenuTrigger
};
//# sourceMappingURL=index.es17.js.map
