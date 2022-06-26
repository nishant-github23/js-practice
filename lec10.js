var x = document.getElementById('mydiv');
x.style.color='red';
x.className='myclass';
x.innerText='js tutorial';
x.innerHTML = '<h1>NISHANT SHARMA LEARNING</h1>';
console.log(x);

//query selector
document.querySelector('#myid'); // it will return the first element matches
document.querySelector('.myclass');
document.querySelector('div');

//for selecting all we can use .querySelectorAll() -> it will return a node list object 

//accessing elements by tagname

var tag = document.getElementsByTagName('article')
console.log(tag.length);