import { __require as t } from "./index.es466.js";
var e, a;
function c() {
  if (a) return e;
  a = 1;
  var m = t(), u = 500;
  function o(n) {
    var r = m(n, function(p) {
      return i.size === u && i.clear(), p;
    }), i = r.cache;
    return r;
  }
  return e = o, e;
}
export {
  c as __require
};
//# sourceMappingURL=index.es432.js.map
