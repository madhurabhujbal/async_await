//Sync code example
function synchronousFunction() {
    console.log("we are in a synchronous function");
    console.log("do some stuff");
}

//Async code example
function callSetTimeout() {
    setTimeout(() => {
        console.log("We are in an asynchrounous timeout");
    }, 2000);
}

console.log("Start synchronous");
synchronousFunction();
console.log("End synchronous");

console.log("Start asynchronous");
callSetTimeout();
console.log("End asynchrounous");