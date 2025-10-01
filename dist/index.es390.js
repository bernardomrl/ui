import { __require as o } from "./index.es393.js";
import { __require as c } from "./index.es421.js";
var t, _;
function m() {
  if (_) return t;
  _ = 1;
  var n = o(), s = c();
  function h(a) {
    for (var r = s(a), e = r.length; e--; ) {
      var i = r[e], u = a[i];
      r[e] = [i, u, n(u)];
    }
    return r;
  }
  return t = h, t;
}
export {
  m as __require
};
//# sourceMappingURL=index.es390.js.map
