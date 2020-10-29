//A function that accepts another function as an argument, is called a callback function

setTimeout(() => {
    console.log("Coffee");
}, 3000);
console.log("Tea");
console.log("Eggs");

const names = ['John', 'Mary', 'Bob'];
const greet = names.map(name => `Hello ${name}`);
console.log(greet);