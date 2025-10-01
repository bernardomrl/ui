import { __require as a } from "./index.es302.js";
import { __require as m } from "./index.es319.js";
var e, i;
function _() {
  if (i) return e;
  i = 1;
  var o = a(), s = m(), t = "[object Symbol]";
  function b(r) {
    return typeof r == "symbol" || s(r) && o(r) == t;
  }
  return e = b, e;
}
export {
  _ as __require
};
//# sourceMappingURL=index.es384.js.map
