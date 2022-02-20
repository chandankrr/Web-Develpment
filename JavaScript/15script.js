const fruits = ["apple", "banana", "grapes", "orange"];

// for of loop
for(let fruit of fruits){
    console.log(fruit);
}

// for in loop
for (let index in fruits) {
    console.log(fruits[index], index);
}
