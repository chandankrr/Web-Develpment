// clone using Object.assign

const obj1 = {
    key1: "value1",
    key2: "value2"
}
console.log(obj1);

obj1.key3 = "valu3";
console.log(obj1);


const obj2 = obj1 // obj2 only referencing to obj1 any change made in obj1 is also reflect in obj2
console.log(obj2);

// how to clone or copy object into other object
// spread operator
const obj3 = { ...obj1 }
console.log(obj3);

obj3.key4 = "value4";
console.log(obj3);

// using Object.assign
const obj4 = Object.assign({}, obj1);
console.log(obj4);

obj4.key5 = "value5";
console.log(obj4);