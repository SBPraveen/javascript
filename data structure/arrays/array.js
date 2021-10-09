//1. length
let nos1 = ['one', 'two', 'three', 'four', 'five'];
console.log(`Length is `+nos1.length);

//2. Accesing array elements
let nos2 = ['one', 'two', 'three', 'four', 'five'];
console.log(`0th element is `+nos2[0]);
console.log(`Element at index -1 is `+nos2[-1]);//doesnt work o/p is undefined 

//3. The typeof operator returns a string indicating the type of the unevaluated operand.
//NOTE typeof is not a method it is an operator & the 'o' in typeof is not capialized 
let nos3 = ['one', 'two', 'three', 'four', 'five'];
console.log(`type of array is `+ typeof nos3);

//4. Push => Adds element to the last position of the array
let nos4 = ['one', 'two', 'three', 'four', 'five'];
nos4.push('six');
console.log(`Pushed six into the array`+ nos4);

//5. Pop => Removes the last element of the array
let nos5 = ['one', 'two', 'three', 'four', 'five'];
console.log(nos5.pop());
console.group(`Popped the last element from the array`+nos5);

//6. shift => removes an element from the begining of the array
let nos6 = ['one', 'two', 'three', 'four', 'five'];
nos6.shift();
console.log(`Shifted zero `+nos6);

//7. unshift => adds an element to the begining of the array
let nos7 = ['one', 'two', 'three', 'four', 'five'];
nos7.unshift('zero');
console.log(`unshifted zero ` + nos7);

//8. index of
let nos8 = ['one', 'two', 'three', 'four', 'five'];
console.log(`index of two is ` + nos8.indexOf('two'));

//9. splice => Removes/Adds a number of items from the index position specified. Makes changes to the orginal array
// Syntax => array.splice(index, no of items to remove)
let nos9 = ['one', 'two', 'three', 'four', 'five'];
nos9.splice(2,2); //Removes two elements from the second index of the array
console.log(`Removed two elements from the second index of the array ` +nos9)
var arr1 = [1,5,8,9];
arr1.splice(1,2,'Hi','Medium');
console.log(arr1);

//10. slice
//used to make shallow coppies of an array 
//.slice(startingIndex, endingIndex) NOTE: endingIndex is upper bound
let nos10 = ['one', 'two', 'three', 'four', 'five'];
duplicateNo1 = nos10.slice(1,3);//two,three
duplicateNo2 = nos10.slice(-2);//four,five
duplicateNo1[0] = 'twenty'
console.log(`Created a shallow copy of the main array \n` + duplicateNo1 +'\n'+ duplicateNo2 +'\n'+ nos10);









///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////






// //concat() method is used to merge two or more arrays
// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// let array3 = [16,17,18,19,20];
// let array4 = array1.concat(array2, array3);
// console.log(array4);


// nos10 = [23,5456,156,5448,8789,7977]
// const duplicate4 = Object.assign(['zero'], nos10);
// // a change in the dupliate affects the original 
// console.log(duplicate4);


// let original = ['one', 'two', 'three', 'four', 'five'];
// let duplicate1 = original.slice(0); // .slice() method
// let duplicate2 = [...original];  // spread operator
// let duplicate3 = Object.assign([],original);
// //NOTE: The first argument actually gets modified and returned 
// //So make sure to pass an empty array/object
// let duplicate4 = original.map((nos)=>{
//     return nos;
// }); //map() method
// duplicate1[0] = 'twenty';
// duplicate2[0] = 'thirty';
// duplicate3[0] = 'forty';
// duplicate4[0] = 'fifty';
// console.log(`Created a shallow copy of the main array \n` 
//             + original + `\n` +  duplicate1 +'\n'+ duplicate2 
//             +'\n'+ duplicate3 +'\n'+ duplicate4 +'\n');

// let original = [{'one':'1','two':'2'}, {'three':'3','four':'4'}, {'five':'5'}];

let original = [[1,2],[3,4]];
let duplicate1 = original.slice(0);
duplicate1[0] = [555,666];
console.log(original,`\n`,duplicate1);


// let original = [[1,2],[3,4]];
// let duplicate = JSON.parse(JSON.stringify(original));
// duplicate[1].push(5,6); 
// console.log(original,`\n`,duplicate);


// 1) Map
// Map => Used to make shallow copies
// NOTE you can also use slice method to make shallow copies but you cannot make an changes to the duplicate array(while making a shallow copy)
// but using map the elements in the duplicate array can be modified 
// MAP can also be done using the SPREAD OPERATOR
const classList = ['Sam', 'Praveen', 'Abdulla'];
const duplicateClassList = classList.map((name)=>{
    return name.toUpperCase();
})
console.log(duplicateClassList);

//loops
let nos = ['one', 'two', 'three', 'four', 'five'];

//for loop
for(let i=0; i<nos.length; i++){
    console.log(nos[i]);
}

//for of
for (let i of nos){
    console.log(i);
}

//for each => 
nos.forEach((no,index)=>{
    console.log(`index is ${index} and value is ${no}`)
})




//! Important questions 

//* Rotate a matrix string or an array
    // https://replit.com/@bgando/rotate-array-prompt
    // https://www.geeksforgeeks.org/array-rotation/
//* Given a m*n(Multi dimensional array) boolean matrix, if an element is zero set the entire row and column to zero => chess, tic tac toe etc.
    // https://replit.com/@bgando/boolean-matrix-prompt
    // https://www.geeksforgeeks.org/a-boolean-matrix-question/
//* Search for a value
    // https://replit.com/@bgando/search-for-value-prompt
    // https://www.geeksforgeeks.org/linear-search/
//* Write a function that encodes a string by turning all spaces into '%20'
    // https://www.geeksforgeeks.org/urlify-given-string-replace-spaces/
//* Merge two sorted list into one list
    // https://replit.com/@bgando/merge-sorted-arrays-prompt
    // https://www.geeksforgeeks.org/merge-two-sorted-arrays/
