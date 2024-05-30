// A script that prompt the user to enter base and height of the triangle
// and calculate the area of the triangle (area = 0.5 * base * height). 
let base = prompt("Enter the base of the triangle: ");
let height = prompt("Enter the height of the triangle: ");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);
document.write(`The area of the triangle is ${area}`);

// A script that prompt the user to enter side a, side b, and side c of the triangle
// and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt("Enter side a: ");
let sideB = prompt("Enter side b: ");
let sideC = prompt("Enter side c: ");
let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The perimeter of the triangle with sides ${sideA}, ${sideB} and ${sideC} is ${perimeter}`);
document.write(`<br>The perimeter of the triangle with sides ${sideA}, ${sideB} and ${sideC} is ${perimeter}`);

// A script that prompt the user to enter the length and width of a rectangle
// and calculate the area of the rectangle (area = length * width)
let length = prompt("Enter the length of the rectangle: ");
let width = prompt("Enter the width of the rectangle: ");
let areaRectangle = length * width;
console.log(`The area of the rectangle is ${areaRectangle}`);
document.write(`<br>The area of the rectangle is ${areaRectangle}`);

// A script that calculate the area and circumference of a circle
// where area = pi*r**2 and circumference = 2*pi*r
let radius = prompt("Enter the radius of the circle: ");
let pi = Math.PI;
let areaCircle = pi * radius ** 2;
let circumference = 2 * pi * radius;
console.log(`The area of the circle is ${areaCircle}`);
document.write(`<br>The area of the circle is ${areaCircle}`);
console.log(`The circumference of the circle is ${circumference}`);
document.write(`<br>The circumference of the circle is ${circumference}`);

// A script that prompt the user to enter the temperature in Celsius
// and convert the temperature to Fahrenheit (F = C * 9/5 + 32)
let celsius = prompt("Enter the temperature in Celsius: ");
let fahrenheit = celsius * 9 / 5 + 32;
console.log(`The temperature in Fahrenheit is ${fahrenheit}`);
document.write(`<br>The temperature in Fahrenheit is ${fahrenheit}`);

// A script that prompt the user to enter the temperature in Fahrenheit
// and convert the temperature to Celsius (C = (F - 32) * 5/9)
let fahrenheitTemp = prompt("Enter the temperature in Fahrenheit: ");
let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
console.log(`The temperature in Celsius is ${celsiusTemp}`);
document.write(`<br>The temperature in Celsius is ${celsiusTemp}`);

// A script that prompt the user to enter the number of hours and rate per hour
// and calculate the total pay
let hours = prompt("Enter the number of hours: ");
let rate = prompt("Enter the rate per hour: ");
let totalPay = hours * rate;
console.log(`The total pay is ${totalPay}`);
document.write(`<br>The total pay is ${totalPay}`);

// If the length of your name is greater than 7
// alert your name is long else alert your name is short
let userName = prompt("Enter your name: ");
if (userName.length > 7) {
    alert("Your name is long");
}