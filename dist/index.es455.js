import { constructFrom as a } from "./index.es442.js";
import { getISOWeekYear as f } from "./index.es456.js";
import { startOfISOWeek as s } from "./index.es270.js";
function O(t, e) {
  const o = f(t, e), r = a(t, 0);
  return r.setFullYear(o, 0, 4), r.setHours(0, 0, 0, 0), s(r);
}
export {
  O as default,
  O as startOfISOWeekYear
};
//# sourceMappingURL=index.es455.js.map
