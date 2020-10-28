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

function watchTutorialCallBack(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: "User left",
            message: ":("
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: "User watching cat memes",
            message: "Something < cat"
        });
    } else {
        callback("Thumbs up and subscribe");
    }
}

watchTutorialCallBack((message) => {
    console.log("Success: " + message);
}, (error) => {
    console.log(error.name + " " + error.message);
});