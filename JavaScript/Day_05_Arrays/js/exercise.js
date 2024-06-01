const newArr = [];
console.log(newArr);
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.length);
let first = arr[0];
let last = arr[arr.length - 1];
let middle = arr[Math.floor(arr.length / 2)];
console.log(`${first}, ${last}, ${middle}`);

const mixedDataTypes = [1, 'hello', true, null, undefined, Object];
console.log(mixedDataTypes.length);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
let firstComp = itCompanies[0];
let midComp = itCompanies[Math.floor(itCompanies.length / 2)];
let lastComp = itCompanies[itCompanies.length - 1];
console.log(firstComp, midComp, lastComp);

for (let i = 0; i < itCompanies.length; i++) {
    console.log((itCompanies[i]).toUpperCase());
}
// Change array to string
console.log(itCompanies.join(', '));

let search = 'Google';
if (itCompanies.includes(search)) {
    console.log(`${search} is in the list`);
} else {
    console.log(`${search} is not in the list`);
}

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(3, 6));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(0, 7));