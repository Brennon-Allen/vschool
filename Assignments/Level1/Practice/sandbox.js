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

//SP 15.5 PRACTICE
//Modifying an elements text

/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

var hText = document.querySelector("#header").textContent;
document.querySelector("#bodyText").textContent = hText;



var headerClasses = document.querySelector("#header").classList;
var bodyClasses = document.querySelector("#bodyText").classList;

headerClasses.add("newPost");
bodyClasses.add("newPost");

var header = document.getElementById("header");
header.style.color = "red";
header.style.fontSize = "3em";
header.style.animationDelay = 5;


console.log(headerClasses);
console.log(bodyClasses);


//How might you use a for loop in conjunction
//with the DOM methods for create elements?

//1 Get user input for number of squares
//2 store id.textContent in a variable
//3 add(square) in a for loop with the user input as the variable for length

var numSquares = document.getElementById("num-squares")
console.log(numSquares)

document.getElementById("submit-button").addEventListener("click", generateSquares);


function generateSquares(event){
    console.log(event);
    event.preventDefault();
    for(i = 0; i < numSquares.value; i++){
        const square = document.createElement("div");
        square.style.width = "50px";
        square.style.height = "50px";
        square.style.backgroundColor = "blue";
        document.body.appendChild(square);
        console.log(i);
    }
    
    console.log("it works");
}


/*
You're starting your business as a strictly online DJ (DJ JS) and you want to start by creating a website where people can change the color of a square on the page by interacting with different HTML Events.

The square's color will change as follows:

- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).
- You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color. Check out the key and keyCode property of `e.target`

Attempt these requirements. If you become discouraged, included are things to consider.

Take a minute to think through how you would implement all of these event listeners.

You will need a different event for each event. Keyboard events are triggered by any key.

`.addEventListener` will be called on your square 6 times.
*/