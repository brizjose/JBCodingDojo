const reversedNumbers = [12.87, 12.64, 12.72, 12.75, 12.91, 12.84, 12.87, 12.84, 12.34, 12.48, 12.47, 12.68, 12.46, 12.8, 12.69, 12.65, 12.61, 12.94, 12.73, 12.84, 123.01, 12.96, 13.15, 13.44, 13.19];

const numbers = reversedNumbers.reverse()

function sum(x, y) {
    return x + y;
}

function deviation(mean) {
    return function(ret) {
        return Math.pow(ret - mean, 2);
    }
}

function returns(array) {
    let returns = [];
    for (let i = 0; i < array.length - 1; i++) {
        returns.push(Math.log(array[i+1]/array[i]));
    }
    return returns;
}

const logReturns = returns(reversedNumbers);

const meanReturn = logReturns.reduce(sum) / logReturns.length;

const deviations = logReturns.map(deviation(meanReturn));

const variance = deviations.reduce(sum) / deviations.length;

const standardDeviation = Math.sqrt(variance);

const workDays = 365 - 10 - 52*2; 

const volatility = standardDeviation * Math.sqrt(deviations.length / workDays)

console.log(volatility);
