import { __require as U } from "./index.es435.js";
import { __require as g } from "./index.es436.js";
import { __require as w } from "./index.es437.js";
import { __require as C } from "./index.es438.js";
import { __require as v } from "./index.es439.js";
import { __require as E } from "./index.es440.js";
var q, c;
function L() {
  if (c) return q;
  c = 1;
  var m = U(), A = g(), S = w(), b = C(), p = v(), y = E(), I = 200;
  function R(_, n, u) {
    var h = -1, a = A, t = _.length, f = !0, i = [], r = i;
    if (u)
      f = !1, a = S;
    else if (t >= I) {
      var l = n ? null : p(_);
      if (l)
        return y(l);
      f = !1, a = b, r = new m();
    } else
      r = n ? [] : i;
    r:
      for (; ++h < t; ) {
        var e = _[h], s = n ? n(e) : e;
        if (e = u || e !== 0 ? e : 0, f && s === s) {
          for (var o = r.length; o--; )
            if (r[o] === s)
              continue r;
          n && r.push(s), i.push(e);
        } else a(r, s, u) || (r !== i && r.push(s), i.push(e));
      }
    return i;
  }
  return q = R, q;
}
export {
  L as __require
};
//# sourceMappingURL=index.es375.js.map
