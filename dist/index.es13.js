import { jsx as s, jsxs as f, Fragment as L } from "react/jsx-runtime";
import * as p from "react";
import { Tooltip as T } from "./index.es65.js";
import { Legend as I } from "./index.es66.js";
import { cn as l } from "./index.es48.js";
import { ResponsiveContainer as P } from "./index.es67.js";
const S = { light: "", dark: ".dark" }, y = p.createContext(null);
function N() {
  const c = p.useContext(y);
  if (!c)
    throw new Error("useChart must be used within a <ChartContainer />");
  return c;
}
function q({
  id: c,
  className: e,
  children: n,
  config: r,
  ...a
}) {
  const d = p.useId(), o = `chart-${c || d.replace(/:/g, "")}`;
  return /* @__PURE__ */ s(y.Provider, { value: { config: r }, children: /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "chart",
      "data-chart": o,
      className: l(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ s(E, { id: o, config: r }),
        /* @__PURE__ */ s(P, { children: n })
      ]
    }
  ) });
}
const E = ({ id: c, config: e }) => {
  const n = Object.entries(e).filter(
    ([, r]) => r.theme || r.color
  );
  return n.length ? /* @__PURE__ */ s(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(S).map(
          ([r, a]) => `
${a} [data-chart=${c}] {
${n.map(([d, o]) => {
            const i = o.theme?.[r] || o.color;
            return i ? `  --color-${d}: ${i};` : null;
          }).join(`
`)}
}
`
        ).join(`
`)
      }
    }
  ) : null;
}, z = T;
function A({
  active: c,
  payload: e,
  className: n,
  indicator: r = "dot",
  hideLabel: a = !1,
  hideIndicator: d = !1,
  label: o,
  labelFormatter: i,
  labelClassName: u,
  formatter: _,
  color: j,
  nameKey: $,
  labelKey: v
}) {
  const { config: g } = N(), k = p.useMemo(() => {
    if (a || !e?.length)
      return null;
    const [t] = e, x = `${v || t?.dataKey || t?.name || "value"}`, b = C(g, t, x), h = !v && typeof o == "string" ? g[o]?.label || o : b?.label;
    return i ? /* @__PURE__ */ s("div", { className: l("font-medium", u), children: i(h, e) }) : h ? /* @__PURE__ */ s("div", { className: l("font-medium", u), children: h }) : null;
  }, [o, i, e, a, u, g, v]);
  if (!c || !e?.length)
    return null;
  const m = e.length === 1 && r !== "dot";
  return /* @__PURE__ */ f(
    "div",
    {
      className: l(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        n
      ),
      children: [
        m ? null : k,
        /* @__PURE__ */ s("div", { className: "grid gap-1.5", children: e.filter((t) => t.type !== "none").map((t, x) => {
          const b = `${$ || t.name || t.dataKey || "value"}`, h = C(g, t, b), w = j || t.payload.fill || t.color;
          return /* @__PURE__ */ s(
            "div",
            {
              className: l(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                r === "dot" && "items-center"
              ),
              children: _ && t?.value !== void 0 && t.name ? _(t.value, t.name, t, x, t.payload) : /* @__PURE__ */ f(L, { children: [
                h?.icon ? /* @__PURE__ */ s(h.icon, {}) : !d && /* @__PURE__ */ s(
                  "div",
                  {
                    className: l(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": r === "dot",
                        "w-1": r === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": r === "dashed",
                        "my-0.5": m && r === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": w,
                      "--color-border": w
                    }
                  }
                ),
                /* @__PURE__ */ f(
                  "div",
                  {
                    className: l(
                      "flex flex-1 justify-between leading-none",
                      m ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ f("div", { className: "grid gap-1.5", children: [
                        m ? k : null,
                        /* @__PURE__ */ s("span", { className: "text-muted-foreground", children: h?.label || t.name })
                      ] }),
                      t.value && /* @__PURE__ */ s("span", { className: "text-foreground font-mono font-medium tabular-nums", children: t.value.toLocaleString() })
                    ]
                  }
                )
              ] })
            },
            t.dataKey
          );
        }) })
      ]
    }
  );
}
const B = I;
function D({
  className: c,
  hideIcon: e = !1,
  payload: n,
  verticalAlign: r = "bottom",
  nameKey: a
}) {
  const { config: d } = N();
  return n?.length ? /* @__PURE__ */ s(
    "div",
    {
      className: l(
        "flex items-center justify-center gap-4",
        r === "top" ? "pb-3" : "pt-3",
        c
      ),
      children: n.filter((o) => o.type !== "none").map((o) => {
        const i = `${a || o.dataKey || "value"}`, u = C(d, o, i);
        return /* @__PURE__ */ f(
          "div",
          {
            className: l(
              "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
            ),
            children: [
              u?.icon && !e ? /* @__PURE__ */ s(u.icon, {}) : /* @__PURE__ */ s(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: o.color
                  }
                }
              ),
              u?.label
            ]
          },
          o.value
        );
      })
    }
  ) : null;
}
function C(c, e, n) {
  if (typeof e != "object" || e === null)
    return;
  const r = "payload" in e && typeof e.payload == "object" && e.payload !== null ? e.payload : void 0;
  let a = n;
  return n in e && typeof e[n] == "string" ? a = e[n] : r && n in r && typeof r[n] == "string" && (a = r[n]), a in c ? c[a] : c[n];
}
export {
  q as ChartContainer,
  B as ChartLegend,
  D as ChartLegendContent,
  E as ChartStyle,
  z as ChartTooltip,
  A as ChartTooltipContent
};
//# sourceMappingURL=index.es13.js.map
