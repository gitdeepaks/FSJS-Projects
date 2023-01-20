let currentDate = new Date();

// What is the year today?
let year = currentDate.getFullYear();
console.log("Year: " + year);

// What is the month today as a number?
let month = currentDate.getMonth();
console.log("Month (as number): " + (month + 1));

// What is the date today?
let date = currentDate.getDate();
console.log("Date: " + date);

// What is the day today as a number?
let day = currentDate.getDay();
console.log("Day (as number): " + day);

// What is the hours now?
let hours = currentDate.getHours();
console.log("Hours: " + hours);

// What is the minutes now?
let minutes = currentDate.getMinutes();
console.log("Minutes: " + minutes);

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let seconds = currentDate.getTime() / 1000;
console.log("Seconds elapsed from January 1, 1970: " + seconds);
