const grades = [60,55,80,90,99,92,75,72];

// how do we summarize data from an array?  use .reduce()

function sum(x, y) {
    return x + y;
}

const total = grades.reduce(sum);

console.log(total);

const average = total / grades.length;

console.log(average);

// reduce function first parameter is the accumulator, second is the value that is mixed with it according to what the callback function instructs
function groupByGrade(acc, grade) {
    // destructure acc into key value pairs from a to f with default count of 0
    // reduce function below will initialize this as an empty object, so all grade levels will be at default value, then aggregation will begin 
    const {a = 0, b = 0, c = 0, d = 0, f = 0} = acc;
    if (grade >= 90) {
        return { ...acc, a: a + 1 };
    } else if (grade >= 80) {
        return { ...acc, b: b + 1 };
    } else if (grade >= 70) {
        return { ...acc, c: c + 1 };
    } else if (grade >= 60) {
        return { ...acc, d: d + 1};
    } else {
        return { ...acc, f: f + 1 };
    }
}

// an empty object is passed through the reduce funtion as second parameter, which is taken by the first accumulator value.  Being an empty object, this is the starting point for our grades accumulation
const letterGradeCount = grades.reduce(groupByGrade, {});

console.log(total, average, letterGradeCount);

// exercise

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

function groupByRating(acc, rating) {
    const count = acc[rating] || 0;
    return {...acc, [rating]: count + 1};
}

const reviewCount = reviews.reduce(groupByRating, {});

console.log(reviewCount);

const numbers = [2, 4, 4, 3];
const sumNumbers = numbers.reduce(addUp);
function addUp(acc, n) {
    return acc + n;
}
console.log(sumNumbers);

function groupBy(acc, n) {
    const count = acc[n] || 0;
    return {...acc, [n]: count + 1};
}
const groupedN = numbers.reduce(groupBy, {});

console.log(groupedN);
