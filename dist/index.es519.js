import { __require as n } from "./index.es530.js";
var a, t;
function s() {
  if (t) return a;
  t = 1;
  var i = n();
  function _(u, r) {
    var e = u.__data__;
    return i(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
  }
  return a = _, a;
}
export {
  s as __require
};
//# sourceMappingURL=index.es519.js.map
