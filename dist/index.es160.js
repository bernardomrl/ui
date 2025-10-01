import { tzOffset as s } from "./index.es237.js";
class n extends Date {
  //#region static
  constructor(...e) {
    super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(s(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), U(this), a(this)) : this.setTime(Date.now());
  }
  static tz(e, ...o) {
    return o.length ? new n(...o, e) : new n(Date.now(), e);
  }
  //#endregion
  //#region time zone
  withTimeZone(e) {
    return new n(+this, e);
  }
  getTimezoneOffset() {
    const e = -s(this.timeZone, this);
    return e > 0 ? Math.floor(e) : Math.ceil(e);
  }
  //#endregion
  //#region time
  setTime(e) {
    return Date.prototype.setTime.apply(this, arguments), a(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](e) {
    return new n(+new Date(e), this.timeZone);
  }
  //#endregion
}
const D = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((t) => {
  if (!D.test(t)) return;
  const e = t.replace(D, "$1UTC");
  n.prototype[e] && (t.startsWith("get") ? n.prototype[t] = function() {
    return this.internal[e]();
  } : (n.prototype[t] = function() {
    return Date.prototype[e].apply(this.internal, arguments), H(this), +this;
  }, n.prototype[e] = function() {
    return Date.prototype[e].apply(this, arguments), a(this), +this;
  }));
});
function a(t) {
  t.internal.setTime(+t), t.internal.setUTCSeconds(t.internal.getUTCSeconds() - Math.round(-s(t.timeZone, t) * 60));
}
function H(t) {
  Date.prototype.setFullYear.call(t, t.internal.getUTCFullYear(), t.internal.getUTCMonth(), t.internal.getUTCDate()), Date.prototype.setHours.call(t, t.internal.getUTCHours(), t.internal.getUTCMinutes(), t.internal.getUTCSeconds(), t.internal.getUTCMilliseconds()), U(t);
}
function U(t) {
  const e = s(t.timeZone, t), o = e > 0 ? Math.floor(e) : Math.ceil(e), i = /* @__PURE__ */ new Date(+t);
  i.setUTCHours(i.getUTCHours() - 1);
  const r = -(/* @__PURE__ */ new Date(+t)).getTimezoneOffset(), g = -(/* @__PURE__ */ new Date(+i)).getTimezoneOffset(), m = r - g, M = Date.prototype.getHours.apply(t) !== t.internal.getUTCHours();
  m && M && t.internal.setUTCMinutes(t.internal.getUTCMinutes() + m);
  const f = r - o;
  f && Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + f);
  const l = /* @__PURE__ */ new Date(+t);
  l.setUTCSeconds(0);
  const y = r > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, c = Math.round(-(s(t.timeZone, t) * 60)) % 60;
  (c || y) && (t.internal.setUTCSeconds(t.internal.getUTCSeconds() + c), Date.prototype.setUTCSeconds.call(t, Date.prototype.getUTCSeconds.call(t) + c + y));
  const p = s(t.timeZone, t), u = p > 0 ? Math.floor(p) : Math.ceil(p), w = -(/* @__PURE__ */ new Date(+t)).getTimezoneOffset() - u, O = u !== o, C = w - f;
  if (O && C) {
    Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + C);
    const h = s(t.timeZone, t), S = h > 0 ? Math.floor(h) : Math.ceil(h), T = u - S;
    T && (t.internal.setUTCMinutes(t.internal.getUTCMinutes() + T), Date.prototype.setUTCMinutes.call(t, Date.prototype.getUTCMinutes.call(t) + T));
  }
}
export {
  n as TZDateMini
};
//# sourceMappingURL=index.es160.js.map
