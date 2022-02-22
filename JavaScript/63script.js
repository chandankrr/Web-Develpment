// improved file 61.script.js using prototype

function createUser(firstName, lastName, email, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    return user;
}

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.isEighteen = function () {
    return this.age >= 18;
};

createUser.prototype.sing = function () {
    return "toon na na na la la";
};

const user1 = createUser("ravi", "kumar", 15, "ravi@gmail.com", "nikunj police colony");

console.log(user1);

console.log(user1.about());
console.log(user1.isEighteen());
console.log(user1.sing());
