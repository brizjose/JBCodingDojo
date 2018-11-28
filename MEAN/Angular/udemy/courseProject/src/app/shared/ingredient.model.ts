export class Ingredient {
    constructor(public name: string, public amount: number) {}
}


// the above code does exactly what we usually do with OOP, but it is so common that Typescript provides a short way of doing it, as shown.

// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }


