// static method
// directly call from class name

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // static method
    static classInfo() {
        console.log("calling static method");
    }

    // static property
    static desc = "static property";

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("chandan", "kumar");
// person1.classInfo(); // gives error
Person.classInfo();

// console.log(person1.desc); // undefined
console.log(Person.desc);

