import r from "react";
import { createContextScope as y } from "./index.es103.js";
import { useComposedRefs as M } from "./index.es108.js";
import { createSlot as x } from "./index.es56.js";
import { jsx as u } from "react/jsx-runtime";
function g(s) {
  const m = s + "CollectionProvider", [A, N] = y(m), [_, f] = A(
    m,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), p = (c) => {
    const { scope: e, children: l } = c, o = r.useRef(null), t = r.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ u(_, { scope: e, itemMap: t, collectionRef: o, children: l });
  };
  p.displayName = m;
  const a = s + "CollectionSlot", E = x(a), C = r.forwardRef(
    (c, e) => {
      const { scope: l, children: o } = c, t = f(a, l), n = M(e, t.collectionRef);
      return /* @__PURE__ */ u(E, { ref: n, children: o });
    }
  );
  C.displayName = a;
  const d = s + "CollectionItemSlot", R = "data-radix-collection-item", T = x(d), I = r.forwardRef(
    (c, e) => {
      const { scope: l, children: o, ...t } = c, n = r.useRef(null), S = M(e, n), i = f(d, l);
      return r.useEffect(() => (i.itemMap.set(n, { ref: n, ...t }), () => void i.itemMap.delete(n))), /* @__PURE__ */ u(T, { [R]: "", ref: S, children: o });
    }
  );
  I.displayName = d;
  function O(c) {
    const e = f(s + "CollectionConsumer", c);
    return r.useCallback(() => {
      const o = e.collectionRef.current;
      if (!o) return [];
      const t = Array.from(o.querySelectorAll(`[${R}]`));
      return Array.from(e.itemMap.values()).sort(
        (i, v) => t.indexOf(i.ref.current) - t.indexOf(v.ref.current)
      );
    }, [e.collectionRef, e.itemMap]);
  }
  return [
    { Provider: p, Slot: C, ItemSlot: I },
    O,
    N
  ];
}
export {
  g as createCollection
};
//# sourceMappingURL=index.es110.js.map
