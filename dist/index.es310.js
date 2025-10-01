import { __require as s } from "./index.es311.js";
import { __require as m } from "./index.es312.js";
import { __require as l } from "./index.es313.js";
import { __require as t } from "./index.es314.js";
var u, i;
function v() {
  if (i) return u;
  i = 1;
  var n = s(), o = m(), q = l(), _ = t(), f = q(function(e, r) {
    if (e == null)
      return [];
    var a = r.length;
    return a > 1 && _(e, r[0], r[1]) ? r = [] : a > 2 && _(r[0], r[1], r[2]) && (r = [r[0]]), o(e, n(r, 1), []);
  });
  return u = f, u;
}
export {
  v as __require
};
//# sourceMappingURL=index.es310.js.map
