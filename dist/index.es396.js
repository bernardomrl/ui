import { __require as m } from "./index.es477.js";
import { __require as c } from "./index.es319.js";
var e, n;
function l() {
  if (n) return e;
  n = 1;
  var t = m(), u = c(), s = Object.prototype, a = s.hasOwnProperty, i = s.propertyIsEnumerable, o = t(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? t : function(r) {
    return u(r) && a.call(r, "callee") && !i.call(r, "callee");
  };
  return e = o, e;
}
export {
  l as __require
};
//# sourceMappingURL=index.es396.js.map
