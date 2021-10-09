//Eg1
//Normal Function
function sum(a,b){
    return a+b;
}
//Arrow Function
let sum = (a,b) => a+b
console.log(sum(1,2))


//Eg2
//Normal Function
function isPositive(number){
    return number>=0
}
//Arrow Function
let isPositive = (number) => number>=0
console.log(isPositive(-10));


/**
 * ! NOTE IMPORTANT
 *  Does not have its own bindings to this or super, and should not be used as methods.
 *  Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
*   Can not be used as constructors.
*   Can not use yield, within its body.
 */

//Eg3
class Person{
    constructor(name){
        this.name = name
    }
    printArrow(){
        setTimeout(()=>{
            console.log('Arrow '+this.name)//Arrow BOB                      =>eqn1
        }, 100)
    }
    printFunction(){
        setTimeout(function(){
            console.log('Function '+this.name)//Function undefined          =>eqn2
        }, 100)
    }
}
let person = new Person('BOB');
person.printArrow();
person.printFunction();

/**
 * * INFERENCE:
        In eqn2 we get undefined because the 'this' operator at that instance points to the window whereas in eqn1 we get BOB 
        since arrow functions doesn't have its own this operator.
        This is because functions defined wih the keyword function has their own 'this' whereas arrow functions 
 */