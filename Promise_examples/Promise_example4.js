const hasMeeting = true;
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: 'Marketing Meeting',
            location: 'Skype',
            time: '1:00 PM'
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled'));
    }
});

meeting
.then(res => {
    console.log('Meeting scheduled');
    console.log(res);
})
.catch(err => {
    console.log(err.message);
})