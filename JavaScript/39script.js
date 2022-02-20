// filter() method -- take callback function as parameter and callback must return boolean value, and it also create new array and  add that element to that array

const numbers = [1, 2, 3, 6, 4, 8];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers); // created new array and store only that value statify the condition number % 2 === 0
