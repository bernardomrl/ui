import { clsx as G } from "./index.es101.js";
import _, { forwardRef as J, useRef as N, useImperativeHandle as Q, useState as X, useCallback as Y, useEffect as Z, useMemo as ee, cloneElement as te } from "react";
import re from "./index.es218.js";
import { isPercent as O } from "./index.es207.js";
import { warn as $ } from "./index.es210.js";
import { getDisplayName as ne } from "./index.es205.js";
function v(e) {
  "@babel/helpers - typeof";
  return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, v(e);
}
function M(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? M(Object(r), !0).forEach(function(n) {
      ie(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ie(e, t, r) {
  return t = oe(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oe(e) {
  var t = ae(e, "string");
  return v(t) == "symbol" ? t : t + "";
}
function ae(e, t) {
  if (v(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (v(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ce(e, t) {
  return he(e) || le(e, t) || se(e, t) || ue();
}
function ue() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(e, t) {
  if (e) {
    if (typeof e == "string") return k(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return k(e, t);
  }
}
function k(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function le(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, s, d, a, h = [], c = !0, m = !1;
    try {
      if (d = (r = r.call(e)).next, t !== 0) for (; !(c = (n = d.call(r)).done) && (h.push(n.value), h.length !== t); c = !0) ;
    } catch (p) {
      m = !0, s = p;
    } finally {
      try {
        if (!c && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (m) throw s;
      }
    }
    return h;
  }
}
function he(e) {
  if (Array.isArray(e)) return e;
}
var be = /* @__PURE__ */ J(function(e, t) {
  var r = e.aspect, n = e.initialDimension, s = n === void 0 ? {
    width: -1,
    height: -1
  } : n, d = e.width, a = d === void 0 ? "100%" : d, h = e.height, c = h === void 0 ? "100%" : h, m = e.minWidth, p = m === void 0 ? 0 : m, R = e.minHeight, y = e.maxHeight, w = e.children, C = e.debounce, S = C === void 0 ? 0 : C, T = e.id, K = e.className, B = e.onResize, x = e.style, L = x === void 0 ? {} : x, g = N(null), j = N();
  j.current = B, Q(t, function() {
    return Object.defineProperty(g.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
      },
      configurable: !0
    });
  });
  var U = X({
    containerWidth: s.width,
    containerHeight: s.height
  }), z = ce(U, 2), W = z[0], V = z[1], P = Y(function(u, l) {
    V(function(i) {
      var o = Math.round(u), f = Math.round(l);
      return i.containerWidth === o && i.containerHeight === f ? i : {
        containerWidth: o,
        containerHeight: f
      };
    });
  }, []);
  Z(function() {
    var u = function(F) {
      var A, D = F[0].contentRect, E = D.width, I = D.height;
      P(E, I), (A = j.current) === null || A === void 0 || A.call(j, E, I);
    };
    S > 0 && (u = re(u, S, {
      trailing: !0,
      leading: !1
    }));
    var l = new ResizeObserver(u), i = g.current.getBoundingClientRect(), o = i.width, f = i.height;
    return P(o, f), l.observe(g.current), function() {
      l.disconnect();
    };
  }, [P, S]);
  var q = ee(function() {
    var u = W.containerWidth, l = W.containerHeight;
    if (u < 0 || l < 0)
      return null;
    $(O(a) || O(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, a, c), $(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var i = O(a) ? u : a, o = O(c) ? l : c;
    r && r > 0 && (i ? o = i / r : o && (i = o * r), y && o > y && (o = y)), $(i > 0 || o > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, i, o, a, c, p, R, r);
    var f = !Array.isArray(w) && ne(w.type).endsWith("Chart");
    return _.Children.map(w, function(b) {
      return /* @__PURE__ */ _.isValidElement(b) ? /* @__PURE__ */ te(b, H({
        width: i,
        height: o
      }, f ? {
        style: H({
          height: "100%",
          width: "100%",
          maxHeight: o,
          maxWidth: i
        }, b.props.style)
      } : {})) : b;
    });
  }, [r, w, c, y, R, p, W, a]);
  return /* @__PURE__ */ _.createElement("div", {
    id: T ? "".concat(T) : void 0,
    className: G("recharts-responsive-container", K),
    style: H(H({}, L), {}, {
      width: a,
      height: c,
      minWidth: p,
      minHeight: R,
      maxHeight: y
    }),
    ref: g
  }, q);
});
export {
  be as ResponsiveContainer
};
//# sourceMappingURL=index.es67.js.map
