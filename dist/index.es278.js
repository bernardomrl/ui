import { rangeIncludesDate as m } from "./index.es178.js";
import { defaultDateLib as r } from "./index.es161.js";
function u(o, f, l = r) {
  return m(o, f.from, !1, l) || m(o, f.to, !1, l) || m(f, o.from, !1, l) || m(f, o.to, !1, l);
}
export {
  u as rangeOverlaps
};
//# sourceMappingURL=index.es278.js.map
