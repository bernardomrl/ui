import { jsx as e } from "react/jsx-runtime";
import { Toaster as t } from "./index.es96.js";
import { useTheme as s } from "./index.es49.js";
const n = ({ ...r }) => {
  const { theme: o = "system" } = s();
  return /* @__PURE__ */ e(
    t,
    {
      theme: o,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...r
    }
  );
};
export {
  n as Toaster
};
//# sourceMappingURL=index.es39.js.map
