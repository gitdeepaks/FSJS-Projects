let month = prompt("Enter the month (e.g. January, February, etc.):");
let year = prompt("Enter the year:");

let daysInMonth;

if (month === "February") {
    // Check for leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth = 29;
    } else {
        daysInMonth = 28;
    }
} else if (month === "April" || month === "June" || month === "September" || month === "November") {
    daysInMonth = 30;
} else {
    daysInMonth = 31;
}

console.log("Number of days in " + month + " of " + year + ": " + daysInMonth);
