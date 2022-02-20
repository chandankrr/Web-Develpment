// spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];
console.log(newArray);

const str = [..."abcdef"];
console.log(str);

const num = [..."0123456789"];
console.log(num);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2"
};

const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4"
};

const newObj = { ...obj1, ...obj2, key50: "value50" };
console.log(newObj);

const obj = { ..."abcde" }; // index will became key
console.log(obj);

const obj3 = { ...["apple", "orange", "grapes"] }; // index of array become key
console.log(obj3);