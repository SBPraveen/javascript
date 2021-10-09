/*
? Stacks
These are ordered data structure 
Follows Last in First out order
Eg: CallStack in javascript
Operations => Push & Pop
*/


//Implementing stack data structure 
class Stack{
    constructor(){
        this._storage = {}; // we are using an object instead of an array because we need to store the index and the value 
                                                //also accessing the vaues with the help of keys is constant time operation
        this._length = 0;
/*
"_" represents private methods and variables but there is no real privacy of classes.It means that you should not use these method/variables 
(starting with "_") out of your object. Of course technically you can, but "_" means that you should not.
dont use "myStack._storage" outsiide the object
 */ 
    }
    push(value){
        this._storage[this._length] = value;
        this._length++;
    }
    pop(){
        if(this._length){
            let lastValue = this._storage[this._length-1];
            delete this._storage[this._length-1];
            this._length--;
            return lastValue;
        }
        else{
            return undefined
        }
        
        
    }
    peek(){
        if(this._length){
            return this._storage[this._length-1]
        }
    }
}

const myStack = new Stack();
console.log(myStack);

myStack.push('one');
console.log(myStack);
myStack.push('two');
console.log(myStack);
myStack.push('three');
console.log(myStack);
myStack.push('four');
console.log(myStack);

myStack.pop();
console.log(myStack);



// ! important questions

//*Q1. Use an array to implement 3 stacks 
    // https://replit.com/@bgando/k-stacks-one-array-prompt
    // use subarrays => [[  1,   23,    5],   [2,     5,   89],[undefined,52,4],[undefined,8,undefined]] or use pointers
    //                       S1[0] S2[0] S3[0]  S1[1] S2[1] S3[1] 
    // https://replit.com/@bgando/k-stacks-one-array-solution

//*Q2. Implement getMin() or getMax() method on your stack 
    // https://replit.com/@bgando/min-stack-prompt
    // Every time we input check whether the input is greater/lesser than the than the value in the getMin() / getMax() method then update the value 
    // https://replit.com/@bgando/min-stack-solution

//*Q3 Sort a stack with the min value on the top. We can use another stack as a buffer.
    // https://replit.com/@bgando/sort-stack-prompt
    // This is similar to the tower of hennoi problem.
    //https://replit.com/@bgando/sort-stack-solution

//*Q4 Bracket validator 
     // https://replit.com/@bgando/bracket-validator-prompt 
    // use a stack
    // https://replit.com/@bgando/bracket-validator-solution