// this is a brief introduction of what can be done that is called curried

// uncurried

function ninjaBelt(ninja,beltColor) {
    console.log(`Ninja ${ninja} has earned ${beltColor}!`)
};

ninjaBelt('Devon','black');

function beltNinja(ninja) {
    return function belt(beltColor) {
        console.log(`Ninja ${ninja} has earned ${beltColor}!`)
    }
}

beltNinja("Eileen")('yellow')