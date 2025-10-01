import { getDefaultOptions as f } from "./index.es448.js";
import { toDate as c } from "./index.es443.js";
function l(s, e) {
  const a = f(), n = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? a.weekStartsOn ?? a.locale?.options?.weekStartsOn ?? 0, t = c(s, e?.in), o = t.getDay(), r = (o < n ? -7 : 0) + 6 - (o - n);
  return t.setDate(t.getDate() + r), t.setHours(23, 59, 59, 999), t;
}
export {
  l as default,
  l as endOfWeek
};
//# sourceMappingURL=index.es252.js.map
