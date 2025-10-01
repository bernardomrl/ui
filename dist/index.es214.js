import N, { PureComponent as C } from "react";
import { getTooltipTranslate as K } from "./index.es304.js";
function a(e) {
  "@babel/helpers - typeof";
  return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, a(e);
}
function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? v(Object(n), !0).forEach(function(o) {
      y(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function k(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L(e, t) {
  for (var n = 0; n < t.length; n++) {
    var o = t[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, g(o.key), o);
  }
}
function M(e, t, n) {
  return t && L(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U(e, t, n) {
  return t = f(t), I(e, w() ? Reflect.construct(t, n || [], f(e).constructor) : t.apply(e, n));
}
function I(e, t) {
  if (t && (a(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return V(e);
}
function V(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function w() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (w = function() {
    return !!e;
  })();
}
function f(e) {
  return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, f(e);
}
function W(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && p(e, t);
}
function p(e, t) {
  return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, p(e, t);
}
function y(e, t, n) {
  return t = g(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function g(e) {
  var t = z(e, "string");
  return a(t) == "symbol" ? t : t + "";
}
function z(e, t) {
  if (a(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(e, t);
    if (a(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var b = 1, H = /* @__PURE__ */ (function(e) {
  function t() {
    var n;
    k(this, t);
    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
      i[r] = arguments[r];
    return n = U(this, t, [].concat(i)), y(n, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), y(n, "handleKeyDown", function(d) {
      if (d.key === "Escape") {
        var s, u, c, l;
        n.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (u = n.props.coordinate) === null || u === void 0 ? void 0 : u.x) !== null && s !== void 0 ? s : 0,
            y: (c = (l = n.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), n;
  }
  return W(t, e), M(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var o = this.wrapperNode.getBoundingClientRect();
        (Math.abs(o.width - this.state.lastBoundingBox.width) > b || Math.abs(o.height - this.state.lastBoundingBox.height) > b) && this.setState({
          lastBoundingBox: {
            width: o.width,
            height: o.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var o, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((o = this.props.coordinate) === null || o === void 0 ? void 0 : o.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var o = this, i = this.props, r = i.active, d = i.allowEscapeViewBox, s = i.animationDuration, u = i.animationEasing, c = i.children, l = i.coordinate, B = i.hasPayload, O = i.isAnimationActive, P = i.offset, x = i.position, j = i.reverseDirection, _ = i.useTranslate3d, S = i.viewBox, E = i.wrapperStyle, h = K({
        allowEscapeViewBox: d,
        coordinate: l,
        offsetTopLeft: P,
        position: x,
        reverseDirection: j,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: _,
        viewBox: S
      }), D = h.cssClasses, T = h.cssProperties, A = m(m({
        transition: O && r ? "transform ".concat(s, "ms ").concat(u) : void 0
      }, T), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && r && B ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, E);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ N.createElement("div", {
          tabIndex: -1,
          className: D,
          style: A,
          ref: function(R) {
            o.wrapperNode = R;
          }
        }, c)
      );
    }
  }]);
})(C);
export {
  H as TooltipBoundingBox
};
//# sourceMappingURL=index.es214.js.map
