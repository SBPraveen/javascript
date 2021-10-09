/**
In JavaScript, there are two kinds of object properties:
** Data properties
Eg:
    const student =  {
        firstName = "Praveen" //Data property
    }
** Accessor properties
    Accessor properties are methods that get or set the value of an object. They are of two types
        -> get - access the properties of an object. get keyword is used
        -> set - change the properties of an object. set keyword is used
 */


//Getters

let student = {
    firstName : "Praveen",
    get studentName(){
        return this.firstName;
    }
}

console.log(student.firstName);//directly accessing
console.log(student.studentName);//using getter
//! console.log(student.studentName()); don't use brackets because it is a property like array.length


//Setters
let student1 = {
    firstName1 : "SB",
    set changeName(newName){
        this.firstName1 = newName;
    }
}

console.log(student1.firstName1);
student1.changeName = "Praveen"
console.log(student1.firstName1);

//Example1

const person  = {
    firstName2: 'SB',
    lastName2: "Praveen",
    get fullName(){
        return(`${this.firstName2} ${this.lastName2}`);
    },    //! add commas
    set fullName(personName){
        const parts = personName.split(' ');
        this.firstName2 =parts[0];
        this.lastName2 = parts[1]
    }

}
console.log(person.fullName);

person.fullName = "MS Dhoni";

console.log(person.fullName);