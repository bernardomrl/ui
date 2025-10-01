import c from "react";
import { clsx as v } from "./index.es101.js";
import { filterProps as d } from "./index.es205.js";
var m = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function o() {
  return o = Object.assign ? Object.assign.bind() : function(t) {
    for (var i = 1; i < arguments.length; i++) {
      var r = arguments[i];
      for (var e in r)
        Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
    }
    return t;
  }, o.apply(this, arguments);
}
function w(t, i) {
  if (t == null) return {};
  var r = O(t, i), e, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (n = 0; n < a.length; n++)
      e = a[n], !(i.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (r[e] = t[e]);
  }
  return r;
}
function O(t, i) {
  if (t == null) return {};
  var r = {};
  for (var e in t)
    if (Object.prototype.hasOwnProperty.call(t, e)) {
      if (i.indexOf(e) >= 0) continue;
      r[e] = t[e];
    }
  return r;
}
function j(t) {
  var i = t.children, r = t.width, e = t.height, n = t.viewBox, a = t.className, h = t.style, f = t.title, s = t.desc, g = w(t, m), l = n || {
    width: r,
    height: e,
    x: 0,
    y: 0
  }, u = v("recharts-surface", a);
  return /* @__PURE__ */ c.createElement("svg", o({}, d(g, !0, "svg"), {
    className: u,
    width: r,
    height: e,
    style: h,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ c.createElement("title", null, f), /* @__PURE__ */ c.createElement("desc", null, s), i);
}
export {
  j as Surface
};
//# sourceMappingURL=index.es204.js.map
