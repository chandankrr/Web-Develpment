// improved file 59.script.js using proto and chaining

const userMethod = {
    about() {
        return `${this.firstName} is ${this.age} years old`;
    },
    isEighteen() {
        return this.age >= 18;
    },
    sing() {
        return "toon na na na la la";
    },
};

// using proto chaining in this function
function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(userMethod);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

const user1 = createUser("ravi", "kumar", 15, "ravi@gmail.com", "nikunj police colony");

console.log(user1);

const aboutUser1 = user1.about();
console.log(aboutUser1);
console.log(user1.isEighteen());

console.log(user1.__proto__);