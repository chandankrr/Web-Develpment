// call apply bind

// call - is used to call global function wrt to any object or we can say used to call the borrowed function of one user by another user

// apply is exact same as call only difference is, the argument to pass at call method instend of this we can add argument in array.

function about(hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName: "Chandan",
    age: 19,

    // moving about function to global

    // about: function (hobby, favMusician) {
    //     console.log(this.firstName, this.age, hobby, favMusician);
    // }
};

const user2 = {
    firstName: "Ravi",
    age: 15,
};

// uncomment about function of user1 obj and comment globally about methd

// user1.about("guitar", "moazrt"); // calling about function of user1
// user1.about.call(user1, "guitar", "alka");
// user1.about.apply(user1, ["guitar", "neha"])

// ---------------

about.call(user1, "guitar", "moazrt");
about.apply(user1, ["guitar", "Lata Mangesker"]);

// calling about method of user1 for user2
// user1.about.call(user2, "guitar", "moazrt");
// user1.about.apply(user2, ["guitar", "chandan"])

// ----------------

about.call(user2, "cricket", "Sonu");
about.apply(user2, ["football", "Arijit"]);

// user1.about.call() // print undefined