import { __require as F } from "./index.es302.js";
import { __require as M } from "./index.es399.js";
import { __require as O } from "./index.es319.js";
var a, t;
function G() {
  if (t) return a;
  t = 1;
  var o = F(), b = M(), g = O(), i = "[object Arguments]", c = "[object Array]", n = "[object Boolean]", T = "[object Date]", j = "[object Error]", s = "[object Function]", u = "[object Map]", y = "[object Number]", p = "[object Object]", A = "[object RegExp]", f = "[object Set]", m = "[object String]", _ = "[object WeakMap]", d = "[object ArrayBuffer]", q = "[object DataView]", I = "[object Float32Array]", l = "[object Float64Array]", h = "[object Int8Array]", k = "[object Int16Array]", v = "[object Int32Array]", L = "[object Uint8Array]", U = "[object Uint8ClampedArray]", w = "[object Uint16Array]", x = "[object Uint32Array]", e = {};
  e[I] = e[l] = e[h] = e[k] = e[v] = e[L] = e[U] = e[w] = e[x] = !0, e[i] = e[c] = e[d] = e[n] = e[q] = e[T] = e[j] = e[s] = e[u] = e[y] = e[p] = e[A] = e[f] = e[m] = e[_] = !1;
  function B(r) {
    return g(r) && b(r.length) && !!e[o(r)];
  }
  return a = B, a;
}
export {
  G as __require
};
//# sourceMappingURL=index.es480.js.map
