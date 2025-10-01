import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { Root as i, Item as s, Header as d, Trigger as c, Content as l } from "./index.es50.js";
import { cn as r } from "./index.es48.js";
import m from "./index.es51.js";
function b({ ...t }) {
  return /* @__PURE__ */ e(i, { "data-slot": "accordion", ...t });
}
function x({
  className: t,
  ...o
}) {
  return /* @__PURE__ */ e(
    s,
    {
      "data-slot": "accordion-item",
      className: r("border-b last:border-b-0", t),
      ...o
    }
  );
}
function v({
  className: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ e(d, { className: "flex", children: /* @__PURE__ */ a(
    c,
    {
      "data-slot": "accordion-trigger",
      className: r(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        t
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ e(m, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function h({
  className: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ e(
    l,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ e("div", { className: r("pt-0 pb-4", t), children: o })
    }
  );
}
export {
  b as Accordion,
  h as AccordionContent,
  x as AccordionItem,
  v as AccordionTrigger
};
//# sourceMappingURL=index.es2.js.map
