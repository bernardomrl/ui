import { __require as _ } from "./index.es321.js";
import { __require as a } from "./index.es384.js";
var i, t;
function q() {
  if (t) return i;
  t = 1;
  var n = _(), o = a(), u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, y = /^\w*$/;
  function f(r, s) {
    if (n(r))
      return !1;
    var e = typeof r;
    return e == "number" || e == "symbol" || e == "boolean" || r == null || o(r) ? !0 : y.test(r) || !u.test(r) || s != null && r in Object(s);
  }
  return i = f, i;
}
export {
  q as __require
};
//# sourceMappingURL=index.es358.js.map
