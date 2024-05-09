console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."); // The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."); // Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.
console.log(typeof "10" == 10); // false
console.log(parseInt("9.8") == 10); // false
console.log(Math.round("9.8") == 10); // true
console.log("python".includes("on")); // true
console.log("jargon".includes("on")); // true
console.log("I hope this course is not full of jargon".includes("jargon")); // true
console.log(Math.floor(Math.random() * 101)); // random number between 0 and 100
console.log(Math.floor(Math.random() * 256)); // random number between 0 and 255
let js = "JavaScript";
console.log(js.charAt(Math.floor(Math.random() * js.length))); // random character from the string
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
console.log("You cannot end a sentence with because because because is a conjunction".substr(31, 23)); // because because because
console.log("You cannot end a sentence with because because because is a conjunction".substring(31, 54));