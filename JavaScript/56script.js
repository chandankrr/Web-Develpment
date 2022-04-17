// arrow function

// arrow function does not have this it take this from its surroundings like one level up
// in user1 arrow function takes its this form one level up that is window object

const user1 = {
  firstName: "chandan",
  age: 8,
  about: () => {
    // console.log(this);
    console.log(this.firstName, this.age);
  },
};

user1.about(); // print undefined undefined
