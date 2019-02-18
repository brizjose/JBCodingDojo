const performance = require("perf_hooks").performance;

function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n; j >= 0; j--) {
    console.log(j);
  }
}

let t1 = performance.now();
let tot = countUpAndDown(10)
let t2 = performance.now();

console.log(tot);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
