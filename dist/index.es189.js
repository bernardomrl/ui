import { DateLib as n } from "./index.es161.js";
function r(a, t, l, o) {
  let e = (o ?? new n(l)).format(a, "PPPP");
  return t.today && (e = `Today, ${e}`), t.selected && (e = `${e}, selected`), e;
}
const c = r;
export {
  c as labelDay,
  r as labelDayButton
};
//# sourceMappingURL=index.es189.js.map
