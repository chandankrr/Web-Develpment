// function declaration

function singHappyBirthday() {
    console.log("Happy Birthday to you .....");
}

singHappyBirthday();
singHappyBirthday();
singHappyBirthday();


// ------------------------------

function twoPlusFour() {
    return 2 + 4;
}

console.log(twoPlusFour());

// ------------------------------

function sum(numb1, numb2) {
    return numb1 + numb2;
}

const ans = sum(10, 20);
console.log(ans);

// ------------------------------

function findTarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target)
            return i;
    }
    return -1;
}

const myArray = [1, 13, 43, 53, 532, 100, 777];
const target = 43;
const result = findTarget(myArray, target);
console.log(result);
