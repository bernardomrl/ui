import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { Root as s, List as d, Item as u, Content as l, Trigger as g, Link as m, Indicator as c, Viewport as v } from "./index.es84.js";
import { cva as f } from "./index.es53.js";
import p from "./index.es51.js";
import { cn as o } from "./index.es48.js";
function y({
  className: t,
  children: a,
  viewport: n = !0,
  ...r
}) {
  return /* @__PURE__ */ i(
    s,
    {
      "data-slot": "navigation-menu",
      "data-viewport": n,
      className: o(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        t
      ),
      ...r,
      children: [
        a,
        n && /* @__PURE__ */ e(x, {})
      ]
    }
  );
}
function j({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    d,
    {
      "data-slot": "navigation-menu-list",
      className: o(
        "group flex flex-1 list-none items-center justify-center gap-1",
        t
      ),
      ...a
    }
  );
}
function k({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    u,
    {
      "data-slot": "navigation-menu-item",
      className: o("relative", t),
      ...a
    }
  );
}
const w = f(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);
function I({
  className: t,
  children: a,
  ...n
}) {
  return /* @__PURE__ */ i(
    g,
    {
      "data-slot": "navigation-menu-trigger",
      className: o(w(), "group", t),
      ...n,
      children: [
        a,
        " ",
        /* @__PURE__ */ e(
          p,
          {
            className: "relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function L({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    l,
    {
      "data-slot": "navigation-menu-content",
      className: o(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        t
      ),
      ...a
    }
  );
}
function x({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e("div", { className: o("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ e(
    v,
    {
      "data-slot": "navigation-menu-viewport",
      className: o(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
        t
      ),
      ...a
    }
  ) });
}
function C({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    m,
    {
      "data-slot": "navigation-menu-link",
      className: o(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...a
    }
  );
}
function T({
  className: t,
  ...a
}) {
  return /* @__PURE__ */ e(
    c,
    {
      "data-slot": "navigation-menu-indicator",
      className: o(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        t
      ),
      ...a,
      children: /* @__PURE__ */ e("div", { className: "bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" })
    }
  );
}
export {
  y as NavigationMenu,
  L as NavigationMenuContent,
  T as NavigationMenuIndicator,
  k as NavigationMenuItem,
  C as NavigationMenuLink,
  j as NavigationMenuList,
  I as NavigationMenuTrigger,
  x as NavigationMenuViewport,
  w as navigationMenuTriggerStyle
};
//# sourceMappingURL=index.es26.js.map
