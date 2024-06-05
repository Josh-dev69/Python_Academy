//for (let i = 0; i < 11; i++) {
//    console.log(i);
//}

//let i = 0;
//while (i < 11) {
//    console.log(i);
//    i++;
//}

//let i = 0;
//do {
//    console.log(i);
//    i++;
//} while (i < 11);

//for (let i = 10; i >= 0; i--) {
//    console.log(i);
//}

//let i = 10;
//while (i >= 0) {
//    console.log(i);
//    i--;
//}

//let i = 10;
//do {
//    console.log(i);
//    i--;
//} while (i >= 0);

//let n = parseInt(prompt("Enter the value for n: "));
//for (let i = 0; i <= n; i++) {
//    console.log(i);
//}

//let n = parseInt(prompt("Enter the value for n: "));
//for (let i = 1; i <= n; i++) {
//    console.log('#'.repeat(i));
//}

//let n = parseInt(prompt("Enter the value for n: "));
//for (let i = 1; i <= n; i++) {
//    console.log(`${i} * ${i} = ${i * i}`);
//}

//let n = parseInt(prompt("Enter the value for n: "));
//console.log("i\t\ti^2\t\ti^3");
//for (let i = 0; i <= n; i++) {
//    console.log(`${i}\t\t${i**2}\t\t${i**3}`);
//}

//console.log("Even numbers ranging from 0 to 100");
//for (let i = 0; i <= 100; i++) {
//    if (i % 2 === 0) {
//        console.log(i);
//    }
//}

//console.log("Odd numbers ranging from 0 to 100");
//for (let i = 0; i <= 100; i++) {
//    if (i % 2 !== 0) {
//        console.log(i);
//    }
//}

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else if (i % 2 !== 0) {
        sumOdd += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)