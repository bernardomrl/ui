import { __require as f } from "./index.es398.js";
var i, c;
function h() {
  if (c) return i;
  c = 1;
  var p = f();
  function o(n, a, t) {
    for (var r = -1, u = n.criteria, l = a.criteria, m = u.length, _ = t.length; ++r < m; ) {
      var e = p(u[r], l[r]);
      if (e) {
        if (r >= _)
          return e;
        var d = t[r];
        return e * (d == "desc" ? -1 : 1);
      }
    }
    return n.index - a.index;
  }
  return i = o, i;
}
export {
  h as __require
};
//# sourceMappingURL=index.es347.js.map
