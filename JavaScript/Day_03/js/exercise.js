// init variable to hold my name, country, age, isMarried, year
firstName = "Ebube";
lastName = "Aloh";
country = "Nigeria";
city = "Lagos";
age = 29;
isMarried = false;
year = 2024;

// print the variables' Type in the console
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10
console.log(typeof '10' === 10);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log(Boolean(4 > 3));
console.log(Boolean(4 >= 4));
console.log(Boolean(4 === 4));

// Write three JavaScript statement which provide falsy value.
console.log(Boolean(4 < 3));
console.log(Boolean(4 <= 3));
console.log(Boolean(4 !== 4));

// Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length);

// Figure out the result of the following expressions first without using console.log().
// After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

// Use the Date object to do the following activities
// What is the year today?
let date = new Date();
console.log(date.getFullYear());

// What is the month today as a number?
console.log(date.getMonth());

// What is the date today?
console.log(date.getDate());

// What is the day today as a number?
console.log(date.getDay());

// What is the hours now?
console.log(date.getHours());

// What is the minutes now?
console.log(date.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());
