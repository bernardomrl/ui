import { __require as u } from "./index.es337.js";
import { __require as f } from "./index.es338.js";
import { __require as p } from "./index.es339.js";
import { __require as q } from "./index.es321.js";
import { __require as m } from "./index.es340.js";
var e, t;
function M() {
  if (t) return e;
  t = 1;
  var i = u(), o = f(), s = p(), a = q(), _ = m();
  function n(r) {
    return typeof r == "function" ? r : r == null ? s : typeof r == "object" ? a(r) ? o(r[0], r[1]) : i(r) : _(r);
  }
  return e = n, e;
}
export {
  M as __require
};
//# sourceMappingURL=index.es336.js.map
