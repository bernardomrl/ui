import * as n from "react";
import { composeEventHandlers as d } from "./index.es109.js";
import { createContextScope as k } from "./index.es103.js";
import { useControllableState as F } from "./index.es111.js";
import { useComposedRefs as I } from "./index.es108.js";
import { createPopperScope as T, Root as U, Anchor as W, Content as B, Arrow as G } from "./index.es121.js";
import { Portal as K } from "./index.es122.js";
import { Presence as H } from "./index.es116.js";
import { Primitive as $ } from "./index.es106.js";
import { DismissableLayer as j } from "./index.es123.js";
import { jsx as i } from "react/jsx-runtime";
var g, w = "HoverCard", [O] = k(w, [
  T
]), b = T(), [V, E] = O(w), _ = (e) => {
  const {
    __scopeHoverCard: o,
    children: t,
    open: s,
    defaultOpen: a,
    onOpenChange: c,
    openDelay: f = 700,
    closeDelay: v = 300
  } = e, l = b(o), C = n.useRef(0), u = n.useRef(0), m = n.useRef(!1), p = n.useRef(!1), [h, r] = F({
    prop: s,
    defaultProp: a ?? !1,
    onChange: c,
    caller: w
  }), P = n.useCallback(() => {
    clearTimeout(u.current), C.current = window.setTimeout(() => r(!0), f);
  }, [f, r]), L = n.useCallback(() => {
    clearTimeout(C.current), !m.current && !p.current && (u.current = window.setTimeout(() => r(!1), v));
  }, [v, r]), M = n.useCallback(() => r(!1), [r]);
  return n.useEffect(() => () => {
    clearTimeout(C.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ i(
    V,
    {
      scope: o,
      open: h,
      onOpenChange: r,
      onOpen: P,
      onClose: L,
      onDismiss: M,
      hasSelectionRef: m,
      isPointerDownOnContentRef: p,
      children: /* @__PURE__ */ i(U, { ...l, children: t })
    }
  );
};
_.displayName = w;
var y = "HoverCardTrigger", N = n.forwardRef(
  (e, o) => {
    const { __scopeHoverCard: t, ...s } = e, a = E(y, t), c = b(t);
    return /* @__PURE__ */ i(W, { asChild: !0, ...c, children: /* @__PURE__ */ i(
      $.a,
      {
        "data-state": a.open ? "open" : "closed",
        ...s,
        ref: o,
        onPointerEnter: d(e.onPointerEnter, S(a.onOpen)),
        onPointerLeave: d(e.onPointerLeave, S(a.onClose)),
        onFocus: d(e.onFocus, a.onOpen),
        onBlur: d(e.onBlur, a.onClose),
        onTouchStart: d(e.onTouchStart, (f) => f.preventDefault())
      }
    ) });
  }
);
N.displayName = y;
var x = "HoverCardPortal", [q, z] = O(x, {
  forceMount: void 0
}), D = (e) => {
  const { __scopeHoverCard: o, forceMount: t, children: s, container: a } = e, c = E(x, o);
  return /* @__PURE__ */ i(q, { scope: o, forceMount: t, children: /* @__PURE__ */ i(H, { present: t || c.open, children: /* @__PURE__ */ i(K, { asChild: !0, container: a, children: s }) }) });
};
D.displayName = x;
var R = "HoverCardContent", A = n.forwardRef(
  (e, o) => {
    const t = z(R, e.__scopeHoverCard), { forceMount: s = t.forceMount, ...a } = e, c = E(R, e.__scopeHoverCard);
    return /* @__PURE__ */ i(H, { present: s || c.open, children: /* @__PURE__ */ i(
      J,
      {
        "data-state": c.open ? "open" : "closed",
        ...a,
        onPointerEnter: d(e.onPointerEnter, S(c.onOpen)),
        onPointerLeave: d(e.onPointerLeave, S(c.onClose)),
        ref: o
      }
    ) });
  }
);
A.displayName = R;
var J = n.forwardRef((e, o) => {
  const {
    __scopeHoverCard: t,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: c,
    onInteractOutside: f,
    ...v
  } = e, l = E(R, t), C = b(t), u = n.useRef(null), m = I(o, u), [p, h] = n.useState(!1);
  return n.useEffect(() => {
    if (p) {
      const r = document.body;
      return g = r.style.userSelect || r.style.webkitUserSelect, r.style.userSelect = "none", r.style.webkitUserSelect = "none", () => {
        r.style.userSelect = g, r.style.webkitUserSelect = g;
      };
    }
  }, [p]), n.useEffect(() => {
    if (u.current) {
      const r = () => {
        h(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          document.getSelection()?.toString() !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", r), () => {
        document.removeEventListener("pointerup", r), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), n.useEffect(() => {
    u.current && Y(u.current).forEach((P) => P.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ i(
    j,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: f,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      onFocusOutside: d(c, (r) => {
        r.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ i(
        B,
        {
          ...C,
          ...v,
          onPointerDown: d(v.onPointerDown, (r) => {
            r.currentTarget.contains(r.target) && h(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: m,
          style: {
            ...v.style,
            userSelect: p ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: p ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), Q = "HoverCardArrow", X = n.forwardRef(
  (e, o) => {
    const { __scopeHoverCard: t, ...s } = e, a = b(t);
    return /* @__PURE__ */ i(G, { ...a, ...s, ref: o });
  }
);
X.displayName = Q;
function S(e) {
  return (o) => o.pointerType === "touch" ? void 0 : e();
}
function Y(e) {
  const o = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (s) => s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; t.nextNode(); ) o.push(t.currentNode);
  return o;
}
var le = _, de = N, ue = D, pe = A;
export {
  pe as Content,
  _ as HoverCard,
  X as HoverCardArrow,
  A as HoverCardContent,
  D as HoverCardPortal,
  N as HoverCardTrigger,
  ue as Portal,
  le as Root,
  de as Trigger
};
//# sourceMappingURL=index.es79.js.map
