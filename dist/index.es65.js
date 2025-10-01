import a, { PureComponent as V } from "react";
import { DefaultTooltipContent as q } from "./index.es213.js";
import { TooltipBoundingBox as U } from "./index.es214.js";
import { Global as K } from "./index.es215.js";
import { getUniqPayload as z } from "./index.es208.js";
function i(t) {
  "@babel/helpers - typeof";
  return i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, i(t);
}
function y(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function m(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? y(Object(r), !0).forEach(function(n) {
      p(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function G(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function H(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, v(n.key), n);
  }
}
function I(t, e, r) {
  return e && H(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function L(t, e, r) {
  return e = f(e), $(t, b() ? Reflect.construct(e, r || [], f(t).constructor) : e.apply(t, r));
}
function $(t, e) {
  if (e && (i(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k(t);
}
function k(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function b() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (b = function() {
    return !!t;
  })();
}
function f(t) {
  return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, f(t);
}
function C(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && c(t, e);
}
function c(t, e) {
  return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, c(t, e);
}
function p(t, e, r) {
  return e = v(e), e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function v(t) {
  var e = F(t, "string");
  return i(e) == "symbol" ? e : e + "";
}
function F(t, e) {
  if (i(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e);
    if (i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
function J(t) {
  return t.dataKey;
}
function M(t, e) {
  return /* @__PURE__ */ a.isValidElement(t) ? /* @__PURE__ */ a.cloneElement(t, e) : typeof t == "function" ? /* @__PURE__ */ a.createElement(t, e) : /* @__PURE__ */ a.createElement(q, e);
}
var d = /* @__PURE__ */ (function(t) {
  function e() {
    return G(this, e), L(this, e, arguments);
  }
  return C(e, t), I(e, [{
    key: "render",
    value: function() {
      var n = this, o = this.props, w = o.active, O = o.allowEscapeViewBox, h = o.animationDuration, P = o.animationEasing, g = o.content, _ = o.coordinate, j = o.filterNull, S = o.isAnimationActive, E = o.offset, l = o.payload, x = o.payloadUniqBy, B = o.position, D = o.reverseDirection, T = o.useTranslate3d, A = o.viewBox, R = o.wrapperStyle, u = l ?? [];
      j && u.length && (u = z(l.filter(function(s) {
        return s.value != null && (s.hide !== !0 || n.props.includeHidden);
      }), x, J));
      var N = u.length > 0;
      return /* @__PURE__ */ a.createElement(U, {
        allowEscapeViewBox: O,
        animationDuration: h,
        animationEasing: P,
        isAnimationActive: S,
        active: w,
        coordinate: _,
        hasPayload: N,
        offset: E,
        position: B,
        reverseDirection: D,
        useTranslate3d: T,
        viewBox: A,
        wrapperStyle: R
      }, M(g, m(m({}, this.props), {}, {
        payload: u
      })));
    }
  }]);
})(V);
p(d, "displayName", "Tooltip");
p(d, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !K.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
export {
  d as Tooltip
};
//# sourceMappingURL=index.es65.js.map
