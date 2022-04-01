/*
? Classes
Classes are a template for creating objects
 */

//!An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
const p = new Rectangle(); // ReferenceError
class Rectangle {}


//Eg2 => Accessing a method from another method inside the class  -> use "this"
class Mango{
    constructor(){
        this.name = "mangoes";
    }
    hii(){
        console.log(this.name)
    }
    bybyeee(){
        this.hii();
    }
}
let mango = new Mango();
mango.bybyeee();

//||Private methods and 
//It is possible to create private properties and methods in JS by prefixing the methods and the properties with #  

class MyClass{
    #private 
    constructor(){
        this.public = "Public"
        this.#private = "Private";
    }
    #privateFunction(){
        console.log("Hii this is ", this.public);
        console.log("Hii this is ", this.#private);
    }
    publicFunction(){
        console.log("Hii this is ", this.public);
        console.log("Hii this is ", this.#private);
    }
}
let myClass = new MyClass();
myClass.publicFunction();
/*
Hii this is  Public
Hii this is  Private
*/
console.log(myClass.public);
//Public
//! console.log(myClass.#private);
//SyntaxError
//! myClass.#privateFunction()
//SyntaxError