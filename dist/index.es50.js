import s from "react";
import { createContextScope as Q } from "./index.es103.js";
import { createCollection as W } from "./index.es110.js";
import { useComposedRefs as X } from "./index.es108.js";
import { composeEventHandlers as Z } from "./index.es109.js";
import { useControllableState as O } from "./index.es111.js";
import { Primitive as T } from "./index.es106.js";
import { createCollapsibleScope as M, Root as $, Trigger as ee, Content as oe } from "./index.es70.js";
import { useId as re } from "./index.es112.js";
import { useDirection as te } from "./index.es113.js";
import { jsx as n } from "react/jsx-runtime";
var d = "Accordion", ne = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [E, ce, ie] = W(d), [b] = Q(d, [
  ie,
  M
]), S = M(), V = s.forwardRef(
  (o, c) => {
    const { type: e, ...t } = o, i = t, r = t;
    return /* @__PURE__ */ n(E.Provider, { scope: o.__scopeAccordion, children: e === "multiple" ? /* @__PURE__ */ n(de, { ...r, ref: c }) : /* @__PURE__ */ n(se, { ...i, ref: c }) });
  }
);
V.displayName = d;
var [H, ae] = b(d), [K, le] = b(
  d,
  { collapsible: !1 }
), se = s.forwardRef(
  (o, c) => {
    const {
      value: e,
      defaultValue: t,
      onValueChange: i = () => {
      },
      collapsible: r = !1,
      ...l
    } = o, [a, p] = O({
      prop: e,
      defaultProp: t ?? "",
      onChange: i,
      caller: d
    });
    return /* @__PURE__ */ n(
      H,
      {
        scope: o.__scopeAccordion,
        value: s.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: p,
        onItemClose: s.useCallback(() => r && p(""), [r, p]),
        children: /* @__PURE__ */ n(K, { scope: o.__scopeAccordion, collapsible: r, children: /* @__PURE__ */ n(L, { ...l, ref: c }) })
      }
    );
  }
), de = s.forwardRef((o, c) => {
  const {
    value: e,
    defaultValue: t,
    onValueChange: i = () => {
    },
    ...r
  } = o, [l, a] = O({
    prop: e,
    defaultProp: t ?? [],
    onChange: i,
    caller: d
  }), p = s.useCallback(
    (v) => a((u = []) => [...u, v]),
    [a]
  ), m = s.useCallback(
    (v) => a((u = []) => u.filter((h) => h !== v)),
    [a]
  );
  return /* @__PURE__ */ n(
    H,
    {
      scope: o.__scopeAccordion,
      value: l,
      onItemOpen: p,
      onItemClose: m,
      children: /* @__PURE__ */ n(K, { scope: o.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ n(L, { ...r, ref: c }) })
    }
  );
}), [pe, I] = b(d), L = s.forwardRef(
  (o, c) => {
    const { __scopeAccordion: e, disabled: t, dir: i, orientation: r = "vertical", ...l } = o, a = s.useRef(null), p = X(a, c), m = ce(e), u = te(i) === "ltr", h = Z(o.onKeyDown, (C) => {
      if (!ne.includes(C.key)) return;
      const F = C.target, x = m().filter((N) => !N.ref.current?.disabled), A = x.findIndex((N) => N.ref.current === F), D = x.length;
      if (A === -1) return;
      C.preventDefault();
      let f = A;
      const _ = 0, w = D - 1, R = () => {
        f = A + 1, f > w && (f = _);
      }, P = () => {
        f = A - 1, f < _ && (f = w);
      };
      switch (C.key) {
        case "Home":
          f = _;
          break;
        case "End":
          f = w;
          break;
        case "ArrowRight":
          r === "horizontal" && (u ? R() : P());
          break;
        case "ArrowDown":
          r === "vertical" && R();
          break;
        case "ArrowLeft":
          r === "horizontal" && (u ? P() : R());
          break;
        case "ArrowUp":
          r === "vertical" && P();
          break;
      }
      const J = f % D;
      x[J].ref.current?.focus();
    });
    return /* @__PURE__ */ n(
      pe,
      {
        scope: e,
        disabled: t,
        direction: i,
        orientation: r,
        children: /* @__PURE__ */ n(E.Slot, { scope: e, children: /* @__PURE__ */ n(
          T.div,
          {
            ...l,
            "data-orientation": r,
            ref: p,
            onKeyDown: t ? void 0 : h
          }
        ) })
      }
    );
  }
), g = "AccordionItem", [fe, k] = b(g), z = s.forwardRef(
  (o, c) => {
    const { __scopeAccordion: e, value: t, ...i } = o, r = I(g, e), l = ae(g, e), a = S(e), p = re(), m = t && l.value.includes(t) || !1, v = r.disabled || o.disabled;
    return /* @__PURE__ */ n(
      fe,
      {
        scope: e,
        open: m,
        disabled: v,
        triggerId: p,
        children: /* @__PURE__ */ n(
          $,
          {
            "data-orientation": r.orientation,
            "data-state": B(m),
            ...a,
            ...i,
            ref: c,
            disabled: v,
            open: m,
            onOpenChange: (u) => {
              u ? l.onItemOpen(t) : l.onItemClose(t);
            }
          }
        )
      }
    );
  }
);
z.displayName = g;
var G = "AccordionHeader", U = s.forwardRef(
  (o, c) => {
    const { __scopeAccordion: e, ...t } = o, i = I(d, e), r = k(G, e);
    return /* @__PURE__ */ n(
      T.h3,
      {
        "data-orientation": i.orientation,
        "data-state": B(r.open),
        "data-disabled": r.disabled ? "" : void 0,
        ...t,
        ref: c
      }
    );
  }
);
U.displayName = G;
var y = "AccordionTrigger", j = s.forwardRef(
  (o, c) => {
    const { __scopeAccordion: e, ...t } = o, i = I(d, e), r = k(y, e), l = le(y, e), a = S(e);
    return /* @__PURE__ */ n(E.ItemSlot, { scope: e, children: /* @__PURE__ */ n(
      ee,
      {
        "aria-disabled": r.open && !l.collapsible || void 0,
        "data-orientation": i.orientation,
        id: r.triggerId,
        ...a,
        ...t,
        ref: c
      }
    ) });
  }
);
j.displayName = y;
var Y = "AccordionContent", q = s.forwardRef(
  (o, c) => {
    const { __scopeAccordion: e, ...t } = o, i = I(d, e), r = k(Y, e), l = S(e);
    return /* @__PURE__ */ n(
      oe,
      {
        role: "region",
        "aria-labelledby": r.triggerId,
        "data-orientation": i.orientation,
        ...l,
        ...t,
        ref: c,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...o.style
        }
      }
    );
  }
);
q.displayName = Y;
function B(o) {
  return o ? "open" : "closed";
}
var we = V, Re = z, Pe = U, Ne = j, ye = q;
export {
  V as Accordion,
  q as AccordionContent,
  U as AccordionHeader,
  z as AccordionItem,
  j as AccordionTrigger,
  ye as Content,
  Pe as Header,
  Re as Item,
  we as Root,
  Ne as Trigger
};
//# sourceMappingURL=index.es50.js.map
