let a = document;
a =  document.all;
a= document.body;
console.log(a);
Array.from(a).forEach(function(ele) {
    console.log(ele); // will find out issue from video
})

a= document.scripts;
console.log(a);