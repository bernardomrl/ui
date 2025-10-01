import { normalizeDates as l } from "./index.es446.js";
function s(n, r, a) {
  const [e, t] = l(
    a?.in,
    n,
    r
  ), o = e.getFullYear() - t.getFullYear(), f = e.getMonth() - t.getMonth();
  return o * 12 + f;
}
export {
  s as default,
  s as differenceInCalendarMonths
};
//# sourceMappingURL=index.es248.js.map
