class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

// this refers to the what calls the method.  In the example below, this is referring to the button that, when clicked, calls the method addName()
// this also refers to the instance of the object the code is found in
// to prove it, console.log(this) both in the constructor and in the addName() method and you'll see...
// so, this refers to what is executing the code

// with properties, this makes it available within the class, example, this.names
// with functions too, this makes methods available within the class, example, this.addName()

// class NameGenerator {
//     constructor() {
//         const btn = document.querySelector('button');
//         this.names = ['Max', 'Manu', 'Anna'];
//         this.currentName = 0;
//         console.log(this);
//         btn.addEventListener('click', this.addName);
//     }

//     addName() {
//         console.log(this);
//         const name = new NameField(this.names[this.currentName]);
//         this.currentName++;
//         if (this.currentName >= this.names.length) {
//             this.currentName = 0;
//         }
//     }
// }


// to the rescue, .bind()

// 'bind()' tells js what this refers to when we are executing the code.  
// used in the constructor within the button reference, we are binding 'this' context to the constructor, the instance of tthe object, and not the button that calls the method. 
// it is telling js... this, when called by addName, means the class, not the button

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 0;
        console.log(this);
        btn.addEventListener('click', this.addName.bind(this));
    }

    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
            this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();
