import { __require as f } from "./index.es332.js";
import { __require as m } from "./index.es333.js";
import { __require as v } from "./index.es334.js";
import { __require as d } from "./index.es335.js";
var i, a;
function C() {
  if (a) return i;
  a = 1;
  var t = f(), o = m(), u = v(), s = d();
  function c(_) {
    return function(r) {
      r = s(r);
      var e = o(r) ? u(r) : void 0, n = e ? e[0] : r.charAt(0), q = e ? t(e, 1).join("") : r.slice(1);
      return n[_]() + q;
    };
  }
  return i = c, i;
}
export {
  C as __require
};
//# sourceMappingURL=index.es309.js.map
