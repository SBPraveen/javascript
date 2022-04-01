/*
When we have an error in our program the execution freezes at that point. So we want to gracefully handle our errors

The try statement lets you test a block of code for errors.
If the code has some errors the throw statement throws a custom errors.
The error is caught by the catch statement and it lets you handle the error.
The finally statement lets you execute code, after try and catch, regardless of the result.

=>When to use try/catch ???
Use try/catch when we are doing a web request 
(Because the website to which we are requesting the data might have some problem and may no return the data)
but now we have promises. So in general use try/catch whevever we feel some part of the code might cause some problem.    

!new Error vs Error
The function call Error(…) is equivalent to the object creation expression new Error(…) with the same arguments
*/

//* EG: 1
const convertToRs = (rupees) => {

    if((typeof rupees) === 'number'){
        return rupees*74
    }
    else{
        throw new Error("Invalid Input");
    }
};

try {
    const myValue = convertToRs('twenty');
    // const myValue = convertToRs(20);
    console.log(myValue);

} catch (error) {
    console.log(error.stack);//error.name error.message, error.stack
    console.log('Amount needs to be a number'); 
}
finally{
    console.log("Finally Code");
}


//||Custom error handling
/*
Requirement:
    If an error occurs make a log in the errorList and continue the execution
*/

class CustomError {
    constructor(){
        //error type can be ["Invalid data", "Data not found", "Internal error"]
        // errorList holds all the errors
        this.errorList = []
    }
    append(type, message, stack){
        let error = {type,message,stack}
        this.errorList.push(error)
    }
    printErrorList(){
        return this.errorList
    }
}

let customError = new CustomError()


const convertToRs1 = (rupees) => {
    if((typeof rupees) === 'number'){
        return rupees*74
    }
    else{
        let errorMessage = new Error("Invalid Input")
        customError.append("Invalid Input", errorMessage, "convertToRs1");
        return rupees
    }
};

const myValue = convertToRs1('twenty');
console.log(myValue);
console.log(customError.printErrorList());

/*
twenty
[
  {
    type: 'Invalid Input',
    message: Error: Invalid Input
        at convertToRs1 (/home/praveen/notes/javascript/tempCodeRunnerFile.js:24:28)
        at Object.<anonymous> (/home/praveen/notes/javascript/tempCodeRunnerFile.js:30:17)
        at Module._compile (node:internal/modules/cjs/loader:1103:14)
        at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
        at Module.load (node:internal/modules/cjs/loader:981:32)
        at Function.Module._load (node:internal/modules/cjs/loader:822:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
        at node:internal/main/run_main_module:17:47,
    stack: 'convertToRs1'
  }
]
*/

