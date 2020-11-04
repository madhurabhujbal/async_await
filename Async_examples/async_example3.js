console.log("Start");

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve ({ userEmail: email });
        }, 3000);
    });
}

function getUserVideos(email) {
    console.log("email: " + email);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Title of the video");
        }, 2000);
    });
}

// const user = loginUser("madhu@getmail.com", 12345, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos);
//     });
// });

loginUser("ed", "bumba")
.then(user => getUserVideos(user.userEmail))
.then(videos => videoDetails(videos[0]))
.then(detail => console.log(detail));

console.log("Finish");