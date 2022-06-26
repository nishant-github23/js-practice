//string and template literals
let str= 'JavaScript is awesome';
console.log(str.concat(' - true'));
console.log(str.charAt(12));
console.log((str.indexOf('awesome',2))); // start position i.e. 2 is optional here
console.log(str.indexOf('python'));
console.log(str.lastIndexOf('e'));
console.log(str.substring(2,5));
console.log(str.slice(2,5));

let arrString = 'a,b,c,d,e,f,g,h';
console.log(arrString.split(',',4));  // 4 here is to mention limit or the number of elements to return

console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Template literals using backticks
let firstName = 'Nishant';
let secondName = 'Sharma';
console.log(`my name is ${firstName} ${secondName}`);