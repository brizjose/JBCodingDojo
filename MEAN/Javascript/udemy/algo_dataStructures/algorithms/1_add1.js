const performance = require('perf_hooks').performance;

function addUpTo(n) {
    total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

let t1 = performance.now();
tot = addUpTo(100);
let t2 = performance.now();

console.log(tot);
console.log(`Time elapsed: ${(t2 - t1)/1000} seconds`);