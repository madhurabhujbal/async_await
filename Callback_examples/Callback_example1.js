//A function that accepts another function as an argument, is called a callback function

setTimeout(() => {
    console.log("Coffee");
}, 3000);
console.log("Tea");
console.log("Eggs");