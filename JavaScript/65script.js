// improved file 63.script.js using new keyword

// constructor function
function CreateUser(firstName, lastName, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
}

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.isEighteen = function () {
    return this.age >= 18;
};

CreateUser.prototype.sing = function () {
    return "toon na na na la la";
};

const user1 = new CreateUser(
    "ravi",
    "kumar",
    15,
    "ravi@gmail.com",
    "nikunj police colony"
);

console.log(user1);

console.log(user1.about());
console.log(user1.isEighteen());
console.log(user1.sing());

// print key of user1
for (let key in user1) {
    console.log(key); // it will print all the key include proto
}

// print only its key not include proto
for (let key in user1) {
    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}
