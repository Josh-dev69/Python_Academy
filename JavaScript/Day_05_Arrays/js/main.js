// main.js
import countries from './countries.js';
import webTechs from './web_techs.js';
import shoppingCart from './shopping_cart.js';
import studentAges from './ages.js';

console.log('Countries:', countries);
console.log('Web Technologies:', webTechs);

// working on String as an array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// Step 1: Remove all punctuations
let punctuations = ['.', ','];
let cleanedText = '';
for (let i = 0; i < text.length; i++) {
    if (punctuations.includes(text[i])) {
        text = text.replace(text[i], '');
    }
}

// Step 2: Convert the string to an array
let words = text.split(' ');

// Step 3: Count the number of words in the array
console.log(words);
console.log(words.length);

shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

let Honey = shoppingCart.indexOf('Honey');
shoppingCart.splice(Honey, 1);
console.log(shoppingCart);

let Tea = shoppingCart.indexOf('Tea');

shoppingCart[Tea] = 'Green Tea';
console.log(shoppingCart);

if (countries.includes('Ethiopia')) {
    console.log(`ETHIOPIA`);
} else {
    countries.push('Ethiopia');
}

if (webTechs.includes('Sass')) {
    console.log(`Sass is a CSS preprocess`);
} else {
    webTechs.push('Sass');
}
console.log('Web Technologies:', webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log('Full Stack Tools:', fullStack);

let sortedAge = studentAges.sort();
console.log(sortedAge);

let firstMid = sortedAge[Math.floor(sortedAge.length / 2)];
let secondMid = sortedAge[(Math.floor(sortedAge.length / 2)) + 1]
let median = (firstMid + secondMid) / 2;
console.log('Median Age of the Students is:', median);

let totalAge = 0;
for (let i = 0; i < sortedAge.length; i++){
    totalAge += sortedAge[i];
}
let averageAge = totalAge / sortedAge.length;
console.log('Average Age of the Students is:', averageAge);

/* 
    Find the range of the ages. It is the difference between the oldest and the youngest ages. Since 
    the Student Ages are already sorted, we can get the youngest and oldest ages by getting the first
    and last elements of the sorted array.
*/
let minAge = sortedAge[0];
let maxAge = sortedAge[sortedAge.length - 1];
let range = maxAge - minAge;
console.log('Range of the Student Ages is:', range);
