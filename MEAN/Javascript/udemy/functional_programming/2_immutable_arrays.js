// immutably adding an object to an object array

const meals = [
    {id: 1, description: 'Breakfast', calories: 420},
    {id: 2, description: 'Lunch', calories: 520},
];

const meal = {id: 3, description: 'Snack', calories: 180};

const updatedMeals = [...meals, meal];
// console.log(updatedMeals);   

// how to immutably alter values in an array?   Use .map()
 
const numbers = [1,2,3];

function double(number) {
    return number * 2;
}

const doubledNumbers = numbers.map(double);
// console.log(doubledNumbers);


function modifyMeal(meal) {
    if (meal.id === 2) {
        return {
            ...meal,
            description: 'Linner'
        };
    }
    return meal;
}

const updateMealDescription = updatedMeals.map(modifyMeal);
// console.log(updateMealDescription);

// how to remove an item from an array in an immutable way?  Use .filter()

const filteredMeals = updatedMeals.filter(function(meal) {
    return meal.id !== 2;
}); 

// console.log(filteredMeals);

const friends = ['Alfred', 'Monik'];

const newFriend = 'Ralf';

const updatedFriends = [...friends, newFriend];

console.log(updatedFriends);

function getLength(friend) {
    return friend.length;
}

const nameLengths = updatedFriends.map(getLength);

console.log(nameLengths);

const filteredFriends = updatedFriends.filter(function(friend) {
    return friend.length < 6;
});

console.log(filteredFriends);

