// a function -- means passing a function in a function as argument and calling it inside that function

function myfunc2(name) {
    console.log("inside myFunc 2");
    console.log(`your name is ${name}`);
}

function myFunc(a) {
    console.log(a);
    console.log("hello there I  am a function and I  can..");
    a("chandan");
}

myFunc(myfunc2);