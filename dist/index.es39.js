import { j as e } from "./index.es49.js";
import { Toaster as t } from "sonner";
import { useTheme as s } from "./index.es48.js";
const n = ({ ...r }) => {
  const { theme: o = "system" } = s();
  return /* @__PURE__ */ e.jsx(
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
