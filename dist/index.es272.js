import { getDefaultOptions as f } from "./index.es448.js";
import { toDate as c } from "./index.es443.js";
function l(n, e) {
  const a = f(), o = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, t = c(n, e?.in), s = t.getDay(), r = (s < o ? 7 : 0) + s - o;
  return t.setDate(t.getDate() - r), t.setHours(0, 0, 0, 0), t;
}
export {
  l as default,
  l as startOfWeek
};
//# sourceMappingURL=index.es272.js.map
