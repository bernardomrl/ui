import { __require as m } from "./index.es467.js";
var c, p;
function s() {
  if (p) return c;
  p = 1;
  var u = m(), f = "Expected a function";
  function t(o, e) {
    if (typeof o != "function" || e != null && typeof e != "function")
      throw new TypeError(f);
    var r = function() {
      var i = arguments, n = e ? e.apply(this, i) : i[0], a = r.cache;
      if (a.has(n))
        return a.get(n);
      var h = o.apply(this, i);
      return r.cache = a.set(n, h) || a, h;
    };
    return r.cache = new (t.Cache || u)(), r;
  }
  return t.Cache = u, c = t, c;
}
export {
  s as __require
};
//# sourceMappingURL=index.es466.js.map
