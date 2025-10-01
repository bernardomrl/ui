import { clsx as b } from "./index.es101.js";
import { isNumber as n } from "./index.es207.js";
function m(t) {
  "@babel/helpers - typeof";
  return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, m(t);
}
function x(t, e, i) {
  return e = h(e), e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function h(t) {
  var e = D(t, "string");
  return m(e) == "symbol" ? e : e + "";
}
function D(t, e) {
  if (m(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var o = i.call(t, e);
    if (m(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var v = "recharts-tooltip-wrapper", S = {
  visibility: "hidden"
};
function g(t) {
  var e = t.coordinate, i = t.translateX, o = t.translateY;
  return b(v, x(x(x(x({}, "".concat(v, "-right"), n(i) && e && n(e.x) && i >= e.x), "".concat(v, "-left"), n(i) && e && n(e.x) && i < e.x), "".concat(v, "-bottom"), n(o) && e && n(e.y) && o >= e.y), "".concat(v, "-top"), n(o) && e && n(e.y) && o < e.y));
}
function y(t) {
  var e = t.allowEscapeViewBox, i = t.coordinate, o = t.key, p = t.offsetTopLeft, c = t.position, l = t.reverseDirection, f = t.tooltipDimension, r = t.viewBox, u = t.viewBoxDimension;
  if (c && n(c[o]))
    return c[o];
  var a = i[o] - f - p, s = i[o] + p;
  if (e[o])
    return l[o] ? a : s;
  if (l[o]) {
    var w = a, d = r[o];
    return w < d ? Math.max(s, r[o]) : Math.max(a, r[o]);
  }
  var B = s + f, T = r[o] + u;
  return B > T ? Math.max(a, r[o]) : Math.max(s, r[o]);
}
function P(t) {
  var e = t.translateX, i = t.translateY, o = t.useTranslate3d;
  return {
    transform: o ? "translate3d(".concat(e, "px, ").concat(i, "px, 0)") : "translate(".concat(e, "px, ").concat(i, "px)")
  };
}
function L(t) {
  var e = t.allowEscapeViewBox, i = t.coordinate, o = t.offsetTopLeft, p = t.position, c = t.reverseDirection, l = t.tooltipBox, f = t.useTranslate3d, r = t.viewBox, u, a, s;
  return l.height > 0 && l.width > 0 && i ? (a = y({
    allowEscapeViewBox: e,
    coordinate: i,
    key: "x",
    offsetTopLeft: o,
    position: p,
    reverseDirection: c,
    tooltipDimension: l.width,
    viewBox: r,
    viewBoxDimension: r.width
  }), s = y({
    allowEscapeViewBox: e,
    coordinate: i,
    key: "y",
    offsetTopLeft: o,
    position: p,
    reverseDirection: c,
    tooltipDimension: l.height,
    viewBox: r,
    viewBoxDimension: r.height
  }), u = P({
    translateX: a,
    translateY: s,
    useTranslate3d: f
  })) : u = S, {
    cssProperties: u,
    cssClasses: g({
      translateX: a,
      translateY: s,
      coordinate: i
    })
  };
}
export {
  g as getTooltipCSSClassName,
  L as getTooltipTranslate,
  y as getTooltipTranslateXY,
  P as getTransformStyle
};
//# sourceMappingURL=index.es304.js.map
