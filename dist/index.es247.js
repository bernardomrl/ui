import { getTimezoneOffsetInMilliseconds as r } from "./index.es445.js";
import { normalizeDates as c } from "./index.es446.js";
import { millisecondsInDay as D } from "./index.es444.js";
import { startOfDay as a } from "./index.es269.js";
function O(o, n, i) {
  const [s, m] = c(
    i?.in,
    o,
    n
  ), t = a(s), e = a(m), f = +t - r(t), l = +e - r(e);
  return Math.round((f - l) / D);
}
export {
  O as default,
  O as differenceInCalendarDays
};
//# sourceMappingURL=index.es247.js.map
