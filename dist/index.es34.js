import { jsx as i } from "react/jsx-runtime";
import { Root as n } from "./index.es93.js";
import { cn as e } from "./index.es48.js";
function d({
  className: t,
  orientation: o = "horizontal",
  decorative: r = !0,
  ...a
}) {
  return /* @__PURE__ */ i(
    n,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: o,
      className: e(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t
      ),
      ...a
    }
  );
}
export {
  d as Separator
};
//# sourceMappingURL=index.es34.js.map
