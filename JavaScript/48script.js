// sets (it is iterable)
// store data
// sets also have its own methods
// no idex-based access
// order is not guaranted
// unique items only (no duplicate allowed)

const numbers = new Set([1, 2, 3, 4, 5]);
console.log(numbers);

const items = ["number1", "number2"];

const oddNumbers = new Set();
oddNumbers.add(1);
oddNumbers.add(3);
oddNumbers.add(5);

// only on will added into set an another will be ingnored
oddNumbers.add(items);
oddNumbers.add(items);
console.log(oddNumbers);

// both will be added into set
numbers.add([10, 20, 30]); // both array are different in memory
numbers.add([10, 20, 30]); // both array are different in memory
console.log(numbers);

// has() -- to check element is present in set or not
console.log(numbers.has(5));

// iterating set
for (let number of numbers) {
    console.log(number);
}

// ---------------- real life example
// id of every user is unique, so to store IDs we can use set 
const IDs = new Set([1, 4, 5, 7, 8, 10]);
console.log(IDs);

const myArray = [1, 2, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
const length = uniqueElements.size;
console.log(length);

console.log(myArray);
