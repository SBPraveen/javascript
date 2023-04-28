# this
The "this" keyword refers to the global object(In case of browser it refers to the window object).  

**Note**:
Run all the below code in the browser and not in a node environment.  


```js
console.log(this)
// op => Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
```
# call
```js
let name1 = {
    firstName:"Praveen",
    lastName:"SB",
    logger: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
let name2 = {
    firstName:"Resika",
    lastName:"SB",
    logger: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
name1.logger()
name2.logger()
/*
op => 
Praveen SB
Resika SB
 * /
```
Instead of having the logger function to each object we can have a common logger function and it can be shared between the two objects.  
This can be done using call, apply, bind
```js
let name1 = {
    firstName:"Praveen",
    lastName:"SB",
    
}
let name2 = {
    firstName:"Resika",
    lastName:"SB",
}
let logger = function(age, gender){
        console.log(this.firstName + " " + this.lastName + ". My age is "+ age+ ". My gender is "+ gender)
    }
logger.call(name1, 21, "male")
logger.call(name2, 26, "female")
/*
op => 
"Praveen SB. My age is 21. My gender is male"
"Resika SB. My age is 26. My gender is female"
*/
```
Here the first argument to the call function is the reference to the this variable.  
# apply
The only difference between call and apply is that in the apply method we send all the arguments to the function as an array.

```js
let name1 = {
    firstName:"Praveen",
    lastName:"SB",
    
}
let logger = function(age, gender){
        console.log(this.firstName + " " + this.lastName + ". My age is "+ age+ ". My gender is "+ gender)
    }
logger.apply(name1, [21, "male"])
/*
op =>
"Praveen SB. My age is 21. My gender is male"
*/
```

# bind
The bind method is similar to the call method but it returns a method(which can be called later) instead of invoking the function.
```js
let name1 = {
    firstName:"Praveen",
    lastName:"SB",
    
}
let logger = function(age, gender){
        console.log(this.firstName + " " + this.lastName + ". My age is "+ age+ ". My gender is "+ gender)
    }
let boundMethod = logger.bind(name1, 21, "male")
console.log(boundMethod)
boundMethod()
/*
op => 
[Function: bound logger]
Praveen SB. My age is 21. My gender is male
*/
```

# polyfill for the bind method
