import * as t from "react";
var Me = Object.defineProperty, xe = Object.defineProperties, ke = Object.getOwnPropertyDescriptors, J = Object.getOwnPropertySymbols, fe = Object.prototype.hasOwnProperty, me = Object.prototype.propertyIsEnumerable, de = (r, l, a) => l in r ? Me(r, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : r[l] = a, Re = (r, l) => {
  for (var a in l || (l = {})) fe.call(l, a) && de(r, a, l[a]);
  if (J) for (var a of J(l)) me.call(l, a) && de(r, a, l[a]);
  return r;
}, Te = (r, l) => xe(r, ke(l)), De = (r, l) => {
  var a = {};
  for (var c in r) fe.call(r, c) && l.indexOf(c) < 0 && (a[c] = r[c]);
  if (r != null && J) for (var c of J(r)) l.indexOf(c) < 0 && me.call(r, c) && (a[c] = r[c]);
  return a;
};
function Oe(r) {
  let l = setTimeout(r, 0), a = setTimeout(r, 10), c = setTimeout(r, 50);
  return [l, a, c];
}
function We(r) {
  let l = t.useRef();
  return t.useEffect(() => {
    l.current = r;
  }), l.current;
}
var Ae = 18, ve = 40, Be = `${ve}px`, je = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function Ie({ containerRef: r, inputRef: l, pushPasswordManagerStrategy: a, isFocused: c }) {
  let [M, p] = t.useState(!1), [_, x] = t.useState(!1), [W, F] = t.useState(!1), H = t.useMemo(() => a === "none" ? !1 : (a === "increase-width" || a === "experimental-no-flickering") && M && _, [M, _, a]), A = t.useCallback(() => {
    let m = r.current, y = l.current;
    if (!m || !y || W || a === "none") return;
    let g = m, E = g.getBoundingClientRect().left + g.offsetWidth, B = g.getBoundingClientRect().top + g.offsetHeight / 2, i = E - Ae, L = B;
    document.querySelectorAll(je).length === 0 && document.elementFromPoint(i, L) === m || (p(!0), F(!0));
  }, [r, l, W, a]);
  return t.useEffect(() => {
    let m = r.current;
    if (!m || a === "none") return;
    function y() {
      let E = window.innerWidth - m.getBoundingClientRect().right;
      x(E >= ve);
    }
    y();
    let g = setInterval(y, 1e3);
    return () => {
      clearInterval(g);
    };
  }, [r, a]), t.useEffect(() => {
    let m = c || document.activeElement === l.current;
    if (a === "none" || !m) return;
    let y = setTimeout(A, 0), g = setTimeout(A, 2e3), E = setTimeout(A, 5e3), B = setTimeout(() => {
      F(!0);
    }, 6e3);
    return () => {
      clearTimeout(y), clearTimeout(g), clearTimeout(E), clearTimeout(B);
    };
  }, [l, c, a, A]), { hasPWMBadge: M, willPushPWMBadge: H, PWM_BADGE_SPACE_WIDTH: Be };
}
var _e = t.createContext({}), Fe = t.forwardRef((r, l) => {
  var a = r, { value: c, onChange: M, maxLength: p, textAlign: _ = "left", pattern: x, placeholder: W, inputMode: F = "numeric", onComplete: H, pushPasswordManagerStrategy: A = "increase-width", pasteTransformer: m, containerClassName: y, noScriptCSSFallback: g = He, render: E, children: B } = a, i = De(a, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), L, ee, te, ne, re;
  let [he, ge] = t.useState(typeof i.defaultValue == "string" ? i.defaultValue : ""), u = c ?? he, k = We(u), $ = t.useCallback((e) => {
    M?.(e), ge(e);
  }, [M]), w = t.useMemo(() => x ? typeof x == "string" ? new RegExp(x) : x : null, [x]), s = t.useRef(null), K = t.useRef(null), Q = t.useRef({ value: u, onChange: $, isIOS: typeof window < "u" && ((ee = (L = window?.CSS) == null ? void 0 : L.supports) == null ? void 0 : ee.call(L, "-webkit-touch-callout", "none")) }), q = t.useRef({ prev: [(te = s.current) == null ? void 0 : te.selectionStart, (ne = s.current) == null ? void 0 : ne.selectionEnd, (re = s.current) == null ? void 0 : re.selectionDirection] });
  t.useImperativeHandle(l, () => s.current, []), t.useEffect(() => {
    let e = s.current, n = K.current;
    if (!e || !n) return;
    Q.current.value !== e.value && Q.current.onChange(e.value), q.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection];
    function d() {
      if (document.activeElement !== e) {
        N(null), z(null);
        return;
      }
      let o = e.selectionStart, f = e.selectionEnd, Z = e.selectionDirection, b = e.maxLength, T = e.value, S = q.current.prev, P = -1, C = -1, D;
      if (T.length !== 0 && o !== null && f !== null) {
        let ye = o === f, Pe = o === T.length && T.length < b;
        if (ye && !Pe) {
          let O = o;
          if (O === 0) P = 0, C = 1, D = "forward";
          else if (O === b) P = O - 1, C = O, D = "backward";
          else if (b > 1 && T.length > 1) {
            let Y = 0;
            if (S[0] !== null && S[1] !== null) {
              D = O < S[1] ? "backward" : "forward";
              let Ce = S[0] === S[1] && S[0] < b;
              D === "backward" && !Ce && (Y = -1);
            }
            P = Y + O, C = Y + O + 1;
          }
        }
        P !== -1 && C !== -1 && P !== C && s.current.setSelectionRange(P, C, D);
      }
      let ce = P !== -1 ? P : o, pe = C !== -1 ? C : f, Se = D ?? Z;
      N(ce), z(pe), q.current.prev = [ce, pe, Se];
    }
    if (document.addEventListener("selectionchange", d, { capture: !0 }), d(), document.activeElement === e && U(!0), !document.getElementById("input-otp-style")) {
      let o = document.createElement("style");
      if (o.id = "input-otp-style", document.head.appendChild(o), o.sheet) {
        let f = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        V(o.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), V(o.sheet, `[data-input-otp]:autofill { ${f} }`), V(o.sheet, `[data-input-otp]:-webkit-autofill { ${f} }`), V(o.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), V(o.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let v = () => {
      n && n.style.setProperty("--root-height", `${e.clientHeight}px`);
    };
    v();
    let h = new ResizeObserver(v);
    return h.observe(e), () => {
      document.removeEventListener("selectionchange", d, { capture: !0 }), h.disconnect();
    };
  }, []);
  let [le, ae] = t.useState(!1), [G, U] = t.useState(!1), [R, N] = t.useState(null), [j, z] = t.useState(null);
  t.useEffect(() => {
    Oe(() => {
      var e, n, d, v;
      (e = s.current) == null || e.dispatchEvent(new Event("input"));
      let h = (n = s.current) == null ? void 0 : n.selectionStart, o = (d = s.current) == null ? void 0 : d.selectionEnd, f = (v = s.current) == null ? void 0 : v.selectionDirection;
      h !== null && o !== null && (N(h), z(o), q.current.prev = [h, o, f]);
    });
  }, [u, G]), t.useEffect(() => {
    k !== void 0 && u !== k && k.length < p && u.length === p && H?.(u);
  }, [p, H, k, u]);
  let I = Ie({ containerRef: K, inputRef: s, pushPasswordManagerStrategy: A, isFocused: G }), oe = t.useCallback((e) => {
    let n = e.currentTarget.value.slice(0, p);
    if (n.length > 0 && w && !w.test(n)) {
      e.preventDefault();
      return;
    }
    typeof k == "string" && n.length < k.length && document.dispatchEvent(new Event("selectionchange")), $(n);
  }, [p, $, k, w]), ie = t.useCallback(() => {
    var e;
    if (s.current) {
      let n = Math.min(s.current.value.length, p - 1), d = s.current.value.length;
      (e = s.current) == null || e.setSelectionRange(n, d), N(n), z(d);
    }
    U(!0);
  }, [p]), ue = t.useCallback((e) => {
    var n, d;
    let v = s.current;
    if (!m && (!Q.current.isIOS || !e.clipboardData || !v)) return;
    let h = e.clipboardData.getData("text/plain"), o = m ? m(h) : h;
    e.preventDefault();
    let f = (n = s.current) == null ? void 0 : n.selectionStart, Z = (d = s.current) == null ? void 0 : d.selectionEnd, b = (f !== Z ? u.slice(0, f) + o + u.slice(Z) : u.slice(0, f) + o + u.slice(f)).slice(0, p);
    if (b.length > 0 && w && !w.test(b)) return;
    v.value = b, $(b);
    let T = Math.min(b.length, p - 1), S = b.length;
    v.setSelectionRange(T, S), N(T), z(S);
  }, [p, $, w, u]), be = t.useMemo(() => ({ position: "relative", cursor: i.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [i.disabled]), se = t.useMemo(() => ({ position: "absolute", inset: 0, width: I.willPushPWMBadge ? `calc(100% + ${I.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: I.willPushPWMBadge ? `inset(0 ${I.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: _, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [I.PWM_BADGE_SPACE_WIDTH, I.willPushPWMBadge, _]), we = t.useMemo(() => t.createElement("input", Te(Re({ autoComplete: i.autoComplete || "one-time-code" }, i), { "data-input-otp": !0, "data-input-otp-placeholder-shown": u.length === 0 || void 0, "data-input-otp-mss": R, "data-input-otp-mse": j, inputMode: F, pattern: w?.source, "aria-placeholder": W, style: se, maxLength: p, value: u, ref: s, onPaste: (e) => {
    var n;
    ue(e), (n = i.onPaste) == null || n.call(i, e);
  }, onChange: oe, onMouseOver: (e) => {
    var n;
    ae(!0), (n = i.onMouseOver) == null || n.call(i, e);
  }, onMouseLeave: (e) => {
    var n;
    ae(!1), (n = i.onMouseLeave) == null || n.call(i, e);
  }, onFocus: (e) => {
    var n;
    ie(), (n = i.onFocus) == null || n.call(i, e);
  }, onBlur: (e) => {
    var n;
    U(!1), (n = i.onBlur) == null || n.call(i, e);
  } })), [oe, ie, ue, F, se, p, j, R, i, w?.source, u]), X = t.useMemo(() => ({ slots: Array.from({ length: p }).map((e, n) => {
    var d;
    let v = G && R !== null && j !== null && (R === j && n === R || n >= R && n < j), h = u[n] !== void 0 ? u[n] : null, o = u[0] !== void 0 ? null : (d = W?.[n]) != null ? d : null;
    return { char: h, placeholderChar: o, isActive: v, hasFakeCaret: v && h === null };
  }), isFocused: G, isHovering: !i.disabled && le }), [G, le, p, j, R, i.disabled, u]), Ee = t.useMemo(() => E ? E(X) : t.createElement(_e.Provider, { value: X }, B), [B, X, E]);
  return t.createElement(t.Fragment, null, g !== null && t.createElement("noscript", null, t.createElement("style", null, g)), t.createElement("div", { ref: K, "data-input-otp-container": !0, style: be, className: y }, Ee, t.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, we)));
});
Fe.displayName = "Input";
function V(r, l) {
  try {
    r.insertRule(l);
  } catch {
    console.error("input-otp could not insert CSS rule:", l);
  }
}
var He = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
export {
  Fe as OTPInput,
  _e as OTPInputContext
};
//# sourceMappingURL=index.es80.js.map
