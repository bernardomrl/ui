import { __require as n } from "./index.es531.js";
var a, i;
function _() {
  if (i) return a;
  i = 1;
  var e = n(), s = (function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  })();
  function u(r) {
    return !!s && s in r;
  }
  return a = u, a;
}
export {
  _ as __require
};
//# sourceMappingURL=index.es520.js.map
