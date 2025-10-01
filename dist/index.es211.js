import w from "react";
import b from "./index.es219.js";
import { clsx as _ } from "./index.es101.js";
import { filterProps as M } from "./index.es205.js";
import T from "./index.es220.js";
import x from "./index.es221.js";
import D from "./index.es222.js";
import q from "./index.es223.js";
import E from "./index.es224.js";
import F from "./index.es225.js";
import N from "./index.es226.js";
import v from "./index.es227.js";
function i(t) {
  "@babel/helpers - typeof";
  return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, i(t);
}
var A = ["type", "size", "sizeType"];
function s() {
  return s = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
  }, s.apply(this, arguments);
}
function u(t, r) {
  var e = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    r && (o = o.filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    })), e.push.apply(e, o);
  }
  return e;
}
function f(t) {
  for (var r = 1; r < arguments.length; r++) {
    var e = arguments[r] != null ? arguments[r] : {};
    r % 2 ? u(Object(e), !0).forEach(function(o) {
      C(t, o, e[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : u(Object(e)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o));
    });
  }
  return t;
}
function C(t, r, e) {
  return r = I(r), r in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = e, t;
}
function I(t) {
  var r = W(t, "string");
  return i(r) == "symbol" ? r : r + "";
}
function W(t, r) {
  if (i(t) != "object" || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (e !== void 0) {
    var o = e.call(t, r);
    if (i(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function $(t, r) {
  if (t == null) return {};
  var e = R(t, r), o, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (n = 0; n < a.length; n++)
      o = a[n], !(r.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (e[o] = t[o]);
  }
  return e;
}
function R(t, r) {
  if (t == null) return {};
  var e = {};
  for (var o in t)
    if (Object.prototype.hasOwnProperty.call(t, o)) {
      if (r.indexOf(o) >= 0) continue;
      e[o] = t[o];
    }
  return e;
}
var g = {
  symbolCircle: v,
  symbolCross: N,
  symbolDiamond: F,
  symbolSquare: E,
  symbolStar: q,
  symbolTriangle: D,
  symbolWye: x
}, K = Math.PI / 180, L = function(r) {
  var e = "symbol".concat(b(r));
  return g[e] || v;
}, B = function(r, e, o) {
  if (e === "area")
    return r;
  switch (o) {
    case "cross":
      return 5 * r * r / 9;
    case "diamond":
      return 0.5 * r * r / Math.sqrt(3);
    case "square":
      return r * r;
    case "star": {
      var n = 18 * K;
      return 1.25 * r * r * (Math.tan(n) - Math.tan(n * 2) * Math.pow(Math.tan(n), 2));
    }
    case "triangle":
      return Math.sqrt(3) * r * r / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * r * r / 8;
    default:
      return Math.PI * r * r / 4;
  }
}, G = function(r, e) {
  g["symbol".concat(b(r))] = e;
}, H = function(r) {
  var e = r.type, o = e === void 0 ? "circle" : e, n = r.size, a = n === void 0 ? 64 : n, y = r.sizeType, p = y === void 0 ? "area" : y, O = $(r, A), c = f(f({}, O), {}, {
    type: o,
    size: a,
    sizeType: p
  }), h = function() {
    var d = L(o), j = T().type(d).size(B(a, p, o));
    return j();
  }, P = c.className, l = c.cx, m = c.cy, S = M(c, !0);
  return l === +l && m === +m && a === +a ? /* @__PURE__ */ w.createElement("path", s({}, S, {
    className: _("recharts-symbols", P),
    transform: "translate(".concat(l, ", ").concat(m, ")"),
    d: h()
  })) : null;
};
H.registerSymbol = G;
export {
  H as Symbols
};
//# sourceMappingURL=index.es211.js.map
