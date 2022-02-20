// function inside a function

const app = () => {
    const myFunc = () => {
        console.log("inside myFunc");
    }
    console.log("inside app");
    myFunc();
}

app(); // we can call inside function only in inside of its parent function otherwise it will not work