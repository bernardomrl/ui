import { useEffect as E } from "react";
import { getDates as I } from "./index.es279.js";
import { getDays as N } from "./index.es280.js";
import { getDisplayMonths as k } from "./index.es281.js";
import { getInitialMonth as g } from "./index.es282.js";
import { getMonths as O } from "./index.es283.js";
import { getNavMonths as q } from "./index.es284.js";
import { getNextMonth as F } from "./index.es285.js";
import { getPreviousMonth as P } from "./index.es286.js";
import { getWeeks as S } from "./index.es287.js";
import { useControlledValue as V } from "./index.es288.js";
function X(t, n) {
  const [i, o] = q(t, n), { startOfMonth: r, endOfMonth: u } = n, f = g(t, i, o, n), [m, h] = V(
    f,
    // initialMonth is always computed from props.month if provided
    t.month ? f : void 0
  );
  E(() => {
    const e = g(t, i, o, n);
    h(e);
  }, [t.timeZone]);
  const c = k(m, o, t, n), d = I(c, t.endMonth ? u(t.endMonth) : void 0, t, n), a = O(c, d, t, n), M = S(a), y = N(a), v = P(m, i, t, n), D = F(m, o, t, n), { disableNavigation: C, onMonthChange: T } = t, w = (e) => M.some((s) => s.days.some((x) => x.isEqualTo(e))), l = (e) => {
    if (C)
      return;
    let s = r(e);
    i && s < r(i) && (s = r(i)), o && s > r(o) && (s = r(o)), h(s), T?.(s);
  };
  return {
    months: a,
    weeks: M,
    days: y,
    navStart: i,
    navEnd: o,
    previousMonth: v,
    nextMonth: D,
    goToMonth: l,
    goToDay: (e) => {
      w(e) || l(e.date);
    }
  };
}
export {
  X as useCalendar
};
//# sourceMappingURL=index.es174.js.map
