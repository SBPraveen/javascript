/*
||Constructor functions:
    A constructor function is used to create an object.
    An object can be created by using the object literal(ie. => {}) or by using the constructor function
    *To create an object from the constructor function use the new keywords
    The constructor function looks very similar to a normal function the only difference is that the constructor function's name should be capitalized

?When to use the constructor function to create an object??
    Object literals can create only one object whereas the constructor function can create multilple objects using the same piece of code.

?Difference between a constructor and a class ??
    Both are similar in the following manner:
        1. Use prototypal inheritance system
        2. Used to create object using the new keyword
    Difference:
        Classes can have private fields and mehods whereas this is not possible in the constructor function.
*/
//? Eg:
function person (name, age){
    this.name = name
    this.age = age
    this.info = () => {
        return `${this.name} <= name and ${this.age} <= age`
    }
}
let person1 = new Person("praveen",22)
let person2 = new Person("naveen",32)
console.log(person1);
//op => Person { name: 'praveen', age: 22, info: [Function (anonymous)] }
console.log(typeof person1);
//op => object
console.log(person1.name);
//op => praveen
console.log(person1.info());
//op => praveen <= name and 22 <= age
console.log(person2.age);
//op => 32

let constructorFunction = () => {}
export default constructorFunction
