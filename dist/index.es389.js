import { __require as w } from "./index.es400.js";
import { __require as C } from "./index.es355.js";
var _, a;
function g() {
  if (a) return _;
  a = 1;
  var A = w(), E = C(), M = 1, R = 2;
  function O(r, p, f, n) {
    var i = f.length, q = i, v = !n;
    if (r == null)
      return !q;
    for (r = Object(r); i--; ) {
      var e = f[i];
      if (v && e[2] ? e[1] !== r[e[0]] : !(e[0] in r))
        return !1;
    }
    for (; ++i < q; ) {
      e = f[i];
      var u = e[0], s = r[u], l = e[1];
      if (v && e[2]) {
        if (s === void 0 && !(u in r))
          return !1;
      } else {
        var h = new A();
        if (n)
          var I = n(s, l, u, r, p, h);
        if (!(I === void 0 ? E(l, s, M | R, n, h) : I))
          return !1;
      }
    }
    return !0;
  }
  return _ = O, _;
}
export {
  g as __require
};
//# sourceMappingURL=index.es389.js.map
