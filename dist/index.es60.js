import { TZDate as b } from "./index.es159.js";
import "./index.es160.js";
import i, { useMemo as Z, useCallback as y, useRef as Ae } from "react";
import { DateLib as Te } from "./index.es161.js";
import { createGetModifiers as Ke } from "./index.es162.js";
import { getClassNamesForModifiers as Re } from "./index.es163.js";
import { getComponents as Ge } from "./index.es164.js";
import { getDataAttributes as He } from "./index.es165.js";
import { getDefaultClassNames as _e } from "./index.es59.js";
import { getFormatters as Ie } from "./index.es166.js";
import { getMonthOptions as Ue } from "./index.es167.js";
import { getStyleForModifiers as je } from "./index.es168.js";
import { getWeekdays as Ve } from "./index.es169.js";
import { getYearOptions as $e } from "./index.es170.js";
import * as qe from "./index.es171.js";
import { UI as o, DayFlag as ze, SelectionState as w } from "./index.es172.js";
import { useAnimation as Je } from "./index.es173.js";
import { useCalendar as Qe } from "./index.es174.js";
import { dayPickerContext as Xe } from "./index.es175.js";
import { useFocus as et } from "./index.es176.js";
import { useSelection as tt } from "./index.es177.js";
import { rangeIncludesDate as at } from "./index.es178.js";
import { isDateRange as ot } from "./index.es179.js";
import { enUS as nt } from "./index.es180.js";
function Bt(A) {
  let e = A;
  e.timeZone && (e = {
    ...A
  }, e.today && (e.today = new b(e.today, e.timeZone)), e.month && (e.month = new b(e.month, e.timeZone)), e.defaultMonth && (e.defaultMonth = new b(e.defaultMonth, e.timeZone)), e.startMonth && (e.startMonth = new b(e.startMonth, e.timeZone)), e.endMonth && (e.endMonth = new b(e.endMonth, e.timeZone)), e.mode === "single" && e.selected ? e.selected = new b(e.selected, e.timeZone) : e.mode === "multiple" && e.selected ? e.selected = e.selected?.map((n) => new b(n, e.timeZone)) : e.mode === "range" && e.selected && (e.selected = {
    from: e.selected.from ? new b(e.selected.from, e.timeZone) : void 0,
    to: e.selected.to ? new b(e.selected.to, e.timeZone) : void 0
  }));
  const { components: l, formatters: N, labels: T, dateLib: t, locale: oe, classNames: r } = Z(() => {
    const n = { ...nt, ...e.locale };
    return {
      dateLib: new Te({
        locale: n,
        weekStartsOn: e.broadcastCalendar ? 1 : e.weekStartsOn,
        firstWeekContainsDate: e.firstWeekContainsDate,
        useAdditionalWeekYearTokens: e.useAdditionalWeekYearTokens,
        useAdditionalDayOfYearTokens: e.useAdditionalDayOfYearTokens,
        timeZone: e.timeZone,
        numerals: e.numerals
      }, e.dateLib),
      components: Ge(e.components),
      formatters: Ie(e.formatters),
      labels: { ...qe, ...e.labels },
      locale: n,
      classNames: { ..._e(), ...e.classNames }
    };
  }, [
    e.locale,
    e.broadcastCalendar,
    e.weekStartsOn,
    e.firstWeekContainsDate,
    e.useAdditionalWeekYearTokens,
    e.useAdditionalDayOfYearTokens,
    e.timeZone,
    e.numerals,
    e.dateLib,
    e.components,
    e.formatters,
    e.labels,
    e.classNames
  ]), { captionLayout: k, mode: g, navLayout: M, numberOfMonths: K = 1, onDayBlur: R, onDayClick: C, onDayFocus: G, onDayKeyDown: H, onDayMouseEnter: _, onDayMouseLeave: I, onNextClick: U, onPrevClick: j, showWeekNumber: V, styles: c } = e, { formatCaption: $, formatDay: q, formatMonthDropdown: ne, formatWeekNumber: se, formatWeekNumberHeader: re, formatWeekdayName: ie, formatYearDropdown: le } = N, z = Qe(e, t), { days: de, months: W, navStart: E, navEnd: B, previousMonth: f, nextMonth: p, goToMonth: h } = z, x = Ke(de, e, E, B, t), { isSelected: S, select: Y, selected: D } = tt(e, t) ?? {}, { blur: J, focused: Q, isFocusTarget: me, moveFocus: X, setFocused: v } = et(e, z, x, S ?? (() => !1), t), { labelDayButton: ce, labelGridcell: ue, labelGrid: fe, labelMonthDropdown: pe, labelNav: ee, labelPrevious: ye, labelNext: he, labelWeekday: be, labelWeekNumber: ke, labelWeekNumberHeader: Ne, labelYearDropdown: Me } = T, De = Z(() => Ve(t, e.ISOWeek), [t, e.ISOWeek]), te = g !== void 0 || C !== void 0, O = y(() => {
    f && (h(f), j?.(f));
  }, [f, h, j]), L = y(() => {
    p && (h(p), U?.(p));
  }, [h, p, U]), ve = y((n, m) => (a) => {
    a.preventDefault(), a.stopPropagation(), v(n), Y?.(n.date, m, a), C?.(n.date, m, a);
  }, [Y, C, v]), we = y((n, m) => (a) => {
    v(n), G?.(n.date, m, a);
  }, [G, v]), ge = y((n, m) => (a) => {
    J(), R?.(n.date, m, a);
  }, [J, R]), Ce = y((n, m) => (a) => {
    const d = {
      ArrowLeft: [
        a.shiftKey ? "month" : "day",
        e.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        a.shiftKey ? "month" : "day",
        e.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [a.shiftKey ? "year" : "week", "after"],
      ArrowUp: [a.shiftKey ? "year" : "week", "before"],
      PageUp: [a.shiftKey ? "year" : "month", "before"],
      PageDown: [a.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (d[a.key]) {
      a.preventDefault(), a.stopPropagation();
      const [u, s] = d[a.key];
      X(u, s);
    }
    H?.(n.date, m, a);
  }, [X, H, e.dir]), We = y((n, m) => (a) => {
    _?.(n.date, m, a);
  }, [_]), Ee = y((n, m) => (a) => {
    I?.(n.date, m, a);
  }, [I]), Be = y((n) => (m) => {
    const a = Number(m.target.value), d = t.setMonth(t.startOfMonth(n), a);
    h(d);
  }, [t, h]), xe = y((n) => (m) => {
    const a = Number(m.target.value), d = t.setYear(t.startOfMonth(n), a);
    h(d);
  }, [t, h]), { className: Se, style: Ye } = Z(() => ({
    className: [r[o.Root], e.className].filter(Boolean).join(" "),
    style: { ...c?.[o.Root], ...e.style }
  }), [r, e.className, e.style, c]), Oe = He(e), ae = Ae(null);
  Je(ae, !!e.animate, {
    classNames: r,
    months: W,
    focused: Q,
    dateLib: t
  });
  const Le = {
    dayPickerProps: e,
    selected: D,
    select: Y,
    isSelected: S,
    months: W,
    nextMonth: p,
    previousMonth: f,
    goToMonth: h,
    getModifiers: x,
    components: l,
    classNames: r,
    styles: c,
    labels: T,
    formatters: N
  };
  return i.createElement(
    Xe.Provider,
    { value: Le },
    i.createElement(
      l.Root,
      { rootRef: e.animate ? ae : void 0, className: Se, style: Ye, dir: e.dir, id: e.id, lang: e.lang, nonce: e.nonce, title: e.title, role: e.role, "aria-label": e["aria-label"], "aria-labelledby": e["aria-labelledby"], ...Oe },
      i.createElement(
        l.Months,
        { className: r[o.Months], style: c?.[o.Months] },
        !e.hideNavigation && !M && i.createElement(l.Nav, { "data-animated-nav": e.animate ? "true" : void 0, className: r[o.Nav], style: c?.[o.Nav], "aria-label": ee(), onPreviousClick: O, onNextClick: L, previousMonth: f, nextMonth: p }),
        W.map((n, m) => i.createElement(
          l.Month,
          {
            "data-animated-month": e.animate ? "true" : void 0,
            className: r[o.Month],
            style: c?.[o.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: m,
            displayIndex: m,
            calendarMonth: n
          },
          M === "around" && !e.hideNavigation && m === 0 && i.createElement(
            l.PreviousMonthButton,
            { type: "button", className: r[o.PreviousMonthButton], tabIndex: f ? void 0 : -1, "aria-disabled": f ? void 0 : !0, "aria-label": ye(f), onClick: O, "data-animated-button": e.animate ? "true" : void 0 },
            i.createElement(l.Chevron, { disabled: f ? void 0 : !0, className: r[o.Chevron], orientation: e.dir === "rtl" ? "right" : "left" })
          ),
          i.createElement(l.MonthCaption, { "data-animated-caption": e.animate ? "true" : void 0, className: r[o.MonthCaption], style: c?.[o.MonthCaption], calendarMonth: n, displayIndex: m }, k?.startsWith("dropdown") ? i.createElement(
            l.DropdownNav,
            { className: r[o.Dropdowns], style: c?.[o.Dropdowns] },
            (() => {
              const a = k === "dropdown" || k === "dropdown-months" ? i.createElement(l.MonthsDropdown, { key: "month", className: r[o.MonthsDropdown], "aria-label": pe(), classNames: r, components: l, disabled: !!e.disableNavigation, onChange: Be(n.date), options: Ue(n.date, E, B, N, t), style: c?.[o.Dropdown], value: t.getMonth(n.date) }) : i.createElement("span", { key: "month" }, ne(n.date, t)), d = k === "dropdown" || k === "dropdown-years" ? i.createElement(l.YearsDropdown, { key: "year", className: r[o.YearsDropdown], "aria-label": Me(t.options), classNames: r, components: l, disabled: !!e.disableNavigation, onChange: xe(n.date), options: $e(E, B, N, t, !!e.reverseYears), style: c?.[o.Dropdown], value: t.getYear(n.date) }) : i.createElement("span", { key: "year" }, le(n.date, t));
              return t.getMonthYearOrder() === "year-first" ? [d, a] : [a, d];
            })(),
            i.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, $(n.date, t.options, t))
          ) : (
            // biome-ignore lint/a11y/useSemanticElements: breaking change
            i.createElement(l.CaptionLabel, { className: r[o.CaptionLabel], role: "status", "aria-live": "polite" }, $(n.date, t.options, t))
          )),
          M === "around" && !e.hideNavigation && m === K - 1 && i.createElement(
            l.NextMonthButton,
            { type: "button", className: r[o.NextMonthButton], tabIndex: p ? void 0 : -1, "aria-disabled": p ? void 0 : !0, "aria-label": he(p), onClick: L, "data-animated-button": e.animate ? "true" : void 0 },
            i.createElement(l.Chevron, { disabled: p ? void 0 : !0, className: r[o.Chevron], orientation: e.dir === "rtl" ? "left" : "right" })
          ),
          m === K - 1 && M === "after" && !e.hideNavigation && i.createElement(l.Nav, { "data-animated-nav": e.animate ? "true" : void 0, className: r[o.Nav], style: c?.[o.Nav], "aria-label": ee(), onPreviousClick: O, onNextClick: L, previousMonth: f, nextMonth: p }),
          i.createElement(
            l.MonthGrid,
            { role: "grid", "aria-multiselectable": g === "multiple" || g === "range", "aria-label": fe(n.date, t.options, t) || void 0, className: r[o.MonthGrid], style: c?.[o.MonthGrid] },
            !e.hideWeekdays && i.createElement(
              l.Weekdays,
              { "data-animated-weekdays": e.animate ? "true" : void 0, className: r[o.Weekdays], style: c?.[o.Weekdays] },
              V && i.createElement(l.WeekNumberHeader, { "aria-label": Ne(t.options), className: r[o.WeekNumberHeader], style: c?.[o.WeekNumberHeader], scope: "col" }, re()),
              De.map((a) => i.createElement(l.Weekday, { "aria-label": be(a, t.options, t), className: r[o.Weekday], key: String(a), style: c?.[o.Weekday], scope: "col" }, ie(a, t.options, t)))
            ),
            i.createElement(l.Weeks, { "data-animated-weeks": e.animate ? "true" : void 0, className: r[o.Weeks], style: c?.[o.Weeks] }, n.weeks.map((a) => i.createElement(
              l.Week,
              { className: r[o.Week], key: a.weekNumber, style: c?.[o.Week], week: a },
              V && // biome-ignore lint/a11y/useSemanticElements: react component
              i.createElement(l.WeekNumber, { week: a, style: c?.[o.WeekNumber], "aria-label": ke(a.weekNumber, {
                locale: oe
              }), className: r[o.WeekNumber], scope: "row", role: "rowheader" }, se(a.weekNumber, t)),
              a.days.map((d) => {
                const { date: u } = d, s = x(d);
                if (s[ze.focused] = !s.hidden && !!Q?.isEqualTo(d), s[w.selected] = S?.(u) || s.selected, ot(D)) {
                  const { from: P, to: F } = D;
                  s[w.range_start] = !!(P && F && t.isSameDay(u, P)), s[w.range_end] = !!(P && F && t.isSameDay(u, F)), s[w.range_middle] = at(D, u, !0, t);
                }
                const Pe = je(s, c, e.modifiersStyles), Fe = Re(s, r, e.modifiersClassNames), Ze = !te && !s.hidden ? ue(u, s, t.options, t) : void 0;
                return (
                  // biome-ignore lint/a11y/useSemanticElements: react component
                  i.createElement(l.Day, { key: `${t.format(u, "yyyy-MM-dd")}_${t.format(d.displayMonth, "yyyy-MM")}`, day: d, modifiers: s, className: Fe.join(" "), style: Pe, role: "gridcell", "aria-selected": s.selected || void 0, "aria-label": Ze, "data-day": t.format(u, "yyyy-MM-dd"), "data-month": d.outside ? t.format(u, "yyyy-MM") : void 0, "data-selected": s.selected || void 0, "data-disabled": s.disabled || void 0, "data-hidden": s.hidden || void 0, "data-outside": d.outside || void 0, "data-focused": s.focused || void 0, "data-today": s.today || void 0 }, !s.hidden && te ? i.createElement(l.DayButton, { className: r[o.DayButton], style: c?.[o.DayButton], type: "button", day: d, modifiers: s, disabled: s.disabled || void 0, tabIndex: me(d) ? 0 : -1, "aria-label": ce(u, s, t.options, t), onClick: ve(d, s), onBlur: ge(d, s), onFocus: we(d, s), onKeyDown: Ce(d, s), onMouseEnter: We(d, s), onMouseLeave: Ee(d, s) }, q(u, t.options, t)) : !s.hidden && q(d.date, t.options, t))
                );
              })
            )))
          )
        ))
      ),
      e.footer && // biome-ignore lint/a11y/useSemanticElements: react component
      i.createElement(l.Footer, { className: r[o.Footer], style: c?.[o.Footer], role: "status", "aria-live": "polite" }, e.footer)
    )
  );
}
export {
  Bt as DayPicker
};
//# sourceMappingURL=index.es60.js.map
