import { constructFrom as m } from "./index.es442.js";
import { getDaysInMonth as i } from "./index.es454.js";
import { toDate as u } from "./index.es443.js";
function l(n, e, r) {
  const t = u(n, r?.in), s = t.getFullYear(), a = t.getDate(), o = m(n, 0);
  o.setFullYear(s, e, 15), o.setHours(0, 0, 0, 0);
  const c = i(o);
  return t.setMonth(e, Math.min(a, c)), t;
}
export {
  l as default,
  l as setMonth
};
//# sourceMappingURL=index.es267.js.map
