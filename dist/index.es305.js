import { __require as c } from "./index.es306.js";
import { __require as g } from "./index.es303.js";
var t, u;
function h() {
  if (u) return t;
  u = 1;
  var l = c(), o = g(), f = "Expected a function";
  function _(a, n, r) {
    var e = !0, i = !0;
    if (typeof a != "function")
      throw new TypeError(f);
    return o(r) && (e = "leading" in r ? !!r.leading : e, i = "trailing" in r ? !!r.trailing : i), l(a, n, {
      leading: e,
      maxWait: n,
      trailing: i
    });
  }
  return t = _, t;
}
export {
  h as __require
};
//# sourceMappingURL=index.es305.js.map
