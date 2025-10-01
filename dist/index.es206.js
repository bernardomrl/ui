import l, { PureComponent as N } from "react";
import _ from "./index.es209.js";
import { clsx as D } from "./index.es101.js";
import { warn as R } from "./index.es210.js";
import { Surface as T } from "./index.es204.js";
import { Symbols as C } from "./index.es211.js";
import { adaptEventsOfChild as A } from "./index.es212.js";
function p(t) {
  "@babel/helpers - typeof";
  return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, p(t);
}
function d() {
  return d = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, d.apply(this, arguments);
}
function w(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function B(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? w(Object(n), !0).forEach(function(r) {
      y(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function K(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function L(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, j(r.key), r);
  }
}
function M(t, e, n) {
  return e && L(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function F(t, e, n) {
  return e = h(e), V(t, P() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n));
}
function V(t, e) {
  if (e && (p(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return W(t);
}
function W(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function P() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (P = function() {
    return !!t;
  })();
}
function h(t) {
  return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, h(t);
}
function $(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && b(t, e);
}
function b(t, e) {
  return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, b(t, e);
}
function y(t, e, n) {
  return e = j(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function j(t) {
  var e = q(t, "string");
  return p(e) == "symbol" ? e : e + "";
}
function q(t, e) {
  if (p(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (p(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var a = 32, S = /* @__PURE__ */ (function(t) {
  function e() {
    return K(this, e), F(this, e, arguments);
  }
  return $(e, t), M(e, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(r) {
        var o = this.props.inactiveColor, i = a / 2, u = a / 6, f = a / 3, s = r.inactive ? o : r.color;
        if (r.type === "plainline")
          return /* @__PURE__ */ l.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: r.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: a,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (r.type === "line")
          return /* @__PURE__ */ l.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(i, "h").concat(f, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(2 * f, ",").concat(i, `
            H`).concat(a, "M").concat(2 * f, ",").concat(i, `
            A`).concat(u, ",").concat(u, ",0,1,1,").concat(f, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (r.type === "rect")
          return /* @__PURE__ */ l.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(a / 8, "h").concat(a, "v").concat(a * 3 / 4, "h").concat(-a, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ l.isValidElement(r.legendIcon)) {
          var m = B({}, r);
          return delete m.legendIcon, /* @__PURE__ */ l.cloneElement(r.legendIcon, m);
        }
        return /* @__PURE__ */ l.createElement(C, {
          fill: s,
          cx: i,
          cy: i,
          size: a,
          sizeType: "diameter",
          type: r.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var r = this, o = this.props, i = o.payload, u = o.iconSize, f = o.layout, s = o.formatter, m = o.inactiveColor, E = {
        x: 0,
        y: 0,
        width: a,
        height: a
      }, x = {
        display: f === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, z = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(c, v) {
        var g = c.formatter || s, k = D(y(y({
          "recharts-legend-item": !0
        }, "legend-item-".concat(v), !0), "inactive", c.inactive));
        if (c.type === "none")
          return null;
        var O = _(c.value) ? null : c.value;
        R(
          !_(c.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var I = c.inactive ? m : c.color;
        return /* @__PURE__ */ l.createElement("li", d({
          className: k,
          style: x,
          key: "legend-item-".concat(v)
        }, A(r.props, c, v)), /* @__PURE__ */ l.createElement(T, {
          width: u,
          height: u,
          viewBox: E,
          style: z
        }, r.renderIcon(c)), /* @__PURE__ */ l.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: I
          }
        }, g ? g(O, c, v) : O));
      });
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, o = r.payload, i = r.layout, u = r.align;
      if (!o || !o.length)
        return null;
      var f = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? u : "left"
      };
      return /* @__PURE__ */ l.createElement("ul", {
        className: "recharts-default-legend",
        style: f
      }, this.renderItems());
    }
  }]);
})(N);
y(S, "displayName", "Legend");
y(S, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
export {
  S as DefaultLegendContent
};
//# sourceMappingURL=index.es206.js.map
