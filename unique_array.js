//Array [1,2,2,3] to [1,2,3]

 let array = [1, 2, 2, 3];
 let unique = [...new Set(array)];
 console.log(unique);