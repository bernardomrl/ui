import l from "react";
import G from "./index.es216.js";
import J from "./index.es217.js";
import { clsx as L } from "./index.es101.js";
import { isNumOrStr as d } from "./index.es207.js";
function m(t) {
  "@babel/helpers - typeof";
  return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, m(t);
}
function O() {
  return O = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, O.apply(this, arguments);
}
function Q(t, e) {
  return k(t) || Z(t, e) || Y(t, e) || X();
}
function X() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(t, e) {
  if (t) {
    if (typeof t == "string") return D(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D(t, e);
  }
}
function D(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, a = new Array(e); r < e; r++) a[r] = t[r];
  return a;
}
function Z(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var a, i, p, c, u = [], s = !0, y = !1;
    try {
      if (p = (r = r.call(t)).next, e !== 0) for (; !(s = (a = p.call(r)).done) && (u.push(a.value), u.length !== e); s = !0) ;
    } catch (n) {
      y = !0, i = n;
    } finally {
      try {
        if (!s && r.return != null && (c = r.return(), Object(c) !== c)) return;
      } finally {
        if (y) throw i;
      }
    }
    return u;
  }
}
function k(t) {
  if (Array.isArray(t)) return t;
}
function I(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function h(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? I(Object(r), !0).forEach(function(a) {
      tt(t, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return t;
}
function tt(t, e, r) {
  return e = et(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function et(t) {
  var e = rt(t, "string");
  return m(e) == "symbol" ? e : e + "";
}
function rt(t, e) {
  if (m(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(t, e);
    if (m(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function at(t) {
  return Array.isArray(t) && d(t[0]) && d(t[1]) ? t.join(" ~ ") : t;
}
var ut = function(e) {
  var r = e.separator, a = r === void 0 ? " : " : r, i = e.contentStyle, p = i === void 0 ? {} : i, c = e.itemStyle, u = c === void 0 ? {} : c, s = e.labelStyle, y = s === void 0 ? {} : s, n = e.payload, $ = e.formatter, j = e.itemSorter, x = e.wrapperClassName, F = e.labelClassName, g = e.label, w = e.labelFormatter, N = e.accessibilityLayer, B = N === void 0 ? !1 : N, K = function() {
    if (n && n.length) {
      var W = {
        padding: 0,
        margin: 0
      }, q = (j ? G(n, j) : n).map(function(o, A) {
        if (o.type === "none")
          return null;
        var z = h({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: o.color || "#000"
        }, u), P = o.formatter || $ || at, E = o.value, C = o.name, v = E, f = C;
        if (P && v != null && f != null) {
          var S = P(E, C, o, A, n);
          if (Array.isArray(S)) {
            var T = Q(S, 2);
            v = T[0], f = T[1];
          } else
            v = S;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ l.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(A),
            style: z
          }, d(f) ? /* @__PURE__ */ l.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, f) : null, d(f) ? /* @__PURE__ */ l.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, a) : null, /* @__PURE__ */ l.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, v), /* @__PURE__ */ l.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, o.unit || ""))
        );
      });
      return /* @__PURE__ */ l.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: W
      }, q);
    }
    return null;
  }, R = h({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, p), V = h({
    margin: 0
  }, y), _ = !J(g), b = _ ? g : "", H = L("recharts-default-tooltip", x), M = L("recharts-tooltip-label", F);
  _ && w && n !== void 0 && n !== null && (b = w(g, n));
  var U = B ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ l.createElement("div", O({
    className: H,
    style: R
  }, U), /* @__PURE__ */ l.createElement("p", {
    className: M,
    style: V
  }, /* @__PURE__ */ l.isValidElement(b) ? b : "".concat(b)), K());
};
export {
  ut as DefaultTooltipContent
};
//# sourceMappingURL=index.es213.js.map
