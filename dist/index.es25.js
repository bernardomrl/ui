import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { Root as u, Portal as c, Menu as l, Trigger as m, Content as f, Group as b, Separator as p, Label as g, Item as x, CheckboxItem as v, ItemIndicator as d, RadioGroup as h, RadioItem as M, Sub as z, SubTrigger as N, SubContent as I } from "./index.es83.js";
import S from "./index.es69.js";
import y from "./index.es74.js";
import C from "./index.es57.js";
import { cn as o } from "./index.es48.js";
function L({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    u,
    {
      "data-slot": "menubar",
      className: o(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        e
      ),
      ...t
    }
  );
}
function P({ ...e }) {
  return /* @__PURE__ */ a(l, { "data-slot": "menubar-menu", ...e });
}
function q({ ...e }) {
  return /* @__PURE__ */ a(b, { "data-slot": "menubar-group", ...e });
}
function k({
  ...e
}) {
  return /* @__PURE__ */ a(c, { "data-slot": "menubar-portal", ...e });
}
function A({
  ...e
}) {
  return /* @__PURE__ */ a(h, { "data-slot": "menubar-radio-group", ...e });
}
function B({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    m,
    {
      "data-slot": "menubar-trigger",
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        e
      ),
      ...t
    }
  );
}
function D({
  className: e,
  align: t = "start",
  alignOffset: n = -4,
  sideOffset: r = 8,
  ...i
}) {
  return /* @__PURE__ */ a(k, { children: /* @__PURE__ */ a(
    f,
    {
      "data-slot": "menubar-content",
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...i
    }
  ) });
}
function E({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    x,
    {
      "data-slot": "menubar-item",
      "data-inset": t,
      "data-variant": n,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function F({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    v,
    {
      "data-slot": "menubar-checkbox-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(d, { children: /* @__PURE__ */ a(S, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function H({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ s(
    M,
    {
      "data-slot": "menubar-radio-item",
      className: o(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(d, { children: /* @__PURE__ */ a(y, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function J({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ a(
    g,
    {
      "data-slot": "menubar-label",
      "data-inset": t,
      className: o("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
      ...n
    }
  );
}
function K({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    p,
    {
      "data-slot": "menubar-separator",
      className: o("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function O({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: o("text-muted-foreground ml-auto text-xs tracking-widest", e),
      ...t
    }
  );
}
function Q({ ...e }) {
  return /* @__PURE__ */ a(z, { "data-slot": "menubar-sub", ...e });
}
function U({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ s(
    N,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": t,
      className: o(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ a(C, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
}
function V({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    I,
    {
      "data-slot": "menubar-sub-content",
      className: o(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
export {
  L as Menubar,
  F as MenubarCheckboxItem,
  D as MenubarContent,
  q as MenubarGroup,
  E as MenubarItem,
  J as MenubarLabel,
  P as MenubarMenu,
  k as MenubarPortal,
  A as MenubarRadioGroup,
  H as MenubarRadioItem,
  K as MenubarSeparator,
  O as MenubarShortcut,
  Q as MenubarSub,
  V as MenubarSubContent,
  U as MenubarSubTrigger,
  B as MenubarTrigger
};
//# sourceMappingURL=index.es25.js.map
