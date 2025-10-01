import { getDayOfYear as m } from "./index.es453.js";
import { getISOWeek as g } from "./index.es255.js";
import { getISOWeekYear as w } from "./index.es456.js";
import { getWeek as b } from "./index.es258.js";
import { getWeekYear as x } from "./index.es458.js";
import { addLeadingZeros as i } from "./index.es508.js";
import { lightFormatters as u } from "./index.es509.js";
const s = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, L = {
  // Era
  G: function(n, r, e) {
    const t = n.getFullYear() > 0 ? 1 : 0;
    switch (r) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return e.era(t, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return e.era(t, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return e.era(t, { width: "wide" });
    }
  },
  // Year
  y: function(n, r, e) {
    if (r === "yo") {
      const t = n.getFullYear(), a = t > 0 ? t : 1 - t;
      return e.ordinalNumber(a, { unit: "year" });
    }
    return u.y(n, r);
  },
  // Local week-numbering year
  Y: function(n, r, e, t) {
    const a = x(n, t), o = a > 0 ? a : 1 - a;
    if (r === "YY") {
      const h = o % 100;
      return i(h, 2);
    }
    return r === "Yo" ? e.ordinalNumber(o, { unit: "year" }) : i(o, r.length);
  },
  // ISO week-numbering year
  R: function(n, r) {
    const e = w(n);
    return i(e, r.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(n, r) {
    const e = n.getFullYear();
    return i(e, r.length);
  },
  // Quarter
  Q: function(n, r, e) {
    const t = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "Q":
        return String(t);
      // 01, 02, 03, 04
      case "QQ":
        return i(t, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return e.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return e.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(n, r, e) {
    const t = Math.ceil((n.getMonth() + 1) / 3);
    switch (r) {
      // 1, 2, 3, 4
      case "q":
        return String(t);
      // 01, 02, 03, 04
      case "qq":
        return i(t, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return e.ordinalNumber(t, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return e.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return e.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return e.quarter(t, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(n, r, e) {
    const t = n.getMonth();
    switch (r) {
      case "M":
      case "MM":
        return u.M(n, r);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return e.month(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return e.month(t, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return e.month(t, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(n, r, e) {
    const t = n.getMonth();
    switch (r) {
      // 1, 2, ..., 12
      case "L":
        return String(t + 1);
      // 01, 02, ..., 12
      case "LL":
        return i(t + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return e.ordinalNumber(t + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return e.month(t, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return e.month(t, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return e.month(t, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(n, r, e, t) {
    const a = b(n, t);
    return r === "wo" ? e.ordinalNumber(a, { unit: "week" }) : i(a, r.length);
  },
  // ISO week of year
  I: function(n, r, e) {
    const t = g(n);
    return r === "Io" ? e.ordinalNumber(t, { unit: "week" }) : i(t, r.length);
  },
  // Day of the month
  d: function(n, r, e) {
    return r === "do" ? e.ordinalNumber(n.getDate(), { unit: "date" }) : u.d(n, r);
  },
  // Day of year
  D: function(n, r, e) {
    const t = m(n);
    return r === "Do" ? e.ordinalNumber(t, { unit: "dayOfYear" }) : i(t, r.length);
  },
  // Day of week
  E: function(n, r, e) {
    const t = n.getDay();
    switch (r) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(n, r, e, t) {
    const a = n.getDay(), o = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(o);
      // Padded numerical value
      case "ee":
        return i(o, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return e.ordinalNumber(o, { unit: "day" });
      case "eee":
        return e.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return e.day(a, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return e.day(a, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return e.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(n, r, e, t) {
    const a = n.getDay(), o = (a - t.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      // Numerical value (same as in `e`)
      case "c":
        return String(o);
      // Padded numerical value
      case "cc":
        return i(o, r.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return e.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return e.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return e.day(a, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return e.day(a, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return e.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(n, r, e) {
    const t = n.getDay(), a = t === 0 ? 7 : t;
    switch (r) {
      // 2
      case "i":
        return String(a);
      // 02
      case "ii":
        return i(a, r.length);
      // 2nd
      case "io":
        return e.ordinalNumber(a, { unit: "day" });
      // Tue
      case "iii":
        return e.day(t, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return e.day(t, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return e.day(t, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return e.day(t, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(n, r, e) {
    const a = n.getHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(n, r, e) {
    const t = n.getHours();
    let a;
    switch (t === 12 ? a = s.noon : t === 0 ? a = s.midnight : a = t / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(n, r, e) {
    const t = n.getHours();
    let a;
    switch (t >= 17 ? a = s.evening : t >= 12 ? a = s.afternoon : t >= 4 ? a = s.morning : a = s.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(n, r, e) {
    if (r === "ho") {
      let t = n.getHours() % 12;
      return t === 0 && (t = 12), e.ordinalNumber(t, { unit: "hour" });
    }
    return u.h(n, r);
  },
  // Hour [0-23]
  H: function(n, r, e) {
    return r === "Ho" ? e.ordinalNumber(n.getHours(), { unit: "hour" }) : u.H(n, r);
  },
  // Hour [0-11]
  K: function(n, r, e) {
    const t = n.getHours() % 12;
    return r === "Ko" ? e.ordinalNumber(t, { unit: "hour" }) : i(t, r.length);
  },
  // Hour [1-24]
  k: function(n, r, e) {
    let t = n.getHours();
    return t === 0 && (t = 24), r === "ko" ? e.ordinalNumber(t, { unit: "hour" }) : i(t, r.length);
  },
  // Minute
  m: function(n, r, e) {
    return r === "mo" ? e.ordinalNumber(n.getMinutes(), { unit: "minute" }) : u.m(n, r);
  },
  // Second
  s: function(n, r, e) {
    return r === "so" ? e.ordinalNumber(n.getSeconds(), { unit: "second" }) : u.s(n, r);
  },
  // Fraction of second
  S: function(n, r) {
    return u.S(n, r);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(n, r, e) {
    const t = n.getTimezoneOffset();
    if (t === 0)
      return "Z";
    switch (r) {
      // Hours and optional minutes
      case "X":
        return f(t);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return c(t);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return c(t, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      // Hours and optional minutes
      case "x":
        return f(t);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return c(t);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return c(t, ":");
    }
  },
  // Timezone (GMT)
  O: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + d(t, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + c(t, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(n, r, e) {
    const t = n.getTimezoneOffset();
    switch (r) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + d(t, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + c(t, ":");
    }
  },
  // Seconds timestamp
  t: function(n, r, e) {
    const t = Math.trunc(+n / 1e3);
    return i(t, r.length);
  },
  // Milliseconds timestamp
  T: function(n, r, e) {
    return i(+n, r.length);
  }
};
function d(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = Math.trunc(t / 60), o = t % 60;
  return o === 0 ? e + String(a) : e + String(a) + r + i(o, 2);
}
function f(n, r) {
  return n % 60 === 0 ? (n > 0 ? "-" : "+") + i(Math.abs(n) / 60, 2) : c(n, r);
}
function c(n, r = "") {
  const e = n > 0 ? "-" : "+", t = Math.abs(n), a = i(Math.trunc(t / 60), 2), o = i(t % 60, 2);
  return e + a + r + o;
}
export {
  L as formatters
};
//# sourceMappingURL=index.es449.js.map
