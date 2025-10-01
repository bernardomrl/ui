import { __require as m } from "./index.es301.js";
import { __require as I } from "./index.es520.js";
import { __require as g } from "./index.es303.js";
import { __require as O } from "./index.es427.js";
var e, t;
function P() {
  if (t) return e;
  t = 1;
  var o = m(), i = I(), a = g(), s = O(), n = /[\\^$.*+?()[\]{}|]/g, u = /^\[object .+?Constructor\]$/, c = Function.prototype, p = Object.prototype, _ = c.toString, f = p.hasOwnProperty, v = RegExp(
    "^" + _.call(f).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function q(r) {
    if (!a(r) || i(r))
      return !1;
    var b = o(r) ? v : u;
    return b.test(s(r));
  }
  return e = q, e;
}
export {
  P as __require
};
//# sourceMappingURL=index.es514.js.map
