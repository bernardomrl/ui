import { __require as o } from "./index.es412.js";
import { __require as f } from "./index.es423.js";
import { __require as q } from "./index.es467.js";
var t, _;
function v() {
  if (_) return t;
  _ = 1;
  var s = o(), u = f(), h = q(), n = 200;
  function c(a, i) {
    var e = this.__data__;
    if (e instanceof s) {
      var r = e.__data__;
      if (!u || r.length < n - 1)
        return r.push([a, i]), this.size = ++e.size, this;
      e = this.__data__ = new h(r);
    }
    return e.set(a, i), this.size = e.size, this;
  }
  return t = c, t;
}
export {
  v as __require
};
//# sourceMappingURL=index.es417.js.map
