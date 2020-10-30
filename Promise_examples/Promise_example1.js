let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

p.then((message) => {
    console.log("In then with message: " + message);
}).catch((message) => {
    console.log("In catch with message: " + message);
});

