function meetingsTask(arr) {
let meetings = {};

for (let elements of arr) {
    let [weekDays, name] = elements.split(' ');

    if(meetings.hasOwnProperty(weekDays)) {
        console.log(`Conflict on ${weekDays}!`);
    } else {
        meetings[weekDays] = name;
        console.log(`Scheduled for ${weekDays}`);
    }
}
let entries = Object.entries(meetings)
    for (let [weekDays, name] of entries) {
        console.log(`${weekDays} -> ${name}`);
    }
}
meetingsTask(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])