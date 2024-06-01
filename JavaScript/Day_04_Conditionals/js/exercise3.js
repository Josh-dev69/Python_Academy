// A program that tells the number of days in a month, Consider leap years
let year = prompt("Enter the year: ");
let month = prompt("Enter the month: ").toLowerCase();

if ((month === "january") || (month === "march") || (month === "may") || (month === "july") || (month === "august") || (month === "october") || (month === "december")) {
    console.log(`There are 31 days in ${month} for the year ${year}`);
} else if ((month === "april") || (month === "june") || (month === "september") || (month === "november")) {
    console.log(`There are 30 days in ${month} for the year ${year}`);
} else if (month === "february") {
    if ((year % 400 === 0) || (year % 100 !== 0) && (year % 4 === 0)) {
        console.log(`There are 29 days in ${month} for the year ${year}`);
    } else {
        console.log(`There are 28 days in ${month} for the year ${year}`);
    }
} else {
    console.log(`Invalid Month/Year`);
}

const numbers = [1, 2, 3, 4, 5]
numbers.splice(3, 3, 9, 10, 12)
console.log(numbers)            // remove the first item