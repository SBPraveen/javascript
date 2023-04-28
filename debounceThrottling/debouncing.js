let input = document.getElementById("search-bar")
input.onkeyup = (event) => {
    // apiCallFunction(event)
    debounce(apiCallFunction)
}

const debounce = (fn,delay) =>{
    let timer
    return function(args){
        const context =this
        if(timer)
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(context, args)
        }, 1000);
    }
}

const apiCallFunction = (event) => {
    console.log("API called => ", event.target.value, " 💣");
 }




//||args
function sum(argsArray){
    //reduce takes two parameters a callback function(accumulator stores the sum ) and the accumulator initial value( if not given it is automatically initialised to 0)
    let sum = argsArray.reduce((accumulator, current)=> accumulator + current,0)
    return sum
}
function a(){
    let args = [...arguments]//arguments is array like so converting it to an array
    console.log(args);
    return sum(args)
}

console.log(a(1,2,3));
