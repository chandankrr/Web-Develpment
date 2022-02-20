// bind

// bind return a function and we call it any where it required
// bind is used to bind this with cotext to respected object or this

function detail(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: "Chandan",
    age: 19,
    about: function () {
        console.log(this.firstName, this.age);
    }
};

const user2 = {
    firstName: "Ravi",
    age: 15,
};

const func = detail.bind(user2, "codding", "bach");
func();

const myFunc1 = user1.about.bind(user2);
myFunc1();