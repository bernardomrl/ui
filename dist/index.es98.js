import p from "react";
import { createContextScope as S } from "./index.es103.js";
import { Primitive as G } from "./index.es106.js";
import { createRovingFocusGroupScope as P, Item as V, Root as M } from "./index.es125.js";
import { Toggle as A } from "./index.es99.js";
import { useControllableState as _ } from "./index.es111.js";
import { useDirection as F } from "./index.es113.js";
import { jsx as l } from "react/jsx-runtime";
var i = "ToggleGroup", [C] = S(i, [
  P
]), I = P(), f = p.forwardRef((e, r) => {
  const { type: a, ...t } = e;
  if (a === "single")
    return /* @__PURE__ */ l(w, { ...t, ref: r });
  if (a === "multiple")
    return /* @__PURE__ */ l(D, { ...t, ref: r });
  throw new Error(`Missing prop \`type\` expected on \`${i}\``);
});
f.displayName = i;
var [h, x] = C(i), w = p.forwardRef((e, r) => {
  const {
    value: a,
    defaultValue: t,
    onValueChange: u = () => {
    },
    ...n
  } = e, [s, o] = _({
    prop: a,
    defaultProp: t ?? "",
    onChange: u,
    caller: i
  });
  return /* @__PURE__ */ l(
    h,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: p.useMemo(() => s ? [s] : [], [s]),
      onItemActivate: o,
      onItemDeactivate: p.useCallback(() => o(""), [o]),
      children: /* @__PURE__ */ l(R, { ...n, ref: r })
    }
  );
}), D = p.forwardRef((e, r) => {
  const {
    value: a,
    defaultValue: t,
    onValueChange: u = () => {
    },
    ...n
  } = e, [s, o] = _({
    prop: a,
    defaultProp: t ?? [],
    onChange: u,
    caller: i
  }), c = p.useCallback(
    (g) => o((v = []) => [...v, g]),
    [o]
  ), d = p.useCallback(
    (g) => o((v = []) => v.filter((y) => y !== g)),
    [o]
  );
  return /* @__PURE__ */ l(
    h,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ l(R, { ...n, ref: r })
    }
  );
});
f.displayName = i;
var [E, N] = C(i), R = p.forwardRef(
  (e, r) => {
    const {
      __scopeToggleGroup: a,
      disabled: t = !1,
      rovingFocus: u = !0,
      orientation: n,
      dir: s,
      loop: o = !0,
      ...c
    } = e, d = I(a), g = F(s), v = { role: "group", dir: g, ...c };
    return /* @__PURE__ */ l(E, { scope: a, rovingFocus: u, disabled: t, children: u ? /* @__PURE__ */ l(
      M,
      {
        asChild: !0,
        ...d,
        orientation: n,
        dir: g,
        loop: o,
        children: /* @__PURE__ */ l(G.div, { ...v, ref: r })
      }
    ) : /* @__PURE__ */ l(G.div, { ...v, ref: r }) });
  }
), m = "ToggleGroupItem", b = p.forwardRef(
  (e, r) => {
    const a = x(m, e.__scopeToggleGroup), t = N(m, e.__scopeToggleGroup), u = I(e.__scopeToggleGroup), n = a.value.includes(e.value), s = t.disabled || e.disabled, o = { ...e, pressed: n, disabled: s }, c = p.useRef(null);
    return t.rovingFocus ? /* @__PURE__ */ l(
      V,
      {
        asChild: !0,
        ...u,
        focusable: !s,
        active: n,
        ref: c,
        children: /* @__PURE__ */ l(T, { ...o, ref: r })
      }
    ) : /* @__PURE__ */ l(T, { ...o, ref: r });
  }
);
b.displayName = m;
var T = p.forwardRef(
  (e, r) => {
    const { __scopeToggleGroup: a, value: t, ...u } = e, n = x(m, a), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, o = n.type === "single" ? s : void 0;
    return /* @__PURE__ */ l(
      A,
      {
        ...o,
        ...u,
        ref: r,
        onPressedChange: (c) => {
          c ? n.onItemActivate(t) : n.onItemDeactivate(t);
        }
      }
    );
  }
), z = f, H = b;
export {
  H as Item,
  z as Root,
  f as ToggleGroup,
  b as ToggleGroupItem
};
//# sourceMappingURL=index.es98.js.map
