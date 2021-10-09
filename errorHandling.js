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
*/


const convertToRs = (rupees) => {

    if((typeof rupees) === 'number'){
        return rupees*74
    }
    else{
        throw Error("Invalid Input");
    }
};

try {
    const myValue = convertToRs('twenty');
    // const myValue = convertToRs(20);
    console.log(myValue);

} catch (error) {
    console.log(error);//error.name error.message, error.stack
    console.log('Amount needs to be a number');
    
}
finally{
    console.log("Finally Code");
}
