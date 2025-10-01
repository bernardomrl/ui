import { __require as s } from "./index.es489.js";
import { __require as m } from "./index.es490.js";
var e, a;
function _() {
  if (a) return e;
  a = 1;
  var u = s(), o = m(), i = Object.prototype, n = i.propertyIsEnumerable, t = Object.getOwnPropertySymbols, l = t ? function(r) {
    return r == null ? [] : (r = Object(r), u(t(r), function(y) {
      return n.call(r, y);
    }));
  } : o;
  return e = l, e;
}
export {
  _ as __require
};
//# sourceMappingURL=index.es420.js.map
