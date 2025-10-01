import { __require as V } from "./index.es327.js";
import { __require as z } from "./index.es478.js";
import { __require as C } from "./index.es350.js";
import { __require as G } from "./index.es401.js";
import { __require as N } from "./index.es479.js";
import { __require as F } from "./index.es440.js";
var f, m;
function X() {
  if (m) return f;
  m = 1;
  var n = V(), t = z(), l = C(), q = G(), T = N(), p = F(), A = 1, o = 2, b = "[object Boolean]", v = "[object Date]", d = "[object Error]", B = "[object Map]", E = "[object Number]", L = "[object RegExp]", O = "[object Set]", R = "[object String]", w = "[object Symbol]", S = "[object ArrayBuffer]", c = "[object DataView]", y = n ? n.prototype : void 0, i = y ? y.valueOf : void 0;
  function D(r, e, P, s, x, g, a) {
    switch (P) {
      case c:
        if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
          return !1;
        r = r.buffer, e = e.buffer;
      case S:
        return !(r.byteLength != e.byteLength || !g(new t(r), new t(e)));
      case b:
      case v:
      case E:
        return l(+r, +e);
      case d:
        return r.name == e.name && r.message == e.message;
      case L:
      case R:
        return r == e + "";
      case B:
        var u = T;
      case O:
        var M = s & A;
        if (u || (u = p), r.size != e.size && !M)
          return !1;
        var _ = a.get(r);
        if (_)
          return _ == e;
        s |= o, a.set(r, e);
        var U = q(u(r), u(e), s, x, g, a);
        return a.delete(r), U;
      case w:
        if (i)
          return i.call(r) == i.call(e);
    }
    return !1;
  }
  return f = D, f;
}
export {
  X as __require
};
//# sourceMappingURL=index.es402.js.map
