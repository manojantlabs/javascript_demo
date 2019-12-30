let a = function () {
     {
         let l = 'let';
         var v = 'var';

     }

     console.log(`v value ${v}`)
     //console.log(`l value ${l}`)
 }
 a();

 //IIFE
 (function () {
     let l = 'let';
     var v = 'var';

 })();

 //console.log(`v value ${v}`)
 //console.log(`l value ${l}`)