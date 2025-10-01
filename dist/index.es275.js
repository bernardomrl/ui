import { defaultDateLib as A } from "./index.es161.js";
import { rangeIncludesDate as p } from "./index.es178.js";
import { isDatesArray as a, isDateRange as I, isDayOfWeekType as g, isDateInterval as k, isDateAfterType as O, isDateBeforeType as W } from "./index.es179.js";
function T(f, n, r = A) {
  const y = Array.isArray(n) ? n : [n], { isSameDay: u, differenceInCalendarDays: i, isAfter: t } = r;
  return y.some((e) => {
    if (typeof e == "boolean")
      return e;
    if (r.isDate(e))
      return u(f, e);
    if (a(e, r))
      return e.includes(f);
    if (I(e))
      return p(e, f, !1, r);
    if (g(e))
      return Array.isArray(e.dayOfWeek) ? e.dayOfWeek.includes(f.getDay()) : e.dayOfWeek === f.getDay();
    if (k(e)) {
      const D = i(e.before, f), l = i(e.after, f), s = D > 0, o = l < 0;
      return t(e.before, e.after) ? o && s : s || o;
    }
    return O(e) ? i(f, e.after) > 0 : W(e) ? i(e.before, f) > 0 : typeof e == "function" ? e(f) : !1;
  });
}
export {
  T as dateMatchModifiers
};
//# sourceMappingURL=index.es275.js.map
