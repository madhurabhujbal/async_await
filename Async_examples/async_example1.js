const hasMeeting = false;
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

const addToCalender = meetingDetails => {
        const calender = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
       return Promise.resolve(calender);
}

meeting
.then(addToCalender)
.then(res => {
    console.log('Meeting scheduled');
    console.log(res);
})
.catch(err => {
    console.log(err.message);
})