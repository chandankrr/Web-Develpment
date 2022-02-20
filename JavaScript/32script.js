// default parameters

// old way to pass default parametr
// function addTwo(a, b) {
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a + b;
// }

// new way
const addTwo = (a, b = 0) => {
    return a + b;
};

const ans = addTwo(10); // not passing second parameter
console.log(ans);
