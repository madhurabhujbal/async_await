const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded");
});

Promise.race([ //race will console the first msg that comes instead of waiting for other operations to finish
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
});