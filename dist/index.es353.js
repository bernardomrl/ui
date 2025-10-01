import { __require as n } from "./index.es321.js";
import { __require as q } from "./index.es358.js";
import { __require as f } from "./index.es359.js";
import { __require as m } from "./index.es335.js";
var i, t;
function g() {
  if (t) return i;
  t = 1;
  var e = n(), a = q(), s = f(), o = m();
  function _(r, u) {
    return e(r) ? r : a(r, u) ? [r] : s(o(r));
  }
  return i = _, i;
}
export {
  g as __require
};
//# sourceMappingURL=index.es353.js.map
