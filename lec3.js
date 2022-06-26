//Type conversion in js ->  explicit and implicit conversion


// Explicit conversion:

console.log('1 - number conversion');
console.log(Number('100'));
console.log(Number(false));
console.log(Number(' '));
console.log(Number('hello'));
console.log(Number(null));
console.log(Number(undefined));


console.log(' ');
console.log('2- Boolean Conversion => NaN , 0 , undefined and null are false coversion else everything is true');
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));

console.log(' ');
console.log('3 - string conversion');
console.log(String(100));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String([1,2,3]));

console.log(' ');
console.log('4 - parseInt and parseFlaot => number in string form to be start with number else will get NaN');
console.log(parseInt('$400'));
console.log(parseInt('400'));
console.log(parseFloat('$50.43'));
console.log(parseFloat('50.13'));
console.log(parseFloat(undefined));
console.log(parseInt([1,2,3]));
console.log(parseFloat([1,2,3]));

console.log('');
console.log('implicit conversion');
console.log('1- Conversion to string using concatenation');
console.log('3'+4);
console.log('9'+true);
console.log('0'+null);


console.log('2 - conversion to number');
console.log('4'-'4');
console.log('4'*5);
console.log('10'/2);
console.log('10'%2);

console.log('3 - Boolean conversion to number');
console.log('5'-true);
console.log(3+false);
console.log(4+null);  // null will work as zero
console.log(4-undefined); // output will be NaN





