import { __require as y } from "./index.es355.js";
import { __require as P } from "./index.es315.js";
import { __require as A } from "./index.es392.js";
import { __require as C } from "./index.es358.js";
import { __require as E } from "./index.es393.js";
import { __require as M } from "./index.es391.js";
import { __require as R } from "./index.es354.js";
var t, o;
function G() {
  if (o) return t;
  o = 1;
  var _ = y(), s = P(), u = A(), m = C(), q = E(), n = M(), f = R(), p = 1, b = 2;
  function c(r, e) {
    return m(r) && q(e) ? n(f(r), e) : function(a) {
      var i = s(a, r);
      return i === void 0 && i === e ? u(a, r) : _(e, i, p | b);
    };
  }
  return t = c, t;
}
export {
  G as __require
};
//# sourceMappingURL=index.es338.js.map
