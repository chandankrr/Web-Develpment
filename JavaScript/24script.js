// nested destructing

const users = [
    { userId: 1, firstName: "chandan", gender: "male" },
    { userId: 2, firstName: "ravi", gender: "male" },
    { userId: 3, firstName: "neelu", gender: "female" },
];

const [user1, user2, user3] = users;
console.log(user1);

const [{ firstName }, , { gender }] = users; // skipping user2 with , ,
console.log(firstName); // firstname of user1
console.log(gender); //  gender of user3

// array of object
const [
    { firstName: user1firstName, gender: user1gender },
    ,
    { gender: user3gender },
] = users;
console.log(user1firstName);
console.log(user1gender);
console.log(user3gender);
