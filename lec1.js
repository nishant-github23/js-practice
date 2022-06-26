//simple conosle logs with different data types
console.log('hello', typeof 'hello');
console.log(1, typeof 1);
console.log(true, typeof true);
console.log(null, typeof null);
console.log([1,2,3]);
console.log({name:'Nishant', surname:'Sharma'} ,typeof {name:'nishant', surname:'sharma'});

//table (Note : input here must be an array or object)
console.table({name:'Nishant' , birthplace : 'Meerut'});

//assert (When some conditon fails : writes a message - Assertion failed :)
console.assert(0>10,"failed");

//warning in yellow 
console.warn('This is a warning');

//To clear console
console.clear();

//To calculate time taken by snippet
console.time();
for(let i=0;i<100;i++){
  //code
}
console.timeEnd();


//log an error
console.error('This is an error');


//group in console
console.group('Group');
console.log('hello');
console.groupEnd();
console.log('hello outside');


//custom console logs
const spacing = '10px';
const style = `padding : ${spacing}; background-color:black; color:white;`;
console.log('%c Custom log',style);