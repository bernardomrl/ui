import { __require as s } from "./index.es385.js";
var i, u;
function n() {
  if (u) return i;
  u = 1;
  var a = s();
  function l(r, c, e) {
    var t = r.length;
    return e = e === void 0 ? t : e, !c && e >= t ? r : a(r, c, e);
  }
  return i = l, i;
}
export {
  n as __require
};
//# sourceMappingURL=index.es332.js.map
