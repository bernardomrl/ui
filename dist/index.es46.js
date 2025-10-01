import { jsx as o } from "react/jsx-runtime";
import a from "react";
import { cn as l } from "./index.es48.js";
const s = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "h1",
    {
      ref: r,
      className: l(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        t
      ),
      ...e
    }
  )
);
s.displayName = "H1";
const m = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "h2",
    {
      ref: r,
      className: l(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        t
      ),
      ...e
    }
  )
);
m.displayName = "H2";
const c = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "h3",
    {
      ref: r,
      className: l("scroll-m-20 text-2xl font-semibold tracking-tight", t),
      ...e
    }
  )
);
c.displayName = "H3";
const i = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "h4",
    {
      ref: r,
      className: l("scroll-m-20 text-xl font-semibold tracking-tight", t),
      ...e
    }
  )
);
i.displayName = "H4";
const d = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "p",
    {
      ref: r,
      className: l("leading-7 [&:not(:first-child)]:mt-6", t),
      ...e
    }
  )
);
d.displayName = "P";
const n = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "blockquote",
    {
      ref: r,
      className: l("mt-6 border-l-2 pl-6 italic", t),
      ...e
    }
  )
);
n.displayName = "Blockquote";
const f = a.forwardRef(
  ({ className: t, ...e }, r) => /* @__PURE__ */ o(
    "ul",
    {
      ref: r,
      className: l("my-6 ml-6 list-disc [&>li]:mt-2", t),
      ...e
    }
  )
);
f.displayName = "List";
const p = a.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ o(
  "code",
  {
    ref: r,
    className: l(
      "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      t
    ),
    ...e
  }
));
p.displayName = "Code";
export {
  n as Blockquote,
  p as Code,
  s as H1,
  m as H2,
  c as H3,
  i as H4,
  f as List,
  d as P
};
//# sourceMappingURL=index.es46.js.map
