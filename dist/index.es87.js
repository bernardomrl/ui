import * as n from "react";
import { composeEventHandlers as I } from "./index.es109.js";
import { useComposedRefs as E } from "./index.es108.js";
import { createContextScope as w } from "./index.es103.js";
import { Primitive as C } from "./index.es106.js";
import { createRovingFocusGroupScope as P, Root as B, Item as q } from "./index.es125.js";
import { useControllableState as K } from "./index.es111.js";
import { useDirection as T } from "./index.es113.js";
import { useSize as U } from "./index.es118.js";
import { usePrevious as V } from "./index.es117.js";
import { Presence as j } from "./index.es116.js";
import { jsx as u, jsxs as z } from "react/jsx-runtime";
var _ = "Radio", [H, k] = w(_), [W, X] = H(_), g = n.forwardRef(
  (t, d) => {
    const {
      __scopeRadio: o,
      name: i,
      checked: e = !1,
      required: r,
      disabled: a,
      value: l = "on",
      onCheck: f,
      form: m,
      ...R
    } = t, [p, v] = n.useState(null), s = E(d, (y) => v(y)), c = n.useRef(!1), h = p ? m || !!p.closest("form") : !0;
    return /* @__PURE__ */ z(W, { scope: o, checked: e, disabled: a, children: [
      /* @__PURE__ */ u(
        C.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": e,
          "data-state": N(e),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...R,
          ref: s,
          onClick: I(t.onClick, (y) => {
            e || f?.(), h && (c.current = y.isPropagationStopped(), c.current || y.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ u(
        A,
        {
          control: p,
          bubbles: !c.current,
          name: i,
          value: l,
          checked: e,
          required: r,
          disabled: a,
          form: m,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
g.displayName = _;
var G = "RadioIndicator", S = n.forwardRef(
  (t, d) => {
    const { __scopeRadio: o, forceMount: i, ...e } = t, r = X(G, o);
    return /* @__PURE__ */ u(j, { present: i || r.checked, children: /* @__PURE__ */ u(
      C.span,
      {
        "data-state": N(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...e,
        ref: d
      }
    ) });
  }
);
S.displayName = G;
var Y = "RadioBubbleInput", A = n.forwardRef(
  ({
    __scopeRadio: t,
    control: d,
    checked: o,
    bubbles: i = !0,
    ...e
  }, r) => {
    const a = n.useRef(null), l = E(a, r), f = V(o), m = U(d);
    return n.useEffect(() => {
      const R = a.current;
      if (!R) return;
      const p = window.HTMLInputElement.prototype, s = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (f !== o && s) {
        const c = new Event("click", { bubbles: i });
        s.call(R, o), R.dispatchEvent(c);
      }
    }, [f, o, i]), /* @__PURE__ */ u(
      C.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...e,
        tabIndex: -1,
        ref: l,
        style: {
          ...e.style,
          ...m,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
A.displayName = Y;
function N(t) {
  return t ? "checked" : "unchecked";
}
var J = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], b = "RadioGroup", [Q] = w(b, [
  P,
  k
]), x = P(), D = k(), [Z, $] = Q(b), M = n.forwardRef(
  (t, d) => {
    const {
      __scopeRadioGroup: o,
      name: i,
      defaultValue: e,
      value: r,
      required: a = !1,
      disabled: l = !1,
      orientation: f,
      dir: m,
      loop: R = !0,
      onValueChange: p,
      ...v
    } = t, s = x(o), c = T(m), [h, y] = K({
      prop: r,
      defaultProp: e ?? null,
      onChange: p,
      caller: b
    });
    return /* @__PURE__ */ u(
      Z,
      {
        scope: o,
        name: i,
        required: a,
        disabled: l,
        value: h,
        onValueChange: y,
        children: /* @__PURE__ */ u(
          B,
          {
            asChild: !0,
            ...s,
            orientation: f,
            dir: c,
            loop: R,
            children: /* @__PURE__ */ u(
              C.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": f,
                "data-disabled": l ? "" : void 0,
                dir: c,
                ...v,
                ref: d
              }
            )
          }
        )
      }
    );
  }
);
M.displayName = b;
var O = "RadioGroupItem", F = n.forwardRef(
  (t, d) => {
    const { __scopeRadioGroup: o, disabled: i, ...e } = t, r = $(O, o), a = r.disabled || i, l = x(o), f = D(o), m = n.useRef(null), R = E(d, m), p = r.value === e.value, v = n.useRef(!1);
    return n.useEffect(() => {
      const s = (h) => {
        J.includes(h.key) && (v.current = !0);
      }, c = () => v.current = !1;
      return document.addEventListener("keydown", s), document.addEventListener("keyup", c), () => {
        document.removeEventListener("keydown", s), document.removeEventListener("keyup", c);
      };
    }, []), /* @__PURE__ */ u(
      q,
      {
        asChild: !0,
        ...l,
        focusable: !a,
        active: p,
        children: /* @__PURE__ */ u(
          g,
          {
            disabled: a,
            required: r.required,
            checked: p,
            ...f,
            ...e,
            name: r.name,
            ref: R,
            onCheck: () => r.onValueChange(e.value),
            onKeyDown: I((s) => {
              s.key === "Enter" && s.preventDefault();
            }),
            onFocus: I(e.onFocus, () => {
              v.current && m.current?.click();
            })
          }
        )
      }
    );
  }
);
F.displayName = O;
var ee = "RadioGroupIndicator", L = n.forwardRef(
  (t, d) => {
    const { __scopeRadioGroup: o, ...i } = t, e = D(o);
    return /* @__PURE__ */ u(S, { ...e, ...i, ref: d });
  }
);
L.displayName = ee;
var le = M, fe = F, me = L;
export {
  me as Indicator,
  fe as Item,
  M as RadioGroup,
  L as RadioGroupIndicator,
  F as RadioGroupItem,
  le as Root
};
//# sourceMappingURL=index.es87.js.map
