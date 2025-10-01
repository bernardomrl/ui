import { constructFrom as s } from "./index.es442.js";
import { toDate as f } from "./index.es443.js";
function u(n, o, i) {
  const t = f(n, i?.in);
  if (isNaN(o)) return s(n, NaN);
  if (!o)
    return t;
  const r = t.getDate(), e = s(n, t.getTime());
  e.setMonth(t.getMonth() + o + 1, 0);
  const a = e.getDate();
  return r >= a ? e : (t.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    r
  ), t);
}
export {
  u as addMonths,
  u as default
};
//# sourceMappingURL=index.es244.js.map
