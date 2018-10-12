//function requires passed object to have at least one parameter called label and does not care about the rest:
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = {
    size: 10,
    label: "Size 10"
};
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = {
    size: 11,
    label: "Size 11"
};
printLabel2(myObj2);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
// after assigning values to them, they cannot be reassigned:
var p1 = { x: 10, y: 20 };
var p2 = { x: 12, y: 14 };
// p1.x = 5;   shows error!
var numy = [1, 2, 3, 4];
var readNumy = numy;
// readNumy[0] = 9; shows an error
console.log(readNumy);
//you can override a read only array to start over:
numy = readNumy;
console.log(readNumy);
