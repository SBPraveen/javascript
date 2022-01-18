//conditionally add key value pair
// the student obj will have a rank only if he had passed
let pass1 = false
let pass2 = true
let student = {
    name: "Praveen",
    ...(pass1 && {rank1 : 1}),
    ...(pass2 && {rank2 : 2})
}
console.log(student)
//{ name: 'Praveen', rank2: 2 }