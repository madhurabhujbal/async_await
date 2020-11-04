console.log("Start");

function loginUser(email, password) {
    setTimeout(() => {
        console.log("Now we have the data");
        return { userEmail: email }
    }, 2000);
}

const user = loginUser("madhu@getmail.com", 12345);
console.log(user);

console.log("Finish");