const length = 4;
let number = [];

for (i = 0; i < length; i++); // for loop is terminate here so it proceed when i =4
{
    number.push(i + 1);
}

number; //[5]

// ############
//Rather than printing 1,2,3,4 it will print 4,4,4,4
let j;
for (j = 0; j < 4; j++) {
    const log = () => {
        console.log(j);
    }
    setTimeout(log,100);
}


//########
//Floating point match
//https://0.30000000000000004.com/
let val1 = 0.1;
let val2 = 0.2;
console.log(val1+val2); //Rather than printing 0.3 it will print 0.30000000000000004
////////




