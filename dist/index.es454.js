import { constructFrom as s } from "./index.es442.js";
import { toDate as c } from "./index.es443.js";
function m(e, n) {
  const t = c(e, n?.in), r = t.getFullYear(), a = t.getMonth(), o = s(t, 0);
  return o.setFullYear(r, a + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
export {
  m as default,
  m as getDaysInMonth
};
//# sourceMappingURL=index.es454.js.map
