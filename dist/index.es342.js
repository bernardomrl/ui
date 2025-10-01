import { __require as o } from "./index.es327.js";
import { __require as _ } from "./index.es396.js";
import { __require as m } from "./index.es321.js";
var e, t;
function f() {
  if (t) return e;
  t = 1;
  var i = o(), s = _(), n = m(), a = i ? i.isConcatSpreadable : void 0;
  function u(r) {
    return n(r) || s(r) || !!(a && r && r[a]);
  }
  return e = u, e;
}
export {
  f as __require
};
//# sourceMappingURL=index.es342.js.map
