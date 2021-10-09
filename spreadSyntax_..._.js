//spread Operator(denoted by three dots)
/*
The spread syntax is an operator which expands iterable(eg an array)  it into individual elements.
Commonly used to make shallow copies of an JS objects.
Unsuitable for copying multidimensional array 
*/

let array1 = ['h','e','l','l','o'];
let array2 = ['Paveen',...array1,"Welcome"];
console.log(array2)

//Best useCase

//useCase1
//The Math the object of Javascript does not take in a single array as an argument 
//but with the spread syntax, the array is expanded into a number of arguments with just one line of code.
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(Math.max(numbers));//returns NaN
console.log(Math.max(...numbers));//returns 9

//useCase2
let nameIs = "Praveen";
let letters = [...nameIs.toUpperCase()];
console.log(letters);

//useCase3
function sum(x,y,z){
    return(x+y+z);
}
arr = [1,2,3];
console.log(sum(...arr));

//objects

//eg1
const circle = {
    radius:10,
    thickness:2,
}
const colouredCircle = {
    ...circle,
    color: 'red',
}
console.log(colouredCircle);

//eg2
const circle = {
    radius:10,
    circleStyle:{
        thickness:2,
        color:'red'
    }
    
}
const colouredCircle = {
    ...circle
}
colouredCircle.color= 'blue';
console.log(colouredCircle);