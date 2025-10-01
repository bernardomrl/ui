import { __require as s } from "./index.es467.js";
import { __require as u } from "./index.es496.js";
import { __require as c } from "./index.es497.js";
var t, i;
function q() {
  if (i) return t;
  i = 1;
  var h = s(), _ = u(), o = c();
  function e(r) {
    var a = -1, p = r == null ? 0 : r.length;
    for (this.__data__ = new h(); ++a < p; )
      this.add(r[a]);
  }
  return e.prototype.add = e.prototype.push = _, e.prototype.has = o, t = e, t;
}
export {
  q as __require
};
//# sourceMappingURL=index.es435.js.map
