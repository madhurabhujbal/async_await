console.log("Start");

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log("Now we have the data");
        callback ({ userEmail: email });
    }, 3000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(["video1", "video2", "video3"]);
    }, 2000);
}

const user = loginUser("madhu@getmail.com", 12345, user => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
    });
});

console.log("Finish");