// fill()
// value, startIndex, endIndex
// endIndex --> exculsive
// change will effect the original array

const myArray = new Array(10).fill(0);
console.log(myArray);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.fill(5, 0, arr.length);
console.log(arr);

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
newArr.fill(-1, 2, 8);
console.log(newArr);