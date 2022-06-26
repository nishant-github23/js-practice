//if else
let age=18
if(age<12){
    console.log('child');
}
else if(age>12 && age<=18){
    console.log('Teenage')
}
else{
    console.log('adult');
}

// let's try some ternay

age>=18?console.log('You can drive'):console.log('You cannot drive');


// while loop

let num =5;
while(num<10){
    console.log(num);
    num++;
}

//do while
let num1 =11;
do(console.log(num1));
while(num1<11);

//switch

let clap=2;
switch(clap){
    case 1: console.log('clap');
    break;
    case 2: console.log('clap clap');
    break;
    default: console.log('no clap');
}

//for in loop in javaScript
let arr = [213,42234,55,35,34,534,645645,6342342]
for(i in  arr){
    console.log(arr[i]);
}

// we can use beak and continue keyword in between loops as required