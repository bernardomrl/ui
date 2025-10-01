import * as e from "react";
function c(r) {
  const t = e.useRef(r);
  return e.useEffect(() => {
    t.current = r;
  }), e.useMemo(() => (...u) => t.current?.(...u), []);
}
export {
  c as useCallbackRef
};
//# sourceMappingURL=index.es104.js.map
