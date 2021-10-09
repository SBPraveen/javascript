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