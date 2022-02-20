// block scope vs function scope

// let and const have block scope
// var has function scope

const myApp = () => {
    if (true) {
        let firstName = "chandan"; // let has block scope so, it is only available in if block
        console.log(firstName);
    }

    if (true) {
        // console.log(firstName); // can't access firstName
    }
    // console.log(firstName); // can't access firstName
} 
myApp();

// ------------------------------------------------------------------------------

// after making using var for firstName is available in function scope all other can use firstName without any error
const myApp2 = () => {
    if (true) {
        var firstName = "chandan"; // let has function scope so, it is avaliable with in the whole function
        console.log(firstName);
    }

    if (true) {
        console.log(firstName); // access firstName
    }
    console.log(firstName); // access firstName
};

myApp2();