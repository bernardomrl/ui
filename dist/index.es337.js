import { __require as h } from "./index.es389.js";
import { __require as n } from "./index.es390.js";
import { __require as m } from "./index.es391.js";
var a, i;
function M() {
  if (i) return a;
  i = 1;
  var s = h(), u = n(), _ = m();
  function c(e) {
    var r = u(e);
    return r.length == 1 && r[0][2] ? _(r[0][0], r[0][1]) : function(t) {
      return t === e || s(t, e, r);
    };
  }
  return a = c, a;
}
export {
  M as __require
};
//# sourceMappingURL=index.es337.js.map
