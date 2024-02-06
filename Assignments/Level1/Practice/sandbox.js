class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printProfile(){
        if (this.age < 18){
            console.log(this.name + "'s age: " + this.age + " (Minor)");
        } else {
            console.log(this.name + "'s age: " + this.age);
        }
    }
}

console.log(Person);

const person1 = new Person("Matthew", 25);
const person2 = new Person("Mark", 23);
const person3 = new Person("Luke", 30);
const person4 = new Person("John", 29);
const person5 = new Person("Peter", 27);
const person6 = new Person("James", 16);


console.log(person1);

person1.printProfile();

person5.printProfile();

person6.printProfile();