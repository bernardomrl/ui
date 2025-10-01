import { millisecondsInWeek as f } from "./index.es444.js";
import { startOfWeek as m } from "./index.es272.js";
import { startOfWeekYear as a } from "./index.es457.js";
import { toDate as i } from "./index.es443.js";
function k(r, t) {
  const e = i(r, t?.in), o = +m(e, t) - +a(e, t);
  return Math.round(o / f) + 1;
}
export {
  k as default,
  k as getWeek
};
//# sourceMappingURL=index.es258.js.map
