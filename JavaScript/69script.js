// getter and setters

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // fullName() {
    //     return `${this.firstName} ${this.lastName}`
    // }

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // changing name
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // setter 
    set fullName(fullName) {
        // split fullname and store 
        // ["payal", "sharma"]
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("chandan", "kumar", 19);

// console.log(person1.fullName()); // function
console.log(person1.fullName); // using as property but internally it calling the method

// -------------

console.log(person1.firstName);
console.log(person1.lastName);

// changing name
person1.setName("ravi", "singh");
person1.age = 15;
// printing after changes
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);

// --------------- 
// shetter
person1.fullName = "payal sharma";
console.log(person1.firstName);
console.log(person1.lastName);
