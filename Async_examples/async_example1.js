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

const addToCalender = meetingDetails => {
        const calender = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
       return Promise.resolve(calender);
}

async function myMeeting() {
    try{
        const meetingDetails = await meeting;
        const message = await addToCalender(meetingDetails);
        console.log(message);
    }
    catch(err){
        console.log(err.message);
    }
}

myMeeting();