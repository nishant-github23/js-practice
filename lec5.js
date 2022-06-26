//arrays and objects

// syntax to create an empty array
let arr= new Array();
let arr1=[];
console.log(typeof arr);

//acess array element
let elem = ['first', 'second', 'third'];
console.log(elem[0]);
console.log(elem[1]);
console.log(elem[elem.length-1]);

console.log('length of array '+elem.length);
console.log('index of second '+elem.indexOf('second'));

let nums = [2721,22,32,11,12,23,45]; //must know:  sort as lexographical
console.log(nums.sort());
console.log(nums.reverse());


let alpha =['a','b','c'];
let numeric = [1,2,3,4];
console.log(alpha.concat(numeric));
alpha.push(1);
console.log(alpha);
alpha.pop(); //remove from last
console.log(alpha);

alpha.shift();//remove from start
console.log(alpha);
alpha.unshift('d'); //adding d at first index shifting others by 1 index each
console.log(alpha);
alpha.splice(1,1);
console.log(alpha);


// objects

//create empty object

let myobj = new Object();
let user = {};
user = {
    name:'Nishant',
    company:'Epam',
    year:2022,
};


//access element using dot noation
console.log(user.name);
console.log(user.company);
console.log(user.year);

user.year =207834; // you can change value assigned like this

//access using array brackets
console.log(user['name'],user['company'],user['year']);