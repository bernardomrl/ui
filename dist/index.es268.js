import { constructFrom as a } from "./index.es442.js";
import { toDate as n } from "./index.es443.js";
function u(r, o, e) {
  const t = n(r, e?.in);
  return isNaN(+t) ? a(r, NaN) : (t.setFullYear(o), t);
}
export {
  u as default,
  u as setYear
};
//# sourceMappingURL=index.es268.js.map
