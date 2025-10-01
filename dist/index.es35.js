import { jsx as e, jsxs as n } from "react/jsx-runtime";
import { Root as l, Trigger as d, Close as r, Content as c, Title as u, Description as f, Portal as m, Overlay as h } from "./index.es75.js";
import p from "./index.es76.js";
import { cn as a } from "./index.es48.js";
function v({ ...t }) {
  return /* @__PURE__ */ e(l, { "data-slot": "sheet", ...t });
}
function w({ ...t }) {
  return /* @__PURE__ */ e(d, { "data-slot": "sheet-trigger", ...t });
}
function C({ ...t }) {
  return /* @__PURE__ */ e(r, { "data-slot": "sheet-close", ...t });
}
function g({ ...t }) {
  return /* @__PURE__ */ e(m, { "data-slot": "sheet-portal", ...t });
}
function x({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ e(
    h,
    {
      "data-slot": "sheet-overlay",
      className: a(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...o
    }
  );
}
function T({
  className: t,
  children: o,
  side: s = "right",
  ...i
}) {
  return /* @__PURE__ */ n(g, { children: [
    /* @__PURE__ */ e(x, {}),
    /* @__PURE__ */ n(
      c,
      {
        "data-slot": "sheet-content",
        className: a(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          s === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          s === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          s === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          s === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          t
        ),
        ...i,
        children: [
          o,
          /* @__PURE__ */ n(r, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ e(p, { className: "size-4" }),
            /* @__PURE__ */ e("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function k({ className: t, ...o }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "sheet-header",
      className: a("flex flex-col gap-1.5 p-4", t),
      ...o
    }
  );
}
function z({ className: t, ...o }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "sheet-footer",
      className: a("mt-auto flex flex-col gap-2 p-4", t),
      ...o
    }
  );
}
function j({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ e(
    u,
    {
      "data-slot": "sheet-title",
      className: a("text-foreground font-semibold", t),
      ...o
    }
  );
}
function D({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ e(
    f,
    {
      "data-slot": "sheet-description",
      className: a("text-muted-foreground text-sm", t),
      ...o
    }
  );
}
export {
  v as Sheet,
  C as SheetClose,
  T as SheetContent,
  D as SheetDescription,
  z as SheetFooter,
  k as SheetHeader,
  j as SheetTitle,
  w as SheetTrigger
};
//# sourceMappingURL=index.es35.js.map
