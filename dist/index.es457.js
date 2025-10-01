import { getDefaultOptions as n } from "./index.es448.js";
import { constructFrom as i } from "./index.es442.js";
import { getWeekYear as f } from "./index.es458.js";
import { startOfWeek as c } from "./index.es272.js";
function D(r, t) {
  const a = n(), o = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? a.firstWeekContainsDate ?? a.locale?.options?.firstWeekContainsDate ?? 1, s = f(r, t), e = i(t?.in || r, 0);
  return e.setFullYear(s, 0, o), e.setHours(0, 0, 0, 0), c(e, t);
}
export {
  D as default,
  D as startOfWeekYear
};
//# sourceMappingURL=index.es457.js.map
