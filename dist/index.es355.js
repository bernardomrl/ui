import { __require as t } from "./index.es356.js";
import { __require as f } from "./index.es319.js";
var s, a;
function l() {
  if (a) return s;
  a = 1;
  var q = t(), u = f();
  function i(r, e, n, _, b) {
    return r === e ? !0 : r == null || e == null || !u(r) && !u(e) ? r !== r && e !== e : q(r, e, n, _, i, b);
  }
  return s = i, s;
}
export {
  l as __require
};
//# sourceMappingURL=index.es355.js.map
