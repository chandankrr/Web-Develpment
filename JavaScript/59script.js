// improved file 58.script.js

// ! about() and isEighteen() create once and called by all newly created object

const userMethod = {
    about() {
        return `${this.firstName} is ${this.age} years old`;
    },
    isEighteen() {
        return this.age >= 18;
    },
    sing() {
        return "toon na na na la la";
    }
};

function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethod.about;
    user.isEighteen = userMethod.isEighteen;
    return user;
}

const user1 = createUser("ravi", "kumar", 15, "ravi@gmail.com", "nikunj police colony");
const user2 = createUser("chandan", "kumar", 19, "chandan@gmail.com", "nikunj police colony");
const user3 = createUser("neelu", "kumari", 17, "neelu@gmail.com", "nikunj police colony");

console.log(user1);

const aboutUser1 = user1.about();
console.log(aboutUser1);
console.log(user1.isEighteen());