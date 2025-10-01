import * as s from "react";
import { composeEventHandlers as x } from "./index.es109.js";
import { useComposedRefs as N } from "./index.es108.js";
import { createContextScope as W } from "./index.es103.js";
import { DismissableLayer as $ } from "./index.es123.js";
import { useId as z } from "./index.es112.js";
import { createPopperScope as S, Root as J, Anchor as Q, Arrow as Z, Content as ee } from "./index.es121.js";
import { Portal as te } from "./index.es122.js";
import { Presence as G } from "./index.es116.js";
import { Primitive as oe } from "./index.es106.js";
import { createSlottable as re } from "./index.es56.js";
import { useControllableState as ne } from "./index.es111.js";
import { Root as se } from "./index.es124.js";
import { jsx as f, jsxs as ae } from "react/jsx-runtime";
var [O] = W("Tooltip", [
  S
]), A = S(), j = "TooltipProvider", ie = 700, D = "tooltip.open", [ce, k] = O(j), F = (t) => {
  const {
    __scopeTooltip: o,
    delayDuration: e = ie,
    skipDelayDuration: r = 300,
    disableHoverableContent: n = !1,
    children: c
  } = t, i = s.useRef(!0), v = s.useRef(!1), a = s.useRef(0);
  return s.useEffect(() => {
    const p = a.current;
    return () => window.clearTimeout(p);
  }, []), /* @__PURE__ */ f(
    ce,
    {
      scope: o,
      isOpenDelayedRef: i,
      delayDuration: e,
      onOpen: s.useCallback(() => {
        window.clearTimeout(a.current), i.current = !1;
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(a.current), a.current = window.setTimeout(
          () => i.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: v,
      onPointerInTransitChange: s.useCallback((p) => {
        v.current = p;
      }, []),
      disableHoverableContent: n,
      children: c
    }
  );
};
F.displayName = j;
var R = "Tooltip", [le, _] = O(R), B = (t) => {
  const {
    __scopeTooltip: o,
    children: e,
    open: r,
    defaultOpen: n,
    onOpenChange: c,
    disableHoverableContent: i,
    delayDuration: v
  } = t, a = k(R, t.__scopeTooltip), p = A(o), [l, d] = s.useState(null), h = z(), u = s.useRef(0), m = i ?? a.disableHoverableContent, C = v ?? a.delayDuration, T = s.useRef(!1), [g, y] = ne({
    prop: r,
    defaultProp: n ?? !1,
    onChange: (H) => {
      H ? (a.onOpen(), document.dispatchEvent(new CustomEvent(D))) : a.onClose(), c?.(H);
    },
    caller: R
  }), w = s.useMemo(() => g ? T.current ? "delayed-open" : "instant-open" : "closed", [g]), P = s.useCallback(() => {
    window.clearTimeout(u.current), u.current = 0, T.current = !1, y(!0);
  }, [y]), E = s.useCallback(() => {
    window.clearTimeout(u.current), u.current = 0, y(!1);
  }, [y]), I = s.useCallback(() => {
    window.clearTimeout(u.current), u.current = window.setTimeout(() => {
      T.current = !0, y(!0), u.current = 0;
    }, C);
  }, [C, y]);
  return s.useEffect(() => () => {
    u.current && (window.clearTimeout(u.current), u.current = 0);
  }, []), /* @__PURE__ */ f(J, { ...p, children: /* @__PURE__ */ f(
    le,
    {
      scope: o,
      contentId: h,
      open: g,
      stateAttribute: w,
      trigger: l,
      onTriggerChange: d,
      onTriggerEnter: s.useCallback(() => {
        a.isOpenDelayedRef.current ? I() : P();
      }, [a.isOpenDelayedRef, I, P]),
      onTriggerLeave: s.useCallback(() => {
        m ? E() : (window.clearTimeout(u.current), u.current = 0);
      }, [E, m]),
      onOpen: P,
      onClose: E,
      disableHoverableContent: m,
      children: e
    }
  ) });
};
B.displayName = R;
var L = "TooltipTrigger", U = s.forwardRef(
  (t, o) => {
    const { __scopeTooltip: e, ...r } = t, n = _(L, e), c = k(L, e), i = A(e), v = s.useRef(null), a = N(o, v, n.onTriggerChange), p = s.useRef(!1), l = s.useRef(!1), d = s.useCallback(() => p.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), /* @__PURE__ */ f(Q, { asChild: !0, ...i, children: /* @__PURE__ */ f(
      oe.button,
      {
        "aria-describedby": n.open ? n.contentId : void 0,
        "data-state": n.stateAttribute,
        ...r,
        ref: a,
        onPointerMove: x(t.onPointerMove, (h) => {
          h.pointerType !== "touch" && !l.current && !c.isPointerInTransitRef.current && (n.onTriggerEnter(), l.current = !0);
        }),
        onPointerLeave: x(t.onPointerLeave, () => {
          n.onTriggerLeave(), l.current = !1;
        }),
        onPointerDown: x(t.onPointerDown, () => {
          n.open && n.onClose(), p.current = !0, document.addEventListener("pointerup", d, { once: !0 });
        }),
        onFocus: x(t.onFocus, () => {
          p.current || n.onOpen();
        }),
        onBlur: x(t.onBlur, n.onClose),
        onClick: x(t.onClick, n.onClose)
      }
    ) });
  }
);
U.displayName = L;
var M = "TooltipPortal", [ue, pe] = O(M, {
  forceMount: void 0
}), V = (t) => {
  const { __scopeTooltip: o, forceMount: e, children: r, container: n } = t, c = _(M, o);
  return /* @__PURE__ */ f(ue, { scope: o, forceMount: e, children: /* @__PURE__ */ f(G, { present: e || c.open, children: /* @__PURE__ */ f(te, { asChild: !0, container: n, children: r }) }) });
};
V.displayName = M;
var b = "TooltipContent", Y = s.forwardRef(
  (t, o) => {
    const e = pe(b, t.__scopeTooltip), { forceMount: r = e.forceMount, side: n = "top", ...c } = t, i = _(b, t.__scopeTooltip);
    return /* @__PURE__ */ f(G, { present: r || i.open, children: i.disableHoverableContent ? /* @__PURE__ */ f(q, { side: n, ...c, ref: o }) : /* @__PURE__ */ f(de, { side: n, ...c, ref: o }) });
  }
), de = s.forwardRef((t, o) => {
  const e = _(b, t.__scopeTooltip), r = k(b, t.__scopeTooltip), n = s.useRef(null), c = N(o, n), [i, v] = s.useState(null), { trigger: a, onClose: p } = e, l = n.current, { onPointerInTransitChange: d } = r, h = s.useCallback(() => {
    v(null), d(!1);
  }, [d]), u = s.useCallback(
    (m, C) => {
      const T = m.currentTarget, g = { x: m.clientX, y: m.clientY }, y = me(g, T.getBoundingClientRect()), w = Te(g, y), P = Ce(C.getBoundingClientRect()), E = ge([...w, ...P]);
      v(E), d(!0);
    },
    [d]
  );
  return s.useEffect(() => () => h(), [h]), s.useEffect(() => {
    if (a && l) {
      const m = (T) => u(T, l), C = (T) => u(T, a);
      return a.addEventListener("pointerleave", m), l.addEventListener("pointerleave", C), () => {
        a.removeEventListener("pointerleave", m), l.removeEventListener("pointerleave", C);
      };
    }
  }, [a, l, u, h]), s.useEffect(() => {
    if (i) {
      const m = (C) => {
        const T = C.target, g = { x: C.clientX, y: C.clientY }, y = a?.contains(T) || l?.contains(T), w = !ye(g, i);
        y ? h() : w && (h(), p());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [a, l, i, p, h]), /* @__PURE__ */ f(q, { ...t, ref: c });
}), [fe, ve] = O(R, { isInside: !1 }), he = re("TooltipContent"), q = s.forwardRef(
  (t, o) => {
    const {
      __scopeTooltip: e,
      children: r,
      "aria-label": n,
      onEscapeKeyDown: c,
      onPointerDownOutside: i,
      ...v
    } = t, a = _(b, e), p = A(e), { onClose: l } = a;
    return s.useEffect(() => (document.addEventListener(D, l), () => document.removeEventListener(D, l)), [l]), s.useEffect(() => {
      if (a.trigger) {
        const d = (h) => {
          h.target?.contains(a.trigger) && l();
        };
        return window.addEventListener("scroll", d, { capture: !0 }), () => window.removeEventListener("scroll", d, { capture: !0 });
      }
    }, [a.trigger, l]), /* @__PURE__ */ f(
      $,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: i,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: l,
        children: /* @__PURE__ */ ae(
          ee,
          {
            "data-state": a.stateAttribute,
            ...p,
            ...v,
            ref: o,
            style: {
              ...v.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ f(he, { children: r }),
              /* @__PURE__ */ f(fe, { scope: e, isInside: !0, children: /* @__PURE__ */ f(se, { id: a.contentId, role: "tooltip", children: n || r }) })
            ]
          }
        )
      }
    );
  }
);
Y.displayName = b;
var X = "TooltipArrow", K = s.forwardRef(
  (t, o) => {
    const { __scopeTooltip: e, ...r } = t, n = A(e);
    return ve(
      X,
      e
    ).isInside ? null : /* @__PURE__ */ f(Z, { ...n, ...r, ref: o });
  }
);
K.displayName = X;
function me(t, o) {
  const e = Math.abs(o.top - t.y), r = Math.abs(o.bottom - t.y), n = Math.abs(o.right - t.x), c = Math.abs(o.left - t.x);
  switch (Math.min(e, r, n, c)) {
    case c:
      return "left";
    case n:
      return "right";
    case e:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Te(t, o, e = 5) {
  const r = [];
  switch (o) {
    case "top":
      r.push(
        { x: t.x - e, y: t.y + e },
        { x: t.x + e, y: t.y + e }
      );
      break;
    case "bottom":
      r.push(
        { x: t.x - e, y: t.y - e },
        { x: t.x + e, y: t.y - e }
      );
      break;
    case "left":
      r.push(
        { x: t.x + e, y: t.y - e },
        { x: t.x + e, y: t.y + e }
      );
      break;
    case "right":
      r.push(
        { x: t.x - e, y: t.y - e },
        { x: t.x - e, y: t.y + e }
      );
      break;
  }
  return r;
}
function Ce(t) {
  const { top: o, right: e, bottom: r, left: n } = t;
  return [
    { x: n, y: o },
    { x: e, y: o },
    { x: e, y: r },
    { x: n, y: r }
  ];
}
function ye(t, o) {
  const { x: e, y: r } = t;
  let n = !1;
  for (let c = 0, i = o.length - 1; c < o.length; i = c++) {
    const v = o[c], a = o[i], p = v.x, l = v.y, d = a.x, h = a.y;
    l > r != h > r && e < (d - p) * (r - l) / (h - l) + p && (n = !n);
  }
  return n;
}
function ge(t) {
  const o = t.slice();
  return o.sort((e, r) => e.x < r.x ? -1 : e.x > r.x ? 1 : e.y < r.y ? -1 : e.y > r.y ? 1 : 0), xe(o);
}
function xe(t) {
  if (t.length <= 1) return t.slice();
  const o = [];
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    for (; o.length >= 2; ) {
      const c = o[o.length - 1], i = o[o.length - 2];
      if ((c.x - i.x) * (n.y - i.y) >= (c.y - i.y) * (n.x - i.x)) o.pop();
      else break;
    }
    o.push(n);
  }
  o.pop();
  const e = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    for (; e.length >= 2; ) {
      const c = e[e.length - 1], i = e[e.length - 2];
      if ((c.x - i.x) * (n.y - i.y) >= (c.y - i.y) * (n.x - i.x)) e.pop();
      else break;
    }
    e.push(n);
  }
  return e.pop(), o.length === 1 && e.length === 1 && o[0].x === e[0].x && o[0].y === e[0].y ? o : o.concat(e);
}
var He = F, Ne = B, Se = U, Ge = V, je = Y, Fe = K;
export {
  Fe as Arrow,
  je as Content,
  Ge as Portal,
  He as Provider,
  Ne as Root,
  B as Tooltip,
  K as TooltipArrow,
  Y as TooltipContent,
  V as TooltipPortal,
  F as TooltipProvider,
  U as TooltipTrigger,
  Se as Trigger
};
//# sourceMappingURL=index.es100.js.map
