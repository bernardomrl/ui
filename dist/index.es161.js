import { TZDate as h } from "./index.es159.js";
import "./index.es160.js";
import { enUS as a } from "./index.es180.js";
import { endOfBroadcastWeek as f } from "./index.es241.js";
import { startOfBroadcastWeek as d } from "./index.es242.js";
import { addDays as m } from "./index.es243.js";
import { addMonths as v } from "./index.es244.js";
import { addWeeks as p } from "./index.es245.js";
import { addYears as O } from "./index.es246.js";
import { differenceInCalendarDays as u } from "./index.es247.js";
import { differenceInCalendarMonths as c } from "./index.es248.js";
import { eachMonthOfInterval as l } from "./index.es249.js";
import { endOfISOWeek as M } from "./index.es250.js";
import { endOfMonth as k } from "./index.es251.js";
import { endOfWeek as W } from "./index.es252.js";
import { endOfYear as D } from "./index.es253.js";
import { formatDate as S } from "./index.es254.js";
import { getISOWeek as g } from "./index.es255.js";
import { getMonth as y } from "./index.es256.js";
import { getYear as Y } from "./index.es257.js";
import { getWeek as I } from "./index.es258.js";
import { isAfter as B } from "./index.es259.js";
import { isBefore as w } from "./index.es260.js";
import { isDate as L } from "./index.es261.js";
import { isSameDay as C } from "./index.es262.js";
import { isSameMonth as Z } from "./index.es263.js";
import { isSameYear as b } from "./index.es264.js";
import { max as z } from "./index.es265.js";
import { min as F } from "./index.es266.js";
import { setMonth as A } from "./index.es267.js";
import { setYear as N } from "./index.es268.js";
import { startOfDay as _ } from "./index.es269.js";
import { startOfISOWeek as j } from "./index.es270.js";
import { startOfMonth as x } from "./index.es271.js";
import { startOfWeek as H } from "./index.es272.js";
import { startOfYear as K } from "./index.es273.js";
class o {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, i) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? h.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, e, s) => this.overrides?.newDate ? this.overrides.newDate(r, e, s) : this.options.timeZone ? new h(r, e, s, this.options.timeZone) : new Date(r, e, s), this.addDays = (r, e) => this.overrides?.addDays ? this.overrides.addDays(r, e) : m(r, e), this.addMonths = (r, e) => this.overrides?.addMonths ? this.overrides.addMonths(r, e) : v(r, e), this.addWeeks = (r, e) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, e) : p(r, e), this.addYears = (r, e) => this.overrides?.addYears ? this.overrides.addYears(r, e) : O(r, e), this.differenceInCalendarDays = (r, e) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, e) : u(r, e), this.differenceInCalendarMonths = (r, e) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, e) : c(r, e), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : l(r), this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : f(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : M(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : k(r), this.endOfWeek = (r, e) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, e) : W(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : D(r), this.format = (r, e, s) => {
      const n = this.overrides?.format ? this.overrides.format(r, e, this.options) : S(r, e, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(n) : n;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : g(r), this.getMonth = (r, e) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : y(r, this.options), this.getYear = (r, e) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Y(r, this.options), this.getWeek = (r, e) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : I(r, this.options), this.isAfter = (r, e) => this.overrides?.isAfter ? this.overrides.isAfter(r, e) : B(r, e), this.isBefore = (r, e) => this.overrides?.isBefore ? this.overrides.isBefore(r, e) : w(r, e), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : L(r), this.isSameDay = (r, e) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, e) : C(r, e), this.isSameMonth = (r, e) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, e) : Z(r, e), this.isSameYear = (r, e) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, e) : b(r, e), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : z(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : F(r), this.setMonth = (r, e) => this.overrides?.setMonth ? this.overrides.setMonth(r, e) : A(r, e), this.setYear = (r, e) => this.overrides?.setYear ? this.overrides.setYear(r, e) : N(r, e), this.startOfBroadcastWeek = (r, e) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : d(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : _(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : j(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : x(r), this.startOfWeek = (r, e) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : H(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : K(r), this.options = { locale: a, ...t }, this.overrides = i;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, i = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let e = 0; e < 10; e++)
      r[e.toString()] = i.format(e);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const i = this.getDigitMap();
    return t.replace(/\d/g, (r) => i[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    const t = this.options.locale?.code;
    return t && o.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: i, timeZone: r, numerals: e } = this.options, s = i?.code;
    if (s && o.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: e
        }).format(t);
      } catch {
      }
    const n = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, n);
  }
}
o.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Ir = new o();
export {
  o as DateLib,
  Ir as defaultDateLib,
  a as defaultLocale
};
//# sourceMappingURL=index.es161.js.map
