import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { Root as r, Close as l, Content as d, Description as g, Overlay as c, Portal as u, Title as f, Trigger as m } from "./index.es75.js";
import p from "./index.es76.js";
import { cn as o } from "./index.es48.js";
function N({ ...t }) {
  return /* @__PURE__ */ a(r, { "data-slot": "dialog", ...t });
}
function z({
  ...t
}) {
  return /* @__PURE__ */ a(m, { "data-slot": "dialog-trigger", ...t });
}
function x({ ...t }) {
  return /* @__PURE__ */ a(u, { "data-slot": "dialog-portal", ...t });
}
function w({ ...t }) {
  return /* @__PURE__ */ a(l, { "data-slot": "dialog-close", ...t });
}
function v({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    c,
    {
      "data-slot": "dialog-overlay",
      className: o(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  );
}
function C({
  className: t,
  children: e,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ n(x, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a(v, {}),
    /* @__PURE__ */ n(
      d,
      {
        "data-slot": "dialog-content",
        className: o(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          t
        ),
        ...s,
        children: [
          e,
          i && /* @__PURE__ */ n(
            l,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a(p, {}),
                /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function k({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-header",
      className: o("flex flex-col gap-2 text-center sm:text-left", t),
      ...e
    }
  );
}
function T({ className: t, ...e }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", t),
      ...e
    }
  );
}
function j({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    f,
    {
      "data-slot": "dialog-title",
      className: o("text-lg leading-none font-semibold", t),
      ...e
    }
  );
}
function _({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a(
    g,
    {
      "data-slot": "dialog-description",
      className: o("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
export {
  N as Dialog,
  w as DialogClose,
  C as DialogContent,
  _ as DialogDescription,
  T as DialogFooter,
  k as DialogHeader,
  v as DialogOverlay,
  x as DialogPortal,
  j as DialogTitle,
  z as DialogTrigger
};
//# sourceMappingURL=index.es18.js.map
