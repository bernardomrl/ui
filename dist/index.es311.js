import { __require as h } from "./index.es341.js";
import { __require as l } from "./index.es342.js";
var i, q;
function g() {
  if (q) return i;
  q = 1;
  var s = h(), b = l();
  function _(t, n, r, f, e) {
    var o = -1, F = t.length;
    for (r || (r = b), e || (e = []); ++o < F; ) {
      var a = t[o];
      n > 0 && r(a) ? n > 1 ? _(a, n - 1, r, f, e) : s(e, a) : f || (e[e.length] = a);
    }
    return e;
  }
  return i = _, i;
}
export {
  g as __require
};
//# sourceMappingURL=index.es311.js.map
