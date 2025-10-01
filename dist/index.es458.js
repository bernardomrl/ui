import { getDefaultOptions as k } from "./index.es448.js";
import { constructFrom as i } from "./index.es442.js";
import { startOfWeek as l } from "./index.es272.js";
import { toDate as m } from "./index.es443.js";
function C(r, e) {
  const s = m(r, e?.in), t = s.getFullYear(), o = k(), f = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = i(e?.in || r, 0);
  a.setFullYear(t + 1, 0, f), a.setHours(0, 0, 0, 0);
  const c = l(a, e), n = i(e?.in || r, 0);
  n.setFullYear(t, 0, f), n.setHours(0, 0, 0, 0);
  const u = l(n, e);
  return +s >= +c ? t + 1 : +s >= +u ? t : t - 1;
}
export {
  C as default,
  C as getWeekYear
};
//# sourceMappingURL=index.es458.js.map
