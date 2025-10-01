import * as p from "react";
import { useFloating as fe, offset as me, shift as he, flip as ue, size as ge, arrow as we, hide as Pe, limitShift as xe } from "./index.es200.js";
import { Root as ye } from "./index.es201.js";
import { useComposedRefs as I } from "./index.es108.js";
import { createContextScope as Ae } from "./index.es103.js";
import { Primitive as Y } from "./index.es106.js";
import { useCallbackRef as ve } from "./index.es104.js";
import { useLayoutEffect as z } from "./index.es105.js";
import { useSize as Ce } from "./index.es118.js";
import { jsx as f } from "react/jsx-runtime";
import { autoUpdate as Se } from "./index.es202.js";
var R = "Popper", [M, ke] = Ae(R), [Re, X] = M(R), D = (e) => {
  const { __scopePopper: i, children: n } = e, [s, a] = p.useState(null);
  return /* @__PURE__ */ f(Re, { scope: i, anchor: s, onAnchorChange: a, children: n });
};
D.displayName = R;
var F = "PopperAnchor", k = p.forwardRef(
  (e, i) => {
    const { __scopePopper: n, virtualRef: s, ...a } = e, t = X(F, n), r = p.useRef(null), u = I(i, r), o = p.useRef(null);
    return p.useEffect(() => {
      const c = o.current;
      o.current = s?.current || r.current, c !== o.current && t.onAnchorChange(o.current);
    }), s ? null : /* @__PURE__ */ f(Y.div, { ...a, ref: u });
  }
);
k.displayName = F;
var b = "PopperContent", [be, Oe] = M(b), B = p.forwardRef(
  (e, i) => {
    const {
      __scopePopper: n,
      side: s = "bottom",
      sideOffset: a = 0,
      align: t = "center",
      alignOffset: r = 0,
      arrowPadding: u = 0,
      avoidCollisions: o = !0,
      collisionBoundary: c = [],
      collisionPadding: g = 0,
      sticky: m = "partial",
      hideWhenDetached: P = !1,
      updatePositionStrategy: x = "optimized",
      onPlaced: d,
      ...l
    } = e, Z = X(b, n), [C, U] = p.useState(null), q = I(i, (w) => U(w)), [S, G] = p.useState(null), O = Ce(S), J = O?.width ?? 0, E = O?.height ?? 0, K = s + (t !== "center" ? "-" + t : ""), Q = typeof g == "number" ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g }, N = Array.isArray(c) ? c : [c], V = N.length > 0, y = {
      padding: Q,
      boundary: N.filter(Ne),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: ee, floatingStyles: _, placement: te, isPositioned: A, middlewareData: h } = fe({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: K,
      whileElementsMounted: (...w) => Se(...w, {
        animationFrame: x === "always"
      }),
      elements: {
        reference: Z.anchor
      },
      middleware: [
        me({ mainAxis: a + E, alignmentAxis: r }),
        o && he({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? xe() : void 0,
          ...y
        }),
        o && ue({ ...y }),
        ge({
          ...y,
          apply: ({ elements: w, rects: W, availableWidth: ce, availableHeight: pe }) => {
            const { width: le, height: de } = W.reference, v = w.floating.style;
            v.setProperty("--radix-popper-available-width", `${ce}px`), v.setProperty("--radix-popper-available-height", `${pe}px`), v.setProperty("--radix-popper-anchor-width", `${le}px`), v.setProperty("--radix-popper-anchor-height", `${de}px`);
          }
        }),
        S && we({ element: S, padding: u }),
        _e({ arrowWidth: J, arrowHeight: E }),
        P && Pe({ strategy: "referenceHidden", ...y })
      ]
    }), [$, re] = L(te), H = ve(d);
    z(() => {
      A && H?.();
    }, [A, H]);
    const oe = h.arrow?.x, ne = h.arrow?.y, ae = h.arrow?.centerOffset !== 0, [ie, se] = p.useState();
    return z(() => {
      C && se(window.getComputedStyle(C).zIndex);
    }, [C]), /* @__PURE__ */ f(
      "div",
      {
        ref: ee.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ..._,
          transform: A ? _.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ie,
          "--radix-popper-transform-origin": [
            h.transformOrigin?.x,
            h.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...h.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          be,
          {
            scope: n,
            placedSide: $,
            onArrowChange: G,
            arrowX: oe,
            arrowY: ne,
            shouldHideArrow: ae,
            children: /* @__PURE__ */ f(
              Y.div,
              {
                "data-side": $,
                "data-align": re,
                ...l,
                ref: q,
                style: {
                  ...l.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: A ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
B.displayName = b;
var T = "PopperArrow", Ee = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, j = p.forwardRef(function(i, n) {
  const { __scopePopper: s, ...a } = i, t = Oe(T, s), r = Ee[t.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: t.onArrowChange,
        style: {
          position: "absolute",
          left: t.arrowX,
          top: t.arrowY,
          [r]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[t.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[t.placedSide],
          visibility: t.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          ye,
          {
            ...a,
            ref: n,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
j.displayName = T;
function Ne(e) {
  return e !== null;
}
var _e = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(i) {
    const { placement: n, rects: s, middlewareData: a } = i, r = a.arrow?.centerOffset !== 0, u = r ? 0 : e.arrowWidth, o = r ? 0 : e.arrowHeight, [c, g] = L(n), m = { start: "0%", center: "50%", end: "100%" }[g], P = (a.arrow?.x ?? 0) + u / 2, x = (a.arrow?.y ?? 0) + o / 2;
    let d = "", l = "";
    return c === "bottom" ? (d = r ? m : `${P}px`, l = `${-o}px`) : c === "top" ? (d = r ? m : `${P}px`, l = `${s.floating.height + o}px`) : c === "right" ? (d = `${-o}px`, l = r ? m : `${x}px`) : c === "left" && (d = `${s.floating.width + o}px`, l = r ? m : `${x}px`), { data: { x: d, y: l } };
  }
});
function L(e) {
  const [i, n = "center"] = e.split("-");
  return [i, n];
}
var Be = D, Te = k, je = B, Le = j;
export {
  Te as Anchor,
  Le as Arrow,
  je as Content,
  D as Popper,
  k as PopperAnchor,
  j as PopperArrow,
  B as PopperContent,
  Be as Root,
  ke as createPopperScope
};
//# sourceMappingURL=index.es121.js.map
