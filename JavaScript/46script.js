// splice() -- use to delete or insert element individually as well together
// argument of splice method
// {startIndex}, {no. of item to be deleted}, {items to be inserted}


// delete
const myArray = ["item1", "items2", "item3"];

const deletedItems = myArray.splice(1, 2); // spice method also return the deleted items
console.log(deletedItems);
console.log(myArray);

// insert
const arr = ["item1", "items2", "item3"];
arr.splice(1,0,"inserted item1", "inserted item2");
console.log(arr);

// insert and delete together
const newArr = ["item1", "items2", "item3"];

const deletedNewArr = newArr.splice(1,2,"inserted item1");
console.log(deletedNewArr);
console.log(newArr
);