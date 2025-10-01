import { constructFrom as a } from "./index.es442.js";
import { toDate as i } from "./index.es443.js";
function s(e, r, o) {
  const t = i(e, o?.in);
  return isNaN(r) ? a(e, NaN) : (r && t.setDate(t.getDate() + r), t);
}
export {
  s as addDays,
  s as default
};
//# sourceMappingURL=index.es243.js.map
