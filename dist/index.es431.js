import { __require as p } from "./index.es494.js";
import { __require as v } from "./index.es495.js";
var t, a;
function q() {
  if (a) return t;
  a = 1;
  var i = p(), o = v(), u = Object.prototype, n = u.hasOwnProperty;
  function _(r) {
    if (!i(r))
      return o(r);
    var s = [];
    for (var e in Object(r))
      n.call(r, e) && e != "constructor" && s.push(e);
    return s;
  }
  return t = _, t;
}
export {
  q as __require
};
//# sourceMappingURL=index.es431.js.map
