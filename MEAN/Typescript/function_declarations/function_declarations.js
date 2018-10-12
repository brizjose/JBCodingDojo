//with default property
function objectInit(theObject) {
    var a = theObject.a, _a = theObject.b, b = _a === void 0 ? 1001 : _a;
}
var baby = objectInit({ a: "cute" });
console.log(baby);
