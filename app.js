




const Job = require("./models/job");
const newJob = new Job();
newJob.gender = 'Male';

newJob.save((err, myjob) => {
    if(err) {
        console.log(err)
    } else {
        myjob.code = '1234';
        myjob.save((err, mysavedjob) => {

            console.log(mysavedjob);

        })
    }
    
})