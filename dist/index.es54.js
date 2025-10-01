import * as s from "react";
import { Primitive as d } from "./index.es106.js";
import { jsx as t } from "react/jsx-runtime";
var m = "AspectRatio", o = s.forwardRef(
  (r, i) => {
    const { ratio: a = 1 / 1, style: e, ...p } = r;
    return /* @__PURE__ */ t(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / a}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ t(
          d.div,
          {
            ...p,
            ref: i,
            style: {
              ...e,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
o.displayName = m;
var f = o;
export {
  o as AspectRatio,
  f as Root
};
//# sourceMappingURL=index.es54.js.map
