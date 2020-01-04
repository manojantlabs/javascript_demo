//Promise is a contract that either resolve or reject
//promise are used to avoid callback hell
//Below is a simple function to check greatest parameter (a,b)
//if a is greater than b then promise resolve else reject

const addition = (a, b) => {
    return new Promise(function (resolve, reject) {
        if (a > b) {
            resolve('a is greater than b')
        } else {
            reject('a is less than b');
        }
    })
}
//console.log(addition(2,3));
addition(2, 3).then((msg) => {
    console.log(`inside resolve ${msg}`)
}).catch((err) => {
    console.log(`inside catch ${err}`);
})