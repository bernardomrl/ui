import { DateLib as a } from "./index.es161.js";
function f(t, l, o, r) {
  let e = (r ?? new a(o)).format(t, "PPPP");
  return l?.today && (e = `Today, ${e}`), e;
}
export {
  f as labelGridcell
};
//# sourceMappingURL=index.es191.js.map
