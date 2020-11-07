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

const user = loginUser("madhu@getmail.com", 12345, user => { //Code with callback
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
    });
});

// loginUser("ed", "bumba")
// .then(user => getUserVideos(user.userEmail))
// .then(videos => videoDetails(videos[0]))
// .then(detail => console.log(detail));

async function displayUser() { //Code with async-await
    const loggedUser = await loginUser("ed", 12345);
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDetails(videos[0]);
    console.log(detail);
}
displayUser();

const youtube = new Promise(resolve => { //Code with Promise
    setTimeout(() => {
        console.log("Getting stuff from youtube");
        resolve( {videos: [1, 2, 3, 4, 5]} );
    }, 2000);
});

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log("Getting stuff from facebook");
        resolve( {user: "Name"} );
    }, 6000);
});

Promise.all([youtube, fb]).then(result => console.log(result));