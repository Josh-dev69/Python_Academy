sentence = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(sentence.match(/love/gi).length); // 3

sentence2 = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence2.match(/because/gi).length); // 3

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanedSentence = sentence3.replace(/[^\w\s]/g, ''); // remove all special characters
console.log(cleanedSentence);
