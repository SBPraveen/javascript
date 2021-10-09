
/*
? Queues
These are ordered data structure 
Follows First in First out order
Eg: Message Queue in javascript
Operations => Enqueue & Dequeuen 
*/

class Queue{
    constructor(){
        this._storage = {};
        this._beginning = 0;
        this._length = 0;
    }
    enqueue(value){
        this._storage[this._length] = value;
        this._length++;
    }
    dequeue(){
        if(this._length){
            delete this._storage[this._beginning];
            this._beginning += 1;
            this._length--;
        }
        
    }
    peek(){
        return this._storage[this._beginning]
    }
}

let myQueue = new Queue();

myQueue.enqueue('one');
myQueue.enqueue('two');
myQueue.enqueue('three');
myQueue.enqueue('four');
console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

console.log(myQueue.peek());




// ! important questions

//*Q1. Create a queue using 2 stacks
    //https://replit.com/@bgando/queue-two-stacks-prompt
    // Let the two stacks be A and B
    //  Push and enqueue are almost the same (use Stack-A). Problem comes during dequeue since pop and dequeue are different.
    // So for dequeue pop all the values from stack-A into stack-B (The order in which the value are stored gets reversed)
    // Now when we pop from stack-B the funcionality will be similar to dequeue
    // https://replit.com/@bgando/queue-two-stacks-solution

