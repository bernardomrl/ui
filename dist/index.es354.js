import { __require as u } from "./index.es384.js";
var e, i;
function f() {
  if (i) return e;
  i = 1;
  var o = u();
  function n(r) {
    if (typeof r == "string" || o(r))
      return r;
    var t = r + "";
    return t == "0" && 1 / r == -1 / 0 ? "-0" : t;
  }
  return e = n, e;
}
export {
  f as __require
};
//# sourceMappingURL=index.es354.js.map
