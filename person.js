class Person {
    constructor(name){
        this.name = name
    }

    say_my_name(){
        return `my name is ${this.name}`
    }
}

module.exports = {
    Person: Person,
}