//||1. conditionally add key value pair
// the order obj will have a food item only if he had passed
let pass1 = false
let pass2 = true
let student = {
    name: "Praveen",
    ...(pass1 && {rank1 : 1}),
    ...(pass2 && {rank2 : 2})
}
console.log(student)
//{ name: 'Praveen', rank2: 2 }

//||2. Traverse an object
let calcOutputData = {
    "bcdValue": 61286.90,
    "aidcValue": 1,
    "customsHealthCessValue": 1,
    "nccdValue": 1,
    "adcValue": 1,
    "swsValue": 6128.70,
    "safeguardValue": 1,
    "cvdValue": 1,
}
for(let i in calcOutputData){
    console.log(i)
}
//op => (We will get all the keys)
/*
bcdValue
aidcValue
customsHealthCessValue
nccdValue
adcValue
swsValue
safeguardValue
cvdValue
*/

//|| 3. Freeze an object(once initialized we cannot make any changes to the object)
let dataBase = {
    student: "praveen"
}
Object.freeze(dataBase)
dataBase.student = "michael"
console.log(dataBase);
// op => { student: 'praveen' }
/*
A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed.
and prevents the values of existing properties from being changed. 
*/