// --falsy value
// 1. false
// 2. undefined
// 3. "" -> empty string
// 4. 0

// let name;
// let name = false;
// let name = "";
// let name = 0;

// --truthy value
// 1. any value except falsy values

let name = "Chandan"
// let name = 1;
// let name = -1;

if (name) {
    console.log("first name is",name);
} else {
    console.log("first name is Rahul");
}