import { s as u } from "./say-hello-CuUkh_Ue.js";
const i = (n) => {
    const o = document.getElementById("last");
    o.textContent = `Goodbye ${n}`;
  },
  e = [];
for (let n = 0; n < 256; ++n) e.push((n + 256).toString(16).slice(1));
function s(n, o = 0) {
  return (
    e[n[o + 0]] +
    e[n[o + 1]] +
    e[n[o + 2]] +
    e[n[o + 3]] +
    "-" +
    e[n[o + 4]] +
    e[n[o + 5]] +
    "-" +
    e[n[o + 6]] +
    e[n[o + 7]] +
    "-" +
    e[n[o + 8]] +
    e[n[o + 9]] +
    "-" +
    e[n[o + 10]] +
    e[n[o + 11]] +
    e[n[o + 12]] +
    e[n[o + 13]] +
    e[n[o + 14]] +
    e[n[o + 15]]
  ).toLowerCase();
}
let c;
const m = new Uint8Array(16);
function r() {
  if (!c) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    c = crypto.getRandomValues.bind(crypto);
  }
  return c(m);
}
const y =
    typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  l = { randomUUID: y };
function g(n, o, d) {
  n = n || {};
  const t = n.random ?? n.rng?.() ?? r();
  if (t.length < 16) throw new Error("Random bytes length must be >= 16");
  return (t[6] = (t[6] & 15) | 64), (t[8] = (t[8] & 63) | 128), s(t);
}
function a(n, o, d) {
  return l.randomUUID && !n ? l.randomUUID() : g(n);
}
const p = "John Doe",
  U = 30,
  b = "New York",
  h = "Hello, This is form text file";
console.info("Hello Vite!");
u("Farden Ramzy");
i("Farden Ramzy");
console.log(a());
console.log(p);
console.log(U);
console.log(b);
console.log(h);
