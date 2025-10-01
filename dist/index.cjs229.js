"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,a)=>a?a.toUpperCase():o.toLowerCase()),n=t=>{const e=r(t);return e.charAt(0).toUpperCase()+e.slice(1)},c=(...t)=>t.filter((e,o,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===o).join(" ").trim(),l=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};exports.hasA11yProp=l;exports.mergeClasses=c;exports.toCamelCase=r;exports.toKebabCase=s;exports.toPascalCase=n;
//# sourceMappingURL=index.cjs229.js.map
