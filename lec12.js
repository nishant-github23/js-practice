// creating , removing and replacing element in dom using js
var element = document.createElement("name");
let div = document.createElement('div');
var paragraph = document.createElement('p');

var text= document.createTextNode('This is a paragraph');
div.appendChild(paragraph);
let divi = document.getElementsByClassName('.divi');
divi.appendChild(div);

