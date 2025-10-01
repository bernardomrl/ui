import { __require as f } from "./index.es302.js";
import { __require as g } from "./index.es303.js";
var e, t;
function F() {
  if (t) return e;
  t = 1;
  var i = f(), o = g(), a = "[object AsyncFunction]", u = "[object Function]", c = "[object GeneratorFunction]", s = "[object Proxy]";
  function b(n) {
    if (!o(n))
      return !1;
    var r = i(n);
    return r == u || r == c || r == a || r == s;
  }
  return e = b, e;
}
export {
  F as __require
};
//# sourceMappingURL=index.es301.js.map
