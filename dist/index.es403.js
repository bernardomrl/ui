import { __require as I } from "./index.es418.js";
var O, c;
function T() {
  if (c) return O;
  c = 1;
  var P = I(), R = 1, x = Object.prototype, K = x.hasOwnProperty;
  function S(n, r, d, f, E, e) {
    var a = d & R, _ = P(n), q = _.length, F = P(r), G = F.length;
    if (q != G && !a)
      return !1;
    for (var u = q; u--; ) {
      var i = _[u];
      if (!(a ? i in r : K.call(r, i)))
        return !1;
    }
    var A = e.get(n), w = e.get(r);
    if (A && w)
      return A == r && w == n;
    var s = !0;
    e.set(n, r), e.set(r, n);
    for (var g = a; ++u < q; ) {
      i = _[u];
      var l = n[i], v = r[i];
      if (f)
        var L = a ? f(v, l, i, r, n, e) : f(l, v, i, n, r, e);
      if (!(L === void 0 ? l === v || E(l, v, d, f, e) : L)) {
        s = !1;
        break;
      }
      g || (g = i == "constructor");
    }
    if (s && !g) {
      var t = n.constructor, p = r.constructor;
      t != p && "constructor" in n && "constructor" in r && !(typeof t == "function" && t instanceof t && typeof p == "function" && p instanceof p) && (s = !1);
    }
    return e.delete(n), e.delete(r), s;
  }
  return O = S, O;
}
export {
  T as __require
};
//# sourceMappingURL=index.es403.js.map
