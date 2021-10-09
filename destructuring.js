//arrays
const items = ['banana', 'chocolate', 'biscuits', 'apples', 'carrot'];
[item1, item2, ...rest] = items;
console.log(item1 + '\n' + item2 + '\n' + rest);

//swap two variables without using a third variable 
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b);

//objects
const user = {
name: 'asdf',
age: 20,
gender: 'male',
native: 'India',
};
//NOTE: variable names inside the curly brackets and the property names(inside the object) must be the same
const { name, age, ...rest} = user;
console.log( name, age, rest);