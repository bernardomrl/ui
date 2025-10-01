import t from "./index.es295.js";
import n from "./index.es298.js";
import "./index.es294.js";
import m from "./index.es299.js";
import "./index.es217.js";
var N = function(r) {
  return t(r) && r.indexOf("%") === r.length - 1;
}, o = function(r) {
  return m(r) && !n(r);
}, c = function(r) {
  return o(r) || t(r);
};
export {
  c as isNumOrStr,
  o as isNumber,
  N as isPercent
};
//# sourceMappingURL=index.es207.js.map
