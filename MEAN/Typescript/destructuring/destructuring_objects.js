//object destructuring
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
//create variables t.a and t.b without declaration
var t = {
    a: "Hank",
    b: 12,
    c: "Tank"
};
var a = t.a, b = t.b;
console.log(a);
console.log(b);
//assignment without declaration, needs surrounding ()
(_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b);
console.log(a, b);
//that does not affect t
console.log(t);
//create variable for remaining items
var rex = {
    h: "stomach",
    g: 4,
    j: "paws"
};
var h = rex.h, remaining = __rest(rex, ["h"]);
console.log(h);
console.log(remaining);
//renaming properties
var firstName = t.a;
var tanks = t.b;
var lastName = t.c;
console.log(t);
