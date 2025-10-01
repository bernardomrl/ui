import { isDate as r } from "./index.es261.js";
import { toDate as t } from "./index.es443.js";
function f(o) {
  return !(!r(o) && typeof o != "number" || isNaN(+t(o)));
}
export {
  f as default,
  f as isValid
};
//# sourceMappingURL=index.es452.js.map
