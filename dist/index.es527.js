import { __require as s } from "./index.es532.js";
var a, _;
function v() {
  if (_) return a;
  _ = 1;
  var n = s(), i = "__lodash_hash_undefined__", h = Object.prototype, o = h.hasOwnProperty;
  function u(r) {
    var e = this.__data__;
    if (n) {
      var t = e[r];
      return t === i ? void 0 : t;
    }
    return o.call(e, r) ? e[r] : void 0;
  }
  return a = u, a;
}
export {
  v as __require
};
//# sourceMappingURL=index.es527.js.map
