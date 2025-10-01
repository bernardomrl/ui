import * as a from "react";
import { composeEventHandlers as f } from "./index.es109.js";
import { createContextScope as B } from "./index.es103.js";
import { Primitive as F } from "./index.es106.js";
import { createMenuScope as h, Root as X, Anchor as j, Portal as H, Content as W, Item as $, CheckboxItem as K, ItemIndicator as Y, RadioItem as q, Label as z, Separator as J, Group as Q, Sub as V, SubContent as Z, SubTrigger as ee, RadioGroup as te, Arrow as ne } from "./index.es120.js";
import { useCallbackRef as oe } from "./index.es104.js";
import { useControllableState as re } from "./index.es111.js";
import { jsx as u, jsxs as ae, Fragment as ue } from "react/jsx-runtime";
var v = "ContextMenu", [ie] = B(v, [
  h
]), i = h(), [ce, g] = ie(v), R = (e) => {
  const { __scopeContextMenu: n, children: o, onOpenChange: t, dir: r, modal: d = !0 } = e, [p, c] = a.useState(!1), x = i(n), C = oe(t), s = a.useCallback(
    (m) => {
      c(m), C(m);
    },
    [C]
  );
  return /* @__PURE__ */ u(
    ce,
    {
      scope: n,
      open: p,
      onOpenChange: s,
      modal: d,
      children: /* @__PURE__ */ u(
        X,
        {
          ...x,
          dir: r,
          open: p,
          onOpenChange: s,
          modal: d,
          children: o
        }
      )
    }
  );
};
R.displayName = v;
var _ = "ContextMenuTrigger", P = a.forwardRef(
  (e, n) => {
    const { __scopeContextMenu: o, disabled: t = !1, ...r } = e, d = g(_, o), p = i(o), c = a.useRef({ x: 0, y: 0 }), x = a.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...c.current })
    }), C = a.useRef(0), s = a.useCallback(
      () => window.clearTimeout(C.current),
      []
    ), m = (l) => {
      c.current = { x: l.clientX, y: l.clientY }, d.onOpenChange(!0);
    };
    return a.useEffect(() => s, [s]), a.useEffect(() => void (t && s()), [t, s]), /* @__PURE__ */ ae(ue, { children: [
      /* @__PURE__ */ u(j, { ...p, virtualRef: x }),
      /* @__PURE__ */ u(
        F.span,
        {
          "data-state": d.open ? "open" : "closed",
          "data-disabled": t ? "" : void 0,
          ...r,
          ref: n,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: t ? e.onContextMenu : f(e.onContextMenu, (l) => {
            s(), m(l), l.preventDefault();
          }),
          onPointerDown: t ? e.onPointerDown : f(
            e.onPointerDown,
            M((l) => {
              s(), C.current = window.setTimeout(() => m(l), 700);
            })
          ),
          onPointerMove: t ? e.onPointerMove : f(e.onPointerMove, M(s)),
          onPointerCancel: t ? e.onPointerCancel : f(e.onPointerCancel, M(s)),
          onPointerUp: t ? e.onPointerUp : f(e.onPointerUp, M(s))
        }
      )
    ] });
  }
);
P.displayName = _;
var se = "ContextMenuPortal", S = (e) => {
  const { __scopeContextMenu: n, ...o } = e, t = i(n);
  return /* @__PURE__ */ u(H, { ...t, ...o });
};
S.displayName = se;
var b = "ContextMenuContent", I = a.forwardRef(
  (e, n) => {
    const { __scopeContextMenu: o, ...t } = e, r = g(b, o), d = i(o), p = a.useRef(!1);
    return /* @__PURE__ */ u(
      W,
      {
        ...d,
        ...t,
        ref: n,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (c) => {
          e.onCloseAutoFocus?.(c), !c.defaultPrevented && p.current && c.preventDefault(), p.current = !1;
        },
        onInteractOutside: (c) => {
          e.onInteractOutside?.(c), !c.defaultPrevented && !r.modal && (p.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
I.displayName = b;
var pe = "ContextMenuGroup", N = a.forwardRef(
  (e, n) => {
    const { __scopeContextMenu: o, ...t } = e, r = i(o);
    return /* @__PURE__ */ u(Q, { ...r, ...t, ref: n });
  }
);
N.displayName = pe;
var de = "ContextMenuLabel", w = a.forwardRef(
  (e, n) => {
    const { __scopeContextMenu: o, ...t } = e, r = i(o);
    return /* @__PURE__ */ u(z, { ...r, ...t, ref: n });
  }
);
w.displayName = de;
var le = "ContextMenuItem", A = a.forwardRef(
  (e, n) => {
    const { __scopeContextMenu: o, ...t } = e, r = i(o);
    return /* @__PURE__ */ u($, { ...r, ...t, ref: n });
  }
);
A.displayName = le;
var xe = "ContextMenuCheckboxItem", E = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(K, { ...r, ...t, ref: n });
});
E.displayName = xe;
var Ce = "ContextMenuRadioGroup", O = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(te, { ...r, ...t, ref: n });
});
O.displayName = Ce;
var me = "ContextMenuRadioItem", T = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(q, { ...r, ...t, ref: n });
});
T.displayName = me;
var fe = "ContextMenuItemIndicator", y = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(Y, { ...r, ...t, ref: n });
});
y.displayName = fe;
var Me = "ContextMenuSeparator", G = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(J, { ...r, ...t, ref: n });
});
G.displayName = Me;
var ve = "ContextMenuArrow", he = a.forwardRef(
  (e, n) => {
    const { __scopeContextMenu: o, ...t } = e, r = i(o);
    return /* @__PURE__ */ u(ne, { ...r, ...t, ref: n });
  }
);
he.displayName = ve;
var k = "ContextMenuSub", D = (e) => {
  const { __scopeContextMenu: n, children: o, onOpenChange: t, open: r, defaultOpen: d } = e, p = i(n), [c, x] = re({
    prop: r,
    defaultProp: d ?? !1,
    onChange: t,
    caller: k
  });
  return /* @__PURE__ */ u(V, { ...p, open: c, onOpenChange: x, children: o });
};
D.displayName = k;
var ge = "ContextMenuSubTrigger", L = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(ee, { ...r, ...t, ref: n });
});
L.displayName = ge;
var Re = "ContextMenuSubContent", U = a.forwardRef((e, n) => {
  const { __scopeContextMenu: o, ...t } = e, r = i(o);
  return /* @__PURE__ */ u(
    Z,
    {
      ...r,
      ...t,
      ref: n,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
U.displayName = Re;
function M(e) {
  return (n) => n.pointerType !== "mouse" ? e(n) : void 0;
}
var Ae = R, Ee = P, Oe = S, Te = I, ye = N, Ge = w, ke = A, De = E, Le = O, Ue = T, Be = y, Fe = G, Xe = D, je = L, He = U;
export {
  De as CheckboxItem,
  Te as Content,
  R as ContextMenu,
  he as ContextMenuArrow,
  E as ContextMenuCheckboxItem,
  I as ContextMenuContent,
  N as ContextMenuGroup,
  A as ContextMenuItem,
  y as ContextMenuItemIndicator,
  w as ContextMenuLabel,
  S as ContextMenuPortal,
  O as ContextMenuRadioGroup,
  T as ContextMenuRadioItem,
  G as ContextMenuSeparator,
  D as ContextMenuSub,
  U as ContextMenuSubContent,
  L as ContextMenuSubTrigger,
  P as ContextMenuTrigger,
  ye as Group,
  ke as Item,
  Be as ItemIndicator,
  Ge as Label,
  Oe as Portal,
  Le as RadioGroup,
  Ue as RadioItem,
  Ae as Root,
  Fe as Separator,
  Xe as Sub,
  He as SubContent,
  je as SubTrigger,
  Ee as Trigger
};
//# sourceMappingURL=index.es73.js.map
