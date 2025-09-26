import { j as d } from "./index.es49.js";
import { useState as h, useEffect as u, createContext as l, useContext as T } from "react";
const f = {
  theme: "system",
  setTheme: () => null
}, r = l(f);
function w({
  children: t,
  defaultTheme: m = "system",
  storageKey: o = "vite-ui-theme",
  ...n
}) {
  const [s, i] = h(
    () => localStorage.getItem(o) || m
  );
  u(() => {
    const e = window.document.documentElement;
    if (e.classList.remove("light", "dark"), s === "system") {
      const a = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      e.classList.add(a);
      return;
    }
    e.classList.add(s);
  }, [s]);
  const c = {
    theme: s,
    setTheme: (e) => {
      localStorage.setItem(o, e), i(e);
    }
  };
  return /* @__PURE__ */ d.jsx(r.Provider, { ...n, value: c, children: t });
}
const p = () => {
  const t = T(r);
  if (t === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
};
export {
  w as ThemeProvider,
  p as useTheme
};
//# sourceMappingURL=index.es48.js.map
