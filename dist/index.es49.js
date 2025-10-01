import { jsx as a } from "react/jsx-runtime";
import { useState as d, useEffect as h, createContext as u, useContext as l } from "react";
const T = {
  theme: "system",
  setTheme: () => null
}, r = u(T);
function w({
  children: t,
  defaultTheme: m = "system",
  storageKey: o = "vite-ui-theme"
}) {
  const [s, n] = d(
    () => localStorage.getItem(o) || m
  );
  h(() => {
    const e = window.document.documentElement;
    if (e.classList.remove("light", "dark"), s === "system") {
      const c = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      e.classList.add(c);
      return;
    }
    e.classList.add(s);
  }, [s]);
  const i = {
    theme: s,
    setTheme: (e) => {
      localStorage.setItem(o, e), n(e);
    }
  };
  return /* @__PURE__ */ a(r.Provider, { value: i, children: t });
}
const x = () => {
  const t = l(r);
  if (t === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return t;
};
export {
  w as ThemeProvider,
  x as useTheme
};
//# sourceMappingURL=index.es49.js.map
