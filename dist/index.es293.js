import { useControlledValue as a } from "./index.es288.js";
function q(u, S) {
  const { selected: c, required: s, onSelect: t } = u, [f, r] = a(c, t ? c : void 0), e = t ? c : f, { isSameDay: d } = S;
  return {
    selected: e,
    select: (n, o, i) => {
      let l = n;
      return !s && e && e && d(n, e) && (l = void 0), t || r(l), t?.(l, n, o, i), l;
    },
    isSelected: (n) => e ? d(e, n) : !1
  };
}
export {
  q as useSingle
};
//# sourceMappingURL=index.es293.js.map
