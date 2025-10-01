function i(n, t) {
  return typeof n == "function" ? n(t) : n && (n.current = t), n;
}
export {
  i as assignRef
};
//# sourceMappingURL=index.es511.js.map
