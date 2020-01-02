//
// function will check variable scope
// here a has local scope but b has copy of a
// so b has window scope.
//

function checkType() {
    let a = b = 10;
    a++;
    return a;
}

checkType();

console.log(typeof (a)); // undefined
console.log(typeof (b)); // Number




