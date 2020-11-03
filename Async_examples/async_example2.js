// //Sync code example

// function otherfunction() {
//     console.log("we are in other function");
//     console.log("do some stuff");
// }

// console.log("Start");
// otherfunction();
// console.log("End");

//Async code example
console.log("Start");

setTimeout(() => {
    console.log("We are in a timeout");
}, 2000);

console.log("End");