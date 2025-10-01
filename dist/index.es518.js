import { __require as l } from "./index.es525.js";
import { __require as m } from "./index.es526.js";
import { __require as f } from "./index.es527.js";
import { __require as n } from "./index.es528.js";
import { __require as H } from "./index.es529.js";
var a, s;
function x() {
  if (s) return a;
  s = 1;
  var i = l(), o = m(), _ = f(), u = n(), p = H();
  function e(r) {
    var h = -1, q = r == null ? 0 : r.length;
    for (this.clear(); ++h < q; ) {
      var t = r[h];
      this.set(t[0], t[1]);
    }
  }
  return e.prototype.clear = i, e.prototype.delete = o, e.prototype.get = _, e.prototype.has = u, e.prototype.set = p, a = e, a;
}
export {
  x as __require
};
//# sourceMappingURL=index.es518.js.map
