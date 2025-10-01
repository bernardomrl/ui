import { __require as p } from "./index.es484.js";
import { __require as C } from "./index.es485.js";
import { __require as q } from "./index.es486.js";
import { __require as m } from "./index.es487.js";
import { __require as f } from "./index.es488.js";
var t, s;
function g() {
  if (s) return t;
  s = 1;
  var o = p(), l = C(), h = q(), _ = m(), c = f();
  function e(r) {
    var i = -1, u = r == null ? 0 : r.length;
    for (this.clear(); ++i < u; ) {
      var a = r[i];
      this.set(a[0], a[1]);
    }
  }
  return e.prototype.clear = o, e.prototype.delete = l, e.prototype.get = h, e.prototype.has = _, e.prototype.set = c, t = e, t;
}
export {
  g as __require
};
//# sourceMappingURL=index.es412.js.map
