import { __require as f } from "./index.es397.js";
import { __require as h } from "./index.es351.js";
var e, i;
function v() {
  if (i) return e;
  i = 1;
  var u = f(), s = h();
  function _(r, n) {
    var t = -1, a = s(r) ? Array(r.length) : [];
    return u(r, function(p, q, b) {
      a[++t] = n(p, q, b);
    }), a;
  }
  return e = _, e;
}
export {
  v as __require
};
//# sourceMappingURL=index.es344.js.map
