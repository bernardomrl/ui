import * as a from "react";
import Te from "react-dom";
import { createContextScope as Ie } from "./index.es103.js";
import { composeEventHandlers as I } from "./index.es109.js";
import { Primitive as b, dispatchDiscreteCustomEvent as Q } from "./index.es106.js";
import { useControllableState as oe } from "./index.es111.js";
import { useComposedRefs as k, composeRefs as ye } from "./index.es108.js";
import { useDirection as be } from "./index.es113.js";
import { Presence as K } from "./index.es116.js";
import { useId as re } from "./index.es112.js";
import { createCollection as ie } from "./index.es110.js";
import { DismissableLayer as _e } from "./index.es123.js";
import { usePrevious as Pe } from "./index.es117.js";
import { useLayoutEffect as z } from "./index.es105.js";
import { useCallbackRef as D } from "./index.es104.js";
import { Root as xe } from "./index.es124.js";
import { jsx as u, jsxs as Z, Fragment as ee } from "react/jsx-runtime";
var A = "NavigationMenu", [$, ae, Se] = ie(A), [G, De, Ae] = ie(A), [Y] = Ie(
  A,
  [Se, Ae]
), [Oe, y] = Y(A), [ke, Le] = Y(A), se = a.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: i,
      onValueChange: n,
      defaultValue: o,
      delayDuration: s = 200,
      skipDelayDuration: d = 300,
      orientation: l = "horizontal",
      dir: R,
      ...c
    } = e, [m, h] = a.useState(null), E = k(t, (M) => h(M)), p = be(R), w = a.useRef(0), N = a.useRef(0), T = a.useRef(0), [_, f] = a.useState(!0), [g, v] = oe({
      prop: i,
      onChange: (M) => {
        const x = M !== "", V = d > 0;
        x ? (window.clearTimeout(T.current), V && f(!1)) : (window.clearTimeout(T.current), T.current = window.setTimeout(
          () => f(!0),
          d
        )), n?.(M);
      },
      defaultProp: o ?? "",
      caller: A
    }), C = a.useCallback(() => {
      window.clearTimeout(N.current), N.current = window.setTimeout(() => v(""), 150);
    }, [v]), P = a.useCallback(
      (M) => {
        window.clearTimeout(N.current), v(M);
      },
      [v]
    ), S = a.useCallback(
      (M) => {
        g === M ? window.clearTimeout(N.current) : w.current = window.setTimeout(() => {
          window.clearTimeout(N.current), v(M);
        }, s);
      },
      [g, v, s]
    );
    return a.useEffect(() => () => {
      window.clearTimeout(w.current), window.clearTimeout(N.current), window.clearTimeout(T.current);
    }, []), /* @__PURE__ */ u(
      ce,
      {
        scope: r,
        isRootMenu: !0,
        value: g,
        dir: p,
        orientation: l,
        rootNavigationMenu: m,
        onTriggerEnter: (M) => {
          window.clearTimeout(w.current), _ ? S(M) : P(M);
        },
        onTriggerLeave: () => {
          window.clearTimeout(w.current), C();
        },
        onContentEnter: () => window.clearTimeout(N.current),
        onContentLeave: C,
        onItemSelect: (M) => {
          v((x) => x === M ? "" : M);
        },
        onItemDismiss: () => v(""),
        children: /* @__PURE__ */ u(
          b.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: p,
            ...c,
            ref: E
          }
        )
      }
    );
  }
);
se.displayName = A;
var U = "NavigationMenuSub", Fe = a.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: r,
      value: i,
      onValueChange: n,
      defaultValue: o,
      orientation: s = "horizontal",
      ...d
    } = e, l = y(U, r), [R, c] = oe({
      prop: i,
      onChange: n,
      defaultProp: o ?? "",
      caller: U
    });
    return /* @__PURE__ */ u(
      ce,
      {
        scope: r,
        isRootMenu: !1,
        value: R,
        dir: l.dir,
        orientation: s,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (m) => c(m),
        onItemSelect: (m) => c(m),
        onItemDismiss: () => c(""),
        children: /* @__PURE__ */ u(b.div, { "data-orientation": s, ...d, ref: t })
      }
    );
  }
);
Fe.displayName = U;
var ce = (e) => {
  const {
    scope: t,
    isRootMenu: r,
    rootNavigationMenu: i,
    dir: n,
    orientation: o,
    children: s,
    value: d,
    onItemSelect: l,
    onItemDismiss: R,
    onTriggerEnter: c,
    onTriggerLeave: m,
    onContentEnter: h,
    onContentLeave: E
  } = e, [p, w] = a.useState(null), [N, T] = a.useState(/* @__PURE__ */ new Map()), [_, f] = a.useState(null);
  return /* @__PURE__ */ u(
    Oe,
    {
      scope: t,
      isRootMenu: r,
      rootNavigationMenu: i,
      value: d,
      previousValue: Pe(d),
      baseId: re(),
      dir: n,
      orientation: o,
      viewport: p,
      onViewportChange: w,
      indicatorTrack: _,
      onIndicatorTrackChange: f,
      onTriggerEnter: D(c),
      onTriggerLeave: D(m),
      onContentEnter: D(h),
      onContentLeave: D(E),
      onItemSelect: D(l),
      onItemDismiss: D(R),
      onViewportContentChange: a.useCallback((g, v) => {
        T((C) => (C.set(g, v), new Map(C)));
      }, []),
      onViewportContentRemove: a.useCallback((g) => {
        T((v) => v.has(g) ? (v.delete(g), new Map(v)) : v);
      }, []),
      children: /* @__PURE__ */ u($.Provider, { scope: t, children: /* @__PURE__ */ u(ke, { scope: t, items: N, children: s }) })
    }
  );
}, ue = "NavigationMenuList", le = a.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...i } = e, n = y(ue, r), o = /* @__PURE__ */ u(b.ul, { "data-orientation": n.orientation, ...i, ref: t });
    return /* @__PURE__ */ u(b.div, { style: { position: "relative" }, ref: n.onIndicatorTrackChange, children: /* @__PURE__ */ u($.Slot, { scope: r, children: n.isRootMenu ? /* @__PURE__ */ u(Me, { asChild: !0, children: o }) : o }) });
  }
);
le.displayName = ue;
var de = "NavigationMenuItem", [Ke, fe] = Y(de), ve = a.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, value: i, ...n } = e, o = re(), s = i || o || "LEGACY_REACT_AUTO_VALUE", d = a.useRef(null), l = a.useRef(null), R = a.useRef(null), c = a.useRef(() => {
    }), m = a.useRef(!1), h = a.useCallback((p = "start") => {
      if (d.current) {
        c.current();
        const w = B(d.current);
        w.length && X(p === "start" ? w : w.reverse());
      }
    }, []), E = a.useCallback(() => {
      if (d.current) {
        const p = B(d.current);
        p.length && (c.current = We(p));
      }
    }, []);
    return /* @__PURE__ */ u(
      Ke,
      {
        scope: r,
        value: s,
        triggerRef: l,
        contentRef: d,
        focusProxyRef: R,
        wasEscapeCloseRef: m,
        onEntryKeyDown: h,
        onFocusProxyEnter: h,
        onRootContentClose: E,
        onContentFocusOutside: E,
        children: /* @__PURE__ */ u(b.li, { ...n, ref: t })
      }
    );
  }
);
ve.displayName = de;
var H = "NavigationMenuTrigger", me = a.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, disabled: i, ...n } = e, o = y(H, e.__scopeNavigationMenu), s = fe(H, e.__scopeNavigationMenu), d = a.useRef(null), l = k(d, s.triggerRef, t), R = he(o.baseId, s.value), c = Ee(o.baseId, s.value), m = a.useRef(!1), h = a.useRef(!1), E = s.value === o.value;
  return /* @__PURE__ */ Z(ee, { children: [
    /* @__PURE__ */ u($.ItemSlot, { scope: r, value: s.value, children: /* @__PURE__ */ u(Ne, { asChild: !0, children: /* @__PURE__ */ u(
      b.button,
      {
        id: R,
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-state": J(E),
        "aria-expanded": E,
        "aria-controls": c,
        ...n,
        ref: l,
        onPointerEnter: I(e.onPointerEnter, () => {
          h.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: I(
          e.onPointerMove,
          F(() => {
            i || h.current || s.wasEscapeCloseRef.current || m.current || (o.onTriggerEnter(s.value), m.current = !0);
          })
        ),
        onPointerLeave: I(
          e.onPointerLeave,
          F(() => {
            i || (o.onTriggerLeave(), m.current = !1);
          })
        ),
        onClick: I(e.onClick, () => {
          o.onItemSelect(s.value), h.current = E;
        }),
        onKeyDown: I(e.onKeyDown, (p) => {
          const N = { horizontal: "ArrowDown", vertical: o.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[o.orientation];
          E && p.key === N && (s.onEntryKeyDown(), p.preventDefault());
        })
      }
    ) }) }),
    E && /* @__PURE__ */ Z(ee, { children: [
      /* @__PURE__ */ u(
        xe,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (p) => {
            const w = s.contentRef.current, N = p.relatedTarget, T = N === d.current, _ = w?.contains(N);
            (T || !_) && s.onFocusProxyEnter(T ? "start" : "end");
          }
        }
      ),
      o.viewport && /* @__PURE__ */ u("span", { "aria-owns": c })
    ] })
  ] });
});
me.displayName = H;
var Ve = "NavigationMenuLink", te = "navigationMenu.linkSelect", ge = a.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, active: i, onSelect: n, ...o } = e;
    return /* @__PURE__ */ u(Ne, { asChild: !0, children: /* @__PURE__ */ u(
      b.a,
      {
        "data-active": i ? "" : void 0,
        "aria-current": i ? "page" : void 0,
        ...o,
        ref: t,
        onClick: I(
          e.onClick,
          (s) => {
            const d = s.target, l = new CustomEvent(te, {
              bubbles: !0,
              cancelable: !0
            });
            if (d.addEventListener(te, (R) => n?.(R), { once: !0 }), Q(d, l), !l.defaultPrevented && !s.metaKey) {
              const R = new CustomEvent(L, {
                bubbles: !0,
                cancelable: !0
              });
              Q(d, R);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ge.displayName = Ve;
var j = "NavigationMenuIndicator", pe = a.forwardRef((e, t) => {
  const { forceMount: r, ...i } = e, n = y(j, e.__scopeNavigationMenu), o = !!n.value;
  return n.indicatorTrack ? Te.createPortal(
    /* @__PURE__ */ u(K, { present: r || o, children: /* @__PURE__ */ u(ze, { ...i, ref: t }) }),
    n.indicatorTrack
  ) : null;
});
pe.displayName = j;
var ze = a.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, ...i } = e, n = y(j, r), o = ae(r), [s, d] = a.useState(
    null
  ), [l, R] = a.useState(null), c = n.orientation === "horizontal", m = !!n.value;
  a.useEffect(() => {
    const p = o().find((w) => w.value === n.value)?.ref.current;
    p && d(p);
  }, [o, n.value]);
  const h = () => {
    s && R({
      size: c ? s.offsetWidth : s.offsetHeight,
      offset: c ? s.offsetLeft : s.offsetTop
    });
  };
  return W(s, h), W(n.indicatorTrack, h), l ? /* @__PURE__ */ u(
    b.div,
    {
      "aria-hidden": !0,
      "data-state": m ? "visible" : "hidden",
      "data-orientation": n.orientation,
      ...i,
      ref: t,
      style: {
        position: "absolute",
        ...c ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...i.style
      }
    }
  ) : null;
}), O = "NavigationMenuContent", we = a.forwardRef((e, t) => {
  const { forceMount: r, ...i } = e, n = y(O, e.__scopeNavigationMenu), o = fe(O, e.__scopeNavigationMenu), s = k(o.contentRef, t), d = o.value === n.value, l = {
    value: o.value,
    triggerRef: o.triggerRef,
    focusProxyRef: o.focusProxyRef,
    wasEscapeCloseRef: o.wasEscapeCloseRef,
    onContentFocusOutside: o.onContentFocusOutside,
    onRootContentClose: o.onRootContentClose,
    ...i
  };
  return n.viewport ? /* @__PURE__ */ u(Ge, { forceMount: r, ...l, ref: s }) : /* @__PURE__ */ u(K, { present: r || d, children: /* @__PURE__ */ u(
    Ce,
    {
      "data-state": J(d),
      ...l,
      ref: s,
      onPointerEnter: I(e.onPointerEnter, n.onContentEnter),
      onPointerLeave: I(
        e.onPointerLeave,
        F(n.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !d && n.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
we.displayName = O;
var Ge = a.forwardRef((e, t) => {
  const r = y(O, e.__scopeNavigationMenu), { onViewportContentChange: i, onViewportContentRemove: n } = r;
  return z(() => {
    i(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, i]), z(() => () => n(e.value), [e.value, n]), null;
}), L = "navigationMenu.rootContentDismiss", Ce = a.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: r,
    value: i,
    triggerRef: n,
    focusProxyRef: o,
    wasEscapeCloseRef: s,
    onRootContentClose: d,
    onContentFocusOutside: l,
    ...R
  } = e, c = y(O, r), m = a.useRef(null), h = k(m, t), E = he(c.baseId, i), p = Ee(c.baseId, i), w = ae(r), N = a.useRef(null), { onItemDismiss: T } = c;
  a.useEffect(() => {
    const f = m.current;
    if (c.isRootMenu && f) {
      const g = () => {
        T(), d(), f.contains(document.activeElement) && n.current?.focus();
      };
      return f.addEventListener(L, g), () => f.removeEventListener(L, g);
    }
  }, [c.isRootMenu, e.value, n, T, d]);
  const _ = a.useMemo(() => {
    const g = w().map((x) => x.value);
    c.dir === "rtl" && g.reverse();
    const v = g.indexOf(c.value), C = g.indexOf(c.previousValue), P = i === c.value, S = C === g.indexOf(i);
    if (!P && !S) return N.current;
    const M = (() => {
      if (v !== C) {
        if (P && C !== -1) return v > C ? "from-end" : "from-start";
        if (S && v !== -1) return v > C ? "to-start" : "to-end";
      }
      return null;
    })();
    return N.current = M, M;
  }, [c.previousValue, c.value, c.dir, w, i]);
  return /* @__PURE__ */ u(Me, { asChild: !0, children: /* @__PURE__ */ u(
    _e,
    {
      id: p,
      "aria-labelledby": E,
      "data-motion": _,
      "data-orientation": c.orientation,
      ...R,
      ref: h,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        const f = new Event(L, {
          bubbles: !0,
          cancelable: !0
        });
        m.current?.dispatchEvent(f);
      },
      onFocusOutside: I(e.onFocusOutside, (f) => {
        l();
        const g = f.target;
        c.rootNavigationMenu?.contains(g) && f.preventDefault();
      }),
      onPointerDownOutside: I(e.onPointerDownOutside, (f) => {
        const g = f.target, v = w().some((P) => P.ref.current?.contains(g)), C = c.isRootMenu && c.viewport?.contains(g);
        (v || C || !c.isRootMenu) && f.preventDefault();
      }),
      onKeyDown: I(e.onKeyDown, (f) => {
        const g = f.altKey || f.ctrlKey || f.metaKey;
        if (f.key === "Tab" && !g) {
          const C = B(f.currentTarget), P = document.activeElement, S = C.findIndex((V) => V === P), x = f.shiftKey ? C.slice(0, S).reverse() : C.slice(S + 1, C.length);
          X(x) ? f.preventDefault() : o.current?.focus();
        }
      }),
      onEscapeKeyDown: I(e.onEscapeKeyDown, (f) => {
        s.current = !0;
      })
    }
  ) });
}), q = "NavigationMenuViewport", Re = a.forwardRef((e, t) => {
  const { forceMount: r, ...i } = e, o = !!y(q, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ u(K, { present: r || o, children: /* @__PURE__ */ u(Ue, { ...i, ref: t }) });
});
Re.displayName = q;
var Ue = a.forwardRef((e, t) => {
  const { __scopeNavigationMenu: r, children: i, ...n } = e, o = y(q, r), s = k(t, o.onViewportChange), d = Le(
    O,
    e.__scopeNavigationMenu
  ), [l, R] = a.useState(null), [c, m] = a.useState(null), h = l ? l?.width + "px" : void 0, E = l ? l?.height + "px" : void 0, p = !!o.value, w = p ? o.value : o.previousValue;
  return W(c, () => {
    c && R({ width: c.offsetWidth, height: c.offsetHeight });
  }), /* @__PURE__ */ u(
    b.div,
    {
      "data-state": J(p),
      "data-orientation": o.orientation,
      ...n,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !p && o.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": h,
        "--radix-navigation-menu-viewport-height": E,
        ...n.style
      },
      onPointerEnter: I(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: I(e.onPointerLeave, F(o.onContentLeave)),
      children: Array.from(d.items).map(([T, { ref: _, forceMount: f, ...g }]) => {
        const v = w === T;
        return /* @__PURE__ */ u(K, { present: f || v, children: /* @__PURE__ */ u(
          Ce,
          {
            ...g,
            ref: ye(_, (C) => {
              v && C && m(C);
            })
          }
        ) }, T);
      })
    }
  );
}), He = "FocusGroup", Me = a.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...i } = e, n = y(He, r);
    return /* @__PURE__ */ u(G.Provider, { scope: r, children: /* @__PURE__ */ u(G.Slot, { scope: r, children: /* @__PURE__ */ u(b.div, { dir: n.dir, ...i, ref: t }) }) });
  }
), ne = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], Be = "FocusGroupItem", Ne = a.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: r, ...i } = e, n = De(r), o = y(Be, r);
    return /* @__PURE__ */ u(G.ItemSlot, { scope: r, children: /* @__PURE__ */ u(
      b.button,
      {
        ...i,
        ref: t,
        onKeyDown: I(e.onKeyDown, (s) => {
          if (["Home", "End", ...ne].includes(s.key)) {
            let l = n().map((m) => m.ref.current);
            if ([o.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), ne.includes(s.key)) {
              const m = l.indexOf(s.currentTarget);
              l = l.slice(m + 1);
            }
            setTimeout(() => X(l)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function B(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const n = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || n ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function X(e) {
  const t = document.activeElement;
  return e.some((r) => r === t ? !0 : (r.focus(), document.activeElement !== t));
}
function We(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const r = t.dataset.tabindex;
      t.setAttribute("tabindex", r);
    });
  };
}
function W(e, t) {
  const r = D(t);
  z(() => {
    let i = 0;
    if (e) {
      const n = new ResizeObserver(() => {
        cancelAnimationFrame(i), i = window.requestAnimationFrame(r);
      });
      return n.observe(e), () => {
        window.cancelAnimationFrame(i), n.unobserve(e);
      };
    }
  }, [e, r]);
}
function J(e) {
  return e ? "open" : "closed";
}
function he(e, t) {
  return `${e}-trigger-${t}`;
}
function Ee(e, t) {
  return `${e}-content-${t}`;
}
function F(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var ct = se, ut = le, lt = ve, dt = me, ft = ge, vt = pe, mt = we, gt = Re;
export {
  mt as Content,
  vt as Indicator,
  lt as Item,
  ft as Link,
  ut as List,
  se as NavigationMenu,
  we as NavigationMenuContent,
  pe as NavigationMenuIndicator,
  ve as NavigationMenuItem,
  ge as NavigationMenuLink,
  le as NavigationMenuList,
  Fe as NavigationMenuSub,
  me as NavigationMenuTrigger,
  Re as NavigationMenuViewport,
  ct as Root,
  dt as Trigger,
  gt as Viewport
};
//# sourceMappingURL=index.es84.js.map
