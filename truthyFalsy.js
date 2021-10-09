/**
 Falsy Values => values when we try to convert to boolean becomes false
    0 
    "" 
    null
    NaN
    false
    undefined
everything else is considered as a Truthy Value eg =>
"foo"
23
{a:1}
[1,3]
true
function(){.....}
*/
 console.log(Boolean(NaN));
 console.log(!! 23) // Double exclamation marks an be used to convert a value to boolean

