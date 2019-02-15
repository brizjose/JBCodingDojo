const performance = require("perf_hooks").performance;

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      return (i, j);
    }
  }
}

let t1 = performance.now();
let tot = printAllPairs(100);
let t2 = performance.now();

// console.log(tot);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
