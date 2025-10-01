import { offset as st, shift as rt, flip as ct, size as lt, hide as ft, limitShift as ut, computePosition as ht, arrow as at } from "./index.es367.js";
import { createCoords as y, round as D, max as E, min as N, rectToClientRect as J, floor as A } from "./index.es368.js";
import { isElement as v, getDocumentElement as R, getOverflowAncestors as $, getComputedStyle as b, isHTMLElement as C, getWindow as L, isTopLayer as V, getParentNode as S, isLastTraversableNode as z, isTableElement as dt, isContainingBlock as Q, getContainingBlock as gt, getNodeName as _, isOverflowElement as q, getNodeScroll as H, getFrameElement as U, isWebKit as Y } from "./index.es369.js";
function Z(t) {
  const e = b(t);
  let o = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const n = C(t), r = n ? t.offsetWidth : o, s = n ? t.offsetHeight : i, c = D(o) !== r || D(i) !== s;
  return c && (o = r, i = s), {
    width: o,
    height: i,
    $: c
  };
}
function X(t) {
  return v(t) ? t : t.contextElement;
}
function F(t) {
  const e = X(t);
  if (!C(e))
    return y(1);
  const o = e.getBoundingClientRect(), {
    width: i,
    height: n,
    $: r
  } = Z(e);
  let s = (r ? D(o.width) : o.width) / i, c = (r ? D(o.height) : o.height) / n;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const pt = /* @__PURE__ */ y(0);
function tt(t) {
  const e = L(t);
  return !Y() || !e.visualViewport ? pt : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function mt(t, e, o) {
  return e === void 0 && (e = !1), !o || e && o !== L(t) ? !1 : e;
}
function T(t, e, o, i) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const n = t.getBoundingClientRect(), r = X(t);
  let s = y(1);
  e && (i ? v(i) && (s = F(i)) : s = F(t));
  const c = mt(r, o, i) ? tt(r) : y(0);
  let f = (n.left + c.x) / s.x, l = (n.top + c.y) / s.y, u = n.width / s.x, h = n.height / s.y;
  if (r) {
    const d = L(r), a = i && v(i) ? L(i) : i;
    let m = d, p = U(m);
    for (; p && i && a !== m; ) {
      const w = F(p), g = p.getBoundingClientRect(), x = b(p), O = g.left + (p.clientLeft + parseFloat(x.paddingLeft)) * w.x, W = g.top + (p.clientTop + parseFloat(x.paddingTop)) * w.y;
      f *= w.x, l *= w.y, u *= w.x, h *= w.y, f += O, l += W, m = L(p), p = U(m);
    }
  }
  return J({
    width: u,
    height: h,
    x: f,
    y: l
  });
}
function I(t, e) {
  const o = H(t).scrollLeft;
  return e ? e.left + o : T(R(t)).left + o;
}
function et(t, e) {
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - I(t, o), n = o.top + e.scrollTop;
  return {
    x: i,
    y: n
  };
}
function wt(t) {
  let {
    elements: e,
    rect: o,
    offsetParent: i,
    strategy: n
  } = t;
  const r = n === "fixed", s = R(i), c = e ? V(e.floating) : !1;
  if (i === s || c && r)
    return o;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = y(1);
  const u = y(0), h = C(i);
  if ((h || !h && !r) && ((_(i) !== "body" || q(s)) && (f = H(i)), C(i))) {
    const a = T(i);
    l = F(i), u.x = a.x + i.clientLeft, u.y = a.y + i.clientTop;
  }
  const d = s && !h && !r ? et(s, f) : y(0);
  return {
    width: o.width * l.x,
    height: o.height * l.y,
    x: o.x * l.x - f.scrollLeft * l.x + u.x + d.x,
    y: o.y * l.y - f.scrollTop * l.y + u.y + d.y
  };
}
function yt(t) {
  return Array.from(t.getClientRects());
}
function xt(t) {
  const e = R(t), o = H(t), i = t.ownerDocument.body, n = E(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), r = E(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
  let s = -o.scrollLeft + I(t);
  const c = -o.scrollTop;
  return b(i).direction === "rtl" && (s += E(e.clientWidth, i.clientWidth) - n), {
    width: n,
    height: r,
    x: s,
    y: c
  };
}
const K = 25;
function vt(t, e) {
  const o = L(t), i = R(t), n = o.visualViewport;
  let r = i.clientWidth, s = i.clientHeight, c = 0, f = 0;
  if (n) {
    r = n.width, s = n.height;
    const u = Y();
    (!u || u && e === "fixed") && (c = n.offsetLeft, f = n.offsetTop);
  }
  const l = I(i);
  if (l <= 0) {
    const u = i.ownerDocument, h = u.body, d = getComputedStyle(h), a = u.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight) || 0, m = Math.abs(i.clientWidth - h.clientWidth - a);
    m <= K && (r -= m);
  } else l <= K && (r += l);
  return {
    width: r,
    height: s,
    x: c,
    y: f
  };
}
const bt = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Rt(t, e) {
  const o = T(t, !0, e === "fixed"), i = o.top + t.clientTop, n = o.left + t.clientLeft, r = C(t) ? F(t) : y(1), s = t.clientWidth * r.x, c = t.clientHeight * r.y, f = n * r.x, l = i * r.y;
  return {
    width: s,
    height: c,
    x: f,
    y: l
  };
}
function j(t, e, o) {
  let i;
  if (e === "viewport")
    i = vt(t, o);
  else if (e === "document")
    i = xt(R(t));
  else if (v(e))
    i = Rt(e, o);
  else {
    const n = tt(t);
    i = {
      x: e.x - n.x,
      y: e.y - n.y,
      width: e.width,
      height: e.height
    };
  }
  return J(i);
}
function it(t, e) {
  const o = S(t);
  return o === e || !v(o) || z(o) ? !1 : b(o).position === "fixed" || it(o, e);
}
function Ct(t, e) {
  const o = e.get(t);
  if (o)
    return o;
  let i = $(t, [], !1).filter((c) => v(c) && _(c) !== "body"), n = null;
  const r = b(t).position === "fixed";
  let s = r ? S(t) : t;
  for (; v(s) && !z(s); ) {
    const c = b(s), f = Q(s);
    !f && c.position === "fixed" && (n = null), (r ? !f && !n : !f && c.position === "static" && !!n && bt.has(n.position) || q(s) && !f && it(t, s)) ? i = i.filter((u) => u !== s) : n = c, s = S(s);
  }
  return e.set(t, i), i;
}
function Ot(t) {
  let {
    element: e,
    boundary: o,
    rootBoundary: i,
    strategy: n
  } = t;
  const s = [...o === "clippingAncestors" ? V(e) ? [] : Ct(e, this._c) : [].concat(o), i], c = s[0], f = s.reduce((l, u) => {
    const h = j(e, u, n);
    return l.top = E(h.top, l.top), l.right = N(h.right, l.right), l.bottom = N(h.bottom, l.bottom), l.left = E(h.left, l.left), l;
  }, j(e, c, n));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function Lt(t) {
  const {
    width: e,
    height: o
  } = Z(t);
  return {
    width: e,
    height: o
  };
}
function Tt(t, e, o) {
  const i = C(e), n = R(e), r = o === "fixed", s = T(t, !0, r, e);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = y(0);
  function l() {
    f.x = I(n);
  }
  if (i || !i && !r)
    if ((_(e) !== "body" || q(n)) && (c = H(e)), i) {
      const a = T(e, !0, r, e);
      f.x = a.x + e.clientLeft, f.y = a.y + e.clientTop;
    } else n && l();
  r && !i && n && l();
  const u = n && !i && !r ? et(n, c) : y(0), h = s.left + c.scrollLeft - f.x - u.x, d = s.top + c.scrollTop - f.y - u.y;
  return {
    x: h,
    y: d,
    width: s.width,
    height: s.height
  };
}
function M(t) {
  return b(t).position === "static";
}
function G(t, e) {
  if (!C(t) || b(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let o = t.offsetParent;
  return R(t) === o && (o = o.ownerDocument.body), o;
}
function ot(t, e) {
  const o = L(t);
  if (V(t))
    return o;
  if (!C(t)) {
    let n = S(t);
    for (; n && !z(n); ) {
      if (v(n) && !M(n))
        return n;
      n = S(n);
    }
    return o;
  }
  let i = G(t, e);
  for (; i && dt(i) && M(i); )
    i = G(i, e);
  return i && z(i) && M(i) && !Q(i) ? o : i || gt(t) || o;
}
const Et = async function(t) {
  const e = this.getOffsetParent || ot, o = this.getDimensions, i = await o(t.floating);
  return {
    reference: Tt(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function Ft(t) {
  return b(t).direction === "rtl";
}
const St = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wt,
  getDocumentElement: R,
  getClippingRect: Ot,
  getOffsetParent: ot,
  getElementRects: Et,
  getClientRects: yt,
  getDimensions: Lt,
  getScale: F,
  isElement: v,
  isRTL: Ft
};
function nt(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Wt(t, e) {
  let o = null, i;
  const n = R(t);
  function r() {
    var c;
    clearTimeout(i), (c = o) == null || c.disconnect(), o = null;
  }
  function s(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), r();
    const l = t.getBoundingClientRect(), {
      left: u,
      top: h,
      width: d,
      height: a
    } = l;
    if (c || e(), !d || !a)
      return;
    const m = A(h), p = A(n.clientWidth - (u + d)), w = A(n.clientHeight - (h + a)), g = A(u), O = {
      rootMargin: -m + "px " + -p + "px " + -w + "px " + -g + "px",
      threshold: E(0, N(1, f)) || 1
    };
    let W = !0;
    function k(P) {
      const B = P[0].intersectionRatio;
      if (B !== f) {
        if (!W)
          return s();
        B ? s(!1, B) : i = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      B === 1 && !nt(l, t.getBoundingClientRect()) && s(), W = !1;
    }
    try {
      o = new IntersectionObserver(k, {
        ...O,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(k, O);
    }
    o.observe(t);
  }
  return s(!0), r;
}
function zt(t, e, o, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: r = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = i, l = X(t), u = n || r ? [...l ? $(l) : [], ...$(e)] : [];
  u.forEach((g) => {
    n && g.addEventListener("scroll", o, {
      passive: !0
    }), r && g.addEventListener("resize", o);
  });
  const h = l && c ? Wt(l, o) : null;
  let d = -1, a = null;
  s && (a = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === l && a && (a.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var O;
      (O = a) == null || O.observe(e);
    })), o();
  }), l && !f && a.observe(l), a.observe(e));
  let m, p = f ? T(t) : null;
  f && w();
  function w() {
    const g = T(t);
    p && !nt(p, g) && o(), p = g, m = requestAnimationFrame(w);
  }
  return o(), () => {
    var g;
    u.forEach((x) => {
      n && x.removeEventListener("scroll", o), r && x.removeEventListener("resize", o);
    }), h?.(), (g = a) == null || g.disconnect(), a = null, f && cancelAnimationFrame(m);
  };
}
const Ht = st, It = rt, Mt = ct, Nt = lt, $t = ft, Vt = at, _t = ut, qt = (t, e, o) => {
  const i = /* @__PURE__ */ new Map(), n = {
    platform: St,
    ...o
  }, r = {
    ...n.platform,
    _c: i
  };
  return ht(t, e, {
    ...n,
    platform: r
  });
};
export {
  Vt as arrow,
  zt as autoUpdate,
  qt as computePosition,
  Mt as flip,
  $ as getOverflowAncestors,
  $t as hide,
  _t as limitShift,
  Ht as offset,
  St as platform,
  It as shift,
  Nt as size
};
//# sourceMappingURL=index.es202.js.map
