import { __require as p } from "./index.es407.js";
var a, _;
function q() {
  if (_) return a;
  _ = 1;
  var l = p(), u = Math.max;
  function t(o, e, g) {
    return e = u(e === void 0 ? o.length - 1 : e, 0), function() {
      for (var n = arguments, r = -1, v = u(n.length - e, 0), h = Array(v); ++r < v; )
        h[r] = n[e + r];
      r = -1;
      for (var i = Array(e + 1); ++r < e; )
        i[r] = n[r];
      return i[e] = g(h), l(o, this, i);
    };
  }
  return a = t, a;
}
export {
  q as __require
};
//# sourceMappingURL=index.es348.js.map
