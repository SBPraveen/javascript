/*
Generator Functions => 
1. Lets you pause and resume function execution
2. Simplifies the creation of iterators
*/

function* exampleCode(){
    let a = 1;
    a++; //We are performing some actions
    yield a; //After yield the function execution is paused until further call
    a++;
    yield a;
    a++;
    yield a;
    a++;
    return a;//return indicates the last value('done' is true). After return no  yield will work. 
//Also when used as a iterator ('done' is true for return) thus return will not be printed
//(because iterator will only print objects whose 'done' is false).
}

//we can pause and resume the function execution
let example = exampleCode();
console.log(example.next());
console.log(example.next().value);
console.log(example.next().done);
console.log(example.next());

//can be used as a iterator
for (let i of exampleCode()){
    console.log(i); //for loop runs until done is true 
}

//Eg 1:
function* createCube(){
    n=0;
    while(true){
        n++;
        yield n*n*n;
    }
}

let cube = createCube();
console.log(cube.next().value);
console.log(cube.next().value);
console.log(cube.next().value);
console.log(cube.next().value);
console.log(cube.next().value);


//Eg 2:
function* createCube(max){
    n=0;
    while(n<max){
        n++;
        yield n*n*n;
    }
}

for (let i of createCube(10)){
    console.log(i)
}

// usecase 1 => pick random elements in an array but shouldn't pick an element twice
function* pickRandom(names){
    let duplicateNames = [];
    duplicateNames = [...names];
    while(duplicateNames.length > 0){
        let randomIndex = Math.floor(Math.random()*duplicateNames.length);
        let value = duplicateNames[randomIndex];
        duplicateNames.splice(randomIndex,1);
        yield value;
    }
}

arrayNumber = ['one', 'two', 'three', 'four', 'five', 'six'];

let randomNames = pickRandom(arrayNumber);
for (let i of randomNames){
    console.log(i);
}
console.log(arrayNumber);