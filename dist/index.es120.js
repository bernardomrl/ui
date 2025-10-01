import * as o from "react";
import { composeEventHandlers as v } from "./index.es109.js";
import { createCollection as ze } from "./index.es110.js";
import { useComposedRefs as D, composeRefs as Ze } from "./index.es108.js";
import { createContextScope as $e } from "./index.es103.js";
import { useDirection as qe } from "./index.es113.js";
import { DismissableLayer as Je } from "./index.es123.js";
import { useFocusGuards as Qe } from "./index.es126.js";
import { FocusScope as et } from "./index.es127.js";
import { useId as de } from "./index.es112.js";
import { createPopperScope as pe, Root as me, Anchor as tt, Content as nt, Arrow as ot } from "./index.es121.js";
import { Portal as rt } from "./index.es122.js";
import { Presence as X } from "./index.es116.js";
import { Primitive as N, dispatchDiscreteCustomEvent as ct } from "./index.es106.js";
import { createRovingFocusGroupScope as he, Item as at, Root as st } from "./index.es125.js";
import { createSlot as ut } from "./index.es56.js";
import { useCallbackRef as q } from "./index.es104.js";
import { hideOthers as it } from "./index.es128.js";
import lt from "./index.es129.js";
import { jsx as s } from "react/jsx-runtime";
var $ = ["Enter", " "], dt = ["ArrowDown", "PageUp", "Home"], Me = ["ArrowUp", "PageDown", "End"], ft = [...dt, ...Me], pt = {
  ltr: [...$, "ArrowRight"],
  rtl: [...$, "ArrowLeft"]
}, mt = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, F = "Menu", [O, ht, Mt] = ze(F), [P, on] = $e(F, [
  Mt,
  pe,
  he
]), L = pe(), ve = he(), [Ce, R] = P(F), [vt, K] = P(F), ge = (e) => {
  const { __scopeMenu: n, open: t = !1, children: r, dir: u, onOpenChange: c, modal: d = !0 } = e, m = L(n), [h, p] = o.useState(null), l = o.useRef(!1), a = q(c), f = qe(u);
  return o.useEffect(() => {
    const g = () => {
      l.current = !0, document.addEventListener("pointerdown", M, { capture: !0, once: !0 }), document.addEventListener("pointermove", M, { capture: !0, once: !0 });
    }, M = () => l.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", M, { capture: !0 }), document.removeEventListener("pointermove", M, { capture: !0 });
    };
  }, []), /* @__PURE__ */ s(me, { ...m, children: /* @__PURE__ */ s(
    Ce,
    {
      scope: n,
      open: t,
      onOpenChange: a,
      content: h,
      onContentChange: p,
      children: /* @__PURE__ */ s(
        vt,
        {
          scope: n,
          onClose: o.useCallback(() => a(!1), [a]),
          isUsingKeyboardRef: l,
          dir: f,
          modal: d,
          children: r
        }
      )
    }
  ) });
};
ge.displayName = F;
var Ct = "MenuAnchor", J = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, u = L(t);
    return /* @__PURE__ */ s(tt, { ...u, ...r, ref: n });
  }
);
J.displayName = Ct;
var Q = "MenuPortal", [gt, _e] = P(Q, {
  forceMount: void 0
}), Re = (e) => {
  const { __scopeMenu: n, forceMount: t, children: r, container: u } = e, c = R(Q, n);
  return /* @__PURE__ */ s(gt, { scope: n, forceMount: t, children: /* @__PURE__ */ s(X, { present: t || c.open, children: /* @__PURE__ */ s(rt, { asChild: !0, container: u, children: r }) }) });
};
Re.displayName = Q;
var _ = "MenuContent", [_t, ee] = P(_), Se = o.forwardRef(
  (e, n) => {
    const t = _e(_, e.__scopeMenu), { forceMount: r = t.forceMount, ...u } = e, c = R(_, e.__scopeMenu), d = K(_, e.__scopeMenu);
    return /* @__PURE__ */ s(O.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ s(X, { present: r || c.open, children: /* @__PURE__ */ s(O.Slot, { scope: e.__scopeMenu, children: d.modal ? /* @__PURE__ */ s(Rt, { ...u, ref: n }) : /* @__PURE__ */ s(St, { ...u, ref: n }) }) }) });
  }
), Rt = o.forwardRef(
  (e, n) => {
    const t = R(_, e.__scopeMenu), r = o.useRef(null), u = D(n, r);
    return o.useEffect(() => {
      const c = r.current;
      if (c) return it(c);
    }, []), /* @__PURE__ */ s(
      te,
      {
        ...e,
        ref: u,
        trapFocus: t.open,
        disableOutsidePointerEvents: t.open,
        disableOutsideScroll: !0,
        onFocusOutside: v(
          e.onFocusOutside,
          (c) => c.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => t.onOpenChange(!1)
      }
    );
  }
), St = o.forwardRef((e, n) => {
  const t = R(_, e.__scopeMenu);
  return /* @__PURE__ */ s(
    te,
    {
      ...e,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => t.onOpenChange(!1)
    }
  );
}), Pt = ut("MenuContent.ScrollLock"), te = o.forwardRef(
  (e, n) => {
    const {
      __scopeMenu: t,
      loop: r = !1,
      trapFocus: u,
      onOpenAutoFocus: c,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: m,
      onEntryFocus: h,
      onEscapeKeyDown: p,
      onPointerDownOutside: l,
      onFocusOutside: a,
      onInteractOutside: f,
      onDismiss: g,
      disableOutsideScroll: M,
      ...E
    } = e, x = R(_, t), w = K(_, t), Ue = L(t), Be = ve(t), ae = ht(t), [Ve, se] = o.useState(null), G = o.useRef(null), Ye = D(n, G, x.onContentChange), U = o.useRef(0), B = o.useRef(""), Xe = o.useRef(0), H = o.useRef(null), ue = o.useRef("right"), W = o.useRef(0), je = M ? lt : o.Fragment, He = M ? { as: Pt, allowPinchZoom: !0 } : void 0, We = (i) => {
      const y = B.current + i, S = ae().filter((C) => !C.disabled), b = document.activeElement, z = S.find((C) => C.ref.current === b)?.textValue, Z = S.map((C) => C.textValue), ie = Nt(Z, y, z), T = S.find((C) => C.textValue === ie)?.ref.current;
      (function C(le) {
        B.current = le, window.clearTimeout(U.current), le !== "" && (U.current = window.setTimeout(() => C(""), 1e3));
      })(y), T && setTimeout(() => T.focus());
    };
    o.useEffect(() => () => window.clearTimeout(U.current), []), Qe();
    const I = o.useCallback((i) => ue.current === H.current?.side && Lt(i, H.current?.area), []);
    return /* @__PURE__ */ s(
      _t,
      {
        scope: t,
        searchRef: B,
        onItemEnter: o.useCallback(
          (i) => {
            I(i) && i.preventDefault();
          },
          [I]
        ),
        onItemLeave: o.useCallback(
          (i) => {
            I(i) || (G.current?.focus(), se(null));
          },
          [I]
        ),
        onTriggerLeave: o.useCallback(
          (i) => {
            I(i) && i.preventDefault();
          },
          [I]
        ),
        pointerGraceTimerRef: Xe,
        onPointerGraceIntentChange: o.useCallback((i) => {
          H.current = i;
        }, []),
        children: /* @__PURE__ */ s(je, { ...He, children: /* @__PURE__ */ s(
          et,
          {
            asChild: !0,
            trapped: u,
            onMountAutoFocus: v(c, (i) => {
              i.preventDefault(), G.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: d,
            children: /* @__PURE__ */ s(
              Je,
              {
                asChild: !0,
                disableOutsidePointerEvents: m,
                onEscapeKeyDown: p,
                onPointerDownOutside: l,
                onFocusOutside: a,
                onInteractOutside: f,
                onDismiss: g,
                children: /* @__PURE__ */ s(
                  st,
                  {
                    asChild: !0,
                    ...Be,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: Ve,
                    onCurrentTabStopIdChange: se,
                    onEntryFocus: v(h, (i) => {
                      w.isUsingKeyboardRef.current || i.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ s(
                      nt,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ge(x.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...Ue,
                        ...E,
                        ref: Ye,
                        style: { outline: "none", ...E.style },
                        onKeyDown: v(E.onKeyDown, (i) => {
                          const S = i.target.closest("[data-radix-menu-content]") === i.currentTarget, b = i.ctrlKey || i.altKey || i.metaKey, z = i.key.length === 1;
                          S && (i.key === "Tab" && i.preventDefault(), !b && z && We(i.key));
                          const Z = G.current;
                          if (i.target !== Z || !ft.includes(i.key)) return;
                          i.preventDefault();
                          const T = ae().filter((C) => !C.disabled).map((C) => C.ref.current);
                          Me.includes(i.key) && T.reverse(), kt(T);
                        }),
                        onBlur: v(e.onBlur, (i) => {
                          i.currentTarget.contains(i.target) || (window.clearTimeout(U.current), B.current = "");
                        }),
                        onPointerMove: v(
                          e.onPointerMove,
                          k((i) => {
                            const y = i.target, S = W.current !== i.clientX;
                            if (i.currentTarget.contains(y) && S) {
                              const b = i.clientX > W.current ? "right" : "left";
                              ue.current = b, W.current = i.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Se.displayName = _;
var Et = "MenuGroup", ne = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ s(N.div, { role: "group", ...r, ref: n });
  }
);
ne.displayName = Et;
var wt = "MenuLabel", Pe = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ s(N.div, { ...r, ref: n });
  }
);
Pe.displayName = wt;
var V = "MenuItem", fe = "menu.itemSelect", j = o.forwardRef(
  (e, n) => {
    const { disabled: t = !1, onSelect: r, ...u } = e, c = o.useRef(null), d = K(V, e.__scopeMenu), m = ee(V, e.__scopeMenu), h = D(n, c), p = o.useRef(!1), l = () => {
      const a = c.current;
      if (!t && a) {
        const f = new CustomEvent(fe, { bubbles: !0, cancelable: !0 });
        a.addEventListener(fe, (g) => r?.(g), { once: !0 }), ct(a, f), f.defaultPrevented ? p.current = !1 : d.onClose();
      }
    };
    return /* @__PURE__ */ s(
      Ee,
      {
        ...u,
        ref: h,
        disabled: t,
        onClick: v(e.onClick, l),
        onPointerDown: (a) => {
          e.onPointerDown?.(a), p.current = !0;
        },
        onPointerUp: v(e.onPointerUp, (a) => {
          p.current || a.currentTarget?.click();
        }),
        onKeyDown: v(e.onKeyDown, (a) => {
          const f = m.searchRef.current !== "";
          t || f && a.key === " " || $.includes(a.key) && (a.currentTarget.click(), a.preventDefault());
        })
      }
    );
  }
);
j.displayName = V;
var Ee = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, disabled: r = !1, textValue: u, ...c } = e, d = ee(V, t), m = ve(t), h = o.useRef(null), p = D(n, h), [l, a] = o.useState(!1), [f, g] = o.useState("");
    return o.useEffect(() => {
      const M = h.current;
      M && g((M.textContent ?? "").trim());
    }, [c.children]), /* @__PURE__ */ s(
      O.ItemSlot,
      {
        scope: t,
        disabled: r,
        textValue: u ?? f,
        children: /* @__PURE__ */ s(at, { asChild: !0, ...m, focusable: !r, children: /* @__PURE__ */ s(
          N.div,
          {
            role: "menuitem",
            "data-highlighted": l ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...c,
            ref: p,
            onPointerMove: v(
              e.onPointerMove,
              k((M) => {
                r ? d.onItemLeave(M) : (d.onItemEnter(M), M.defaultPrevented || M.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: v(
              e.onPointerLeave,
              k((M) => d.onItemLeave(M))
            ),
            onFocus: v(e.onFocus, () => a(!0)),
            onBlur: v(e.onBlur, () => a(!1))
          }
        ) })
      }
    );
  }
), It = "MenuCheckboxItem", we = o.forwardRef(
  (e, n) => {
    const { checked: t = !1, onCheckedChange: r, ...u } = e;
    return /* @__PURE__ */ s(Te, { scope: e.__scopeMenu, checked: t, children: /* @__PURE__ */ s(
      j,
      {
        role: "menuitemcheckbox",
        "aria-checked": Y(t) ? "mixed" : t,
        ...u,
        ref: n,
        "data-state": ce(t),
        onSelect: v(
          u.onSelect,
          () => r?.(Y(t) ? !0 : !t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
we.displayName = It;
var Ie = "MenuRadioGroup", [yt, xt] = P(
  Ie,
  { value: void 0, onValueChange: () => {
  } }
), ye = o.forwardRef(
  (e, n) => {
    const { value: t, onValueChange: r, ...u } = e, c = q(r);
    return /* @__PURE__ */ s(yt, { scope: e.__scopeMenu, value: t, onValueChange: c, children: /* @__PURE__ */ s(ne, { ...u, ref: n }) });
  }
);
ye.displayName = Ie;
var xe = "MenuRadioItem", be = o.forwardRef(
  (e, n) => {
    const { value: t, ...r } = e, u = xt(xe, e.__scopeMenu), c = t === u.value;
    return /* @__PURE__ */ s(Te, { scope: e.__scopeMenu, checked: c, children: /* @__PURE__ */ s(
      j,
      {
        role: "menuitemradio",
        "aria-checked": c,
        ...r,
        ref: n,
        "data-state": ce(c),
        onSelect: v(
          r.onSelect,
          () => u.onValueChange?.(t),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
be.displayName = xe;
var oe = "MenuItemIndicator", [Te, bt] = P(
  oe,
  { checked: !1 }
), Ae = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, forceMount: r, ...u } = e, c = bt(oe, t);
    return /* @__PURE__ */ s(
      X,
      {
        present: r || Y(c.checked) || c.checked === !0,
        children: /* @__PURE__ */ s(
          N.span,
          {
            ...u,
            ref: n,
            "data-state": ce(c.checked)
          }
        )
      }
    );
  }
);
Ae.displayName = oe;
var Tt = "MenuSeparator", Oe = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e;
    return /* @__PURE__ */ s(
      N.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }
);
Oe.displayName = Tt;
var At = "MenuArrow", ke = o.forwardRef(
  (e, n) => {
    const { __scopeMenu: t, ...r } = e, u = L(t);
    return /* @__PURE__ */ s(ot, { ...u, ...r, ref: n });
  }
);
ke.displayName = At;
var re = "MenuSub", [Ot, De] = P(re), Ne = (e) => {
  const { __scopeMenu: n, children: t, open: r = !1, onOpenChange: u } = e, c = R(re, n), d = L(n), [m, h] = o.useState(null), [p, l] = o.useState(null), a = q(u);
  return o.useEffect(() => (c.open === !1 && a(!1), () => a(!1)), [c.open, a]), /* @__PURE__ */ s(me, { ...d, children: /* @__PURE__ */ s(
    Ce,
    {
      scope: n,
      open: r,
      onOpenChange: a,
      content: p,
      onContentChange: l,
      children: /* @__PURE__ */ s(
        Ot,
        {
          scope: n,
          contentId: de(),
          triggerId: de(),
          trigger: m,
          onTriggerChange: h,
          children: t
        }
      )
    }
  ) });
};
Ne.displayName = re;
var A = "MenuSubTrigger", Fe = o.forwardRef(
  (e, n) => {
    const t = R(A, e.__scopeMenu), r = K(A, e.__scopeMenu), u = De(A, e.__scopeMenu), c = ee(A, e.__scopeMenu), d = o.useRef(null), { pointerGraceTimerRef: m, onPointerGraceIntentChange: h } = c, p = { __scopeMenu: e.__scopeMenu }, l = o.useCallback(() => {
      d.current && window.clearTimeout(d.current), d.current = null;
    }, []);
    return o.useEffect(() => l, [l]), o.useEffect(() => {
      const a = m.current;
      return () => {
        window.clearTimeout(a), h(null);
      };
    }, [m, h]), /* @__PURE__ */ s(J, { asChild: !0, ...p, children: /* @__PURE__ */ s(
      Ee,
      {
        id: u.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": t.open,
        "aria-controls": u.contentId,
        "data-state": Ge(t.open),
        ...e,
        ref: Ze(n, u.onTriggerChange),
        onClick: (a) => {
          e.onClick?.(a), !(e.disabled || a.defaultPrevented) && (a.currentTarget.focus(), t.open || t.onOpenChange(!0));
        },
        onPointerMove: v(
          e.onPointerMove,
          k((a) => {
            c.onItemEnter(a), !a.defaultPrevented && !e.disabled && !t.open && !d.current && (c.onPointerGraceIntentChange(null), d.current = window.setTimeout(() => {
              t.onOpenChange(!0), l();
            }, 100));
          })
        ),
        onPointerLeave: v(
          e.onPointerLeave,
          k((a) => {
            l();
            const f = t.content?.getBoundingClientRect();
            if (f) {
              const g = t.content?.dataset.side, M = g === "right", E = M ? -5 : 5, x = f[M ? "left" : "right"], w = f[M ? "right" : "left"];
              c.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: a.clientX + E, y: a.clientY },
                  { x, y: f.top },
                  { x: w, y: f.top },
                  { x: w, y: f.bottom },
                  { x, y: f.bottom }
                ],
                side: g
              }), window.clearTimeout(m.current), m.current = window.setTimeout(
                () => c.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (c.onTriggerLeave(a), a.defaultPrevented) return;
              c.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: v(e.onKeyDown, (a) => {
          const f = c.searchRef.current !== "";
          e.disabled || f && a.key === " " || pt[r.dir].includes(a.key) && (t.onOpenChange(!0), t.content?.focus(), a.preventDefault());
        })
      }
    ) });
  }
);
Fe.displayName = A;
var Le = "MenuSubContent", Ke = o.forwardRef(
  (e, n) => {
    const t = _e(_, e.__scopeMenu), { forceMount: r = t.forceMount, ...u } = e, c = R(_, e.__scopeMenu), d = K(_, e.__scopeMenu), m = De(Le, e.__scopeMenu), h = o.useRef(null), p = D(n, h);
    return /* @__PURE__ */ s(O.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ s(X, { present: r || c.open, children: /* @__PURE__ */ s(O.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ s(
      te,
      {
        id: m.contentId,
        "aria-labelledby": m.triggerId,
        ...u,
        ref: p,
        align: "start",
        side: d.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (l) => {
          d.isUsingKeyboardRef.current && h.current?.focus(), l.preventDefault();
        },
        onCloseAutoFocus: (l) => l.preventDefault(),
        onFocusOutside: v(e.onFocusOutside, (l) => {
          l.target !== m.trigger && c.onOpenChange(!1);
        }),
        onEscapeKeyDown: v(e.onEscapeKeyDown, (l) => {
          d.onClose(), l.preventDefault();
        }),
        onKeyDown: v(e.onKeyDown, (l) => {
          const a = l.currentTarget.contains(l.target), f = mt[d.dir].includes(l.key);
          a && f && (c.onOpenChange(!1), m.trigger?.focus(), l.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ke.displayName = Le;
function Ge(e) {
  return e ? "open" : "closed";
}
function Y(e) {
  return e === "indeterminate";
}
function ce(e) {
  return Y(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function kt(e) {
  const n = document.activeElement;
  for (const t of e)
    if (t === n || (t.focus(), document.activeElement !== n)) return;
}
function Dt(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
function Nt(e, n, t) {
  const u = n.length > 1 && Array.from(n).every((p) => p === n[0]) ? n[0] : n, c = t ? e.indexOf(t) : -1;
  let d = Dt(e, Math.max(c, 0));
  u.length === 1 && (d = d.filter((p) => p !== t));
  const h = d.find(
    (p) => p.toLowerCase().startsWith(u.toLowerCase())
  );
  return h !== t ? h : void 0;
}
function Ft(e, n) {
  const { x: t, y: r } = e;
  let u = !1;
  for (let c = 0, d = n.length - 1; c < n.length; d = c++) {
    const m = n[c], h = n[d], p = m.x, l = m.y, a = h.x, f = h.y;
    l > r != f > r && t < (a - p) * (r - l) / (f - l) + p && (u = !u);
  }
  return u;
}
function Lt(e, n) {
  if (!n) return !1;
  const t = { x: e.clientX, y: e.clientY };
  return Ft(t, n);
}
function k(e) {
  return (n) => n.pointerType === "mouse" ? e(n) : void 0;
}
var rn = ge, cn = J, an = Re, sn = Se, un = ne, ln = Pe, dn = j, fn = we, pn = ye, mn = be, hn = Ae, Mn = Oe, vn = ke, Cn = Ne, gn = Fe, _n = Ke;
export {
  cn as Anchor,
  vn as Arrow,
  fn as CheckboxItem,
  sn as Content,
  un as Group,
  dn as Item,
  hn as ItemIndicator,
  ln as Label,
  ge as Menu,
  J as MenuAnchor,
  ke as MenuArrow,
  we as MenuCheckboxItem,
  Se as MenuContent,
  ne as MenuGroup,
  j as MenuItem,
  Ae as MenuItemIndicator,
  Pe as MenuLabel,
  Re as MenuPortal,
  ye as MenuRadioGroup,
  be as MenuRadioItem,
  Oe as MenuSeparator,
  Ne as MenuSub,
  Ke as MenuSubContent,
  Fe as MenuSubTrigger,
  an as Portal,
  pn as RadioGroup,
  mn as RadioItem,
  rn as Root,
  Mn as Separator,
  Cn as Sub,
  _n as SubContent,
  gn as SubTrigger,
  on as createMenuScope
};
//# sourceMappingURL=index.es120.js.map
