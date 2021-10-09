//1)
// four variables are created and assigned in a single go, separated by commas.
let a = 10, b = 'Praveen', c = {}, d = undefined;
console.log(typeof a, typeof b, typeof c, typeof d); 

//2)
//refer destructuring

//3)
let q = 3;
if (q<5) var x = {greeting: 'hi there'};
console.log(x);

//4)
//increment operator 
let a = 10, b = 20;
console.log(++a);
console.log(b++);
b += 2;
console.log(b);

//5)
//convert a number to a string
let a = 6;
console.log(typeof a);//numer
a = a + "";
console.log(typeof a); //string

//6)
//short form of while loop condition
arr = [1,2,3,4,5,6,7,8,9];
while(arr.length){            // instead of => while(i<arr.length)
    console.log(arr.pop());
} 

// 7) shortform of console.log
const print = console.log;
print(`a`);