// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// });

// p.then((message) => {
//     console.log("In then with message: " + message);
// }).catch((message) => {
//     console.log("In catch with message: " + message);
// });

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User left",
                message: ":("
            });
        } else if (userWatchingCatMeme) {
            reject({
                name: "User watching cat memes",
                message: "Something < cat"
            });
        } else {
            resolve("Thumbs up and subscribe");
        }
    });
}

watchTutorialPromise().then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log(error.name + " " + error.message);
});
