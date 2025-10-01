import * as u from "react";
import { createCollection as re } from "./index.es110.js";
import { useDirection as ae } from "./index.es113.js";
import { composeEventHandlers as h } from "./index.es109.js";
import { useComposedRefs as oe } from "./index.es108.js";
import { createContextScope as ne } from "./index.es103.js";
import { useId as S } from "./index.es112.js";
import { createMenuScope as te, Portal as ue, Root as se, Anchor as ie, Content as ce, Group as pe, Separator as le, Label as de, Item as be, CheckboxItem as me, ItemIndicator as fe, RadioGroup as ve, RadioItem as Me, Sub as ge, SubTrigger as he, SubContent as Re, Arrow as _e } from "./index.es120.js";
import { createRovingFocusGroupScope as O, Root as Ie, Item as Se } from "./index.es125.js";
import { Primitive as T } from "./index.es106.js";
import { useControllableState as G } from "./index.es111.js";
import { jsx as t } from "react/jsx-runtime";
var _ = "Menubar", [C, Ce, xe] = re(_), [D] = ne(_, [
  xe,
  O
]), p = te(), k = O(), [we, A] = D(_), K = u.forwardRef(
  (e, o) => {
    const {
      __scopeMenubar: r,
      value: a,
      onValueChange: n,
      defaultValue: M,
      loop: l = !0,
      dir: c,
      ...s
    } = e, b = ae(c), i = k(r), [f, m] = G({
      prop: a,
      onChange: n,
      defaultProp: M ?? "",
      caller: _
    }), [v, d] = u.useState(null);
    return /* @__PURE__ */ t(
      we,
      {
        scope: r,
        value: f,
        onMenuOpen: u.useCallback(
          (g) => {
            m(g), d(g);
          },
          [m]
        ),
        onMenuClose: u.useCallback(() => m(""), [m]),
        onMenuToggle: u.useCallback(
          (g) => {
            m((y) => y ? "" : g), d(g);
          },
          [m]
        ),
        dir: b,
        loop: l,
        children: /* @__PURE__ */ t(C.Provider, { scope: r, children: /* @__PURE__ */ t(C.Slot, { scope: r, children: /* @__PURE__ */ t(
          Ie,
          {
            asChild: !0,
            ...i,
            orientation: "horizontal",
            loop: l,
            dir: b,
            currentTabStopId: v,
            onCurrentTabStopIdChange: d,
            children: /* @__PURE__ */ t(T.div, { role: "menubar", ...s, ref: o })
          }
        ) }) })
      }
    );
  }
);
K.displayName = _;
var N = "MenubarMenu", [Ae, F] = D(N), L = (e) => {
  const { __scopeMenubar: o, value: r, ...a } = e, n = S(), M = r || n || "LEGACY_REACT_AUTO_VALUE", l = A(N, o), c = p(o), s = u.useRef(null), b = u.useRef(!1), i = l.value === M;
  return u.useEffect(() => {
    i || (b.current = !1);
  }, [i]), /* @__PURE__ */ t(
    Ae,
    {
      scope: o,
      value: M,
      triggerId: S(),
      triggerRef: s,
      contentId: S(),
      wasKeyboardTriggerOpenRef: b,
      children: /* @__PURE__ */ t(
        se,
        {
          ...c,
          open: i,
          onOpenChange: (f) => {
            f || l.onMenuClose();
          },
          modal: !1,
          dir: l.dir,
          ...a
        }
      )
    }
  );
};
L.displayName = N;
var x = "MenubarTrigger", B = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, disabled: a = !1, ...n } = e, M = k(r), l = p(r), c = A(x, r), s = F(x, r), b = u.useRef(null), i = oe(o, b, s.triggerRef), [f, m] = u.useState(!1), v = c.value === s.value;
    return /* @__PURE__ */ t(C.ItemSlot, { scope: r, value: s.value, disabled: a, children: /* @__PURE__ */ t(
      Se,
      {
        asChild: !0,
        ...M,
        focusable: !a,
        tabStopId: s.value,
        children: /* @__PURE__ */ t(ie, { asChild: !0, ...l, children: /* @__PURE__ */ t(
          T.button,
          {
            type: "button",
            role: "menuitem",
            id: s.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": v,
            "aria-controls": v ? s.contentId : void 0,
            "data-highlighted": f ? "" : void 0,
            "data-state": v ? "open" : "closed",
            "data-disabled": a ? "" : void 0,
            disabled: a,
            ...n,
            ref: i,
            onPointerDown: h(e.onPointerDown, (d) => {
              !a && d.button === 0 && d.ctrlKey === !1 && (c.onMenuOpen(s.value), v || d.preventDefault());
            }),
            onPointerEnter: h(e.onPointerEnter, () => {
              !!c.value && !v && (c.onMenuOpen(s.value), b.current?.focus());
            }),
            onKeyDown: h(e.onKeyDown, (d) => {
              a || (["Enter", " "].includes(d.key) && c.onMenuToggle(s.value), d.key === "ArrowDown" && c.onMenuOpen(s.value), ["Enter", " ", "ArrowDown"].includes(d.key) && (s.wasKeyboardTriggerOpenRef.current = !0, d.preventDefault()));
            }),
            onFocus: h(e.onFocus, () => m(!0)),
            onBlur: h(e.onBlur, () => m(!1))
          }
        ) })
      }
    ) });
  }
);
B.displayName = x;
var Ne = "MenubarPortal", U = (e) => {
  const { __scopeMenubar: o, ...r } = e, a = p(o);
  return /* @__PURE__ */ t(ue, { ...a, ...r });
};
U.displayName = Ne;
var w = "MenubarContent", V = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, align: a = "start", ...n } = e, M = p(r), l = A(w, r), c = F(w, r), s = Ce(r), b = u.useRef(!1);
    return /* @__PURE__ */ t(
      ce,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        "data-radix-menubar-content": "",
        ...M,
        ...n,
        ref: o,
        align: a,
        onCloseAutoFocus: h(e.onCloseAutoFocus, (i) => {
          !!!l.value && !b.current && c.triggerRef.current?.focus(), b.current = !1, i.preventDefault();
        }),
        onFocusOutside: h(e.onFocusOutside, (i) => {
          const f = i.target;
          s().some((v) => v.ref.current?.contains(f)) && i.preventDefault();
        }),
        onInteractOutside: h(e.onInteractOutside, () => {
          b.current = !0;
        }),
        onEntryFocus: (i) => {
          c.wasKeyboardTriggerOpenRef.current || i.preventDefault();
        },
        onKeyDown: h(
          e.onKeyDown,
          (i) => {
            if (["ArrowRight", "ArrowLeft"].includes(i.key)) {
              const f = i.target, m = f.hasAttribute("data-radix-menubar-subtrigger"), v = f.closest("[data-radix-menubar-content]") !== i.currentTarget, g = (l.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === i.key;
              if (!g && m || v && g) return;
              let R = s().filter((I) => !I.disabled).map((I) => I.value);
              g && R.reverse();
              const P = R.indexOf(c.value);
              R = l.loop ? Ue(R, P + 1) : R.slice(P + 1);
              const [E] = R;
              E && l.onMenuOpen(E);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
V.displayName = w;
var ye = "MenubarGroup", H = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(pe, { ...n, ...a, ref: o });
  }
);
H.displayName = ye;
var Pe = "MenubarLabel", $ = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(de, { ...n, ...a, ref: o });
  }
);
$.displayName = Pe;
var Ee = "MenubarItem", j = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(be, { ...n, ...a, ref: o });
  }
);
j.displayName = Ee;
var Oe = "MenubarCheckboxItem", z = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(me, { ...n, ...a, ref: o });
  }
);
z.displayName = Oe;
var Te = "MenubarRadioGroup", W = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(ve, { ...n, ...a, ref: o });
  }
);
W.displayName = Te;
var Ge = "MenubarRadioItem", X = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(Me, { ...n, ...a, ref: o });
  }
);
X.displayName = Ge;
var De = "MenubarItemIndicator", Y = u.forwardRef((e, o) => {
  const { __scopeMenubar: r, ...a } = e, n = p(r);
  return /* @__PURE__ */ t(fe, { ...n, ...a, ref: o });
});
Y.displayName = De;
var ke = "MenubarSeparator", q = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(le, { ...n, ...a, ref: o });
  }
);
q.displayName = ke;
var Ke = "MenubarArrow", Fe = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(_e, { ...n, ...a, ref: o });
  }
);
Fe.displayName = Ke;
var J = "MenubarSub", Q = (e) => {
  const { __scopeMenubar: o, children: r, open: a, onOpenChange: n, defaultOpen: M } = e, l = p(o), [c, s] = G({
    prop: a,
    defaultProp: M ?? !1,
    onChange: n,
    caller: J
  });
  return /* @__PURE__ */ t(ge, { ...l, open: c, onOpenChange: s, children: r });
};
Q.displayName = J;
var Le = "MenubarSubTrigger", Z = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(
      he,
      {
        "data-radix-menubar-subtrigger": "",
        ...n,
        ...a,
        ref: o
      }
    );
  }
);
Z.displayName = Le;
var Be = "MenubarSubContent", ee = u.forwardRef(
  (e, o) => {
    const { __scopeMenubar: r, ...a } = e, n = p(r);
    return /* @__PURE__ */ t(
      Re,
      {
        ...n,
        "data-radix-menubar-content": "",
        ...a,
        ref: o,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
ee.displayName = Be;
function Ue(e, o) {
  return e.map((r, a) => e[(o + a) % e.length]);
}
var er = K, rr = L, ar = B, or = U, nr = V, tr = H, ur = $, sr = j, ir = z, cr = W, pr = X, lr = Y, dr = q, br = Q, mr = Z, fr = ee;
export {
  ir as CheckboxItem,
  nr as Content,
  tr as Group,
  sr as Item,
  lr as ItemIndicator,
  ur as Label,
  rr as Menu,
  K as Menubar,
  Fe as MenubarArrow,
  z as MenubarCheckboxItem,
  V as MenubarContent,
  H as MenubarGroup,
  j as MenubarItem,
  Y as MenubarItemIndicator,
  $ as MenubarLabel,
  L as MenubarMenu,
  U as MenubarPortal,
  W as MenubarRadioGroup,
  X as MenubarRadioItem,
  q as MenubarSeparator,
  Q as MenubarSub,
  ee as MenubarSubContent,
  Z as MenubarSubTrigger,
  B as MenubarTrigger,
  or as Portal,
  cr as RadioGroup,
  pr as RadioItem,
  er as Root,
  dr as Separator,
  br as Sub,
  fr as SubContent,
  mr as SubTrigger,
  ar as Trigger
};
//# sourceMappingURL=index.es83.js.map
