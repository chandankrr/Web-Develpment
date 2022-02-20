// lexical scope

const myVar = "value1";

function myApp() {
    const myVar = "value2";

    function myfunc() {
        // const myVar = "value3";

        const myFunc2 = () => {
            // const myVar = "value4";
            console.log("inside myFunc2", myVar);
        };
        myFunc2();
    }
    console.log(myVar);
    myfunc();
}

myApp();
