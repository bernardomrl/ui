import { __require as k } from "./index.es422.js";
import { __require as V } from "./index.es423.js";
import { __require as D } from "./index.es424.js";
import { __require as P } from "./index.es425.js";
import { __require as W } from "./index.es426.js";
import { __require as h } from "./index.es302.js";
import { __require as G } from "./index.es427.js";
var s, S;
function z() {
  if (S) return s;
  S = 1;
  var a = k(), t = V(), i = D(), o = P(), u = W(), n = h(), e = G(), _ = "[object Map]", b = "[object Object]", g = "[object Promise]", c = "[object Set]", m = "[object WeakMap]", p = "[object DataView]", j = e(a), v = e(t), M = e(i), C = e(o), d = e(u), r = n;
  return (a && r(new a(new ArrayBuffer(1))) != p || t && r(new t()) != _ || i && r(i.resolve()) != g || o && r(new o()) != c || u && r(new u()) != m) && (r = function(q) {
    var f = n(q), w = f == b ? q.constructor : void 0, T = w ? e(w) : "";
    if (T)
      switch (T) {
        case j:
          return p;
        case v:
          return _;
        case M:
          return g;
        case C:
          return c;
        case d:
          return m;
      }
    return f;
  }), s = r, s;
}
export {
  z as __require
};
//# sourceMappingURL=index.es404.js.map
