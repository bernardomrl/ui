import { __require as H } from "./index.es435.js";
import { __require as M } from "./index.es357.js";
import { __require as x } from "./index.es438.js";
var g, P;
function U() {
  if (P) return g;
  P = 1;
  var t = H(), O = M(), a = x(), w = 1, D = 2;
  function G(i, e, u, f, l, r) {
    var s = u & w, A = i.length, R = e.length;
    if (A != R && !(s && R > A))
      return !1;
    var S = r.get(i), L = r.get(e);
    if (S && L)
      return S == e && L == i;
    var _ = -1, q = !0, d = u & D ? new t() : void 0;
    for (r.set(i, e), r.set(e, i); ++_ < A; ) {
      var n = i[_], v = e[_];
      if (f)
        var p = s ? f(v, n, _, e, i, r) : f(n, v, _, i, e, r);
      if (p !== void 0) {
        if (p)
          continue;
        q = !1;
        break;
      }
      if (d) {
        if (!O(e, function(C, E) {
          if (!a(d, E) && (n === C || l(n, C, u, f, r)))
            return d.push(E);
        })) {
          q = !1;
          break;
        }
      } else if (!(n === v || l(n, v, u, f, r))) {
        q = !1;
        break;
      }
    }
    return r.delete(i), r.delete(e), q;
  }
  return g = G, g;
}
export {
  U as __require
};
//# sourceMappingURL=index.es401.js.map
