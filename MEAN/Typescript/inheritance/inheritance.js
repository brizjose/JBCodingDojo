var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class implements an interface 
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student = new Student('Bob', 5);
console.log(student);
//class inheritance with a default value
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        if (age === void 0) { age = 18; }
        return _super.call(this, name, age) || this;
    }
    return Senior;
}(Student));
var tammy = new Senior('Tammy');
console.log(tammy);
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        if (age === void 0) { age = 15; }
        return _super.call(this, name, age) || this;
    }
    Junior.prototype.sayHello = function (name) {
        console.log("Hello " + name + ", from " + this.name);
    };
    return Junior;
}(Student));
var george = new Junior('Geo');
george.sayHello(tammy.name);
