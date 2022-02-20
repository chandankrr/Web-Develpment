// short hand to create a method inside a object

const user1 = {
    firstName: "chandan",
    age: 8,
    about() {
        console.log(this.firstName, this.age);
    },
};

user1.about();
