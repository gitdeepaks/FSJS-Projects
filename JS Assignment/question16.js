let month = prompt("Enter the month (e.g. January, February, etc.):");

if (month === "September" || month === "October" || month === "November") {
    console.log("The season is Autumn");
} else if (month === "December" || month === "January" || month === "February") {
    console.log("The season is Winter");
} else if (month === "March" || month === "April" || month === "May") {
    console.log("The season is Spring");
} else if (month === "June" || month === "July" || month === "August") {
    console.log("The season is Summer");
} else {
    console.log("Invalid month entered. Please enter a valid month name.");
}
