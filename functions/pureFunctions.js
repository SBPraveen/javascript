/**
 Pure Functions => given a same input it will always return the same output
                => produce no side effects. Eg: no mutating inputs(if array is passed as an argument change inside the function also affects the original)
                => No input output operations
Advantages:
    =>Speeds up the execution -> Since the output is deterministic (Eg:0) we can make use of Memoization
        Memoization is a technique used to speed up the execution by storing the reults of the function call and returning the cached results
                when the same input occurs again 
    =>Easier to Test
    => No side effects
Disadvantages:
    => We cannot affect anything outside the function. Thus no input output operations,no DOM manipulation 
        we shouldn't call databases, shouldn't access files etc 

Note: If a pure function calls a pure function this isn’t a side effect and the calling function is still pure.
 */


//Example: 0
const squaring = (x) => x**2;
console.log(squaring(2));
console.log(squaring(3));
console.log(squaring(4));



//Example: 1

//Impure functions
const array = [1,2,3]
function addArray(elementToAdd){
    array.push(elementToAdd);
}
addArray(4)
console.log(array);
/**
 This is an impure function since it affects an element(array) outside the function
 */


 //Example: 2
 //Pure Functions
 const array = [1,2,3]
 function addArray(array, elementToAdd){
     return [...array, elementToAdd]
 }
 console.log(addArray(array,4))
 console.log(array);
 /**
 This is a pure function since it didn't affect the array outside the function
 */


 //Example: 3
  //Impure Function
  const array = [1,2,3]
  function addArray(array, elementToAdd){
      return [...array, elementToAdd, Math.random()]
  }
  console.log(addArray(array,4))
  console.log(array);
   /**
 This is an impure function since e3ach and everytime we call this function we get different results
 */

 //* Conclusion
 /**
  We can mix pure and impure functions and that’s perfectly fine.
  Not all functions need to be , or should be, pure. 
  For example, an event handler for a button press that manipulates the DOM is not a good candidate for a pure function. 
  But, the event handler can call other pure functions which will reduce the number of impure functions in your application.
  */