import f from "./index.es463.js";
import { withPath as e } from "./index.es464.js";
import m from "./index.es227.js";
function g(o, t) {
  let r = null, l = e(u);
  o = typeof o == "function" ? o : f(o || m), t = typeof t == "function" ? t : f(t === void 0 ? 64 : +t);
  function u() {
    let n;
    if (r || (r = n = l()), o.apply(this, arguments).draw(r, +t.apply(this, arguments)), n) return r = null, n + "" || null;
  }
  return u.type = function(n) {
    return arguments.length ? (o = typeof n == "function" ? n : f(n), u) : o;
  }, u.size = function(n) {
    return arguments.length ? (t = typeof n == "function" ? n : f(+n), u) : t;
  }, u.context = function(n) {
    return arguments.length ? (r = n ?? null, u) : r;
  }, u;
}
export {
  g as default
};
//# sourceMappingURL=index.es220.js.map
