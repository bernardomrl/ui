import { differenceInCalendarDays as f } from "./index.es247.js";
import { startOfYear as e } from "./index.es273.js";
import { toDate as o } from "./index.es443.js";
function c(t, a) {
  const r = o(t, a?.in);
  return f(r, e(r)) + 1;
}
export {
  c as default,
  c as getDayOfYear
};
//# sourceMappingURL=index.es453.js.map
