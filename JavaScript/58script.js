// const user1 = {
//     firstName: "chandan",
//     lastName: "kumar",
//     email: "chandankrr.91@gmail.com",
//     age: 19,
//     address: "Nikunj Police Colony, near AIIMS Patna",
//     about() {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     isEighteen() {
//         return this.age >= 18;
//     },
// };

// -------------------------------------------------------

// 1.) function (that function create object)
// 2.) ass key value pair
// 3.) object ko return kargea

function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old`;
    };

    user.isEighteen = function () {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("ravi", "kumar", 15, "ravi@gmail.com", "nikunj police colony");

console.log(user1);

// ! for every newly created user object about() and isEighteen() call again and again

const aboutUser1 = user1.about();
console.log(aboutUser1);
console.log(user1.isEighteen());