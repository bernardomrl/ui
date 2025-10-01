import p, { PureComponent as S } from "react";
import { DefaultLegendContent as E } from "./index.es206.js";
import { isNumber as D } from "./index.es207.js";
import { getUniqPayload as N } from "./index.es208.js";
function l(t) {
  "@babel/helpers - typeof";
  return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, l(t);
}
var R = ["ref"];
function m(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function u(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? m(Object(r), !0).forEach(function(n) {
      g(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function U(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function w(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, _(n.key), n);
  }
}
function W(t, e, r) {
  return e && w(t.prototype, e), r && w(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function H(t, e, r) {
  return e = d(e), L(t, P() ? Reflect.construct(e, r || [], d(t).constructor) : e.apply(t, r));
}
function L(t, e) {
  if (e && (l(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T(t);
}
function T(t) {
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
function d(t) {
  return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, d(t);
}
function q(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && B(t, e);
}
function B(t, e) {
  return B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, B(t, e);
}
function g(t, e, r) {
  return e = _(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function _(t) {
  var e = z(t, "string");
  return l(e) == "symbol" ? e : e + "";
}
function z(t, e) {
  if (l(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (l(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function A(t, e) {
  if (t == null) return {};
  var r = M(t, e), n, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (o = 0; o < i.length; o++)
      n = i[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function M(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) >= 0) continue;
      r[n] = t[n];
    }
  return r;
}
function $(t) {
  return t.value;
}
function k(t, e) {
  if (/* @__PURE__ */ p.isValidElement(t))
    return /* @__PURE__ */ p.cloneElement(t, e);
  if (typeof t == "function")
    return /* @__PURE__ */ p.createElement(t, e);
  e.ref;
  var r = A(e, R);
  return /* @__PURE__ */ p.createElement(E, r);
}
var O = 1, j = /* @__PURE__ */ (function(t) {
  function e() {
    var r;
    U(this, e);
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return r = H(this, e, [].concat(o)), g(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return q(e, t), W(e, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, o = this.getBBox();
      o ? (Math.abs(o.width - this.lastBoundingBox.width) > O || Math.abs(o.height - this.lastBoundingBox.height) > O) && (this.lastBoundingBox.width = o.width, this.lastBoundingBox.height = o.height, n && n(o)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? u({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var o = this.props, i = o.layout, f = o.align, c = o.verticalAlign, a = o.margin, y = o.chartWidth, b = o.chartHeight, h, s;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (f === "center" && i === "vertical") {
          var v = this.getBBoxSnapshot();
          h = {
            left: ((y || 0) - v.width) / 2
          };
        } else
          h = f === "right" ? {
            right: a && a.right || 0
          } : {
            left: a && a.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (c === "middle") {
          var x = this.getBBoxSnapshot();
          s = {
            top: ((b || 0) - x.height) / 2
          };
        } else
          s = c === "bottom" ? {
            bottom: a && a.bottom || 0
          } : {
            top: a && a.top || 0
          };
      return u(u({}, h), s);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, o = this.props, i = o.content, f = o.width, c = o.height, a = o.wrapperStyle, y = o.payloadUniqBy, b = o.payload, h = u(u({
        position: "absolute",
        width: f || "auto",
        height: c || "auto"
      }, this.getDefaultPosition(a)), a);
      return /* @__PURE__ */ p.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(v) {
          n.wrapperNode = v;
        }
      }, k(i, u(u({}, this.props), {}, {
        payload: N(b, y, $)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, o) {
      var i = u(u({}, this.defaultProps), n.props), f = i.layout;
      return f === "vertical" && D(n.props.height) ? {
        height: n.props.height
      } : f === "horizontal" ? {
        width: n.props.width || o
      } : null;
    }
  }]);
})(S);
g(j, "displayName", "Legend");
g(j, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
export {
  j as Legend
};
//# sourceMappingURL=index.es66.js.map
