// rest paramerters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`); // c is array and storing all the rest parameter
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// ------------------------------------------------------------
// question - sum all parameter(variable parameter)
const sumAll = (...paras) => {
    let sum = 0;
    for (let para of paras) {
        sum += para;
    }
    console.log(sum);
}

sumAll(1,323,43,545,56,757,42,45,56,67,87,54,32,43,654)