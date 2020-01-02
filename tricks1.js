 console.log(2 + '2'); // 22 + is arithmatic and concatination operator

 console.log(2 - '2'); // - is only arithmetic operator

 console.log(1 < 2 < 3); // true 1<2  =true and true<3 true is 1 and 1<3
 console.log(1 < 2 > 3); // false 1<2  =true and true<3 true is 1 and 1<3

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


 function abc() {
     return {
         message: "hello how r u"
     }
 }

 console.log(abc());

 //################33

 //Array [1,2,2,3] to [1,2,3]

 let array = [1, 2, 2, 3];
 let unique = [...new Set(array)];
 console.log(unique);
 //################
 //CallBack
 function greeting(name) {
     console.log(`Hello ${name}`);
 }

 function processName(cb) {
     let name = prompt(`Please enter name`);
     cb(name);
 }
 processName(greeting);

 //########33
 //Promise has two status resolve or reject

 function whetherPositiveNumber(number) {
     return new Promise((resolve, reject) => {
         if (number >>> 0 === parseFloat(number)) {
             console.log(`inside if condition`)
             resolve(`${number} is a positive interger`)
         } else {
             console.log(`inside else condition`)
             //reject(Error(`${number} is a not positive interger`))
             reject((`${number} is a not positive interger`))
         }
     })
 }
 whetherPositiveNumber(-44)
     .then(function (op) {
         console.log(op);
     }, function (err) {
         if (err) {
             console.log(err);
             return 'error'
         }
     })
 //console.log(check);

 ///////////
 const ary = [1, 2, 3, 6, 7, 11, 13];
 console.log(`sorting array ${ary.sort((a,b)=>{
    return a<b;
 })}`);

 const ary1 = [1, 2, 3];
 //ary1[-1] = 40;
 console.log(`index of arry at 1000 is ${ary1.indexOf(1000)}`)

 let ary2 = [1, 2, 3] + [4, 5, 6];
 console.log(`ary2 value is ${ary2}`);

 //Call bind apply
 var obj = {
     num: 2
 };
 var addToThis = function (a, b, c) {
     return this.num + a + b + c;
 }
 console.log("#####3");
 console.log(addToThis.constructor);
 console.log(addToThis.prototype);
 console.log(addToThis.call(obj, 1, 2, 3));

 ///////// check given array is an array

 let array1 = [];
 console.log(typeof array1); //object
 console.log(array1.constructor);

 ///
 console.log(`compare Nan with Nan`);
 console.log(NaN === NaN);
 let val = 3;
 console.log(NaN.constructor);

 //Find highest and lowest number in given array
 /**
  * a value 5 and b value 6 tricks1.js:124:14
a value 5 and b value 3 tricks1.js:124:14
a value 3 and b value 40 tricks1.js:124:14
a value 5 and b value 40 tricks1.js:124:14
a value 6 and b value 40 tricks1.js:124:14
a value 3 and b value 32 tricks1.js:124:14
a value 5 and b value 32 tricks1.js:124:14
a value 6 and b value 32 tricks1.js:124:14
a value 40 and b value 32 tricks1.js:124:14
a value 3 and b value 21 tricks1.js:124:14
a value 5 and b value 21 tricks1.js:124:14
a value 6 and b value 21 tricks1.js:124:14
a value 32 and b value 21 tricks1.js:124:14
a value 3 and b value 56 tricks1.js:124:14
a value 5 and b value 56 tricks1.js:124:14
a value 6 and b value 56 tricks1.js:124:14
a value 21 and b value 56 tricks1.js:124:14
a value 32 and b value 56 tricks1.js:124:14
a value 40 and b value 56 tricks1.js:124:14
a value 3 and b value 70 tricks1.js:124:14
a value 5 and b value 70 tricks1.js:124:14
a value 6 and b value 70 tricks1.js:124:14
a value 21 and b value 70 tricks1.js:124:14
a value 32 and b value 70 tricks1.js:124:14
a value 40 and b value 70 tricks1.js:124:14
a value 56 and b value 70 tricks1.js:124:14
a value 3 and b value 81 tricks1.js:124:14
a value 5 and b value 81 tricks1.js:124:14
a value 6 and b value 81 tricks1.js:124:14
a value 21 and b value 81 tricks1.js:124:14
a value 32 and b value 81 tricks1.js:124:14
a value 40 and b value 81 tricks1.js:124:14
a value 56 and b value 81 tricks1.js:124:14
a value 70 and b value 81
  */

 //let array2 = [5, 6, 3, 40, 32, 21, 56, 70, 81];
 let array2 = [5, 7, 8, 6, 4];
 array2.sort((a, b) => {
     console.log(`a value ${a} and b value ${b}`)
     return a > b;
 });


 let array3 = [10, 11, 12];
 let iterator = array3[Symbol.iterator]();
 console.log(iterator.next()); //Object { value: 10, done: false }
 console.log(iterator.next()); //Object { value: 11, done: false }
 console.log(iterator.next()); //Object { value: 12, done: false }
 console.log(iterator.next()); //Object { value: undefined, done: true }

 //Generator

 function* generateNumber() {
     yield 'manoj';
     yield 1 / 0;
 }
 let iterator1 = generateNumber();
 console.log(iterator1.next());
 console.log(iterator1.next());
 console.log(iterator1.next());

 function* infiniteMaker() {
     let i = 1;
     while (true) {

         yield i + 1;
         i++;
     }
 }
 let iterator2 = infiniteMaker();
 console.log(iterator2.next());
 console.log(iterator2.next());
 console.log(iterator2.next());

 //For ...of and for .. in works on array because array is iteratble
 //but For ...of not on object
 array4 = ['sun', 'mon', 'tue', 'wed', 'thus', 'fri', 'sat'];
 for (let month of array4) {
     console.log(month);
 }

 for (let index in array4) {
     console.log(`index is ${index} and value is ${array4[index]}`)
 }

 let obj1 = {
     'name': 'manoj',
     empid: 9828
 };
 // For ...of not work on object TypeError: obj1 is not iterable
 for (let emp in obj1) {
     console.log(`index is ${emp} and value is ${obj1[emp]}`)
 }

 //Rest operator

 function sum(a, b) {
     return a + b;
 }
 //can pass execesive argument no error for that
 //Sum() will take only first to parameters but to work with arbatirary arguments we need rest
 //operator
 console.log(sum(1, 2, 3));

 function sum1(...args) {
     let sum = 0;
     for (val of args) sum += val;
     return sum;
 }
 console.log(sum1(1, 2, 3));
 //... Rest argument would be last argument of function

 //Spread operator
 //Suppose we wamt to find max element in array with n element
 //math.max(array5[0],array5[1],array5[2]....)
 //this can hangele with spread operator
 //array can merged with spread operator
 let array5 = [2, 5, 7, 9, 32, 44];
 let array6 = [12, 5, 2, 9];
 console.log(`max element in array ${Math.max(...array5)}`);
 console.log(`marged array is array ${[...array5,...array6]}`);

 //map, weakmap set weakset
 let map = new Map();
 map.set('name', 'manoj');
 console.log(`get value of name by map ${map.get('name')}`);
 console.log(map.has('name'));
 console.log(map.delete('name'));
 map.clear();
 console.log(map.size);

 //Set :special type of collection it has values without keys 
 //where each value occures only once
 let set = new Set();
 set.add(5);
 set.add(55);
 set.add('manoj');
 set.add(5);
 console.log(set);
 for (let val of set.entries()) {
     console.log(val);
 }
 for (val of set.keys()) {
     console.log(`keys is ${val}`);
 }
 for (val of set.values()) {
     console.log(`value is ${val}`);
 }

 //Weak map
 let emp = {
     name: 'manoj',
     empid: 9828
 };

 let map1 = new Map();
 map1.set('employee', emp);
 emp = null;
 console.log(emp);
 console.log(map1.get('employee'));

 let john = {
     name: "john"
 };
 let array7 = [john];
 john = null; //overwrite the refrence
 console.log('=======');
 console.log(array7);
 console.log('=======');

 //WeakMap
 let aman = {
     name: "manoj"
 };
 let weakmap = new WeakMap();
 weakmap.set(aman, 'amanval');
 console.log(weakmap.get(aman));
 aman = null;

 //Weakset
 let weakset = new WeakSet();
 let ashish = {
     name: "Ashish"
 };
 //weakset.set(ashish, 'ashish');

 console.log(weakmap.get(aman));

 //Find difference Between Two array
 let array8 = [1, 2, 3, 4, 5, 6, 9, 10];
 let array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let res = array9.filter(function(n) {
     return !this.has(n);
 }, new Set(array8))

 console.log('@@@@@');
 console.log(res);