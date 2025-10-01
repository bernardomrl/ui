import * as u from "react";
import { composeEventHandlers as m } from "./index.es109.js";
import { composeRefs as K } from "./index.es108.js";
import { createContextScope as U } from "./index.es103.js";
import { useControllableState as g } from "./index.es111.js";
import { Primitive as B } from "./index.es106.js";
import { createMenuScope as D, Root as F, Portal as H, Anchor as W, Content as $, Group as j, Label as X, Item as q, CheckboxItem as z, ItemIndicator as J, RadioGroup as Q, RadioItem as V, Separator as Y, Sub as Z, SubTrigger as oo, SubContent as eo, Arrow as ro } from "./index.es120.js";
import { useId as M } from "./index.es112.js";
import { jsx as t } from "react/jsx-runtime";
var f = "DropdownMenu", [no] = U(
  f,
  [D]
), i = D(), [ao, _] = no(f), h = (o) => {
  const {
    __scopeDropdownMenu: n,
    children: r,
    dir: e,
    open: a,
    defaultOpen: d,
    onOpenChange: s,
    modal: p = !0
  } = o, c = i(n), v = u.useRef(null), [l, w] = g({
    prop: a,
    defaultProp: d ?? !1,
    onChange: s,
    caller: f
  });
  return /* @__PURE__ */ t(
    ao,
    {
      scope: n,
      triggerId: M(),
      triggerRef: v,
      contentId: M(),
      open: l,
      onOpenChange: w,
      onOpenToggle: u.useCallback(() => w((L) => !L), [w]),
      modal: p,
      children: /* @__PURE__ */ t(F, { ...c, open: l, onOpenChange: w, dir: e, modal: p, children: r })
    }
  );
};
h.displayName = f;
var R = "DropdownMenuTrigger", b = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, disabled: e = !1, ...a } = o, d = _(R, r), s = i(r);
    return /* @__PURE__ */ t(W, { asChild: !0, ...s, children: /* @__PURE__ */ t(
      B.button,
      {
        type: "button",
        id: d.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": d.open,
        "aria-controls": d.open ? d.contentId : void 0,
        "data-state": d.open ? "open" : "closed",
        "data-disabled": e ? "" : void 0,
        disabled: e,
        ...a,
        ref: K(n, d.triggerRef),
        onPointerDown: m(o.onPointerDown, (p) => {
          !e && p.button === 0 && p.ctrlKey === !1 && (d.onOpenToggle(), d.open || p.preventDefault());
        }),
        onKeyDown: m(o.onKeyDown, (p) => {
          e || (["Enter", " "].includes(p.key) && d.onOpenToggle(), p.key === "ArrowDown" && d.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault());
        })
      }
    ) });
  }
);
b.displayName = R;
var to = "DropdownMenuPortal", I = (o) => {
  const { __scopeDropdownMenu: n, ...r } = o, e = i(n);
  return /* @__PURE__ */ t(H, { ...e, ...r });
};
I.displayName = to;
var S = "DropdownMenuContent", C = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = _(S, r), d = i(r), s = u.useRef(!1);
    return /* @__PURE__ */ t(
      $,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...d,
        ...e,
        ref: n,
        onCloseAutoFocus: m(o.onCloseAutoFocus, (p) => {
          s.current || a.triggerRef.current?.focus(), s.current = !1, p.preventDefault();
        }),
        onInteractOutside: m(o.onInteractOutside, (p) => {
          const c = p.detail.originalEvent, v = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || v;
          (!a.modal || l) && (s.current = !0);
        }),
        style: {
          ...o.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
C.displayName = S;
var po = "DropdownMenuGroup", N = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(j, { ...a, ...e, ref: n });
  }
);
N.displayName = po;
var uo = "DropdownMenuLabel", x = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(X, { ...a, ...e, ref: n });
  }
);
x.displayName = uo;
var io = "DropdownMenuItem", A = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(q, { ...a, ...e, ref: n });
  }
);
A.displayName = io;
var so = "DropdownMenuCheckboxItem", P = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(z, { ...a, ...e, ref: n });
});
P.displayName = so;
var co = "DropdownMenuRadioGroup", E = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(Q, { ...a, ...e, ref: n });
});
E.displayName = co;
var lo = "DropdownMenuRadioItem", O = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(V, { ...a, ...e, ref: n });
});
O.displayName = lo;
var wo = "DropdownMenuItemIndicator", y = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(J, { ...a, ...e, ref: n });
});
y.displayName = wo;
var mo = "DropdownMenuSeparator", T = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(Y, { ...a, ...e, ref: n });
});
T.displayName = mo;
var fo = "DropdownMenuArrow", vo = u.forwardRef(
  (o, n) => {
    const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
    return /* @__PURE__ */ t(ro, { ...a, ...e, ref: n });
  }
);
vo.displayName = fo;
var Mo = (o) => {
  const { __scopeDropdownMenu: n, children: r, open: e, onOpenChange: a, defaultOpen: d } = o, s = i(n), [p, c] = g({
    prop: e,
    defaultProp: d ?? !1,
    onChange: a,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ t(Z, { ...s, open: p, onOpenChange: c, children: r });
}, go = "DropdownMenuSubTrigger", G = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(oo, { ...a, ...e, ref: n });
});
G.displayName = go;
var Do = "DropdownMenuSubContent", k = u.forwardRef((o, n) => {
  const { __scopeDropdownMenu: r, ...e } = o, a = i(r);
  return /* @__PURE__ */ t(
    eo,
    {
      ...a,
      ...e,
      ref: n,
      style: {
        ...o.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
k.displayName = Do;
var xo = h, Ao = b, Po = I, Eo = C, Oo = N, yo = x, To = A, Go = P, ko = E, Lo = O, Ko = y, Uo = T, Bo = Mo, Fo = G, Ho = k;
export {
  Go as CheckboxItem,
  Eo as Content,
  h as DropdownMenu,
  vo as DropdownMenuArrow,
  P as DropdownMenuCheckboxItem,
  C as DropdownMenuContent,
  N as DropdownMenuGroup,
  A as DropdownMenuItem,
  y as DropdownMenuItemIndicator,
  x as DropdownMenuLabel,
  I as DropdownMenuPortal,
  E as DropdownMenuRadioGroup,
  O as DropdownMenuRadioItem,
  T as DropdownMenuSeparator,
  Mo as DropdownMenuSub,
  k as DropdownMenuSubContent,
  G as DropdownMenuSubTrigger,
  b as DropdownMenuTrigger,
  Oo as Group,
  To as Item,
  Ko as ItemIndicator,
  yo as Label,
  Po as Portal,
  ko as RadioGroup,
  Lo as RadioItem,
  xo as Root,
  Uo as Separator,
  Bo as Sub,
  Ho as SubContent,
  Fo as SubTrigger,
  Ao as Trigger
};
//# sourceMappingURL=index.es78.js.map
