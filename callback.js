//CallBack
//https://codepen.io/manoj815/pen/OJPxgoO?editors=0011#0


 function greeting(name) {
     console.log(`Hello ${name}`);
 }

 function processName(cb) {
     let name = prompt(`Please enter name`);
     cb(name);
 }
 processName(greeting);