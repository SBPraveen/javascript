/*
Scope => Tells JS where to look out for a specific variable, functions, ojects etc
*/
var teacher = "kyle";
function school(){
    teacher = "Suresh";
    topic = "React";
    console.log(teacher, topic, "Inside school function");
}

school();
console.log(teacher, topic, "global scope");//Here our output contains React because we are in sloppy mode
