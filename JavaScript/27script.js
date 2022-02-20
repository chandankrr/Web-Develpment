// arrow function

const singHappyBirthday = () => {
    console.log("Happy Birthday to you");
}

singHappyBirthday();

// --------------------------------

const isEven = numbs => { // if you passing only one parameter then we can ignore the parenthesis
    if (numbs % 2 === 0)
        return true;
    return false;
}

console.log(isEven(10));

// --------------------------------

const findTarget = (array, target) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === target)
            return i;
    }
    return -1;
}

const myArray = [1, 2, 3, 4, 5, 6,];
const target = 3;
const ans = findTarget(myArray, target);
console.log(ans);