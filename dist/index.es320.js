import { __require as u } from "./index.es302.js";
import { __require as g } from "./index.es321.js";
import { __require as _ } from "./index.es319.js";
var e, i;
function b() {
  if (i) return e;
  i = 1;
  var t = u(), s = g(), n = _(), a = "[object String]";
  function o(r) {
    return typeof r == "string" || !s(r) && n(r) && t(r) == a;
  }
  return e = o, e;
}
export {
  b as __require
};
//# sourceMappingURL=index.es320.js.map
