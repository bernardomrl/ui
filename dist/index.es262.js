import { normalizeDates as f } from "./index.es446.js";
import { startOfDay as t } from "./index.es269.js";
function s(a, e, r) {
  const [o, i] = f(
    r?.in,
    a,
    e
  );
  return +t(o) == +t(i);
}
export {
  s as default,
  s as isSameDay
};
//# sourceMappingURL=index.es262.js.map
