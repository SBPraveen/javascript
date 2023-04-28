function Boys(names, age){
    this.names = names
    this.age = age
}

Boys.prototype.getAge = function() {
    console.log("hiii" + this.names)
}

let boy1 = new Boys("SB", 24)
console.log(boy1.getAge())

function Girls(names, age, weight){
    Boys.call(this, names, age, weight)
    this.weight = weight
}

Girls.prototype = Object.create(Boys.prototype)

let girl2 = new Girls("GV", "22", 33)
console.log(girl2)