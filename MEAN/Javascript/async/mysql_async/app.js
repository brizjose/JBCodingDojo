const color = require('colors');
const db = require('./mysql');  // with promisify
const database = require('./database');  // as object

const date = new Date([2018, 09, 21]);

const queryDate = (() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [year, month, day].join('-');
})();

const queryScript = "SELECT cash_buyer, 3_month_mean as month_3, dec1_mean, dec2_mean, dec3_mean FROM primary_aluminium WHERE date = '"+ queryDate + "'";

// console.log(color.white(queryDate));
// console.log(color.white(queryScript));

const prices = function() {
    db.query(queryScript, function(err, result) {
    if (err) console.error(color.red(err.message))
    // console.log(color.yellow(result[0]));
    const {cash_buyer, month_3, dec1, dec2, dec3} = result[0];
    return result[0];
});
}

const settlement = prices().then(result);

// async function settle() {
//     try {
//         const settle = await db.query(queryScript);
//         return settle;
//     } catch (err) {
//         console.error(color.red(err.message))
//     }
// };

// const settlement = settle();

settlement.then(function(value) {
    console.log(value);
});

console.log(settlement);

