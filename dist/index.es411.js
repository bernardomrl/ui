import { __require as q } from "./index.es351.js";
var a, t;
function B() {
  if (t) return a;
  t = 1;
  var f = q();
  function h(_, u) {
    return function(r, i) {
      if (r == null)
        return r;
      if (!f(r))
        return _(r, i);
      for (var n = r.length, e = u ? n : -1, s = Object(r); (u ? e-- : ++e < n) && i(s[e], e, s) !== !1; )
        ;
      return r;
    };
  }
  return a = h, a;
}
export {
  B as __require
};
//# sourceMappingURL=index.es411.js.map
