import { millisecondsInWeek as f } from "./index.es444.js";
import { startOfISOWeek as i } from "./index.es270.js";
import { startOfISOWeekYear as m } from "./index.es455.js";
import { toDate as n } from "./index.es443.js";
function O(e, o) {
  const t = n(e, o?.in), r = +i(t) - +m(t);
  return Math.round(r / f) + 1;
}
export {
  O as default,
  O as getISOWeek
};
//# sourceMappingURL=index.es255.js.map
