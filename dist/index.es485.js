import { __require as _ } from "./index.es513.js";
var a, t;
function f() {
  if (t) return a;
  t = 1;
  var i = _(), s = Array.prototype, l = s.splice;
  function n(o) {
    var e = this.__data__, r = i(e, o);
    if (r < 0)
      return !1;
    var u = e.length - 1;
    return r == u ? e.pop() : l.call(e, r, 1), --this.size, !0;
  }
  return a = n, a;
}
export {
  f as __require
};
//# sourceMappingURL=index.es485.js.map
