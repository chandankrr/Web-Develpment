// class are fake in js

// improved file 65.script.js using class
// internally class work like prototype
class CreateUser {
    constructor(firstName, lastName, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
    }

    about() {
        return `${this.firstName} is ${this.age} years old`;
    }

    isEighteen() {
        return this.age >= 18;
    }

    sing() {
        return "toon na na na la la";
    }
}

const user1 = new CreateUser(
    "ravi",
    "kumar",
    15,
    "ravi@gmail.com",
    "nikunj police colony"
);

console.log(user1);

console.log(user1.firstName);

console.log(user1.about());
console.log(user1.isEighteen());
console.log(user1.sing());

// ---------------
console.log(Object.getPrototypeOf(user1));
