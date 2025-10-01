import { __require as M } from "./index.es343.js";
import { __require as I } from "./index.es316.js";
import { __require as O } from "./index.es336.js";
import { __require as h } from "./index.es344.js";
import { __require as x } from "./index.es345.js";
import { __require as g } from "./index.es346.js";
import { __require as A } from "./index.es347.js";
import { __require as G } from "./index.es339.js";
import { __require as S } from "./index.es321.js";
var a, n;
function H() {
  if (n) return a;
  n = 1;
  var u = M(), o = I(), _ = O(), t = h(), s = x(), q = g(), m = A(), f = G(), p = S();
  function y(b, e, c) {
    e.length ? e = u(e, function(r) {
      return p(r) ? function(i) {
        return o(i, r.length === 1 ? r[0] : r);
      } : r;
    }) : e = [f];
    var l = -1;
    e = u(e, q(_));
    var d = t(b, function(r, i, U) {
      var v = u(e, function(B) {
        return B(r);
      });
      return { criteria: v, index: ++l, value: r };
    });
    return s(d, function(r, i) {
      return m(r, i, c);
    });
  }
  return a = y, a;
}
export {
  H as __require
};
//# sourceMappingURL=index.es312.js.map
