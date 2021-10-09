/**
  anonymous functions => functions that doesn't have a name is known as anonymous functions
  Eg: */


  // function (){
  //   console.log(`a`);
  // }
 
  /**
   The above code raises a SyntaxError: Function statements require a function name.
   so we cannot use them in function statements because we will not be able to call them without their name.
   But they can be used as IIFE
   */

   
    (function() {
    console.log('IIFE');
})();


/**
  These functions don't have their own identity.
  Anonymous functions are used in place where functions are used as values
  Eg:
*/


  var apple = function (){
    console.log(`a`);
  }
  console.log(apple)