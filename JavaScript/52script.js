// methods - function inside object

const person = {
    firstName: "Chandan",
    age: 19,
    about: function () {
        console.log(`person name is ${this.firstName} and age is ${this.age}`); // this actually point to that object which is calling that function
    }
};

person.about();

// -----------------------------

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Payal",
    age: 13,
    about: personInfo
}

const person2 = {
    firstName: "Swati",
    age: 25,
    about: personInfo
}

const person3 = {
    firstName: "Lovely",
    age: 17,
    about: personInfo
}

console.log(personInfo);
personInfo();
person1.about();
person2.about();
person3.about();