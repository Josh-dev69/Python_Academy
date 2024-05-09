let challenge = "30 Days Of JavaScript";
console.log(challenge); // 30 Days Of JavaScript
console.log(challenge.length);  // 21
console.log(challenge.toUpperCase());   // 30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase());   // 30 days of javascript
console.log(challenge.substr(3, 2));    // Da
console.log(challenge.substring(3, 7)); // Days
console.log(challenge.substring(3));    // Days Of JavaScript
console.log(challenge.includes("Script"));  // true
console.log(challenge.split()); // ["30 Days Of JavaScript"]
console.log(challenge.split(" ")); // ["30", "Days", "Of", "JavaScript"]
console.log(challenge.replace("JavaScript", "Python")); // 30 Days Of Python
console.log(challenge.charAt(15));  // S
console.log(challenge.charCodeAt(11));  // 74
console.log(challenge.indexOf("a"));    // 4
console.log(challenge.lastIndexOf("a"));    // 14

challenge1 = "You cannot end a sentence with because because because is a conjunction";
console.log(challenge1.indexOf("because"));    // 31
console.log(challenge1.lastIndexOf("because"));    // 47
console.log(challenge1.search("because"));    // 31
console.log(challenge.trim());   // 30 Days Of JavaScript
console.log(challenge.startsWith("30"));   // true
console.log(challenge.endsWith("JavaScript"));   // true
console.log(challenge1.match(/because/g));   // ["because", "because", "because"]
console.log(challenge.match(/a/g)); // ["a", "a", "a"]
console.log(challenge.match(/s/g)); // ["s"] 
console.log(challenge.concat("30 Days Of ", "Python")) // 30 Days Of JavaScript30 Days Of Python
console.log(challenge.repeat(2));   // 30 Days Of JavaScript30 Days Of JavaScript
console.log(challenge1.replace("because", ""));    // You cannot end a sentence with because  because is a conjunction
console.log(challenge1.replace(/because/g, ""));   // You cannot end a sentence with  is a conjunction