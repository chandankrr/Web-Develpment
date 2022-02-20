// iterables
// jispe ham for of loop laga sakte hai
// string, array, sets, maps are iterable
// objects are not itereable

const firstName = "Chandan";
for (let char of firstName) {
    console.log(char);
}

const items = ["item1", "item2", "item3"];
for (let item of items) {
    console.log(item);
}

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example: string

const lastName = "Chandan";
console.log(lastName.length);
console.log(lastName[1]);