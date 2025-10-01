import * as r from "react";
import { composeEventHandlers as T } from "./index.es109.js";
import { useComposedRefs as P } from "./index.es108.js";
import { createContextScope as I } from "./index.es103.js";
import { useControllableState as M } from "./index.es111.js";
import { usePrevious as H } from "./index.es117.js";
import { useSize as j } from "./index.es118.js";
import { Primitive as y } from "./index.es106.js";
import { jsxs as A, jsx as m } from "react/jsx-runtime";
var h = "Switch", [U] = I(h), [q, z] = U(h), R = r.forwardRef(
  (t, a) => {
    const {
      __scopeSwitch: e,
      name: c,
      checked: o,
      defaultChecked: v,
      required: i,
      disabled: n,
      value: p = "on",
      onCheckedChange: w,
      form: s,
      ...S
    } = t, [d, u] = r.useState(null), b = P(a, (f) => u(f)), C = r.useRef(!1), k = d ? s || !!d.closest("form") : !0, [l, B] = M({
      prop: o,
      defaultProp: v ?? !1,
      onChange: w,
      caller: h
    });
    return /* @__PURE__ */ A(q, { scope: e, checked: l, disabled: n, children: [
      /* @__PURE__ */ m(
        y.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": l,
          "aria-required": i,
          "data-state": g(l),
          "data-disabled": n ? "" : void 0,
          disabled: n,
          value: p,
          ...S,
          ref: b,
          onClick: T(t.onClick, (f) => {
            B((N) => !N), k && (C.current = f.isPropagationStopped(), C.current || f.stopPropagation());
          })
        }
      ),
      k && /* @__PURE__ */ m(
        x,
        {
          control: d,
          bubbles: !C.current,
          name: c,
          value: p,
          checked: l,
          required: i,
          disabled: n,
          form: s,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
R.displayName = h;
var E = "SwitchThumb", _ = r.forwardRef(
  (t, a) => {
    const { __scopeSwitch: e, ...c } = t, o = z(E, e);
    return /* @__PURE__ */ m(
      y.span,
      {
        "data-state": g(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...c,
        ref: a
      }
    );
  }
);
_.displayName = E;
var L = "SwitchBubbleInput", x = r.forwardRef(
  ({
    __scopeSwitch: t,
    control: a,
    checked: e,
    bubbles: c = !0,
    ...o
  }, v) => {
    const i = r.useRef(null), n = P(i, v), p = H(e), w = j(a);
    return r.useEffect(() => {
      const s = i.current;
      if (!s) return;
      const S = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(
        S,
        "checked"
      ).set;
      if (p !== e && u) {
        const b = new Event("click", { bubbles: c });
        u.call(s, e), s.dispatchEvent(b);
      }
    }, [p, e, c]), /* @__PURE__ */ m(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: e,
        ...o,
        tabIndex: -1,
        ref: n,
        style: {
          ...o.style,
          ...w,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
x.displayName = L;
function g(t) {
  return t ? "checked" : "unchecked";
}
var Q = R, V = _;
export {
  Q as Root,
  R as Switch,
  _ as SwitchThumb,
  V as Thumb
};
//# sourceMappingURL=index.es97.js.map
