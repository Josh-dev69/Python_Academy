/* 
    Using prompt get the year the user was born and if the user is 18 or
    above allow the user to drive
    if not tell the user to wait a certain amount of years.
*/
let yearBorn = prompt("Enter the year you were born: ");
let currentYear = new Date().getFullYear();
let age = currentYear - yearBorn;
if (age >= 18) {
    alert("You are old enough to drive");
}
else {
    let yearsToWait = 18 - age;
    alert(`You need to wait for ${yearsToWait} years to drive`);
}

/*
    Create a human readable time format using the Date time object
        YYYY-MM-DD HH:mm
        DD-MM-YYYY HH:mm
        DD/MM/YYYY HH:mm
*/
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let formattedDate1 = `${year}-${month}-${day} ${hours}:${minutes}`;
let formattedDate2 = `${day}-${month}-${year} ${hours}:${minutes}`;
let formattedDate3 = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log(formattedDate1);
console.log(formattedDate2);
console.log(formattedDate3);
document.write(`<br>${formattedDate1}`);
document.write(`<br>${formattedDate2}`);
document.write(`<br>${formattedDate3}`);

/*
    Create a human readable time format using the Date time object
        1. 3 letter month name, YYYY
        2. Full month name DD, YYYY
*/
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = monthNames[date.getMonth()];
let formattedDate4 = `${day} ${monthName.substring(0, 3)}, ${year}`;
let formattedDate5 = `${monthName} ${day}, ${year}`;
console.log(formattedDate4);
console.log(formattedDate5);
document.write(`<br>${formattedDate4}`);
document.write(`<br>${formattedDate5}`);

/*
    Write a script that prompt the user to enter a number and
    check if the number is even or odd
*/
let number = prompt("Enter a number: ");
if (number % 2 === 0) {
    alert("The number is even");
}
else {
    alert("The number is odd");
}

/*
    Create a human readable time format using the Date time object. The hour and the minute
    should be all the time two digits(7 hours should be 07 and 5 minutes should be 05)
*/
let formattedHours = hours < 10 ? `0${hours}` : hours;
let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
let formattedDate6 = `${day}-0${month}-${year} ${formattedHours}:${formattedMinutes}`;
console.log(formattedDate6);
document.write(`<br>${formattedDate6}`);
