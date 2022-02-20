// function returning function -- means defininng a function inside a function and return that function

// function myFunc() {
//     function hello() {
//         console.log("hello world!");
//     }
//     return hello;
// }

// const ans = myFunc(); // here ans become function
// console.log(ans);
// ans()

// ------------------------------------------

// function myFunc() {
//     function hello() {
//         return "a"; // returning a string
//     }
//     return hello;
// }


// do same as adjacent upper function does
function myFunc() {
    return function hello() {
        return "a";
    }
}

const ans = myFunc(); // ans become a hello function
console.log(ans()); // printing the return value of hello()

// * Note: in javascript we can accept a function as argument and we can also return the same function in that function only and that function called as higher order function

