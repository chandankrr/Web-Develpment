// object destructing

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir"
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// shortcut to do same
const { bandName, famousSong } = band;
console.log(bandName, famousSong);

const { bandName: var1, famousSong: var2, ...restProps } = band;
console.log(var1, var2);

console.log(restProps);