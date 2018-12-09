// spread opearator

const children = {
    first: 'Helen',
    second: 'Mikel'
};

console.log(children);

const family = {
    ...children,
    spouse: 'Johi',
};

console.log(family);

// updating parameter values

const meal = {
    id: 1,
    descr: 'breakfast',
};

const updatedMeal = {
    ...meal,
    descr: 'brunch',
    cal: 600,
};

console.log('meal ' + Object.entries(meal), 'updated ' + Object.entries(updatedMeal));

// destructuring

const { id, descr, cal } = updatedMeal;
console.log(id, descr, cal);

const { spouse, ...kids } = family;
console.log(spouse);
console.log(kids);
console.log(spouse, kids);

// exercise

const food = {
    description: 'dinner'
};

const foodInfo = {
    ...food,
    calories: 200
};

console.log(foodInfo);

const foodUpdate = {
    ...foodInfo, 
    calories: foodInfo.calories + 100
}

console.log(foodUpdate);

const { description, calories } = foodUpdate;
console.log(description);