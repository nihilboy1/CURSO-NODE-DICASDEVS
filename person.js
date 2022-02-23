class Person {
    constructor(name){
        this.name = name
    }

    say_my_name(){
        return `myy name is ${this.name}`
    }
}

module.exports = {
    Person: Person,
}