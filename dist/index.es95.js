import * as l from "react";
import { clamp as $ } from "./index.es130.js";
import { composeEventHandlers as _ } from "./index.es109.js";
import { useComposedRefs as C } from "./index.es108.js";
import { createContextScope as ce } from "./index.es103.js";
import { useControllableState as le } from "./index.es111.js";
import { useDirection as de } from "./index.es113.js";
import { usePrevious as ue } from "./index.es117.js";
import { useSize as fe } from "./index.es118.js";
import { Primitive as V } from "./index.es106.js";
import { createCollection as me } from "./index.es110.js";
import { jsx as g, jsxs as pe } from "react/jsx-runtime";
var j = ["PageUp", "PageDown"], X = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], G = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, M = "Slider", [N, Se, he] = me(M), [W] = ce(M, [
  he
]), [ge, B] = W(M), q = l.forwardRef(
  (e, t) => {
    const {
      name: o,
      min: n = 0,
      max: s = 100,
      step: c = 1,
      orientation: r = "horizontal",
      disabled: a = !1,
      minStepsBetweenThumbs: u = 0,
      defaultValue: w = [n],
      value: S,
      onValueChange: i = () => {
      },
      onValueCommit: d = () => {
      },
      inverted: v = !1,
      form: y,
      ...h
    } = e, m = l.useRef(/* @__PURE__ */ new Set()), f = l.useRef(0), b = r === "horizontal" ? ve : we, [p = [], K] = le({
      prop: S,
      defaultProp: w,
      onChange: (R) => {
        [...m.current][f.current]?.focus(), i(R);
      }
    }), T = l.useRef(p);
    function k(R) {
      const P = xe(p, R);
      I(R, P);
    }
    function se(R) {
      I(R, f.current);
    }
    function ae() {
      const R = T.current[f.current];
      p[f.current] !== R && d(p);
    }
    function I(R, P, { commit: z } = { commit: !1 }) {
      const F = Ce(c), H = Me(Math.round((R - n) / c) * c + n, F), A = $(H, [n, s]);
      K((E = []) => {
        const x = ye(E, A, P);
        if (_e(x, u * c)) {
          f.current = x.indexOf(A);
          const Y = String(x) !== String(E);
          return Y && z && d(x), Y ? x : E;
        } else
          return E;
      });
    }
    return /* @__PURE__ */ g(
      ge,
      {
        scope: e.__scopeSlider,
        name: o,
        disabled: a,
        min: n,
        max: s,
        valueIndexToChangeRef: f,
        thumbs: m.current,
        values: p,
        orientation: r,
        form: y,
        children: /* @__PURE__ */ g(N.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ g(N.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ g(
          b,
          {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: _(h.onPointerDown, () => {
              a || (T.current = p);
            }),
            min: n,
            max: s,
            inverted: v,
            onSlideStart: a ? void 0 : k,
            onSlideMove: a ? void 0 : se,
            onSlideEnd: a ? void 0 : ae,
            onHomeKeyDown: () => !a && I(n, 0, { commit: !0 }),
            onEndKeyDown: () => !a && I(s, p.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: R, direction: P }) => {
              if (!a) {
                const H = j.includes(R.key) || R.shiftKey && X.includes(R.key) ? 10 : 1, A = f.current, E = p[A], x = c * H * P;
                I(E + x, A, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
q.displayName = M;
var [J, Q] = W(M, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), ve = l.forwardRef(
  (e, t) => {
    const {
      min: o,
      max: n,
      dir: s,
      inverted: c,
      onSlideStart: r,
      onSlideMove: a,
      onSlideEnd: u,
      onStepKeyDown: w,
      ...S
    } = e, [i, d] = l.useState(null), v = C(t, (b) => d(b)), y = l.useRef(void 0), h = de(s), m = h === "ltr", f = m && !c || !m && c;
    function D(b) {
      const p = y.current || i.getBoundingClientRect(), K = [0, p.width], k = U(K, f ? [o, n] : [n, o]);
      return y.current = p, k(b - p.left);
    }
    return /* @__PURE__ */ g(
      J,
      {
        scope: e.__scopeSlider,
        startEdge: f ? "left" : "right",
        endEdge: f ? "right" : "left",
        direction: f ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ g(
          Z,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...S,
            ref: v,
            style: {
              ...S.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (b) => {
              const p = D(b.clientX);
              r?.(p);
            },
            onSlideMove: (b) => {
              const p = D(b.clientX);
              a?.(p);
            },
            onSlideEnd: () => {
              y.current = void 0, u?.();
            },
            onStepKeyDown: (b) => {
              const K = G[f ? "from-left" : "from-right"].includes(b.key);
              w?.({ event: b, direction: K ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), we = l.forwardRef(
  (e, t) => {
    const {
      min: o,
      max: n,
      inverted: s,
      onSlideStart: c,
      onSlideMove: r,
      onSlideEnd: a,
      onStepKeyDown: u,
      ...w
    } = e, S = l.useRef(null), i = C(t, S), d = l.useRef(void 0), v = !s;
    function y(h) {
      const m = d.current || S.current.getBoundingClientRect(), f = [0, m.height], b = U(f, v ? [n, o] : [o, n]);
      return d.current = m, b(h - m.top);
    }
    return /* @__PURE__ */ g(
      J,
      {
        scope: e.__scopeSlider,
        startEdge: v ? "bottom" : "top",
        endEdge: v ? "top" : "bottom",
        size: "height",
        direction: v ? 1 : -1,
        children: /* @__PURE__ */ g(
          Z,
          {
            "data-orientation": "vertical",
            ...w,
            ref: i,
            style: {
              ...w.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const m = y(h.clientY);
              c?.(m);
            },
            onSlideMove: (h) => {
              const m = y(h.clientY);
              r?.(m);
            },
            onSlideEnd: () => {
              d.current = void 0, a?.();
            },
            onStepKeyDown: (h) => {
              const f = G[v ? "from-bottom" : "from-top"].includes(h.key);
              u?.({ event: h, direction: f ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Z = l.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: o,
      onSlideStart: n,
      onSlideMove: s,
      onSlideEnd: c,
      onHomeKeyDown: r,
      onEndKeyDown: a,
      onStepKeyDown: u,
      ...w
    } = e, S = B(M, o);
    return /* @__PURE__ */ g(
      V.span,
      {
        ...w,
        ref: t,
        onKeyDown: _(e.onKeyDown, (i) => {
          i.key === "Home" ? (r(i), i.preventDefault()) : i.key === "End" ? (a(i), i.preventDefault()) : j.concat(X).includes(i.key) && (u(i), i.preventDefault());
        }),
        onPointerDown: _(e.onPointerDown, (i) => {
          const d = i.target;
          d.setPointerCapture(i.pointerId), i.preventDefault(), S.thumbs.has(d) ? d.focus() : n(i);
        }),
        onPointerMove: _(e.onPointerMove, (i) => {
          i.target.hasPointerCapture(i.pointerId) && s(i);
        }),
        onPointerUp: _(e.onPointerUp, (i) => {
          const d = i.target;
          d.hasPointerCapture(i.pointerId) && (d.releasePointerCapture(i.pointerId), c(i));
        })
      }
    );
  }
), ee = "SliderTrack", te = l.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, ...n } = e, s = B(ee, o);
    return /* @__PURE__ */ g(
      V.span,
      {
        "data-disabled": s.disabled ? "" : void 0,
        "data-orientation": s.orientation,
        ...n,
        ref: t
      }
    );
  }
);
te.displayName = ee;
var L = "SliderRange", ne = l.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, ...n } = e, s = B(L, o), c = Q(L, o), r = l.useRef(null), a = C(t, r), u = s.values.length, w = s.values.map(
      (d) => ie(d, s.min, s.max)
    ), S = u > 1 ? Math.min(...w) : 0, i = 100 - Math.max(...w);
    return /* @__PURE__ */ g(
      V.span,
      {
        "data-orientation": s.orientation,
        "data-disabled": s.disabled ? "" : void 0,
        ...n,
        ref: a,
        style: {
          ...e.style,
          [c.startEdge]: S + "%",
          [c.endEdge]: i + "%"
        }
      }
    );
  }
);
ne.displayName = L;
var O = "SliderThumb", oe = l.forwardRef(
  (e, t) => {
    const o = Se(e.__scopeSlider), [n, s] = l.useState(null), c = C(t, (a) => s(a)), r = l.useMemo(
      () => n ? o().findIndex((a) => a.ref.current === n) : -1,
      [o, n]
    );
    return /* @__PURE__ */ g(be, { ...e, ref: c, index: r });
  }
), be = l.forwardRef(
  (e, t) => {
    const { __scopeSlider: o, index: n, name: s, ...c } = e, r = B(O, o), a = Q(O, o), [u, w] = l.useState(null), S = C(t, (D) => w(D)), i = u ? r.form || !!u.closest("form") : !0, d = fe(u), v = r.values[n], y = v === void 0 ? 0 : ie(v, r.min, r.max), h = Pe(n, r.values.length), m = d?.[a.size], f = m ? De(m, y, a.direction) : 0;
    return l.useEffect(() => {
      if (u)
        return r.thumbs.add(u), () => {
          r.thumbs.delete(u);
        };
    }, [u, r.thumbs]), /* @__PURE__ */ pe(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${y}% + ${f}px)`
        },
        children: [
          /* @__PURE__ */ g(N.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ g(
            V.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": r.min,
              "aria-valuenow": v,
              "aria-valuemax": r.max,
              "aria-orientation": r.orientation,
              "data-orientation": r.orientation,
              "data-disabled": r.disabled ? "" : void 0,
              tabIndex: r.disabled ? void 0 : 0,
              ...c,
              ref: S,
              style: v === void 0 ? { display: "none" } : e.style,
              onFocus: _(e.onFocus, () => {
                r.valueIndexToChangeRef.current = n;
              })
            }
          ) }),
          i && /* @__PURE__ */ g(
            re,
            {
              name: s ?? (r.name ? r.name + (r.values.length > 1 ? "[]" : "") : void 0),
              form: r.form,
              value: v
            },
            n
          )
        ]
      }
    );
  }
);
oe.displayName = O;
var Re = "RadioBubbleInput", re = l.forwardRef(
  ({ __scopeSlider: e, value: t, ...o }, n) => {
    const s = l.useRef(null), c = C(s, n), r = ue(t);
    return l.useEffect(() => {
      const a = s.current;
      if (!a) return;
      const u = window.HTMLInputElement.prototype, S = Object.getOwnPropertyDescriptor(u, "value").set;
      if (r !== t && S) {
        const i = new Event("input", { bubbles: !0 });
        S.call(a, t), a.dispatchEvent(i);
      }
    }, [r, t]), /* @__PURE__ */ g(
      V.input,
      {
        style: { display: "none" },
        ...o,
        ref: c,
        defaultValue: t
      }
    );
  }
);
re.displayName = Re;
function ye(e = [], t, o) {
  const n = [...e];
  return n[o] = t, n.sort((s, c) => s - c);
}
function ie(e, t, o) {
  const c = 100 / (o - t) * (e - t);
  return $(c, [0, 100]);
}
function Pe(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function xe(e, t) {
  if (e.length === 1) return 0;
  const o = e.map((s) => Math.abs(s - t)), n = Math.min(...o);
  return o.indexOf(n);
}
function De(e, t, o) {
  const n = e / 2, c = U([0, 50], [0, n]);
  return (n - c(t) * o) * o;
}
function Ee(e) {
  return e.slice(0, -1).map((t, o) => e[o + 1] - t);
}
function _e(e, t) {
  if (t > 0) {
    const o = Ee(e);
    return Math.min(...o) >= t;
  }
  return !0;
}
function U(e, t) {
  return (o) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (o - e[0]);
  };
}
function Ce(e) {
  return (String(e).split(".")[1] || "").length;
}
function Me(e, t) {
  const o = Math.pow(10, t);
  return Math.round(e * o) / o;
}
var Oe = q, Ue = te, Fe = ne, Ye = oe;
export {
  Fe as Range,
  Oe as Root,
  q as Slider,
  ne as SliderRange,
  oe as SliderThumb,
  te as SliderTrack,
  Ye as Thumb,
  Ue as Track
};
//# sourceMappingURL=index.es95.js.map
