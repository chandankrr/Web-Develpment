// new keyword
function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function () {
    console.log(this.firstName, this.age);
}

const user1 = new createUser("chandan", 19);

// new keyword
// 1.) create empty Object, this = {}
// 2.) return this
// 3.) also perform the proto or we can say chainnig
// const user1 = Object.create(createUser.prototype);

user1.about();