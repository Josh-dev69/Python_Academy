// Script that compare two ages input using if...else and log the older age
let age1 = parseInt(prompt("Enter the first age: "));
let age2 = parseInt(prompt("Enter the second age: "));

if (age1 > age2) {
    console.log(`The older age is ${age1}`);
    document.write(`The older age is ${age1}`);
} else {
    console.log(`The older age is ${age2}`);
    document.write(`The older age is ${age2}`);
}

// compare two numbers using tenary operations
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let olderNum = num1 > num2
    ? `${num1} is greater than ${num2}`
    : `${num2} is greater than ${num1}`;

console.log(olderNum)
document.write(`<br>${olderNum}</br>`);

// Check if number is even or odd
let number = parseInt(prompt("Enter a number: "));
let result = number % 2 === 0
    ? `${number} is an even number`
    : `${number} is an odd number`;
console.log(result);
document.write(`<br>${result}</br>`);