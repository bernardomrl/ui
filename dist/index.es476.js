import { __require as P } from "./index.es353.js";
import { __require as v } from "./index.es396.js";
import { __require as I } from "./index.es321.js";
import { __require as d } from "./index.es352.js";
import { __require as p } from "./index.es399.js";
import { __require as x } from "./index.es354.js";
var n, t;
function z() {
  if (t) return n;
  t = 1;
  var _ = P(), q = v(), h = I(), m = d(), f = p(), l = x();
  function o(r, i, g) {
    i = _(i, r);
    for (var a = -1, e = i.length, s = !1; ++a < e; ) {
      var u = l(i[a]);
      if (!(s = r != null && g(r, u)))
        break;
      r = r[u];
    }
    return s || ++a != e ? s : (e = r == null ? 0 : r.length, !!e && f(e) && m(u, e) && (h(r) || q(r)));
  }
  return n = o, n;
}
export {
  z as __require
};
//# sourceMappingURL=index.es476.js.map
