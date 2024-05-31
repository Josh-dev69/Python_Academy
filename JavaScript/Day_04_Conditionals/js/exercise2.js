// Script to grade a student based on their score
let score = parseInt(prompt("Enter your score: "));
let grade = score > 100
    ? "Invalid score"
    :score >= 80
    ? "A"
    : score >= 70
    ? "B"
    : score >= 60
    ? "C"
    : score >= 50
    ? "D"
    : "F";
console.log(`Your ${score} is ${grade}`);
document.write(`<br>Your ${score} is ${grade}</br>`);

// Check if the season is summer, winter, autumn or spring
let month = prompt("Enter the month: ").toLowerCase();
if (month === "december" || month === "january" || month === "february") {
    console.log("Winter");
} else if (month === "march" || month === "april" || month === "may") {
    console.log("Spring");
} else if (month === "june" || month === "july" || month === "august") {
    console.log("Summer");
} else if (month === "september" || month === "october" || month === "november") {
    console.log("Autumn");
} else {
    console.log("Invalid month");
}

// Check if day is a weekday or weekend
let day = prompt("Enter the day: ").toLowerCase();
if (day === "saturday" || day === "sunday") {
    console.log("Weekend");
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    console.log("Weekday");
} else {
    console.log("Invalid day");
}