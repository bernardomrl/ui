import { __require as l } from "./index.es350.js";
import { __require as m } from "./index.es351.js";
import { __require as o } from "./index.es352.js";
import { __require as I } from "./index.es303.js";
var i, t;
function g() {
  if (t) return i;
  t = 1;
  var s = l(), u = m(), _ = o(), q = I();
  function f(n, e, r) {
    if (!q(r))
      return !1;
    var a = typeof e;
    return (a == "number" ? u(r) && _(e, r.length) : a == "string" && e in r) ? s(r[e], n) : !1;
  }
  return i = f, i;
}
export {
  g as __require
};
//# sourceMappingURL=index.es314.js.map
