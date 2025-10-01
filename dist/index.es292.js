import { useControlledValue as x } from "./index.es288.js";
import { rangeIncludesDate as R } from "./index.es178.js";
import { addToRange as y } from "./index.es274.js";
import { rangeContainsModifiers as C } from "./index.es277.js";
function b(s, l) {
  const { disabled: c, excludeDisabled: i, selected: d, required: f, onSelect: o } = s, [r, m] = x(d, o ? d : void 0), t = o ? d : r;
  return {
    selected: t,
    select: (n, u, a) => {
      const { min: S, max: p } = s, e = n ? y(n, t, S, p, f, l) : void 0;
      return i && c && e?.from && e.to && C({ from: e.from, to: e.to }, c, l) && (e.from = n, e.to = void 0), o || m(e), o?.(e, n, u, a), e;
    },
    isSelected: (n) => t && R(t, n, !1, l)
  };
}
export {
  b as useRange
};
//# sourceMappingURL=index.es292.js.map
