import "./index.es294.js";
import "./index.es217.js";
import "./index.es295.js";
import f from "./index.es209.js";
import d from "./index.es296.js";
import { isValidElement as m } from "react";
import "./index.es297.js";
import { SVGElementPropKeys as s, EventKeys as p, FilteredElementKeyMap as l } from "./index.es212.js";
var h = function(i) {
  return typeof i == "string" ? i : i ? i.displayName || i.name || "Component" : "";
}, c = function(i, r, u, t) {
  var e, n = (e = l === null || l === void 0 ? void 0 : l[t]) !== null && e !== void 0 ? e : [];
  return r.startsWith("data-") || !f(i) && (t && n.includes(r) || s.includes(r)) || p.includes(r);
}, F = function(i, r, u) {
  if (!i || typeof i == "function" || typeof i == "boolean")
    return null;
  var t = i;
  if (/* @__PURE__ */ m(i) && (t = i.props), !d(t))
    return null;
  var e = {};
  return Object.keys(t).forEach(function(n) {
    var o;
    c((o = t) === null || o === void 0 ? void 0 : o[n], n, r, u) && (e[n] = t[n]);
  }), e;
};
export {
  F as filterProps,
  h as getDisplayName,
  c as isValidSpreadableProp
};
//# sourceMappingURL=index.es205.js.map
